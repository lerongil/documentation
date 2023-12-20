# PassManagerConfig

<span id="undefined" />

`PassManagerConfig(initial_layout=None, basis_gates=None, inst_map=None, coupling_map=None, layout_method=None, routing_method=None, translation_method=None, scheduling_method=None, instruction_durations=None, backend_properties=None, approximation_degree=None, seed_transpiler=None, timing_constraints=None, unitary_synthesis_method='default', unitary_synthesis_plugin_config=None, target=None)`

Bases: `object`

Pass Manager Configuration.

Initialize a PassManagerConfig object

**Parameters**

*   **initial\_layout** ([*Layout*](qiskit.transpiler.Layout#qiskit.transpiler.Layout "qiskit.transpiler.Layout")) – Initial position of virtual qubits on physical qubits.
*   **basis\_gates** (*list*) – List of basis gate names to unroll to.
*   **inst\_map** ([*InstructionScheduleMap*](qiskit.pulse.InstructionScheduleMap#qiskit.pulse.InstructionScheduleMap "qiskit.pulse.InstructionScheduleMap")) – Mapping object that maps gate to schedule.
*   **coupling\_map** ([*CouplingMap*](qiskit.transpiler.CouplingMap#qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap")) – Directed graph represented a coupling map.
*   **layout\_method** (*str*) – the pass to use for choosing initial qubit placement.
*   **routing\_method** (*str*) – the pass to use for routing qubits on the architecture.
*   **translation\_method** (*str*) – the pass to use for translating gates to basis\_gates.
*   **scheduling\_method** (*str*) – the pass to use for scheduling instructions.
*   **instruction\_durations** ([*InstructionDurations*](qiskit.transpiler.InstructionDurations#qiskit.transpiler.InstructionDurations "qiskit.transpiler.InstructionDurations")) – Dictionary of duration (in dt) for each instruction.
*   **backend\_properties** ([*BackendProperties*](qiskit.providers.models.BackendProperties#qiskit.providers.models.BackendProperties "qiskit.providers.models.BackendProperties")) – Properties returned by a backend, including information on gate errors, readout errors, qubit coherence times, etc.
*   **approximation\_degree** (*float*) – heuristic dial used for circuit approximation (1.0=no approximation, 0.0=maximal approximation)
*   **seed\_transpiler** (*int*) – Sets random seed for the stochastic parts of the transpiler.
*   **timing\_constraints** (*TimingConstraints*) – Hardware time alignment restrictions.
*   **unitary\_synthesis\_method** (*str*) – The string method to use for the [`UnitarySynthesis`](qiskit.transpiler.passes.UnitarySynthesis#qiskit.transpiler.passes.UnitarySynthesis "qiskit.transpiler.passes.UnitarySynthesis") pass. Will search installed plugins for a valid method.
*   **target** ([*Target*](qiskit.transpiler.Target#qiskit.transpiler.Target "qiskit.transpiler.Target")) – The backend target

## Methods

|                                                                                                                                                                        |                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [`from_backend`](qiskit.transpiler.PassManagerConfig.from_backend#qiskit.transpiler.PassManagerConfig.from_backend "qiskit.transpiler.PassManagerConfig.from_backend") | Construct a configuration based on a backend and user input. |
