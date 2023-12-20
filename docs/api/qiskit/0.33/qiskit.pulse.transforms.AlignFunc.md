# AlignFunc

<span id="undefined" />

`AlignFunc(duration, func)`

Bases: `qiskit.pulse.transforms.alignments.AlignmentKind`

Allocate instructions at position specified by callback function.

The position is specified for each instruction of index `j` as a fractional coordinate in \[0, 1] within the specified duration.

Instructions played on different channels are also arranged in a sequence. This alignment is convenient to create dynamical decoupling sequences such as UDD.

For example, UDD sequence with 10 pulses can be specified with following function.

```python
def udd10_pos(j):
return np.sin(np.pi*j/(2*10 + 2))**2
```

Create new equispaced context.

**Parameters**

*   **duration** (`Union`\[`int`, `ParameterExpression`]) – Duration of this context. This should be larger than the schedule duration. If the specified duration is shorter than the schedule duration, no alignment is performed and the input schedule is just returned. This duration can be parametrized.
*   **func** (`Callable`) – A function that takes an index of sub-schedule and returns the fractional coordinate of of that sub-schedule. The returned value should be defined within \[0, 1]. The pulse index starts from 1.

## Methods

|                                                                                                                                              |                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| [`align`](qiskit.pulse.transforms.AlignFunc.align#qiskit.pulse.transforms.AlignFunc.align "qiskit.pulse.transforms.AlignFunc.align")         | Reallocate instructions according to the policy. |
| [`to_dict`](qiskit.pulse.transforms.AlignFunc.to_dict#qiskit.pulse.transforms.AlignFunc.to_dict "qiskit.pulse.transforms.AlignFunc.to_dict") | Returns dictionary to represent this alignment.  |

## Attributes

<span id="undefined" />

### duration

Return context duration.

<span id="undefined" />

### is\_sequential

`= True`
