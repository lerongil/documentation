<span id="qiskit-providers-models-command" />

# qiskit.providers.models.Command

<span id="undefined" />

`Command(name, qubits=None, sequence=None, **kwargs)`

Class representing a Command.

<span id="undefined" />

### name

Pulse command name.

Initialize a Command object

**Parameters**

*   **name** (*str*) – The name of the command
*   **qubits** – The qubits for the command
*   **sequence** ([*PulseQobjInstruction*](qiskit.qobj.PulseQobjInstruction#qiskit.qobj.PulseQobjInstruction "qiskit.qobj.PulseQobjInstruction")) – The sequence for the Command
*   **kwargs** – Optional additional fields

<span id="undefined" />

`__init__(name, qubits=None, sequence=None, **kwargs)`

Initialize a Command object

**Parameters**

*   **name** (*str*) – The name of the command
*   **qubits** – The qubits for the command
*   **sequence** ([*PulseQobjInstruction*](qiskit.qobj.PulseQobjInstruction#qiskit.qobj.PulseQobjInstruction "qiskit.qobj.PulseQobjInstruction")) – The sequence for the Command
*   **kwargs** – Optional additional fields

## Methods

|                                                                                                                               |                                                           |
| ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| [`__init__`](#qiskit.providers.models.Command.__init__ "qiskit.providers.models.Command.__init__")(name\[, qubits, sequence]) | Initialize a Command object                               |
| [`from_dict`](#qiskit.providers.models.Command.from_dict "qiskit.providers.models.Command.from_dict")(data)                   | Create a new Command object from a dictionary.            |
| [`to_dict`](#qiskit.providers.models.Command.to_dict "qiskit.providers.models.Command.to_dict")()                             | Return a dictionary format representation of the Command. |

<span id="undefined" />

`classmethod from_dict(data)`

Create a new Command object from a dictionary.

**Parameters**

**data** (*dict*) – A dictionary representing the `Command` to create. It will be in the same format as output by [`to_dict()`](#qiskit.providers.models.Command.to_dict "qiskit.providers.models.Command.to_dict").

**Returns**

**The `Command` from the input**

dictionary.

**Return type**

qiskit.providers.model.Command

<span id="undefined" />

`to_dict()`

Return a dictionary format representation of the Command.

**Returns**

The dictionary form of the Command.

**Return type**

dict
