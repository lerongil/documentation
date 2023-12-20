<span id="qiskit-aqua-circuits-phaseestimationcircuit" />

# qiskit.aqua.circuits.PhaseEstimationCircuit

<span id="undefined" />

`PhaseEstimationCircuit(operator=None, state_in=None, iqft=None, num_time_slices=1, num_ancillae=1, expansion_mode='trotter', expansion_order=1, evo_time=6.283185307179586, state_in_circuit_factory=None, unitary_circuit_factory=None, shallow_circuit_concat=False, pauli_list=None)`

Quantum Phase Estimation Circuit.

**Parameters**

*   **operator** (`Optional`\[`WeightedPauliOperator`]) – the hamiltonian Operator object
*   **state\_in** (`Optional`\[`InitialState`]) – the InitialState component
*   **the initial quantum state** (*representing*) –
*   **iqft** (`Optional`\[`QuantumCircuit`]) – the Inverse Quantum Fourier Transform as circuit or Aqua component
*   **num\_time\_slices** (`int`) – the number of time slices
*   **num\_ancillae** (`int`) – the number of ancillary qubits to use for the measurement
*   **expansion\_mode** (`str`) – the expansion mode (trotter|suzuki)
*   **expansion\_order** (`int`) – the suzuki expansion order
*   **evo\_time** (`float`) – the evolution time
*   **state\_in\_circuit\_factory** (`Optional`\[`CircuitFactory`]) – the initial state represented by a CircuitFactory object
*   **unitary\_circuit\_factory** (`Optional`\[`CircuitFactory`]) – the problem unitary represented by a CircuitFactory object
*   **shallow\_circuit\_concat** (`bool`) – indicate whether to use shallow (cheap) mode for circuit concatenation
*   **pauli\_list** (`Optional`\[`List`\[`Pauli`]]) – the flat list of paulis for the operator

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – Missing input

<span id="undefined" />

`__init__(operator=None, state_in=None, iqft=None, num_time_slices=1, num_ancillae=1, expansion_mode='trotter', expansion_order=1, evo_time=6.283185307179586, state_in_circuit_factory=None, unitary_circuit_factory=None, shallow_circuit_concat=False, pauli_list=None)`

**Parameters**

*   **operator** (`Optional`\[`WeightedPauliOperator`]) – the hamiltonian Operator object
*   **state\_in** (`Optional`\[`InitialState`]) – the InitialState component
*   **the initial quantum state** (*representing*) –
*   **iqft** (`Optional`\[`QuantumCircuit`]) – the Inverse Quantum Fourier Transform as circuit or Aqua component
*   **num\_time\_slices** (`int`) – the number of time slices
*   **num\_ancillae** (`int`) – the number of ancillary qubits to use for the measurement
*   **expansion\_mode** (`str`) – the expansion mode (trotter|suzuki)
*   **expansion\_order** (`int`) – the suzuki expansion order
*   **evo\_time** (`float`) – the evolution time
*   **state\_in\_circuit\_factory** (`Optional`\[`CircuitFactory`]) – the initial state represented by a CircuitFactory object
*   **unitary\_circuit\_factory** (`Optional`\[`CircuitFactory`]) – the problem unitary represented by a CircuitFactory object
*   **shallow\_circuit\_concat** (`bool`) – indicate whether to use shallow (cheap) mode for circuit concatenation
*   **pauli\_list** (`Optional`\[`List`\[`Pauli`]]) – the flat list of paulis for the operator

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – Missing input

## Methods

|                                                                                                                                                                              |                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [`__init__`](#qiskit.aqua.circuits.PhaseEstimationCircuit.__init__ "qiskit.aqua.circuits.PhaseEstimationCircuit.__init__")(\[operator, state\_in, iqft, …])                  | **type operator**`Optional`\[`WeightedPauliOperator`] |
| [`construct_circuit`](#qiskit.aqua.circuits.PhaseEstimationCircuit.construct_circuit "qiskit.aqua.circuits.PhaseEstimationCircuit.construct_circuit")(\[state\_register, …]) | Construct the Phase Estimation circuit                |

## Attributes

|                                                                                                                                                          |                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| [`ancillary_register`](#qiskit.aqua.circuits.PhaseEstimationCircuit.ancillary_register "qiskit.aqua.circuits.PhaseEstimationCircuit.ancillary_register") | returns ancillary register |
| [`auxiliary_register`](#qiskit.aqua.circuits.PhaseEstimationCircuit.auxiliary_register "qiskit.aqua.circuits.PhaseEstimationCircuit.auxiliary_register") | returns auxiliary register |
| [`state_register`](#qiskit.aqua.circuits.PhaseEstimationCircuit.state_register "qiskit.aqua.circuits.PhaseEstimationCircuit.state_register")             | returns state register     |

<span id="undefined" />

`property ancillary_register`

returns ancillary register

<span id="undefined" />

`property auxiliary_register`

returns auxiliary register

<span id="undefined" />

`construct_circuit(state_register=None, ancillary_register=None, auxiliary_register=None, measurement=False)`

Construct the Phase Estimation circuit

**Parameters**

*   **state\_register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister#qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – the optional register to use for the quantum state
*   **ancillary\_register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister#qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – the optional register to use for
*   **ancillary measurement qubits** (*the*) –
*   **auxiliary\_register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister#qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – an optional auxiliary quantum register
*   **measurement** (*bool*) – Boolean flag to indicate if measurement should be included
*   **the circuit.** (*in*) –

**Returns**

the QuantumCircuit object for the constructed circuit

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

*   **RuntimeError** – Multiple identity pauli terms are present
*   **ValueError** – invalid mode

<span id="undefined" />

`property state_register`

returns state register
