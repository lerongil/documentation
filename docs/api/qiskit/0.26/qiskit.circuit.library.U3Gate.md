# qiskit.circuit.library.U3Gate

<span id="undefined" />

`U3Gate(theta, phi, lam, label=None)`

Generic single-qubit rotation gate with 3 Euler angles.

Implemented using two X90 pulses on IBM Quantum systems:

$$
U3(\theta, \phi, \lambda) =
    RZ(\phi) RX(-\pi/2) RZ(\theta) RX(\pi/2) RZ(\lambda)
$$

**Circuit symbol:**

```python
     ┌───────────┐
q_0: ┤ U3(ϴ,φ,λ) ├
     └───────────┘
```

**Matrix Representation:**

$$
 \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}U3(\theta, \phi, \lambda) =
    \begin{pmatrix}
        \cos(\th)          & -e^{i\lambda}\sin(\th) \\
        e^{i\phi}\sin(\th) & e^{i(\phi+\lambda)}\cos(\th)
    \end{pmatrix}\end{split}\end{aligned}\end{align} 
$$

**Examples:**

$$
U3(\theta, -\frac{\pi}{2}, \frac{\pi}{2}) = RX(\theta)
$$

$$
U3(\theta, 0, 0) = RY(\theta)
$$

Create new U3 gate.

<span id="undefined" />

`__init__(theta, phi, lam, label=None)`

Create new U3 gate.

## Methods

|                                                                                                                                               |                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`__init__`](#qiskit.circuit.library.U3Gate.__init__ "qiskit.circuit.library.U3Gate.__init__")(theta, phi, lam\[, label])                     | Create new U3 gate.                                                      |
| [`add_decomposition`](#qiskit.circuit.library.U3Gate.add_decomposition "qiskit.circuit.library.U3Gate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`assemble`](#qiskit.circuit.library.U3Gate.assemble "qiskit.circuit.library.U3Gate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`broadcast_arguments`](#qiskit.circuit.library.U3Gate.broadcast_arguments "qiskit.circuit.library.U3Gate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`c_if`](#qiskit.circuit.library.U3Gate.c_if "qiskit.circuit.library.U3Gate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`control`](#qiskit.circuit.library.U3Gate.control "qiskit.circuit.library.U3Gate.control")(\[num\_ctrl\_qubits, label, ctrl\_state])         | Return a (multi-)controlled-U3 gate.                                     |
| [`copy`](#qiskit.circuit.library.U3Gate.copy "qiskit.circuit.library.U3Gate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`inverse`](#qiskit.circuit.library.U3Gate.inverse "qiskit.circuit.library.U3Gate.inverse")()                                                 | Return inverted U3 gate.                                                 |
| [`is_parameterized`](#qiskit.circuit.library.U3Gate.is_parameterized "qiskit.circuit.library.U3Gate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`mirror`](#qiskit.circuit.library.U3Gate.mirror "qiskit.circuit.library.U3Gate.mirror")()                                                    | DEPRECATED: use instruction.reverse\_ops().                              |
| [`power`](#qiskit.circuit.library.U3Gate.power "qiskit.circuit.library.U3Gate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`qasm`](#qiskit.circuit.library.U3Gate.qasm "qiskit.circuit.library.U3Gate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`repeat`](#qiskit.circuit.library.U3Gate.repeat "qiskit.circuit.library.U3Gate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`reverse_ops`](#qiskit.circuit.library.U3Gate.reverse_ops "qiskit.circuit.library.U3Gate.reverse_ops")()                                     | For a composite instruction, reverse the order of sub-instructions.      |
| [`soft_compare`](#qiskit.circuit.library.U3Gate.soft_compare "qiskit.circuit.library.U3Gate.soft_compare")(other)                             | Soft comparison between gates.                                           |
| [`to_matrix`](#qiskit.circuit.library.U3Gate.to_matrix "qiskit.circuit.library.U3Gate.to_matrix")()                                           | Return a Numpy.array for the gate unitary matrix.                        |
| [`validate_parameter`](#qiskit.circuit.library.U3Gate.validate_parameter "qiskit.circuit.library.U3Gate.validate_parameter")(parameter)       | Gate parameters should be int, float, or ParameterExpression             |

## Attributes

|                                                                                                                  |                                                                               |
| ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`decompositions`](#qiskit.circuit.library.U3Gate.decompositions "qiskit.circuit.library.U3Gate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`definition`](#qiskit.circuit.library.U3Gate.definition "qiskit.circuit.library.U3Gate.definition")             | Return definition in terms of other basic gates.                              |
| [`duration`](#qiskit.circuit.library.U3Gate.duration "qiskit.circuit.library.U3Gate.duration")                   | Get the duration.                                                             |
| [`label`](#qiskit.circuit.library.U3Gate.label "qiskit.circuit.library.U3Gate.label")                            | Return gate label                                                             |
| [`params`](#qiskit.circuit.library.U3Gate.params "qiskit.circuit.library.U3Gate.params")                         | return instruction params.                                                    |
| [`unit`](#qiskit.circuit.library.U3Gate.unit "qiskit.circuit.library.U3Gate.unit")                               | Get the time unit of duration.                                                |

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

Return a (multi-)controlled-U3 gate.

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

Return inverted U3 gate.

$U3(\theta,\phi,\lambda)^{\dagger} =U3(-\theta,-\lambda,-\phi)$)

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
