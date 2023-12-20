<span id="qiskit-aqua-operators-legacy-matrixoperator" />

# qiskit.aqua.operators.legacy.MatrixOperator

<span id="undefined" />

`MatrixOperator(matrix, basis=None, z2_symmetries=None, atol=1e-12, name=None)`

Operators relevant for quantum applications

<Admonition title="Note" type="note">
  For grouped paulis representation, all operations will always convert it to paulis and then convert it back. (It might be a performance issue.)
</Admonition>

**Parameters**

*   **matrix** (*numpy.ndarray or scipy.sparse.csr\_matrix*) – a 2-D sparse matrix represents operator (using CSR format internally)
*   **basis** (*list\[tuple(object, \[int])], optional*) – the grouping basis, each element is a tuple composed of the basis and the indices to paulis which are belonged to that group. e.g., if tpb basis is used, the object will be a pauli. by default, the group is equal to non-grouping, each pauli is its own basis.
*   **z2\_symmetries** ([*Z2Symmetries*](qiskit.aqua.operators.legacy.Z2Symmetries#qiskit.aqua.operators.legacy.Z2Symmetries "qiskit.aqua.operators.legacy.Z2Symmetries")) – represent the Z2 symmetries
*   **atol** (*float*) – atol
*   **name** (*str*) – name

<span id="undefined" />

`__init__(matrix, basis=None, z2_symmetries=None, atol=1e-12, name=None)`

**Parameters**

*   **matrix** (*numpy.ndarray or scipy.sparse.csr\_matrix*) – a 2-D sparse matrix represents operator (using CSR format internally)
*   **basis** (*list\[tuple(object, \[int])], optional*) – the grouping basis, each element is a tuple composed of the basis and the indices to paulis which are belonged to that group. e.g., if tpb basis is used, the object will be a pauli. by default, the group is equal to non-grouping, each pauli is its own basis.
*   **z2\_symmetries** ([*Z2Symmetries*](qiskit.aqua.operators.legacy.Z2Symmetries#qiskit.aqua.operators.legacy.Z2Symmetries "qiskit.aqua.operators.legacy.Z2Symmetries")) – represent the Z2 symmetries
*   **atol** (*float*) – atol
*   **name** (*str*) – name

## Methods

|                                                                                                                                                                                                        |                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.operators.legacy.MatrixOperator.__init__ "qiskit.aqua.operators.legacy.MatrixOperator.__init__")(matrix\[, basis, z2\_symmetries, …])                                        | **param matrix**a 2-D sparse matrix represents operator (using CSR format internally) |
| [`add`](#qiskit.aqua.operators.legacy.MatrixOperator.add "qiskit.aqua.operators.legacy.MatrixOperator.add")(other\[, copy])                                                                            |                                                                                       |
| [`chop`](#qiskit.aqua.operators.legacy.MatrixOperator.chop "qiskit.aqua.operators.legacy.MatrixOperator.chop")(\[threshold, copy])                                                                     | Eliminate the real and imagine part of coeff in each pauli by threshold.              |
| [`construct_evaluation_circuit`](#qiskit.aqua.operators.legacy.MatrixOperator.construct_evaluation_circuit "qiskit.aqua.operators.legacy.MatrixOperator.construct_evaluation_circuit")(wave\_function) | Construct the circuits for evaluation.                                                |
| [`copy`](#qiskit.aqua.operators.legacy.MatrixOperator.copy "qiskit.aqua.operators.legacy.MatrixOperator.copy")()                                                                                       | Get a copy of self.                                                                   |
| [`evaluate_with_result`](#qiskit.aqua.operators.legacy.MatrixOperator.evaluate_with_result "qiskit.aqua.operators.legacy.MatrixOperator.evaluate_with_result")(result\[, …])                           | Use the executed result with operator to get the evaluated value.                     |
| [`evaluate_with_statevector`](#qiskit.aqua.operators.legacy.MatrixOperator.evaluate_with_statevector "qiskit.aqua.operators.legacy.MatrixOperator.evaluate_with_statevector")(quantum\_state)          | **param quantum\_state**quantum state                                                 |
| [`evolve`](#qiskit.aqua.operators.legacy.MatrixOperator.evolve "qiskit.aqua.operators.legacy.MatrixOperator.evolve")(state\_in\[, evo\_time, …])                                                       | Carry out the eoh evolution for the operator under supplied specifications.           |
| [`is_empty`](#qiskit.aqua.operators.legacy.MatrixOperator.is_empty "qiskit.aqua.operators.legacy.MatrixOperator.is_empty")()                                                                           | Check Operator is empty or not.                                                       |
| [`print_details`](#qiskit.aqua.operators.legacy.MatrixOperator.print_details "qiskit.aqua.operators.legacy.MatrixOperator.print_details")()                                                            | **returns**a formatted operator.                                                      |
| [`sub`](#qiskit.aqua.operators.legacy.MatrixOperator.sub "qiskit.aqua.operators.legacy.MatrixOperator.sub")(other\[, copy])                                                                            |                                                                                       |
| [`to_opflow`](#qiskit.aqua.operators.legacy.MatrixOperator.to_opflow "qiskit.aqua.operators.legacy.MatrixOperator.to_opflow")()                                                                        | to op flow                                                                            |

## Attributes

|                                                                                                                                           |                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`atol`](#qiskit.aqua.operators.legacy.MatrixOperator.atol "qiskit.aqua.operators.legacy.MatrixOperator.atol")                            | return atol                                 |
| [`basis`](#qiskit.aqua.operators.legacy.MatrixOperator.basis "qiskit.aqua.operators.legacy.MatrixOperator.basis")                         | returns basis                               |
| [`dense_matrix`](#qiskit.aqua.operators.legacy.MatrixOperator.dense_matrix "qiskit.aqua.operators.legacy.MatrixOperator.dense_matrix")    | Getter of matrix in dense matrix form.      |
| [`dia_matrix`](#qiskit.aqua.operators.legacy.MatrixOperator.dia_matrix "qiskit.aqua.operators.legacy.MatrixOperator.dia_matrix")          | diagonal matrix                             |
| [`matrix`](#qiskit.aqua.operators.legacy.MatrixOperator.matrix "qiskit.aqua.operators.legacy.MatrixOperator.matrix")                      | Getter of matrix.                           |
| [`name`](#qiskit.aqua.operators.legacy.MatrixOperator.name "qiskit.aqua.operators.legacy.MatrixOperator.name")                            | returns name                                |
| [`num_qubits`](#qiskit.aqua.operators.legacy.MatrixOperator.num_qubits "qiskit.aqua.operators.legacy.MatrixOperator.num_qubits")          | number of qubits required for the operator. |
| [`z2_symmetries`](#qiskit.aqua.operators.legacy.MatrixOperator.z2_symmetries "qiskit.aqua.operators.legacy.MatrixOperator.z2_symmetries") | returns z2 symmetries                       |

<span id="undefined" />

`add(other, copy=False)`

<span id="undefined" />

`property atol`

return atol

<span id="undefined" />

`property basis`

returns basis

<span id="undefined" />

`chop(threshold=None, copy=False)`

Eliminate the real and imagine part of coeff in each pauli by threshold. If pauli’s coeff is less then threshold in both real and imagine parts, the pauli is removed. To align the internal representations, all available representations are chopped. The chopped result is stored back to original property. Note: if coeff is real-only, the imag part is skipped.

**Parameters**

*   **threshold** (*float*) – threshold chops the paulis
*   **copy** (*bool*) – copy or self

**Returns**

self or copy

**Return type**

[MatrixOperator](#qiskit.aqua.operators.legacy.MatrixOperator "qiskit.aqua.operators.legacy.MatrixOperator")

<span id="undefined" />

`construct_evaluation_circuit(wave_function, statevector_mode=True, use_simulator_snapshot_mode=None, circuit_name_prefix='')`

Construct the circuits for evaluation.

**Parameters**

*   **wave\_function** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – the quantum circuit.
*   **statevector\_mode** (*bool*) – mode
*   **use\_simulator\_snapshot\_mode** (*bool*) – uses simulator operator mode
*   **circuit\_name\_prefix** (*str, optional*) – a prefix of circuit name

**Returns**

**the circuits for computing the expectation of the operator over**

the wavefunction evaluation.

**Return type**

list\[[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")]

<span id="undefined" />

`copy()`

Get a copy of self.

<span id="undefined" />

`property dense_matrix`

Getter of matrix in dense matrix form.

<span id="undefined" />

`property dia_matrix`

diagonal matrix

<span id="undefined" />

`evaluate_with_result(result, statevector_mode=True, use_simulator_snapshot_mode=None, circuit_name_prefix='')`

Use the executed result with operator to get the evaluated value.

**Parameters**

*   **result** (*qiskit.Result*) – the result from the backend
*   **statevector\_mode** (*bool*) – mode
*   **use\_simulator\_snapshot\_mode** (*bool*) – uses simulator operator mode
*   **circuit\_name\_prefix** (*str, optional*) – a prefix of circuit name

**Returns**

the mean value float: the standard deviation

**Return type**

float

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – if Operator is empty

<span id="undefined" />

`evaluate_with_statevector(quantum_state)`

**Parameters**

**quantum\_state** (*numpy.ndarray*) – quantum state

**Returns**

the mean value float: the standard deviation

**Return type**

float

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – if Operator is empty

<span id="undefined" />

`evolve(state_in, evo_time=0, num_time_slices=0, expansion_mode='trotter', expansion_order=1)`

Carry out the eoh evolution for the operator under supplied specifications.

**Parameters**

*   **state\_in** (*Union(list,numpy.array)*) – A vector representing the initial state for the evolution
*   **evo\_time** (*Union(complex, float)*) – The evolution time
*   **num\_time\_slices** (*int*) – The number of time slices for the expansion
*   **expansion\_mode** (*str*) – The mode under which the expansion is to be done. Currently support ‘trotter’, which follows the expansion as discussed in [http://science.sciencemag.org/content/273/5278/1073](http://science.sciencemag.org/content/273/5278/1073), and ‘suzuki’, which corresponds to the discussion in [https://arxiv.org/pdf/quant-ph/0508139.pdf](https://arxiv.org/pdf/quant-ph/0508139.pdf)
*   **expansion\_order** (*int*) – The order for suzuki expansion

**Returns**

Return the matrix vector multiplication result.

**Return type**

numpy.array

**Raises**

*   **ValueError** – Invalid arguments
*   [**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – if Operator is empty

<span id="undefined" />

`is_empty()`

Check Operator is empty or not.

**Returns**

is empty?

**Return type**

bool

<span id="undefined" />

`property matrix`

Getter of matrix.

<span id="undefined" />

`property name`

returns name

<span id="undefined" />

`property num_qubits`

number of qubits required for the operator.

**Returns**

number of qubits

**Return type**

int

<span id="undefined" />

`print_details()`

**Returns**

a formatted operator.

**Return type**

str

<span id="undefined" />

`sub(other, copy=False)`

<span id="undefined" />

`to_opflow()`

to op flow

<span id="undefined" />

`property z2_symmetries`

returns z2 symmetries
