<span id="qiskit-providers-basicaer-qasmsimulatorpy" />

# qiskit.providers.basicaer.QasmSimulatorPy

<span id="undefined" />

`QasmSimulatorPy(configuration=None, provider=None)`

Python implementation of a qasm simulator.

Base class for backends.

This method should initialize the module and its configuration, and raise an exception if a component of the module is not available.

**Parameters**

*   **configuration** ([*BackendConfiguration*](qiskit.providers.models.BackendConfiguration#qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")) – backend configuration
*   **provider** ([*BaseProvider*](qiskit.providers.BaseProvider#qiskit.providers.BaseProvider "qiskit.providers.BaseProvider")) – provider responsible for this backend

**Raises**

**QiskitError** – if an error occurred when instantiating the backend.

<span id="undefined" />

`__init__(configuration=None, provider=None)`

Base class for backends.

This method should initialize the module and its configuration, and raise an exception if a component of the module is not available.

**Parameters**

*   **configuration** ([*BackendConfiguration*](qiskit.providers.models.BackendConfiguration#qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")) – backend configuration
*   **provider** ([*BaseProvider*](qiskit.providers.BaseProvider#qiskit.providers.BaseProvider "qiskit.providers.BaseProvider")) – provider responsible for this backend

**Raises**

**QiskitError** – if an error occurred when instantiating the backend.

## Methods

|                                                                                                                                                      |                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [`__init__`](#qiskit.providers.basicaer.QasmSimulatorPy.__init__ "qiskit.providers.basicaer.QasmSimulatorPy.__init__")(\[configuration, provider])   | Base class for backends.                                           |
| [`configuration`](#qiskit.providers.basicaer.QasmSimulatorPy.configuration "qiskit.providers.basicaer.QasmSimulatorPy.configuration")()              | Return the backend configuration.                                  |
| [`name`](#qiskit.providers.basicaer.QasmSimulatorPy.name "qiskit.providers.basicaer.QasmSimulatorPy.name")()                                         | Return the backend name.                                           |
| [`properties`](#qiskit.providers.basicaer.QasmSimulatorPy.properties "qiskit.providers.basicaer.QasmSimulatorPy.properties")()                       | Return the backend properties.                                     |
| [`provider`](#qiskit.providers.basicaer.QasmSimulatorPy.provider "qiskit.providers.basicaer.QasmSimulatorPy.provider")()                             | Return the backend Provider.                                       |
| [`run`](#qiskit.providers.basicaer.QasmSimulatorPy.run "qiskit.providers.basicaer.QasmSimulatorPy.run")(qobj\[, backend\_options])                   | Run qobj asynchronously.                                           |
| [`run_experiment`](#qiskit.providers.basicaer.QasmSimulatorPy.run_experiment "qiskit.providers.basicaer.QasmSimulatorPy.run_experiment")(experiment) | Run an experiment (circuit) and return a single experiment result. |
| [`status`](#qiskit.providers.basicaer.QasmSimulatorPy.status "qiskit.providers.basicaer.QasmSimulatorPy.status")()                                   | Return the backend status.                                         |
| [`version`](#qiskit.providers.basicaer.QasmSimulatorPy.version "qiskit.providers.basicaer.QasmSimulatorPy.version")()                                | Return the backend version.                                        |

## Attributes

|                         |   |
| ----------------------- | - |
| `DEFAULT_CONFIGURATION` |   |
| `DEFAULT_OPTIONS`       |   |
| `MAX_QUBITS_MEMORY`     |   |
| `SHOW_FINAL_STATE`      |   |

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

[BaseProvider](qiskit.providers.BaseProvider#qiskit.providers.BaseProvider "qiskit.providers.BaseProvider")

<span id="undefined" />

`run(qobj, backend_options=None)`

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

`status()`

Return the backend status.

**Returns**

the status of the backend.

**Return type**

[BackendStatus](qiskit.providers.models.BackendStatus#qiskit.providers.models.BackendStatus "qiskit.providers.models.BackendStatus")

<span id="undefined" />

`version()`

Return the backend version.

**Returns**

the X.X.X version of the backend.

**Return type**

str
