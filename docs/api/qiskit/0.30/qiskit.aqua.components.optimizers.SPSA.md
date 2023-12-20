# SPSA

<span id="undefined" />

`SPSA(maxiter=1000, save_steps=1, last_avg=1, c0=0.6283185307179586, c1=0.1, c2=0.602, c3=0.101, c4=0, skip_calibration=False, max_trials=None)`

Bases: `qiskit.aqua.components.optimizers.optimizer.Optimizer`

Simultaneous Perturbation Stochastic Approximation (SPSA) optimizer.

SPSA is an algorithmic method for optimizing systems with multiple unknown parameters. As an optimization method, it is appropriately suited to large-scale population models, adaptive modeling, and simulation optimization.

<Admonition title="See also" type="note">
  Many examples are presented at the [SPSA Web site](http://www.jhuapl.edu/SPSA).
</Admonition>

SPSA is a descent method capable of finding global minima, sharing this property with other methods as simulated annealing. Its main feature is the gradient approximation, which requires only two measurements of the objective function, regardless of the dimension of the optimization problem.

<Admonition title="Note" type="note">
  SPSA can be used in the presence of noise, and it is therefore indicated in situations involving measurement uncertainty on a quantum computation when finding a minimum. If you are executing a variational algorithm using a Quantum ASseMbly Language (QASM) simulator or a real device, SPSA would be the most recommended choice among the optimizers provided here.
</Admonition>

The optimization process includes a calibration phase, which requires additional functional evaluations.

For further details, please refer to [https://arxiv.org/pdf/1704.05018v2.pdf#section\*.11](https://arxiv.org/pdf/1704.05018v2.pdf#section*.11) (Supplementary information Section IV.)

**Parameters**

*   **maxiter** (`int`) – Maximum number of iterations to perform.
*   **save\_steps** (`int`) – Save intermediate info every save\_steps step. It has a min. value of 1.
*   **last\_avg** (`int`) – Averaged parameters over the last\_avg iterations. If last\_avg = 1, only the last iteration is considered. It has a min. value of 1.
*   **c0** (`float`) – The initial a. Step size to update parameters.
*   **c1** (`float`) – The initial c. The step size used to approximate gradient.
*   **c2** (`float`) – The alpha in the paper, and it is used to adjust a (c0) at each iteration.
*   **c3** (`float`) – The gamma in the paper, and it is used to adjust c (c1) at each iteration.
*   **c4** (`float`) – The parameter used to control a as well.
*   **skip\_calibration** (`bool`) – Skip calibration and use provided c(s) as is.
*   **max\_trials** (`Optional`\[`int`]) – Deprecated, use maxiter.

## Methods

|                                                                                                                                                                                                                     |                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`get_support_level`](qiskit.aqua.components.optimizers.SPSA.get_support_level#qiskit.aqua.components.optimizers.SPSA.get_support_level "qiskit.aqua.components.optimizers.SPSA.get_support_level")                 | return support level dictionary                                                                           |
| [`gradient_num_diff`](qiskit.aqua.components.optimizers.SPSA.gradient_num_diff#qiskit.aqua.components.optimizers.SPSA.gradient_num_diff "qiskit.aqua.components.optimizers.SPSA.gradient_num_diff")                 | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`optimize`](qiskit.aqua.components.optimizers.SPSA.optimize#qiskit.aqua.components.optimizers.SPSA.optimize "qiskit.aqua.components.optimizers.SPSA.optimize")                                                     | Perform optimization.                                                                                     |
| [`print_options`](qiskit.aqua.components.optimizers.SPSA.print_options#qiskit.aqua.components.optimizers.SPSA.print_options "qiskit.aqua.components.optimizers.SPSA.print_options")                                 | Print algorithm-specific options.                                                                         |
| [`set_max_evals_grouped`](qiskit.aqua.components.optimizers.SPSA.set_max_evals_grouped#qiskit.aqua.components.optimizers.SPSA.set_max_evals_grouped "qiskit.aqua.components.optimizers.SPSA.set_max_evals_grouped") | Set max evals grouped                                                                                     |
| [`set_options`](qiskit.aqua.components.optimizers.SPSA.set_options#qiskit.aqua.components.optimizers.SPSA.set_options "qiskit.aqua.components.optimizers.SPSA.set_options")                                         | Sets or updates values in the options dictionary.                                                         |
| [`wrap_function`](qiskit.aqua.components.optimizers.SPSA.wrap_function#qiskit.aqua.components.optimizers.SPSA.wrap_function "qiskit.aqua.components.optimizers.SPSA.wrap_function")                                 | Wrap the function to implicitly inject the args at the call of the function.                              |

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
