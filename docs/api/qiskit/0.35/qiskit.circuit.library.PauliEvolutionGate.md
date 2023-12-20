# PauliEvolutionGate

<span id="undefined" />

`PauliEvolutionGate(operator, time=1.0, label=None, synthesis=None)`

Bases: `qiskit.circuit.gate.Gate`

Time-evolution of an operator consisting of Paulis.

For an operator $H$ consisting of Pauli terms and (real) evolution time $t$ this gate implements

$$
U(t) = e^{-itH}.
$$

This gate serves as a high-level definition of the evolution and can be synthesized into a circuit using different algorithms.

The evolution gates are related to the Pauli rotation gates by a factor of 2. For example the time evolution of the Pauli $X$ operator is connected to the Pauli $X$ rotation $R_X$ by

$$
U(t) = e^{-itX} = R_X(2t).
$$

**Examples:**

```python
from qiskit.circuit import QuantumCircuit
from qiskit.circuit.library import PauliEvolutionGate
from qiskit.opflow import I, Z, X

# build the evolution gate
operator = (Z ^ Z) - 0.1 * (X ^ I)
evo = PauliEvolutionGate(operator, time=0.2)

# plug it into a circuit
circuit = QuantumCircuit(2)
circuit.append(evo, range(2))
print(circuit.draw())
```

The above will print (note that the `-0.1` coefficient is not printed!):

```python
     ┌──────────────────────────┐
q_0: ┤0                         ├
     │  exp(-it (ZZ + XI))(0.2) │
q_1: ┤1                         ├
     └──────────────────────────┘
```

**References:**

\[1] G. Li et al. Paulihedral: A Generalized Block-Wise Compiler Optimization Framework For Quantum Simulation Kernels (2021). \[[arXiv:2109.03371](https://arxiv.org/abs/2109.03371)]

**Parameters**

*   **operator** (*Pauli | PauliOp | SparsePauliOp | PauliSumOp | list*) – The operator to evolve. Can also be provided as list of non-commuting operators where the elements are sums of commuting operators. For example: `[XY + YX, ZZ + ZI + IZ, YY]`.
*   **time** (`Union`\[`int`, `float`, `ParameterExpression`]) – The evolution time.
*   **label** (`Optional`\[`str`]) – A label for the gate to display in visualizations. Per default, the label is set to `exp(-it <operators>)` where `<operators>` is the sum of the Paulis. Note that the label does not include any coefficients of the Paulis. See the class docstring for an example.
*   **synthesis** (`Optional`\[`EvolutionSynthesis`]) – A synthesis strategy. If None, the default synthesis is the Lie-Trotter product formula with a single repetition.

## Methods Defined Here

|                                                                                                                                                                                                                  |                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [`validate_parameter`](qiskit.circuit.library.PauliEvolutionGate.validate_parameter#qiskit.circuit.library.PauliEvolutionGate.validate_parameter "qiskit.circuit.library.PauliEvolutionGate.validate_parameter") | Gate parameters should be int, float, or ParameterExpression |

## Attributes

<span id="undefined" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[`Clbit`]

<span id="undefined" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="undefined" />

### definition

Return definition in terms of other basic gates.

<span id="undefined" />

### duration

Get the duration.

<span id="undefined" />

### label

Return instruction label

**Return type**

`str`

<span id="undefined" />

### name

Return the name.

<span id="undefined" />

### num\_clbits

Return the number of clbits.

<span id="undefined" />

### num\_qubits

Return the number of qubits.

<span id="undefined" />

### params

return instruction params.

<span id="undefined" />

### time

Return the evolution time as stored in the gate parameters.

**Return type**

`Union`\[`float`, `ParameterExpression`]

**Returns**

The evolution time.

<span id="undefined" />

### unit

Get the time unit of duration.
