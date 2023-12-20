// This code is a Qiskit project.
//
// (C) Copyright IBM 2023.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.

import { isEmpty, keyBy, keys, orderBy } from "lodash";
import { getLastPartFromFullIdentifier } from "../stringUtils";
import { PythonObjectMeta } from "./PythonObjectMeta";
import { Pkg } from "../sharedTypes";

type TocEntry = {
  title: string;
  url?: string;
  children?: TocEntry[];
};

type Toc = {
  title: string;
  subtitle?: string;
  children: TocEntry[];
  collapsed?: boolean;
};

export function generateToc(
  pkg: Pkg,
  results: Array<{ meta: PythonObjectMeta; url: string }>,
) {
  const releaseNotesUrl = pkg.historical
    ? `/api/${pkg.name}/${pkg.versionWithoutPatch}/release-notes`
    : `/api/${pkg.name}/release-notes`;
  const nestModule = pkg.tocOptions?.nestModule ?? (() => true);
  const resultsWithName = results.filter(
    (result) => !isEmpty(result.meta.python_api_name),
  );

  const modules = resultsWithName.filter(
    (result) => result.meta.python_api_type === "module",
  );
  const items = resultsWithName.filter(
    (result) =>
      result.meta.python_api_type === "class" ||
      result.meta.python_api_type === "function" ||
      result.meta.python_api_type === "exception",
  );

  const tocChildren: Toc["children"] = [];

  if (modules.length > 0) {
    const tocModules = modules.map(
      (module): TocEntry => ({
        title: module.meta.python_api_name!,
        url: module.url,
      }),
    );
    const tocModulesByTitle = keyBy(tocModules, (toc) => toc.title);
    const tocModuleTitles = keys(tocModulesByTitle);

    // Add items to modules
    for (const item of items) {
      if (!item.meta.python_api_name) continue;
      const itemModuleTitle = findClosestParentModules(
        item.meta.python_api_name,
        tocModuleTitles,
      );
      const itemModule = itemModuleTitle
        ? tocModulesByTitle[itemModuleTitle]
        : undefined;
      if (itemModule) {
        if (!itemModule.children) itemModule.children = [];
        const itemTocEntry: TocEntry = {
          title: getLastPartFromFullIdentifier(item.meta.python_api_name!),
          url: item.url,
        };
        itemModule.children.push(itemTocEntry);
      }
    }

    // Nest modules
    const nestedTocModules: TocEntry[] = [];
    for (const tocModule of tocModules) {
      if (!nestModule(tocModule.title)) {
        nestedTocModules.push(tocModule);
        continue;
      }

      const parentModuleTitle = findClosestParentModules(
        tocModule.title,
        tocModuleTitles,
      );
      const parentModule = parentModuleTitle
        ? tocModulesByTitle[parentModuleTitle]
        : undefined;
      if (parentModule) {
        if (!parentModule.children) parentModule.children = [];
        parentModule.children.push(tocModule);
      } else {
        nestedTocModules.push(tocModule);
      }
    }

    // Sort children and create overview page
    for (const tocModule of tocModules) {
      if (tocModule.children && tocModule.children.length > 0) {
        tocModule.children = [
          { title: "Overview", url: tocModule.url },
          ...orderEntriesByChildrenAndTitle(tocModule.children),
        ];
        delete tocModule.url;
      }
    }

    tocChildren.push(...orderEntriesByTitle(nestedTocModules));
  }

  const releaseNotesEntry: TocEntry = {
    title: "Release notes",
  };
  if (pkg.releaseNoteEntries.length) {
    releaseNotesEntry.children = pkg.releaseNoteEntries;
  } else {
    releaseNotesEntry.url = releaseNotesUrl;
  }
  tocChildren.push(releaseNotesEntry);

  const toc: Toc = {
    title: pkg.title,
    children: tocChildren,
  };
  if (pkg.tocOptions?.collapsed) {
    toc.collapsed = true;
  }
  return toc;
}

function findClosestParentModules(id: string, possibleParents: string[]) {
  const idParts = id.split(".");
  for (let i = idParts.length - 1; i > 0; i--) {
    const testId = idParts.slice(0, i).join(".");
    if (possibleParents.includes(testId)) {
      return testId;
    }
  }
}

function orderEntriesByTitle(items: TocEntry[]) {
  return orderBy(items, [(item) => item.title.toLowerCase()]);
}

function orderEntriesByChildrenAndTitle(items: TocEntry[]) {
  return orderBy(items, [
    (item) => (isEmpty(item.children) ? 0 : 1),
    (item) => item.title.toLowerCase(),
  ]);
}
