# qiskit.circuit.library.ECRGate

<span id="undefined" />

`ECRGate`

An echoed RZX(pi/2) gate implemented using RZX(pi/4) and RZX(-pi/4).

This gate is maximally entangling and is equivalent to a CNOT up to single-qubit pre-rotations. The echoing procedure mitigates some unwanted terms (terms other than ZX) to cancel in an experiment.

**Circuit Symbol:**

```python
     ┌─────────┐            ┌────────────┐┌────────┐┌─────────────┐
q_0: ┤0        ├       q_0: ┤0           ├┤ RX(pi) ├┤0            ├
     │   ECR   │   =        │  RZX(pi/4) │└────────┘│  RZX(-pi/4) │
q_1: ┤1        ├       q_1: ┤1           ├──────────┤1            ├
     └─────────┘            └────────────┘          └─────────────┘
```

**Matrix Representation:**

$$
\begin{split}ECR\ q_0, q_1 = \frac{1}{\sqrt{2}}
    \begin{pmatrix}
        0   & 1   &  0  & i \\
        1   & 0   &  -i & 0 \\
        0   & i   &  0  & 1 \\
        -i  & 0   &  1  & 0
    \end{pmatrix}\end{split}
$$

<Admonition title="Note" type="note">
  In Qiskit’s convention, higher qubit indices are more significant (little endian convention). In the above example we apply the gate on (q\_0, q\_1) which results in the $X \otimes Z$ tensor order. Instead, if we apply it on (q\_1, q\_0), the matrix will be $Z \otimes X$:

  ```python
       ┌─────────┐
  q_0: ┤1        ├
       │   ECR   │
  q_1: ┤0        ├
       └─────────┘
  ```

  $$
  \begin{split}ECR\ q_0, q_1 = \frac{1}{\sqrt{2}}
      \begin{pmatrix}
          0   & 0   &  1  & i \\
          0   & 0   &  i  & 1 \\
          1   & -i  &  0  & 0 \\
          -i  & 1   &  0  & 0
      \end{pmatrix}\end{split}
  $$
</Admonition>

Create new ECR gate.

<span id="undefined" />

`__init__()`

Create new ECR gate.

## Methods

|                                                                                                                                                 |                                                                          |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`__init__`](#qiskit.circuit.library.ECRGate.__init__ "qiskit.circuit.library.ECRGate.__init__")()                                              | Create new ECR gate.                                                     |
| [`add_decomposition`](#qiskit.circuit.library.ECRGate.add_decomposition "qiskit.circuit.library.ECRGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`assemble`](#qiskit.circuit.library.ECRGate.assemble "qiskit.circuit.library.ECRGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`broadcast_arguments`](#qiskit.circuit.library.ECRGate.broadcast_arguments "qiskit.circuit.library.ECRGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`c_if`](#qiskit.circuit.library.ECRGate.c_if "qiskit.circuit.library.ECRGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`control`](#qiskit.circuit.library.ECRGate.control "qiskit.circuit.library.ECRGate.control")(\[num\_ctrl\_qubits, label, ctrl\_state])         | Return controlled version of gate.                                       |
| [`copy`](#qiskit.circuit.library.ECRGate.copy "qiskit.circuit.library.ECRGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`inverse`](#qiskit.circuit.library.ECRGate.inverse "qiskit.circuit.library.ECRGate.inverse")()                                                 | Invert this instruction.                                                 |
| [`is_parameterized`](#qiskit.circuit.library.ECRGate.is_parameterized "qiskit.circuit.library.ECRGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`mirror`](#qiskit.circuit.library.ECRGate.mirror "qiskit.circuit.library.ECRGate.mirror")()                                                    | DEPRECATED: use instruction.reverse\_ops().                              |
| [`power`](#qiskit.circuit.library.ECRGate.power "qiskit.circuit.library.ECRGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`qasm`](#qiskit.circuit.library.ECRGate.qasm "qiskit.circuit.library.ECRGate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`repeat`](#qiskit.circuit.library.ECRGate.repeat "qiskit.circuit.library.ECRGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`reverse_ops`](#qiskit.circuit.library.ECRGate.reverse_ops "qiskit.circuit.library.ECRGate.reverse_ops")()                                     | For a composite instruction, reverse the order of sub-instructions.      |
| [`soft_compare`](#qiskit.circuit.library.ECRGate.soft_compare "qiskit.circuit.library.ECRGate.soft_compare")(other)                             | Soft comparison between gates.                                           |
| [`to_matrix`](#qiskit.circuit.library.ECRGate.to_matrix "qiskit.circuit.library.ECRGate.to_matrix")()                                           | Return a numpy.array for the ECR gate.                                   |
| [`validate_parameter`](#qiskit.circuit.library.ECRGate.validate_parameter "qiskit.circuit.library.ECRGate.validate_parameter")(parameter)       | Gate parameters should be int, float, or ParameterExpression             |

## Attributes

|                                                                                                                    |                                                                               |
| ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| [`decompositions`](#qiskit.circuit.library.ECRGate.decompositions "qiskit.circuit.library.ECRGate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`definition`](#qiskit.circuit.library.ECRGate.definition "qiskit.circuit.library.ECRGate.definition")             | Return definition in terms of other basic gates.                              |
| [`duration`](#qiskit.circuit.library.ECRGate.duration "qiskit.circuit.library.ECRGate.duration")                   | Get the duration.                                                             |
| [`label`](#qiskit.circuit.library.ECRGate.label "qiskit.circuit.library.ECRGate.label")                            | Return gate label                                                             |
| [`params`](#qiskit.circuit.library.ECRGate.params "qiskit.circuit.library.ECRGate.params")                         | return instruction params.                                                    |
| [`unit`](#qiskit.circuit.library.ECRGate.unit "qiskit.circuit.library.ECRGate.unit")                               | Get the time unit of duration.                                                |

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

Return controlled version of gate. See [`ControlledGate`](qiskit.circuit.ControlledGate#qiskit.circuit.ControlledGate "qiskit.circuit.ControlledGate") for usage.

**Parameters**

*   **num\_ctrl\_qubits** (`Optional`\[`int`]) – number of controls to add to gate (default=1)
*   **label** (`Optional`\[`str`]) – optional gate label
*   **ctrl\_state** (`Union`\[`int`, `str`, `None`]) – The control state in decimal or as a bitstring (e.g. ‘111’). If None, use 2\*\*num\_ctrl\_qubits-1.

**Returns**

Controlled version of gate. This default algorithm uses num\_ctrl\_qubits-1 ancillae qubits so returns a gate of size num\_qubits + 2\*num\_ctrl\_qubits - 1.

**Return type**

[qiskit.circuit.ControlledGate](qiskit.circuit.ControlledGate#qiskit.circuit.ControlledGate "qiskit.circuit.ControlledGate")

**Raises**

**QiskitError** – unrecognized mode or invalid ctrl\_state

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

Invert this instruction.

If the instruction is composite (i.e. has a definition), then its definition will be recursively inverted.

Special instructions inheriting from Instruction can implement their own inverse (e.g. T and Tdg, Barrier, etc.)

**Returns**

a fresh instruction for the inverse

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction#qiskit.circuit.Instruction "qiskit.circuit.Instruction")

**Raises**

**CircuitError** – if the instruction is not composite and an inverse has not been implemented for it.

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

Return a numpy.array for the ECR gate.

<span id="undefined" />

`property unit`

Get the time unit of duration.

<span id="undefined" />

`validate_parameter(parameter)`

Gate parameters should be int, float, or ParameterExpression
