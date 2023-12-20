# CUGate

<span id="undefined" />

`CUGate(theta, phi, lam, gamma, label=None, ctrl_state=None)`

Bases: `qiskit.circuit.controlledgate.ControlledGate`

Controlled-U gate (4-parameter two-qubit gate).

This is a controlled version of the U gate (generic single qubit rotation), including a possible global phase $e^{i\gamma}$ of the U gate.

**Circuit symbol:**

```python
q_0: ──────■──────
     ┌─────┴──────┐
q_1: ┤ U(ϴ,φ,λ,γ) ├
     └────────────┘
```

**Matrix representation:**

$$
 \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}CU(\theta, \phi, \lambda, \gamma)\ q_0, q_1 =
    I \otimes |0\rangle\langle 0| +
    e^{i\gamma} U(\theta,\phi,\lambda) \otimes |1\rangle\langle 1| =
    \begin{pmatrix}
        1 & 0                           & 0 & 0 \\
        0 & e^{i\gamma}\cos(\th)        & 0 & -e^{i(\gamma + \lambda)}\sin(\th) \\
        0 & 0                           & 1 & 0 \\
        0 & e^{i(\gamma+\phi)}\sin(\th) & 0 & e^{i(\gamma+\phi+\lambda)}\cos(\th)
    \end{pmatrix}\end{split}\end{aligned}\end{align} 
$$

<Admonition title="Note" type="note">
  In Qiskit’s convention, higher qubit indices are more significant (little endian convention). In many textbooks, controlled gates are presented with the assumption of more significant qubits as control, which in our case would be q\_1. Thus a textbook matrix for this gate will be:

  ```python
       ┌────────────┐
  q_0: ┤ U(ϴ,φ,λ,γ) ├
       └─────┬──────┘
  q_1: ──────■───────
  ```

  $$
  \begin{split}CU(\theta, \phi, \lambda, \gamma)\ q_1, q_0 =
      |0\rangle\langle 0| \otimes I +
      e^{i\gamma}|1\rangle\langle 1| \otimes U(\theta,\phi,\lambda) =
      \begin{pmatrix}
          1 & 0 & 0                             & 0 \\
          0 & 1 & 0                             & 0 \\
          0 & 0 & e^{i\gamma} \cos(\th)         & -e^{i(\gamma + \lambda)}\sin(\th) \\
          0 & 0 & e^{i(\gamma + \phi)}\sin(\th) & e^{i(\gamma + \phi+\lambda)}\cos(\th)
      \end{pmatrix}\end{split}
  $$
</Admonition>

Create new CU gate.

## Methods Defined Here

|                                                                                                                                  |                          |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| [`inverse`](qiskit.circuit.library.CUGate.inverse#qiskit.circuit.library.CUGate.inverse "qiskit.circuit.library.CUGate.inverse") | Return inverted CU gate. |

## Attributes

<span id="undefined" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[`Clbit`]

<span id="undefined" />

### ctrl\_state

Return the control state of the gate as a decimal integer.

**Return type**

`int`

<span id="undefined" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="undefined" />

### definition

Return definition in terms of other basic gates. If the gate has open controls, as determined from self.ctrl\_state, the returned definition is conjugated with X without changing the internal \_definition.

**Return type**

`List`

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

Get name of gate. If the gate has open controls the gate name will become:

> \<original\_name\_o\<ctrl\_state>

where \<original\_name> is the gate name for the default case of closed control qubits and \<ctrl\_state> is the integer value of the control state for the gate.

**Return type**

`str`

<span id="undefined" />

### num\_clbits

Return the number of clbits.

<span id="undefined" />

### num\_ctrl\_qubits

Get number of control qubits.

**Returns**

The number of control qubits for the gate.

**Return type**

int

<span id="undefined" />

### num\_qubits

Return the number of qubits.

<span id="undefined" />

### params

Get parameters from base\_gate.

**Returns**

List of gate parameters.

**Return type**

list

**Raises**

**CircuitError** – Controlled gate does not define a base gate

<span id="undefined" />

### unit

Get the time unit of duration.
