# qiskit.utils.QuantumInstance

<span id="undefined" />

`QuantumInstance(backend, shots=None, seed_simulator=None, max_credits=10, basis_gates=None, coupling_map=None, initial_layout=None, pass_manager=None, seed_transpiler=None, optimization_level=None, backend_options=None, noise_model=None, timeout=None, wait=5.0, skip_qobj_validation=True, measurement_error_mitigation_cls=None, cals_matrix_refresh_period=30, measurement_error_mitigation_shots=None, job_callback=None)`

Quantum Backend including execution setting.

Quantum Instance holds a Qiskit Terra backend as well as configuration for circuit transpilation and execution. When provided to an Aqua algorithm the algorithm will execute the circuits it needs to run using the instance.

**Parameters**

*   **backend** (*Union\['Backend', 'BaseBackend']*) – Instance of selected backend
*   **shots** (`Optional`\[`int`]) – Number of repetitions of each circuit, for sampling. If None, the shots are extracted from the backend. If the backend has none set, the default is 1024.
*   **seed\_simulator** (`Optional`\[`int`]) – Random seed for simulators
*   **max\_credits** (`int`) – Maximum credits to use
*   **basis\_gates** (`Optional`\[`List`\[`str`]]) – List of basis gate names supported by the target. Defaults to basis gates of the backend.
*   **coupling\_map** (*Optional\[Union\['CouplingMap', List\[List]]]*) – Coupling map (perhaps custom) to target in mapping
*   **initial\_layout** (*Optional\[Union\['Layout', Dict, List]]*) – Initial layout of qubits in mapping
*   **pass\_manager** (*Optional\['PassManager']*) – Pass manager to handle how to compile the circuits
*   **seed\_transpiler** (`Optional`\[`int`]) – The random seed for circuit mapper
*   **optimization\_level** (`Optional`\[`int`]) – How much optimization to perform on the circuits. Higher levels generate more optimized circuits, at the expense of longer transpilation time.
*   **backend\_options** (`Optional`\[`Dict`]) – All running options for backend, please refer to the provider of the backend for information as to what options it supports.
*   **noise\_model** (*Optional\['NoiseModel']*) – noise model for simulator
*   **timeout** (`Optional`\[`float`]) – Seconds to wait for job. If None, wait indefinitely.
*   **wait** (`float`) – Seconds between queries for job result
*   **skip\_qobj\_validation** (`bool`) – Bypass Qobj validation to decrease circuit processing time during submission to backend.
*   **measurement\_error\_mitigation\_cls** (`Optional`\[`Callable`]) – The approach to mitigate measurement errors. Qiskit Ignis provides fitter classes for this functionality and CompleteMeasFitter from qiskit.ignis.mitigation.measurement module can be used here. (TensoredMeasFitter is not supported).
*   **cals\_matrix\_refresh\_period** (`int`) – How often to refresh the calibration matrix in measurement mitigation. in minutes
*   **measurement\_error\_mitigation\_shots** (`Optional`\[`int`]) – The number of shots number for building calibration matrix. If None, the main shots parameter value is used.
*   **job\_callback** (`Optional`\[`Callable`]) – Optional user supplied callback which can be used to monitor job progress as jobs are submitted for processing by an Aqua algorithm. The callback is provided the following arguments: job\_id, job\_status, queue\_position, job

**Raises**

*   **QiskitError** – the shots exceeds the maximum number of shots
*   **QiskitError** – set noise model but the backend does not support that
*   **QiskitError** – set backend\_options but the backend does not support that

<span id="undefined" />

`__init__(backend, shots=None, seed_simulator=None, max_credits=10, basis_gates=None, coupling_map=None, initial_layout=None, pass_manager=None, seed_transpiler=None, optimization_level=None, backend_options=None, noise_model=None, timeout=None, wait=5.0, skip_qobj_validation=True, measurement_error_mitigation_cls=None, cals_matrix_refresh_period=30, measurement_error_mitigation_shots=None, job_callback=None)`

