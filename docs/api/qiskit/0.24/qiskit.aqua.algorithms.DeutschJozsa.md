<span id="qiskit-aqua-algorithms-deutschjozsa" />

# qiskit.aqua.algorithms.DeutschJozsa

<span id="undefined" />

`DeutschJozsa(oracle, quantum_instance=None)`

The Deutsch-Jozsa algorithm.

The Deutsch-Jozsa algorithm was one of the first known quantum algorithms that showed an exponential speedup compared to a deterministic (non-probabilistic) classical algorithm, given a black box oracle function. The algorithm determines whether the given function $f:\{0,1\}^n \rightarrow \{0,1\}$ is constant or balanced. A constant function maps all inputs to 0 or 1, and a balanced function maps half of its inputs to 0 and the other half to 1.

Note: the [`TruthTableOracle`](qiskit.aqua.components.oracles.TruthTableOracle#qiskit.aqua.components.oracles.TruthTableOracle "qiskit.aqua.components.oracles.TruthTableOracle") facilitates creating a constant or balanced function but any oracle can be used as long as the boolean function implemented by the oracle indeed satisfies the constraint of being either constant or balanced.

**Parameters**

*   **oracle** (`Oracle`) – The oracle component
*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – Quantum Instance or Backend

<span id="undefined" />

`__init__(oracle, quantum_instance=None)`

**Parameters**

*   **oracle** (`Oracle`) – The oracle component
*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – Quantum Instance or Backend

## Methods

|                                                                                                                                                       |                                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| [`__init__`](#qiskit.aqua.algorithms.DeutschJozsa.__init__ "qiskit.aqua.algorithms.DeutschJozsa.__init__")(oracle\[, quantum\_instance])              | **type oracle**`Oracle`                      |
| [`construct_circuit`](#qiskit.aqua.algorithms.DeutschJozsa.construct_circuit "qiskit.aqua.algorithms.DeutschJozsa.construct_circuit")(\[measurement]) | Construct the quantum circuit                |
| [`run`](#qiskit.aqua.algorithms.DeutschJozsa.run "qiskit.aqua.algorithms.DeutschJozsa.run")(\[quantum\_instance])                                     | Execute the algorithm with selected backend. |
| [`set_backend`](#qiskit.aqua.algorithms.DeutschJozsa.set_backend "qiskit.aqua.algorithms.DeutschJozsa.set_backend")(backend, \*\*kwargs)              | Sets backend with configuration.             |

## Attributes

|                                                                                                                                    |                           |
| ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| [`backend`](#qiskit.aqua.algorithms.DeutschJozsa.backend "qiskit.aqua.algorithms.DeutschJozsa.backend")                            | Returns backend.          |
| [`quantum_instance`](#qiskit.aqua.algorithms.DeutschJozsa.quantum_instance "qiskit.aqua.algorithms.DeutschJozsa.quantum_instance") | Returns quantum instance. |
| [`random`](#qiskit.aqua.algorithms.DeutschJozsa.random "qiskit.aqua.algorithms.DeutschJozsa.random")                               | Return a numpy random.    |

<span id="undefined" />

`property backend`

Returns backend.

**Return type**

`Union`\[`Backend`, `BaseBackend`]

<span id="undefined" />

`construct_circuit(measurement=False)`

Construct the quantum circuit

**Parameters**

**measurement** (*bool*) – Boolean flag to indicate if measurement should be included in the circuit.

**Returns**

the QuantumCircuit object for the constructed circuit

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
