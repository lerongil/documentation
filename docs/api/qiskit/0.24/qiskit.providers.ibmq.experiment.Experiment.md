<span id="qiskit-providers-ibmq-experiment-experiment" />

# qiskit.providers.ibmq.experiment.Experiment

<span id="undefined" />

`Experiment(provider, backend_name, experiment_type, extra=None, tags=None, start_datetime=None, end_datetime=None, experiment_uuid=None, plot_names=None, analysis_results=None, hub=None, group=None, project=None, share_level=None, owner=None)`

Class representing an experiment.

Experiment constructor.

**Parameters**

*   **provider** (`AccountProvider`) – the account provider.

*   **backend\_name** (`str`) – Name of the backend.

*   **experiment\_type** (`str`) – Experiment type.

*   **extra** (`Optional`\[`Dict`]) – Extra information about the experiment.

*   **tags** (`Optional`\[`List`\[`str`]]) – Tags for the experiment.

*   **start\_datetime** (`Optional`\[`datetime`]) – Timestamp when the experiment started. If no timezone information is present, local timezone is assumed.

*   **end\_datetime** (`Optional`\[`datetime`]) – Timestamp when the experiment ended. If no timezone information is present, local timezone is assumed.

*   **experiment\_uuid** (`Optional`\[`str`]) – Unique identifier of the experiment.

*   **plot\_names** (`Optional`\[`List`\[`str`]]) – A list of plot names for this experiment.

*   **analysis\_results** (`Optional`\[`List`\[`AnalysisResult`]]) – A list of analysis results associated with this experiment.

*   **hub** (`Optional`\[`str`]) – The hub to which this experiment belongs. If not specified the hub from the provider is used.

*   **group** (`Optional`\[`str`]) – The group to which this experiment belongs. If not specified the group from the provider is used.

*   **project** (`Optional`\[`str`]) – The project to which this experiment belongs. If not specified the project from the provider is used.

*   **share\_level** (`Union`\[`ExperimentShareLevel`, `str`, `None`]) –

    The level at which the experiment is shared. This determines who can view the experiment (but not update it). This defaults to “private” for new experiments. Possible values include:

    *   private: The experiment is only visible to its owner (default)
    *   project: The experiment is shared within its project
    *   group: The experiment is shared within its group
    *   hub: The experiment is shared within its hub
    *   public: The experiment is shared publicly regardless of provider

*   **owner** (`Optional`\[`str`]) – The user ID for the owner of the experiment. This is set by the server when the experiment is uploaded and should not be set by a user.

**Raises**

**ExperimentError** – If the provider does not offer experiment services.

<span id="undefined" />

`__init__(provider, backend_name, experiment_type, extra=None, tags=None, start_datetime=None, end_datetime=None, experiment_uuid=None, plot_names=None, analysis_results=None, hub=None, group=None, project=None, share_level=None, owner=None)`

Experiment constructor.

**Parameters**

*   **provider** (`AccountProvider`) – the account provider.

*   **backend\_name** (`str`) – Name of the backend.

*   **experiment\_type** (`str`) – Experiment type.

*   **extra** (`Optional`\[`Dict`]) – Extra information about the experiment.

*   **tags** (`Optional`\[`List`\[`str`]]) – Tags for the experiment.

*   **start\_datetime** (`Optional`\[`datetime`]) – Timestamp when the experiment started. If no timezone information is present, local timezone is assumed.

*   **end\_datetime** (`Optional`\[`datetime`]) – Timestamp when the experiment ended. If no timezone information is present, local timezone is assumed.

*   **experiment\_uuid** (`Optional`\[`str`]) – Unique identifier of the experiment.

*   **plot\_names** (`Optional`\[`List`\[`str`]]) – A list of plot names for this experiment.

*   **analysis\_results** (`Optional`\[`List`\[`AnalysisResult`]]) – A list of analysis results associated with this experiment.

*   **hub** (`Optional`\[`str`]) – The hub to which this experiment belongs. If not specified the hub from the provider is used.

*   **group** (`Optional`\[`str`]) – The group to which this experiment belongs. If not specified the group from the provider is used.

*   **project** (`Optional`\[`str`]) – The project to which this experiment belongs. If not specified the project from the provider is used.

*   **share\_level** (`Union`\[`ExperimentShareLevel`, `str`, `None`]) –

    The level at which the experiment is shared. This determines who can view the experiment (but not update it). This defaults to “private” for new experiments. Possible values include:

    *   private: The experiment is only visible to its owner (default)
    *   project: The experiment is shared within its project
    *   group: The experiment is shared within its group
    *   hub: The experiment is shared within its hub
    *   public: The experiment is shared publicly regardless of provider

*   **owner** (`Optional`\[`str`]) – The user ID for the owner of the experiment. This is set by the server when the experiment is uploaded and should not be set by a user.

**Raises**

**ExperimentError** – If the provider does not offer experiment services.

## Methods

