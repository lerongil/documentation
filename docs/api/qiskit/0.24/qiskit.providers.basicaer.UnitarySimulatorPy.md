<span id="qiskit-providers-basicaer-unitarysimulatorpy" />

# qiskit.providers.basicaer.UnitarySimulatorPy

<span id="undefined" />

`UnitarySimulatorPy(configuration=None, provider=None)`

Python implementation of a unitary simulator.

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

|                                                                                                                                                            |                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [`__init__`](#qiskit.providers.basicaer.UnitarySimulatorPy.__init__ "qiskit.providers.basicaer.UnitarySimulatorPy.__init__")(\[configuration, provider])   | Base class for backends.                                           |
| [`configuration`](#qiskit.providers.basicaer.UnitarySimulatorPy.configuration "qiskit.providers.basicaer.UnitarySimulatorPy.configuration")()              | Return the backend configuration.                                  |
| [`name`](#qiskit.providers.basicaer.UnitarySimulatorPy.name "qiskit.providers.basicaer.UnitarySimulatorPy.name")()                                         | Return the backend name.                                           |
| [`properties`](#qiskit.providers.basicaer.UnitarySimulatorPy.properties "qiskit.providers.basicaer.UnitarySimulatorPy.properties")()                       | Return the backend properties.                                     |
| [`provider`](#qiskit.providers.basicaer.UnitarySimulatorPy.provider "qiskit.providers.basicaer.UnitarySimulatorPy.provider")()                             | Return the backend Provider.                                       |
| [`run`](#qiskit.providers.basicaer.UnitarySimulatorPy.run "qiskit.providers.basicaer.UnitarySimulatorPy.run")(qobj\[, backend\_options])                   | Run qobj asynchronously.                                           |
| [`run_experiment`](#qiskit.providers.basicaer.UnitarySimulatorPy.run_experiment "qiskit.providers.basicaer.UnitarySimulatorPy.run_experiment")(experiment) | Run an experiment (circuit) and return a single experiment result. |
| [`status`](#qiskit.providers.basicaer.UnitarySimulatorPy.status "qiskit.providers.basicaer.UnitarySimulatorPy.status")()                                   | Return the backend status.                                         |
| [`version`](#qiskit.providers.basicaer.UnitarySimulatorPy.version "qiskit.providers.basicaer.UnitarySimulatorPy.version")()                                | Return the backend version.                                        |

## Attributes

|                         |   |
| ----------------------- | - |
| `DEFAULT_CONFIGURATION` |   |
| `DEFAULT_OPTIONS`       |   |
| `MAX_QUBITS_MEMORY`     |   |

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

Additional Information:

```python
backend_options: Is a dict of options for the backend. It may contain
    * "initial_unitary": matrix_like
    * "chop_threshold": double

The "initial_unitary" option specifies a custom initial unitary
matrix for the simulator to be used instead of the identity
matrix. This size of this matrix must be correct for the number
of qubits inall experiments in the qobj.

The "chop_threshold" option specifies a truncation value for
setting small values to zero in the output unitary. The default
value is 1e-15.

Example::

    backend_options = {
        "initial_unitary": np.array([[1, 0, 0, 0],
                                     [0, 0, 0, 1],
                                     [0, 0, 1, 0],
                                     [0, 1, 0, 0]])
        "chop_threshold": 1e-15
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
    "unitary": [[[0.0, 0.0], [1.0, 0.0]],
                [[1.0, 0.0], [0.0, 0.0]]]
    },
"status": status string for the simulation
"success": boolean
"time taken": simulation time of this single experiment
}
```

**Return type**

dict

**Raises**

*   [**BasicAerError**](qiskit.providers.basicaer.BasicAerError#qiskit.providers.basicaer.BasicAerError "qiskit.providers.basicaer.BasicAerError") – if the number of qubits in the circuit is greater than 24.
*   **Note that the practical qubit limit is much lower than 24.** –

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
