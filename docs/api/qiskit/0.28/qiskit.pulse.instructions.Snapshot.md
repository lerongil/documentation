# qiskit.pulse.instructions.Snapshot

<span id="undefined" />

`Snapshot(label, snapshot_type='statevector', name=None)`

An instruction targeted for simulators, to capture a moment in the simulation.

Create new snapshot.

**Parameters**

*   **label** (`str`) – Snapshot label which is used to identify the snapshot in the output.
*   **snapshot\_type** (`str`) – Type of snapshot, e.g., “state” (take a snapshot of the quantum state). The types of snapshots offered are defined by the simulator used.
*   **name** (`Optional`\[`str`]) – Snapshot name which defaults to `label`. This parameter is only for display purposes and is not taken into account during comparison.

**Raises**

[**PulseError**](qiskit.pulse.PulseError#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If snapshot label is invalid.

<span id="undefined" />

`__init__(label, snapshot_type='statevector', name=None)`

Create new snapshot.

**Parameters**

*   **label** (`str`) – Snapshot label which is used to identify the snapshot in the output.
*   **snapshot\_type** (`str`) – Type of snapshot, e.g., “state” (take a snapshot of the quantum state). The types of snapshots offered are defined by the simulator used.
*   **name** (`Optional`\[`str`]) – Snapshot name which defaults to `label`. This parameter is only for display purposes and is not taken into account during comparison.

**Raises**

[**PulseError**](qiskit.pulse.PulseError#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If snapshot label is invalid.

## Methods

|                                                                                                                                                  |                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.pulse.instructions.Snapshot.__init__ "qiskit.pulse.instructions.Snapshot.__init__")(label\[, snapshot\_type, name])         | Create new snapshot.                                                                                                                                                                                |
| [`append`](#qiskit.pulse.instructions.Snapshot.append "qiskit.pulse.instructions.Snapshot.append")(schedule\[, name])                            | Return a new [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`. |
| [`assign_parameters`](#qiskit.pulse.instructions.Snapshot.assign_parameters "qiskit.pulse.instructions.Snapshot.assign_parameters")(value\_dict) | Modify and return self with parameters assigned according to the input.                                                                                                                             |
| [`ch_duration`](#qiskit.pulse.instructions.Snapshot.ch_duration "qiskit.pulse.instructions.Snapshot.ch_duration")(\*channels)                    | Return duration of the supplied channels in this Instruction.                                                                                                                                       |
| [`ch_start_time`](#qiskit.pulse.instructions.Snapshot.ch_start_time "qiskit.pulse.instructions.Snapshot.ch_start_time")(\*channels)              | Return minimum start time for supplied channels.                                                                                                                                                    |
| [`ch_stop_time`](#qiskit.pulse.instructions.Snapshot.ch_stop_time "qiskit.pulse.instructions.Snapshot.ch_stop_time")(\*channels)                 | Return maximum start time for supplied channels.                                                                                                                                                    |
| [`draw`](#qiskit.pulse.instructions.Snapshot.draw "qiskit.pulse.instructions.Snapshot.draw")(\[dt, style, filename, interp\_method, …])          | Plot the instruction.                                                                                                                                                                               |
| [`flatten`](#qiskit.pulse.instructions.Snapshot.flatten "qiskit.pulse.instructions.Snapshot.flatten")()                                          | Return itself as already single instruction.                                                                                                                                                        |
| [`insert`](#qiskit.pulse.instructions.Snapshot.insert "qiskit.pulse.instructions.Snapshot.insert")(start\_time, schedule\[, name])               | Return a new [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.                                              |
| [`is_parameterized`](#qiskit.pulse.instructions.Snapshot.is_parameterized "qiskit.pulse.instructions.Snapshot.is_parameterized")()               | Return True iff the instruction is parameterized.                                                                                                                                                   |
| [`shift`](#qiskit.pulse.instructions.Snapshot.shift "qiskit.pulse.instructions.Snapshot.shift")(time\[, name])                                   | Return a new schedule shifted forward by time.                                                                                                                                                      |

## Attributes

|                                                                                                                      |                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`channel`](#qiskit.pulse.instructions.Snapshot.channel "qiskit.pulse.instructions.Snapshot.channel")                | Return the [`Channel`](qiskit.pulse.channels#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel") that this instruction is scheduled on; trivially, a `SnapshotChannel`. |
| [`channels`](#qiskit.pulse.instructions.Snapshot.channels "qiskit.pulse.instructions.Snapshot.channels")             | Returns the channels that this schedule uses.                                                                                                                                      |
| [`duration`](#qiskit.pulse.instructions.Snapshot.duration "qiskit.pulse.instructions.Snapshot.duration")             | Duration of this instruction.                                                                                                                                                      |
| [`id`](#qiskit.pulse.instructions.Snapshot.id "qiskit.pulse.instructions.Snapshot.id")                               | Unique identifier for this instruction.                                                                                                                                            |
| [`instructions`](#qiskit.pulse.instructions.Snapshot.instructions "qiskit.pulse.instructions.Snapshot.instructions") | Iterable for getting instructions from Schedule tree.                                                                                                                              |
| [`label`](#qiskit.pulse.instructions.Snapshot.label "qiskit.pulse.instructions.Snapshot.label")                      | Label of snapshot.                                                                                                                                                                 |
| [`name`](#qiskit.pulse.instructions.Snapshot.name "qiskit.pulse.instructions.Snapshot.name")                         | Name of this instruction.                                                                                                                                                          |
| [`operands`](#qiskit.pulse.instructions.Snapshot.operands "qiskit.pulse.instructions.Snapshot.operands")             | Return instruction operands.                                                                                                                                                       |
| [`parameters`](#qiskit.pulse.instructions.Snapshot.parameters "qiskit.pulse.instructions.Snapshot.parameters")       | Parameters which determine the instruction behavior.                                                                                                                               |
| [`start_time`](#qiskit.pulse.instructions.Snapshot.start_time "qiskit.pulse.instructions.Snapshot.start_time")       | Relative begin time of this instruction.                                                                                                                                           |
| [`stop_time`](#qiskit.pulse.instructions.Snapshot.stop_time "qiskit.pulse.instructions.Snapshot.stop_time")          | Relative end time of this instruction.                                                                                                                                             |
| [`type`](#qiskit.pulse.instructions.Snapshot.type "qiskit.pulse.instructions.Snapshot.type")                         | Type of snapshot.                                                                                                                                                                  |

<span id="undefined" />

`append(schedule, name=None)`

Return a new [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`.

**Parameters**

*   **schedule** (*Union\['Schedule', 'Instruction']*) – Schedule or instruction to be appended
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Returns**

A new schedule with `schedule` a this instruction at t=0.

**Return type**

[Schedule](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule")

<span id="undefined" />

`assign_parameters(value_dict)`

Modify and return self with parameters assigned according to the input.

**Parameters**

**value\_dict** (`Dict`\[`ParameterExpression`, `Union`\[`ParameterExpression`, `float`]]) – A mapping from Parameters to either numeric values or another Parameter expression.

**Return type**

`Instruction`

**Returns**

Self with updated parameters.

<span id="undefined" />

`ch_duration(*channels)`

Return duration of the supplied channels in this Instruction.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

<span id="undefined" />

`ch_start_time(*channels)`

Return minimum start time for supplied channels.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

<span id="undefined" />

`ch_stop_time(*channels)`

Return maximum start time for supplied channels.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

<span id="undefined" />

`property channel`

Return the [`Channel`](qiskit.pulse.channels#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel") that this instruction is scheduled on; trivially, a `SnapshotChannel`.

**Return type**

[`SnapshotChannel`](qiskit.pulse.channels#qiskit.pulse.channels.SnapshotChannel "qiskit.pulse.channels.SnapshotChannel")

<span id="undefined" />

`property channels`

Returns the channels that this schedule uses.

**Return type**

`Tuple`\[[`SnapshotChannel`](qiskit.pulse.channels#qiskit.pulse.channels.SnapshotChannel "qiskit.pulse.channels.SnapshotChannel")]

<span id="undefined" />

`draw(dt=1, style=None, filename=None, interp_method=None, scale=1, plot_all=False, plot_range=None, interactive=False, table=True, label=False, framechange=True, channels=None)`

Plot the instruction.

**Parameters**

*   **dt** (`float`) – Time interval of samples
*   **style** (*Optional\[SchedStyle]*) – A style sheet to configure plot appearance
*   **filename** (`Optional`\[`str`]) – Name required to save pulse image
*   **interp\_method** (`Optional`\[`Callable`]) – A function for interpolation
*   **scale** (`float`) – Relative visual scaling of waveform amplitudes
*   **plot\_all** (`bool`) – Plot empty channels
*   **plot\_range** (`Optional`\[`Tuple`\[`float`]]) – A tuple of time range to plot
*   **interactive** (`bool`) – When set true show the circuit in a new window (this depends on the matplotlib backend being used supporting this)
*   **table** (`bool`) – Draw event table for supported instructions
*   **label** (`bool`) – Label individual instructions
*   **framechange** (`bool`) – Add framechange indicators
*   **channels** (`Optional`\[`List`\[[`Channel`](qiskit.pulse.channels#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")]]) – A list of channel names to plot

**Returns**

A matplotlib figure object of the pulse schedule

**Return type**

matplotlib.figure

<span id="undefined" />

`property duration`

Duration of this instruction.

**Return type**

`int`

<span id="undefined" />

`flatten()`

Return itself as already single instruction.

**Return type**

`Instruction`

<span id="undefined" />

`property id`

Unique identifier for this instruction.

**Return type**

`int`

<span id="undefined" />

`insert(start_time, schedule, name=None)`

Return a new [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.

**Parameters**

*   **start\_time** (`int`) – Time to insert the schedule schedule
*   **schedule** (*Union\['Schedule', 'Instruction']*) – Schedule or instruction to insert
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Returns**

A new schedule with `schedule` inserted with this instruction at t=0.

**Return type**

[Schedule](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule")

<span id="undefined" />

`property instructions`

Iterable for getting instructions from Schedule tree.

**Return type**

`Tuple`\[`Tuple`\[`int`, `Instruction`]]

<span id="undefined" />

`is_parameterized()`

Return True iff the instruction is parameterized.

**Return type**

`bool`

<span id="undefined" />

`property label`

Label of snapshot.

**Return type**

`str`

<span id="undefined" />

`property name`

Name of this instruction.

**Return type**

`str`

<span id="undefined" />

`property operands`

Return instruction operands.

**Return type**

`Tuple`

<span id="undefined" />

`property parameters`

Parameters which determine the instruction behavior.

**Return type**

`Set`

<span id="undefined" />

`shift(time, name=None)`

Return a new schedule shifted forward by time.

**Parameters**

*   **time** (`int`) – Time to shift by
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Returns**

The shifted schedule.

**Return type**

[Schedule](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule")

<span id="undefined" />

`property start_time`

Relative begin time of this instruction.

**Return type**

`int`

<span id="undefined" />

`property stop_time`

Relative end time of this instruction.

**Return type**

`int`

<span id="undefined" />

`property type`

Type of snapshot.

**Return type**

`str`
