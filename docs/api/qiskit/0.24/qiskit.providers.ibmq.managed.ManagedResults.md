<span id="qiskit-providers-ibmq-managed-managedresults" />

# qiskit.providers.ibmq.managed.ManagedResults

<span id="undefined" />

`ManagedResults(job_set, backend_name, success)`

Results managed by the Job Manager.

This class is a wrapper around the [`Result`](qiskit.result.Result#qiskit.result.Result "qiskit.result.Result") class and provides the same methods. Please refer to the [`Result`](qiskit.result.Result#qiskit.result.Result "qiskit.result.Result") class for more information on the methods.

ManagedResults constructor.

**Parameters**

*   **job\_set** (`ManagedJobSet`) – Managed job set for these results.
*   **backend\_name** (`str`) – Name of the backend used to run the experiments.
*   **success** (`bool`) – `True` if all experiments were successful and results available. `False` otherwise.

<span id="undefined" />

### backend\_name

Name of the backend used to run the experiments.

<span id="undefined" />

### success

Whether all experiments were successful.

<span id="undefined" />

`__init__(job_set, backend_name, success)`

ManagedResults constructor.

**Parameters**

*   **job\_set** (`ManagedJobSet`) – Managed job set for these results.
*   **backend\_name** (`str`) – Name of the backend used to run the experiments.
*   **success** (`bool`) – `True` if all experiments were successful and results available. `False` otherwise.

<span id="undefined" />

### backend\_name

Name of the backend used to run the experiments.

<span id="undefined" />

### success

Whether all experiments were successful.

## Methods

|                                                                                                                                                                            |                                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| [`__init__`](#qiskit.providers.ibmq.managed.ManagedResults.__init__ "qiskit.providers.ibmq.managed.ManagedResults.__init__")(job\_set, backend\_name, success)             | ManagedResults constructor.                                 |
| [`combine_results`](#qiskit.providers.ibmq.managed.ManagedResults.combine_results "qiskit.providers.ibmq.managed.ManagedResults.combine_results")()                        | Combine results from all jobs into a single Result.         |
| [`data`](#qiskit.providers.ibmq.managed.ManagedResults.data "qiskit.providers.ibmq.managed.ManagedResults.data")(experiment)                                               | Get the raw data for an experiment.                         |
| [`get_counts`](#qiskit.providers.ibmq.managed.ManagedResults.get_counts "qiskit.providers.ibmq.managed.ManagedResults.get_counts")(experiment)                             | Get the histogram data of an experiment.                    |
| [`get_memory`](#qiskit.providers.ibmq.managed.ManagedResults.get_memory "qiskit.providers.ibmq.managed.ManagedResults.get_memory")(experiment)                             | Get the sequence of memory states (readouts) for each shot. |
| [`get_statevector`](#qiskit.providers.ibmq.managed.ManagedResults.get_statevector "qiskit.providers.ibmq.managed.ManagedResults.get_statevector")(experiment\[, decimals]) | Get the final statevector of an experiment.                 |
| [`get_unitary`](#qiskit.providers.ibmq.managed.ManagedResults.get_unitary "qiskit.providers.ibmq.managed.ManagedResults.get_unitary")(experiment\[, decimals])             | Get the final unitary of an experiment.                     |

<span id="undefined" />

`combine_results()`

Combine results from all jobs into a single Result.

<Admonition title="Note" type="note">
  Since the order of the results must match the order of the initial experiments, job results can only be combined if all jobs succeeded.
</Admonition>

**Return type**

`Result`

**Returns**

**A [`Result`](qiskit.result.Result#qiskit.result.Result "qiskit.result.Result") object that contains results from**

all jobs.

**Raises**

[**IBMQManagedResultDataNotAvailable**](qiskit.providers.ibmq.managed.IBMQManagedResultDataNotAvailable#qiskit.providers.ibmq.managed.IBMQManagedResultDataNotAvailable "qiskit.providers.ibmq.managed.IBMQManagedResultDataNotAvailable") – If results cannot be combined because some jobs failed.

<span id="undefined" />

`data(experiment)`

Get the raw data for an experiment.

**Parameters**

**experiment** (`Union`\[`str`, `QuantumCircuit`, `Schedule`, `int`]) –

Retrieve result for this experiment. Several types are accepted for convenience:

> *   str: The name of the experiment.
> *   QuantumCircuit: The name of the circuit instance will be used.
> *   Schedule: The name of the schedule instance will be used.
> *   int: The position of the experiment.

**Return type**

`Dict`

**Returns**

Refer to the [`Result.data()`](qiskit.result.Result#qiskit.result.Result.data "qiskit.result.Result.data") for information on return data.

**Raises**

*   [**IBMQManagedResultDataNotAvailable**](qiskit.providers.ibmq.managed.IBMQManagedResultDataNotAvailable#qiskit.providers.ibmq.managed.IBMQManagedResultDataNotAvailable "qiskit.providers.ibmq.managed.IBMQManagedResultDataNotAvailable") – If data for the experiment could not be retrieved.
*   [**IBMQJobManagerJobNotFound**](qiskit.providers.ibmq.managed.IBMQJobManagerJobNotFound#qiskit.providers.ibmq.managed.IBMQJobManagerJobNotFound "qiskit.providers.ibmq.managed.IBMQJobManagerJobNotFound") – If the job for the experiment could not be found.

<span id="undefined" />

`get_counts(experiment)`

Get the histogram data of an experiment.

**Parameters**

**experiment** (`Union`\[`str`, `QuantumCircuit`, `Schedule`, `int`]) – Retrieve result for this experiment, as specified by [`data()`](#qiskit.providers.ibmq.managed.ManagedResults.data "qiskit.providers.ibmq.managed.ManagedResults.data").

**Return type**

`Dict`\[`str`, `int`]

**Returns**

Refer to the [`Result.get_counts()`](qiskit.result.Result#qiskit.result.Result.get_counts "qiskit.result.Result.get_counts") for information on return data.

**Raises**

*   [**IBMQManagedResultDataNotAvailable**](qiskit.providers.ibmq.managed.IBMQManagedResultDataNotAvailable#qiskit.providers.ibmq.managed.IBMQManagedResultDataNotAvailable "qiskit.providers.ibmq.managed.IBMQManagedResultDataNotAvailable") – If data for the experiment could not be retrieved.
*   [**IBMQJobManagerJobNotFound**](qiskit.providers.ibmq.managed.IBMQJobManagerJobNotFound#qiskit.providers.ibmq.managed.IBMQJobManagerJobNotFound "qiskit.providers.ibmq.managed.IBMQJobManagerJobNotFound") – If the job for the experiment could not be found.

<span id="undefined" />

`get_memory(experiment)`

Get the sequence of memory states (readouts) for each shot. The data from the experiment is a list of format \[‘00000’, ‘01000’, ‘10100’, ‘10100’, ‘11101’, ‘11100’, ‘00101’, …, ‘01010’]

**Parameters**

**experiment** (`Union`\[`str`, `QuantumCircuit`, `Schedule`, `int`]) – Retrieve result for this experiment, as specified by [`data()`](#qiskit.providers.ibmq.managed.ManagedResults.data "qiskit.providers.ibmq.managed.ManagedResults.data").

**Return type**

`Union`\[`list`, `ndarray`]

**Returns**

Refer to the [`Result.get_memory()`](qiskit.result.Result#qiskit.result.Result.get_memory "qiskit.result.Result.get_memory") for information on return data.

**Raises**

*   [**IBMQManagedResultDataNotAvailable**](qiskit.providers.ibmq.managed.IBMQManagedResultDataNotAvailable#qiskit.providers.ibmq.managed.IBMQManagedResultDataNotAvailable "qiskit.providers.ibmq.managed.IBMQManagedResultDataNotAvailable") – If data for the experiment could not be retrieved.
*   [**IBMQJobManagerJobNotFound**](qiskit.providers.ibmq.managed.IBMQJobManagerJobNotFound#qiskit.providers.ibmq.managed.IBMQJobManagerJobNotFound "qiskit.providers.ibmq.managed.IBMQJobManagerJobNotFound") – If the job for the experiment could not be found.

<span id="undefined" />

`get_statevector(experiment, decimals=None)`

Get the final statevector of an experiment.

**Parameters**

*   **experiment** (`Union`\[`str`, `QuantumCircuit`, `Schedule`, `int`]) – Retrieve result for this experiment, as specified by [`data()`](#qiskit.providers.ibmq.managed.ManagedResults.data "qiskit.providers.ibmq.managed.ManagedResults.data").
*   **decimals** (`Optional`\[`int`]) – The number of decimals in the statevector. If `None`, skip rounding.

**Return type**

`List`\[`complex`]

**Returns**

Refer to the [`Result.get_statevector()`](qiskit.result.Result#qiskit.result.Result.get_statevector "qiskit.result.Result.get_statevector") for information on return data.

**Raises**

*   [**IBMQManagedResultDataNotAvailable**](qiskit.providers.ibmq.managed.IBMQManagedResultDataNotAvailable#qiskit.providers.ibmq.managed.IBMQManagedResultDataNotAvailable "qiskit.providers.ibmq.managed.IBMQManagedResultDataNotAvailable") – If data for the experiment could not be retrieved.
*   [**IBMQJobManagerJobNotFound**](qiskit.providers.ibmq.managed.IBMQJobManagerJobNotFound#qiskit.providers.ibmq.managed.IBMQJobManagerJobNotFound "qiskit.providers.ibmq.managed.IBMQJobManagerJobNotFound") – If the job for the experiment could not be found.

<span id="undefined" />

`get_unitary(experiment, decimals=None)`

Get the final unitary of an experiment.

**Parameters**

*   **experiment** (`Union`\[`str`, `QuantumCircuit`, `Schedule`, `int`]) – Retrieve result for this experiment, as specified by [`data()`](#qiskit.providers.ibmq.managed.ManagedResults.data "qiskit.providers.ibmq.managed.ManagedResults.data").
*   **decimals** (`Optional`\[`int`]) – The number of decimals in the unitary. If `None`, skip rounding.

**Return type**

`List`\[`List`\[`complex`]]

**Returns**

Refer to the [`Result.get_unitary()`](qiskit.result.Result#qiskit.result.Result.get_unitary "qiskit.result.Result.get_unitary") for information on return data.

**Raises**

*   [**IBMQManagedResultDataNotAvailable**](qiskit.providers.ibmq.managed.IBMQManagedResultDataNotAvailable#qiskit.providers.ibmq.managed.IBMQManagedResultDataNotAvailable "qiskit.providers.ibmq.managed.IBMQManagedResultDataNotAvailable") – If data for the experiment could not be retrieved.
*   [**IBMQJobManagerJobNotFound**](qiskit.providers.ibmq.managed.IBMQJobManagerJobNotFound#qiskit.providers.ibmq.managed.IBMQJobManagerJobNotFound "qiskit.providers.ibmq.managed.IBMQJobManagerJobNotFound") – If the job for the experiment could not be found.
