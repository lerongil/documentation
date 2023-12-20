# qiskit.transpiler.passes.RZXCalibrationBuilder

<span id="undefined" />

`RZXCalibrationBuilder(backend)`

Creates calibrations for RZXGate(theta) by stretching and compressing Gaussian square pulses in the CX gate. This is done by retrieving (for a given pair of qubits) the CX schedule in the instruction schedule map of the backend defaults. The CX schedule must be an echoed cross-resonance gate optionally with rotary tones. The cross-resonance drive tones and rotary pulses must be Gaussian square pulses. The width of the Gaussian square pulse is adjusted so as to match the desired rotation angle. If the rotation angle is small such that the width disappears then the amplitude of the zero width Gaussian square pulse (i.e. a Gaussian) is reduced to reach the target rotation angle. Additional details can be found in [https://arxiv.org/abs/2012.11660](https://arxiv.org/abs/2012.11660).

Initializes a RZXGate calibration builder.

**Parameters**

**backend** (*\<module 'qiskit.providers.basebackend' from '/home/computertreker/git/qiskit/qiskit/.tox/docs/lib/python3.7/site-packages/qiskit/providers/basebackend.py'>*) – Backend for which to construct the gates.

**Raises**

**QiskitError** – if open pulse is not supported by the backend.

<span id="undefined" />

`__init__(backend)`

Initializes a RZXGate calibration builder.

**Parameters**

**backend** (*\<module 'qiskit.providers.basebackend' from '/home/computertreker/git/qiskit/qiskit/.tox/docs/lib/python3.7/site-packages/qiskit/providers/basebackend.py'>*) – Backend for which to construct the gates.

**Raises**

**QiskitError** – if open pulse is not supported by the backend.

## Methods

|                                                                                                                                                                                 |                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| [`__init__`](#qiskit.transpiler.passes.RZXCalibrationBuilder.__init__ "qiskit.transpiler.passes.RZXCalibrationBuilder.__init__")(backend)                                       | Initializes a RZXGate calibration builder. |
| [`get_calibration`](#qiskit.transpiler.passes.RZXCalibrationBuilder.get_calibration "qiskit.transpiler.passes.RZXCalibrationBuilder.get_calibration")(params, qubits)           | **type params**`List`                      |
| [`name`](#qiskit.transpiler.passes.RZXCalibrationBuilder.name "qiskit.transpiler.passes.RZXCalibrationBuilder.name")()                                                          | Return the name of the pass.               |
| [`rescale_cr_inst`](#qiskit.transpiler.passes.RZXCalibrationBuilder.rescale_cr_inst "qiskit.transpiler.passes.RZXCalibrationBuilder.rescale_cr_inst")(instruction, theta\[, …]) | **type instruction**`Play`                 |
| [`run`](#qiskit.transpiler.passes.RZXCalibrationBuilder.run "qiskit.transpiler.passes.RZXCalibrationBuilder.run")(dag)                                                          | Run the calibration adder pass on dag.     |
| [`supported`](#qiskit.transpiler.passes.RZXCalibrationBuilder.supported "qiskit.transpiler.passes.RZXCalibrationBuilder.supported")(node\_op)                                   | **type node\_op**`DAGNode`                 |

## Attributes

|                                                                                                                                                                            |                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`is_analysis_pass`](#qiskit.transpiler.passes.RZXCalibrationBuilder.is_analysis_pass "qiskit.transpiler.passes.RZXCalibrationBuilder.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`is_transformation_pass`](#qiskit.transpiler.passes.RZXCalibrationBuilder.is_transformation_pass "qiskit.transpiler.passes.RZXCalibrationBuilder.is_transformation_pass") | Check if the pass is a transformation pass. |

<span id="undefined" />

`get_calibration(params, qubits)`

**Parameters**

*   **params** (`List`) – Parameters of the RZXGate(theta). I.e. params\[0] is theta.
*   **qubits** (`List`) – List of qubits for which to get the schedules. The first qubit is the control and the second is the target.

**Returns**

The calibration schedule for the RZXGate(theta).

**Return type**

schedule

**Raises**

**QiskitError** – if the control and target qubits cannot be identified or the backend does not support cx between the qubits.

<span id="undefined" />

`property is_analysis_pass`

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

`property is_transformation_pass`

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

<span id="undefined" />

`name()`

Return the name of the pass.

<span id="undefined" />

`static rescale_cr_inst(instruction, theta, sample_mult=16)`

**Parameters**

*   **instruction** (`Play`) – The instruction from which to create a new shortened or lengthened pulse.
*   **theta** (`float`) – desired angle, pi/2 is assumed to be the angle that the pulse in the given play instruction implements.
*   **sample\_mult** (`int`) – All pulses must be a multiple of sample\_mult.

**Returns**

**The play instruction with the stretched compressed**

GaussianSquare pulse.

**Return type**

[qiskit.pulse.Play](qiskit.pulse.Play#qiskit.pulse.Play "qiskit.pulse.Play")

**Raises**

**QiskitError** – if the pulses are not GaussianSquare.

<span id="undefined" />

`run(dag)`

Run the calibration adder pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – DAG to schedule.

**Returns**

A DAG with calibrations added to it.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

<span id="undefined" />

`supported(node_op)`

**Parameters**

**node\_op** (`DAGNode`) – The node from the dag dep.

**Returns**

True if the node is a RZXGate.

**Return type**

match
