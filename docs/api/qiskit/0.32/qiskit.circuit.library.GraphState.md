# GraphState

<span id="undefined" />

`GraphState(adjacency_matrix)`

Bases: `qiskit.circuit.quantumcircuit.QuantumCircuit`

Circuit to prepare a graph state.

Given a graph G = (V, E), with the set of vertices V and the set of edges E, the corresponding graph state is defined as

$$
|G\rangle = \prod_{(a,b) \in E} CZ_{(a,b)} {|+\rangle}^{\otimes V}
$$

Such a state can be prepared by first preparing all qubits in the $+$ state, then applying a $CZ$ gate for each corresponding graph edge.

Graph state preparation circuits are Clifford circuits, and thus easy to simulate classically. However, by adding a layer of measurements in a product basis at the end, there is evidence that the circuit becomes hard to simulate \[2].

**Reference Circuit:**

**References:**

**\[1] M. Hein, J. Eisert, H.J. Briegel, Multi-party Entanglement in Graph States,**

[arXiv:0307130](https://arxiv.org/pdf/quant-ph/0307130.pdf)

**\[2] D. Koh, Further Extensions of Clifford Circuits & their Classical Simulation Complexities.**

[arXiv:1512.07892](https://arxiv.org/pdf/1512.07892.pdf)

Create graph state preparation circuit.

**Parameters**

**adjacency\_matrix** (`Union`\[`List`, `array`]) – input graph as n-by-n list of 0-1 lists

**Raises**

**CircuitError** – If adjacency\_matrix is not symmetric.

The circuit prepares a graph state with the given adjacency matrix.

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
