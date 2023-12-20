# TruthTableOracle

<span id="undefined" />

`TruthTableOracle(bitmaps, optimization=False, mct_mode='basic')`

Bases: `qiskit.aqua.components.oracles.oracle.Oracle`

The Truth Table-based Quantum Oracle.

Besides logical expressions, (see [`LogicalExpressionOracle`](qiskit.aqua.components.oracles.LogicalExpressionOracle#qiskit.aqua.components.oracles.LogicalExpressionOracle "qiskit.aqua.components.oracles.LogicalExpressionOracle")) another common way of specifying boolean functions is using truth tables, which is basically an exhaustive mapping from input binary bit-strings of length $n$ to corresponding output bit-strings of length $m$. For example, the following is a simple truth table that corresponds to the XOR of two variables:

| Inputs |   | Output  |
| ------ | - | ------- |
| A      | B | A xor B |
| 0      | 0 | 0       |
| 0      | 1 | 1       |
| 1      | 0 | 1       |
| 1      | 1 | 0       |

In this case $n=2$, and $m=1$. Often, for brevity, the input bit-strings are omitted because they can be easily derived for any given $n$. So to completely specify a truth table, we only need a Length-2 n bit-string for each of the $m$ outputs. In the above example, a single bit-string ‘0110’ would suffice. Besides ‘0’ and ‘1’, one can also use ‘x’ in the output string to indicate ‘do-not-care’ entries. For example, ‘101x’ specifies a truth table (again $n=2$ and $m=1$) for which the output upon input ‘11’ doesn’t matter. The truth table oracle takes either a single string or a list of equal-length strings for truth table specifications.

Regarding circuit optimization and mct usages, the truth table oracle is similar to the [`LogicalExpressionOracle`](qiskit.aqua.components.oracles.LogicalExpressionOracle#qiskit.aqua.components.oracles.LogicalExpressionOracle "qiskit.aqua.components.oracles.LogicalExpressionOracle"). One difference is that, unlike the logical expression oracle which builds circuits out of CNF or DNF, the truth table oracle uses Exclusive Sum of Products (ESOP), which is similar to DNF, with the only difference being the outermost operation being XOR as opposed to a disjunction. Because of this difference, an implicant-based method is used here for circuit optimization: First, the [Quine-McCluskey algorithm](https://en.wikipedia.org/wiki/Quine-McCluskey_algorithm) is used to find all prime implicants of the input truth table; then an [Exact Cover](https://en.wikipedia.org/wiki/Knuth%27s_Algorithm_X) is found among all prime implicants and truth table onset row entries. The exact cover is then used to build the corresponding oracle circuit.

**Parameters**

*   **bitmaps** (`Union`\[`str`, `List`\[`str`]]) – A single binary string or a list of binary strings representing the desired single- and multi-value truth table.
*   **optimization** (`bool`) – Boolean flag for attempting circuit optimization. When set, the Quine-McCluskey algorithm is used to compute the prime implicants of the truth table, and then its exact cover is computed to try to reduce the circuit.
*   **mct\_mode** (`str`) – The mode to use when constructing multiple-control Toffoli.

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – Invalid input

## Methods

|                                                                                                                                                                                                                                            |                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ |
| [`construct_circuit`](qiskit.aqua.components.oracles.TruthTableOracle.construct_circuit#qiskit.aqua.components.oracles.TruthTableOracle.construct_circuit "qiskit.aqua.components.oracles.TruthTableOracle.construct_circuit")             | construct circuit  |
| [`evaluate_classically`](qiskit.aqua.components.oracles.TruthTableOracle.evaluate_classically#qiskit.aqua.components.oracles.TruthTableOracle.evaluate_classically "qiskit.aqua.components.oracles.TruthTableOracle.evaluate_classically") | evaluate classical |

## Attributes

<span id="undefined" />

### ancillary\_register

returns ancillary register

<span id="undefined" />

### circuit

<span id="undefined" />

### output\_register

returns output register

<span id="undefined" />

### variable\_register

returns variable register
