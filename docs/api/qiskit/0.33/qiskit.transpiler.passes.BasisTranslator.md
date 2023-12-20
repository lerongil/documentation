# BasisTranslator

<span id="undefined" />

`BasisTranslator(*args, **kwargs)`

Bases: `qiskit.transpiler.basepasses.TransformationPass`

Translates gates to a target basis by searching for a set of translations from a given EquivalenceLibrary.

This pass operates in several steps:

*   Determine the source basis from the input circuit.
*   Perform an A\* search over basis sets, starting from the source basis and targeting the device’s target\_basis, with edges discovered from the provided EquivalenceLibrary. The heuristic used by the A\* search is the number of distinct circuit basis gates not in the target\_basis, plus the number of distinct device basis gates not used in the current basis.
*   The found path, as a set of rules from the EquivalenceLibrary, is composed into a set of gate replacement rules.
*   The composed replacement rules are applied in-place to each op node which is not already in the target\_basis.

If the target keyword argument is specified and that [`Target`](qiskit.transpiler.Target#qiskit.transpiler.Target "qiskit.transpiler.Target") objects contains operations which are non-global (i.e. they are defined only for a subset of qubits), as calculated by [`get_non_global_operation_names()`](qiskit.transpiler.Target.get_non_global_operation_names#qiskit.transpiler.Target.get_non_global_operation_names "qiskit.transpiler.Target.get_non_global_operation_names"), this pass will attempt to match the output translation to those constraints. For 1 qubit operations this is straightforward, the pass will perform a search using the union of the set of global operations with the set of operations defined solely on that qubit. For multi-qubit gates this is a bit more involved, while the behavior is initially similar to the single qubit case, just using all the qubits the operation is run on (where order is not significant) isn’t sufficient. We also need to consider any potential local qubits defined on subsets of the quantum arguments for the multi-qubit operation. This means the target used for the search of a non-global multi-qubit gate is the union of global operations, non-global multi-qubit gates sharing the same qubits, and any non-global gates defined on any subset of the qubits used.

<Admonition title="Note" type="note">
  In the case of non-global operations it is possible for a single execution of this pass to output an incomplete translation if any non-global gates are defined on qubits that are a subset of a larger multi-qubit gate. For example, if you have a `u` gate only defined on qubit 0 and an `x` gate only on qubit 1 it is possible when translating a 2 qubit operation on qubit 0 and 1 that the output might have `u` on qubit 1 and `x` on qubit 0. Typically running this pass a second time will correct these issues.
</Admonition>

Initialize a BasisTranslator instance.

**Parameters**

*   **equivalence\_library** ([*EquivalenceLibrary*](qiskit.circuit.EquivalenceLibrary#qiskit.circuit.EquivalenceLibrary "qiskit.circuit.EquivalenceLibrary")) – The equivalence library which will be used by the BasisTranslator pass. (Instructions in this library will not be unrolled by this pass.)
*   **target\_basis** (*list\[str]*) – Target basis names to unroll to, e.g. \[‘u3’, ‘cx’].
*   **target** ([*Target*](qiskit.transpiler.Target#qiskit.transpiler.Target "qiskit.transpiler.Target")) – The backend compilation target

## Methods

|                                                                                                                                                       |                                                    |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| [`name`](qiskit.transpiler.passes.BasisTranslator.name#qiskit.transpiler.passes.BasisTranslator.name "qiskit.transpiler.passes.BasisTranslator.name") | Return the name of the pass.                       |
| [`run`](qiskit.transpiler.passes.BasisTranslator.run#qiskit.transpiler.passes.BasisTranslator.run "qiskit.transpiler.passes.BasisTranslator.run")     | Translate an input DAGCircuit to the target basis. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
