# qiskit.algorithms.PhaseEstimation

<span id="undefined" />

`PhaseEstimation(num_evaluation_qubits, quantum_instance=None)`

Run the Quantum Phase Estimation (QPE) algorithm.

This runs QPE with a multi-qubit register for reading the phases \[1] of input states.

The algorithm takes as input a unitary $U$ and a state $|\psi\rangle$, which may be written

$$
|\psi\rangle = \sum_j c_j |\phi_j\rangle,
$$

where $|\phi_j\rangle$ are eigenstates of $U$. We prepare the quantum register in the state $|\psi\rangle$ then apply $U$ leaving the register in the state

$$
U|\psi\rangle = \sum_j \exp(i \phi_j) c_j |\phi_j\rangle.
$$

In the ideal case, one then measures the phase $\phi_j$ with probability $|c_j|^2$. In practice, many (or all) of the bit strings may be measured due to noise and the possibility that $\phi_j$ may not be representable exactly by the output register. In the latter case the probability for each eigenphase will be spread across bitstrings, with amplitudes that decrease with distance from the bitstring most closely approximating the eigenphase.

The main input to the constructor is the number of qubits in the phase-reading register. For phase estimation, there are two methods:

**first. estimate, which takes a state preparation circuit to prepare an input state, and**

a unitary that will act on the the input state. In this case, an instance of `qiskit.circuit.PhaseEstimation`, a QPE circuit, containing the state preparation and input unitary will be constructed.

**second. estimate\_from\_pe\_circuit, which takes a quantum-phase-estimation circuit in which**

the unitary and state preparation are already embedded.

In both estimation methods, the QPE circuit is run on a backend and the frequencies or counts of the phases represented by bitstrings are recorded. The results are returned as an instance of `PhaseEstimationResult`.

**Reference:**

**\[1]: Michael A. Nielsen and Isaac L. Chuang. 2011.**

Quantum Computation and Quantum Information: 10th Anniversary Edition (10th ed.). Cambridge University Press, New York, NY, USA.

**Parameters**

*   **num\_evaluation\_qubits** (`int`) – The number of qubits used in estimating the phase. The phase will be estimated as a binary string with this many bits.
*   **quantum\_instance** (`Union`\[`Backend`, `BaseBackend`, `QuantumInstance`, `None`]) – The quantum instance on which the circuit will be run.

<span id="undefined" />

`__init__(num_evaluation_qubits, quantum_instance=None)`

**Parameters**

*   **num\_evaluation\_qubits** (`int`) – The number of qubits used in estimating the phase. The phase will be estimated as a binary string with this many bits.
*   **quantum\_instance** (`Union`\[`Backend`, `BaseBackend`, `QuantumInstance`, `None`]) – The quantum instance on which the circuit will be run.

## Methods

|                                                                                                                                                                        |                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`__init__`](#qiskit.algorithms.PhaseEstimation.__init__ "qiskit.algorithms.PhaseEstimation.__init__")(num\_evaluation\_qubits\[, …])                                  | **type num\_evaluation\_qubits**`int`                                 |
| [`construct_circuit`](#qiskit.algorithms.PhaseEstimation.construct_circuit "qiskit.algorithms.PhaseEstimation.construct_circuit")(unitary\[, state\_preparation])      | Return the circuit to be executed to estimate phases.                 |
| [`estimate`](#qiskit.algorithms.PhaseEstimation.estimate "qiskit.algorithms.PhaseEstimation.estimate")(\[unitary, state\_preparation, …])                              | Build a phase estimation circuit and run the corresponding algorithm. |
| [`estimate_from_pe_circuit`](#qiskit.algorithms.PhaseEstimation.estimate_from_pe_circuit "qiskit.algorithms.PhaseEstimation.estimate_from_pe_circuit")(pe\_circuit, …) | Run the the phase estimation algorithm on a phase estimation circuit  |

<span id="undefined" />

`construct_circuit(unitary, state_preparation=None)`

Return the circuit to be executed to estimate phases.

This circuit includes as sub-circuits the core phase estimation circuit, with the addition of the state-preparation circuit and possibly measurement instructions.

**Return type**

`QuantumCircuit`

<span id="undefined" />

`estimate(unitary=None, state_preparation=None, pe_circuit=None, num_unitary_qubits=None)`

Build a phase estimation circuit and run the corresponding algorithm.

**Parameters**

*   **unitary** (`Optional`\[`QuantumCircuit`]) – The circuit representing the unitary operator whose eigenvalues (via phase) will be measured.
*   **state\_preparation** (`Optional`\[`QuantumCircuit`]) – The circuit that prepares the state whose eigenphase will be measured. If this parameter is omitted, no preparation circuit will be run and input state will be the all-zero state in the computational basis.

**Return type**

`PhaseEstimationResult`

**Returns**

An instance of qiskit.algorithms.phase\_estimator\_result.PhaseEstimationResult.

<span id="undefined" />

`estimate_from_pe_circuit(pe_circuit, num_unitary_qubits)`

Run the the phase estimation algorithm on a phase estimation circuit

**Parameters**

*   **pe\_circuit** (`QuantumCircuit`) – The phase estimation circuit.
*   **num\_unitary\_qubits** (`int`) – Must agree with the number of qubits in the unitary in pe\_circuit.

**Return type**

`PhaseEstimationResult`

**Returns**

An instance of qiskit.algorithms.phase\_estimator\_result.PhaseEstimationResult.
