# Decompose

<span id="undefined" />

`Decompose(gate=None)`

Bases: `qiskit.transpiler.basepasses.TransformationPass`

Expand a gate in a circuit using its decomposition rules.

Decompose initializer.

**Parameters**

**gate** (`Optional`\[`Type`\[`Gate`]]) – gate to decompose.

## Methods

|                                                                                                                                     |                                |
| ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| [`name`](qiskit.transpiler.passes.Decompose.name#qiskit.transpiler.passes.Decompose.name "qiskit.transpiler.passes.Decompose.name") | Return the name of the pass.   |
| [`run`](qiskit.transpiler.passes.Decompose.run#qiskit.transpiler.passes.Decompose.run "qiskit.transpiler.passes.Decompose.run")     | Run the Decompose pass on dag. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
