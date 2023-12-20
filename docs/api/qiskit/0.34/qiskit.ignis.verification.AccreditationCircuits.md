# AccreditationCircuits

<span id="undefined" />

`AccreditationCircuits(target_circ, two_qubit_gate='cx', coupling_map=None, seed=None)`

Bases: `object`

This class generates accreditation circuits from a target.

Implementation follows the methods from \[1]

## References

1.  S. Ferracin, T. Kapourniotis, A. Datta. *Accrediting outputs of noisy intermediate-scale quantum computing devices*, New Journal of Physics, Volume 21, 113038. (2019). [NJP 113038](https://iopscience.iop.org/article/10.1088/1367-2630/ab4fd6)

Initialize the circuit generation class parse into layers

**Parameters**

*   **target\_circ** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – a qiskit circuit to accredit
*   **two\_qubit\_gate** (*string*) – a flag as to which 2 qubit gate to compile with, can be cx or cz
*   **coupling\_map** (*list*) – some particular device topology as list of list (e.g. \[\[0,1],\[1,2],\[2,0]])
*   **seed** (*int*) – seed to the random number generator

## Methods

|                                                                                                                                                                                                                                |                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| [`generate_circuits`](qiskit.ignis.verification.AccreditationCircuits.generate_circuits#qiskit.ignis.verification.AccreditationCircuits.generate_circuits "qiskit.ignis.verification.AccreditationCircuits.generate_circuits") | Generate quantum circuits for accreditation            |
| [`target_circuit`](qiskit.ignis.verification.AccreditationCircuits.target_circuit#qiskit.ignis.verification.AccreditationCircuits.target_circuit "qiskit.ignis.verification.AccreditationCircuits.target_circuit")             | Load target circuit in to class, and parse into layers |
