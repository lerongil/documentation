<span id="qiskit-ignis-verification-expectation-counts" />

# qiskit.ignis.verification.expectation\_counts

<span id="undefined" />

`expectation_counts(counts)`

Converts count dict to an expectation counts dict.

The returned dictionary is also a counts dictionary but the keys correspond to the which subsystems the operators are acting on and the counts are the un-normalized expectation values. The counts can be converted to expectation values by dividing by the value of the all ‘0’s entry. The ‘0’s key is the expectation value of the identity operator, and its value is equal to the number of shots.

**Parameters**

**counts** (`Dict`\[`str`, `int`]) – a counts dictionary.

**Return type**

`Dict`\[`str`, `int`]

**Returns**

A new counts dictionary where the counts are un-normalized expectation values for the subsystem measurement operators.

Consider a input counts dictionary for s shots of measurement of the two-qubit operator XZ (X on qubit-1, Z on qubit-0). The dictionary returned will have keys corresponding to:

> *   `00`: $s * <II>$,
> *   `01`: $s * <IZ>$,
> *   `10`: $s * <XI>$,
> *   `11`: $s * <XZ>$
