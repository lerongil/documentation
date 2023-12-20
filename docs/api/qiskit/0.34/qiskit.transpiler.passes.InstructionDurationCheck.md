# InstructionDurationCheck

<span id="undefined" />

`InstructionDurationCheck(acquire_alignment=1, pulse_alignment=1)`

Bases: `qiskit.transpiler.basepasses.AnalysisPass`

Duration validation pass for reschedule.

This pass investigates the input quantum circuit and checks if the circuit requres rescheduling for execution. Note that this pass can be triggered without scheduling. This pass only checks the duration of delay instructions and user defined pulse gates, which report duration values without pre-scheduling.

This pass assumes backend supported instructions, i.e. basis gates, have no violation of the hardware alignment constraints, which is true in general.

Create new duration validation pass.

The alignment values depend on the control electronics of your quantum processor.

**Parameters**

*   **acquire\_alignment** (`int`) – Integer number representing the minimum time resolution to trigger acquisition instruction in units of `dt`.
*   **pulse\_alignment** (`int`) – Integer number representing the minimum time resolution to trigger gate instruction in units of `dt`.

## Methods

|                                                                                                                                                                                  |                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| [`name`](qiskit.transpiler.passes.InstructionDurationCheck.name#qiskit.transpiler.passes.InstructionDurationCheck.name "qiskit.transpiler.passes.InstructionDurationCheck.name") | Return the name of the pass.    |
| [`run`](qiskit.transpiler.passes.InstructionDurationCheck.run#qiskit.transpiler.passes.InstructionDurationCheck.run "qiskit.transpiler.passes.InstructionDurationCheck.run")     | Run duration validation passes. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
