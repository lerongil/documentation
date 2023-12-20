# qiskit.circuit.library.XGate

<span id="undefined" />

`XGate(label=None)`

The single-qubit Pauli-X gate ($\sigma_x$).

**Matrix Representation:**

$$
\begin{split}X = \begin{pmatrix}
        0 & 1 \\
        1 & 0
    \end{pmatrix}\end{split}
$$

**Circuit symbol:**

```python
     ┌───┐
q_0: ┤ X ├
     └───┘
```

Equivalent to a $\pi$ radian rotation about the X axis.

<Admonition title="Note" type="note">
  A global phase difference exists between the definitions of $RX(\pi)$ and $X$.

  $$
  \begin{split}RX(\pi) = \begin{pmatrix}
              0 & -i \\
              -i & 0
            \end{pmatrix}
          = -i X\end{split}
  $$
</Admonition>

The gate is equivalent to a classical bit flip.

$$
\begin{split}|0\rangle \rightarrow |1\rangle \\
|1\rangle \rightarrow |0\rangle\end{split}
$$

Create new X gate.

<span id="undefined" />

`__init__(label=None)`

Create new X gate.

## Methods

|                                                                                                                                             |                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`__init__`](#qiskit.circuit.library.XGate.__init__ "qiskit.circuit.library.XGate.__init__")(\[label])                                      | Create new X gate.                                                       |
| [`add_decomposition`](#qiskit.circuit.library.XGate.add_decomposition "qiskit.circuit.library.XGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`assemble`](#qiskit.circuit.library.XGate.assemble "qiskit.circuit.library.XGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`broadcast_arguments`](#qiskit.circuit.library.XGate.broadcast_arguments "qiskit.circuit.library.XGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`c_if`](#qiskit.circuit.library.XGate.c_if "qiskit.circuit.library.XGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`control`](#qiskit.circuit.library.XGate.control "qiskit.circuit.library.XGate.control")(\[num\_ctrl\_qubits, label, ctrl\_state])         | Return a (multi-)controlled-X gate.                                      |
| [`copy`](#qiskit.circuit.library.XGate.copy "qiskit.circuit.library.XGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`inverse`](#qiskit.circuit.library.XGate.inverse "qiskit.circuit.library.XGate.inverse")()                                                 | Return inverted X gate (itself).                                         |
| [`is_parameterized`](#qiskit.circuit.library.XGate.is_parameterized "qiskit.circuit.library.XGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`mirror`](#qiskit.circuit.library.XGate.mirror "qiskit.circuit.library.XGate.mirror")()                                                    | DEPRECATED: use instruction.reverse\_ops().                              |
| [`power`](#qiskit.circuit.library.XGate.power "qiskit.circuit.library.XGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`qasm`](#qiskit.circuit.library.XGate.qasm "qiskit.circuit.library.XGate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`repeat`](#qiskit.circuit.library.XGate.repeat "qiskit.circuit.library.XGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`reverse_ops`](#qiskit.circuit.library.XGate.reverse_ops "qiskit.circuit.library.XGate.reverse_ops")()                                     | For a composite instruction, reverse the order of sub-instructions.      |
| [`soft_compare`](#qiskit.circuit.library.XGate.soft_compare "qiskit.circuit.library.XGate.soft_compare")(other)                             | Soft comparison between gates.                                           |
| [`to_matrix`](#qiskit.circuit.library.XGate.to_matrix "qiskit.circuit.library.XGate.to_matrix")()                                           | Return a Numpy.array for the gate unitary matrix.                        |
| [`validate_parameter`](#qiskit.circuit.library.XGate.validate_parameter "qiskit.circuit.library.XGate.validate_parameter")(parameter)       | Gate parameters should be int, float, or ParameterExpression             |

## Attributes

|                                                                                                                |                                                                               |
| -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`decompositions`](#qiskit.circuit.library.XGate.decompositions "qiskit.circuit.library.XGate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`definition`](#qiskit.circuit.library.XGate.definition "qiskit.circuit.library.XGate.definition")             | Return definition in terms of other basic gates.                              |
| [`duration`](#qiskit.circuit.library.XGate.duration "qiskit.circuit.library.XGate.duration")                   | Get the duration.                                                             |
| [`label`](#qiskit.circuit.library.XGate.label "qiskit.circuit.library.XGate.label")                            | Return gate label                                                             |
| [`params`](#qiskit.circuit.library.XGate.params "qiskit.circuit.library.XGate.params")                         | return instruction params.                                                    |
| [`unit`](#qiskit.circuit.library.XGate.unit "qiskit.circuit.library.XGate.unit")                               | Get the time unit of duration.                                                |

<span id="undefined" />

`add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

<span id="undefined" />

`assemble()`

Assemble a QasmQobjInstruction

**Return type**

`Instruction`

<span id="undefined" />

`broadcast_arguments(qargs, cargs)`

Validation and handling of the arguments and its relationship.

For example, `cx([q[0],q[1]], q[2])` means `cx(q[0], q[2]); cx(q[1], q[2])`. This method yields the arguments in the right grouping. In the given example:

```python
in: [[q[0],q[1]], q[2]],[]
outs: [q[0], q[2]], []
      [q[1], q[2]], []
```

The general broadcasting rules are:

> *   If len(qargs) == 1:
>
>     ```python
>     [q[0], q[1]] -> [q[0]],[q[1]]
>     ```
>
> *   If len(qargs) == 2:
>
>     ```python
>     [[q[0], q[1]], [r[0], r[1]]] -> [q[0], r[0]], [q[1], r[1]]
>     [[q[0]], [r[0], r[1]]]       -> [q[0], r[0]], [q[0], r[1]]
>     [[q[0], q[1]], [r[0]]]       -> [q[0], r[0]], [q[1], r[0]]
>     ```
>
> *   If len(qargs) >= 3:
>
>     ```python
>     [q[0], q[1]], [r[0], r[1]],  ...] -> [q[0], r[0], ...], [q[1], r[1], ...]
>     ```

**Parameters**

*   **qargs** (`List`) – List of quantum bit arguments.
*   **cargs** (`List`) – List of classical bit arguments.

**Return type**

`Tuple`\[`List`, `List`]

**Returns**

A tuple with single arguments.

**Raises**

**CircuitError** – If the input is not valid. For example, the number of arguments does not match the gate expectation.

<span id="undefined" />

`c_if(classical, val)`

Add classical condition on register classical and value val.

<span id="undefined" />

`control(num_ctrl_qubits=1, label=None, ctrl_state=None)`

Return a (multi-)controlled-X gate.

One control returns a CX gate. Two controls returns a CCX gate.

**Parameters**

*   **num\_ctrl\_qubits** (*int*) – number of control qubits.
*   **label** (*str or None*) – An optional label for the gate \[Default: None]
*   **ctrl\_state** (*int or str or None*) – control state expressed as integer, string (e.g. ‘110’), or None. If None, use all 1s.

**Returns**

controlled version of this gate.

**Return type**

[ControlledGate](qiskit.circuit.ControlledGate#qiskit.circuit.ControlledGate "qiskit.circuit.ControlledGate")

<span id="undefined" />

`copy(name=None)`

Copy of the instruction.

**Parameters**

**name** (*str*) – name to be given to the copied circuit, if None then the name stays the same.

**Returns**

**a copy of the current instruction, with the name**

updated if it was provided

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction#qiskit.circuit.Instruction "qiskit.circuit.Instruction")

<span id="undefined" />

`property decompositions`

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="undefined" />

`property definition`

Return definition in terms of other basic gates.

<span id="undefined" />

`property duration`

Get the duration.

<span id="undefined" />

`inverse()`

Return inverted X gate (itself).

<span id="undefined" />

`is_parameterized()`

Return True .IFF. instruction is parameterized else False

<span id="undefined" />

`property label`

Return gate label

**Return type**

`str`

<span id="undefined" />

`mirror()`

DEPRECATED: use instruction.reverse\_ops().

**Returns**

**a new instruction with sub-instructions**

reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction#qiskit.circuit.Instruction "qiskit.circuit.Instruction")

<span id="undefined" />

`property params`

return instruction params.

<span id="undefined" />

`power(exponent)`

Creates a unitary gate as gate^exponent.

**Parameters**

**exponent** (*float*) – Gate^exponent

**Returns**

To which to\_matrix is self.to\_matrix^exponent.

**Return type**

[qiskit.extensions.UnitaryGate](qiskit.extensions.UnitaryGate#qiskit.extensions.UnitaryGate "qiskit.extensions.UnitaryGate")

**Raises**

**CircuitError** – If Gate is not unitary

<span id="undefined" />

`qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

<span id="undefined" />

`repeat(n)`

Creates an instruction with gate repeated n amount of times.

**Parameters**

**n** (*int*) – Number of times to repeat the instruction

**Returns**

Containing the definition.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction#qiskit.circuit.Instruction "qiskit.circuit.Instruction")

**Raises**

**CircuitError** – If n \< 1.

<span id="undefined" />

`reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction#qiskit.circuit.Instruction "qiskit.circuit.Instruction")

<span id="undefined" />

`soft_compare(other)`

Soft comparison between gates. Their names, number of qubits, and classical bit numbers must match. The number of parameters must match. Each parameter is compared. If one is a ParameterExpression then it is not taken into account.

**Parameters**

**other** (*instruction*) – other instruction.

**Returns**

are self and other equal up to parameter expressions.

**Return type**

bool

<span id="undefined" />

`to_matrix()`

Return a Numpy.array for the gate unitary matrix.

**Returns**

if the Gate subclass has a matrix definition.

**Return type**

np.ndarray

**Raises**

**CircuitError** – If a Gate subclass does not implement this method an exception will be raised when this base class method is called.

<span id="undefined" />

`property unit`

Get the time unit of duration.

<span id="undefined" />

`validate_parameter(parameter)`

Gate parameters should be int, float, or ParameterExpression
