---
title: NoiseAdaptiveLayout
description: API reference for qiskit.transpiler.passes.NoiseAdaptiveLayout
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.NoiseAdaptiveLayout
---

# NoiseAdaptiveLayout

<span id="qiskit.transpiler.passes.NoiseAdaptiveLayout" />

`NoiseAdaptiveLayout(*args, **kwargs)`

Bases: [`AnalysisPass`](qiskit.transpiler.AnalysisPass "qiskit.transpiler.basepasses.AnalysisPass")

Choose a noise-adaptive Layout based on current calibration data for the backend.

> This pass associates a physical qubit (int) to each virtual qubit of the circuit (Qubit), using calibration data.
>
> The pass implements the qubit mapping method from: Noise-Adaptive Compiler Mappings for Noisy Intermediate-Scale Quantum Computers Prakash Murali, Jonathan M. Baker, Ali Javadi-Abhari, Frederic T. Chong, Margaret R. Martonosi ASPLOS 2019 (arXiv:1901.11054).

<span id="undefined" />

`Ordering of edges`

<span id="undefined" />

`Map qubits edge-by-edge in the order of decreasing frequency of occurrence in the program dag.`

### Initialization

<span id="qiskit.transpiler.passes.NoiseAdaptiveLayout.Initialization" />

`Initialization()`

<span id="undefined" />

`If an edge exists with both endpoints unmapped,`

<span id="undefined" />

`pick the best available hardware cx to execute this edge.`

<span id="undefined" />

`Iterative step`

<span id="undefined" />

`When an edge exists with one endpoint unmapped,`

<span id="undefined" />

`map that endpoint to a location which allows`

<span id="undefined" />

`maximum reliability for CNOTs with previously mapped qubits.`

<span id="undefined" />

`In the end if there are unmapped qubits (which don't`

<span id="undefined" />

`participate in any CNOT), map them to any available`

<span id="undefined" />

`hardware qubit.`

### Notes

<span id="qiskit.transpiler.passes.NoiseAdaptiveLayout.Notes" />

`Notes()`

even though a layout is not strictly a property of the DAG, in the transpiler architecture it is best passed around between passes by being set in property\_set.

NoiseAdaptiveLayout initializer.

**Parameters**

**backend\_prop** (*Union\[*[*BackendProperties*](qiskit.providers.models.BackendProperties "qiskit.providers.models.BackendProperties")*,* [*Target*](qiskit.transpiler.Target "qiskit.transpiler.Target")*]*) – backend properties object

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – if invalid options

## Methods

<span id="qiskit-transpiler-passes-noiseadaptivelayout-name" />

### name

<span id="qiskit.transpiler.passes.NoiseAdaptiveLayout.name" />

`NoiseAdaptiveLayout.name()`

Return the name of the pass.

<span id="qiskit-transpiler-passes-noiseadaptivelayout-run" />

### run

<span id="qiskit.transpiler.passes.NoiseAdaptiveLayout.run" />

`NoiseAdaptiveLayout.run(dag)`

Run the NoiseAdaptiveLayout pass on dag.

## Attributes

<span id="qiskit.transpiler.passes.NoiseAdaptiveLayout.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.NoiseAdaptiveLayout.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

