<span id="qiskit-compiler-sequence" />

# qiskit.compiler.sequence

<span id="undefined" />

`sequence(scheduled_circuits, backend=None, inst_map=None, meas_map=None, dt=None)`

Schedule a scheduled circuit to a pulse `Schedule`, using the backend.

**Parameters**

*   **scheduled\_circuits** (`Union`\[`QuantumCircuit`, `List`\[`QuantumCircuit`]]) – Scheduled circuit(s) to be translated
*   **backend** (`Union`\[`Backend`, `BaseBackend`, `None`]) – A backend instance, which contains hardware-specific data required for scheduling
*   **inst\_map** (`Optional`\[`InstructionScheduleMap`]) – Mapping of circuit operations to pulse schedules. If `None`, defaults to the `backend`’s `instruction_schedule_map`
*   **meas\_map** (`Optional`\[`List`\[`List`\[`int`]]]) – List of sets of qubits that must be measured together. If `None`, defaults to the `backend`’s `meas_map`
*   **dt** (`Optional`\[`float`]) – The output sample rate of backend control electronics. For scheduled circuits which contain time information, dt is required. If not provided, it will be obtained from the backend configuration

**Return type**

`Union`\[`Schedule`, `List`\[`Schedule`]]

**Returns**

A pulse `Schedule` that implements the input circuit

**Raises**

**QiskitError** – If `inst_map` and `meas_map` are not passed and `backend` is not passed
