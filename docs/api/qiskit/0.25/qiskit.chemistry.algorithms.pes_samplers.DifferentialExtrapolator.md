# qiskit.chemistry.algorithms.pes\_samplers.DifferentialExtrapolator

<span id="undefined" />

`DifferentialExtrapolator(degree=1, model=None)`

An extrapolator based on treating each param set as a point in space, and fitting a Hamiltonian which evolves each point to the next. The user specifies the type of regression model to perform fitting, and a degree which adds derivatives to the values in the point vector; serving as features for the regression model. WARNING: Should only be used with window. Using no window includes points after the point being extrapolated in the data window.

Constructor.

**Parameters**

*   **model** (`Union`\[`LinearRegression`, `Ridge`, `RidgeCV`, `SGDRegressor`, `None`]) – Regression model (from sklearn) to be used for fitting variational parameters. Currently supports the following models: LinearRegression(), Ridge(), RidgeCV(), and SGDRegressor().
*   **degree** (`int`) – Specifies (degree -1) derivatives to be added as ‘features’ in regression model.

<span id="undefined" />

`__init__(degree=1, model=None)`

Constructor.

**Parameters**

*   **model** (`Union`\[`LinearRegression`, `Ridge`, `RidgeCV`, `SGDRegressor`, `None`]) – Regression model (from sklearn) to be used for fitting variational parameters. Currently supports the following models: LinearRegression(), Ridge(), RidgeCV(), and SGDRegressor().
*   **degree** (`int`) – Specifies (degree -1) derivatives to be added as ‘features’ in regression model.

## Methods

|                                                                                                                                                                                                      |                                                                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.chemistry.algorithms.pes_samplers.DifferentialExtrapolator.__init__ "qiskit.chemistry.algorithms.pes_samplers.DifferentialExtrapolator.__init__")(\[degree, model])             | Constructor.                                                                      |
| [`extrapolate`](#qiskit.chemistry.algorithms.pes_samplers.DifferentialExtrapolator.extrapolate "qiskit.chemistry.algorithms.pes_samplers.DifferentialExtrapolator.extrapolate")(points, param\_dict) | Extrapolate at specified point of interest given a set of variational parameters. |
| [`factory`](#qiskit.chemistry.algorithms.pes_samplers.DifferentialExtrapolator.factory "qiskit.chemistry.algorithms.pes_samplers.DifferentialExtrapolator.factory")(mode, \*\*kwargs)                | Factory method for constructing extrapolators.                                    |

<span id="undefined" />

`extrapolate(points, param_dict)`

Extrapolate at specified point of interest given a set of variational parameters. Each parameter list and list of numerical gradients is treated as a single point in vector space. The regression model tries to fit a Hamiltonian that describes the evolution from one parameter set (and its gradient features) at point r, to another parameter set at point, r + epsilon. The regression model is then used to predict the parameter set at the point of interest. Note that this extrapolation technique does not explicitly use the spacing of the points (step size) but rather infers it from the list of parameter values.

**Parameters**

*   **points** (`List`\[`float`]) – List of point(s) to be used for extrapolation. Can represent some degree of freedom, ex, interatomic distance.
*   **param\_dict** (`Optional`\[`Dict`\[`float`, `List`\[`float`]]]) – Dictionary of variational parameters. Each key is the point
*   **the value is a list of the variational parameters.** (*and*) –

**Return type**

`Dict`\[`float`, `List`\[`float`]]

**Returns**

Dictionary of variational parameters for extrapolated point(s).

<span id="undefined" />

`static factory(mode, **kwargs)`

Factory method for constructing extrapolators.

**Parameters**

*   **mode** (`str`) – Extrapolator to instantiate. Can be one of: - ‘window’ - ‘poly’ - ‘diff\_model’ - ‘pca’ - ‘l1’
*   **kwargs** – arguments to be passed to the constructor of an extrapolator

**Return type**

`Extrapolator`

**Returns**

A newly created extrapolator instance.

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – if specified mode is unknown.
