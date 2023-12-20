# qiskit.providers.ibmq.runtime.RuntimeJob

<span id="undefined" />

`RuntimeJob(backend, api_client, credentials, job_id, program_id, params=None, creation_date=None, user_callback=None, result_decoder=<class 'qiskit.providers.ibmq.runtime.program.result_decoder.ResultDecoder'>)`

Representation of a runtime program execution.

A new `RuntimeJob` instance is returned when you call [`IBMRuntimeService.run`](qiskit.providers.ibmq.runtime.IBMRuntimeService#qiskit.providers.ibmq.runtime.IBMRuntimeService.run "qiskit.providers.ibmq.runtime.IBMRuntimeService.run") to execute a runtime program, or [`IBMRuntimeService.job`](qiskit.providers.ibmq.runtime.IBMRuntimeService#qiskit.providers.ibmq.runtime.IBMRuntimeService.job "qiskit.providers.ibmq.runtime.IBMRuntimeService.job") to retrieve a previously executed job.

If the program execution is successful, you can inspect the job’s status by calling [`status()`](#qiskit.providers.ibmq.runtime.RuntimeJob.status "qiskit.providers.ibmq.runtime.RuntimeJob.status"). Job status can be one of the [`JobStatus`](qiskit.providers.JobStatus#qiskit.providers.JobStatus "qiskit.providers.JobStatus") members.

Some of the methods in this class are blocking, which means control may not be returned immediately. [`result()`](#qiskit.providers.ibmq.runtime.RuntimeJob.result "qiskit.providers.ibmq.runtime.RuntimeJob.result") is an example of a blocking method:

```python
job = provider.runtime.run(...)

try:
    job_result = job.result()  # It will block until the job finishes.
    print("The job finished with result {}".format(job_result))
except RuntimeJobFailureError as ex:
    print("Job failed!: {}".format(ex))
```

If the program has any interim results, you can use the `callback` parameter of the [`run()`](qiskit.providers.ibmq.runtime.IBMRuntimeService#qiskit.providers.ibmq.runtime.IBMRuntimeService.run "qiskit.providers.ibmq.runtime.IBMRuntimeService.run") method to stream the interim results. Alternatively, you can use the [`stream_results()`](#qiskit.providers.ibmq.runtime.RuntimeJob.stream_results "qiskit.providers.ibmq.runtime.RuntimeJob.stream_results") method to stream the results at a later time, but before the job finishes.

RuntimeJob constructor.

**Parameters**

*   **backend** (`Backend`) – The backend instance used to run this job.
*   **api\_client** (`RuntimeClient`) – Object for connecting to the server.
*   **credentials** (`Credentials`) – Account credentials.
*   **job\_id** (`str`) – Job ID.
*   **program\_id** (`str`) – ID of the program this job is for.
*   **params** (`Optional`\[`Dict`]) – Job parameters.
*   **creation\_date** (`Optional`\[`str`]) – Job creation date, in UTC.
*   **user\_callback** (`Optional`\[`Callable`]) – User callback function.
*   **result\_decoder** (`Type`\[`ResultDecoder`]) – A [`ResultDecoder`](qiskit.providers.ibmq.runtime.ResultDecoder#qiskit.providers.ibmq.runtime.ResultDecoder "qiskit.providers.ibmq.runtime.ResultDecoder") subclass used to decode job results.

<span id="undefined" />

`__init__(backend, api_client, credentials, job_id, program_id, params=None, creation_date=None, user_callback=None, result_decoder=<class 'qiskit.providers.ibmq.runtime.program.result_decoder.ResultDecoder'>)`

RuntimeJob constructor.

**Parameters**

*   **backend** (`Backend`) – The backend instance used to run this job.
*   **api\_client** (`RuntimeClient`) – Object for connecting to the server.
*   **credentials** (`Credentials`) – Account credentials.
*   **job\_id** (`str`) – Job ID.
*   **program\_id** (`str`) – ID of the program this job is for.
*   **params** (`Optional`\[`Dict`]) – Job parameters.
*   **creation\_date** (`Optional`\[`str`]) – Job creation date, in UTC.
*   **user\_callback** (`Optional`\[`Callable`]) – User callback function.
*   **result\_decoder** (`Type`\[`ResultDecoder`]) – A [`ResultDecoder`](qiskit.providers.ibmq.runtime.ResultDecoder#qiskit.providers.ibmq.runtime.ResultDecoder "qiskit.providers.ibmq.runtime.ResultDecoder") subclass used to decode job results.

## Methods

|                                                                                                                                                                            |                                                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.providers.ibmq.runtime.RuntimeJob.__init__ "qiskit.providers.ibmq.runtime.RuntimeJob.__init__")(backend, api\_client, credentials, …)                 | RuntimeJob constructor.                                                             |
| [`backend`](#qiskit.providers.ibmq.runtime.RuntimeJob.backend "qiskit.providers.ibmq.runtime.RuntimeJob.backend")()                                                        | Return the backend where this job was executed.                                     |
| [`cancel`](#qiskit.providers.ibmq.runtime.RuntimeJob.cancel "qiskit.providers.ibmq.runtime.RuntimeJob.cancel")()                                                           | Cancel the job.                                                                     |
| [`cancel_result_streaming`](#qiskit.providers.ibmq.runtime.RuntimeJob.cancel_result_streaming "qiskit.providers.ibmq.runtime.RuntimeJob.cancel_result_streaming")()        | Cancel result streaming.                                                            |
| [`job_id`](#qiskit.providers.ibmq.runtime.RuntimeJob.job_id "qiskit.providers.ibmq.runtime.RuntimeJob.job_id")()                                                           | Return a unique ID identifying the job.                                             |
| [`logs`](#qiskit.providers.ibmq.runtime.RuntimeJob.logs "qiskit.providers.ibmq.runtime.RuntimeJob.logs")()                                                                 | Return job logs.                                                                    |
| [`result`](#qiskit.providers.ibmq.runtime.RuntimeJob.result "qiskit.providers.ibmq.runtime.RuntimeJob.result")(\[timeout, wait, decoder])                                  | Return the results of the job.                                                      |
| [`status`](#qiskit.providers.ibmq.runtime.RuntimeJob.status "qiskit.providers.ibmq.runtime.RuntimeJob.status")()                                                           | Return the status of the job.                                                       |
| [`stream_results`](#qiskit.providers.ibmq.runtime.RuntimeJob.stream_results "qiskit.providers.ibmq.runtime.RuntimeJob.stream_results")(callback\[, decoder])               | Start streaming job results.                                                        |
| [`wait_for_final_state`](#qiskit.providers.ibmq.runtime.RuntimeJob.wait_for_final_state "qiskit.providers.ibmq.runtime.RuntimeJob.wait_for_final_state")(\[timeout, wait]) | Poll the job status until it progresses to a final state such as `DONE` or `ERROR`. |

## Attributes

|                                                                                                                                     |                                  |
| ----------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| [`creation_date`](#qiskit.providers.ibmq.runtime.RuntimeJob.creation_date "qiskit.providers.ibmq.runtime.RuntimeJob.creation_date") | Job creation date in local time. |
| [`inputs`](#qiskit.providers.ibmq.runtime.RuntimeJob.inputs "qiskit.providers.ibmq.runtime.RuntimeJob.inputs")                      | Job input parameters.            |
| [`program_id`](#qiskit.providers.ibmq.runtime.RuntimeJob.program_id "qiskit.providers.ibmq.runtime.RuntimeJob.program_id")          | Program ID.                      |

<span id="undefined" />

`backend()`

Return the backend where this job was executed.

**Return type**

`Backend`

**Returns**

Backend used for the job.

<span id="undefined" />

`cancel()`

Cancel the job.

**Raises**

*   **RuntimeInvalidStateError** – If the job is in a state that cannot be cancelled.
*   **QiskitRuntimeError** – If unable to cancel job.

**Return type**

`None`

<span id="undefined" />

`cancel_result_streaming()`

Cancel result streaming.

**Return type**

`None`

<span id="undefined" />

`property creation_date`

Job creation date in local time.

**Return type**

`Optional`\[`datetime`]

**Returns**

The job creation date as a datetime object, in local time, or `None` if creation date is not available.

<span id="undefined" />

`property inputs`

Job input parameters.

**Return type**

`Dict`

**Returns**

Input parameters used in this job.

<span id="undefined" />

`job_id()`

Return a unique ID identifying the job.

**Return type**

`str`

**Returns**

Job ID.

<span id="undefined" />

`logs()`

Return job logs.

<Admonition title="Note" type="note">
  Job logs are only available after the job finishes.
</Admonition>

**Return type**

`str`

**Returns**

Job logs, including standard output and error.

**Raises**

**QiskitRuntimeError** – If a network error occurred.

<span id="undefined" />

`property program_id`

Program ID.

**Return type**

`str`

**Returns**

ID of the program this job is for.

<span id="undefined" />

`result(timeout=None, wait=5, decoder=None)`

Return the results of the job.

**Parameters**

*   **timeout** (`Optional`\[`float`]) – Number of seconds to wait for job.
*   **wait** (`float`) – Seconds between queries.
*   **decoder** (`Optional`\[`Type`\[`ResultDecoder`]]) – A [`ResultDecoder`](qiskit.providers.ibmq.runtime.ResultDecoder#qiskit.providers.ibmq.runtime.ResultDecoder "qiskit.providers.ibmq.runtime.ResultDecoder") subclass used to decode job results.

**Return type**

`Any`

**Returns**

Runtime job result.

**Raises**

**RuntimeJobFailureError** – If the job failed.

<span id="undefined" />

`status()`

Return the status of the job.

**Return type**

`JobStatus`

**Returns**

Status of this job.

**Raises**

[**IBMQError**](qiskit.providers.ibmq.IBMQError#qiskit.providers.ibmq.IBMQError "qiskit.providers.ibmq.IBMQError") – If an unknown status is returned from the server.

<span id="undefined" />

`stream_results(callback, decoder=None)`

Start streaming job results.

**Parameters**

*   **callback** (`Callable`) –

    Callback function to be invoked for any interim results. The callback function will receive 2 positional parameters:

    > 1.  Job ID
    > 2.  Job interim result.

*   **decoder** (`Optional`\[`Type`\[`ResultDecoder`]]) – A [`ResultDecoder`](qiskit.providers.ibmq.runtime.ResultDecoder#qiskit.providers.ibmq.runtime.ResultDecoder "qiskit.providers.ibmq.runtime.ResultDecoder") subclass used to decode job results.

**Raises**

**RuntimeInvalidStateError** – If a callback function is already streaming results or if the job already finished.

**Return type**

`None`

<span id="undefined" />

`wait_for_final_state(timeout=None, wait=5)`

Poll the job status until it progresses to a final state such as `DONE` or `ERROR`.

**Parameters**

*   **timeout** (`Optional`\[`float`]) – Seconds to wait for the job. If `None`, wait indefinitely.
*   **wait** (`float`) – Seconds between queries.

**Raises**

[**JobTimeoutError**](qiskit.providers.JobTimeoutError#qiskit.providers.JobTimeoutError "qiskit.providers.JobTimeoutError") – If the job does not reach a final state before the specified timeout.

**Return type**

`None`
