<span id="qiskit-qobj-qasmqobjinstruction" />

# qiskit.qobj.QasmQobjInstruction

<span id="undefined" />

`QasmQobjInstruction(name, params=None, qubits=None, register=None, memory=None, condition=None, conditional=None, label=None, mask=None, relation=None, val=None, snapshot_type=None)`

A class representing a single instruction in an QasmQobj Experiment.

Instatiate a new QasmQobjInstruction object.

**Parameters**

*   **name** (*str*) – The name of the instruction
*   **params** (*list*) – The list of parameters for the gate
*   **qubits** (*list*) – A list of `int` representing the qubits the instruction operates on
*   **register** (*list*) – If a `measure` instruction this is a list of `int` containing the list of register slots in which to store the measurement results (must be the same length as qubits). If a `bfunc` instruction this is a single `int` of the register slot in which to store the result.
*   **memory** (*list*) – If a `measure` instruction this is a list of `int` containing the list of memory slots to store the measurement results in (must be the same length as qubits). If a `bfunc` instruction this is a single `int` of the memory slot to store the boolean function result in.
*   **condition** (*tuple*) – A tuple of the form `(int, int)` where the first `int` is the control register and the second `int` is the control value if the gate has a condition.
*   **conditional** (*int*) – The register index of the condition
*   **label** (*str*) – An optional label assigned to the instruction
*   **mask** (*int*) – For a `bfunc` instruction the hex value which is applied as an `AND` to the register bits.
*   **relation** (*str*) – Relational operator for comparing the masked register to the `val` kwarg. Can be either `==` (equals) or `!=` (not equals).
*   **val** (*int*) – Value to which to compare the masked register. In other words, the output of the function is `(register AND mask)`
*   **snapshot\_type** (*str*) – For snapshot instructions the type of snapshot to use

<span id="undefined" />

`__init__(name, params=None, qubits=None, register=None, memory=None, condition=None, conditional=None, label=None, mask=None, relation=None, val=None, snapshot_type=None)`

Instatiate a new QasmQobjInstruction object.

**Parameters**

*   **name** (*str*) – The name of the instruction
*   **params** (*list*) – The list of parameters for the gate
*   **qubits** (*list*) – A list of `int` representing the qubits the instruction operates on
*   **register** (*list*) – If a `measure` instruction this is a list of `int` containing the list of register slots in which to store the measurement results (must be the same length as qubits). If a `bfunc` instruction this is a single `int` of the register slot in which to store the result.
*   **memory** (*list*) – If a `measure` instruction this is a list of `int` containing the list of memory slots to store the measurement results in (must be the same length as qubits). If a `bfunc` instruction this is a single `int` of the memory slot to store the boolean function result in.
*   **condition** (*tuple*) – A tuple of the form `(int, int)` where the first `int` is the control register and the second `int` is the control value if the gate has a condition.
*   **conditional** (*int*) – The register index of the condition
*   **label** (*str*) – An optional label assigned to the instruction
*   **mask** (*int*) – For a `bfunc` instruction the hex value which is applied as an `AND` to the register bits.
*   **relation** (*str*) – Relational operator for comparing the masked register to the `val` kwarg. Can be either `==` (equals) or `!=` (not equals).
*   **val** (*int*) – Value to which to compare the masked register. In other words, the output of the function is `(register AND mask)`
*   **snapshot\_type** (*str*) – For snapshot instructions the type of snapshot to use

## Methods

|                                                                                                                                          |                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| [`__init__`](#qiskit.qobj.QasmQobjInstruction.__init__ "qiskit.qobj.QasmQobjInstruction.__init__")(name\[, params, qubits, register, …]) | Instatiate a new QasmQobjInstruction object.                  |
| [`from_dict`](#qiskit.qobj.QasmQobjInstruction.from_dict "qiskit.qobj.QasmQobjInstruction.from_dict")(data)                              | Create a new QasmQobjInstruction object from a dictionary.    |
| [`to_dict`](#qiskit.qobj.QasmQobjInstruction.to_dict "qiskit.qobj.QasmQobjInstruction.to_dict")()                                        | Return a dictionary format representation of the Instruction. |

<span id="undefined" />

`classmethod from_dict(data)`

Create a new QasmQobjInstruction object from a dictionary.

**Parameters**

**data** (*dict*) – A dictionary for the experiment config

**Returns**

The object from the input dictionary.

**Return type**

[QasmQobjInstruction](#qiskit.qobj.QasmQobjInstruction "qiskit.qobj.QasmQobjInstruction")

<span id="undefined" />

`to_dict()`

Return a dictionary format representation of the Instruction.

**Returns**

The dictionary form of the QasmQobjInstruction.

**Return type**

dict
