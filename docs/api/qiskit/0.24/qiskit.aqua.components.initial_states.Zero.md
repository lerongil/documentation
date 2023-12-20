<span id="qiskit-aqua-components-initial-states-zero" />

# qiskit.aqua.components.initial\_states.Zero

<span id="undefined" />

`Zero(num_qubits)`

The zero (null/vacuum) state.

This is suitable for those situations in which the all-zeros state is the desired state. This is the case for a *vacuum state* in physics or chemistry

**Parameters**

**num\_qubits** (`int`) – Number of qubits, has a minimum value of 1.

<span id="undefined" />

`__init__(num_qubits)`

**Parameters**

**num\_qubits** (`int`) – Number of qubits, has a minimum value of 1.

## Methods

|                                                                                                                                                                        |                                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| [`__init__`](#qiskit.aqua.components.initial_states.Zero.__init__ "qiskit.aqua.components.initial_states.Zero.__init__")(num\_qubits)                                  | **type num\_qubits**`int`                           |
| [`construct_circuit`](#qiskit.aqua.components.initial_states.Zero.construct_circuit "qiskit.aqua.components.initial_states.Zero.construct_circuit")(\[mode, register]) | Construct the statevector of desired initial state. |

## Attributes

|                                                                                                                    |   |
| ------------------------------------------------------------------------------------------------------------------ | - |
| [`bitstr`](#qiskit.aqua.components.initial_states.Zero.bitstr "qiskit.aqua.components.initial_states.Zero.bitstr") |   |

<span id="undefined" />

`property bitstr`

<span id="undefined" />

`construct_circuit(mode='circuit', register=None)`

Construct the statevector of desired initial state.

**Parameters**

*   **mode** – vector or circuit. The vector mode produces the vector. While the circuit constructs the quantum circuit corresponding that vector.
*   **register** – qubits for circuit construction.

**Returns**

statevector.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") or numpy.ndarray

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – when mode is not ‘vector’ or ‘circuit’.
