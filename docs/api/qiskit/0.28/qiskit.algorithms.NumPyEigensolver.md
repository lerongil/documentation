# qiskit.algorithms.NumPyEigensolver

<span id="undefined" />

`NumPyEigensolver(k=1, filter_criterion=None)`

The NumPy Eigensolver algorithm.

NumPy Eigensolver computes up to the first $k$ eigenvalues of a complex-valued square matrix of dimension $n \times n$, with $k \leq n$.

<Admonition title="Note" type="note">
  Operators are automatically converted to SciPy’s `spmatrix` as needed and this conversion can be costly in terms of memory and performance as the operator size, mostly in terms of number of qubits it represents, gets larger.
</Admonition>

**Parameters**

*   **k** (`int`) – How many eigenvalues are to be computed, has a min. value of 1.
*   **filter\_criterion** (`Optional`\[`Callable`\[\[`Union`\[`List`, `ndarray`], `float`, `Optional`\[`List`\[`float`]]], `bool`]]) – callable that allows to filter eigenvalues/eigenstates, only feasible eigenstates are returned in the results. The callable has the signature filter(eigenstate, eigenvalue, aux\_values) and must return a boolean to indicate whether to keep this value in the final returned result or not. If the number of elements that satisfies the criterion is smaller than k then the returned list has fewer elements and can even be empty.

<span id="undefined" />

`__init__(k=1, filter_criterion=None)`

**Parameters**

*   **k** (`int`) – How many eigenvalues are to be computed, has a min. value of 1.
*   **filter\_criterion** (`Optional`\[`Callable`\[\[`Union`\[`List`, `ndarray`], `float`, `Optional`\[`List`\[`float`]]], `bool`]]) – callable that allows to filter eigenvalues/eigenstates, only feasible eigenstates are returned in the results. The callable has the signature filter(eigenstate, eigenvalue, aux\_values) and must return a boolean to indicate whether to keep this value in the final returned result or not. If the number of elements that satisfies the criterion is smaller than k then the returned list has fewer elements and can even be empty.

## Methods

|                                                                                                                                                                        |                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [`__init__`](#qiskit.algorithms.NumPyEigensolver.__init__ "qiskit.algorithms.NumPyEigensolver.__init__")(\[k, filter\_criterion])                                      | **type k**`int`                                                              |
| [`compute_eigenvalues`](#qiskit.algorithms.NumPyEigensolver.compute_eigenvalues "qiskit.algorithms.NumPyEigensolver.compute_eigenvalues")(operator\[, aux\_operators]) | Computes eigenvalues.                                                        |
| [`supports_aux_operators`](#qiskit.algorithms.NumPyEigensolver.supports_aux_operators "qiskit.algorithms.NumPyEigensolver.supports_aux_operators")()                   | Whether computing the expectation value of auxiliary operators is supported. |

## Attributes

|                                                                                                                                  |                                             |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`filter_criterion`](#qiskit.algorithms.NumPyEigensolver.filter_criterion "qiskit.algorithms.NumPyEigensolver.filter_criterion") | returns the filter criterion if set         |
| [`k`](#qiskit.algorithms.NumPyEigensolver.k "qiskit.algorithms.NumPyEigensolver.k")                                              | returns k (number of eigenvalues requested) |

<span id="undefined" />

`compute_eigenvalues(operator, aux_operators=None)`

Computes eigenvalues. Operator and aux\_operators can be supplied here and if not None will override any already set into algorithm so it can be reused with different operators. While an operator is required by algorithms, aux\_operators are optional. To ‘remove’ a previous aux\_operators array use an empty list here.

**Parameters**

*   **operator** (`OperatorBase`) – Qubit operator of the Observable
*   **aux\_operators** (`Optional`\[`List`\[`Optional`\[`OperatorBase`]]]) – Optional list of auxiliary operators to be evaluated with the eigenstate of the minimum eigenvalue main result and their expectation values returned. For instance in chemistry these can be dipole operators, total particle count operators so we can get values for these at the ground state.

**Return type**

`EigensolverResult`

**Returns**

EigensolverResult

<span id="undefined" />

`property filter_criterion`

returns the filter criterion if set

**Return type**

`Optional`\[`Callable`\[\[`Union`\[`List`, `ndarray`], `float`, `Optional`\[`List`\[`float`]]], `bool`]]

<span id="undefined" />

`property k`

returns k (number of eigenvalues requested)

**Return type**

`int`

<span id="undefined" />

`classmethod supports_aux_operators()`

Whether computing the expectation value of auxiliary operators is supported.

**Return type**

`bool`

**Returns**

True if aux\_operator expectations can be evaluated, False otherwise
