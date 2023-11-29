# qiskit.providers.models.PulseBackendConfiguration

<span id="undefined" />

`PulseBackendConfiguration(backend_name, backend_version, n_qubits, basis_gates, gates, local, simulator, conditional, open_pulse, memory, max_shots, coupling_map, n_uchannels, u_channel_lo, meas_levels, qubit_lo_range, meas_lo_range, dt, dtm, rep_times, meas_kernels, discriminators, hamiltonian=None, channel_bandwidth=None, acquisition_latency=None, conditional_latency=None, meas_map=None, max_experiments=None, sample_name=None, n_registers=None, register_map=None, configurable=None, credits_required=None, online_date=None, display_name=None, description=None, tags=None, channels=None, **kwargs)`

Static configuration state for an OpenPulse enabled backend. This contains information about the set up of the device which can be useful for building Pulse programs.

Initialize a backend configuration that contains all the extra configuration that is made available for OpenPulse backends.

**Parameters**

*   **backend\_name** (`str`) – backend name.
*   **backend\_version** (`str`) – backend version in the form X.Y.Z.
*   **n\_qubits** (`int`) – number of qubits.
*   **basis\_gates** (`List`\[`str`]) – list of basis gates names on the backend.
*   **gates** (`GateConfig`) – list of basis gates on the backend.
*   **local** (`bool`) – backend is local or remote.
*   **simulator** (`bool`) – backend is a simulator.
*   **conditional** (`bool`) – backend supports conditional operations.
*   **open\_pulse** (`bool`) – backend supports open pulse.
*   **memory** (`bool`) – backend supports memory.
*   **max\_shots** (`int`) – maximum number of shots supported.
*   **coupling\_map** (*list*) – The coupling map for the device
*   **n\_uchannels** (`int`) – Number of u-channels.
*   **u\_channel\_lo** (`List`\[`List`\[`UchannelLO`]]) – U-channel relationship on device los.
*   **meas\_levels** (`List`\[`int`]) – Supported measurement levels.
*   **qubit\_lo\_range** (`List`\[`List`\[`float`]]) – Qubit lo ranges for each qubit with form (min, max) in GHz.
*   **meas\_lo\_range** (`List`\[`List`\[`float`]]) – Measurement lo ranges for each qubit with form (min, max) in GHz.
*   **dt** (`float`) – Qubit drive channel timestep in nanoseconds.
*   **dtm** (`float`) – Measurement drive channel timestep in nanoseconds.
*   **rep\_times** (`List`\[`float`]) – Supported repetition times (program execution time) for backend in μs.
*   **meas\_kernels** (`List`\[`str`]) – Supported measurement kernels.
*   **discriminators** (`List`\[`str`]) – Supported discriminators.
*   **hamiltonian** (`Optional`\[`Dict`\[`str`, `Any`]]) – An optional dictionary with fields characterizing the system hamiltonian.
*   **channel\_bandwidth** (*list*) – Bandwidth of all channels (qubit, measurement, and U)
*   **acquisition\_latency** (*list*) – Array of dimension n\_qubits x n\_registers. Latency (in units of dt) to write a measurement result from qubit n into register slot m.
*   **conditional\_latency** (*list*) – Array of dimension n\_channels \[d->u->m] x n\_registers. Latency (in units of dt) to do a conditional operation on channel n from register slot m
*   **meas\_map** (*list*) – Grouping of measurement which are multiplexed
*   **max\_experiments** (*int*) – The maximum number of experiments per job
*   **sample\_name** (*str*) – Sample name for the backend
*   **n\_registers** (*int*) – Number of register slots available for feedback (if conditional is True)
*   **register\_map** (*list*) – An array of dimension n\_qubits X n\_registers that specifies whether a qubit can store a measurement in a certain register slot.
*   **configurable** (*bool*) – True if the backend is configurable, if the backend is a simulator
*   **credits\_required** (*bool*) – True if backend requires credits to run a job.
*   **online\_date** (*datetime*) – The date that the device went online
*   **display\_name** (*str*) – Alternate name field for the backend
*   **description** (*str*) – A description for the backend
*   **tags** (*list*) – A list of string tags to describe the backend
*   **channels** (`Optional`\[`Dict`\[`str`, `Any`]]) – An optional dictionary containing information of each channel – their purpose, type, and qubits operated on.
*   **\*\*kwargs** – Optional fields.

