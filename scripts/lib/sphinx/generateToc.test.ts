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

import { describe, expect, test } from '@jest/globals';
import { generateToc } from './generateToc';

describe('generateTocFromPythonApiFiles', () => {
  test('generate a toc', () => {
    const toc = generateToc({
      pkg,
      results: [
        { meta: {}, url: '/docs/runtime' },
        {
          meta: {
            python_api_type: 'module',
            python_api_name: 'qiskit_ibm_runtime',
          },
          url: '/docs/runtime/qiskit_ibm_runtime',
        },
        {
          meta: {
            python_api_type: 'module',
            python_api_name: 'qiskit_ibm_runtime.options',
          },
          url: '/docs/runtime/qiskit_ibm_runtime.options',
        },
        {
          meta: { python_api_type: 'class', python_api_name: 'Sampler' },
          url: '/docs/runtime/qiskit_ibm_runtime.Sampler',
        },
        {
          meta: { python_api_type: 'method', python_api_name: 'Sampler.run' },
          url: '/docs/runtime/qiskit_ibm_runtime.Sampler.run',
        },
        {
          meta: { python_api_type: 'class', python_api_name: 'Estimator' },
          url: '/docs/runtime/qiskit_ibm_runtime.Estimator',
        },
        {
          meta: { python_api_type: 'class' },
          url: '/docs/runtime/qiskit_ibm_runtime.NoName',
        },
        {
          meta: { python_api_type: 'class', python_api_name: 'Options' },
          url: 'qiskit_ibm_runtime.options.Options',
        },
        {
          meta: { python_api_type: 'function', python_api_name: 'runSomething' },
          url: 'qiskit_ibm_runtime.runSomething',
        },
        {
          meta: {
            python_api_type: 'module',
            python_api_name: 'qiskit_ibm_runtime.single',
          },
          url: '/docs/runtime/qiskit_ibm_runtime/single',
        },
      ],
    });

    expect(toc).toMatchInlineSnapshot(`
      {
        "children": [
          {
            "children": [
              {
                "title": "Overview",
                "url": "/docs/runtime/qiskit_ibm_runtime",
              },
              {
                "title": "qiskit_ibm_runtime.options",
                "url": "/docs/runtime/qiskit_ibm_runtime.options",
              },
              {
                "title": "qiskit_ibm_runtime.single",
                "url": "/docs/runtime/qiskit_ibm_runtime/single",
              },
            ],
            "title": "qiskit_ibm_runtime",
          },
          {
            "title": "Changelog",
            "url": "https://github.com/qiskit_ibm_runtime/releases",
          },
        ],
        "subtitle": "v1.0.0",
        "title": "Qiskit Runtime IBM Client",
      }
    `);
  });

  test('nest modules', () => {
    const toc = generateToc({
      pkg,
      results: [
        {
          meta: {
            python_api_type: 'module',
            python_api_name: 'qiskit_ibm_runtime',
          },
          url: '/docs/runtime/qiskit_ibm_runtime',
        },
        {
          meta: {
            python_api_type: 'module',
            python_api_name: 'qiskit_ibm_runtime.options',
          },
          url: '/docs/runtime/qiskit_ibm_runtime.options',
        },
        {
          meta: { python_api_type: 'class', python_api_name: 'qiskit_ibm_runtime.Estimator' },
          url: '/docs/runtime/qiskit_ibm_runtime.Estimator',
        },
        {
          meta: { python_api_type: 'class', python_api_name: 'qiskit_ibm_runtime.options.Options' },
          url: 'qiskit_ibm_runtime.options.Options',
        },
        {
          meta: {
            python_api_type: 'class',
            python_api_name: 'qiskit_ibm_runtime.options.Options2',
          },
          url: 'qiskit_ibm_runtime.options.Options2',
        },
      ],
    });

    expect(toc).toMatchInlineSnapshot(`
      {
        "children": [
          {
            "children": [
              {
                "title": "Overview",
                "url": "/docs/runtime/qiskit_ibm_runtime",
              },
              {
                "title": "Estimator",
                "url": "/docs/runtime/qiskit_ibm_runtime.Estimator",
              },
              {
                "children": [
                  {
                    "title": "Overview",
                    "url": "/docs/runtime/qiskit_ibm_runtime.options",
                  },
                  {
                    "title": "Options",
                    "url": "qiskit_ibm_runtime.options.Options",
                  },
                  {
                    "title": "Options2",
                    "url": "qiskit_ibm_runtime.options.Options2",
                  },
                ],
                "title": "qiskit_ibm_runtime.options",
              },
            ],
            "title": "qiskit_ibm_runtime",
          },
          {
            "title": "Changelog",
            "url": "https://github.com/qiskit_ibm_runtime/releases",
          },
        ],
        "subtitle": "v1.0.0",
        "title": "Qiskit Runtime IBM Client",
      }
    `);
  });

  test('skip nest modules using a fn', () => {
    const toc = generateToc({
      pkg: {
        ...pkg,
        tocOptions: {
          nestModule(id: string) {
            if (id === 'qiskit_ibm_runtime.options') return false;
            return true;
          },
        },
      },
      results: [
        {
          meta: {
            python_api_type: 'module',
            python_api_name: 'qiskit_ibm_runtime',
          },
          url: '/docs/runtime/qiskit_ibm_runtime',
        },
        {
          meta: {
            python_api_type: 'module',
            python_api_name: 'qiskit_ibm_runtime.options',
          },
          url: '/docs/runtime/qiskit_ibm_runtime.options',
        },
        {
          meta: { python_api_type: 'class', python_api_name: 'qiskit_ibm_runtime.Estimator' },
          url: '/docs/runtime/qiskit_ibm_runtime.Estimator',
        },
        {
          meta: { python_api_type: 'class', python_api_name: 'qiskit_ibm_runtime.options.Options' },
          url: 'qiskit_ibm_runtime.options.Options',
        },
        {
          meta: {
            python_api_type: 'class',
            python_api_name: 'qiskit_ibm_runtime.options.Options2',
          },
          url: 'qiskit_ibm_runtime.options.Options2',
        },
        {
          meta: {
            python_api_type: 'module',
            python_api_name: 'qiskit_ibm_runtime.provider',
          },
          url: 'qiskit_ibm_runtime.provider',
        },
        {
          meta: {
            python_api_type: 'class',
            python_api_name: 'qiskit_ibm_runtime.provider.Provider',
          },
          url: 'qiskit_ibm_runtime.provider.Provider',
        },
      ],
    });

    expect(toc).toMatchInlineSnapshot(`
      {
        "children": [
          {
            "children": [
              {
                "title": "Overview",
                "url": "/docs/runtime/qiskit_ibm_runtime",
              },
              {
                "title": "Estimator",
                "url": "/docs/runtime/qiskit_ibm_runtime.Estimator",
              },
              {
                "children": [
                  {
                    "title": "Overview",
                    "url": "qiskit_ibm_runtime.provider",
                  },
                  {
                    "title": "Provider",
                    "url": "qiskit_ibm_runtime.provider.Provider",
                  },
                ],
                "title": "qiskit_ibm_runtime.provider",
              },
            ],
            "title": "qiskit_ibm_runtime",
          },
          {
            "children": [
              {
                "title": "Overview",
                "url": "/docs/runtime/qiskit_ibm_runtime.options",
              },
              {
                "title": "Options",
                "url": "qiskit_ibm_runtime.options.Options",
              },
              {
                "title": "Options2",
                "url": "qiskit_ibm_runtime.options.Options2",
              },
            ],
            "title": "qiskit_ibm_runtime.options",
          },
          {
            "title": "Changelog",
            "url": "https://github.com/qiskit_ibm_runtime/releases",
          },
        ],
        "subtitle": "v1.0.0",
        "title": "Qiskit Runtime IBM Client",
      }
    `);
  });
});

const pkg = {
  title: 'Qiskit Runtime IBM Client',
  name: 'qiskit_ibm_runtime',
  version: '1.0.0',
  changelogUrl: `https://github.com/qiskit_ibm_runtime/releases`,
};