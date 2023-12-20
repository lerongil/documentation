<span id="qiskit-providers-ibmq-job-queueinfo" />

# qiskit.providers.ibmq.job.QueueInfo

<span id="undefined" />

`QueueInfo(position=None, status=None, estimated_start_time=None, estimated_complete_time=None, hub_priority=None, group_priority=None, project_priority=None, job_id=None, **kwargs)`

Queue information for a job.

QueueInfo constructor.

**Parameters**

*   **position** (`Optional`\[`int`]) – Position in the queue.
*   **status** (`Optional`\[`str`]) – Job status.
*   **estimated\_start\_time** (`Union`\[`str`, `datetime`, `None`]) – Estimated start time for the job, in UTC.
*   **estimated\_complete\_time** (`Union`\[`str`, `datetime`, `None`]) – Estimated complete time for the job, in UTC.
*   **hub\_priority** (`Optional`\[`float`]) – Dynamic priority for the hub.
*   **group\_priority** (`Optional`\[`float`]) – Dynamic priority for the group.
*   **project\_priority** (`Optional`\[`float`]) – Dynamic priority for the project.
*   **job\_id** (`Optional`\[`str`]) – Job ID.
*   **kwargs** (`Any`) – Additional attributes.

<span id="undefined" />

`__init__(position=None, status=None, estimated_start_time=None, estimated_complete_time=None, hub_priority=None, group_priority=None, project_priority=None, job_id=None, **kwargs)`

QueueInfo constructor.

**Parameters**

*   **position** (`Optional`\[`int`]) – Position in the queue.
*   **status** (`Optional`\[`str`]) – Job status.
*   **estimated\_start\_time** (`Union`\[`str`, `datetime`, `None`]) – Estimated start time for the job, in UTC.
*   **estimated\_complete\_time** (`Union`\[`str`, `datetime`, `None`]) – Estimated complete time for the job, in UTC.
*   **hub\_priority** (`Optional`\[`float`]) – Dynamic priority for the hub.
*   **group\_priority** (`Optional`\[`float`]) – Dynamic priority for the group.
*   **project\_priority** (`Optional`\[`float`]) – Dynamic priority for the project.
*   **job\_id** (`Optional`\[`str`]) – Job ID.
*   **kwargs** (`Any`) – Additional attributes.

## Methods

|                                                                                                                                    |                                                             |
| ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| [`__init__`](#qiskit.providers.ibmq.job.QueueInfo.__init__ "qiskit.providers.ibmq.job.QueueInfo.__init__")(\[position, status, …]) | QueueInfo constructor.                                      |
| [`format`](#qiskit.providers.ibmq.job.QueueInfo.format "qiskit.providers.ibmq.job.QueueInfo.format")()                             | Build a user-friendly report for the job queue information. |

## Attributes

|                                                                                                                                                         |                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| [`estimated_complete_time`](#qiskit.providers.ibmq.job.QueueInfo.estimated_complete_time "qiskit.providers.ibmq.job.QueueInfo.estimated_complete_time") | Return estimated complete time in local time. |
| [`estimated_start_time`](#qiskit.providers.ibmq.job.QueueInfo.estimated_start_time "qiskit.providers.ibmq.job.QueueInfo.estimated_start_time")          | Return estimated start time in local time.    |

<span id="undefined" />

`property estimated_complete_time`

Return estimated complete time in local time.

**Return type**

`Optional`\[`datetime`]

<span id="undefined" />

`property estimated_start_time`

Return estimated start time in local time.

**Return type**

`Optional`\[`datetime`]

<span id="undefined" />

`format()`

Build a user-friendly report for the job queue information.

**Return type**

`str`

**Returns**

The job queue information report.
