# SetLayout

<span id="undefined" />

`SetLayout(*args, **kwargs)`

Bases: `qiskit.transpiler.basepasses.AnalysisPass`

Set the `layout` property to the given layout.

This pass associates a physical qubit (int) to each virtual qubit of the circuit (Qubit) in increasing order.

SetLayout initializer.

**Parameters**

**layout** ([*Layout*](qiskit.transpiler.Layout#qiskit.transpiler.Layout "qiskit.transpiler.Layout")) – the layout to set.

## Methods

|                                                                                                                                     |                                |
| ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| [`name`](qiskit.transpiler.passes.SetLayout.name#qiskit.transpiler.passes.SetLayout.name "qiskit.transpiler.passes.SetLayout.name") | Return the name of the pass.   |
| [`run`](qiskit.transpiler.passes.SetLayout.run#qiskit.transpiler.passes.SetLayout.run "qiskit.transpiler.passes.SetLayout.run")     | Run the SetLayout pass on dag. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
