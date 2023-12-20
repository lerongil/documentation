# qiskit.providers.models.BackendStatus

<span id="undefined" />

`BackendStatus(backend_name, backend_version, operational, pending_jobs, status_msg)`

Class representing Backend Status.

Initialize a BackendStatus object

**Parameters**

*   **backend\_name** (`str`) – The backend’s name
*   **backend\_version** (`str`) – The backend’s version of the form X.Y.Z
*   **operational** (`bool`) – True if the backend is operational
*   **pending\_jobs** (`int`) – The number of pending jobs on the backend
*   **status\_msg** (`str`) – The status msg for the backend

**Raises**

**QiskitError** – If the backend version is in an invalid format

<span id="undefined" />

`__init__(backend_name, backend_version, operational, pending_jobs, status_msg)`

Initialize a BackendStatus object

**Parameters**

*   **backend\_name** (`str`) – The backend’s name
*   **backend\_version** (`str`) – The backend’s version of the form X.Y.Z
*   **operational** (`bool`) – True if the backend is operational
*   **pending\_jobs** (`int`) – The number of pending jobs on the backend
*   **status\_msg** (`str`) – The status msg for the backend

**Raises**

**QiskitError** – If the backend version is in an invalid format

## Methods

|                                                                                                                                                    |                                                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| [`__init__`](#qiskit.providers.models.BackendStatus.__init__ "qiskit.providers.models.BackendStatus.__init__")(backend\_name, backend\_version, …) | Initialize a BackendStatus object                               |
| [`from_dict`](#qiskit.providers.models.BackendStatus.from_dict "qiskit.providers.models.BackendStatus.from_dict")(data)                            | Create a new BackendStatus object from a dictionary.            |
| [`to_dict`](#qiskit.providers.models.BackendStatus.to_dict "qiskit.providers.models.BackendStatus.to_dict")()                                      | Return a dictionary format representation of the BackendStatus. |

<span id="undefined" />

`classmethod from_dict(data)`

Create a new BackendStatus object from a dictionary.

**Parameters**

**data** (*dict*) – A dictionary representing the BaseBakend to create. It will be in the same format as output by [`to_dict()`](#qiskit.providers.models.BackendStatus.to_dict "qiskit.providers.models.BackendStatus.to_dict").

**Returns**

The BackendStatus from the input dictionary.

**Return type**

[BackendStatus](#qiskit.providers.models.BackendStatus "qiskit.providers.models.BackendStatus")

<span id="undefined" />

`to_dict()`

Return a dictionary format representation of the BackendStatus.

**Returns**

The dictionary form of the QobjHeader.

**Return type**

dict
