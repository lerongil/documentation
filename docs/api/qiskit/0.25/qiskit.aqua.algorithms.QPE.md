# qiskit.aqua.algorithms.QPE

<span id="undefined" />

`QPE(operator=None, state_in=None, iqft=None, num_time_slices=1, num_ancillae=1, expansion_mode='trotter', expansion_order=1, shallow_circuit_concat=False, quantum_instance=None)`

The Quantum Phase Estimation algorithm.

QPE (also sometimes abbreviated as PEA, for Phase Estimation Algorithm), has two quantum registers, **control** and **target**, where the control consists of several qubits initially put in uniform superposition, and the target a set of qubits prepared in an eigenstate (often a guess of the eigenstate) of the unitary operator of a quantum system. QPE then evolves the target under the control using dynamics on the unitary operator. The information of the corresponding eigenvalue is then ‘kicked-back’ into the phases of the control register, which can then be deconvoluted by an Inverse Quantum Fourier Transform (IQFT), and measured for read-out in binary decimal format. QPE also requires a reasonably good estimate of the eigen wave function to start the process. For example, when estimating molecular ground energies in chemistry, the Hartree-Fock method could be used to provide such trial eigen wave functions.

**Parameters**

*   **operator** (`Union`\[`OperatorBase`, `LegacyBaseOperator`, `None`]) – The Hamiltonian Operator
*   **state\_in** (`Union`\[`QuantumCircuit`, `InitialState`, `None`]) – An optional InitialState component representing an initial quantum state. `None` may be supplied.
*   **iqft** (`Optional`\[`QuantumCircuit`]) – A Inverse Quantum Fourier Transform component
*   **num\_time\_slices** (`int`) – The number of time slices, has a minimum value of 1.
*   **num\_ancillae** (`int`) – The number of ancillary qubits to use for the measurement, has a min. value of 1.
*   **expansion\_mode** (`str`) – The expansion mode (‘trotter’|’suzuki’)
*   **expansion\_order** (`int`) – The suzuki expansion order, has a min. value of 1.
*   **shallow\_circuit\_concat** (`bool`) – Set True to use shallow (cheap) mode for circuit concatenation of evolution slices. By default this is False. See `qiskit.aqua.operators.common.evolution_instruction()` for more information.
*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – Quantum Instance or Backend

<span id="undefined" />

`__init__(operator=None, state_in=None, iqft=None, num_time_slices=1, num_ancillae=1, expansion_mode='trotter', expansion_order=1, shallow_circuit_concat=False, quantum_instance=None)`

**Parameters**

*   **operator** (`Union`\[`OperatorBase`, `LegacyBaseOperator`, `None`]) – The Hamiltonian Operator
*   **state\_in** (`Union`\[`QuantumCircuit`, `InitialState`, `None`]) – An optional InitialState component representing an initial quantum state. `None` may be supplied.
*   **iqft** (`Optional`\[`QuantumCircuit`]) – A Inverse Quantum Fourier Transform component
*   **num\_time\_slices** (`int`) – The number of time slices, has a minimum value of 1.
*   **num\_ancillae** (`int`) – The number of ancillary qubits to use for the measurement, has a min. value of 1.
*   **expansion\_mode** (`str`) – The expansion mode (‘trotter’|’suzuki’)
*   **expansion\_order** (`int`) – The suzuki expansion order, has a min. value of 1.
*   **shallow\_circuit\_concat** (`bool`) – Set True to use shallow (cheap) mode for circuit concatenation of evolution slices. By default this is False. See `qiskit.aqua.operators.common.evolution_instruction()` for more information.
*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – Quantum Instance or Backend

## Methods

