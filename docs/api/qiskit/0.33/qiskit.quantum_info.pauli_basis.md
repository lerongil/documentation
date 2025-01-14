# qiskit.quantum\_info.pauli\_basis

<span id="undefined" />

`pauli_basis(num_qubits, weight=False, pauli_list=False)`

Return the ordered PauliTable or PauliList for the n-qubit Pauli basis.

**Parameters**

*   **num\_qubits** (*int*) – number of qubits
*   **weight** (*bool*) – if True optionally return the basis sorted by Pauli weight rather than lexicographic order (Default: False)
*   **pauli\_list** (*bool*) – if True, the return type becomes PauliList, otherwise PauliTable.

**Returns**

the Paulis for the basis

**Return type**

[PauliTable](qiskit.quantum_info.PauliTable#qiskit.quantum_info.PauliTable "qiskit.quantum_info.PauliTable"), [PauliList](qiskit.quantum_info.PauliList#qiskit.quantum_info.PauliList "qiskit.quantum_info.PauliList")
