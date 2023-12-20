# qiskit.pulse.builder.barrier

<span id="undefined" />

`barrier(*channels_or_qubits, name=None)`

Barrier directive for a set of channels and qubits.

This directive prevents the compiler from moving instructions across the barrier. Consider the case where we want to enforce that one pulse happens after another on separate channels, this can be done with:

```python
from qiskit import pulse
from qiskit.test.mock import FakeOpenPulse2Q

backend = FakeOpenPulse2Q()

d0 = pulse.DriveChannel(0)
d1 = pulse.DriveChannel(1)

with pulse.build(backend) as barrier_pulse_prog:
    pulse.play(pulse.Constant(10, 1.0), d0)
    pulse.barrier(d0, d1)
    pulse.play(pulse.Constant(10, 1.0), d1)
```

Of course this could have been accomplished with:

```python
from qiskit.pulse import transforms

with pulse.build(backend) as aligned_pulse_prog:
    with pulse.align_sequential():
        pulse.play(pulse.Constant(10, 1.0), d0)
        pulse.play(pulse.Constant(10, 1.0), d1)

barrier_pulse_prog = transforms.target_qobj_transform(barrier_pulse_prog)
aligned_pulse_prog = transforms.target_qobj_transform(aligned_pulse_prog)

assert barrier_pulse_prog == aligned_pulse_prog
```

The barrier allows the pulse compiler to take care of more advanced scheduling alignment operations across channels. For example in the case where we are calling an outside circuit or schedule and want to align a pulse at the end of one call:

```python
import math

d0 = pulse.DriveChannel(0)

with pulse.build(backend) as pulse_prog:
    with pulse.align_right():
        pulse.x(1)
        # Barrier qubit 1 and d0.
        pulse.barrier(1, d0)
        # Due to barrier this will play before the gate on qubit 1.
        pulse.play(pulse.Constant(10, 1.0), d0)
        # This will end at the same time as the pulse above due to
        # the barrier.
        pulse.x(1)
```

<Admonition title="Note" type="note">
  Requires the active builder context to have a backend set if qubits are barriered on.
</Admonition>

**Parameters**

*   **channels\_or\_qubits** (`Union`\[[`Channel`](qiskit.pulse.channels#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel"), `int`]) – Channels or qubits to barrier.
*   **name** (`Optional`\[`str`]) – Name for the barrier
