<span id="qiskit-transpiler-passes-consolidateblocks" />

# qiskit.transpiler.passes.ConsolidateBlocks

<span id="undefined" />

`ConsolidateBlocks(*args, **kwargs)`

Replace each block of consecutive gates by a single Unitary node.

Pass to consolidate sequences of uninterrupted gates acting on the same qubits into a Unitary node, to be resynthesized later, to a potentially more optimal subcircuit.

## Notes

This pass assumes that the ‘blocks\_list’ property that it reads is given such that blocks are in topological order. The blocks are collected by a previous pass, such as Collect2qBlocks.

ConsolidateBlocks initializer.

**Parameters**

*   **kak\_basis\_gate** ([*Gate*](qiskit.circuit.Gate#qiskit.circuit.Gate "qiskit.circuit.Gate")) – Basis gate for KAK decomposition.
*   **force\_consolidate** (*bool*) – Force block consolidation
*   **basis\_gates** (*List(str)*) – Basis gates from which to choose a KAK gate.

<span id="undefined" />

`__init__(kak_basis_gate=None, force_consolidate=False, basis_gates=None)`

ConsolidateBlocks initializer.

**Parameters**

*   **kak\_basis\_gate** ([*Gate*](qiskit.circuit.Gate#qiskit.circuit.Gate "qiskit.circuit.Gate")) – Basis gate for KAK decomposition.
*   **force\_consolidate** (*bool*) – Force block consolidation
*   **basis\_gates** (*List(str)*) – Basis gates from which to choose a KAK gate.

## Methods

|                                                                                                                                                  |                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------- |
| [`__init__`](#qiskit.transpiler.passes.ConsolidateBlocks.__init__ "qiskit.transpiler.passes.ConsolidateBlocks.__init__")(\[kak\_basis\_gate, …]) | ConsolidateBlocks initializer.         |
| [`name`](#qiskit.transpiler.passes.ConsolidateBlocks.name "qiskit.transpiler.passes.ConsolidateBlocks.name")()                                   | Return the name of the pass.           |
| [`run`](#qiskit.transpiler.passes.ConsolidateBlocks.run "qiskit.transpiler.passes.ConsolidateBlocks.run")(dag)                                   | Run the ConsolidateBlocks pass on dag. |

## Attributes

|                                                                                                                                                                    |                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| [`is_analysis_pass`](#qiskit.transpiler.passes.ConsolidateBlocks.is_analysis_pass "qiskit.transpiler.passes.ConsolidateBlocks.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`is_transformation_pass`](#qiskit.transpiler.passes.ConsolidateBlocks.is_transformation_pass "qiskit.transpiler.passes.ConsolidateBlocks.is_transformation_pass") | Check if the pass is a transformation pass. |

<span id="undefined" />

`property is_analysis_pass`

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

`property is_transformation_pass`

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

<span id="undefined" />

`name()`

Return the name of the pass.

<span id="undefined" />

`run(dag)`

Run the ConsolidateBlocks pass on dag.

Iterate over each block and replace it with an equivalent Unitary on the same wires.
