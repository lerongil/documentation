# CU3Gate

<span id="undefined" />

`CU3Gate(theta, phi, lam, label=None, ctrl_state=None)`

Bases: `qiskit.circuit.controlledgate.ControlledGate`

Controlled-U3 gate (3-parameter two-qubit gate).

This is a controlled version of the U3 gate (generic single qubit rotation). It is restricted to 3 parameters, and so cannot cover generic two-qubit controlled gates).

**Circuit symbol:**

```python
q_0: ──────■──────
     ┌─────┴─────┐
q_1: ┤ U3(ϴ,φ,λ) ├
     └───────────┘
```

**Matrix representation:**

$$
 \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}CU3(\theta, \phi, \lambda)\ q_0, q_1 =
    I \otimes |0\rangle\langle 0| +
    U3(\theta,\phi,\lambda) \otimes |1\rangle\langle 1| =
    \begin{pmatrix}
        1 & 0                   & 0 & 0 \\
        0 & \cos(\th)           & 0 & -e^{i\lambda}\sin(\th) \\
        0 & 0                   & 1 & 0 \\
        0 & e^{i\phi}\sin(\th)  & 0 & e^{i(\phi+\lambda)}\cos(\th)
    \end{pmatrix}\end{split}\end{aligned}\end{align} 
$$

<Admonition title="Note" type="note">
  In Qiskit’s convention, higher qubit indices are more significant (little endian convention). In many textbooks, controlled gates are presented with the assumption of more significant qubits as control, which in our case would be q\_1. Thus a textbook matrix for this gate will be:

  ```python
       ┌───────────┐
  q_0: ┤ U3(ϴ,φ,λ) ├
       └─────┬─────┘
  q_1: ──────■──────
  ```

  $$
  \begin{split}CU3(\theta, \phi, \lambda)\ q_1, q_0 =
      |0\rangle\langle 0| \otimes I +
      |1\rangle\langle 1| \otimes U3(\theta,\phi,\lambda) =
      \begin{pmatrix}
          1 & 0   & 0                  & 0 \\
          0 & 1   & 0                  & 0 \\
          0 & 0   & \cos(\th)          & -e^{i\lambda}\sin(\th) \\
          0 & 0   & e^{i\phi}\sin(\th) & e^{i(\phi+\lambda)}\cos(\th)
      \end{pmatrix}\end{split}
  $$
</Admonition>

Create new CU3 gate.

## Methods Defined Here

|                                                                                                                                     |                           |
| ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| [`inverse`](qiskit.circuit.library.CU3Gate.inverse#qiskit.circuit.library.CU3Gate.inverse "qiskit.circuit.library.CU3Gate.inverse") | Return inverted CU3 gate. |

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
