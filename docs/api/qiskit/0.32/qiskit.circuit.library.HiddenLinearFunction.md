# HiddenLinearFunction

<span id="undefined" />

`HiddenLinearFunction(adjacency_matrix)`

Bases: `qiskit.circuit.quantumcircuit.QuantumCircuit`

Circuit to solve the hidden linear function problem.

The 2D Hidden Linear Function problem is determined by a 2D adjacency matrix A, where only elements that are nearest-neighbor on a grid have non-zero entries. Each row/column corresponds to one binary variable $x_i$.

The hidden linear function problem is as follows:

Consider the quadratic form

$$
q(x) = \sum_{i,j=1}^{n}{x_i x_j} ~(\mathrm{mod}~ 4)
$$

and restrict $q(x)$ onto the nullspace of A. This results in a linear function.

$$
2 \sum_{i=1}^{n}{z_i x_i} ~(\mathrm{mod}~ 4)  \forall  x \in \mathrm{Ker}(A)
$$

and the goal is to recover this linear function (equivalently a vector $[z_0, ..., z_{n-1}]$). There can be multiple solutions.

In \[1] it is shown that the present circuit solves this problem on a quantum computer in constant depth, whereas any corresponding solution on a classical computer would require circuits that grow logarithmically with $n$. Thus this circuit is an example of quantum advantage with shallow circuits.

**Reference Circuit:**

>

**Reference:**

\[1] S. Bravyi, D. Gosset, R. Koenig, Quantum Advantage with Shallow Circuits, 2017. [arXiv:1704.00690](https://arxiv.org/abs/1704.00690)

Create new HLF circuit.

**Parameters**

**adjacency\_matrix** (`Union`\[`List`\[`List`\[`int`]], `ndarray`]) – a symmetric n-by-n list of 0-1 lists. n will be the number of qubits.

**Raises**

**CircuitError** – If A is not symmetric.

## Attributes

<span id="undefined" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

<span id="undefined" />

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

<span id="undefined" />

### clbits

Returns a list of classical bits in the order that the registers were added.

<span id="undefined" />

### data

Return the circuit data (instructions and context).

**Returns**

a list-like object containing the tuples for the circuit’s data.

Each tuple is in the format `(instruction, qargs, cargs)`, where instruction is an Instruction (or subclass) object, qargs is a list of Qubit objects, and cargs is a list of Clbit objects.

**Return type**

QuantumCircuitData

<span id="undefined" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="undefined" />

### global\_phase

Return the global phase of the circuit in radians.

<span id="undefined" />

### header

`= 'OPENQASM 2.0;'`

<span id="undefined" />

### instances

`= 16`

<span id="undefined" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

<span id="undefined" />

### num\_ancillas

Return the number of ancilla qubits.

<span id="undefined" />

### num\_clbits

Return number of classical bits.

<span id="undefined" />

### num\_parameters

Convenience function to get the number of parameter objects in the circuit.

<span id="undefined" />

### num\_qubits

Return number of qubits.

<span id="undefined" />

### parameters

Convenience function to get the parameters defined in the parameter table.

<span id="undefined" />

### prefix

`= 'circuit'`

<span id="undefined" />

### qubits

Returns a list of quantum bits in the order that the registers were added.
