# GateDirection

<span id="undefined" />

`GateDirection(*args, **kwargs)`

Bases: `qiskit.transpiler.basepasses.TransformationPass`

Modify asymmetric gates to match the hardware coupling direction.

This pass makes use of the following identities:

```python
                     ┌───┐┌───┐┌───┐
q_0: ──■──      q_0: ┤ H ├┤ X ├┤ H ├
     ┌─┴─┐  =        ├───┤└─┬─┘├───┤
q_1: ┤ X ├      q_1: ┤ H ├──■──┤ H ├
     └───┘           └───┘     └───┘

     ┌──────┐          ┌───────────┐┌──────┐┌───┐
q_0: ┤0     ├     q_0: ┤ RY(-pi/2) ├┤1     ├┤ H ├
     │  ECR │  =       └┬──────────┤│  ECR │├───┤
q_1: ┤1     ├     q_1: ─┤ RY(pi/2) ├┤0     ├┤ H ├
     └──────┘           └──────────┘└──────┘└───┘

     ┌──────┐          ┌───┐┌──────┐┌───┐
q_0: ┤0     ├     q_0: ┤ H ├┤1     ├┤ H ├
     │  RZX │  =       ├───┤│  RZX │├───┤
q_1: ┤1     ├     q_1: ┤ H ├┤0     ├┤ H ├
     └──────┘          └───┘└──────┘└───┘
```

GateDirection pass.

**Parameters**

*   **coupling\_map** ([*CouplingMap*](qiskit.transpiler.CouplingMap#qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap")) – Directed graph represented a coupling map.
*   **target** ([*Target*](qiskit.transpiler.Target#qiskit.transpiler.Target "qiskit.transpiler.Target")) – The backend target to use for this pass. If this is specified it will be used instead of the coupling map

## Methods

|                                                                                                                                                 |                                    |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| [`name`](qiskit.transpiler.passes.GateDirection.name#qiskit.transpiler.passes.GateDirection.name "qiskit.transpiler.passes.GateDirection.name") | Return the name of the pass.       |
| [`run`](qiskit.transpiler.passes.GateDirection.run#qiskit.transpiler.passes.GateDirection.run "qiskit.transpiler.passes.GateDirection.run")     | Run the GateDirection pass on dag. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
