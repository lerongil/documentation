# qiskit.providers.ibmq.runtime.ProgramBackend

<span id="undefined" />

`ProgramBackend(configuration, provider=None, **fields)`

Base class for a program backend.

This is a [`Backend`](qiskit.providers.Backend#qiskit.providers.Backend "qiskit.providers.Backend") class for runtime programs to submit circuits.

Initialize a backend class

**Parameters**

*   **configuration** ([*BackendConfiguration*](qiskit.providers.models.BackendConfiguration#qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")) – A backend configuration object for the backend object.
*   **provider** ([*qiskit.providers.Provider*](qiskit.providers.Provider#qiskit.providers.Provider "qiskit.providers.Provider")) – Optionally, the provider object that this Backend comes from.
*   **fields** – kwargs for the values to use to override the default options.

**Raises**

**AttributeError** – if input field not a valid options

<span id="undefined" />

`__init__(configuration, provider=None, **fields)`

Initialize a backend class

**Parameters**

*   **configuration** ([*BackendConfiguration*](qiskit.providers.models.BackendConfiguration#qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")) – A backend configuration object for the backend object.
*   **provider** ([*qiskit.providers.Provider*](qiskit.providers.Provider#qiskit.providers.Provider "qiskit.providers.Provider")) – Optionally, the provider object that this Backend comes from.
*   **fields** – kwargs for the values to use to override the default options.

**Raises**

**AttributeError** – if input field not a valid options

## Methods

|                                                                                                                                                          |                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| [`__init__`](#qiskit.providers.ibmq.runtime.ProgramBackend.__init__ "qiskit.providers.ibmq.runtime.ProgramBackend.__init__")(configuration\[, provider]) | Initialize a backend class             |
| [`configuration`](#qiskit.providers.ibmq.runtime.ProgramBackend.configuration "qiskit.providers.ibmq.runtime.ProgramBackend.configuration")()            | Return the backend configuration.      |
| [`name`](#qiskit.providers.ibmq.runtime.ProgramBackend.name "qiskit.providers.ibmq.runtime.ProgramBackend.name")()                                       | Return the backend name.               |
| [`properties`](#qiskit.providers.ibmq.runtime.ProgramBackend.properties "qiskit.providers.ibmq.runtime.ProgramBackend.properties")()                     | Return the backend properties.         |
| [`provider`](#qiskit.providers.ibmq.runtime.ProgramBackend.provider "qiskit.providers.ibmq.runtime.ProgramBackend.provider")()                           | Return the backend Provider.           |
| [`run`](#qiskit.providers.ibmq.runtime.ProgramBackend.run "qiskit.providers.ibmq.runtime.ProgramBackend.run")(circuits\[, timeout])                      | Run on the backend.                    |
| [`set_options`](#qiskit.providers.ibmq.runtime.ProgramBackend.set_options "qiskit.providers.ibmq.runtime.ProgramBackend.set_options")(\*\*fields)        | Set the options fields for the backend |
| [`status`](#qiskit.providers.ibmq.runtime.ProgramBackend.status "qiskit.providers.ibmq.runtime.ProgramBackend.status")()                                 | Return the backend status.             |

## Attributes

|                                                                                                                           |                                    |
| ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| [`options`](#qiskit.providers.ibmq.runtime.ProgramBackend.options "qiskit.providers.ibmq.runtime.ProgramBackend.options") | Return the options for the backend |
| `version`                                                                                                                 |                                    |

<span id="undefined" />

`configuration()`

Return the backend configuration.

**Returns**

the configuration for the backend.

**Return type**

[BackendConfiguration](qiskit.providers.models.BackendConfiguration#qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")

<span id="undefined" />

`name()`

Return the backend name.

**Returns**

the name of the backend.

**Return type**

str

<span id="undefined" />

`property options`

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](#qiskit.providers.ibmq.runtime.ProgramBackend.run "qiskit.providers.ibmq.runtime.ProgramBackend.run") method.

<span id="undefined" />

`properties()`

Return the backend properties.

**Returns**

the configuration for the backend. If the backend does not support properties, it returns `None`.

**Return type**

[BackendProperties](qiskit.providers.models.BackendProperties#qiskit.providers.models.BackendProperties "qiskit.providers.models.BackendProperties")

<span id="undefined" />

`provider()`

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

[Provider](qiskit.providers.Provider#qiskit.providers.Provider "qiskit.providers.Provider")

<span id="undefined" />

`abstract run(circuits, timeout=None, **run_config)`

Run on the backend.

Runtime circuit execution is synchronous, and control will not go back until the execution finishes. You can use the timeout parameter to set a timeout value to wait for the execution to finish. Note that if the execution times out, circuit execution results will not be available.

**Parameters**

*   **circuits** (`Union`\[`QasmQobj`, `PulseQobj`, `QuantumCircuit`, `Schedule`, `List`\[`Union`\[`QuantumCircuit`, `Schedule`]]]) – An individual or a list of `QuantumCircuit` or [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") objects to run on the backend. A [`QasmQobj`](qiskit.qobj.QasmQobj#qiskit.qobj.QasmQobj "qiskit.qobj.QasmQobj") or a [`PulseQobj`](qiskit.qobj.PulseQobj#qiskit.qobj.PulseQobj "qiskit.qobj.PulseQobj") object is also supported but is deprecated.
*   **timeout** (`Optional`\[`int`]) – Seconds to wait for circuit execution to finish.
*   **\*\*run\_config** – Extra arguments used to configure the run.

**Return type**

`JobV1`

**Returns**

The job to be executed.

**Raises**

*   [**IBMQBackendApiError**](qiskit.providers.ibmq.IBMQBackendApiError#qiskit.providers.ibmq.IBMQBackendApiError "qiskit.providers.ibmq.IBMQBackendApiError") – If an unexpected error occurred while submitting the job.
*   [**IBMQBackendApiProtocolError**](qiskit.providers.ibmq.IBMQBackendApiProtocolError#qiskit.providers.ibmq.IBMQBackendApiProtocolError "qiskit.providers.ibmq.IBMQBackendApiProtocolError") – If an unexpected value received from the server.
*   [**IBMQBackendValueError**](qiskit.providers.ibmq.IBMQBackendValueError#qiskit.providers.ibmq.IBMQBackendValueError "qiskit.providers.ibmq.IBMQBackendValueError") – If an input parameter value is not valid.

<span id="undefined" />

`set_options(**fields)`

Set the options fields for the backend

This method is used to update the options of a backend. If you need to change any of the options prior to running just pass in the kwarg with the new value for the options.

**Parameters**

**fields** – The fields to update the options

**Raises**

**AttributeError** – If the field passed in is not part of the options

<span id="undefined" />

`status()`

Return the backend status.

**Returns**

the status of the backend.

**Return type**

[BackendStatus](qiskit.providers.models.BackendStatus#qiskit.providers.models.BackendStatus "qiskit.providers.models.BackendStatus")
