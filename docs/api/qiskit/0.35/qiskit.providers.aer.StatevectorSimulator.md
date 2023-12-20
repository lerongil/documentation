# StatevectorSimulator

<span id="undefined" />

`StatevectorSimulator(configuration=None, properties=None, provider=None, **backend_options)`

Bases: `qiskit.providers.aer.backends.aerbackend.AerBackend`

Ideal quantum circuit statevector simulator

**Configurable Options**

The StatevectorSimulator supports CPU and GPU simulation methods and additional configurable options. These may be set using the appropriate kwargs during initialization. They can also be set of updated using the [`set_options()`](qiskit.providers.aer.StatevectorSimulator.set_options#qiskit.providers.aer.StatevectorSimulator.set_options "qiskit.providers.aer.StatevectorSimulator.set_options") method.

Run-time options may also be specified as kwargs using the [`run()`](qiskit.providers.aer.StatevectorSimulator.run#qiskit.providers.aer.StatevectorSimulator.run "qiskit.providers.aer.StatevectorSimulator.run") method. These will not be stored in the backend and will only apply to that execution. They will also override any previously set options.

For example, to configure a a single-precision simulator

```python
backend = StatevectorSimulator(precision='single')
```

**Backend Options**

The following configurable backend options are supported

*   `device` (str): Set the simulation device (Default: `"CPU"`). Use [`available_devices()`](qiskit.providers.aer.StatevectorSimulator.available_devices#qiskit.providers.aer.StatevectorSimulator.available_devices "qiskit.providers.aer.StatevectorSimulator.available_devices") to return a list of devices supported on the current system.
*   `method` (str): \[DEPRECATED] Set the simulation method supported methods are `"statevector"` for CPU simulation, and `"statevector_gpu"` for GPU simulation. This option has been deprecated, use the `device` option to set “CPU” or “GPU” simulation instead.
*   `precision` (str): Set the floating point precision for certain simulation methods to either `"single"` or `"double"` precision (default: `"double"`).
*   `executor` (futures.Executor): Set a custom executor for asynchronous running of simulation jobs (Default: None).
*   `max_job_size` (int or None): If the number of run circuits exceeds this value simulation will be run as a set of of sub-jobs on the executor. If `None` simulation of all circuits aer submitted to the executor as a single job (Default: None).
*   `max_shot_size` (int or None): If the number of shots of a noisy circuit exceeds this value simulation will be split into multi circuits for execution and the results accumulated. If `None` circuits will not be split based on shots. When splitting circuits use the `max_job_size` option to control how these split circuits should be submitted to the executor (Default: None).
*   `zero_threshold` (double): Sets the threshold for truncating small values to zero in the result data (Default: 1e-10).
*   `validation_threshold` (double): Sets the threshold for checking if the initial statevector is valid (Default: 1e-8).
*   `max_parallel_threads` (int): Sets the maximum number of CPU cores used by OpenMP for parallelization. If set to 0 the maximum will be set to the number of CPU cores (Default: 0).
*   `max_parallel_experiments` (int): Sets the maximum number of qobj experiments that may be executed in parallel up to the max\_parallel\_threads value. If set to 1 parallel circuit execution will be disabled. If set to 0 the maximum will be automatically set to max\_parallel\_threads (Default: 1).
*   `max_memory_mb` (int): Sets the maximum size of memory to store a state vector. If a state vector needs more, an error is thrown. In general, a state vector of n-qubits uses 2^n complex values (16 Bytes). If set to 0, the maximum will be automatically set to the system memory size (Default: 0).
*   `statevector_parallel_threshold` (int): Sets the threshold that “n\_qubits” must be greater than to enable OpenMP parallelization for matrix multiplication during execution of an experiment. If parallel circuit or shot execution is enabled this will only use unallocated CPU cores up to max\_parallel\_threads. Note that setting this too low can reduce performance (Default: 14).

These backend options apply in circuit optimization passes:

*   `fusion_enable` (bool): Enable fusion optimization in circuit optimization passes \[Default: True]
*   `fusion_verbose` (bool): Output gates generated in fusion optimization into metadata \[Default: False]
*   `fusion_max_qubit` (int): Maximum number of qubits for a operation generated in a fusion optimization \[Default: 5]
*   `fusion_threshold` (int): Threshold that number of qubits must be greater than or equal to enable fusion optimization \[Default: 14]

Aer class for backends.

This method should initialize the module and its configuration, and raise an exception if a component of the module is not available.

**Parameters**

*   **configuration** ([*BackendConfiguration*](qiskit.providers.models.BackendConfiguration#qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")) – backend configuration.
*   **properties** ([*BackendProperties*](qiskit.providers.models.BackendProperties#qiskit.providers.models.BackendProperties "qiskit.providers.models.BackendProperties") *or None*) – Optional, backend properties.
*   **defaults** ([*PulseDefaults*](qiskit.providers.models.PulseDefaults#qiskit.providers.models.PulseDefaults "qiskit.providers.models.PulseDefaults") *or None*) – Optional, backend pulse defaults.
*   **provider** ([*Provider*](qiskit.providers.Provider#qiskit.providers.Provider "qiskit.providers.Provider")) – Optional, provider responsible for this backend.
*   **backend\_options** (*dict or None*) – Optional set custom backend options.

**Raises**

[**AerError**](qiskit.providers.aer.AerError#qiskit.providers.aer.AerError "qiskit.providers.aer.AerError") – if there is no name in the configuration

## Methods

|                                                                                                                                                                                                              |                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| [`available_devices`](qiskit.providers.aer.StatevectorSimulator.available_devices#qiskit.providers.aer.StatevectorSimulator.available_devices "qiskit.providers.aer.StatevectorSimulator.available_devices") | Return the available simulation methods.        |
| [`available_methods`](qiskit.providers.aer.StatevectorSimulator.available_methods#qiskit.providers.aer.StatevectorSimulator.available_methods "qiskit.providers.aer.StatevectorSimulator.available_methods") | Return the available simulation methods.        |
| [`clear_options`](qiskit.providers.aer.StatevectorSimulator.clear_options#qiskit.providers.aer.StatevectorSimulator.clear_options "qiskit.providers.aer.StatevectorSimulator.clear_options")                 | Reset the simulator options to default values.  |
| [`configuration`](qiskit.providers.aer.StatevectorSimulator.configuration#qiskit.providers.aer.StatevectorSimulator.configuration "qiskit.providers.aer.StatevectorSimulator.configuration")                 | Return the simulator backend configuration.     |
| [`defaults`](qiskit.providers.aer.StatevectorSimulator.defaults#qiskit.providers.aer.StatevectorSimulator.defaults "qiskit.providers.aer.StatevectorSimulator.defaults")                                     | Return the simulator backend pulse defaults.    |
| [`name`](qiskit.providers.aer.StatevectorSimulator.name#qiskit.providers.aer.StatevectorSimulator.name "qiskit.providers.aer.StatevectorSimulator.name")                                                     | Return the backend name.                        |
| [`properties`](qiskit.providers.aer.StatevectorSimulator.properties#qiskit.providers.aer.StatevectorSimulator.properties "qiskit.providers.aer.StatevectorSimulator.properties")                             | Return the simulator backend properties if set. |
| [`provider`](qiskit.providers.aer.StatevectorSimulator.provider#qiskit.providers.aer.StatevectorSimulator.provider "qiskit.providers.aer.StatevectorSimulator.provider")                                     | Return the backend Provider.                    |
| [`run`](qiskit.providers.aer.StatevectorSimulator.run#qiskit.providers.aer.StatevectorSimulator.run "qiskit.providers.aer.StatevectorSimulator.run")                                                         | Run a qobj on the backend.                      |
| [`set_option`](qiskit.providers.aer.StatevectorSimulator.set_option#qiskit.providers.aer.StatevectorSimulator.set_option "qiskit.providers.aer.StatevectorSimulator.set_option")                             | Special handling for setting backend options.   |
| [`set_options`](qiskit.providers.aer.StatevectorSimulator.set_options#qiskit.providers.aer.StatevectorSimulator.set_options "qiskit.providers.aer.StatevectorSimulator.set_options")                         | Set the simulator options                       |
| [`status`](qiskit.providers.aer.StatevectorSimulator.status#qiskit.providers.aer.StatevectorSimulator.status "qiskit.providers.aer.StatevectorSimulator.status")                                             | Return backend status.                          |

## Attributes

<span id="undefined" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](qiskit.providers.aer.StatevectorSimulator.run#qiskit.providers.aer.StatevectorSimulator.run "qiskit.providers.aer.StatevectorSimulator.run") method.

<span id="undefined" />

### version

`= 1`
