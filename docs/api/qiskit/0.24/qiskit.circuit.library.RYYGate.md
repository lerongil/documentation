<span id="qiskit-circuit-library-ryygate" />

# qiskit.circuit.library.RYYGate

<span id="undefined" />

`RYYGate(theta)`

A parameteric 2-qubit $Y \otimes Y$ interaction (rotation about YY).

This gate is symmetric, and is maximally entangling at $\theta = \pi/2$.

**Circuit Symbol:**

```python
     ┌─────────┐
q_0: ┤1        ├
     │  Ryy(ϴ) │
q_1: ┤0        ├
     └─────────┘
```

**Matrix Representation:**

$$
 \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}R_{YY}(\theta) = exp(-i \th Y{\otimes}Y) =
    \begin{pmatrix}
        \cos(\th)   & 0           & 0           & i\sin(\th) \\
        0           & \cos(\th)   & -i\sin(\th) & 0 \\
        0           & -i\sin(\th) & \cos(\th)   & 0 \\
        i\sin(\th)  & 0           & 0           & \cos(\th)
    \end{pmatrix}\end{split}\end{aligned}\end{align} 
$$

**Examples:**

> $$
> R_{YY}(\theta = 0) = I
> $$
>
> $$
> R_{YY}(\theta = \pi) = i Y \otimes Y
> $$
>
> $$
> \begin{split}R_{YY}(\theta = \frac{\pi}{2}) = \frac{1}{\sqrt{2}}
>                         \begin{pmatrix}
>                             1 & 0 & 0 & i \\
>                             0 & 1 & -i & 0 \\
>                             0 & -i & 1 & 0 \\
>                             i & 0 & 0 & 1
>                         \end{pmatrix}\end{split}
> $$

Create new RYY gate.

<span id="undefined" />

`__init__(theta)`

Create new RYY gate.

## Methods

|                                                                                                                                                 |                                                                          |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`__init__`](#qiskit.circuit.library.RYYGate.__init__ "qiskit.circuit.library.RYYGate.__init__")(theta)                                         | Create new RYY gate.                                                     |
| [`add_decomposition`](#qiskit.circuit.library.RYYGate.add_decomposition "qiskit.circuit.library.RYYGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`assemble`](#qiskit.circuit.library.RYYGate.assemble "qiskit.circuit.library.RYYGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`broadcast_arguments`](#qiskit.circuit.library.RYYGate.broadcast_arguments "qiskit.circuit.library.RYYGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`c_if`](#qiskit.circuit.library.RYYGate.c_if "qiskit.circuit.library.RYYGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`control`](#qiskit.circuit.library.RYYGate.control "qiskit.circuit.library.RYYGate.control")(\[num\_ctrl\_qubits, label, ctrl\_state])         | Return controlled version of gate.                                       |
| [`copy`](#qiskit.circuit.library.RYYGate.copy "qiskit.circuit.library.RYYGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`inverse`](#qiskit.circuit.library.RYYGate.inverse "qiskit.circuit.library.RYYGate.inverse")()                                                 | Return inverse RYY gate (i.e.                                            |
| [`is_parameterized`](#qiskit.circuit.library.RYYGate.is_parameterized "qiskit.circuit.library.RYYGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`mirror`](#qiskit.circuit.library.RYYGate.mirror "qiskit.circuit.library.RYYGate.mirror")()                                                    | DEPRECATED: use instruction.reverse\_ops().                              |
| [`power`](#qiskit.circuit.library.RYYGate.power "qiskit.circuit.library.RYYGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`qasm`](#qiskit.circuit.library.RYYGate.qasm "qiskit.circuit.library.RYYGate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`repeat`](#qiskit.circuit.library.RYYGate.repeat "qiskit.circuit.library.RYYGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`reverse_ops`](#qiskit.circuit.library.RYYGate.reverse_ops "qiskit.circuit.library.RYYGate.reverse_ops")()                                     | For a composite instruction, reverse the order of sub-instructions.      |
| [`to_matrix`](#qiskit.circuit.library.RYYGate.to_matrix "qiskit.circuit.library.RYYGate.to_matrix")()                                           | Return a numpy.array for the RYY gate.                                   |
| [`validate_parameter`](#qiskit.circuit.library.RYYGate.validate_parameter "qiskit.circuit.library.RYYGate.validate_parameter")(parameter)       | Gate parameters should be int, float, or ParameterExpression             |

## Attributes

|                                                                                                                    |                                                                               |
| ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| [`decompositions`](#qiskit.circuit.library.RYYGate.decompositions "qiskit.circuit.library.RYYGate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`definition`](#qiskit.circuit.library.RYYGate.definition "qiskit.circuit.library.RYYGate.definition")             | Return definition in terms of other basic gates.                              |
| [`duration`](#qiskit.circuit.library.RYYGate.duration "qiskit.circuit.library.RYYGate.duration")                   | Get the duration.                                                             |
| [`label`](#qiskit.circuit.library.RYYGate.label "qiskit.circuit.library.RYYGate.label")                            | Return gate label                                                             |
| [`params`](#qiskit.circuit.library.RYYGate.params "qiskit.circuit.library.RYYGate.params")                         | return instruction params.                                                    |
| [`unit`](#qiskit.circuit.library.RYYGate.unit "qiskit.circuit.library.RYYGate.unit")                               | Get the time unit of duration.                                                |

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

Return inverse RYY gate (i.e. with the negative rotation angle).

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

`to_matrix()`

Return a numpy.array for the RYY gate.

<span id="undefined" />

`property unit`

Get the time unit of duration.

<span id="undefined" />

`validate_parameter(parameter)`

Gate parameters should be int, float, or ParameterExpression
