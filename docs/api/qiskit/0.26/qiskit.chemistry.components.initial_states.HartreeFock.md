# qiskit.chemistry.components.initial\_states.HartreeFock

<span id="undefined" />

`HartreeFock(num_orbitals, num_particles, qubit_mapping='parity', two_qubit_reduction=True, sq_list=None)`

A Hartree-Fock initial state.

**Parameters**

*   **num\_orbitals** (`int`) – number of spin orbitals, has a min. value of 1.
*   **num\_particles** (`Union`\[`List`\[`int`], `int`]) – number of particles, if it is a list, the first number is alpha and the second number if beta.
*   **qubit\_mapping** (`str`) – mapping type for qubit operator
*   **two\_qubit\_reduction** (`bool`) – flag indicating whether or not two qubit is reduced
*   **sq\_list** (`Optional`\[`List`\[`int`]]) – position of the single-qubit operators that anticommute with the cliffords

**Raises**

*   **ValueError** – wrong setting in num\_particles and num\_orbitals.
*   **ValueError** – wrong setting for computed num\_qubits and supplied num\_qubits.

<span id="undefined" />

`__init__(num_orbitals, num_particles, qubit_mapping='parity', two_qubit_reduction=True, sq_list=None)`

**Parameters**

*   **num\_orbitals** (`int`) – number of spin orbitals, has a min. value of 1.
*   **num\_particles** (`Union`\[`List`\[`int`], `int`]) – number of particles, if it is a list, the first number is alpha and the second number if beta.
*   **qubit\_mapping** (`str`) – mapping type for qubit operator
*   **two\_qubit\_reduction** (`bool`) – flag indicating whether or not two qubit is reduced
*   **sq\_list** (`Optional`\[`List`\[`int`]]) – position of the single-qubit operators that anticommute with the cliffords

**Raises**

*   **ValueError** – wrong setting in num\_particles and num\_orbitals.
*   **ValueError** – wrong setting for computed num\_qubits and supplied num\_qubits.

## Methods

|                                                                                                                                                                                                |                                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| [`__init__`](#qiskit.chemistry.components.initial_states.HartreeFock.__init__ "qiskit.chemistry.components.initial_states.HartreeFock.__init__")(num\_orbitals, num\_particles\[, …])          | **type num\_orbitals**`int`                         |
| [`construct_circuit`](#qiskit.chemistry.components.initial_states.HartreeFock.construct_circuit "qiskit.chemistry.components.initial_states.HartreeFock.construct_circuit")(\[mode, register]) | Construct the statevector of desired initial state. |

## Attributes

|                                                                                                                                            |                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------- |
| [`bitstr`](#qiskit.chemistry.components.initial_states.HartreeFock.bitstr "qiskit.chemistry.components.initial_states.HartreeFock.bitstr") | Getter of the bit string represented the statevector. |

<span id="undefined" />

`property bitstr`

Getter of the bit string represented the statevector.

<span id="undefined" />

`construct_circuit(mode='circuit', register=None)`

Construct the statevector of desired initial state.

**Parameters**

*   **mode** (*string*) – vector or circuit. The vector mode produces the vector. While the circuit constructs the quantum circuit corresponding that vector.
*   **register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister#qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – register for circuit construction.

**Returns**

statevector.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") or numpy.ndarray

**Raises**

**ValueError** – when mode is not ‘vector’ or ‘circuit’.
