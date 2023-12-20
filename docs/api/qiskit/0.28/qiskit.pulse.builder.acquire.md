# qiskit.pulse.builder.acquire

<span id="undefined" />

`acquire(duration, qubit_or_channel, register, **metadata)`

Acquire for a `duration` on a `channel` and store the result in a `register`.

Examples:

```python
from qiskit import pulse

d0 = pulse.MeasureChannel(0)
mem0 = pulse.MemorySlot(0)

with pulse.build() as pulse_prog:
    pulse.acquire(100, d0, mem0)

    # measurement metadata
    kernel = pulse.configuration.Kernel('linear_discriminator')
    pulse.acquire(100, d0, mem0, kernel=kernel)
```

<Admonition title="Note" type="note">
  The type of data acquire will depend on the execution `meas_level`.
</Admonition>

**Parameters**

*   **duration** (`int`) – Duration to acquire data for
*   **qubit\_or\_channel** (`Union`\[`int`, [`AcquireChannel`](qiskit.pulse.channels#qiskit.pulse.channels.AcquireChannel "qiskit.pulse.channels.AcquireChannel")]) – Either the qubit to acquire data for or the specific [`AcquireChannel`](qiskit.pulse.channels#qiskit.pulse.channels.AcquireChannel "qiskit.pulse.channels.AcquireChannel") to acquire on.
*   **register** (`NewType()`(`StorageLocation`, `Union`\[[`MemorySlot`](qiskit.pulse.channels#qiskit.pulse.channels.MemorySlot "qiskit.pulse.channels.MemorySlot"), [`RegisterSlot`](qiskit.pulse.channels#qiskit.pulse.channels.RegisterSlot "qiskit.pulse.channels.RegisterSlot")])) – Location to store measured result.
*   **metadata** (`Union`\[`Kernel`, `Discriminator`]) – Additional metadata for measurement. See [`Acquire`](qiskit.pulse.instructions.Acquire#qiskit.pulse.instructions.Acquire "qiskit.pulse.instructions.Acquire") for more information.

**Raises**

**exceptions.PulseError** – If the register type is not supported.
