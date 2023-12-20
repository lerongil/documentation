<span id="qiskit-circuit-library-c3sxgate" />

# qiskit.circuit.library.C3SXGate

<span id="undefined" />

`C3SXGate(label=None, ctrl_state=None, *, angle=None)`

The 3-qubit controlled sqrt-X gate.

This implementation is based on Page 17 of \[1].

## References

\[1] Barenco et al., 1995. [https://arxiv.org/pdf/quant-ph/9503016.pdf](https://arxiv.org/pdf/quant-ph/9503016.pdf)

Create a new 3-qubit controlled sqrt-X gate.

**Parameters**

*   **label** (*str or None*) – An optional label for the gate \[Default: None]
*   **ctrl\_state** (*int or str or None*) – control state expressed as integer, string (e.g. ‘110’), or None. If None, use all 1s.
*   **angle** (*float*) – DEPRECATED. The angle used in the controlled-U1 gates. An angle of π/8 yields the sqrt(X) gates, an angle of π/4 the 3-qubit controlled X gate.

<span id="undefined" />

`__init__(label=None, ctrl_state=None, *, angle=None)`

Create a new 3-qubit controlled sqrt-X gate.

**Parameters**

*   **label** (*str or None*) – An optional label for the gate \[Default: None]
*   **ctrl\_state** (*int or str or None*) – control state expressed as integer, string (e.g. ‘110’), or None. If None, use all 1s.
*   **angle** (*float*) – DEPRECATED. The angle used in the controlled-U1 gates. An angle of π/8 yields the sqrt(X) gates, an angle of π/4 the 3-qubit controlled X gate.

## Methods

|                                                                                                                                                   |                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`__init__`](#qiskit.circuit.library.C3SXGate.__init__ "qiskit.circuit.library.C3SXGate.__init__")(\[label, ctrl\_state, angle])                  | Create a new 3-qubit controlled sqrt-X gate.                             |
| [`add_decomposition`](#qiskit.circuit.library.C3SXGate.add_decomposition "qiskit.circuit.library.C3SXGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`assemble`](#qiskit.circuit.library.C3SXGate.assemble "qiskit.circuit.library.C3SXGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`broadcast_arguments`](#qiskit.circuit.library.C3SXGate.broadcast_arguments "qiskit.circuit.library.C3SXGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`c_if`](#qiskit.circuit.library.C3SXGate.c_if "qiskit.circuit.library.C3SXGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`control`](#qiskit.circuit.library.C3SXGate.control "qiskit.circuit.library.C3SXGate.control")(\[num\_ctrl\_qubits, label, ctrl\_state])         | Return controlled version of gate.                                       |
| [`copy`](#qiskit.circuit.library.C3SXGate.copy "qiskit.circuit.library.C3SXGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`inverse`](#qiskit.circuit.library.C3SXGate.inverse "qiskit.circuit.library.C3SXGate.inverse")()                                                 | Invert this gate.                                                        |
| [`is_parameterized`](#qiskit.circuit.library.C3SXGate.is_parameterized "qiskit.circuit.library.C3SXGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`mirror`](#qiskit.circuit.library.C3SXGate.mirror "qiskit.circuit.library.C3SXGate.mirror")()                                                    | DEPRECATED: use instruction.reverse\_ops().                              |
| [`power`](#qiskit.circuit.library.C3SXGate.power "qiskit.circuit.library.C3SXGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`qasm`](#qiskit.circuit.library.C3SXGate.qasm "qiskit.circuit.library.C3SXGate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`repeat`](#qiskit.circuit.library.C3SXGate.repeat "qiskit.circuit.library.C3SXGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`reverse_ops`](#qiskit.circuit.library.C3SXGate.reverse_ops "qiskit.circuit.library.C3SXGate.reverse_ops")()                                     | For a composite instruction, reverse the order of sub-instructions.      |
| [`to_matrix`](#qiskit.circuit.library.C3SXGate.to_matrix "qiskit.circuit.library.C3SXGate.to_matrix")()                                           | Return a Numpy.array for the gate unitary matrix.                        |
| [`validate_parameter`](#qiskit.circuit.library.C3SXGate.validate_parameter "qiskit.circuit.library.C3SXGate.validate_parameter")(parameter)       | Gate parameters should be int, float, or ParameterExpression             |

## Attributes

|                                                                                                                         |                                                                               |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`ctrl_state`](#qiskit.circuit.library.C3SXGate.ctrl_state "qiskit.circuit.library.C3SXGate.ctrl_state")                | Return the control state of the gate as a decimal integer.                    |
| [`decompositions`](#qiskit.circuit.library.C3SXGate.decompositions "qiskit.circuit.library.C3SXGate.decompositions")    | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`definition`](#qiskit.circuit.library.C3SXGate.definition "qiskit.circuit.library.C3SXGate.definition")                | Return definition in terms of other basic gates.                              |
| [`duration`](#qiskit.circuit.library.C3SXGate.duration "qiskit.circuit.library.C3SXGate.duration")                      | Get the duration.                                                             |
| [`label`](#qiskit.circuit.library.C3SXGate.label "qiskit.circuit.library.C3SXGate.label")                               | Return gate label                                                             |
| [`num_ctrl_qubits`](#qiskit.circuit.library.C3SXGate.num_ctrl_qubits "qiskit.circuit.library.C3SXGate.num_ctrl_qubits") | Get number of control qubits.                                                 |
| [`params`](#qiskit.circuit.library.C3SXGate.params "qiskit.circuit.library.C3SXGate.params")                            | Get parameters from base\_gate.                                               |
| [`unit`](#qiskit.circuit.library.C3SXGate.unit "qiskit.circuit.library.C3SXGate.unit")                                  | Get the time unit of duration.                                                |

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

Invert this gate. The C3X is its own inverse.

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

`to_matrix()`

Return a Numpy.array for the gate unitary matrix.

**Raises**

**CircuitError** – If a Gate subclass does not implement this method an exception will be raised when this base class method is called.

**Return type**

`ndarray`

<span id="undefined" />

`property unit`

Get the time unit of duration.

<span id="undefined" />

`validate_parameter(parameter)`

Gate parameters should be int, float, or ParameterExpression
