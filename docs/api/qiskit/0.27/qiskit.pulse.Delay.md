# qiskit.pulse.Delay

<span id="undefined" />

`Delay(duration, channel, name=None)`

A blocking instruction with no other effect. The delay is used for aligning and scheduling other instructions.

## Example

To schedule an instruction at time = 10, on a channel assigned to the variable `channel`, the following could be used:

```python
sched = Schedule(name="Delay instruction example")
sched += Delay(10, channel)
sched += Gaussian(duration, amp, sigma, channel)
```

The `channel` will output no signal from time=0 up until time=10.

Create a new delay instruction.

No other instruction may be scheduled within a `Delay`.

**Parameters**

*   **duration** (`Union`\[`int`, `ParameterExpression`]) – Length of time of the delay in terms of dt.
*   **channel** ([`Channel`](qiskit.pulse.channels#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")) – The channel that will have the delay.
*   **name** (`Optional`\[`str`]) – Name of the delay for display purposes.

<span id="undefined" />

`__init__(duration, channel, name=None)`

Create a new delay instruction.

No other instruction may be scheduled within a `Delay`.

**Parameters**

*   **duration** (`Union`\[`int`, `ParameterExpression`]) – Length of time of the delay in terms of dt.
*   **channel** ([`Channel`](qiskit.pulse.channels#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")) – The channel that will have the delay.
*   **name** (`Optional`\[`str`]) – Name of the delay for display purposes.

## Methods

|                                                                                                                  |                                                                                                                                                                                                     |
| ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.pulse.Delay.__init__ "qiskit.pulse.Delay.__init__")(duration, channel\[, name])             | Create a new delay instruction.                                                                                                                                                                     |
| [`append`](#qiskit.pulse.Delay.append "qiskit.pulse.Delay.append")(schedule\[, name])                            | Return a new [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`. |
| [`assign_parameters`](#qiskit.pulse.Delay.assign_parameters "qiskit.pulse.Delay.assign_parameters")(value\_dict) | Modify and return self with parameters assigned according to the input.                                                                                                                             |
| [`ch_duration`](#qiskit.pulse.Delay.ch_duration "qiskit.pulse.Delay.ch_duration")(\*channels)                    | Return duration of the supplied channels in this Instruction.                                                                                                                                       |
| [`ch_start_time`](#qiskit.pulse.Delay.ch_start_time "qiskit.pulse.Delay.ch_start_time")(\*channels)              | Return minimum start time for supplied channels.                                                                                                                                                    |
| [`ch_stop_time`](#qiskit.pulse.Delay.ch_stop_time "qiskit.pulse.Delay.ch_stop_time")(\*channels)                 | Return maximum start time for supplied channels.                                                                                                                                                    |
| [`draw`](#qiskit.pulse.Delay.draw "qiskit.pulse.Delay.draw")(\[dt, style, filename, interp\_method, …])          | Plot the instruction.                                                                                                                                                                               |
| [`flatten`](#qiskit.pulse.Delay.flatten "qiskit.pulse.Delay.flatten")()                                          | Return itself as already single instruction.                                                                                                                                                        |
| [`insert`](#qiskit.pulse.Delay.insert "qiskit.pulse.Delay.insert")(start\_time, schedule\[, name])               | Return a new [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.                                              |
| [`is_parameterized`](#qiskit.pulse.Delay.is_parameterized "qiskit.pulse.Delay.is_parameterized")()               | Return `True` iff the instruction is parameterized.                                                                                                                                                 |
| [`shift`](#qiskit.pulse.Delay.shift "qiskit.pulse.Delay.shift")(time\[, name])                                   | Return a new schedule shifted forward by time.                                                                                                                                                      |

## Attributes

|                                                                                      |                                                                                                                                                    |
| ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`channel`](#qiskit.pulse.Delay.channel "qiskit.pulse.Delay.channel")                | Return the [`Channel`](qiskit.pulse.channels#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel") that this instruction is scheduled on. |
| [`channels`](#qiskit.pulse.Delay.channels "qiskit.pulse.Delay.channels")             | Returns the channels that this schedule uses.                                                                                                      |
| [`duration`](#qiskit.pulse.Delay.duration "qiskit.pulse.Delay.duration")             | Duration of this instruction.                                                                                                                      |
| [`id`](#qiskit.pulse.Delay.id "qiskit.pulse.Delay.id")                               | Unique identifier for this instruction.                                                                                                            |
| [`instructions`](#qiskit.pulse.Delay.instructions "qiskit.pulse.Delay.instructions") | Iterable for getting instructions from Schedule tree.                                                                                              |
| [`name`](#qiskit.pulse.Delay.name "qiskit.pulse.Delay.name")                         | Name of this instruction.                                                                                                                          |
| [`operands`](#qiskit.pulse.Delay.operands "qiskit.pulse.Delay.operands")             | Return instruction operands.                                                                                                                       |
| [`parameters`](#qiskit.pulse.Delay.parameters "qiskit.pulse.Delay.parameters")       | Parameters which determine the instruction behavior.                                                                                               |
| [`start_time`](#qiskit.pulse.Delay.start_time "qiskit.pulse.Delay.start_time")       | Relative begin time of this instruction.                                                                                                           |
| [`stop_time`](#qiskit.pulse.Delay.stop_time "qiskit.pulse.Delay.stop_time")          | Relative end time of this instruction.                                                                                                             |

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

[`Channel`](qiskit.pulse.channels#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")

<span id="undefined" />

`property channels`

Returns the channels that this schedule uses.

**Return type**

`Tuple`\[[`Channel`](qiskit.pulse.channels#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")]

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

`Union`\[`int`, `ParameterExpression`]

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

Return `True` iff the instruction is parameterized.

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
