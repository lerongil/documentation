# qiskit.transpiler.passes.UnrollCustomDefinitions

<span id="undefined" />

`UnrollCustomDefinitions(*args, **kwargs)`

Unrolls instructions with custom definitions.

Unrolls instructions with custom definitions.

**Parameters**

*   **equivalence\_library** ([*EquivalenceLibrary*](qiskit.circuit.EquivalenceLibrary#qiskit.circuit.EquivalenceLibrary "qiskit.circuit.EquivalenceLibrary")) – The equivalence library which will be used by the BasisTranslator pass. (Instructions in this library will not be unrolled by this pass.)
*   **basis\_gates** (*list\[str]*) – Target basis names to unroll to, e.g. \[‘u3’, ‘cx’].

<span id="undefined" />

`__init__(equivalence_library, basis_gates)`

Unrolls instructions with custom definitions.

**Parameters**

*   **equivalence\_library** ([*EquivalenceLibrary*](qiskit.circuit.EquivalenceLibrary#qiskit.circuit.EquivalenceLibrary "qiskit.circuit.EquivalenceLibrary")) – The equivalence library which will be used by the BasisTranslator pass. (Instructions in this library will not be unrolled by this pass.)
*   **basis\_gates** (*list\[str]*) – Target basis names to unroll to, e.g. \[‘u3’, ‘cx’].

## Methods

|                                                                                                                                                                          |                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------- |
| [`__init__`](#qiskit.transpiler.passes.UnrollCustomDefinitions.__init__ "qiskit.transpiler.passes.UnrollCustomDefinitions.__init__")(equivalence\_library, basis\_gates) | Unrolls instructions with custom definitions. |
| [`name`](#qiskit.transpiler.passes.UnrollCustomDefinitions.name "qiskit.transpiler.passes.UnrollCustomDefinitions.name")()                                               | Return the name of the pass.                  |
| [`run`](#qiskit.transpiler.passes.UnrollCustomDefinitions.run "qiskit.transpiler.passes.UnrollCustomDefinitions.run")(dag)                                               | Run the UnrollCustomDefinitions pass on dag.  |

## Attributes

|                                                                                                                                                                                |                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| [`is_analysis_pass`](#qiskit.transpiler.passes.UnrollCustomDefinitions.is_analysis_pass "qiskit.transpiler.passes.UnrollCustomDefinitions.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`is_transformation_pass`](#qiskit.transpiler.passes.UnrollCustomDefinitions.is_transformation_pass "qiskit.transpiler.passes.UnrollCustomDefinitions.is_transformation_pass") | Check if the pass is a transformation pass. |

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

Run the UnrollCustomDefinitions pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – input dag

**Raises**

*   **QiskitError** – if unable to unroll given the basis due to undefined
*   **decomposition rules**\*\* (****such as a bad basis****) or \*\***excessive recursion.** –

**Returns**

output unrolled dag

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")
