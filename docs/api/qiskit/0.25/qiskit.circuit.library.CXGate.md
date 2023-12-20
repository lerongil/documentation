# qiskit.circuit.library.CXGate

<span id="undefined" />

`CXGate(label=None, ctrl_state=None)`

Controlled-X gate.

**Circuit symbol:**

```python
q_0: ──■──
     ┌─┴─┐
q_1: ┤ X ├
     └───┘
```

**Matrix representation:**

$$
\begin{split}CX\ q_0, q_1 =
    I \otimes |0\rangle\langle0| + X \otimes |1\rangle\langle1| =
    \begin{pmatrix}
        1 & 0 & 0 & 0 \\
        0 & 0 & 0 & 1 \\
        0 & 0 & 1 & 0 \\
        0 & 1 & 0 & 0
    \end{pmatrix}\end{split}
$$

<Admonition title="Note" type="note">
  In Qiskit’s convention, higher qubit indices are more significant (little endian convention). In many textbooks, controlled gates are presented with the assumption of more significant qubits as control, which in our case would be q\_1. Thus a textbook matrix for this gate will be:

  ```python
       ┌───┐
  q_0: ┤ X ├
       └─┬─┘
  q_1: ──■──
  ```

  $$
  \begin{split}CX\ q_1, q_0 =
      |0 \rangle\langle 0| \otimes I + |1 \rangle\langle 1| \otimes X =
      \begin{pmatrix}
          1 & 0 & 0 & 0 \\
          0 & 1 & 0 & 0 \\
          0 & 0 & 0 & 1 \\
          0 & 0 & 1 & 0
      \end{pmatrix}\end{split}
  $$
</Admonition>

In the computational basis, this gate flips the target qubit if the control qubit is in the $|1\rangle$ state. In this sense it is similar to a classical XOR gate.

$$
`|a, b\rangle \rightarrow |a, a \oplus b\rangle`
$$

Create new CX gate.

<span id="undefined" />

`__init__(label=None, ctrl_state=None)`

Create new CX gate.

## Methods

|                                                                                                                                               |                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`__init__`](#qiskit.circuit.library.CXGate.__init__ "qiskit.circuit.library.CXGate.__init__")(\[label, ctrl\_state])                         | Create new CX gate.                                                      |
| [`add_decomposition`](#qiskit.circuit.library.CXGate.add_decomposition "qiskit.circuit.library.CXGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`assemble`](#qiskit.circuit.library.CXGate.assemble "qiskit.circuit.library.CXGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`broadcast_arguments`](#qiskit.circuit.library.CXGate.broadcast_arguments "qiskit.circuit.library.CXGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`c_if`](#qiskit.circuit.library.CXGate.c_if "qiskit.circuit.library.CXGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`control`](#qiskit.circuit.library.CXGate.control "qiskit.circuit.library.CXGate.control")(\[num\_ctrl\_qubits, label, ctrl\_state])         | Return a controlled-X gate with more control lines.                      |
| [`copy`](#qiskit.circuit.library.CXGate.copy "qiskit.circuit.library.CXGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`inverse`](#qiskit.circuit.library.CXGate.inverse "qiskit.circuit.library.CXGate.inverse")()                                                 | Return inverted CX gate (itself).                                        |
| [`is_parameterized`](#qiskit.circuit.library.CXGate.is_parameterized "qiskit.circuit.library.CXGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`mirror`](#qiskit.circuit.library.CXGate.mirror "qiskit.circuit.library.CXGate.mirror")()                                                    | DEPRECATED: use instruction.reverse\_ops().                              |
| [`power`](#qiskit.circuit.library.CXGate.power "qiskit.circuit.library.CXGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`qasm`](#qiskit.circuit.library.CXGate.qasm "qiskit.circuit.library.CXGate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`repeat`](#qiskit.circuit.library.CXGate.repeat "qiskit.circuit.library.CXGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`reverse_ops`](#qiskit.circuit.library.CXGate.reverse_ops "qiskit.circuit.library.CXGate.reverse_ops")()                                     | For a composite instruction, reverse the order of sub-instructions.      |
| [`soft_compare`](#qiskit.circuit.library.CXGate.soft_compare "qiskit.circuit.library.CXGate.soft_compare")(other)                             | Soft comparison between gates.                                           |
| [`to_matrix`](#qiskit.circuit.library.CXGate.to_matrix "qiskit.circuit.library.CXGate.to_matrix")()                                           | Return a Numpy.array for the gate unitary matrix.                        |
| [`validate_parameter`](#qiskit.circuit.library.CXGate.validate_parameter "qiskit.circuit.library.CXGate.validate_parameter")(parameter)       | Gate parameters should be int, float, or ParameterExpression             |

## Attributes

|                                                                                                                     |                                                                               |
| ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`ctrl_state`](#qiskit.circuit.library.CXGate.ctrl_state "qiskit.circuit.library.CXGate.ctrl_state")                | Return the control state of the gate as a decimal integer.                    |
| [`decompositions`](#qiskit.circuit.library.CXGate.decompositions "qiskit.circuit.library.CXGate.decompositions")    | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`definition`](#qiskit.circuit.library.CXGate.definition "qiskit.circuit.library.CXGate.definition")                | Return definition in terms of other basic gates.                              |
| [`duration`](#qiskit.circuit.library.CXGate.duration "qiskit.circuit.library.CXGate.duration")                      | Get the duration.                                                             |
| [`label`](#qiskit.circuit.library.CXGate.label "qiskit.circuit.library.CXGate.label")                               | Return gate label                                                             |
| [`name`](#qiskit.circuit.library.CXGate.name "qiskit.circuit.library.CXGate.name")                                  | Get name of gate.                                                             |
| [`num_ctrl_qubits`](#qiskit.circuit.library.CXGate.num_ctrl_qubits "qiskit.circuit.library.CXGate.num_ctrl_qubits") | Get number of control qubits.                                                 |
| [`params`](#qiskit.circuit.library.CXGate.params "qiskit.circuit.library.CXGate.params")                            | Get parameters from base\_gate.                                               |
| [`unit`](#qiskit.circuit.library.CXGate.unit "qiskit.circuit.library.CXGate.unit")                                  | Get the time unit of duration.                                                |

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

Return a controlled-X gate with more control lines.

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

`property ctrl_state`

Return the control state of the gate as a decimal integer.

**Return type**

`int`

<span id="undefined" />

`property decompositions`

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="undefined" />

`property definition`

Return definition in terms of other basic gates. If the gate has open controls, as determined from self.ctrl\_state, the returned definition is conjugated with X without changing the internal \_definition.

**Return type**

`List`

<span id="undefined" />

`property duration`

Get the duration.

<span id="undefined" />

`inverse()`

Return inverted CX gate (itself).

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

`property name`

Get name of gate. If the gate has open controls the gate name will become:

> \<original\_name\_o\<ctrl\_state>

where \<original\_name> is the gate name for the default case of closed control qubits and \<ctrl\_state> is the integer value of the control state for the gate.

**Return type**

`str`

<span id="undefined" />

`property num_ctrl_qubits`

Get number of control qubits.

**Returns**

The number of control qubits for the gate.

**Return type**

int

<span id="undefined" />

`property params`

Get parameters from base\_gate.

**Returns**

List of gate parameters.

**Return type**

list

**Raises**

**CircuitError** – Controlled gate does not define a base gate

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
