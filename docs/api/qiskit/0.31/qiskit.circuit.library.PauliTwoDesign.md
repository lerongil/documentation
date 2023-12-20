# PauliTwoDesign

<span id="undefined" />

`PauliTwoDesign(num_qubits=None, reps=3, seed=None, insert_barriers=False, name='PauliTwoDesign')`

Bases: `qiskit.circuit.library.n_local.two_local.TwoLocal`

The Pauli Two-Design ansatz.

This class implements a particular form of a 2-design circuit \[1], which is frequently studied in quantum machine learning literature, such as e.g. the investigating of Barren plateaus in variational algorithms \[2].

The circuit consists of alternating rotation and entanglement layers with an initial layer of $\sqrt{H} = RY(\pi/4)$ gates. The rotation layers contain single qubit Pauli rotations, where the axis is chosen uniformly at random to be X, Y or Z. The entanglement layers is compromised of pairwise CZ gates with a total depth of 2.

For instance, the circuit could look like this (but note that choosing a different seed yields different Pauli rotations).

```python
     ┌─────────┐┌──────────┐       ░ ┌──────────┐       ░  ┌──────────┐
q_0: ┤ RY(π/4) ├┤ RZ(θ[0]) ├─■─────░─┤ RY(θ[4]) ├─■─────░──┤ RZ(θ[8]) ├
     ├─────────┤├──────────┤ │     ░ ├──────────┤ │     ░  ├──────────┤
q_1: ┤ RY(π/4) ├┤ RZ(θ[1]) ├─■──■──░─┤ RY(θ[5]) ├─■──■──░──┤ RX(θ[9]) ├
     ├─────────┤├──────────┤    │  ░ ├──────────┤    │  ░ ┌┴──────────┤
q_2: ┤ RY(π/4) ├┤ RX(θ[2]) ├─■──■──░─┤ RY(θ[6]) ├─■──■──░─┤ RX(θ[10]) ├
     ├─────────┤├──────────┤ │     ░ ├──────────┤ │     ░ ├───────────┤
q_3: ┤ RY(π/4) ├┤ RZ(θ[3]) ├─■─────░─┤ RX(θ[7]) ├─■─────░─┤ RY(θ[11]) ├
     └─────────┘└──────────┘       ░ └──────────┘       ░ └───────────┘
```

## Examples

## References

**\[1]: Nakata et al., Unitary 2-designs from random X- and Z-diagonal unitaries.**

