# qiskit.opflow\.OperatorBase

<span id="undefined" />

`OperatorBase`

A base class for all Operators: PrimitiveOps, StateFns, ListOps, etc. Operators are defined as functions which take one complex binary function to another. These complex binary functions are represented by StateFns, which are themselves a special class of Operators taking only the `Zero` StateFn to the complex binary function they represent.

Operators can be used to construct complicated functions and computation, and serve as the building blocks for algorithms.

<span id="undefined" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                  |                                                                                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.opflow.OperatorBase.__init__ "qiskit.opflow.OperatorBase.__init__")()                                       | Initialize self.                                                                                                                                                              |
| [`add`](#qiskit.opflow.OperatorBase.add "qiskit.opflow.OperatorBase.add")(other)                                                 | Return Operator addition of self and other, overloaded by `+`.                                                                                                                |
| [`adjoint`](#qiskit.opflow.OperatorBase.adjoint "qiskit.opflow.OperatorBase.adjoint")()                                          | Return a new Operator equal to the Operator’s adjoint (conjugate transpose), overloaded by `~`.                                                                               |
| [`assign_parameters`](#qiskit.opflow.OperatorBase.assign_parameters "qiskit.opflow.OperatorBase.assign_parameters")(param\_dict) | Binds scalar values to any Terra `Parameters` in the coefficients or primitives of the Operator, or substitutes one `Parameter` for another.                                  |
| [`bind_parameters`](#qiskit.opflow.OperatorBase.bind_parameters "qiskit.opflow.OperatorBase.bind_parameters")(param\_dict)       | Same as assign\_parameters, but maintained for consistency with QuantumCircuit in Terra (which has both assign\_parameters and bind\_parameters).                             |
| [`compose`](#qiskit.opflow.OperatorBase.compose "qiskit.opflow.OperatorBase.compose")(other\[, permutation, front])              | Return Operator Composition between self and other (linear algebra-style: A\@B(x) = A(B(x))), overloaded by `@`.                                                              |
| [`copy`](#qiskit.opflow.OperatorBase.copy "qiskit.opflow.OperatorBase.copy")()                                                   | Return a deep copy of the Operator.                                                                                                                                           |
| [`equals`](#qiskit.opflow.OperatorBase.equals "qiskit.opflow.OperatorBase.equals")(other)                                        | Evaluate Equality between Operators, overloaded by `==`.                                                                                                                      |
| [`eval`](#qiskit.opflow.OperatorBase.eval "qiskit.opflow.OperatorBase.eval")(\[front])                                           | Evaluate the Operator’s underlying function, either on a binary string or another Operator.                                                                                   |
| [`mul`](#qiskit.opflow.OperatorBase.mul "qiskit.opflow.OperatorBase.mul")(scalar)                                                | Returns the scalar multiplication of the Operator, overloaded by `*`, including support for Terra’s `Parameters`, which can be bound to values later (via `bind_parameters`). |
| [`neg`](#qiskit.opflow.OperatorBase.neg "qiskit.opflow.OperatorBase.neg")()                                                      | Return the Operator’s negation, effectively just multiplying by -1.0, overloaded by `-`.                                                                                      |
| [`permute`](#qiskit.opflow.OperatorBase.permute "qiskit.opflow.OperatorBase.permute")(permutation)                               | Permutes the qubits of the operator.                                                                                                                                          |
| [`power`](#qiskit.opflow.OperatorBase.power "qiskit.opflow.OperatorBase.power")(exponent)                                        | Return Operator composed with self multiple times, overloaded by `**`.                                                                                                        |
| [`primitive_strings`](#qiskit.opflow.OperatorBase.primitive_strings "qiskit.opflow.OperatorBase.primitive_strings")()            | Return a set of strings describing the primitives contained in the Operator.                                                                                                  |
| [`reduce`](#qiskit.opflow.OperatorBase.reduce "qiskit.opflow.OperatorBase.reduce")()                                             | Try collapsing the Operator structure, usually after some type of conversion, e.g.                                                                                            |
| [`tensor`](#qiskit.opflow.OperatorBase.tensor "qiskit.opflow.OperatorBase.tensor")(other)                                        | Return tensor product between self and other, overloaded by `^`.                                                                                                              |
| [`tensorpower`](#qiskit.opflow.OperatorBase.tensorpower "qiskit.opflow.OperatorBase.tensorpower")(other)                         | Return tensor product with self multiple times, overloaded by `^`.                                                                                                            |
| [`to_circuit_op`](#qiskit.opflow.OperatorBase.to_circuit_op "qiskit.opflow.OperatorBase.to_circuit_op")()                        | Returns a `CircuitOp` equivalent to this Operator.                                                                                                                            |
| [`to_matrix`](#qiskit.opflow.OperatorBase.to_matrix "qiskit.opflow.OperatorBase.to_matrix")(\[massive])                          | Return NumPy representation of the Operator.                                                                                                                                  |
| [`to_matrix_op`](#qiskit.opflow.OperatorBase.to_matrix_op "qiskit.opflow.OperatorBase.to_matrix_op")(\[massive])                 | Returns a `MatrixOp` equivalent to this Operator.                                                                                                                             |
| [`to_spmatrix`](#qiskit.opflow.OperatorBase.to_spmatrix "qiskit.opflow.OperatorBase.to_spmatrix")()                              | Return SciPy sparse matrix representation of the Operator.                                                                                                                    |

## Attributes

|                                                                                                   |                                                              |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| `INDENTATION`                                                                                     |                                                              |
| [`instance_id`](#qiskit.opflow.OperatorBase.instance_id "qiskit.opflow.OperatorBase.instance_id") | Return the unique instance id.                               |
| [`num_qubits`](#qiskit.opflow.OperatorBase.num_qubits "qiskit.opflow.OperatorBase.num_qubits")    | The number of qubits over which the Operator is defined.     |
| [`parameters`](#qiskit.opflow.OperatorBase.parameters "qiskit.opflow.OperatorBase.parameters")    | Return a set of Parameter objects contained in the Operator. |

<span id="undefined" />

`abstract add(other)`

Return Operator addition of self and other, overloaded by `+`.

**Parameters**

**other** (`OperatorBase`) – An `OperatorBase` with the same number of qubits as self, and in the same ‘Operator’, ‘State function’, or ‘Measurement’ category as self (i.e. the same type of underlying function).

**Return type**

`OperatorBase`

**Returns**

An `OperatorBase` equivalent to the sum of self and other.

<span id="undefined" />

`abstract adjoint()`

Return a new Operator equal to the Operator’s adjoint (conjugate transpose), overloaded by `~`. For StateFns, this also turns the StateFn into a measurement.

**Return type**

`OperatorBase`

**Returns**

An `OperatorBase` equivalent to the adjoint of self.

<span id="undefined" />

`abstract assign_parameters(param_dict)`

Binds scalar values to any Terra `Parameters` in the coefficients or primitives of the Operator, or substitutes one `Parameter` for another. This method differs from Terra’s `assign_parameters` in that it also supports lists of values to assign for a give `Parameter`, in which case self will be copied for each parameterization in the binding list(s), and all the copies will be returned in an `OpList`. If lists of parameterizations are used, every `Parameter` in the param\_dict must have the same length list of parameterizations.

**Parameters**

**param\_dict** (`Dict`\[`ParameterExpression`, `Union`\[`complex`, `ParameterExpression`, `List`\[`Union`\[`complex`, `ParameterExpression`]]]]) – The dictionary of `Parameters` to replace, and values or lists of values by which to replace them.

**Return type**

`OperatorBase`

**Returns**

The `OperatorBase` with the `Parameters` in self replaced by the values or `Parameters` in param\_dict. If param\_dict contains parameterization lists, this `OperatorBase` is an `OpList`.

<span id="undefined" />

`bind_parameters(param_dict)`

Same as assign\_parameters, but maintained for consistency with QuantumCircuit in Terra (which has both assign\_parameters and bind\_parameters).

**Return type**

`OperatorBase`

<span id="undefined" />

`abstract compose(other, permutation=None, front=False)`

Return Operator Composition between self and other (linear algebra-style: A\@B(x) = A(B(x))), overloaded by `@`.

Note: You must be conscious of Quantum Circuit vs. Linear Algebra ordering conventions. Meaning, X.compose(Y) produces an X∘Y on qubit 0, but would produce a QuantumCircuit which looks like

> -\[Y]-\[X]-

Because Terra prints circuits with the initial state at the left side of the circuit.

**Parameters**

*   **other** (`OperatorBase`) – The `OperatorBase` with which to compose self.
*   **permutation** (`Optional`\[`List`\[`int`]]) – `List[int]` which defines permutation on other operator.
*   **front** (`bool`) – If front==True, return `other.compose(self)`.

**Return type**

`OperatorBase`

**Returns**

An `OperatorBase` equivalent to the function composition of self and other.

<span id="undefined" />

`copy()`

Return a deep copy of the Operator.

**Return type**

`OperatorBase`

<span id="undefined" />

`abstract equals(other)`

Evaluate Equality between Operators, overloaded by `==`. Only returns True if self and other are of the same representation (e.g. a DictStateFn and CircuitStateFn will never be equal, even if their vector representations are equal), their underlying primitives are equal (this means for ListOps, OperatorStateFns, or EvolvedOps the equality is evaluated recursively downwards), and their coefficients are equal.

**Parameters**

**other** (`OperatorBase`) – The `OperatorBase` to compare to self.

**Return type**

`bool`

**Returns**

A bool equal to the equality of self and other.

<span id="undefined" />

`abstract eval(front=None)`

Evaluate the Operator’s underlying function, either on a binary string or another Operator. A square binary Operator can be defined as a function taking a binary function to another binary function. This method returns the value of that function for a given StateFn or binary string. For example, `op.eval('0110').eval('1110')` can be seen as querying the Operator’s matrix representation by row 6 and column 14, and will return the complex value at those “indices.” Similarly for a StateFn, `op.eval('1011')` will return the complex value at row 11 of the vector representation of the StateFn, as all StateFns are defined to be evaluated from Zero implicitly (i.e. it is as if `.eval('0000')` is already called implicitly to always “indexing” from column 0).

If `front` is None, the matrix-representation of the operator is returned.

**Parameters**

**front** (`Union`\[`str`, `Dict`\[`str`, `complex`], `ndarray`, `OperatorBase`, `Statevector`, `None`]) – The bitstring, dict of bitstrings (with values being coefficients), or StateFn to evaluated by the Operator’s underlying function, or None.

**Return type**

`Union`\[`OperatorBase`, `complex`]

**Returns**

The output of the Operator’s evaluation function. If self is a `StateFn`, the result is a float or complex. If self is an Operator (`PrimitiveOp, ComposedOp, SummedOp, EvolvedOp,` etc.), the result is a StateFn. If `front` is None, the matrix-representation of the operator is returned, which is a `MatrixOp` for the operators and a `VectorStateFn` for state-functions. If either self or front contain proper `ListOps` (not ListOp subclasses), the result is an n-dimensional list of complex or StateFn results, resulting from the recursive evaluation by each OperatorBase in the ListOps.

<span id="undefined" />

`property instance_id`

Return the unique instance id.

**Return type**

`int`

<span id="undefined" />

`abstract mul(scalar)`

Returns the scalar multiplication of the Operator, overloaded by `*`, including support for Terra’s `Parameters`, which can be bound to values later (via `bind_parameters`).

**Parameters**

**scalar** (`Union`\[`complex`, `ParameterExpression`]) – The real or complex scalar by which to multiply the Operator, or the `ParameterExpression` to serve as a placeholder for a scalar factor.

**Return type**

`OperatorBase`

**Returns**

An `OperatorBase` equivalent to product of self and scalar.

<span id="undefined" />

`neg()`

Return the Operator’s negation, effectively just multiplying by -1.0, overloaded by `-`.

**Return type**

`OperatorBase`

**Returns**

An `OperatorBase` equivalent to the negation of self.

<span id="undefined" />

`abstract property num_qubits`

The number of qubits over which the Operator is defined. If `op.num_qubits == 5`, then `op.eval('1' * 5)` will be valid, but `op.eval('11')` will not.

**Return type**

`int`

**Returns**

The number of qubits accepted by the Operator’s underlying function.

<span id="undefined" />

`abstract property parameters`

Return a set of Parameter objects contained in the Operator.

<span id="undefined" />

`abstract permute(permutation)`

Permutes the qubits of the operator.

**Parameters**

**permutation** (`List`\[`int`]) – A list defining where each qubit should be permuted. The qubit at index j should be permuted to position permutation\[j].

**Return type**

`OperatorBase`

**Returns**

A new OperatorBase containing the permuted operator.

**Raises**

[**OpflowError**](qiskit.opflow.OpflowError#qiskit.opflow.OpflowError "qiskit.opflow.OpflowError") – if indices do not define a new index for each qubit.

<span id="undefined" />

`abstract power(exponent)`

Return Operator composed with self multiple times, overloaded by `**`.

**Parameters**

**exponent** (`int`) – The int number of times to compose self with itself.

**Return type**

`OperatorBase`

**Returns**

An `OperatorBase` equivalent to self composed with itself exponent times.

<span id="undefined" />

`abstract primitive_strings()`

Return a set of strings describing the primitives contained in the Operator. For example, `{'QuantumCircuit', 'Pauli'}`. For hierarchical Operators, such as `ListOps`, this can help illuminate the primitives represented in the various recursive levels, and therefore which conversions can be applied.

**Return type**

`Set`\[`str`]

**Returns**

A set of strings describing the primitives contained within the Operator.

<span id="undefined" />

`abstract reduce()`

Try collapsing the Operator structure, usually after some type of conversion, e.g. trying to add Operators in a SummedOp or delete needless IGates in a CircuitOp. If no reduction is available, just returns self.

**Returns**

The reduced `OperatorBase`.

<span id="undefined" />

`abstract tensor(other)`

Return tensor product between self and other, overloaded by `^`. Note: You must be conscious of Qiskit’s big-endian bit printing convention. Meaning, X.tensor(Y) produces an X on qubit 0 and an Y on qubit 1, or X⨂Y, but would produce a QuantumCircuit which looks like

> -\[Y]- -\[X]-

Because Terra prints circuits and results with qubit 0 at the end of the string or circuit.

**Parameters**

**other** (`OperatorBase`) – The `OperatorBase` to tensor product with self.

**Return type**

`OperatorBase`

**Returns**

An `OperatorBase` equivalent to the tensor product of self and other.

<span id="undefined" />

`abstract tensorpower(other)`

Return tensor product with self multiple times, overloaded by `^`.

**Parameters**

**other** (`int`) – The int number of times to tensor product self with itself via `tensorpower`.

**Return type**

`Union`\[`OperatorBase`, `int`]

**Returns**

An `OperatorBase` equivalent to the tensorpower of self by other.

<span id="undefined" />

`abstract to_circuit_op()`

Returns a `CircuitOp` equivalent to this Operator.

**Return type**

`OperatorBase`

<span id="undefined" />

`abstract to_matrix(massive=False)`

Return NumPy representation of the Operator. Represents the evaluation of the Operator’s underlying function on every combination of basis binary strings. Warn if more than 16 qubits to force having to set `massive=True` if such a large vector is desired.

**Return type**

`ndarray`

**Returns**

The NumPy `ndarray` equivalent to this Operator.

<span id="undefined" />

`abstract to_matrix_op(massive=False)`

Returns a `MatrixOp` equivalent to this Operator.

**Return type**

`OperatorBase`

<span id="undefined" />

`to_spmatrix()`

Return SciPy sparse matrix representation of the Operator. Represents the evaluation of the Operator’s underlying function on every combination of basis binary strings.

**Return type**

`spmatrix`

**Returns**

The SciPy `spmatrix` equivalent to this Operator.
