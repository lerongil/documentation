# qiskit.providers.aer.library.save\_expectation\_value

<span id="undefined" />

`save_expectation_value(self, operator, qubits, label='expectation_value', unnormalized=False, pershot=False, conditional=False)`

Save the expectation value of a Hermitian operator.

**Parameters**

*   **operator** ([*Pauli*](qiskit.quantum_info.Pauli#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")  *or*[*SparsePauliOp*](qiskit.quantum_info.SparsePauliOp#qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp")  *or*[*Operator*](qiskit.quantum_info.Operator#qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – a Hermitian operator.
*   **qubits** (*list*) – circuit qubits to apply instruction.
*   **label** (*str*) – the key for retrieving saved data from results.
*   **unnormalized** (*bool*) – If True return save the unnormalized accumulated or conditional accumulated expectation value over all shot \[Default: False].
*   **pershot** (*bool*) – if True save a list of expectation values for each shot of the simulation rather than the average over all shots \[Default: False].
*   **conditional** (*bool*) – if True save the average or pershot data conditional on the current classical register values \[Default: False].

**Returns**

with attached instruction.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**ExtensionError** – if the input operator is invalid or not Hermitian.

<Admonition title="Note" type="note">
  This method appends a [`SaveExpectationValue`](qiskit.providers.aer.library.SaveExpectationValue#qiskit.providers.aer.library.SaveExpectationValue "qiskit.providers.aer.library.SaveExpectationValue") instruction to the quantum circuit.
</Admonition>
