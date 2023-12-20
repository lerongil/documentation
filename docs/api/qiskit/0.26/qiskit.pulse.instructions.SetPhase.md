# qiskit.pulse.instructions.SetPhase

<span id="undefined" />

`SetPhase(phase, channel, name=None)`

The set phase instruction sets the phase of the proceeding pulses on that channel to `phase` radians.

In particular, a PulseChannel creates pulses of the form

$$
Re[\exp(i 2\pi f jdt + \phi) d_j]
$$

The `SetPhase` instruction sets $\phi$ to the instruction’s `phase` operand.

Instantiate a set phase instruction, setting the output signal phase on `channel` to `phase` \[radians].

**Parameters**

*   **phase** (`Union`\[`complex`, `ParameterExpression`]) – The rotation angle in radians.
*   **channel** ([`PulseChannel`](qiskit.pulse.channels#qiskit.pulse.channels.PulseChannel "qiskit.pulse.channels.PulseChannel")) – The channel this instruction operates on.
*   **name** (`Optional`\[`str`]) – Display name for this instruction.

<span id="undefined" />

`__init__(phase, channel, name=None)`

Instantiate a set phase instruction, setting the output signal phase on `channel` to `phase` \[radians].

**Parameters**

*   **phase** (`Union`\[`complex`, `ParameterExpression`]) – The rotation angle in radians.
*   **channel** ([`PulseChannel`](qiskit.pulse.channels#qiskit.pulse.channels.PulseChannel "qiskit.pulse.channels.PulseChannel")) – The channel this instruction operates on.
*   **name** (`Optional`\[`str`]) – Display name for this instruction.

## Methods

|                                                                                                                                                  |                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.pulse.instructions.SetPhase.__init__ "qiskit.pulse.instructions.SetPhase.__init__")(phase, channel\[, name])                | Instantiate a set phase instruction, setting the output signal phase on `channel` to `phase` \[radians].                                                                                            |
| [`append`](#qiskit.pulse.instructions.SetPhase.append "qiskit.pulse.instructions.SetPhase.append")(schedule\[, name])                            | Return a new [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`. |
| [`assign_parameters`](#qiskit.pulse.instructions.SetPhase.assign_parameters "qiskit.pulse.instructions.SetPhase.assign_parameters")(value\_dict) | Modify and return self with parameters assigned according to the input.                                                                                                                             |
| [`ch_duration`](#qiskit.pulse.instructions.SetPhase.ch_duration "qiskit.pulse.instructions.SetPhase.ch_duration")(\*channels)                    | Return duration of the supplied channels in this Instruction.                                                                                                                                       |
| [`ch_start_time`](#qiskit.pulse.instructions.SetPhase.ch_start_time "qiskit.pulse.instructions.SetPhase.ch_start_time")(\*channels)              | Return minimum start time for supplied channels.                                                                                                                                                    |
| [`ch_stop_time`](#qiskit.pulse.instructions.SetPhase.ch_stop_time "qiskit.pulse.instructions.SetPhase.ch_stop_time")(\*channels)                 | Return maximum start time for supplied channels.                                                                                                                                                    |
| [`draw`](#qiskit.pulse.instructions.SetPhase.draw "qiskit.pulse.instructions.SetPhase.draw")(\[dt, style, filename, interp\_method, …])          | Plot the instruction.                                                                                                                                                                               |
| [`flatten`](#qiskit.pulse.instructions.SetPhase.flatten "qiskit.pulse.instructions.SetPhase.flatten")()                                          | Return itself as already single instruction.                                                                                                                                                        |
| [`insert`](#qiskit.pulse.instructions.SetPhase.insert "qiskit.pulse.instructions.SetPhase.insert")(start\_time, schedule\[, name])               | Return a new [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.                                              |
| [`is_parameterized`](#qiskit.pulse.instructions.SetPhase.is_parameterized "qiskit.pulse.instructions.SetPhase.is_parameterized")()               | Return True iff the instruction is parameterized.                                                                                                                                                   |
| [`shift`](#qiskit.pulse.instructions.SetPhase.shift "qiskit.pulse.instructions.SetPhase.shift")(time\[, name])                                   | Return a new schedule shifted forward by time.                                                                                                                                                      |

## Attributes

|                                                                                                                      |                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`channel`](#qiskit.pulse.instructions.SetPhase.channel "qiskit.pulse.instructions.SetPhase.channel")                | Return the [`Channel`](qiskit.pulse.channels#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel") that this instruction is scheduled on. |
| [`channels`](#qiskit.pulse.instructions.SetPhase.channels "qiskit.pulse.instructions.SetPhase.channels")             | Returns the channels that this schedule uses.                                                                                                      |
| [`duration`](#qiskit.pulse.instructions.SetPhase.duration "qiskit.pulse.instructions.SetPhase.duration")             | Duration of this instruction.                                                                                                                      |
| [`id`](#qiskit.pulse.instructions.SetPhase.id "qiskit.pulse.instructions.SetPhase.id")                               | Unique identifier for this instruction.                                                                                                            |
| [`instructions`](#qiskit.pulse.instructions.SetPhase.instructions "qiskit.pulse.instructions.SetPhase.instructions") | Iterable for getting instructions from Schedule tree.                                                                                              |
| [`name`](#qiskit.pulse.instructions.SetPhase.name "qiskit.pulse.instructions.SetPhase.name")                         | Name of this instruction.                                                                                                                          |
| [`operands`](#qiskit.pulse.instructions.SetPhase.operands "qiskit.pulse.instructions.SetPhase.operands")             | Return instruction operands.                                                                                                                       |
| [`parameters`](#qiskit.pulse.instructions.SetPhase.parameters "qiskit.pulse.instructions.SetPhase.parameters")       | Parameters which determine the instruction behavior.                                                                                               |
| [`phase`](#qiskit.pulse.instructions.SetPhase.phase "qiskit.pulse.instructions.SetPhase.phase")                      | Return the rotation angle enacted by this instruction in radians.                                                                                  |
| [`start_time`](#qiskit.pulse.instructions.SetPhase.start_time "qiskit.pulse.instructions.SetPhase.start_time")       | Relative begin time of this instruction.                                                                                                           |
| [`stop_time`](#qiskit.pulse.instructions.SetPhase.stop_time "qiskit.pulse.instructions.SetPhase.stop_time")          | Relative end time of this instruction.                                                                                                             |

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

**value\_dict** (`Dict`\[`ParameterExpression`, `Union`\[`ParameterExpression`, `float`, `int`]]) – A mapping from Parameters to either numeric values or another Parameter expression.

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

Return the [`Channel`](qiskit.pulse.channels#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel") that this instruction is scheduled on.

**Return type**

[`PulseChannel`](qiskit.pulse.channels#qiskit.pulse.channels.PulseChannel "qiskit.pulse.channels.PulseChannel")

<span id="undefined" />

`property channels`

Returns the channels that this schedule uses.

**Return type**

`Tuple`\[[`PulseChannel`](qiskit.pulse.channels#qiskit.pulse.channels.PulseChannel "qiskit.pulse.channels.PulseChannel")]

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

`property phase`

Return the rotation angle enacted by this instruction in radians.

**Return type**

`Union`\[`complex`, `ParameterExpression`]

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
