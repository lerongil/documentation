# Optimizer

<span id="undefined" />

`Optimizer`

Bases: `abc.ABC`

Base class for optimization algorithm.

Initialize the optimization algorithm, setting the support level for \_gradient\_support\_level, \_bound\_support\_level, \_initial\_point\_support\_level, and empty options.

## Methods

|                                                                                                                                                                                                                     |                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`get_support_level`](qiskit.algorithms.optimizers.Optimizer.get_support_level#qiskit.algorithms.optimizers.Optimizer.get_support_level "qiskit.algorithms.optimizers.Optimizer.get_support_level")                 | Return support level dictionary                                                                           |
| [`gradient_num_diff`](qiskit.algorithms.optimizers.Optimizer.gradient_num_diff#qiskit.algorithms.optimizers.Optimizer.gradient_num_diff "qiskit.algorithms.optimizers.Optimizer.gradient_num_diff")                 | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`minimize`](qiskit.algorithms.optimizers.Optimizer.minimize#qiskit.algorithms.optimizers.Optimizer.minimize "qiskit.algorithms.optimizers.Optimizer.minimize")                                                     | Minimize the scalar function.                                                                             |
| [`optimize`](qiskit.algorithms.optimizers.Optimizer.optimize#qiskit.algorithms.optimizers.Optimizer.optimize "qiskit.algorithms.optimizers.Optimizer.optimize")                                                     | Perform optimization.                                                                                     |
| [`print_options`](qiskit.algorithms.optimizers.Optimizer.print_options#qiskit.algorithms.optimizers.Optimizer.print_options "qiskit.algorithms.optimizers.Optimizer.print_options")                                 | Print algorithm-specific options.                                                                         |
| [`set_max_evals_grouped`](qiskit.algorithms.optimizers.Optimizer.set_max_evals_grouped#qiskit.algorithms.optimizers.Optimizer.set_max_evals_grouped "qiskit.algorithms.optimizers.Optimizer.set_max_evals_grouped") | Set max evals grouped                                                                                     |
| [`set_options`](qiskit.algorithms.optimizers.Optimizer.set_options#qiskit.algorithms.optimizers.Optimizer.set_options "qiskit.algorithms.optimizers.Optimizer.set_options")                                         | Sets or updates values in the options dictionary.                                                         |
| [`wrap_function`](qiskit.algorithms.optimizers.Optimizer.wrap_function#qiskit.algorithms.optimizers.Optimizer.wrap_function "qiskit.algorithms.optimizers.Optimizer.wrap_function")                                 | Wrap the function to implicitly inject the args at the call of the function.                              |

## Attributes

<span id="undefined" />

### bounds\_support\_level

Returns bounds support level

<span id="undefined" />

### gradient\_support\_level

Returns gradient support level

<span id="undefined" />

### initial\_point\_support\_level

Returns initial point support level

<span id="undefined" />

### is\_bounds\_ignored

Returns is bounds ignored

<span id="undefined" />

### is\_bounds\_required

Returns is bounds required

<span id="undefined" />

### is\_bounds\_supported

Returns is bounds supported

<span id="undefined" />

### is\_gradient\_ignored

Returns is gradient ignored

<span id="undefined" />

### is\_gradient\_required

Returns is gradient required

<span id="undefined" />

### is\_gradient\_supported

Returns is gradient supported

<span id="undefined" />

### is\_initial\_point\_ignored

Returns is initial point ignored

<span id="undefined" />

### is\_initial\_point\_required

Returns is initial point required

<span id="undefined" />

### is\_initial\_point\_supported

Returns is initial point supported

<span id="undefined" />

### setting

Return setting

<span id="undefined" />

### settings

The optimizer settings in a dictionary format.

The settings can for instance be used for JSON-serialization (if all settings are serializable, which e.g. doesn’t hold per default for callables), such that the optimizer object can be reconstructed as

```python
settings = optimizer.settings
# JSON serialize and send to another server
optimizer = OptimizerClass(**settings)
```

**Return type**

`Dict`\[`str`, `Any`]
