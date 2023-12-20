# XXDecomposer

<span id="undefined" />

`XXDecomposer(euler_basis='U', embodiments=None, backup_optimizer=None)`

Bases: `object`

A class for optimal decomposition of 2-qubit unitaries into 2-qubit basis gates of XX type (i.e., each locally equivalent to CAN(alpha, 0, 0) for a possibly varying alpha).

**Parameters**

*   **euler\_basis** (`str`) – Basis string provided to OneQubitEulerDecomposer for 1Q synthesis. Defaults to “U”.
*   **embodiments** (`Optional`\[`dict`]) – A dictionary mapping interaction strengths alpha to native circuits which embody the gate CAN(alpha, 0, 0). Strengths are taken so that pi/2 represents the class of a full CX.
*   **backup\_optimizer** (`Optional`\[`Callable`]) – If supplied, defers synthesis to this callable when XXDecomposer has no efficient decomposition of its own. Useful for special cases involving 2 or 3 applications of XX(pi/2), in which case standard synthesis methods provide lower 1Q gate count.

<Admonition title="Note" type="note">
  If `embodiments` is not passed, or if an entry is missing, it will be populated as needed using the method `_default_embodiment`.
</Admonition>

## Methods

|                                                                                                                                                                           |                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`num_basis_gates`](qiskit.quantum_info.XXDecomposer.num_basis_gates#qiskit.quantum_info.XXDecomposer.num_basis_gates "qiskit.quantum_info.XXDecomposer.num_basis_gates") | Counts the number of gates that would be emitted during re-synthesis. |
