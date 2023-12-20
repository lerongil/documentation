# QuantumVolume

<span id="undefined" />

`QuantumVolume(num_qubits, depth=None, seed=None, classical_permutation=True)`

Bases: `qiskit.circuit.quantumcircuit.QuantumCircuit`

A quantum volume model circuit.

The model circuits are random instances of circuits used to measure the Quantum Volume metric, as introduced in \[1].

The model circuits consist of layers of Haar random elements of SU(4) applied between corresponding pairs of qubits in a random bipartition.

**Reference Circuit:**

![../\_images/qiskit.circuit.library.QuantumVolume\_0\_0.png](/images/api/qiskit/0.34/qiskit.circuit.library.QuantumVolume_0_0.png)

**Expanded Circuit:**

**References:**

\[1] A. Cross et al. Validating quantum computers using randomized model circuits, Phys. Rev. A 100, 032328 (2019). \[[arXiv:1811.12926](https://arxiv.org/abs/1811.12926)]

Create quantum volume model circuit of size num\_qubits x depth.

**Parameters**

*   **num\_qubits** (`int`) – number of active qubits in model circuit.
*   **depth** (`Optional`\[`int`]) – layers of SU(4) operations in model circuit.
*   **seed** (`Union`\[`int`, `Generator`, `None`]) – Random number generator or generator seed.
*   **classical\_permutation** (`bool`) – use classical permutations at every layer, rather than quantum.

## Attributes

<span id="undefined" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

**Return type**

`List`\[`AncillaQubit`]

<span id="undefined" />

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

**Return type**

`dict`

<span id="undefined" />

### clbits

Returns a list of classical bits in the order that the registers were added.

**Return type**

`List`\[`Clbit`]

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

**Return type**

`Union`\[`ParameterExpression`, `float`]

<span id="undefined" />

### header

`= 'OPENQASM 2.0;'`

<span id="undefined" />

### instances

`= 9`

<span id="undefined" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

**Return type**

`dict`

<span id="undefined" />

### num\_ancillas

Return the number of ancilla qubits.

**Return type**

`int`

<span id="undefined" />

### num\_clbits

Return number of classical bits.

**Return type**

`int`

<span id="undefined" />

### num\_parameters

Convenience function to get the number of parameter objects in the circuit.

**Return type**

`int`

<span id="undefined" />

### num\_qubits

Return number of qubits.

**Return type**

`int`

<span id="undefined" />

### parameters

Convenience function to get the parameters defined in the parameter table.

**Return type**

`ParameterView`

<span id="undefined" />

### prefix

`= 'circuit'`

<span id="undefined" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

**Return type**

`List`\[`Qubit`]
