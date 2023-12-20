# Collect2qBlocks

<span id="undefined" />

`Collect2qBlocks(*args, **kwargs)`

Bases: `qiskit.transpiler.basepasses.AnalysisPass`

Collect two-qubit subcircuits.

## Methods

|                                                                                                                                                       |                                      |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| [`name`](qiskit.transpiler.passes.Collect2qBlocks.name#qiskit.transpiler.passes.Collect2qBlocks.name "qiskit.transpiler.passes.Collect2qBlocks.name") | Return the name of the pass.         |
| [`run`](qiskit.transpiler.passes.Collect2qBlocks.run#qiskit.transpiler.passes.Collect2qBlocks.run "qiskit.transpiler.passes.Collect2qBlocks.run")     | Run the Collect2qBlocks pass on dag. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
