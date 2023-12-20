# qiskit.providers.basicaer.QasmSimulatorPy

<span id="undefined" />

`QasmSimulatorPy(configuration=None, provider=None, **fields)`

Python implementation of a qasm simulator.

Initialize a backend class

**Parameters**

*   **configuration** ([*BackendConfiguration*](qiskit.providers.models.BackendConfiguration#qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")) – A backend configuration object for the backend object.
*   **provider** ([*qiskit.providers.Provider*](qiskit.providers.Provider#qiskit.providers.Provider "qiskit.providers.Provider")) – Optionally, the provider object that this Backend comes from.
*   **fields** – kwargs for the values to use to override the default options.

**Raises**

**AttributeError** – if input field not a valid options

<span id="undefined" />

`__init__(configuration=None, provider=None, **fields)`

Initialize a backend class

**Parameters**

*   **configuration** ([*BackendConfiguration*](qiskit.providers.models.BackendConfiguration#qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")) – A backend configuration object for the backend object.
*   **provider** ([*qiskit.providers.Provider*](qiskit.providers.Provider#qiskit.providers.Provider "qiskit.providers.Provider")) – Optionally, the provider object that this Backend comes from.
*   **fields** – kwargs for the values to use to override the default options.

**Raises**

**AttributeError** – if input field not a valid options

## Methods

|                                                                                                                                                      |                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [`__init__`](#qiskit.providers.basicaer.QasmSimulatorPy.__init__ "qiskit.providers.basicaer.QasmSimulatorPy.__init__")(\[configuration, provider])   | Initialize a backend class                                         |
| [`configuration`](#qiskit.providers.basicaer.QasmSimulatorPy.configuration "qiskit.providers.basicaer.QasmSimulatorPy.configuration")()              | Return the backend configuration.                                  |
| [`name`](#qiskit.providers.basicaer.QasmSimulatorPy.name "qiskit.providers.basicaer.QasmSimulatorPy.name")()                                         | Return the backend name.                                           |
| [`properties`](#qiskit.providers.basicaer.QasmSimulatorPy.properties "qiskit.providers.basicaer.QasmSimulatorPy.properties")()                       | Return the backend properties.                                     |
| [`provider`](#qiskit.providers.basicaer.QasmSimulatorPy.provider "qiskit.providers.basicaer.QasmSimulatorPy.provider")()                             | Return the backend Provider.                                       |
| [`run`](#qiskit.providers.basicaer.QasmSimulatorPy.run "qiskit.providers.basicaer.QasmSimulatorPy.run")(qobj, \*\*backend\_options)                  | Run qobj asynchronously.                                           |
| [`run_experiment`](#qiskit.providers.basicaer.QasmSimulatorPy.run_experiment "qiskit.providers.basicaer.QasmSimulatorPy.run_experiment")(experiment) | Run an experiment (circuit) and return a single experiment result. |
| [`set_options`](#qiskit.providers.basicaer.QasmSimulatorPy.set_options "qiskit.providers.basicaer.QasmSimulatorPy.set_options")(\*\*fields)          | Set the options fields for the backend                             |
| [`status`](#qiskit.providers.basicaer.QasmSimulatorPy.status "qiskit.providers.basicaer.QasmSimulatorPy.status")()                                   | Return the backend status.                                         |

## Attributes

|                                                                                                                     |                                    |
| ------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| `DEFAULT_CONFIGURATION`                                                                                             |                                    |
| `DEFAULT_OPTIONS`                                                                                                   |                                    |
| `MAX_QUBITS_MEMORY`                                                                                                 |                                    |
| `SHOW_FINAL_STATE`                                                                                                  |                                    |
| [`options`](#qiskit.providers.basicaer.QasmSimulatorPy.options "qiskit.providers.basicaer.QasmSimulatorPy.options") | Return the options for the backend |
| `version`                                                                                                           |                                    |

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

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](#qiskit.providers.basicaer.QasmSimulatorPy.run "qiskit.providers.basicaer.QasmSimulatorPy.run") method.

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

`run(qobj, **backend_options)`

Run qobj asynchronously.

**Parameters**

*   **qobj** ([*Qobj*](qiskit.qobj.Qobj#qiskit.qobj.Qobj "qiskit.qobj.Qobj")) – payload of the experiment
*   **backend\_options** (*dict*) – backend options

**Returns**

derived from BaseJob

**Return type**

[BasicAerJob](qiskit.providers.basicaer.BasicAerJob#qiskit.providers.basicaer.BasicAerJob "qiskit.providers.basicaer.BasicAerJob")

**Additional Information:**

**backend\_options: Is a dict of options for the backend. It may contain**

*   “initial\_statevector”: vector\_like

The “initial\_statevector” option specifies a custom initial initial statevector for the simulator to be used instead of the all zero state. This size of this vector must be correct for the number of qubits in all experiments in the qobj.

Example:

```python
backend_options = {
    "initial_statevector": np.array([1, 0, 0, 1j]) / np.sqrt(2),
}
```

<span id="undefined" />

`run_experiment(experiment)`

Run an experiment (circuit) and return a single experiment result.

**Parameters**

**experiment** (*QobjExperiment*) – experiment from qobj experiments list

**Returns**

A result dictionary which looks something like:

```python
{
"name": name of this experiment (obtained from qobj.experiment header)
"seed": random seed used for simulation
"shots": number of shots used in the simulation
"data":
    {
    "counts": {'0x9: 5, ...},
    "memory": ['0x9', '0xF', '0x1D', ..., '0x9']
    },
"status": status string for the simulation
"success": boolean
"time_taken": simulation time of this single experiment
}
```

**Return type**

dict

**Raises**

[**BasicAerError**](qiskit.providers.basicaer.BasicAerError#qiskit.providers.basicaer.BasicAerError "qiskit.providers.basicaer.BasicAerError") – if an error occurred.

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
