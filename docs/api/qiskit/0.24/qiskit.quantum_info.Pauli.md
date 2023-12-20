<span id="qiskit-quantum-info-pauli" />

# qiskit.quantum\_info.Pauli

<span id="undefined" />

`Pauli(z=None, x=None, label=None)`

A simple class representing Pauli Operators.

The form is P\_zx = (-i)^dot(z,x) Z^z X^x where z and x are elements of Z\_2^n. That is, there are 4^n elements (no phases in this group).

For example, for 1 qubit P\_00 = Z^0 X^0 = I P\_01 = X P\_10 = Z P\_11 = -iZX = (-i) iY = Y

The overload \_\_mul\_\_ does not track the sign: P1\*P2 = Z^(z1+z2) X^(x1+x2) but sgn\_prod does \_\_mul\_\_ and track the phase: P1\*P2 = (-i)^dot(z1+z2,x1+x2) Z^(z1+z2) X^(x1+x2) where the sums are taken modulo 2.

Pauli vectors z and x are supposed to be defined as boolean numpy arrays.

Ref. Jeroen Dehaene and Bart De Moor Clifford group, stabilizer states, and linear and quadratic operations over GF(2) Phys. Rev. A 68, 042318 – Published 20 October 2003

Make the Pauli object.

**Note that, for the qubit index:**

*   Order of z, x vectors is q\_0 … q\_\{n-1},
*   Order of pauli label is q\_\{n-1} … q\_0

**E.g.,**

*   z and x vectors: z = \[z\_0 … z\_\{n-1}], x = \[x\_0 … x\_\{n-1}]
*   a pauli is \$P\_\{n-1} otimes … otimes P\_0\$

**Parameters**

*   **z** (*numpy.ndarray*) – boolean, z vector
*   **x** (*numpy.ndarray*) – boolean, x vector
*   **label** (*str*) – pauli label

<span id="undefined" />

`__init__(z=None, x=None, label=None)`

Make the Pauli object.

**Note that, for the qubit index:**

*   Order of z, x vectors is q\_0 … q\_\{n-1},
*   Order of pauli label is q\_\{n-1} … q\_0

**E.g.,**

*   z and x vectors: z = \[z\_0 … z\_\{n-1}], x = \[x\_0 … x\_\{n-1}]
*   a pauli is \$P\_\{n-1} otimes … otimes P\_0\$

**Parameters**

*   **z** (*numpy.ndarray*) – boolean, z vector
*   **x** (*numpy.ndarray*) – boolean, x vector
*   **label** (*str*) – pauli label

## Methods

