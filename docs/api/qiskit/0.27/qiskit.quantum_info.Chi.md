# qiskit.quantum\_info.Chi

<span id="undefined" />

`Chi(data, input_dims=None, output_dims=None)`

Pauli basis Chi-matrix representation of a quantum channel.

The Chi-matrix representation of an $n$-qubit quantum channel $\mathcal{E}$ is a matrix $\chi$ such that the evolution of a [`DensityMatrix`](qiskit.quantum_info.DensityMatrix#qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix") $\rho$ is given by

$$
\mathcal{E}(ρ) = \sum_{i, j} \chi_{i,j} P_i ρ P_j
$$

where $[P_0, P_1, ..., P_{4^{n}-1}]$ is the $n$-qubit Pauli basis in lexicographic order. It is related to the [`Choi`](qiskit.quantum_info.Choi#qiskit.quantum_info.Choi "qiskit.quantum_info.Choi") representation by a change of basis of the Choi-matrix into the Pauli basis.

See reference \[1] for further details.

## References

1.  C.J. Wood, J.D. Biamonte, D.G. Cory, *Tensor networks and graphical calculus for open quantum systems*, Quant. Inf. Comp. 15, 0579-0811 (2015). [arXiv:1111.6950 \[quant-ph\]](https://arxiv.org/abs/1111.6950)

Initialize a quantum channel Chi-matrix operator.

**Parameters**

*   \*\*(\*\***QuantumCircuit or** (*data*) – Instruction or BaseOperator or matrix): data to initialize superoperator.
*   **input\_dims** (*tuple*) – the input subsystem dimensions. \[Default: None]
*   **output\_dims** (*tuple*) – the output subsystem dimensions. \[Default: None]

**Raises**

**QiskitError** – if input data is not an N-qubit channel or cannot be initialized as a Chi-matrix.

**Additional Information:**

If the input or output dimensions are None, they will be automatically determined from the input data. The Chi matrix representation is only valid for N-qubit channels.

<span id="undefined" />

`__init__(data, input_dims=None, output_dims=None)`

Initialize a quantum channel Chi-matrix operator.

**Parameters**

*   \*\*(\*\***QuantumCircuit or** (*data*) – Instruction or BaseOperator or matrix): data to initialize superoperator.
*   **input\_dims** (*tuple*) – the input subsystem dimensions. \[Default: None]
*   **output\_dims** (*tuple*) – the output subsystem dimensions. \[Default: None]

**Raises**

**QiskitError** – if input data is not an N-qubit channel or cannot be initialized as a Chi-matrix.

**Additional Information:**

If the input or output dimensions are None, they will be automatically determined from the input data. The Chi matrix representation is only valid for N-qubit channels.

## Methods

|                                                                                                                            |                                                                            |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [`__init__`](#qiskit.quantum_info.Chi.__init__ "qiskit.quantum_info.Chi.__init__")(data\[, input\_dims, output\_dims])     | Initialize a quantum channel Chi-matrix operator.                          |
| [`adjoint`](#qiskit.quantum_info.Chi.adjoint "qiskit.quantum_info.Chi.adjoint")()                                          | Return the adjoint quantum channel.                                        |
| [`compose`](#qiskit.quantum_info.Chi.compose "qiskit.quantum_info.Chi.compose")(other\[, qargs, front])                    | Return the operator composition with another Chi.                          |
| [`conjugate`](#qiskit.quantum_info.Chi.conjugate "qiskit.quantum_info.Chi.conjugate")()                                    | Return the conjugate quantum channel.                                      |
| [`copy`](#qiskit.quantum_info.Chi.copy "qiskit.quantum_info.Chi.copy")()                                                   | Make a deep copy of current operator.                                      |
| [`dot`](#qiskit.quantum_info.Chi.dot "qiskit.quantum_info.Chi.dot")(other\[, qargs])                                       | Return the right multiplied operator self \* other.                        |
| [`expand`](#qiskit.quantum_info.Chi.expand "qiskit.quantum_info.Chi.expand")(other)                                        | Return the reverse-order tensor product with another Chi.                  |
| [`input_dims`](#qiskit.quantum_info.Chi.input_dims "qiskit.quantum_info.Chi.input_dims")(\[qargs])                         | Return tuple of input dimension for specified subsystems.                  |
| [`is_cp`](#qiskit.quantum_info.Chi.is_cp "qiskit.quantum_info.Chi.is_cp")(\[atol, rtol])                                   | Test if Choi-matrix is completely-positive (CP)                            |
| [`is_cptp`](#qiskit.quantum_info.Chi.is_cptp "qiskit.quantum_info.Chi.is_cptp")(\[atol, rtol])                             | Return True if completely-positive trace-preserving (CPTP).                |
| [`is_tp`](#qiskit.quantum_info.Chi.is_tp "qiskit.quantum_info.Chi.is_tp")(\[atol, rtol])                                   | Test if a channel is trace-preserving (TP)                                 |
| [`is_unitary`](#qiskit.quantum_info.Chi.is_unitary "qiskit.quantum_info.Chi.is_unitary")(\[atol, rtol])                    | Return True if QuantumChannel is a unitary channel.                        |
| [`output_dims`](#qiskit.quantum_info.Chi.output_dims "qiskit.quantum_info.Chi.output_dims")(\[qargs])                      | Return tuple of output dimension for specified subsystems.                 |
| [`power`](#qiskit.quantum_info.Chi.power "qiskit.quantum_info.Chi.power")(n)                                               | Return the power of the quantum channel.                                   |
| [`reshape`](#qiskit.quantum_info.Chi.reshape "qiskit.quantum_info.Chi.reshape")(\[input\_dims, output\_dims, num\_qubits]) | Return a shallow copy with reshaped input and output subsystem dimensions. |
| [`tensor`](#qiskit.quantum_info.Chi.tensor "qiskit.quantum_info.Chi.tensor")(other)                                        | Return the tensor product with another Chi.                                |
| [`to_instruction`](#qiskit.quantum_info.Chi.to_instruction "qiskit.quantum_info.Chi.to_instruction")()                     | Convert to a Kraus or UnitaryGate circuit instruction.                     |
| [`to_operator`](#qiskit.quantum_info.Chi.to_operator "qiskit.quantum_info.Chi.to_operator")()                              | Try to convert channel to a unitary representation Operator.               |
| [`transpose`](#qiskit.quantum_info.Chi.transpose "qiskit.quantum_info.Chi.transpose")()                                    | Return the transpose quantum channel.                                      |

## Attributes

|                                                                                          |                                                                      |
| ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [`atol`](#qiskit.quantum_info.Chi.atol "qiskit.quantum_info.Chi.atol")                   | Default absolute tolerance parameter for float comparisons.          |
| [`data`](#qiskit.quantum_info.Chi.data "qiskit.quantum_info.Chi.data")                   | Return data.                                                         |
| [`dim`](#qiskit.quantum_info.Chi.dim "qiskit.quantum_info.Chi.dim")                      | Return tuple (input\_shape, output\_shape).                          |
| [`num_qubits`](#qiskit.quantum_info.Chi.num_qubits "qiskit.quantum_info.Chi.num_qubits") | Return the number of qubits if a N-qubit operator or None otherwise. |
| [`qargs`](#qiskit.quantum_info.Chi.qargs "qiskit.quantum_info.Chi.qargs")                | Return the qargs for the operator.                                   |
| [`rtol`](#qiskit.quantum_info.Chi.rtol "qiskit.quantum_info.Chi.rtol")                   | Default relative tolerance parameter for float comparisons.          |

<span id="undefined" />

`adjoint()`

Return the adjoint quantum channel.

<Admonition title="Note" type="note">
  This is equivalent to the matrix Hermitian conjugate in the [`SuperOp`](qiskit.quantum_info.SuperOp#qiskit.quantum_info.SuperOp "qiskit.quantum_info.SuperOp") representation ie. for a channel $\mathcal{E}$, the SuperOp of the adjoint channel $\mathcal{{E}}^\dagger$ is $S_{\mathcal{E}^\dagger} = S_{\mathcal{E}}^\dagger$.
</Admonition>

<span id="undefined" />

`property atol`

Default absolute tolerance parameter for float comparisons.

<span id="undefined" />

`compose(other, qargs=None, front=False)`

Return the operator composition with another Chi.

**Parameters**

*   **other** ([*Chi*](#qiskit.quantum_info.Chi "qiskit.quantum_info.Chi")) – a Chi object.
*   **qargs** (*list or None*) – Optional, a list of subsystem positions to apply other on. If None apply on all subsystems (default: None).
*   **front** (*bool*) – If True compose using right operator multiplication, instead of left multiplication \[default: False].

**Returns**

The composed Chi.

**Return type**

[Chi](#qiskit.quantum_info.Chi "qiskit.quantum_info.Chi")

**Raises**

**QiskitError** – if other cannot be converted to an operator, or has incompatible dimensions for specified subsystems.

<Admonition title="Note" type="note">
  Composition (`&`) by default is defined as left matrix multiplication for matrix operators, while [`dot()`](#qiskit.quantum_info.Chi.dot "qiskit.quantum_info.Chi.dot") is defined as right matrix multiplication. That is that `A & B == A.compose(B)` is equivalent to `B.dot(A)` when `A` and `B` are of the same type.

  Setting the `front=True` kwarg changes this to right matrix multiplication and is equivalent to the [`dot()`](#qiskit.quantum_info.Chi.dot "qiskit.quantum_info.Chi.dot") method `A.dot(B) == A.compose(B, front=True)`.
</Admonition>

<span id="undefined" />

`conjugate()`

Return the conjugate quantum channel.

<Admonition title="Note" type="note">
  This is equivalent to the matrix complex conjugate in the [`SuperOp`](qiskit.quantum_info.SuperOp#qiskit.quantum_info.SuperOp "qiskit.quantum_info.SuperOp") representation ie. for a channel $\mathcal{E}$, the SuperOp of the conjugate channel $\overline{{\mathcal{{E}}}}$ is $S_{\overline{\mathcal{E}^\dagger}} = \overline{S_{\mathcal{E}}}$.
</Admonition>

<span id="undefined" />

`copy()`

Make a deep copy of current operator.

<span id="undefined" />

`property data`

Return data.

<span id="undefined" />

`property dim`

Return tuple (input\_shape, output\_shape).

<span id="undefined" />

`dot(other, qargs=None)`

Return the right multiplied operator self \* other.

**Parameters**

*   **other** ([*Operator*](qiskit.quantum_info.Operator#qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – an operator object.
*   **qargs** (*list or None*) – Optional, a list of subsystem positions to apply other on. If None apply on all subsystems (default: None).

**Returns**

The right matrix multiplied Operator.

**Return type**

[Operator](qiskit.quantum_info.Operator#qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")

<span id="undefined" />

`expand(other)`

Return the reverse-order tensor product with another Chi.

**Parameters**

**other** ([*Chi*](#qiskit.quantum_info.Chi "qiskit.quantum_info.Chi")) – a Chi object.

**Returns**

**the tensor product $b \otimes a$, where $a$**

is the current Chi, and $b$ is the other Chi.

**Return type**

[Chi](#qiskit.quantum_info.Chi "qiskit.quantum_info.Chi")

<span id="undefined" />

`input_dims(qargs=None)`

Return tuple of input dimension for specified subsystems.

<span id="undefined" />

`is_cp(atol=None, rtol=None)`

Test if Choi-matrix is completely-positive (CP)

<span id="undefined" />

`is_cptp(atol=None, rtol=None)`

Return True if completely-positive trace-preserving (CPTP).

<span id="undefined" />

`is_tp(atol=None, rtol=None)`

Test if a channel is trace-preserving (TP)

<span id="undefined" />

`is_unitary(atol=None, rtol=None)`

Return True if QuantumChannel is a unitary channel.

<span id="undefined" />

`property num_qubits`

Return the number of qubits if a N-qubit operator or None otherwise.

<span id="undefined" />

`output_dims(qargs=None)`

Return tuple of output dimension for specified subsystems.

<span id="undefined" />

`power(n)`

Return the power of the quantum channel.

**Parameters**

**n** (*float*) – the power exponent.

**Returns**

the channel $\mathcal{{E}} ^n$.

**Return type**

[SuperOp](qiskit.quantum_info.SuperOp#qiskit.quantum_info.SuperOp "qiskit.quantum_info.SuperOp")

**Raises**

**QiskitError** – if the input and output dimensions of the SuperOp are not equal.

<Admonition title="Note" type="note">
  For non-positive or non-integer exponents the power is defined as the matrix power of the [`SuperOp`](qiskit.quantum_info.SuperOp#qiskit.quantum_info.SuperOp "qiskit.quantum_info.SuperOp") representation ie. for a channel $\mathcal{{E}}$, the SuperOp of the powered channel $\mathcal{{E}}^\n$ is $S_{{\mathcal{{E}}^n}} = S_{{\mathcal{{E}}}}^n$.
</Admonition>

<span id="undefined" />

`property qargs`

Return the qargs for the operator.

<span id="undefined" />

`reshape(input_dims=None, output_dims=None, num_qubits=None)`

Return a shallow copy with reshaped input and output subsystem dimensions.

**Parameters**

*   **input\_dims** (*None or tuple*) – new subsystem input dimensions. If None the original input dims will be preserved \[Default: None].
*   **output\_dims** (*None or tuple*) – new subsystem output dimensions. If None the original output dims will be preserved \[Default: None].
*   **num\_qubits** (*None or int*) – reshape to an N-qubit operator \[Default: None].

**Returns**

returns self with reshaped input and output dimensions.

**Return type**

BaseOperator

**Raises**

**QiskitError** – if combined size of all subsystem input dimension or subsystem output dimensions is not constant.

<span id="undefined" />

`property rtol`

Default relative tolerance parameter for float comparisons.

<span id="undefined" />

`tensor(other)`

Return the tensor product with another Chi.

**Parameters**

**other** ([*Chi*](#qiskit.quantum_info.Chi "qiskit.quantum_info.Chi")) – a Chi object.

**Returns**

**the tensor product $a \otimes b$, where $a$**

is the current Chi, and $b$ is the other Chi.

**Return type**

[Chi](#qiskit.quantum_info.Chi "qiskit.quantum_info.Chi")

<Admonition title="Note" type="note">
  The tensor product can be obtained using the `^` binary operator. Hence `a.tensor(b)` is equivalent to `a ^ b`.
</Admonition>

<span id="undefined" />

`to_instruction()`

Convert to a Kraus or UnitaryGate circuit instruction.

If the channel is unitary it will be added as a unitary gate, otherwise it will be added as a kraus simulator instruction.

**Returns**

A kraus instruction for the channel.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction#qiskit.circuit.Instruction "qiskit.circuit.Instruction")

**Raises**

**QiskitError** – if input data is not an N-qubit CPTP quantum channel.

<span id="undefined" />

`to_operator()`

Try to convert channel to a unitary representation Operator.

<span id="undefined" />

`transpose()`

Return the transpose quantum channel.

<Admonition title="Note" type="note">
  This is equivalent to the matrix transpose in the [`SuperOp`](qiskit.quantum_info.SuperOp#qiskit.quantum_info.SuperOp "qiskit.quantum_info.SuperOp") representation, ie. for a channel $\mathcal{E}$, the SuperOp of the transpose channel $\mathcal{{E}}^T$ is $S_{mathcal{E}^T} = S_{\mathcal{E}}^T$.
</Admonition>
