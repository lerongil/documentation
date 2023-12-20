# qiskit.optimization.algorithms.GroverOptimizationResult

<span id="undefined" />

`GroverOptimizationResult(x, fval, variables, operation_counts, n_input_qubits, n_output_qubits, intermediate_fval, threshold, status)`

A result object for Grover Optimization methods.

Constructs a result object with the specific Grover properties.

**Parameters**

*   **x** (`Union`\[`List`\[`float`], `ndarray`]) – The solution of the problem
*   **fval** (`float`) – The value of the objective function of the solution
*   **variables** (`List`\[`Variable`]) – A list of variables defined in the problem
*   **operation\_counts** (`Dict`\[`int`, `Dict`\[`str`, `int`]]) – The counts of each operation performed per iteration.
*   **n\_input\_qubits** (`int`) – The number of qubits used to represent the input.
*   **n\_output\_qubits** (`int`) – The number of qubits used to represent the output.
*   **intermediate\_fval** (`float`) – The intermediate value of the objective function of the solution, that is expected to be identical with `fval`.
*   **threshold** (`float`) – The threshold of Grover algorithm.
*   **status** (`OptimizationResultStatus`) – the termination status of the optimization algorithm.

<span id="undefined" />

`__init__(x, fval, variables, operation_counts, n_input_qubits, n_output_qubits, intermediate_fval, threshold, status)`

Constructs a result object with the specific Grover properties.

**Parameters**

*   **x** (`Union`\[`List`\[`float`], `ndarray`]) – The solution of the problem
*   **fval** (`float`) – The value of the objective function of the solution
*   **variables** (`List`\[`Variable`]) – A list of variables defined in the problem
*   **operation\_counts** (`Dict`\[`int`, `Dict`\[`str`, `int`]]) – The counts of each operation performed per iteration.
*   **n\_input\_qubits** (`int`) – The number of qubits used to represent the input.
*   **n\_output\_qubits** (`int`) – The number of qubits used to represent the output.
*   **intermediate\_fval** (`float`) – The intermediate value of the objective function of the solution, that is expected to be identical with `fval`.
*   **threshold** (`float`) – The threshold of Grover algorithm.
*   **status** (`OptimizationResultStatus`) – the termination status of the optimization algorithm.

## Methods