|                                                                                                                                          |                                                                                 |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.quantum_info.Pauli.__init__ "qiskit.quantum_info.Pauli.__init__")(\[z, x, label])                                   | Make the Pauli object.                                                          |
| [`append_paulis`](#qiskit.quantum_info.Pauli.append_paulis "qiskit.quantum_info.Pauli.append_paulis")(\[paulis, pauli\_labels])          | Append pauli at the end.                                                        |
| [`delete_qubits`](#qiskit.quantum_info.Pauli.delete_qubits "qiskit.quantum_info.Pauli.delete_qubits")(indices)                           | Delete pauli at the indices.                                                    |
| [`from_label`](#qiskit.quantum_info.Pauli.from_label "qiskit.quantum_info.Pauli.from_label")(label)                                      | Take pauli string to construct pauli.                                           |
| [`insert_paulis`](#qiskit.quantum_info.Pauli.insert_paulis "qiskit.quantum_info.Pauli.insert_paulis")(\[indices, paulis, pauli\_labels]) | Insert or append pauli to the targeted indices.                                 |
| [`kron`](#qiskit.quantum_info.Pauli.kron "qiskit.quantum_info.Pauli.kron")(other)                                                        | Kronecker product of two paulis.                                                |
| [`pauli_single`](#qiskit.quantum_info.Pauli.pauli_single "qiskit.quantum_info.Pauli.pauli_single")(num\_qubits, index, pauli\_label)     | Generate single qubit pauli at index with pauli\_label with length num\_qubits. |
| [`random`](#qiskit.quantum_info.Pauli.random "qiskit.quantum_info.Pauli.random")(num\_qubits\[, seed])                                   | Return a random Pauli on number of qubits.                                      |
| [`sgn_prod`](#qiskit.quantum_info.Pauli.sgn_prod "qiskit.quantum_info.Pauli.sgn_prod")(p1, p2)                                           | Multiply two Paulis and track the phase.                                        |
| [`to_instruction`](#qiskit.quantum_info.Pauli.to_instruction "qiskit.quantum_info.Pauli.to_instruction")()                               | Convert to Pauli circuit instruction.                                           |
| [`to_label`](#qiskit.quantum_info.Pauli.to_label "qiskit.quantum_info.Pauli.to_label")()                                                 | Present the pauli labels in I, X, Y, Z format.                                  |
| [`to_matrix`](#qiskit.quantum_info.Pauli.to_matrix "qiskit.quantum_info.Pauli.to_matrix")()                                              | Convert Pauli to a matrix representation.                                       |
| [`to_operator`](#qiskit.quantum_info.Pauli.to_operator "qiskit.quantum_info.Pauli.to_operator")()                                        | Convert to Operator object.                                                     |
| [`to_spmatrix`](#qiskit.quantum_info.Pauli.to_spmatrix "qiskit.quantum_info.Pauli.to_spmatrix")()                                        | Convert Pauli to a sparse matrix representation (CSR format).                   |
| [`update_x`](#qiskit.quantum_info.Pauli.update_x "qiskit.quantum_info.Pauli.update_x")(x\[, indices])                                    | Update partial or entire x.                                                     |
| [`update_z`](#qiskit.quantum_info.Pauli.update_z "qiskit.quantum_info.Pauli.update_z")(z\[, indices])                                    | Update partial or entire z.                                                     |

## Attributes

|                                                                                              |                   |
| -------------------------------------------------------------------------------------------- | ----------------- |
| [`num_qubits`](#qiskit.quantum_info.Pauli.num_qubits "qiskit.quantum_info.Pauli.num_qubits") | Number of qubits. |
| [`x`](#qiskit.quantum_info.Pauli.x "qiskit.quantum_info.Pauli.x")                            | Getter of x.      |
| [`z`](#qiskit.quantum_info.Pauli.z "qiskit.quantum_info.Pauli.z")                            | Getter of z.      |

<span id="undefined" />

`append_paulis(paulis=None, pauli_labels=None)`

Append pauli at the end.

**Parameters**

*   **paulis** ([*Pauli*](#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – the to-be-inserted or appended pauli
*   **pauli\_labels** (*list\[str]*) – the to-be-inserted or appended pauli label

**Returns**

self

**Return type**

[Pauli](#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

<span id="undefined" />

`delete_qubits(indices)`

Delete pauli at the indices.

**Parameters**

**indices** (*list\[int]*) – the indices of to-be-deleted paulis

**Returns**

self

**Return type**

[Pauli](#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

<span id="undefined" />

`classmethod from_label(label)`

Take pauli string to construct pauli.

The qubit index of pauli label is q\_\{n-1} … q\_0. E.g., a pauli is \$P\_\{n-1} otimes … otimes P\_0\$

**Parameters**

**label** (*str*) – pauli label

**Returns**

the constructed pauli

**Return type**

[Pauli](#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

**Raises**

**QiskitError** – invalid character in the label

<span id="undefined" />

`insert_paulis(indices=None, paulis=None, pauli_labels=None)`

Insert or append pauli to the targeted indices.

If indices is None, it means append at the end.

**Parameters**

*   **indices** (*list\[int]*) – the qubit indices to be inserted
*   **paulis** ([*Pauli*](#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – the to-be-inserted or appended pauli
*   **pauli\_labels** (*list\[str]*) – the to-be-inserted or appended pauli label

<Admonition title="Note" type="note">
  the indices refers to the location of original paulis, e.g. if indices = \[0, 2], pauli\_labels = \[‘Z’, ‘I’] and original pauli = ‘ZYXI’ the pauli will be updated to ZY’I’XI’Z’ ‘Z’ and ‘I’ are inserted before the qubit at 0 and 2.
</Admonition>

**Returns**

self

**Return type**

[Pauli](#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

**Raises**

**QiskitError** – provide both paulis and pauli\_labels at the same time

<span id="undefined" />

`kron(other)`

Kronecker product of two paulis.

Order is \$P\_2 (other) otimes P\_1 (self)\$

**Parameters**

**other** ([*Pauli*](#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – P2

**Returns**

self

**Return type**

[Pauli](#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

<span id="undefined" />

`property num_qubits`

Number of qubits.

<span id="undefined" />

`classmethod pauli_single(num_qubits, index, pauli_label)`

Generate single qubit pauli at index with pauli\_label with length num\_qubits.

**Parameters**

*   **num\_qubits** (*int*) – the length of pauli
*   **index** (*int*) – the qubit index to insert the single qubit
*   **pauli\_label** (*str*) – pauli

**Returns**

single qubit pauli

**Return type**

[Pauli](#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

<span id="undefined" />

`classmethod random(num_qubits, seed=None)`

Return a random Pauli on number of qubits.

**Parameters**

*   **num\_qubits** (*int*) – the number of qubits
*   **seed** (*int*) – Optional. To set a random seed.

**Returns**

the random pauli

**Return type**

[Pauli](#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

<span id="undefined" />

`static sgn_prod(p1, p2)`

Multiply two Paulis and track the phase.

\$P\_3 = P\_1 otimes P\_2\$: X\*Y

**Parameters**

*   **p1** ([*Pauli*](#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – pauli 1
*   **p2** ([*Pauli*](#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – pauli 2

**Returns**

the multiplied pauli complex: the sign of the multiplication, 1, -1, 1j or -1j

**Return type**

[Pauli](#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

<span id="undefined" />

`to_instruction()`

Convert to Pauli circuit instruction.

<span id="undefined" />

`to_label()`

Present the pauli labels in I, X, Y, Z format.

Order is \$q\_\{n-1} …. q\_0\$

**Returns**

pauli label

**Return type**

str

<span id="undefined" />

`to_matrix()`

Convert Pauli to a matrix representation.

Order is q\_\{n-1} …. q\_0, i.e., \$P\_\{n-1} otimes … P\_0\$

**Returns**

a matrix that represents the pauli.

**Return type**

numpy.array

<span id="undefined" />

`to_operator()`

Convert to Operator object.

<span id="undefined" />

`to_spmatrix()`

Convert Pauli to a sparse matrix representation (CSR format).

Order is q\_\{n-1} …. q\_0, i.e., \$P\_\{n-1} otimes … P\_0\$

**Returns**

a sparse matrix with CSR format that represents the pauli.

**Return type**

scipy.sparse.csr\_matrix

<span id="undefined" />

`update_x(x, indices=None)`

Update partial or entire x.

**Parameters**

*   **x** (*numpy.ndarray or list*) – to-be-updated x
*   **indices** (*numpy.ndarray or list or optional*) – to-be-updated qubit indices

**Returns**

self

**Return type**

[Pauli](#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

**Raises**

**QiskitError** – when updating whole x, the number of qubits must be the same.

<span id="undefined" />

`update_z(z, indices=None)`

Update partial or entire z.

**Parameters**

*   **z** (*numpy.ndarray or list*) – to-be-updated z
*   **indices** (*numpy.ndarray or list or optional*) – to-be-updated qubit indices

**Returns**

self

**Return type**

[Pauli](#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

**Raises**

**QiskitError** – when updating whole z, the number of qubits must be the same.

<span id="undefined" />

`property x`

Getter of x.

<span id="undefined" />

`property z`

Getter of z.