|                                                                                                                                                                                       |                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| [`__init__`](#qiskit.providers.ibmq.experiment.Experiment.__init__ "qiskit.providers.ibmq.experiment.Experiment.__init__")(provider, backend\_name, experiment\_type)                 | Experiment constructor.                                   |
| [`from_remote_data`](#qiskit.providers.ibmq.experiment.Experiment.from_remote_data "qiskit.providers.ibmq.experiment.Experiment.from_remote_data")(provider, remote\_data)            | Create an instance of this class from remote data.        |
| [`refresh`](#qiskit.providers.ibmq.experiment.Experiment.refresh "qiskit.providers.ibmq.experiment.Experiment.refresh")()                                                             | Update this experiment instance with remote data.         |
| [`update_from_remote_data`](#qiskit.providers.ibmq.experiment.Experiment.update_from_remote_data "qiskit.providers.ibmq.experiment.Experiment.update_from_remote_data")(remote\_data) | Update the attributes of this instance using remote data. |

## Attributes

|                                                                                                                                                       |                                                            |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| [`analysis_results`](#qiskit.providers.ibmq.experiment.Experiment.analysis_results "qiskit.providers.ibmq.experiment.Experiment.analysis_results")    | Return analysis results associated with this experiment.   |
| [`backend_name`](#qiskit.providers.ibmq.experiment.Experiment.backend_name "qiskit.providers.ibmq.experiment.Experiment.backend_name")                | Return the experiment’s backend name.                      |
| [`creation_datetime`](#qiskit.providers.ibmq.experiment.Experiment.creation_datetime "qiskit.providers.ibmq.experiment.Experiment.creation_datetime") | Return the timestamp when the experiment was created.      |
| [`end_datetime`](#qiskit.providers.ibmq.experiment.Experiment.end_datetime "qiskit.providers.ibmq.experiment.Experiment.end_datetime")                | Return the timestamp when the experiment ended.            |
| [`group`](#qiskit.providers.ibmq.experiment.Experiment.group "qiskit.providers.ibmq.experiment.Experiment.group")                                     | Return the experiment’s group.                             |
| [`hub`](#qiskit.providers.ibmq.experiment.Experiment.hub "qiskit.providers.ibmq.experiment.Experiment.hub")                                           | Return the experiment’s hub.                               |
| [`owner`](#qiskit.providers.ibmq.experiment.Experiment.owner "qiskit.providers.ibmq.experiment.Experiment.owner")                                     | Return the experiment’s owner.                             |
| [`plot_names`](#qiskit.providers.ibmq.experiment.Experiment.plot_names "qiskit.providers.ibmq.experiment.Experiment.plot_names")                      | Return names of plots associated with this experiment.     |
| [`project`](#qiskit.providers.ibmq.experiment.Experiment.project "qiskit.providers.ibmq.experiment.Experiment.project")                               | Return the experiment’s project.                           |
| [`share_level`](#qiskit.providers.ibmq.experiment.Experiment.share_level "qiskit.providers.ibmq.experiment.Experiment.share_level")                   | Return the experiment share\_level.                        |
| [`start_datetime`](#qiskit.providers.ibmq.experiment.Experiment.start_datetime "qiskit.providers.ibmq.experiment.Experiment.start_datetime")          | Return the timestamp when the experiment started.          |
| [`updated_datetime`](#qiskit.providers.ibmq.experiment.Experiment.updated_datetime "qiskit.providers.ibmq.experiment.Experiment.updated_datetime")    | Return the timestamp when the experiment was last updated. |
| [`uuid`](#qiskit.providers.ibmq.experiment.Experiment.uuid "qiskit.providers.ibmq.experiment.Experiment.uuid")                                        | Return the experiment’s uuid.                              |

<span id="undefined" />

`property analysis_results`

Return analysis results associated with this experiment.

**Return type**

`List`

<span id="undefined" />

`property backend_name`

Return the experiment’s backend name.

**Return type**

`str`

<span id="undefined" />

`property creation_datetime`

Return the timestamp when the experiment was created.

**Return type**

`Optional`\[`datetime`]

<span id="undefined" />

`property end_datetime`

Return the timestamp when the experiment ended.

**Return type**

`Optional`\[`datetime`]

<span id="undefined" />

`classmethod from_remote_data(provider, remote_data)`

Create an instance of this class from remote data.

**Parameters**

*   **provider** (`AccountProvider`) – account provider.
*   **remote\_data** (`Dict`) – Remote data to use.

**Return type**

`Experiment`

**Returns**

An instance of this class.

<span id="undefined" />

`property group`

Return the experiment’s group.

**Return type**

`str`

<span id="undefined" />

`property hub`

Return the experiment’s hub.

**Return type**

`str`

<span id="undefined" />

`property owner`

Return the experiment’s owner.

**Return type**

`str`

<span id="undefined" />

`property plot_names`

Return names of plots associated with this experiment.

**Return type**

`List`

<span id="undefined" />

`property project`

Return the experiment’s project.

**Return type**

`str`

<span id="undefined" />

`refresh()`

Update this experiment instance with remote data.

**Return type**

`None`

<span id="undefined" />

`property share_level`

Return the experiment share\_level.

**Return type**

`Optional`\[`ExperimentShareLevel`]

<span id="undefined" />

`property start_datetime`

Return the timestamp when the experiment started.

**Return type**

`datetime`

<span id="undefined" />

`update_from_remote_data(remote_data)`

Update the attributes of this instance using remote data.

**Parameters**

**remote\_data** (`Dict`) – Remote data used to update this instance.

**Return type**

`None`

<span id="undefined" />

`property updated_datetime`

Return the timestamp when the experiment was last updated.

**Return type**

`Optional`\[`datetime`]

<span id="undefined" />

`property uuid`

Return the experiment’s uuid.

**Return type**

`str`