<span id="undefined" />

`__init__(backend_name, backend_version, n_qubits, basis_gates, gates, local, simulator, conditional, open_pulse, memory, max_shots, coupling_map, n_uchannels, u_channel_lo, meas_levels, qubit_lo_range, meas_lo_range, dt, dtm, rep_times, meas_kernels, discriminators, hamiltonian=None, channel_bandwidth=None, acquisition_latency=None, conditional_latency=None, meas_map=None, max_experiments=None, sample_name=None, n_registers=None, register_map=None, configurable=None, credits_required=None, online_date=None, display_name=None, description=None, tags=None, channels=None, **kwargs)`

Initialize a backend configuration that contains all the extra configuration that is made available for OpenPulse backends.

**Parameters**

*   **backend\_name** (`str`) – backend name.
*   **backend\_version** (`str`) – backend version in the form X.Y.Z.
*   **n\_qubits** (`int`) – number of qubits.
*   **basis\_gates** (`List`\[`str`]) – list of basis gates names on the backend.
*   **gates** (`GateConfig`) – list of basis gates on the backend.
*   **local** (`bool`) – backend is local or remote.
*   **simulator** (`bool`) – backend is a simulator.
*   **conditional** (`bool`) – backend supports conditional operations.
*   **open\_pulse** (`bool`) – backend supports open pulse.
*   **memory** (`bool`) – backend supports memory.
*   **max\_shots** (`int`) – maximum number of shots supported.
*   **coupling\_map** (*list*) – The coupling map for the device
*   **n\_uchannels** (`int`) – Number of u-channels.
*   **u\_channel\_lo** (`List`\[`List`\[`UchannelLO`]]) – U-channel relationship on device los.
*   **meas\_levels** (`List`\[`int`]) – Supported measurement levels.
*   **qubit\_lo\_range** (`List`\[`List`\[`float`]]) – Qubit lo ranges for each qubit with form (min, max) in GHz.
*   **meas\_lo\_range** (`List`\[`List`\[`float`]]) – Measurement lo ranges for each qubit with form (min, max) in GHz.
*   **dt** (`float`) – Qubit drive channel timestep in nanoseconds.
*   **dtm** (`float`) – Measurement drive channel timestep in nanoseconds.
*   **rep\_times** (`List`\[`float`]) – Supported repetition times (program execution time) for backend in μs.
*   **meas\_kernels** (`List`\[`str`]) – Supported measurement kernels.
*   **discriminators** (`List`\[`str`]) – Supported discriminators.
*   **hamiltonian** (`Optional`\[`Dict`\[`str`, `Any`]]) – An optional dictionary with fields characterizing the system hamiltonian.
*   **channel\_bandwidth** (*list*) – Bandwidth of all channels (qubit, measurement, and U)
*   **acquisition\_latency** (*list*) – Array of dimension n\_qubits x n\_registers. Latency (in units of dt) to write a measurement result from qubit n into register slot m.
*   **conditional\_latency** (*list*) – Array of dimension n\_channels \[d->u->m] x n\_registers. Latency (in units of dt) to do a conditional operation on channel n from register slot m
*   **meas\_map** (*list*) – Grouping of measurement which are multiplexed
*   **max\_experiments** (*int*) – The maximum number of experiments per job
*   **sample\_name** (*str*) – Sample name for the backend
*   **n\_registers** (*int*) – Number of register slots available for feedback (if conditional is True)
*   **register\_map** (*list*) – An array of dimension n\_qubits X n\_registers that specifies whether a qubit can store a measurement in a certain register slot.
*   **configurable** (*bool*) – True if the backend is configurable, if the backend is a simulator
*   **credits\_required** (*bool*) – True if backend requires credits to run a job.
*   **online\_date** (*datetime*) – The date that the device went online
*   **display\_name** (*str*) – Alternate name field for the backend
*   **description** (*str*) – A description for the backend
*   **tags** (*list*) – A list of string tags to describe the backend
*   **channels** (`Optional`\[`Dict`\[`str`, `Any`]]) – An optional dictionary containing information of each channel – their purpose, type, and qubits operated on.
*   **\*\*kwargs** – Optional fields.

