# qiskit.quantum\_info.StabilizerState

<span id="undefined" />

`StabilizerState(data, validate=True)`

StabilizerState class. Stabilizer simulator using the convention from reference \[1]. Based on the internal class [`Clifford`](qiskit.quantum_info.Clifford#qiskit.quantum_info.Clifford "qiskit.quantum_info.Clifford").

```python
from qiskit import QuantumCircuit
from qiskit.quantum_info import StabilizerState, Pauli

# Bell state generation circuit
qc = QuantumCircuit(2)
qc.h(0)
qc.cx(0, 1)
stab = StabilizerState(qc)

# Print the StabilizerState
print(stab)

# Calculate the StabilizerState measurement probabilities dictionary
print (stab.probabilities_dict())

# Calculate expectation value of the StabilizerState
print (stab.expectation_value(Pauli('ZZ')))
```

```python
StabilizerState(StabilizerTable: ['+XX', '+ZZ'])
{'00': 0.5, '11': 0.5}
1
```

## References

1.  S. Aaronson, D. Gottesman, *Improved Simulation of Stabilizer Circuits*, Phys. Rev. A 70, 052328 (2004). [arXiv:quant-ph/0406196](https://arxiv.org/abs/quant-ph/0406196)

Initialize a StabilizerState object.

**Parameters**

*   \*\*(****StabilizerState**** or ****Clifford**** or ****Pauli**** or \*\***QuantumCircuit or** (*data*) – qiskit.circuit.Instruction): Data from which the stabilizer state can be constructed.
*   **validate** (*boolean*) – validate that the stabilizer state data is a valid Clifford.

<span id="undefined" />

`__init__(data, validate=True)`

Initialize a StabilizerState object.

**Parameters**

*   \*\*(****StabilizerState**** or ****Clifford**** or ****Pauli**** or \*\***QuantumCircuit or** (*data*) – qiskit.circuit.Instruction): Data from which the stabilizer state can be constructed.
*   **validate** (*boolean*) – validate that the stabilizer state data is a valid Clifford.

## Methods

|                                                                                                                                                              |                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.quantum_info.StabilizerState.__init__ "qiskit.quantum_info.StabilizerState.__init__")(data\[, validate])                                | Initialize a StabilizerState object.                                                                              |
| [`conjugate`](#qiskit.quantum_info.StabilizerState.conjugate "qiskit.quantum_info.StabilizerState.conjugate")()                                              | Return the conjugate of the operator.                                                                             |
| [`copy`](#qiskit.quantum_info.StabilizerState.copy "qiskit.quantum_info.StabilizerState.copy")()                                                             | Make a copy of current operator.                                                                                  |
| [`dims`](#qiskit.quantum_info.StabilizerState.dims "qiskit.quantum_info.StabilizerState.dims")(\[qargs])                                                     | Return tuple of input dimension for specified subsystems.                                                         |
| [`evolve`](#qiskit.quantum_info.StabilizerState.evolve "qiskit.quantum_info.StabilizerState.evolve")(other\[, qargs])                                        | Evolve a stabilizer state by a Clifford operator.                                                                 |
| [`expand`](#qiskit.quantum_info.StabilizerState.expand "qiskit.quantum_info.StabilizerState.expand")(other)                                                  | Return the tensor product stabilzier state other ⊗ self.                                                          |
| [`expectation_value`](#qiskit.quantum_info.StabilizerState.expectation_value "qiskit.quantum_info.StabilizerState.expectation_value")(oper\[, qargs])        | Compute the expectation value of an operator.                                                                     |
| [`is_valid`](#qiskit.quantum_info.StabilizerState.is_valid "qiskit.quantum_info.StabilizerState.is_valid")(\[atol, rtol])                                    | Return True if a valid StabilizerState.                                                                           |
| [`measure`](#qiskit.quantum_info.StabilizerState.measure "qiskit.quantum_info.StabilizerState.measure")(\[qargs])                                            | Measure subsystems and return outcome and post-measure state.                                                     |
| [`probabilities`](#qiskit.quantum_info.StabilizerState.probabilities "qiskit.quantum_info.StabilizerState.probabilities")(\[qargs, decimals])                | Return the subsystem measurement probability vector.                                                              |
| [`probabilities_dict`](#qiskit.quantum_info.StabilizerState.probabilities_dict "qiskit.quantum_info.StabilizerState.probabilities_dict")(\[qargs, decimals]) | Return the subsystem measurement probability dictionary.                                                          |
| [`purity`](#qiskit.quantum_info.StabilizerState.purity "qiskit.quantum_info.StabilizerState.purity")()                                                       | Return the purity of the quantum state, which equals to 1, since it is always a pure state.                       |
| [`reset`](#qiskit.quantum_info.StabilizerState.reset "qiskit.quantum_info.StabilizerState.reset")(\[qargs])                                                  | Reset state or subsystems to the 0-state.                                                                         |
| [`sample_counts`](#qiskit.quantum_info.StabilizerState.sample_counts "qiskit.quantum_info.StabilizerState.sample_counts")(shots\[, qargs])                   | Sample a dict of qubit measurement outcomes in the computational basis.                                           |
| [`sample_memory`](#qiskit.quantum_info.StabilizerState.sample_memory "qiskit.quantum_info.StabilizerState.sample_memory")(shots\[, qargs])                   | Sample a list of qubit measurement outcomes in the computational basis.                                           |
| [`seed`](#qiskit.quantum_info.StabilizerState.seed "qiskit.quantum_info.StabilizerState.seed")(\[value])                                                     | Set the seed for the quantum state RNG.                                                                           |
| [`tensor`](#qiskit.quantum_info.StabilizerState.tensor "qiskit.quantum_info.StabilizerState.tensor")(other)                                                  | Return the tensor product stabilzier state self ⊗ other.                                                          |
| [`to_operator`](#qiskit.quantum_info.StabilizerState.to_operator "qiskit.quantum_info.StabilizerState.to_operator")()                                        | Convert state to matrix operator class                                                                            |
| [`trace`](#qiskit.quantum_info.StabilizerState.trace "qiskit.quantum_info.StabilizerState.trace")()                                                          | Return the trace of the stabilizer state as a density matrix, which equals to 1, since it is always a pure state. |

## Attributes

|                                                                                                                  |                                                                   |
| ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| [`clifford`](#qiskit.quantum_info.StabilizerState.clifford "qiskit.quantum_info.StabilizerState.clifford")       | Return StabilizerState Clifford data                              |
| [`dim`](#qiskit.quantum_info.StabilizerState.dim "qiskit.quantum_info.StabilizerState.dim")                      | Return total state dimension.                                     |
| [`num_qubits`](#qiskit.quantum_info.StabilizerState.num_qubits "qiskit.quantum_info.StabilizerState.num_qubits") | Return the number of qubits if a N-qubit state or None otherwise. |

<span id="undefined" />

`property clifford`

Return StabilizerState Clifford data

<span id="undefined" />

`conjugate()`

Return the conjugate of the operator.

<span id="undefined" />

`copy()`

Make a copy of current operator.

<span id="undefined" />

`property dim`

Return total state dimension.

<span id="undefined" />

`dims(qargs=None)`

Return tuple of input dimension for specified subsystems.

<span id="undefined" />

`evolve(other, qargs=None)`

Evolve a stabilizer state by a Clifford operator.

**Parameters**

*   **other** ([*Clifford*](qiskit.quantum_info.Clifford#qiskit.quantum_info.Clifford "qiskit.quantum_info.Clifford")  *or*[*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")  *or*[*qiskit.circuit.Instruction*](qiskit.circuit.Instruction#qiskit.circuit.Instruction "qiskit.circuit.Instruction")) – The Clifford operator to evolve by.
*   **qargs** (*list*) – a list of stabilizer subsystem positions to apply the operator on.

**Returns**

the output stabilizer state.

**Return type**

[StabilizerState](#qiskit.quantum_info.StabilizerState "qiskit.quantum_info.StabilizerState")

**Raises**

*   **QiskitError** – if other is not a StabilizerState.
*   **QiskitError** – if the operator dimension does not match the specified StabilizerState subsystem dimensions.

<span id="undefined" />

`expand(other)`

Return the tensor product stabilzier state other ⊗ self.

**Parameters**

**other** ([*StabilizerState*](#qiskit.quantum_info.StabilizerState "qiskit.quantum_info.StabilizerState")) – a stabilizer state object.

**Returns**

the tensor product operator other ⊗ self.

**Return type**

[StabilizerState](#qiskit.quantum_info.StabilizerState "qiskit.quantum_info.StabilizerState")

**Raises**

**QiskitError** – if other is not a StabilizerState.

<span id="undefined" />

`expectation_value(oper, qargs=None)`

Compute the expectation value of an operator.

**Parameters**

*   **oper** (*BaseOperator*) – an operator to evaluate expval.
*   **qargs** (*None or list*) – subsystems to apply the operator on.

**Returns**

the expectation value (only 0 or 1 or -1).

**Return type**

complex

<span id="undefined" />

`is_valid(atol=None, rtol=None)`

Return True if a valid StabilizerState.

<span id="undefined" />

`measure(qargs=None)`

Measure subsystems and return outcome and post-measure state.

Note that this function uses the QuantumStates internal random number generator for sampling the measurement outcome. The RNG seed can be set using the [`seed()`](#qiskit.quantum_info.StabilizerState.seed "qiskit.quantum_info.StabilizerState.seed") method.

**Parameters**

**qargs** (*list or None*) – subsystems to sample measurements for, if None sample measurement of all subsystems (Default: None).

**Returns**

**the pair `(outcome, state)` where `outcome` is the**

measurement outcome string label, and `state` is the collapsed post-measurement stabilizer state for the corresponding outcome.

**Return type**

tuple

<span id="undefined" />

`property num_qubits`

Return the number of qubits if a N-qubit state or None otherwise.

<span id="undefined" />

`probabilities(qargs=None, decimals=None)`

Return the subsystem measurement probability vector.

Measurement probabilities are with respect to measurement in the computation (diagonal) basis.

**Parameters**

*   **qargs** (*None or list*) – subsystems to return probabilities for, if None return for all subsystems (Default: None).
*   **decimals** (*None or int*) – the number of decimal places to round values. If None no rounding is done (Default: None).

**Returns**

The Numpy vector array of probabilities.

**Return type**

np.array

<span id="undefined" />

`probabilities_dict(qargs=None, decimals=None)`

Return the subsystem measurement probability dictionary.

Measurement probabilities are with respect to measurement in the computation (diagonal) basis.

This dictionary representation uses a Ket-like notation where the dictionary keys are qudit strings for the subsystem basis vectors. If any subsystem has a dimension greater than 10 comma delimiters are inserted between integers so that subsystems can be distinguished.

**Parameters**

*   **qargs** (*None or list*) – subsystems to return probabilities for, if None return for all subsystems (Default: None).
*   **decimals** (*None or int*) – the number of decimal places to round values. If None no rounding is done (Default: None).

**Returns**

The measurement probabilities in dict (ket) form.

**Return type**

dict

<span id="undefined" />

`purity()`

Return the purity of the quantum state, which equals to 1, since it is always a pure state.

**Returns**

the purity (should equal 1).

**Return type**

double

**Raises**

**QiskitError** – if input is not a StabilizerState.

<span id="undefined" />

`reset(qargs=None)`

Reset state or subsystems to the 0-state.

**Parameters**

**qargs** (*list or None*) – subsystems to reset, if None all subsystems will be reset to their 0-state (Default: None).

**Returns**

the reset state.

**Return type**

[StabilizerState](#qiskit.quantum_info.StabilizerState "qiskit.quantum_info.StabilizerState")

**Additional Information:**

If all subsystems are reset this will return the ground state on all subsystems. If only some subsystems are reset this function will perform a measurement on those subsystems and evolve the subsystems so that the collapsed post-measurement states are rotated to the 0-state. The RNG seed for this sampling can be set using the [`seed()`](#qiskit.quantum_info.StabilizerState.seed "qiskit.quantum_info.StabilizerState.seed") method.

<span id="undefined" />

`sample_counts(shots, qargs=None)`

Sample a dict of qubit measurement outcomes in the computational basis.

**Parameters**

*   **shots** (*int*) – number of samples to generate.
*   **qargs** (*None or list*) – subsystems to sample measurements for, if None sample measurement of all subsystems (Default: None).

**Returns**

sampled counts dictionary.

**Return type**

[Counts](qiskit.result.Counts#qiskit.result.Counts "qiskit.result.Counts")

Additional Information:

> This function *samples* measurement outcomes using the measure [`probabilities()`](#qiskit.quantum_info.StabilizerState.probabilities "qiskit.quantum_info.StabilizerState.probabilities") for the current state and qargs. It does not actually implement the measurement so the current state is not modified.
>
> The seed for random number generator used for sampling can be set to a fixed value by using the stats [`seed()`](#qiskit.quantum_info.StabilizerState.seed "qiskit.quantum_info.StabilizerState.seed") method.

<span id="undefined" />

`sample_memory(shots, qargs=None)`

Sample a list of qubit measurement outcomes in the computational basis.

**Parameters**

*   **shots** (*int*) – number of samples to generate.
*   **qargs** (*None or list*) – subsystems to sample measurements for, if None sample measurement of all subsystems (Default: None).

**Returns**

list of sampled counts if the order sampled.

**Return type**

np.array

Additional Information:

> This function implements the measurement [`measure()`](#qiskit.quantum_info.StabilizerState.measure "qiskit.quantum_info.StabilizerState.measure") method.
>
> The seed for random number generator used for sampling can be set to a fixed value by using the stats [`seed()`](#qiskit.quantum_info.StabilizerState.seed "qiskit.quantum_info.StabilizerState.seed") method.

<span id="undefined" />

`seed(value=None)`

Set the seed for the quantum state RNG.

<span id="undefined" />

`tensor(other)`

Return the tensor product stabilzier state self ⊗ other.

**Parameters**

**other** ([*StabilizerState*](#qiskit.quantum_info.StabilizerState "qiskit.quantum_info.StabilizerState")) – a stabilizer state object.

**Returns**

the tensor product operator self ⊗ other.

**Return type**

[StabilizerState](#qiskit.quantum_info.StabilizerState "qiskit.quantum_info.StabilizerState")

**Raises**

**QiskitError** – if other is not a StabilizerState.

<span id="undefined" />

`to_operator()`

Convert state to matrix operator class

<span id="undefined" />

`trace()`

Return the trace of the stabilizer state as a density matrix, which equals to 1, since it is always a pure state.

**Returns**

the trace (should equal 1).

**Return type**

double

**Raises**

**QiskitError** – if input is not a StabilizerState.
