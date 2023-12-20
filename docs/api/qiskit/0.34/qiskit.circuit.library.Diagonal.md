# Diagonal

<span id="undefined" />

`Diagonal(diag)`

Bases: `qiskit.circuit.quantumcircuit.QuantumCircuit`

Diagonal circuit.

Circuit symbol:

```python
     ┌───────────┐
q_0: ┤0          ├
     │           │
q_1: ┤1 Diagonal ├
     │           │
q_2: ┤2          ├
     └───────────┘
```

Matrix form:

$$
\begin{split}\text{DiagonalGate}\ q_0, q_1, .., q_{n-1} =
    \begin{pmatrix}
        D[0]    & 0         & \dots     & 0 \\
        0       & D[1]      & \dots     & 0 \\
        \vdots  & \vdots    & \ddots    & 0 \\
        0       & 0         & \dots     & D[n-1]
    \end{pmatrix}\end{split}
$$

Diagonal gates are useful as representations of Boolean functions, as they can map from \{0,1}^2\*\*n to \{0,1}^2\*\*n space. For example a phase oracle can be seen as a diagonal gate with \{+1, -1} on the diagonals. Such an oracle will induce a +1 or -1 phase on the amplitude of any corresponding basis state.

Diagonal gates appear in many classically hard oracular problems such as Forrelation or Hidden Shift circuits.

Diagonal gates are represented and simulated more efficiently than a dense 2\*\*n x 2\*\*n unitary matrix.

The reference implementation is via the method described in Theorem 7 of \[1]. The code is based on Emanuel Malvetti’s semester thesis at ETH in 2018, supervised by Raban Iten and Prof. Renato Renner.

**Reference:**

\[1] Shende et al., Synthesis of Quantum Logic Circuits, 2009 [arXiv:0406176](https://arxiv.org/pdf/quant-ph/0406176.pdf)

Create a new Diagonal circuit.

**Parameters**

**diag** (`Union`\[`List`, `array`]) – list of the 2^k diagonal entries (for a diagonal gate on k qubits).

**Raises**

**CircuitError** – if the list of the diagonal entries or the qubit list is in bad format; if the number of diagonal entries is not 2^k, where k denotes the number of qubits

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