Quantum Instance holds a Qiskit Terra backend as well as configuration for circuit transpilation and execution. When provided to an Aqua algorithm the algorithm will execute the circuits it needs to run using the instance.

**Parameters**

*   **backend** (*Union\['Backend', 'BaseBackend']*) – Instance of selected backend
*   **shots** (`Optional`\[`int`]) – Number of repetitions of each circuit, for sampling. If None, the shots are extracted from the backend. If the backend has none set, the default is 1024.
*   **seed\_simulator** (`Optional`\[`int`]) – Random seed for simulators
*   **max\_credits** (`int`) – Maximum credits to use
*   **basis\_gates** (`Optional`\[`List`\[`str`]]) – List of basis gate names supported by the target. Defaults to basis gates of the backend.
*   **coupling\_map** (*Optional\[Union\['CouplingMap', List\[List]]]*) – Coupling map (perhaps custom) to target in mapping
*   **initial\_layout** (*Optional\[Union\['Layout', Dict, List]]*) – Initial layout of qubits in mapping
*   **pass\_manager** (*Optional\['PassManager']*) – Pass manager to handle how to compile the circuits
*   **seed\_transpiler** (`Optional`\[`int`]) – The random seed for circuit mapper
*   **optimization\_level** (`Optional`\[`int`]) – How much optimization to perform on the circuits. Higher levels generate more optimized circuits, at the expense of longer transpilation time.
*   **backend\_options** (`Optional`\[`Dict`]) – All running options for backend, please refer to the provider of the backend for information as to what options it supports.
*   **noise\_model** (*Optional\['NoiseModel']*) – noise model for simulator
*   **timeout** (`Optional`\[`float`]) – Seconds to wait for job. If None, wait indefinitely.
*   **wait** (`float`) – Seconds between queries for job result
*   **skip\_qobj\_validation** (`bool`) – Bypass Qobj validation to decrease circuit processing time during submission to backend.
*   **measurement\_error\_mitigation\_cls** (`Optional`\[`Callable`]) – The approach to mitigate measurement errors. Qiskit Ignis provides fitter classes for this functionality and CompleteMeasFitter from qiskit.ignis.mitigation.measurement module can be used here. (TensoredMeasFitter is not supported).
*   **cals\_matrix\_refresh\_period** (`int`) – How often to refresh the calibration matrix in measurement mitigation. in minutes
*   **measurement\_error\_mitigation\_shots** (`Optional`\[`int`]) – The number of shots number for building calibration matrix. If None, the main shots parameter value is used.
*   **job\_callback** (`Optional`\[`Callable`]) – Optional user supplied callback which can be used to monitor job progress as jobs are submitted for processing by an Aqua algorithm. The callback is provided the following arguments: job\_id, job\_status, queue\_position, job

**Raises**

*   **QiskitError** – the shots exceeds the maximum number of shots
*   **QiskitError** – set noise model but the backend does not support that
*   **QiskitError** – set backend\_options but the backend does not support that

## Methods