[arXiv:1502.07514](https://arxiv.org/pdf/1502.07514.pdf)

**\[2]: McClean et al., Barren plateaus in quantum neural network training landscapes.**

[arXiv:1803.11173](https://arxiv.org/pdf/1803.11173.pdf)

Construct a new two-local circuit.

**Parameters**

*   **num\_qubits** (`Optional`\[`int`]) – The number of qubits of the two-local circuit.
*   **rotation\_blocks** – The gates used in the rotation layer. Can be specified via the name of a gate (e.g. ‘ry’) or the gate type itself (e.g. RYGate). If only one gate is provided, the gate same gate is applied to each qubit. If a list of gates is provided, all gates are applied to each qubit in the provided order. See the Examples section for more detail.
*   **entanglement\_blocks** – The gates used in the entanglement layer. Can be specified in the same format as rotation\_blocks.
*   **entanglement** – Specifies the entanglement structure. Can be a string (‘full’, ‘linear’ , ‘circular’ or ‘sca’), a list of integer-pairs specifying the indices of qubits entangled with one another, or a callable returning such a list provided with the index of the entanglement layer. Default to ‘full’ entanglement. See the Examples section for more detail.
*   **reps** (`int`) – Specifies how often a block consisting of a rotation layer and entanglement layer is repeated.
*   **skip\_unentangled\_qubits** – If True, the single qubit gates are only applied to qubits that are entangled with another qubit. If False, the single qubit gates are applied to each qubit in the Ansatz. Defaults to False.
*   **skip\_final\_rotation\_layer** – If False, a rotation layer is added at the end of the ansatz. If True, no rotation layer is added.
*   **parameter\_prefix** – The parameterized gates require a parameter to be defined, for which we use instances of qiskit.circuit.Parameter. The name of each parameter will be this specified prefix plus its index.
*   **insert\_barriers** (`bool`) – If True, barriers are inserted in between each layer. If False, no barriers are inserted. Defaults to False.
*   **initial\_state** – A QuantumCircuit object to prepend to the circuit.

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

<span id="undefined" />

### entanglement

Get the entanglement strategy.

**Return type**

`Union`\[`str`, `List`\[`str`], `List`\[`List`\[`str`]], `List`\[`int`], `List`\[`List`\[`int`]], `List`\[`List`\[`List`\[`int`]]], `List`\[`List`\[`List`\[`List`\[`int`]]]], `Callable`\[\[`int`], `str`], `Callable`\[\[`int`], `List`\[`List`\[`int`]]]]

**Returns**

The entanglement strategy, see `get_entangler_map()` for more detail on how the format is interpreted.

<span id="undefined" />

### entanglement\_blocks

The blocks in the entanglement layers.

**Return type**

`List`\[`Instruction`]

**Returns**

The blocks in the entanglement layers.

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

### initial\_state

Return the initial state that is added in front of the n-local circuit.

**Return type**

`Any`

**Returns**

The initial state.

<span id="undefined" />

### insert\_barriers

If barriers are inserted in between the layers or not.

**Return type**

`bool`

**Returns**

True, if barriers are inserted in between the layers, False if not.

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

### num\_layers

Return the number of layers in the n-local circuit.

**Return type**

`int`

**Returns**

The number of layers in the circuit.

<span id="undefined" />

### num\_parameters

**Return type**

`int`

<span id="undefined" />

### num\_parameters\_settable

Return the number of settable parameters.

**Return type**

`int`

**Returns**

The number of possibly distinct parameters.

<span id="undefined" />

### num\_qubits

Returns the number of qubits in this circuit.

**Return type**

`int`

**Returns**

The number of qubits.

<span id="undefined" />

### ordered\_parameters

The parameters used in the underlying circuit.

This includes float values and duplicates.

## Examples

```python
>>> # prepare circuit ...
>>> print(nlocal)
     ┌───────┐┌──────────┐┌──────────┐┌──────────┐
q_0: ┤ Ry(1) ├┤ Ry(θ[1]) ├┤ Ry(θ[1]) ├┤ Ry(θ[3]) ├
     └───────┘└──────────┘└──────────┘└──────────┘
>>> nlocal.parameters
{Parameter(θ[1]), Parameter(θ[3])}
>>> nlocal.ordered_parameters
[1, Parameter(θ[1]), Parameter(θ[1]), Parameter(θ[3])]
```

**Return type**

`List`\[`Parameter`]

**Returns**

The parameters objects used in the circuit.

<span id="undefined" />

### parameter\_bounds

The parameter bounds for the unbound parameters in the circuit.

**Return type**

`Optional`\[`List`\[`Tuple`\[`float`, `float`]]]

**Returns**

A list of pairs indicating the bounds, as (lower, upper). None indicates an unbounded parameter in the corresponding direction. If None is returned, problem is fully unbounded.

<span id="undefined" />

### parameters

**Return type**

`ParameterView`

<span id="undefined" />

### preferred\_init\_points

The initial points for the parameters. Can be stored as initial guess in optimization.

**Return type**

`Optional`\[`List`\[`float`]]

**Returns**

The initial values for the parameters, or None, if none have been set.

<span id="undefined" />

### prefix

`= 'circuit'`

<span id="undefined" />

### qregs

A list of the quantum registers associated with the circuit.

<span id="undefined" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

<span id="undefined" />

### reps

The number of times rotation and entanglement block are repeated.

**Return type**

`int`

**Returns**

The number of repetitions.

<span id="undefined" />

### rotation\_blocks

The blocks in the rotation layers.

**Return type**

`List`\[`Instruction`]

**Returns**

The blocks in the rotation layers.
