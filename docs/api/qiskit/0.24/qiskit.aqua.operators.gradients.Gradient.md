<span id="qiskit-aqua-operators-gradients-gradient" />

# qiskit.aqua.operators.gradients.Gradient

<span id="undefined" />

`Gradient(grad_method='param_shift', **kwargs)`

Convert an operator expression to the first-order gradient.

**Parameters**

*   **grad\_method** (`Union`\[`str`, `CircuitGradient`]) – The method used to compute the state/probability gradient. Can be either `'param_shift'` or `'lin_comb'` or `'fin_diff'`. Ignored for gradients w\.r.t observable parameters.
*   **kwargs** (*dict*) – Optional parameters for a CircuitGradient

**Raises**

**ValueError** – If method != `fin_diff` and `epsilon` is not None.

<span id="undefined" />

`__init__(grad_method='param_shift', **kwargs)`

**Parameters**

*   **grad\_method** (`Union`\[`str`, `CircuitGradient`]) – The method used to compute the state/probability gradient. Can be either `'param_shift'` or `'lin_comb'` or `'fin_diff'`. Ignored for gradients w\.r.t observable parameters.
*   **kwargs** (*dict*) – Optional parameters for a CircuitGradient

**Raises**

**ValueError** – If method != `fin_diff` and `epsilon` is not None.

## Methods

|                                                                                                                                                                                             |                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.operators.gradients.Gradient.__init__ "qiskit.aqua.operators.gradients.Gradient.__init__")(\[grad\_method])                                                       | **type grad\_method**`Union`\[`str`, `CircuitGradient`]                                                    |
| [`convert`](#qiskit.aqua.operators.gradients.Gradient.convert "qiskit.aqua.operators.gradients.Gradient.convert")(operator\[, params])                                                      | **type operator**`OperatorBase`                                                                            |
| [`get_gradient`](#qiskit.aqua.operators.gradients.Gradient.get_gradient "qiskit.aqua.operators.gradients.Gradient.get_gradient")(operator, params)                                          | Get the gradient for the given operator w\.r.t.                                                            |
| [`gradient_wrapper`](#qiskit.aqua.operators.gradients.Gradient.gradient_wrapper "qiskit.aqua.operators.gradients.Gradient.gradient_wrapper")(operator, bind\_params\[, …])                  | Get a callable function which provides the respective gradient, Hessian or QFI for given parameter values. |
| [`parameter_expression_grad`](#qiskit.aqua.operators.gradients.Gradient.parameter_expression_grad "qiskit.aqua.operators.gradients.Gradient.parameter_expression_grad")(param\_expr, param) | Get the derivative of a parameter expression w\.r.t.                                                       |

## Attributes

|                                                                                                                               |                            |
| ----------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| [`grad_method`](#qiskit.aqua.operators.gradients.Gradient.grad_method "qiskit.aqua.operators.gradients.Gradient.grad_method") | Returns `CircuitGradient`. |

<span id="undefined" />

`convert(operator, params=None)`

**Parameters**

*   **operator** (`OperatorBase`) – The operator we are taking the gradient of.
*   **params** (`Union`\[`ParameterVector`, `ParameterExpression`, `List`\[`ParameterExpression`], `None`]) – params: The parameters we are taking the gradient with respect to.

**Return type**

`OperatorBase`

**Returns**

An operator whose evaluation yields the Gradient.

**Raises**

**ValueError** – If `params` contains a parameter not present in `operator`.

<span id="undefined" />

`get_gradient(operator, params)`

Get the gradient for the given operator w\.r.t. the given parameters

**Parameters**

*   **operator** (`OperatorBase`) – Operator w\.r.t. which we take the gradient.
*   **params** (`Union`\[`ParameterExpression`, `ParameterVector`, `List`\[`ParameterExpression`]]) – Parameters w\.r.t. which we compute the gradient.

**Return type**

`OperatorBase`

**Returns**

Operator which represents the gradient w\.r.t. the given params.

**Raises**

*   **ValueError** – If `params` contains a parameter not present in `operator`.
*   [**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – If the coefficient of the operator could not be reduced to 1.
*   [**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – If the differentiation of a combo\_fn requires JAX but the package is not installed.
*   **TypeError** – If the operator does not include a StateFn given by a quantum circuit
*   **Exception** – Unintended code is reached

<span id="undefined" />

`property grad_method`

Returns `CircuitGradient`.

**Return type**

`CircuitGradient`

**Returns**

`CircuitGradient`.

<span id="undefined" />

`gradient_wrapper(operator, bind_params, grad_params=None, backend=None)`

Get a callable function which provides the respective gradient, Hessian or QFI for given parameter values. This callable can be used as gradient function for optimizers.

**Parameters**

*   **operator** (`OperatorBase`) – The operator for which we want to get the gradient, Hessian or QFI.
*   **bind\_params** (`Union`\[`ParameterExpression`, `ParameterVector`, `List`\[`ParameterExpression`]]) – The operator parameters to which the parameter values are assigned.
*   **grad\_params** (`Union`\[`ParameterExpression`, `ParameterVector`, `List`\[`ParameterExpression`], `Tuple`\[`ParameterExpression`, `ParameterExpression`], `List`\[`Tuple`\[`ParameterExpression`, `ParameterExpression`]], `None`]) – The parameters with respect to which we are taking the gradient, Hessian or QFI. If grad\_params = None, then grad\_params = bind\_params
*   **backend** (`Union`\[`BaseBackend`, `QuantumInstance`, `None`]) – The quantum backend or QuantumInstance to use to evaluate the gradient, Hessian or QFI.

**Returns**

Function to compute a gradient, Hessian or QFI. The function takes an iterable as argument which holds the parameter values.

**Return type**

callable(param\_values)

<span id="undefined" />

`static parameter_expression_grad(param_expr, param)`

Get the derivative of a parameter expression w\.r.t. the given parameter.

**Parameters**

*   **param\_expr** (`ParameterExpression`) – The Parameter Expression for which we compute the derivative
*   **param** (`ParameterExpression`) – Parameter w\.r.t. which we want to take the derivative

**Return type**

`Union`\[`ParameterExpression`, `float`]

**Returns**

ParameterExpression representing the gradient of param\_expr w\.r.t. param
