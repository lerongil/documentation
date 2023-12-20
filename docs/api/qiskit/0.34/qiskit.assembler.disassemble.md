# qiskit.assembler.disassemble

<span id="undefined" />

`disassemble(qobj)`

Disassemble a qobj and return the circuits or pulse schedules, run\_config, and user header.

<Admonition title="Note" type="note">
  `disassemble(assemble(qc))` is not guaranteed to produce an exactly equal circuit to the input, due to limitations in the [`QasmQobj`](qiskit.qobj.QasmQobj#qiskit.qobj.QasmQobj "qiskit.qobj.QasmQobj") format that need to be maintained for backend system compatibility. This is most likely to be the case when using newer features of [`QuantumCircuit`](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit"). In most cases, the output should be equivalent, if not quite equal.
</Admonition>

**Parameters**

**qobj** ([*Qobj*](qiskit.qobj.Qobj#qiskit.qobj.Qobj "qiskit.qobj.Qobj")) – The input qobj object to disassemble

**Returns**

The disassembled program which consists of:

> *   programs: A list of quantum circuits or pulse schedules
> *   run\_config: The dict of the run config
> *   user\_qobj\_header: The dict of any user headers in the qobj

**Return type**

Union\[CircuitModule, PulseModule]
