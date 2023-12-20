# qiskit.providers.aer.library.save\_probabilities

<span id="undefined" />

`save_probabilities(self, qubits=None, label='probabilities', unnormalized=False, pershot=False, conditional=False)`

Save measurement outcome probabilities vector.

**Parameters**

*   **qubits** (*list or None*) – the qubits to apply snapshot to. If None all qubits will be snapshot \[Default: None].
*   **label** (*str*) – the key for retrieving saved data from results.
*   **unnormalized** (*bool*) – If True return save the unnormalized accumulated probabilities over all shots \[Default: False].
*   **pershot** (*bool*) – if True save a list of probabilities for each shot of the simulation rather than the average over all shots \[Default: False].
*   **conditional** (*bool*) – if True save the probabilities data conditional on the current classical register values \[Default: False].

**Returns**

with attached instruction.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")
