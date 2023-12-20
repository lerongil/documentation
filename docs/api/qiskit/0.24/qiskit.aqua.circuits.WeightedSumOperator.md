<span id="qiskit-aqua-circuits-weightedsumoperator" />

# qiskit.aqua.circuits.WeightedSumOperator

<span id="undefined" />

`WeightedSumOperator(num_state_qubits, weights, i_state=None, i_sum=None)`

Adds q^T \* w to separate register for non-negative integer weights w.

Computes the weighted sum controlled by state qubits

**Parameters**

*   **num\_state\_qubits** (*int*) – number of state qubits
*   **weights** (*Union(list, numpy.ndarray)*) – weights per state qubits
*   **i\_state** (*Optional(Union(list, numpy.ndarray))*) – indices of state qubits, set to range(num\_state\_qubits) if None
*   **i\_sum** (*Optional(int)*) – indices of target qubits (that represent the resulting sum), set to range(num\_state\_qubits, num\_state\_qubits + req\_num\_sum\_qubits) if None

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – invalid input

<span id="undefined" />

`__init__(num_state_qubits, weights, i_state=None, i_sum=None)`

Computes the weighted sum controlled by state qubits

**Parameters**

*   **num\_state\_qubits** (*int*) – number of state qubits
*   **weights** (*Union(list, numpy.ndarray)*) – weights per state qubits
*   **i\_state** (*Optional(Union(list, numpy.ndarray))*) – indices of state qubits, set to range(num\_state\_qubits) if None
*   **i\_sum** (*Optional(int)*) – indices of target qubits (that represent the resulting sum), set to range(num\_state\_qubits, num\_state\_qubits + req\_num\_sum\_qubits) if None

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – invalid input

## Methods

