# qiskit.quantum\_info.gate\_error

<span id="undefined" />

`gate_error(channel, target=None, require_cp=True, require_tp=False)`

Return the gate error of a noisy quantum channel.

The gate error $E$ is given by the average gate infidelity

$$
E(\mathcal{E}, U) = 1 - F_{\text{ave}}(\mathcal{E}, U)
$$

where $F_{\text{ave}}(\mathcal{E}, U)$ is the [`average_gate_fidelity()`](qiskit.quantum_info.average_gate_fidelity#qiskit.quantum_info.average_gate_fidelity "qiskit.quantum_info.average_gate_fidelity") of the input quantum *channel* $\mathcal{E}$ with a *target* unitary $U$.

**Parameters**

*   **channel** (*QuantumChannel*) – noisy quantum channel.
*   **target** ([*Operator*](qiskit.quantum_info.Operator#qiskit.quantum_info.Operator "qiskit.quantum_info.Operator") *or None*) – target unitary operator. If None target is the identity operator \[Default: None].
*   **require\_cp** (*bool*) – check if input and target channels are completely-positive and if non-CP log warning containing negative eigenvalues of Choi-matrix \[Default: True].
*   **require\_tp** (*bool*) – check if input and target channels are trace-preserving and if non-TP log warning containing negative eigenvalues of partial Choi-matrix $Tr_{\mbox{out}}[\mathcal{E}] - I$ \[Default: True].

**Returns**

The average gate error $E$.

**Return type**

float

**Raises**

**QiskitError** – if the channel and target do not have the same dimensions, or have different input and output dimensions.