|                                                                                                                                                                |                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.algorithms.QPE.__init__ "qiskit.aqua.algorithms.QPE.__init__")(\[operator, state\_in, iqft, …])                                      | **type operator**`Union`\[`OperatorBase`, `LegacyBaseOperator`, `None`]      |
| [`compute_minimum_eigenvalue`](#qiskit.aqua.algorithms.QPE.compute_minimum_eigenvalue "qiskit.aqua.algorithms.QPE.compute_minimum_eigenvalue")(\[operator, …]) | Computes minimum eigenvalue.                                                 |
| [`construct_circuit`](#qiskit.aqua.algorithms.QPE.construct_circuit "qiskit.aqua.algorithms.QPE.construct_circuit")(\[measurement])                            | Construct circuit.                                                           |
| [`run`](#qiskit.aqua.algorithms.QPE.run "qiskit.aqua.algorithms.QPE.run")(\[quantum\_instance])                                                                | Execute the algorithm with selected backend.                                 |
| [`set_backend`](#qiskit.aqua.algorithms.QPE.set_backend "qiskit.aqua.algorithms.QPE.set_backend")(backend, \*\*kwargs)                                         | Sets backend with configuration.                                             |
| [`supports_aux_operators`](#qiskit.aqua.algorithms.QPE.supports_aux_operators "qiskit.aqua.algorithms.QPE.supports_aux_operators")()                           | Whether computing the expectation value of auxiliary operators is supported. |

## Attributes

|                                                                                                                  |                           |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------- |
| [`aux_operators`](#qiskit.aqua.algorithms.QPE.aux_operators "qiskit.aqua.algorithms.QPE.aux_operators")          | Returns aux operators     |
| [`backend`](#qiskit.aqua.algorithms.QPE.backend "qiskit.aqua.algorithms.QPE.backend")                            | Returns backend.          |
| [`operator`](#qiskit.aqua.algorithms.QPE.operator "qiskit.aqua.algorithms.QPE.operator")                         | Returns operator          |
| [`quantum_instance`](#qiskit.aqua.algorithms.QPE.quantum_instance "qiskit.aqua.algorithms.QPE.quantum_instance") | Returns quantum instance. |
| [`random`](#qiskit.aqua.algorithms.QPE.random "qiskit.aqua.algorithms.QPE.random")                               | Return a numpy random.    |

<span id="undefined" />

`property aux_operators`

Returns aux operators

**Return type**

`Optional`\[`List`\[`Union`\[`OperatorBase`, `LegacyBaseOperator`]]]

<span id="undefined" />

`property backend`

Returns backend.

**Return type**

`Union`\[`Backend`, `BaseBackend`]

<span id="undefined" />

`compute_minimum_eigenvalue(operator=None, aux_operators=None)`

Computes minimum eigenvalue. Operator and aux\_operators can be supplied here and if not None will override any already set into algorithm so it can be reused with different operators. While an operator is required by algorithms, aux\_operators are optional. To ‘remove’ a previous aux\_operators array use an empty list here.

**Parameters**

*   **operator** (`Union`\[`OperatorBase`, `LegacyBaseOperator`, `None`]) – If not None replaces operator in algorithm
*   **aux\_operators** (`Optional`\[`List`\[`Union`\[`OperatorBase`, `LegacyBaseOperator`]]]) – If not None replaces aux\_operators in algorithm

**Return type**

`MinimumEigensolverResult`

**Returns**

MinimumEigensolverResult

<span id="undefined" />

`construct_circuit(measurement=False)`

Construct circuit.

**Parameters**

**measurement** (`bool`) – Boolean flag to indicate if measurement should be included in the circuit.

**Returns**

quantum circuit.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

<span id="undefined" />

`property operator`

Returns operator

**Return type**

`Optional`\[`LegacyBaseOperator`]

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

<span id="undefined" />

`classmethod supports_aux_operators()`

Whether computing the expectation value of auxiliary operators is supported.

If the minimum eigensolver computes an eigenstate of the main operator then it can compute the expectation value of the aux\_operators for that state. Otherwise they will be ignored.

**Return type**

`bool`

**Returns**

True if aux\_operator expectations can be evaluated, False otherwise