## Methods

|                                                                                                                                                                               |                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.providers.models.PulseBackendConfiguration.__init__ "qiskit.providers.models.PulseBackendConfiguration.__init__")(backend\_name, backend\_version, …)    | Initialize a backend configuration that contains all the extra configuration that is made available for OpenPulse backends.                                                                                             |
| [`acquire`](#qiskit.providers.models.PulseBackendConfiguration.acquire "qiskit.providers.models.PulseBackendConfiguration.acquire")(qubit)                                    | Return the acquisition channel for the given qubit.                                                                                                                                                                     |
| [`control`](#qiskit.providers.models.PulseBackendConfiguration.control "qiskit.providers.models.PulseBackendConfiguration.control")(\[qubits, channel])                       | Return the secondary drive channel for the given qubit – typically utilized for controlling multiqubit interactions.                                                                                                    |
| [`describe`](#qiskit.providers.models.PulseBackendConfiguration.describe "qiskit.providers.models.PulseBackendConfiguration.describe")(channel)                               | Return a basic description of the channel dependency. Derived channels are given weights which describe how their frames are linked to other frames. For instance, the backend could be configured with this setting::. |
| [`drive`](#qiskit.providers.models.PulseBackendConfiguration.drive "qiskit.providers.models.PulseBackendConfiguration.drive")(qubit)                                          | Return the drive channel for the given qubit.                                                                                                                                                                           |
| [`from_dict`](#qiskit.providers.models.PulseBackendConfiguration.from_dict "qiskit.providers.models.PulseBackendConfiguration.from_dict")(data)                               | Create a new GateConfig object from a dictionary.                                                                                                                                                                       |
| [`get_channel_qubits`](#qiskit.providers.models.PulseBackendConfiguration.get_channel_qubits "qiskit.providers.models.PulseBackendConfiguration.get_channel_qubits")(channel) | Return a list of indices for qubits which are operated on directly by the given `channel`.                                                                                                                              |
| [`get_qubit_channels`](#qiskit.providers.models.PulseBackendConfiguration.get_qubit_channels "qiskit.providers.models.PulseBackendConfiguration.get_qubit_channels")(qubit)   | Return a list of channels which operate on the given `qubit`.                                                                                                                                                           |
| [`measure`](#qiskit.providers.models.PulseBackendConfiguration.measure "qiskit.providers.models.PulseBackendConfiguration.measure")(qubit)                                    | Return the measure stimulus channel for the given qubit.                                                                                                                                                                |
| [`to_dict`](#qiskit.providers.models.PulseBackendConfiguration.to_dict "qiskit.providers.models.PulseBackendConfiguration.to_dict")()                                         | Return a dictionary format representation of the GateConfig.                                                                                                                                                            |

## Attributes

|                                                                                                                                                                |                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| [`control_channels`](#qiskit.providers.models.PulseBackendConfiguration.control_channels "qiskit.providers.models.PulseBackendConfiguration.control_channels") | Return the control channels                      |
| [`num_qubits`](#qiskit.providers.models.PulseBackendConfiguration.num_qubits "qiskit.providers.models.PulseBackendConfiguration.num_qubits")                   | Returns the number of qubits.                    |
| [`sample_rate`](#qiskit.providers.models.PulseBackendConfiguration.sample_rate "qiskit.providers.models.PulseBackendConfiguration.sample_rate")                | Sample rate of the signal channels in Hz (1/dt). |

<span id="undefined" />

`acquire(qubit)`

Return the acquisition channel for the given qubit.

**Raises**

**BackendConfigurationError** – If the qubit is not a part of the system.

**Return type**

[`AcquireChannel`](qiskit.pulse.channels#qiskit.pulse.channels.AcquireChannel "qiskit.pulse.channels.AcquireChannel")

**Returns**

Qubit measurement acquisition line.

<span id="undefined" />

`control(qubits=None, channel=None)`

Return the secondary drive channel for the given qubit – typically utilized for controlling multiqubit interactions. This channel is derived from other channels.

**Parameters**

*   **qubits** (`Optional`\[`Iterable`\[`int`]]) – Tuple or list of qubits of the form (control\_qubit, target\_qubit).
*   **channel** (`Optional`\[`int`]) – Deprecated.

**Raises**

**BackendConfigurationError** – If the `qubits` is not a part of the system or if the backend does not provide channels information in its configuration.

**Return type**

`List`\[[`ControlChannel`](qiskit.pulse.channels#qiskit.pulse.channels.ControlChannel "qiskit.pulse.channels.ControlChannel")]

**Returns**

List of control channels.

<span id="undefined" />

`property control_channels`

Return the control channels

**Return type**

`Dict`\[`Tuple`\[`int`, …], `List`]

<span id="undefined" />

`describe(channel)`

Return a basic description of the channel dependency. Derived channels are given weights which describe how their frames are linked to other frames. For instance, the backend could be configured with this setting:

```python
u_channel_lo = [
    [UchannelLO(q=0, scale=1. + 0.j)],
    [UchannelLO(q=0, scale=-1. + 0.j), UchannelLO(q=1, scale=1. + 0.j)]
]
```

Then, this method can be used as follows:

```python
backend.configuration().describe(ControlChannel(1))
>>> {DriveChannel(0): -1, DriveChannel(1): 1}
```

**Parameters**

**channel** ([`ControlChannel`](qiskit.pulse.channels#qiskit.pulse.channels.ControlChannel "qiskit.pulse.channels.ControlChannel")) – The derived channel to describe.

**Raises**

**BackendConfigurationError** – If channel is not a ControlChannel.

**Return type**

`Dict`\[[`DriveChannel`](qiskit.pulse.channels#qiskit.pulse.channels.DriveChannel "qiskit.pulse.channels.DriveChannel"), `complex`]

**Returns**

Control channel derivations.

<span id="undefined" />

`drive(qubit)`

Return the drive channel for the given qubit.

**Raises**

**BackendConfigurationError** – If the qubit is not a part of the system.

**Return type**

[`DriveChannel`](qiskit.pulse.channels#qiskit.pulse.channels.DriveChannel "qiskit.pulse.channels.DriveChannel")

**Returns**

Qubit drive channel.

<span id="undefined" />

`classmethod from_dict(data)`

Create a new GateConfig object from a dictionary.

**Parameters**

**data** (*dict*) – A dictionary representing the GateConfig to create. It will be in the same format as output by [`to_dict()`](#qiskit.providers.models.PulseBackendConfiguration.to_dict "qiskit.providers.models.PulseBackendConfiguration.to_dict").

**Returns**

The GateConfig from the input dictionary.

**Return type**

[GateConfig](qiskit.providers.models.GateConfig#qiskit.providers.models.GateConfig "qiskit.providers.models.GateConfig")

<span id="undefined" />

`get_channel_qubits(channel)`

Return a list of indices for qubits which are operated on directly by the given `channel`.

**Raises**

**BackendConfigurationError** – If `channel` is not a found or if the backend does not provide channels information in its configuration.

**Return type**

`List`\[`int`]

**Returns**

List of qubits operated on my the given `channel`.

<span id="undefined" />

`get_qubit_channels(qubit)`

Return a list of channels which operate on the given `qubit`.

**Raises**

**BackendConfigurationError** – If `qubit` is not a found or if the backend does not provide channels information in its configuration.

**Return type**

`List`\[[`Channel`](qiskit.pulse.channels#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")]

**Returns**

List of `Channel`s operated on my the given `qubit`.

<span id="undefined" />

`measure(qubit)`

Return the measure stimulus channel for the given qubit.

**Raises**

**BackendConfigurationError** – If the qubit is not a part of the system.

**Return type**

[`MeasureChannel`](qiskit.pulse.channels#qiskit.pulse.channels.MeasureChannel "qiskit.pulse.channels.MeasureChannel")

**Returns**

Qubit measurement stimulus line.

<span id="undefined" />

`property num_qubits`

Returns the number of qubits.

In future, n\_qubits should be replaced in favor of num\_qubits for consistent use throughout Qiskit. Until this is properly refactored, this property serves as intermediate solution.

<span id="undefined" />

`property sample_rate`

Sample rate of the signal channels in Hz (1/dt).

**Return type**

`float`

<span id="undefined" />

`to_dict()`

Return a dictionary format representation of the GateConfig.

**Returns**

The dictionary form of the GateConfig.

**Return type**

dict