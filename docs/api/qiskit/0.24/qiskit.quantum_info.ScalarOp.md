<span id="qiskit-quantum-info-scalarop" />

# qiskit.quantum\_info.ScalarOp

<span id="undefined" />

`ScalarOp(dims, coeff=1)`

Scalar identity operator class.

This is a symbolic representation of an scalar identity operator on multiple subsystems. It may be used to initialize a symbolic scalar multiplication of an identity and then be implicitly converted to other kinds of operator subclasses by using the [`compose()`](#qiskit.quantum_info.ScalarOp.compose "qiskit.quantum_info.ScalarOp.compose"), [`dot()`](#qiskit.quantum_info.ScalarOp.dot "qiskit.quantum_info.ScalarOp.dot"), [`tensor()`](#qiskit.quantum_info.ScalarOp.tensor "qiskit.quantum_info.ScalarOp.tensor"), [`expand()`](#qiskit.quantum_info.ScalarOp.expand "qiskit.quantum_info.ScalarOp.expand") methods.

Initialize an operator object.

**Parameters**

*   **dims** (*int or tuple*) – subsystem dimensions.
*   **coeff** (*Number*) – scalar coefficient for the identity operator (Default: 1).

**Raises**

**QiskitError** – If the optional coefficient is invalid.

<span id="undefined" />

`__init__(dims, coeff=1)`

Initialize an operator object.

**Parameters**

*   **dims** (*int or tuple*) – subsystem dimensions.
*   **coeff** (*Number*) – scalar coefficient for the identity operator (Default: 1).

**Raises**

**QiskitError** – If the optional coefficient is invalid.

## Methods

|                                                                                                                         |                                                                            |
| ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [`__init__`](#qiskit.quantum_info.ScalarOp.__init__ "qiskit.quantum_info.ScalarOp.__init__")(dims\[, coeff])            | Initialize an operator object.                                             |
| [`add`](#qiskit.quantum_info.ScalarOp.add "qiskit.quantum_info.ScalarOp.add")(other)                                    | Return the linear operator self + other.                                   |
| [`adjoint`](#qiskit.quantum_info.ScalarOp.adjoint "qiskit.quantum_info.ScalarOp.adjoint")()                             | Return the adjoint of the operator.                                        |
| [`compose`](#qiskit.quantum_info.ScalarOp.compose "qiskit.quantum_info.ScalarOp.compose")(other\[, qargs, front])       | Return the composed operator.                                              |
| [`conjugate`](#qiskit.quantum_info.ScalarOp.conjugate "qiskit.quantum_info.ScalarOp.conjugate")()                       | Return the conjugate of the operator.                                      |
| [`copy`](#qiskit.quantum_info.ScalarOp.copy "qiskit.quantum_info.ScalarOp.copy")()                                      | Make a deep copy of current operator.                                      |
| [`dot`](#qiskit.quantum_info.ScalarOp.dot "qiskit.quantum_info.ScalarOp.dot")(other\[, qargs])                          | Return the right multiplied operator self \* other.                        |
| [`expand`](#qiskit.quantum_info.ScalarOp.expand "qiskit.quantum_info.ScalarOp.expand")(other)                           | Return the tensor product operator other ⊗ self.                           |
| [`input_dims`](#qiskit.quantum_info.ScalarOp.input_dims "qiskit.quantum_info.ScalarOp.input_dims")(\[qargs])            | Return tuple of input dimension for specified subsystems.                  |
| [`is_unitary`](#qiskit.quantum_info.ScalarOp.is_unitary "qiskit.quantum_info.ScalarOp.is_unitary")(\[atol, rtol])       | Return True if operator is a unitary matrix.                               |
| [`multiply`](#qiskit.quantum_info.ScalarOp.multiply "qiskit.quantum_info.ScalarOp.multiply")(other)                     | Return the linear operator other \* self.                                  |
| [`output_dims`](#qiskit.quantum_info.ScalarOp.output_dims "qiskit.quantum_info.ScalarOp.output_dims")(\[qargs])         | Return tuple of output dimension for specified subsystems.                 |
| [`power`](#qiskit.quantum_info.ScalarOp.power "qiskit.quantum_info.ScalarOp.power")(n)                                  | Return the power of the ScalarOp.                                          |
| [`reshape`](#qiskit.quantum_info.ScalarOp.reshape "qiskit.quantum_info.ScalarOp.reshape")(\[input\_dims, output\_dims]) | Return a shallow copy with reshaped input and output subsystem dimensions. |
| [`set_atol`](#qiskit.quantum_info.ScalarOp.set_atol "qiskit.quantum_info.ScalarOp.set_atol")(value)                     | Set the class default absolute tolerance parameter for float comparisons.  |
| [`set_rtol`](#qiskit.quantum_info.ScalarOp.set_rtol "qiskit.quantum_info.ScalarOp.set_rtol")(value)                     | Set the class default relative tolerance parameter for float comparisons.  |
| [`subtract`](#qiskit.quantum_info.ScalarOp.subtract "qiskit.quantum_info.ScalarOp.subtract")(other)                     | Return the linear operator self - other.                                   |
| [`tensor`](#qiskit.quantum_info.ScalarOp.tensor "qiskit.quantum_info.ScalarOp.tensor")(other)                           | Return the tensor product operator self ⊗ other.                           |
| [`to_matrix`](#qiskit.quantum_info.ScalarOp.to_matrix "qiskit.quantum_info.ScalarOp.to_matrix")()                       | Convert to a Numpy matrix.                                                 |
| [`to_operator`](#qiskit.quantum_info.ScalarOp.to_operator "qiskit.quantum_info.ScalarOp.to_operator")()                 | Convert to an Operator object.                                             |
| [`transpose`](#qiskit.quantum_info.ScalarOp.transpose "qiskit.quantum_info.ScalarOp.transpose")()                       | Return the transpose of the operator.                                      |

## Attributes

|                                                                                                    |                                                                      |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [`atol`](#qiskit.quantum_info.ScalarOp.atol "qiskit.quantum_info.ScalarOp.atol")                   | The default absolute tolerance parameter for float comparisons.      |
| [`coeff`](#qiskit.quantum_info.ScalarOp.coeff "qiskit.quantum_info.ScalarOp.coeff")                | Return the coefficient                                               |
| [`dim`](#qiskit.quantum_info.ScalarOp.dim "qiskit.quantum_info.ScalarOp.dim")                      | Return tuple (input\_shape, output\_shape).                          |
| [`num_qubits`](#qiskit.quantum_info.ScalarOp.num_qubits "qiskit.quantum_info.ScalarOp.num_qubits") | Return the number of qubits if a N-qubit operator or None otherwise. |
| [`qargs`](#qiskit.quantum_info.ScalarOp.qargs "qiskit.quantum_info.ScalarOp.qargs")                | Return the qargs for the operator.                                   |
| [`rtol`](#qiskit.quantum_info.ScalarOp.rtol "qiskit.quantum_info.ScalarOp.rtol")                   | The relative tolerance parameter for float comparisons.              |

<span id="undefined" />

`add(other)`

Return the linear operator self + other.

DEPRECATED: use `operator + other` instead.

**Parameters**

**other** (*BaseOperator*) – an operator object.

**Returns**

the operator self + other.

**Return type**

BaseOperator

<span id="undefined" />

`adjoint()`

Return the adjoint of the operator.

<span id="undefined" />

`property atol`

The default absolute tolerance parameter for float comparisons.

<span id="undefined" />

`property coeff`

Return the coefficient

<span id="undefined" />

`compose(other, qargs=None, front=False)`

Return the composed operator.

**Parameters**

*   **other** (*BaseOperator*) – an operator object.
*   **qargs** (*list or None*) – a list of subsystem positions to apply other on. If None apply on all subsystems \[default: None].
*   **front** (*bool*) – If True compose using right operator multiplication, instead of left multiplication \[default: False].

**Returns**

The operator self @ other.

**Return type**

BaseOperator

**Raises**

**QiskitError** – if other has incompatible dimensions for specified subsystems.

**Additional Information:**

Composition (`@`) is defined as left matrix multiplication for matrix operators. That is that `A @ B` is equal to `B * A`. Setting `front=True` returns right matrix multiplication `A * B` and is equivalent to the [`dot()`](#qiskit.quantum_info.ScalarOp.dot "qiskit.quantum_info.ScalarOp.dot") method.

<span id="undefined" />

`conjugate()`

Return the conjugate of the operator.

<span id="undefined" />

`copy()`

Make a deep copy of current operator.

<span id="undefined" />

`property dim`

Return tuple (input\_shape, output\_shape).

<span id="undefined" />

`dot(other, qargs=None)`

Return the right multiplied operator self \* other.

**Parameters**

*   **other** (*BaseOperator*) – an operator object.
*   **qargs** (*list or None*) – a list of subsystem positions to apply other on. If None apply on all subsystems \[default: None].

**Returns**

The operator self \* other.

**Return type**

BaseOperator

**Raises**

**QiskitError** – if other cannot be converted to an operator, or has incompatible dimensions for specified subsystems.

<span id="undefined" />

`expand(other)`

Return the tensor product operator other ⊗ self.

**Parameters**

**other** (*BaseOperator*) – an operator object.

**Returns**

if other is an ScalarOp. BaseOperator: if other is not an ScalarOp.

**Return type**

[ScalarOp](#qiskit.quantum_info.ScalarOp "qiskit.quantum_info.ScalarOp")

<span id="undefined" />

`input_dims(qargs=None)`

Return tuple of input dimension for specified subsystems.

<span id="undefined" />

`is_unitary(atol=None, rtol=None)`

Return True if operator is a unitary matrix.

<span id="undefined" />

`multiply(other)`

Return the linear operator other \* self.

DEPRECATED: use `other * operator` instead.

**Parameters**

**other** (*complex*) – a complex number.

**Returns**

the linear operator other \* self.

**Return type**

BaseOperator

**Raises**

**NotImplementedError** – if subclass does not support multiplication.

<span id="undefined" />

`property num_qubits`

Return the number of qubits if a N-qubit operator or None otherwise.

<span id="undefined" />

`output_dims(qargs=None)`

Return tuple of output dimension for specified subsystems.

<span id="undefined" />

`power(n)`

Return the power of the ScalarOp.

**Parameters**

**n** (*Number*) – the exponent for the scalar op.

**Returns**

the `coeff ** n` ScalarOp.

**Return type**

[ScalarOp](#qiskit.quantum_info.ScalarOp "qiskit.quantum_info.ScalarOp")

**Raises**

**QiskitError** – if the input and output dimensions of the operator are not equal, or the power is not a positive integer.

<span id="undefined" />

`property qargs`

Return the qargs for the operator.

<span id="undefined" />

`reshape(input_dims=None, output_dims=None)`

Return a shallow copy with reshaped input and output subsystem dimensions.

**Arg:**

**input\_dims (None or tuple): new subsystem input dimensions.**

If None the original input dims will be preserved \[Default: None].

**output\_dims (None or tuple): new subsystem output dimensions.**

If None the original output dims will be preserved \[Default: None].

**Returns**

returns self with reshaped input and output dimensions.

**Return type**

BaseOperator

**Raises**

**QiskitError** – if combined size of all subsystem input dimension or subsystem output dimensions is not constant.

<span id="undefined" />

`property rtol`

The relative tolerance parameter for float comparisons.

<span id="undefined" />

`classmethod set_atol(value)`

Set the class default absolute tolerance parameter for float comparisons.

DEPRECATED: use operator.atol = value instead

<span id="undefined" />

`classmethod set_rtol(value)`

Set the class default relative tolerance parameter for float comparisons.

DEPRECATED: use operator.rtol = value instead

<span id="undefined" />

`subtract(other)`

Return the linear operator self - other.

DEPRECATED: use `operator - other` instead.

**Parameters**

**other** (*BaseOperator*) – an operator object.

**Returns**

the operator self - other.

**Return type**

BaseOperator

<span id="undefined" />

`tensor(other)`

Return the tensor product operator self ⊗ other.

**Parameters**

**other** (*BaseOperator*) – an operator object.

**Returns**

if other is an ScalarOp. BaseOperator: if other is not an ScalarOp.

**Return type**

[ScalarOp](#qiskit.quantum_info.ScalarOp "qiskit.quantum_info.ScalarOp")

<span id="undefined" />

`to_matrix()`

Convert to a Numpy matrix.

<span id="undefined" />

`to_operator()`

Convert to an Operator object.

<span id="undefined" />

`transpose()`

Return the transpose of the operator.
