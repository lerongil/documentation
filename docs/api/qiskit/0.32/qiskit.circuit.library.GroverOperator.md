# GroverOperator

<span id="undefined" />

`GroverOperator(oracle, state_preparation=None, zero_reflection=None, reflection_qubits=None, insert_barriers=False, mcx_mode='noancilla', name='Q')`

Bases: `qiskit.circuit.quantumcircuit.QuantumCircuit`

The Grover operator.

Grover’s search algorithm \[1, 2] consists of repeated applications of the so-called Grover operator used to amplify the amplitudes of the desired output states. This operator, $\mathcal{Q}$, consists of the phase oracle, $\mathcal{S}_f$, zero phase-shift or zero reflection, $\mathcal{S}_0$, and an input state preparation $\mathcal{A}$:

$$
\mathcal{Q} = \mathcal{A} \mathcal{S}_0 \mathcal{A}^\dagger \mathcal{S}_f
$$

In the standard Grover search we have $\mathcal{A} = H^{\otimes n}$:

$$
\mathcal{Q} = H^{\otimes n} \mathcal{S}_0 H^{\otimes n} \mathcal{S}_f
            = D \mathcal{S_f}
$$

The operation $D = H^{\otimes n} \mathcal{S}_0 H^{\otimes n}$ is also referred to as diffusion operator. In this formulation we can see that Grover’s operator consists of two steps: first, the phase oracle multiplies the good states by -1 (with $\mathcal{S}_f$) and then the whole state is reflected around the mean (with $D$).

This class allows setting a different state preparation, as in quantum amplitude amplification (a generalization of Grover’s algorithm), $\mathcal{A}$ might not be a layer of Hardamard gates \[3].

The action of the phase oracle $\mathcal{S}_f$ is defined as

$$
\mathcal{S}_f: |x\rangle \mapsto (-1)^{f(x)}|x\rangle
$$

where $f(x) = 1$ if $x$ is a good state and 0 otherwise. To highlight the fact that this oracle flips the phase of the good states and does not flip the state of a result qubit, we call $\mathcal{S}_f$ a phase oracle.

Note that you can easily construct a phase oracle from a bitflip oracle by sandwiching the controlled X gate on the result qubit by a X and H gate. For instance

```python
Bitflip oracle     Phaseflip oracle
q_0: ──■──         q_0: ────────────■────────────
     ┌─┴─┐              ┌───┐┌───┐┌─┴─┐┌───┐┌───┐
out: ┤ X ├         out: ┤ X ├┤ H ├┤ X ├┤ H ├┤ X ├
     └───┘              └───┘└───┘└───┘└───┘└───┘
```

There is some flexibility in defining the oracle and $\mathcal{A}$ operator. Before the Grover operator is applied in Grover’s algorithm, the qubits are first prepared with one application of the $\mathcal{A}$ operator (or Hadamard gates in the standard formulation). Thus, we always have operation of the form $\mathcal{A} \mathcal{S}_f \mathcal{A}^\dagger$. Therefore it is possible to move bitflip logic into $\mathcal{A}$ and leaving the oracle only to do phaseflips via Z gates based on the bitflips. One possible use-case for this are oracles that do not uncompute the state qubits.

The zero reflection $\mathcal{S}_0$ is usually defined as

$$
\mathcal{S}_0 = 2 |0\rangle^{\otimes n} \langle 0|^{\otimes n} - \mathbb{I}_n
$$

where $\mathbb{I}_n$ is the identity on $n$ qubits. By default, this class implements the negative version $2 |0\rangle^{\otimes n} \langle 0|^{\otimes n} - \mathbb{I}_n$, since this can simply be implemented with a multi-controlled Z sandwiched by X gates on the target qubit and the introduced global phase does not matter for Grover’s algorithm.

## Examples

```python
>>> from qiskit.circuit import QuantumCircuit
>>> from qiskit.circuit.library import GroverOperator
>>> oracle = QuantumCircuit(2)
>>> oracle.z(0)  # good state = first qubit is |1>
>>> grover_op = GroverOperator(oracle, insert_barriers=True)
>>> grover_op.decompose().draw()
         ┌───┐ ░ ┌───┐ ░ ┌───┐          ┌───┐      ░ ┌───┐
state_0: ┤ Z ├─░─┤ H ├─░─┤ X ├───────■──┤ X ├──────░─┤ H ├
         └───┘ ░ ├───┤ ░ ├───┤┌───┐┌─┴─┐├───┤┌───┐ ░ ├───┤
state_1: ──────░─┤ H ├─░─┤ X ├┤ H ├┤ X ├┤ H ├┤ X ├─░─┤ H ├
               ░ └───┘ ░ └───┘└───┘└───┘└───┘└───┘ ░ └───┘
```

```python
>>> oracle = QuantumCircuit(1)
>>> oracle.z(0)  # the qubit state |1> is the good state
>>> state_preparation = QuantumCircuit(1)
>>> state_preparation.ry(0.2, 0)  # non-uniform state preparation
>>> grover_op = GroverOperator(oracle, state_preparation)
>>> grover_op.decompose().draw()
         ┌───┐┌──────────┐┌───┐┌───┐┌───┐┌─────────┐
state_0: ┤ Z ├┤ RY(-0.2) ├┤ X ├┤ Z ├┤ X ├┤ RY(0.2) ├
         └───┘└──────────┘└───┘└───┘└───┘└─────────┘
```

