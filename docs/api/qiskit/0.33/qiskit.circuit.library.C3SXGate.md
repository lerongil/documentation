# C3SXGate

<span id="undefined" />

`C3SXGate(label=None, ctrl_state=None, *, angle=None)`

Bases: `qiskit.circuit.controlledgate.ControlledGate`

The 3-qubit controlled sqrt-X gate.

This implementation is based on Page 17 of \[1].

## References

\[1] Barenco et al., 1995. [https://arxiv.org/pdf/quant-ph/9503016.pdf](https://arxiv.org/pdf/quant-ph/9503016.pdf)

Create a new 3-qubit controlled sqrt-X gate.

**Parameters**

*   **label** (*str or None*) – An optional label for the gate \[Default: None]
*   **ctrl\_state** (*int or str or None*) – control state expressed as integer, string (e.g. ‘110’), or None. If None, use all 1s.
*   **angle** (*float*) – DEPRECATED. The angle used in the controlled-U1 gates. An angle of π/8 yields the sqrt(X) gates, an angle of π/4 the 3-qubit controlled X gate.

## Methods Defined Here

|                                                                                                                                        |                   |
| -------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| [`inverse`](qiskit.circuit.library.C3SXGate.inverse#qiskit.circuit.library.C3SXGate.inverse "qiskit.circuit.library.C3SXGate.inverse") | Invert this gate. |

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

### num\_ctrl\_qubits

Get number of control qubits.

**Returns**

The number of control qubits for the gate.

**Return type**

int

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