|                                                                                                                                                               |                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.utils.QuantumInstance.__init__ "qiskit.utils.QuantumInstance.__init__")(backend\[, shots, seed\_simulator, …])                           | Quantum Instance holds a Qiskit Terra backend as well as configuration for circuit transpilation and execution. |
| [`assemble`](#qiskit.utils.QuantumInstance.assemble "qiskit.utils.QuantumInstance.assemble")(circuits)                                                        | assemble circuits                                                                                               |
| [`cals_matrix`](#qiskit.utils.QuantumInstance.cals_matrix "qiskit.utils.QuantumInstance.cals_matrix")(\[qubit\_index])                                        | Get the stored calibration matrices and its timestamp.                                                          |
| [`execute`](#qiskit.utils.QuantumInstance.execute "qiskit.utils.QuantumInstance.execute")(circuits\[, had\_transpiled])                                       | A wrapper to interface with quantum backend.                                                                    |
| [`maybe_refresh_cals_matrix`](#qiskit.utils.QuantumInstance.maybe_refresh_cals_matrix "qiskit.utils.QuantumInstance.maybe_refresh_cals_matrix")(\[timestamp]) | Calculate the time difference from the query of last time.                                                      |
| [`reset_execution_results`](#qiskit.utils.QuantumInstance.reset_execution_results "qiskit.utils.QuantumInstance.reset_execution_results")()                   | Reset execution results                                                                                         |
| [`set_config`](#qiskit.utils.QuantumInstance.set_config "qiskit.utils.QuantumInstance.set_config")(\*\*kwargs)                                                | Set configurations for the quantum instance.                                                                    |
| [`transpile`](#qiskit.utils.QuantumInstance.transpile "qiskit.utils.QuantumInstance.transpile")(circuits)                                                     | A wrapper to transpile circuits to allow algorithm access the transpiled circuits.                              |

## Attributes

|                                                                                                                                                                            |                                                         |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| [`backend`](#qiskit.utils.QuantumInstance.backend "qiskit.utils.QuantumInstance.backend")                                                                                  | Return BaseBackend backend object.                      |
| [`backend_config`](#qiskit.utils.QuantumInstance.backend_config "qiskit.utils.QuantumInstance.backend_config")                                                             | Getter of backend\_config.                              |
| [`backend_name`](#qiskit.utils.QuantumInstance.backend_name "qiskit.utils.QuantumInstance.backend_name")                                                                   | Return backend name.                                    |
| [`backend_options`](#qiskit.utils.QuantumInstance.backend_options "qiskit.utils.QuantumInstance.backend_options")                                                          | Getter of backend\_options.                             |
| [`cals_matrix_refresh_period`](#qiskit.utils.QuantumInstance.cals_matrix_refresh_period "qiskit.utils.QuantumInstance.cals_matrix_refresh_period")                         | returns matrix refresh period                           |
| [`circuit_summary`](#qiskit.utils.QuantumInstance.circuit_summary "qiskit.utils.QuantumInstance.circuit_summary")                                                          | Getter of circuit summary.                              |
| [`compile_config`](#qiskit.utils.QuantumInstance.compile_config "qiskit.utils.QuantumInstance.compile_config")                                                             | Getter of compile\_config.                              |
| [`is_local`](#qiskit.utils.QuantumInstance.is_local "qiskit.utils.QuantumInstance.is_local")                                                                               | Return True if backend is a local backend.              |
| [`is_simulator`](#qiskit.utils.QuantumInstance.is_simulator "qiskit.utils.QuantumInstance.is_simulator")                                                                   | Return True if backend is a simulator.                  |
| [`is_statevector`](#qiskit.utils.QuantumInstance.is_statevector "qiskit.utils.QuantumInstance.is_statevector")                                                             | Return True if backend is a statevector-type simulator. |
| [`measurement_error_mitigation_cls`](#qiskit.utils.QuantumInstance.measurement_error_mitigation_cls "qiskit.utils.QuantumInstance.measurement_error_mitigation_cls")       | returns measurement error mitigation cls                |
| [`measurement_error_mitigation_shots`](#qiskit.utils.QuantumInstance.measurement_error_mitigation_shots "qiskit.utils.QuantumInstance.measurement_error_mitigation_shots") | returns measurement error mitigation shots              |
| [`noise_config`](#qiskit.utils.QuantumInstance.noise_config "qiskit.utils.QuantumInstance.noise_config")                                                                   | Getter of noise\_config.                                |
| [`qjob_config`](#qiskit.utils.QuantumInstance.qjob_config "qiskit.utils.QuantumInstance.qjob_config")                                                                      | Getter of qjob\_config.                                 |
| [`run_config`](#qiskit.utils.QuantumInstance.run_config "qiskit.utils.QuantumInstance.run_config")                                                                         | Getter of run\_config.                                  |
| [`skip_qobj_validation`](#qiskit.utils.QuantumInstance.skip_qobj_validation "qiskit.utils.QuantumInstance.skip_qobj_validation")                                           | checks if skip qobj validation                          |
| [`time_taken`](#qiskit.utils.QuantumInstance.time_taken "qiskit.utils.QuantumInstance.time_taken")                                                                         | Accumulated time taken for execution.                   |

<span id="undefined" />

`assemble(circuits)`

assemble circuits

**Return type**

[`Qobj`](qiskit.qobj.Qobj#qiskit.qobj.Qobj "qiskit.qobj.Qobj")

<span id="undefined" />

`property backend`

Return BaseBackend backend object.

<span id="undefined" />

`property backend_config`

Getter of backend\_config.

<span id="undefined" />

`property backend_name`

Return backend name.

<span id="undefined" />

`property backend_options`

Getter of backend\_options.

<span id="undefined" />

`cals_matrix(qubit_index=None)`

Get the stored calibration matrices and its timestamp.

**Parameters**

**qubit\_index** (`Optional`\[`List`\[`int`]]) – the qubit index of corresponding calibration matrix. If None, return all stored calibration matrices.

**Return type**

`Union`\[`Tuple`\[`ndarray`, `float`], `Dict`\[`str`, `Tuple`\[`ndarray`, `float`]], `None`]

**Returns**

The calibration matrix and the creation timestamp if qubit\_index is not None otherwise, return all matrices and their timestamp in a dictionary.

<span id="undefined" />

`property cals_matrix_refresh_period`

returns matrix refresh period

<span id="undefined" />

`property circuit_summary`

Getter of circuit summary.

<span id="undefined" />

`property compile_config`

Getter of compile\_config.

<span id="undefined" />

`execute(circuits, had_transpiled=False)`

A wrapper to interface with quantum backend.

**Parameters**

*   **circuits** (*Union\['QuantumCircuit', List\['QuantumCircuit']]*) – circuits to execute
*   **had\_transpiled** (`bool`) – whether or not circuits had been transpiled

**Returns**

result object

**Return type**

[Result](qiskit.result.Result#qiskit.result.Result "qiskit.result.Result")

**TODO: Maybe we can combine the circuits for the main ones and calibration circuits before**

assembling to the qobj.

<span id="undefined" />

`property is_local`

Return True if backend is a local backend.

<span id="undefined" />

`property is_simulator`

Return True if backend is a simulator.

<span id="undefined" />

`property is_statevector`

Return True if backend is a statevector-type simulator.

<span id="undefined" />

`maybe_refresh_cals_matrix(timestamp=None)`

Calculate the time difference from the query of last time.

**Parameters**

**timestamp** (`Optional`\[`float`]) – timestamp

**Return type**

`bool`

**Returns**

Whether or not refresh the cals\_matrix

<span id="undefined" />

`property measurement_error_mitigation_cls`

returns measurement error mitigation cls

<span id="undefined" />

`property measurement_error_mitigation_shots`

returns measurement error mitigation shots

<span id="undefined" />

`property noise_config`

Getter of noise\_config.

<span id="undefined" />

`property qjob_config`

Getter of qjob\_config.

<span id="undefined" />

`reset_execution_results()`

Reset execution results

**Return type**

`None`

<span id="undefined" />

`property run_config`

Getter of run\_config.

<span id="undefined" />

`set_config(**kwargs)`

Set configurations for the quantum instance.

<span id="undefined" />

`property skip_qobj_validation`

checks if skip qobj validation

<span id="undefined" />

`property time_taken`

Accumulated time taken for execution.

**Return type**

`float`

<span id="undefined" />

`transpile(circuits)`

A wrapper to transpile circuits to allow algorithm access the transpiled circuits. :param circuits: circuits to transpile :type circuits: Union\[‘QuantumCircuit’, List\[‘QuantumCircuit’]]

**Returns**

**The transpiled circuits, it is always a list even though**

the length is one.

**Return type**

List\[‘QuantumCircuit’]