|                                                                                                                                                                           |                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| [`__init__`](#qiskit.optimization.algorithms.GroverOptimizationResult.__init__ "qiskit.optimization.algorithms.GroverOptimizationResult.__init__")(x, fval, variables, …) | Constructs a result object with the specific Grover properties. |

## Attributes

|                                                                                                                                                                               |                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| [`fval`](#qiskit.optimization.algorithms.GroverOptimizationResult.fval "qiskit.optimization.algorithms.GroverOptimizationResult.fval")                                        | Returns the optimal function value.                                                     |
| [`intermediate_fval`](#qiskit.optimization.algorithms.GroverOptimizationResult.intermediate_fval "qiskit.optimization.algorithms.GroverOptimizationResult.intermediate_fval") | Getter of the intermediate fval                                                         |
| [`n_input_qubits`](#qiskit.optimization.algorithms.GroverOptimizationResult.n_input_qubits "qiskit.optimization.algorithms.GroverOptimizationResult.n_input_qubits")          | Getter of n\_input\_qubits                                                              |
| [`n_output_qubits`](#qiskit.optimization.algorithms.GroverOptimizationResult.n_output_qubits "qiskit.optimization.algorithms.GroverOptimizationResult.n_output_qubits")       | Getter of n\_output\_qubits                                                             |
| [`operation_counts`](#qiskit.optimization.algorithms.GroverOptimizationResult.operation_counts "qiskit.optimization.algorithms.GroverOptimizationResult.operation_counts")    | Get the operation counts.                                                               |
| [`raw_results`](#qiskit.optimization.algorithms.GroverOptimizationResult.raw_results "qiskit.optimization.algorithms.GroverOptimizationResult.raw_results")                   | Return the original results object from the optimization algorithm.                     |
| [`samples`](#qiskit.optimization.algorithms.GroverOptimizationResult.samples "qiskit.optimization.algorithms.GroverOptimizationResult.samples")                               | Returns the list of solution samples                                                    |
| [`status`](#qiskit.optimization.algorithms.GroverOptimizationResult.status "qiskit.optimization.algorithms.GroverOptimizationResult.status")                                  | Returns the termination status of the optimization algorithm.                           |
| [`threshold`](#qiskit.optimization.algorithms.GroverOptimizationResult.threshold "qiskit.optimization.algorithms.GroverOptimizationResult.threshold")                         | Getter of the threshold of Grover algorithm.                                            |
| [`variable_names`](#qiskit.optimization.algorithms.GroverOptimizationResult.variable_names "qiskit.optimization.algorithms.GroverOptimizationResult.variable_names")          | Returns the list of variable names of the optimization problem.                         |
| [`variables`](#qiskit.optimization.algorithms.GroverOptimizationResult.variables "qiskit.optimization.algorithms.GroverOptimizationResult.variables")                         | Returns the list of variables of the optimization problem.                              |
| [`variables_dict`](#qiskit.optimization.algorithms.GroverOptimizationResult.variables_dict "qiskit.optimization.algorithms.GroverOptimizationResult.variables_dict")          | Returns the optimal value as a dictionary of the variable name and corresponding value. |
| [`x`](#qiskit.optimization.algorithms.GroverOptimizationResult.x "qiskit.optimization.algorithms.GroverOptimizationResult.x")                                                 | Returns the optimal value found in the optimization or None in case of FAILURE.         |

<span id="undefined" />

`property fval`

Returns the optimal function value.

**Return type**

`float`

**Returns**

The function value corresponding to the optimal value found in the optimization.

<span id="undefined" />

`property intermediate_fval`

Getter of the intermediate fval

**Return type**

`float`

**Returns**

The intermediate value of fval before interpret.

<span id="undefined" />

`property n_input_qubits`

Getter of n\_input\_qubits

**Return type**

`int`

**Returns**

The number of qubits used to represent the input.

<span id="undefined" />

`property n_output_qubits`

Getter of n\_output\_qubits

**Return type**

`int`

**Returns**

The number of qubits used to represent the output.

<span id="undefined" />

`property operation_counts`

Get the operation counts.

**Return type**

`Dict`\[`int`, `Dict`\[`str`, `int`]]

**Returns**

The counts of each operation performed per iteration.

<span id="undefined" />

`property raw_results`

Return the original results object from the optimization algorithm.

Currently a dump for any leftovers.

**Return type**

`Any`

**Returns**

Additional result information of the optimization algorithm.

<span id="undefined" />

`property samples`

Returns the list of solution samples

**Return type**

`List`\[`SolutionSample`]

**Returns**

The list of solution samples.

<span id="undefined" />

`property status`

Returns the termination status of the optimization algorithm.

**Return type**

`OptimizationResultStatus`

**Returns**

The termination status of the algorithm.

<span id="undefined" />

`property threshold`

Getter of the threshold of Grover algorithm.

**Return type**

`float`

**Returns**

The threshold of Grover algorithm.

<span id="undefined" />

`property variable_names`

Returns the list of variable names of the optimization problem.

**Return type**

`List`\[`str`]

**Returns**

The list of variable names of the optimization problem.

<span id="undefined" />

`property variables`

Returns the list of variables of the optimization problem.

**Return type**

`List`\[`Variable`]

**Returns**

The list of variables.

<span id="undefined" />

`property variables_dict`

Returns the optimal value as a dictionary of the variable name and corresponding value.

**Return type**

`Dict`\[`str`, `float`]

**Returns**

The optimal value as a dictionary of the variable name and corresponding value.

<span id="undefined" />

`property x`

Returns the optimal value found in the optimization or None in case of FAILURE.

**Return type**

`Optional`\[`ndarray`]

**Returns**

The optimal value found in the optimization.
