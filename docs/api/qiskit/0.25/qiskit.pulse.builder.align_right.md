# qiskit.pulse.builder.align\_right

<span id="undefined" />

`align_right()`

Right alignment pulse scheduling context.

Pulse instructions within this context are scheduled as late as possible by shifting them right to the latest available time.

Examples:

```python
from qiskit import pulse

d0 = pulse.DriveChannel(0)
d1 = pulse.DriveChannel(1)

with pulse.build() as pulse_prog:
    with pulse.align_right():
        # this pulse will start at t=0
        pulse.play(pulse.Constant(100, 1.0), d0)
        # this pulse will start at t=80
        pulse.play(pulse.Constant(20, 1.0), d1)

assert pulse_prog.ch_stop_time(d0) == pulse_prog.ch_stop_time(d1)
```

**Return type**

`AbstractContextManager`\[`None`]
