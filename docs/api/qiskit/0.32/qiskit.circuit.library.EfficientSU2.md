# EfficientSU2

<span id="undefined" />

`EfficientSU2(num_qubits=None, su2_gates=None, entanglement='full', reps=3, skip_unentangled_qubits=False, skip_final_rotation_layer=False, parameter_prefix='θ', insert_barriers=False, initial_state=None, name='EfficientSU2')`

Bases: `qiskit.circuit.library.n_local.two_local.TwoLocal`

The hardware efficient SU(2) 2-local circuit.

The `EfficientSU2` circuit consists of layers of single qubit operations spanned by SU(2) and $CX$ entanglements. This is a heuristic pattern that can be used to prepare trial wave functions for variational quantum algorithms or classification circuit for machine learning.

SU(2) stands for special unitary group of degree 2, its elements are $2 \times 2$ unitary matrices with determinant 1, such as the Pauli rotation gates.

On 3 qubits and using the Pauli $Y$ and $Z$ su2\_gates as single qubit gates, the hardware efficient SU(2) circuit is represented by:

```python
┌──────────┐┌──────────┐ ░                 ░       ░ ┌───────────┐┌───────────┐
┤ RY(θ[0]) ├┤ RZ(θ[3]) ├─░───■────■────────░─ ... ─░─┤ RY(θ[12]) ├┤ RZ(θ[15]) ├
├──────────┤├──────────┤ ░ ┌─┴─┐  │        ░       ░ ├───────────┤├───────────┤
┤ RY(θ[1]) ├┤ RZ(θ[4]) ├─░─┤ X ├──┼────■───░─ ... ─░─┤ RY(θ[13]) ├┤ RZ(θ[16]) ├
├──────────┤├──────────┤ ░ └───┘┌─┴─┐┌─┴─┐ ░       ░ ├───────────┤├───────────┤
┤ RY(θ[2]) ├┤ RZ(θ[5]) ├─░──────┤ X ├┤ X ├─░─ ... ─░─┤ RY(θ[14]) ├┤ RZ(θ[17]) ├
└──────────┘└──────────┘ ░      └───┘└───┘ ░       ░ └───────────┘└───────────┘
```

