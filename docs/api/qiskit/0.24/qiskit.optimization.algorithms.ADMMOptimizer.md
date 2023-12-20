<span id="qiskit-optimization-algorithms-admmoptimizer" />

# qiskit.optimization.algorithms.ADMMOptimizer

<span id="undefined" />

`ADMMOptimizer(qubo_optimizer=None, continuous_optimizer=None, params=None)`

An implementation of the ADMM-based heuristic.

This algorithm is introduced in \[1].

**References:**

**\[1] Gambella, C., & Simonetto, A. (2020). Multi-block ADMM Heuristics for Mixed-Binary**

Optimization on Classical and Quantum Computers. arXiv preprint arXiv:2001.02069.

**Parameters**

*   **qubo\_optimizer** (`Optional`\[`OptimizationAlgorithm`]) – An instance of OptimizationAlgorithm that can effectively solve QUBO problems. If not specified then [`MinimumEigenOptimizer`](qiskit.optimization.algorithms.MinimumEigenOptimizer#qiskit.optimization.algorithms.MinimumEigenOptimizer "qiskit.optimization.algorithms.MinimumEigenOptimizer") initialized with an instance of `NumPyMinimumEigensolver` will be used.
*   **continuous\_optimizer** (`Optional`\[`OptimizationAlgorithm`]) – An instance of OptimizationAlgorithm that can solve continuous problems. If not specified then [`SlsqpOptimizer`](qiskit.optimization.algorithms.SlsqpOptimizer#qiskit.optimization.algorithms.SlsqpOptimizer "qiskit.optimization.algorithms.SlsqpOptimizer") will be used.
*   **params** (`Optional`\[`ADMMParameters`]) – An instance of ADMMParameters.

<span id="undefined" />

`__init__(qubo_optimizer=None, continuous_optimizer=None, params=None)`

**Parameters**

*   **qubo\_optimizer** (`Optional`\[`OptimizationAlgorithm`]) – An instance of OptimizationAlgorithm that can effectively solve QUBO problems. If not specified then [`MinimumEigenOptimizer`](qiskit.optimization.algorithms.MinimumEigenOptimizer#qiskit.optimization.algorithms.MinimumEigenOptimizer "qiskit.optimization.algorithms.MinimumEigenOptimizer") initialized with an instance of `NumPyMinimumEigensolver` will be used.
*   **continuous\_optimizer** (`Optional`\[`OptimizationAlgorithm`]) – An instance of OptimizationAlgorithm that can solve continuous problems. If not specified then [`SlsqpOptimizer`](qiskit.optimization.algorithms.SlsqpOptimizer#qiskit.optimization.algorithms.SlsqpOptimizer "qiskit.optimization.algorithms.SlsqpOptimizer") will be used.
*   **params** (`Optional`\[`ADMMParameters`]) – An instance of ADMMParameters.

## Methods

|                                                                                                                                                                              |                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.optimization.algorithms.ADMMOptimizer.__init__ "qiskit.optimization.algorithms.ADMMOptimizer.__init__")(\[qubo\_optimizer, …])                          | **type qubo\_optimizer**`Optional`\[`OptimizationAlgorithm`]                              |
| [`get_compatibility_msg`](#qiskit.optimization.algorithms.ADMMOptimizer.get_compatibility_msg "qiskit.optimization.algorithms.ADMMOptimizer.get_compatibility_msg")(problem) | Checks whether a given problem can be solved with the optimizer implementing this method. |
| [`is_compatible`](#qiskit.optimization.algorithms.ADMMOptimizer.is_compatible "qiskit.optimization.algorithms.ADMMOptimizer.is_compatible")(problem)                         | Checks whether a given problem can be solved with the optimizer implementing this method. |
| [`solve`](#qiskit.optimization.algorithms.ADMMOptimizer.solve "qiskit.optimization.algorithms.ADMMOptimizer.solve")(problem)                                                 | Tries to solves the given problem using ADMM algorithm.                                   |

## Attributes

|                                                                                                                                    |                                              |
| ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| [`parameters`](#qiskit.optimization.algorithms.ADMMOptimizer.parameters "qiskit.optimization.algorithms.ADMMOptimizer.parameters") | Returns current parameters of the optimizer. |

<span id="undefined" />

`get_compatibility_msg(problem)`

Checks whether a given problem can be solved with the optimizer implementing this method.

**Parameters**

**problem** (`QuadraticProgram`) – The optimization problem to check compatibility.

**Return type**

`Optional`\[`str`]

**Returns**

Returns True if the problem is compatible, otherwise raises an error.

**Raises**

[**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError#qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – If the problem is not compatible with the ADMM optimizer.

<span id="undefined" />

`is_compatible(problem)`

Checks whether a given problem can be solved with the optimizer implementing this method.

**Parameters**

**problem** (`QuadraticProgram`) – The optimization problem to check compatibility.

**Return type**

`bool`

**Returns**

Returns True if the problem is compatible, False otherwise.

<span id="undefined" />

`property parameters`

Returns current parameters of the optimizer.

**Return type**

`ADMMParameters`

**Returns**

The parameters.

<span id="undefined" />

`solve(problem)`

Tries to solves the given problem using ADMM algorithm.

**Parameters**

**problem** (`QuadraticProgram`) – The problem to be solved.

**Return type**

`ADMMOptimizationResult`

**Returns**

The result of the optimizer applied to the problem.

**Raises**

[**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError#qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – If the problem is not compatible with the ADMM optimizer.
