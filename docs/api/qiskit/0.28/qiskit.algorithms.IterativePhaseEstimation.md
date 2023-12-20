# qiskit.algorithms.IterativePhaseEstimation

<span id="undefined" />

`IterativePhaseEstimation(num_iterations, quantum_instance=None)`

Run the Iterative quantum phase estimation (QPE) algorithm.

Given a unitary circuit and a circuit preparing an eigenstate, return the phase of the eigenvalue as a number in $[0,1)$ using the iterative phase estimation algorithm.

**\[1]: Dobsicek et al. (2006), Arbitrary accuracy iterative phase estimation algorithm as a two**

qubit benchmark, [arxiv/quant-ph/0610214](https://arxiv.org/abs/quant-ph/0610214)

**Parameters**

*   **num\_iterations** (`int`) – The number of iterations (rounds) of the phase estimation to run.
*   **quantum\_instance** (`Union`\[`Backend`, `BaseBackend`, `QuantumInstance`, `None`]) – The quantum instance on which the circuit will be run.

**Raises**

**ValueError** – if num\_iterations is not greater than zero.

<span id="undefined" />

`__init__(num_iterations, quantum_instance=None)`

**Parameters**

*   **num\_iterations** (`int`) – The number of iterations (rounds) of the phase estimation to run.
*   **quantum\_instance** (`Union`\[`Backend`, `BaseBackend`, `QuantumInstance`, `None`]) – The quantum instance on which the circuit will be run.

**Raises**

**ValueError** – if num\_iterations is not greater than zero.

## Methods

|                                                                                                                                                                                     |                                                                      |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [`__init__`](#qiskit.algorithms.IterativePhaseEstimation.__init__ "qiskit.algorithms.IterativePhaseEstimation.__init__")(num\_iterations\[, quantum\_instance])                     | **type num\_iterations**`int`                                        |
| [`construct_circuit`](#qiskit.algorithms.IterativePhaseEstimation.construct_circuit "qiskit.algorithms.IterativePhaseEstimation.construct_circuit")(unitary, state\_preparation, k) | Construct the kth iteration Quantum Phase Estimation circuit.        |
| [`estimate`](#qiskit.algorithms.IterativePhaseEstimation.estimate "qiskit.algorithms.IterativePhaseEstimation.estimate")(unitary, state\_preparation)                               | Estimate the eigenphase of the input unitary and initial-state pair. |

<span id="undefined" />

`construct_circuit(unitary, state_preparation, k, omega=0, measurement=False)`

Construct the kth iteration Quantum Phase Estimation circuit.

For details of parameters, see Fig. 2 in [https://arxiv.org/pdf/quant-ph/0610214.pdf](https://arxiv.org/pdf/quant-ph/0610214.pdf).

**Parameters**

*   **unitary** (`QuantumCircuit`) – The circuit representing the unitary operator whose eigenvalue (via phase) will be measured.
*   **state\_preparation** (`QuantumCircuit`) – The circuit that prepares the state whose eigenphase will be measured. If this parameter is omitted, no preparation circuit will be run and input state will be the all-zero state in the computational basis.
*   **k** (`int`) – the iteration idx.
*   **omega** (`float`) – the feedback angle.
*   **measurement** (`bool`) – Boolean flag to indicate if measurement should be included in the circuit.

**Returns**

the quantum circuit per iteration

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

<span id="undefined" />

`estimate(unitary, state_preparation)`

Estimate the eigenphase of the input unitary and initial-state pair.

**Parameters**

*   **unitary** (`QuantumCircuit`) – The circuit representing the unitary operator whose eigenvalue (via phase) will be measured.
*   **state\_preparation** (`QuantumCircuit`) – The circuit that prepares the state whose eigenphase will be measured. If this parameter is omitted, no preparation circuit will be run and input state will be the all-zero state in the computational basis.

**Return type**

`IterativePhaseEstimationResult`

**Returns**

Estimated phase in an IterativePhaseEstimationResult object.
