# PulseQobjInstruction

<span id="undefined" />

`PulseQobjInstruction(name, t0, ch=None, conditional=None, val=None, phase=None, duration=None, qubits=None, memory_slot=None, register_slot=None, kernels=None, discriminators=None, label=None, type=None, pulse_shape=None, parameters=None, frequency=None)`

Bases: `object`

A class representing a single instruction in an PulseQobj Experiment.

Instantiate a new PulseQobjInstruction object.

**Parameters**

*   **name** (*str*) – The name of the instruction
*   **t0** (*int*) – Pulse start time in integer **dt** units.
*   **ch** (*str*) – The channel to apply the pulse instruction.
*   **conditional** (*int*) – The register to use for a conditional for this instruction
*   **val** (*complex*) – Complex value to apply, bounded by an absolute value of 1.
*   **phase** (*float*) – if a `fc` instruction, the frame change phase in radians.
*   **frequency** (*float*) – if a `sf` instruction, the frequency in Hz.
*   **duration** (*int*) – The duration of the pulse in **dt** units.
*   **qubits** (*list*) – A list of `int` representing the qubits the instruction operates on
*   **memory\_slot** (*list*) – If a `measure` instruction this is a list of `int` containing the list of memory slots to store the measurement results in (must be the same length as qubits). If a `bfunc` instruction this is a single `int` of the memory slot to store the boolean function result in.
*   **register\_slot** (*list*) – If a `measure` instruction this is a list of `int` containing the list of register slots in which to store the measurement results (must be the same length as qubits). If a `bfunc` instruction this is a single `int` of the register slot in which to store the result.
*   **kernels** (*list*) – List of [`QobjMeasurementOption`](qiskit.qobj.QobjMeasurementOption#qiskit.qobj.QobjMeasurementOption "qiskit.qobj.QobjMeasurementOption") objects defining the measurement kernels and set of parameters if the measurement level is 1 or 2. Only used for `acquire` instructions.
*   **discriminators** (*list*) – A list of [`QobjMeasurementOption`](qiskit.qobj.QobjMeasurementOption#qiskit.qobj.QobjMeasurementOption "qiskit.qobj.QobjMeasurementOption") used to set the discriminators to be used if the measurement level is 2. Only used for `acquire` instructions.
*   **label** (*str*) – Label of instruction
*   **type** (*str*) – Type of instruction
*   **pulse\_shape** (*str*) – The shape of the parametric pulse
*   **parameters** (*dict*) – The parameters for a parametric pulse

## Methods

|                                                                                                                                                   |                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| [`from_dict`](qiskit.qobj.PulseQobjInstruction.from_dict#qiskit.qobj.PulseQobjInstruction.from_dict "qiskit.qobj.PulseQobjInstruction.from_dict") | Create a new PulseQobjExperimentConfig object from a dictionary. |
| [`to_dict`](qiskit.qobj.PulseQobjInstruction.to_dict#qiskit.qobj.PulseQobjInstruction.to_dict "qiskit.qobj.PulseQobjInstruction.to_dict")         | Return a dictionary format representation of the Instruction.    |