See [`RealAmplitudes`](qiskit.circuit.library.RealAmplitudes#qiskit.circuit.library.RealAmplitudes "qiskit.circuit.library.RealAmplitudes") for more detail on the possible arguments and options such as skipping unentanglement qubits, which apply here too.

## Examples

```python
>>> circuit = EfficientSU2(3, reps=1)
>>> print(circuit)
     ┌──────────┐┌──────────┐          ┌──────────┐┌──────────┐
q_0: ┤ RY(θ[0]) ├┤ RZ(θ[3]) ├──■────■──┤ RY(θ[6]) ├┤ RZ(θ[9]) ├─────────────
     ├──────────┤├──────────┤┌─┴─┐  │  └──────────┘├──────────┤┌───────────┐
q_1: ┤ RY(θ[1]) ├┤ RZ(θ[4]) ├┤ X ├──┼───────■──────┤ RY(θ[7]) ├┤ RZ(θ[10]) ├
     ├──────────┤├──────────┤└───┘┌─┴─┐   ┌─┴─┐    ├──────────┤├───────────┤
q_2: ┤ RY(θ[2]) ├┤ RZ(θ[5]) ├─────┤ X ├───┤ X ├────┤ RY(θ[8]) ├┤ RZ(θ[11]) ├
     └──────────┘└──────────┘     └───┘   └───┘    └──────────┘└───────────┘
```

```python
>>> ansatz = EfficientSU2(4, su2_gates=['rx', 'y'], entanglement='circular', reps=1)
>>> qc = QuantumCircuit(4)  # create a circuit and append the RY variational form
>>> qc.compose(ansatz, inplace=True)
>>> qc.draw()
     ┌──────────┐┌───┐┌───┐     ┌──────────┐   ┌───┐
q_0: ┤ RX(θ[0]) ├┤ Y ├┤ X ├──■──┤ RX(θ[4]) ├───┤ Y ├─────────────────────
     ├──────────┤├───┤└─┬─┘┌─┴─┐└──────────┘┌──┴───┴───┐   ┌───┐
q_1: ┤ RX(θ[1]) ├┤ Y ├──┼──┤ X ├─────■──────┤ RX(θ[5]) ├───┤ Y ├─────────
     ├──────────┤├───┤  │  └───┘   ┌─┴─┐    └──────────┘┌──┴───┴───┐┌───┐
q_2: ┤ RX(θ[2]) ├┤ Y ├──┼──────────┤ X ├─────────■──────┤ RX(θ[6]) ├┤ Y ├
     ├──────────┤├───┤  │          └───┘       ┌─┴─┐    ├──────────┤├───┤
q_3: ┤ RX(θ[3]) ├┤ Y ├──■──────────────────────┤ X ├────┤ RX(θ[7]) ├┤ Y ├
     └──────────┘└───┘                         └───┘    └──────────┘└───┘
```

Create a new EfficientSU2 2-local circuit.

**Parameters**

*   **num\_qubits** (`Optional`\[`int`]) – The number of qubits of the EfficientSU2 circuit.
*   **reps** (`int`) – Specifies how often the structure of a rotation layer followed by an entanglement layer is repeated.
*   **su2\_gates** (`Union`\[`str`, `type`, `Instruction`, `QuantumCircuit`, `List`\[`Union`\[`str`, `type`, `Instruction`, `QuantumCircuit`]], `None`]) – The SU(2) single qubit gates to apply in single qubit gate layers. If only one gate is provided, the same gate is applied to each qubit. If a list of gates is provided, all gates are applied to each qubit in the provided order.
*   **entanglement** (`Union`\[`str`, `List`\[`List`\[`int`]], `Callable`\[\[`int`], `List`\[`int`]]]) – Specifies the entanglement structure. Can be a string (‘full’, ‘linear’ , ‘circular’ or ‘sca’), a list of integer-pairs specifying the indices of qubits entangled with one another, or a callable returning such a list provided with the index of the entanglement layer. See the Examples section of [`TwoLocal`](qiskit.circuit.library.TwoLocal#qiskit.circuit.library.TwoLocal "qiskit.circuit.library.TwoLocal") for more detail.
*   **initial\_state** (`Optional`\[`Any`]) – A QuantumCircuit object to prepend to the circuit.
*   **skip\_unentangled\_qubits** (`bool`) – If True, the single qubit gates are only applied to qubits that are entangled with another qubit. If False, the single qubit gates are applied to each qubit in the Ansatz. Defaults to False.
*   **skip\_final\_rotation\_layer** (`bool`) – If False, a rotation layer is added at the end of the ansatz. If True, no rotation layer is added.
*   **parameter\_prefix** (`str`) – The parameterized gates require a parameter to be defined, for which we use [`ParameterVector`](qiskit.circuit.ParameterVector#qiskit.circuit.ParameterVector "qiskit.circuit.ParameterVector").
*   **insert\_barriers** (`bool`) – If True, barriers are inserted in between each layer. If False, no barriers are inserted.

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

The number of total parameters that can be set to distinct values.

This does not change when the parameters are bound or exchanged for same parameters, and therefore is different from `num_parameters` which counts the number of unique [`Parameter`](qiskit.circuit.Parameter#qiskit.circuit.Parameter "qiskit.circuit.Parameter") objects currently in the circuit.

**Return type**

`int`

**Returns**

The number of parameters originally available in the circuit.

<Admonition title="Note" type="note">
  This quantity does not require the circuit to be built yet.
</Admonition>

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

Return the parameter bounds.

**Return type**

`List`\[`Tuple`\[`float`, `float`]]

**Returns**

The parameter bounds.

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
