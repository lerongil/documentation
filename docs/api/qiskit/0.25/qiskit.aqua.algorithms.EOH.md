# qiskit.aqua.algorithms.EOH

<span id="undefined" />

`EOH(operator, initial_state, evo_operator, evo_time=1, num_time_slices=1, expansion_mode='trotter', expansion_order=1, quantum_instance=None)`

The Quantum EOH (Evolution of Hamiltonian) algorithm.

EOH provides the lower-level building blocks for simulating universal quantum systems. For any given quantum system that can be decomposed into local interactions (for example, a global hamiltonian as the weighted sum of several Pauli spin operators), the local interactions can then be used to approximate the global quantum system via, for example, Lloyd’s method or Trotter-Suzuki decomposition.

**Parameters**

*   **operator** (`LegacyBaseOperator`) – Operator to evaluate
*   **initial\_state** (`Union`\[`InitialState`, `QuantumCircuit`]) – Initial state for evolution
*   **evo\_operator** (`LegacyBaseOperator`) – Operator to evolve
*   **evo\_time** (`float`) – Evolution time, has min value of 0
*   **num\_time\_slices** (`int`) – Number of time slices, has minimum value of 1
*   **expansion\_mode** (`str`) – Either `"trotter"` (Lloyd’s method) or `"suzuki"` (for Trotter-Suzuki expansion)
*   **expansion\_order** (`int`) – The Trotter-Suzuki expansion order.
*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – Quantum Instance or Backend

<span id="undefined" />

`__init__(operator, initial_state, evo_operator, evo_time=1, num_time_slices=1, expansion_mode='trotter', expansion_order=1, quantum_instance=None)`

**Parameters**

*   **operator** (`LegacyBaseOperator`) – Operator to evaluate
*   **initial\_state** (`Union`\[`InitialState`, `QuantumCircuit`]) – Initial state for evolution
*   **evo\_operator** (`LegacyBaseOperator`) – Operator to evolve
*   **evo\_time** (`float`) – Evolution time, has min value of 0
*   **num\_time\_slices** (`int`) – Number of time slices, has minimum value of 1
*   **expansion\_mode** (`str`) – Either `"trotter"` (Lloyd’s method) or `"suzuki"` (for Trotter-Suzuki expansion)
*   **expansion\_order** (`int`) – The Trotter-Suzuki expansion order.
*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – Quantum Instance or Backend

## Methods

|                                                                                                                                   |                                              |
| --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| [`__init__`](#qiskit.aqua.algorithms.EOH.__init__ "qiskit.aqua.algorithms.EOH.__init__")(operator, initial\_state, evo\_operator) | **type operator**`LegacyBaseOperator`        |
| [`construct_circuit`](#qiskit.aqua.algorithms.EOH.construct_circuit "qiskit.aqua.algorithms.EOH.construct_circuit")()             | Construct the circuit.                       |
| [`run`](#qiskit.aqua.algorithms.EOH.run "qiskit.aqua.algorithms.EOH.run")(\[quantum\_instance])                                   | Execute the algorithm with selected backend. |
| [`set_backend`](#qiskit.aqua.algorithms.EOH.set_backend "qiskit.aqua.algorithms.EOH.set_backend")(backend, \*\*kwargs)            | Sets backend with configuration.             |

## Attributes

|                                                                                                                  |                           |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------- |
| [`backend`](#qiskit.aqua.algorithms.EOH.backend "qiskit.aqua.algorithms.EOH.backend")                            | Returns backend.          |
| [`quantum_instance`](#qiskit.aqua.algorithms.EOH.quantum_instance "qiskit.aqua.algorithms.EOH.quantum_instance") | Returns quantum instance. |
| [`random`](#qiskit.aqua.algorithms.EOH.random "qiskit.aqua.algorithms.EOH.random")                               | Return a numpy random.    |

<span id="undefined" />

`property backend`

Returns backend.

**Return type**

`Union`\[`Backend`, `BaseBackend`]

<span id="undefined" />

`construct_circuit()`

Construct the circuit.

**Returns**

the circuit.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

<span id="undefined" />

`property quantum_instance`

Returns quantum instance.

**Return type**

`Optional`\[`QuantumInstance`]

<span id="undefined" />

`property random`

Return a numpy random.

<span id="undefined" />

`run(quantum_instance=None, **kwargs)`

Execute the algorithm with selected backend.

**Parameters**

*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – the experimental setting.
*   **kwargs** (*dict*) – kwargs

**Returns**

results of an algorithm.

**Return type**

dict

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – If a quantum instance or backend has not been provided

<span id="undefined" />

`set_backend(backend, **kwargs)`

Sets backend with configuration.

**Return type**

`None`