|                                                                                                                                                                                                        |                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.circuits.WeightedSumOperator.__init__ "qiskit.aqua.circuits.WeightedSumOperator.__init__")(num\_state\_qubits, weights\[, …])                                                | Computes the weighted sum controlled by state qubits                  |
| [`build`](#qiskit.aqua.circuits.WeightedSumOperator.build "qiskit.aqua.circuits.WeightedSumOperator.build")(qc, q\[, q\_ancillas, params])                                                             | Adds corresponding sub-circuit to given circuit                       |
| [`build_controlled`](#qiskit.aqua.circuits.WeightedSumOperator.build_controlled "qiskit.aqua.circuits.WeightedSumOperator.build_controlled")(qc, q, q\_control\[, …])                                  | Adds corresponding controlled sub-circuit to given circuit            |
| [`build_controlled_inverse`](#qiskit.aqua.circuits.WeightedSumOperator.build_controlled_inverse "qiskit.aqua.circuits.WeightedSumOperator.build_controlled_inverse")(qc, q, q\_control\[, …])          | Adds controlled inverse of corresponding sub-circuit to given circuit |
| [`build_controlled_inverse_power`](#qiskit.aqua.circuits.WeightedSumOperator.build_controlled_inverse_power "qiskit.aqua.circuits.WeightedSumOperator.build_controlled_inverse_power")(qc, q, …\[, …]) | Adds controlled, inverse, power of corresponding circuit.             |
| [`build_controlled_power`](#qiskit.aqua.circuits.WeightedSumOperator.build_controlled_power "qiskit.aqua.circuits.WeightedSumOperator.build_controlled_power")(qc, q, q\_control, power)               | Adds controlled power of corresponding circuit.                       |
| [`build_inverse`](#qiskit.aqua.circuits.WeightedSumOperator.build_inverse "qiskit.aqua.circuits.WeightedSumOperator.build_inverse")(qc, q\[, q\_ancillas])                                             | Adds inverse of corresponding sub-circuit to given circuit            |
| [`build_inverse_power`](#qiskit.aqua.circuits.WeightedSumOperator.build_inverse_power "qiskit.aqua.circuits.WeightedSumOperator.build_inverse_power")(qc, q, power\[, q\_ancillas])                    | Adds inverse power of corresponding circuit.                          |
| [`build_power`](#qiskit.aqua.circuits.WeightedSumOperator.build_power "qiskit.aqua.circuits.WeightedSumOperator.build_power")(qc, q, power\[, q\_ancillas])                                            | Adds power of corresponding circuit.                                  |
| [`get_num_qubits`](#qiskit.aqua.circuits.WeightedSumOperator.get_num_qubits "qiskit.aqua.circuits.WeightedSumOperator.get_num_qubits")()                                                               | returns number of qubits                                              |
| [`get_num_qubits_controlled`](#qiskit.aqua.circuits.WeightedSumOperator.get_num_qubits_controlled "qiskit.aqua.circuits.WeightedSumOperator.get_num_qubits_controlled")()                              | returns number of qubits controlled                                   |
| [`get_required_sum_qubits`](#qiskit.aqua.circuits.WeightedSumOperator.get_required_sum_qubits "qiskit.aqua.circuits.WeightedSumOperator.get_required_sum_qubits")(weights)                             | get required sum qubits                                               |
| [`required_ancillas`](#qiskit.aqua.circuits.WeightedSumOperator.required_ancillas "qiskit.aqua.circuits.WeightedSumOperator.required_ancillas")()                                                      | required ancillas                                                     |
| [`required_ancillas_controlled`](#qiskit.aqua.circuits.WeightedSumOperator.required_ancillas_controlled "qiskit.aqua.circuits.WeightedSumOperator.required_ancillas_controlled")()                     | returns required ancillas controlled                                  |

## Attributes

|                                                                                                                                                 |                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`num_carry_qubits`](#qiskit.aqua.circuits.WeightedSumOperator.num_carry_qubits "qiskit.aqua.circuits.WeightedSumOperator.num_carry_qubits")    | returns num carry qubits            |
| [`num_state_qubits`](#qiskit.aqua.circuits.WeightedSumOperator.num_state_qubits "qiskit.aqua.circuits.WeightedSumOperator.num_state_qubits")    | returns num state qubits            |
| [`num_sum_qubits`](#qiskit.aqua.circuits.WeightedSumOperator.num_sum_qubits "qiskit.aqua.circuits.WeightedSumOperator.num_sum_qubits")          | returns num sum qubits              |
| [`num_target_qubits`](#qiskit.aqua.circuits.WeightedSumOperator.num_target_qubits "qiskit.aqua.circuits.WeightedSumOperator.num_target_qubits") | Returns the number of target qubits |
| [`weights`](#qiskit.aqua.circuits.WeightedSumOperator.weights "qiskit.aqua.circuits.WeightedSumOperator.weights")                               | returns weights                     |

<span id="undefined" />

`build(qc, q, q_ancillas=None, params=None)`

Adds corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **params** (*list*) – parameters for circuit

<span id="undefined" />

`build_controlled(qc, q, q_control, q_ancillas=None, use_basis_gates=True)`

Adds corresponding controlled sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_control** ([*Qubit*](qiskit.circuit.Qubit#qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – control qubit
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **use\_basis\_gates** (*bool*) – use basis gates for expansion of controlled circuit

<span id="undefined" />

`build_controlled_inverse(qc, q, q_control, q_ancillas=None, use_basis_gates=True)`

Adds controlled inverse of corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_control** ([*Qubit*](qiskit.circuit.Qubit#qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – control qubit
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **use\_basis\_gates** (*bool*) – use basis gates for expansion of controlled circuit

<span id="undefined" />

`build_controlled_inverse_power(qc, q, q_control, power, q_ancillas=None, use_basis_gates=True)`

Adds controlled, inverse, power of corresponding circuit. May be overridden if a more efficient implementation is possible

<span id="undefined" />

`build_controlled_power(qc, q, q_control, power, q_ancillas=None, use_basis_gates=True)`

Adds controlled power of corresponding circuit. May be overridden if a more efficient implementation is possible

<span id="undefined" />

`build_inverse(qc, q, q_ancillas=None)`

Adds inverse of corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)

<span id="undefined" />

`build_inverse_power(qc, q, power, q_ancillas=None)`

Adds inverse power of corresponding circuit. May be overridden if a more efficient implementation is possible

<span id="undefined" />

`build_power(qc, q, power, q_ancillas=None)`

Adds power of corresponding circuit. May be overridden if a more efficient implementation is possible

<span id="undefined" />

`get_num_qubits()`

returns number of qubits

<span id="undefined" />

`get_num_qubits_controlled()`

returns number of qubits controlled

<span id="undefined" />

`static get_required_sum_qubits(weights)`

get required sum qubits

<span id="undefined" />

`property num_carry_qubits`

returns num carry qubits

<span id="undefined" />

`property num_state_qubits`

returns num state qubits

<span id="undefined" />

`property num_sum_qubits`

returns num sum qubits

<span id="undefined" />

`property num_target_qubits`

Returns the number of target qubits

<span id="undefined" />

`required_ancillas()`

required ancillas

<span id="undefined" />

`required_ancillas_controlled()`

returns required ancillas controlled

<span id="undefined" />

`property weights`

returns weights