```python
>>> oracle = QuantumCircuit(4)
>>> oracle.z(3)
>>> reflection_qubits = [0, 3]
>>> state_preparation = QuantumCircuit(4)
>>> state_preparation.cry(0.1, 0, 3)
>>> state_preparation.ry(0.5, 3)
>>> grover_op = GroverOperator(oracle, state_preparation,
... reflection_qubits=reflection_qubits)
>>> grover_op.decompose().draw()
                                      ┌───┐          ┌───┐
state_0: ──────────────────────■──────┤ X ├───────■──┤ X ├──────────■────────────────
                               │      └───┘       │  └───┘          │
state_1: ──────────────────────┼──────────────────┼─────────────────┼────────────────
                               │                  │                 │
state_2: ──────────────────────┼──────────────────┼─────────────────┼────────────────
         ┌───┐┌──────────┐┌────┴─────┐┌───┐┌───┐┌─┴─┐┌───┐┌───┐┌────┴────┐┌─────────┐
state_3: ┤ Z ├┤ RY(-0.5) ├┤ RY(-0.1) ├┤ X ├┤ H ├┤ X ├┤ H ├┤ X ├┤ RY(0.1) ├┤ RY(0.5) ├
         └───┘└──────────┘└──────────┘└───┘└───┘└───┘└───┘└───┘└─────────┘└─────────┘
```

```python
>>> mark_state = Statevector.from_label('011')
>>> diffuse_operator = 2 * DensityMatrix.from_label('000') - Operator.from_label('III')
>>> grover_op = GroverOperator(oracle=mark_state, zero_reflection=diffuse_operator)
>>> grover_op.decompose().draw(fold=70)
         ┌─────────────────┐      ┌───┐                          »
state_0: ┤0                ├──────┤ H ├──────────────────────────»
         │                 │┌─────┴───┴─────┐     ┌───┐          »
state_1: ┤1 UCRZ(0,pi,0,0) ├┤0              ├─────┤ H ├──────────»
         │                 ││  UCRZ(pi/2,0) │┌────┴───┴────┐┌───┐»
state_2: ┤2                ├┤1              ├┤ UCRZ(-pi/4) ├┤ H ├»
         └─────────────────┘└───────────────┘└─────────────┘└───┘»
«         ┌─────────────────┐      ┌───┐
«state_0: ┤0                ├──────┤ H ├─────────────────────────
«         │                 │┌─────┴───┴─────┐    ┌───┐
«state_1: ┤1 UCRZ(pi,0,0,0) ├┤0              ├────┤ H ├──────────
«         │                 ││  UCRZ(pi/2,0) │┌───┴───┴────┐┌───┐
«state_2: ┤2                ├┤1              ├┤ UCRZ(pi/4) ├┤ H ├
«         └─────────────────┘└───────────────┘└────────────┘└───┘
```

## References

**\[1]: L. K. Grover (1996), A fast quantum mechanical algorithm for database search,**

[arXiv:quant-ph/9605043](https://arxiv.org/abs/quant-ph/9605043).

**\[2]: I. Chuang & M. Nielsen, Quantum Computation and Quantum Information,**

Cambridge: Cambridge University Press, 2000. Chapter 6.1.2.

**\[3]: Brassard, G., Hoyer, P., Mosca, M., & Tapp, A. (2000).**

Quantum Amplitude Amplification and Estimation. [arXiv:quant-ph/0005055](http://arxiv.org/abs/quant-ph/0005055).

**Parameters**

*   **oracle** (`Union`\[`QuantumCircuit`, `Statevector`]) – The phase oracle implementing a reflection about the bad state. Note that this is not a bitflip oracle, see the docstring for more information.
*   **state\_preparation** (`Optional`\[`QuantumCircuit`]) – The operator preparing the good and bad state. For Grover’s algorithm, this is a n-qubit Hadamard gate and for amplitude amplification or estimation the operator $\mathcal{A}$.
*   **zero\_reflection** (`Union`\[`QuantumCircuit`, `DensityMatrix`, `Operator`, `None`]) – The reflection about the zero state, $\mathcal{S}_0$.
*   **reflection\_qubits** (`Optional`\[`List`\[`int`]]) – Qubits on which the zero reflection acts on.
*   **insert\_barriers** (`bool`) – Whether barriers should be inserted between the reflections and A.
*   **mcx\_mode** (`str`) – The mode to use for building the default zero reflection.
*   **name** (`str`) – The name of the circuit.

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

### oracle

The oracle implementing a reflection about the bad state.

<span id="undefined" />

### parameters

Convenience function to get the parameters defined in the parameter table.

<span id="undefined" />

### prefix

`= 'circuit'`

<span id="undefined" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

<span id="undefined" />

### reflection\_qubits

Reflection qubits, on which S0 is applied (if S0 is not user-specified).

<span id="undefined" />

### state\_preparation

The subcircuit implementing the A operator or Hadamards.

**Return type**

`QuantumCircuit`

<span id="undefined" />

### zero\_reflection

The subcircuit implementing the reflection about 0.

**Return type**

`QuantumCircuit`
