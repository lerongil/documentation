# qiskit.algorithms.NumPyMinimumEigensolver

<span id="undefined" />

`NumPyMinimumEigensolver(filter_criterion=None)`

The Numpy Minimum Eigensolver algorithm.

**Parameters**

**filter\_criterion** (`Optional`\[`Callable`\[\[`Union`\[`List`, `ndarray`], `float`, `Optional`\[`List`\[`float`]]], `bool`]]) – callable that allows to filter eigenvalues/eigenstates. The minimum eigensolver is only searching over feasible states and returns an eigenstate that has the smallest eigenvalue among feasible states. The callable has the signature filter(eigenstate, eigenvalue, aux\_values) and must return a boolean to indicate whether to consider this value or not. If there is no feasible element, the result can even be empty.

<span id="undefined" />

`__init__(filter_criterion=None)`

**Parameters**

**filter\_criterion** (`Optional`\[`Callable`\[\[`Union`\[`List`, `ndarray`], `float`, `Optional`\[`List`\[`float`]]], `bool`]]) – callable that allows to filter eigenvalues/eigenstates. The minimum eigensolver is only searching over feasible states and returns an eigenstate that has the smallest eigenvalue among feasible states. The callable has the signature filter(eigenstate, eigenvalue, aux\_values) and must return a boolean to indicate whether to consider this value or not. If there is no feasible element, the result can even be empty.

## Methods

|                                                                                                                                                                                              |                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.algorithms.NumPyMinimumEigensolver.__init__ "qiskit.algorithms.NumPyMinimumEigensolver.__init__")(\[filter\_criterion])                                                 | **type filter\_criterion**`Optional`\[`Callable`\[\[`Union`\[`List`, `ndarray`], `float`, `Optional`\[`List`\[`float`]]], `bool`]] |
| [`compute_minimum_eigenvalue`](#qiskit.algorithms.NumPyMinimumEigensolver.compute_minimum_eigenvalue "qiskit.algorithms.NumPyMinimumEigensolver.compute_minimum_eigenvalue")(operator\[, …]) | Computes minimum eigenvalue.                                                                                                       |
| [`supports_aux_operators`](#qiskit.algorithms.NumPyMinimumEigensolver.supports_aux_operators "qiskit.algorithms.NumPyMinimumEigensolver.supports_aux_operators")()                           | Whether computing the expectation value of auxiliary operators is supported.                                                       |

## Attributes

|                                                                                                                                                |                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`filter_criterion`](#qiskit.algorithms.NumPyMinimumEigensolver.filter_criterion "qiskit.algorithms.NumPyMinimumEigensolver.filter_criterion") | returns the filter criterion if set |

<span id="undefined" />

`compute_minimum_eigenvalue(operator, aux_operators=None)`

Computes minimum eigenvalue. Operator and aux\_operators can be supplied here and if not None will override any already set into algorithm so it can be reused with different operators. While an operator is required by algorithms, aux\_operators are optional. To ‘remove’ a previous aux\_operators array use an empty list here.

**Parameters**

*   **operator** (`OperatorBase`) – Qubit operator of the Observable
*   **aux\_operators** (`Optional`\[`List`\[`Optional`\[`OperatorBase`]]]) – Optional list of auxiliary operators to be evaluated with the eigenstate of the minimum eigenvalue main result and their expectation values returned. For instance in chemistry these can be dipole operators, total particle count operators so we can get values for these at the ground state.

**Return type**

`MinimumEigensolverResult`

**Returns**

MinimumEigensolverResult

<span id="undefined" />

`property filter_criterion`

returns the filter criterion if set

**Return type**

`Optional`\[`Callable`\[\[`Union`\[`List`, `ndarray`], `float`, `Optional`\[`List`\[`float`]]], `bool`]]

<span id="undefined" />

`classmethod supports_aux_operators()`

Whether computing the expectation value of auxiliary operators is supported.

If the minimum eigensolver computes an eigenstate of the main operator then it can compute the expectation value of the aux\_operators for that state. Otherwise they will be ignored.

**Return type**

`bool`

**Returns**

True if aux\_operator expectations can be evaluated, False otherwise
