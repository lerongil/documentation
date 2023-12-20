# qiskit.compiler.schedule

<span id="undefined" />

`schedule(circuits, backend=None, inst_map=None, meas_map=None, dt=None, method=None)`

Schedule a circuit to a pulse `Schedule`, using the backend, according to any specified methods. Supported methods are documented in [`qiskit.scheduler.schedule_circuit`](qiskit.scheduler.schedule_circuit#module-qiskit.scheduler.schedule_circuit "qiskit.scheduler.schedule_circuit").

**Parameters**

*   **circuits** (`Union`\[`QuantumCircuit`, `List`\[`QuantumCircuit`]]) – The quantum circuit or circuits to translate
*   **backend** (`Union`\[`Backend`, `BaseBackend`, `None`]) – A backend instance, which contains hardware-specific data required for scheduling
*   **inst\_map** (`Optional`\[`InstructionScheduleMap`]) – Mapping of circuit operations to pulse schedules. If `None`, defaults to the `backend`’s `instruction_schedule_map`
*   **meas\_map** (`Optional`\[`List`\[`List`\[`int`]]]) – List of sets of qubits that must be measured together. If `None`, defaults to the `backend`’s `meas_map`
*   **dt** (`Optional`\[`float`]) – The output sample rate of backend control electronics. For scheduled circuits which contain time information, dt is required. If not provided, it will be obtained from the backend configuration
*   **method** (`Union`\[`str`, `List`\[`str`], `None`]) – Optionally specify a particular scheduling method

**Return type**

`Union`\[`Schedule`, `List`\[`Schedule`]]

**Returns**

A pulse `Schedule` that implements the input circuit

**Raises**

**QiskitError** – If `inst_map` and `meas_map` are not passed and `backend` is not passed
