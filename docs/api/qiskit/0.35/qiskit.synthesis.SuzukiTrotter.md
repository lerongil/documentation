# SuzukiTrotter

<span id="undefined" />

`SuzukiTrotter(order=2, reps=1, insert_barriers=False, cx_structure='chain', atomic_evolution=None)`

Bases: `qiskit.synthesis.evolution.product_formula.ProductFormula`

The (higher order) Suzuki-Trotter product formula.

The Suzuki-Trotter formulas improve the error of the Lie-Trotter approximation. For example, the second order decomposition is

$$
e^{A + B} \approx e^{B/2} e^{A} e^{B/2}.
$$

Higher order decompositions are based on recursions, see Ref. \[1] for more details.

In this implementation, the operators are provided as sum terms of a Pauli operator. For example, in the second order Suzuki-Trotter decomposition we approximate

$$
e^{-it(XX + ZZ)} = e^{-it/2 ZZ}e^{-it XX}e^{-it/2 ZZ} + \mathcal{O}(t^2).
$$

## References

\[1]: D. Berry, G. Ahokas, R. Cleve and B. Sanders, “Efficient quantum algorithms for simulating sparse Hamiltonians” (2006). [arXiv:quant-ph/0508139](https://arxiv.org/abs/quant-ph/0508139)

**Parameters**

*   **order** (`int`) – The order of the product formula.
*   **reps** (`int`) – The number of time steps.
*   **insert\_barriers** (`bool`) – Whether to insert barriers between the atomic evolutions.
*   **cx\_structure** (`str`) – How to arrange the CX gates for the Pauli evolutions, can be “chain”, where next neighbor connections are used, or “fountain”, where all qubits are connected to one.
*   **atomic\_evolution** (`Optional`\[`Callable`\[\[`Union`\[`Pauli`, `SparsePauliOp`], `float`], `QuantumCircuit`]]) – A function to construct the circuit for the evolution of single Pauli string. Per default, a single Pauli evolution is decomopsed in a CX chain and a single qubit Z rotation.

## Methods

|                                                                                                                                                 |                                                            |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| [`synthesize`](qiskit.synthesis.SuzukiTrotter.synthesize#qiskit.synthesis.SuzukiTrotter.synthesize "qiskit.synthesis.SuzukiTrotter.synthesize") | Synthesize an `qiskit.circuit.library.PauliEvolutionGate`. |

## Attributes

<span id="undefined" />

### settings

Return the settings in a dictionary, which can be used to reconstruct the object.

**Return type**

`Dict`\[`str`, `Any`]

**Returns**

A dictionary containing the settings of this product formula.

**Raises**

**NotImplementedError** – If a custom atomic evolution is set, which cannot be serialized.
