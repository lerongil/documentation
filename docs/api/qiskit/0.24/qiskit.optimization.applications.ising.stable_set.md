---
title: stable_set
description: API reference for qiskit.optimization.applications.ising.stable_set
in_page_toc_min_heading_level: 1
python_api_type: module
python_api_name: qiskit.optimization.applications.ising.stable_set
---

<span id="module-qiskit.optimization.applications.ising.stable_set" />

<span id="qiskit-optimization-applications-ising-stable-set" />

# qiskit.optimization.applications.ising.stable\_set

Convert stable set instances into Pauli list. We read instances in the Gset format, see [https://web.stanford.edu/\~yyye/yyye/Gset/](https://web.stanford.edu/~yyye/yyye/Gset/) , for compatibility with the maxcut format, but the weights on the edges as they are not really used and are always assumed to be 1. The graph is represented by an adjacency matrix.

## Functions

|                                                                                                                                                                         |                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| [`get_graph_solution`](#qiskit.optimization.applications.ising.stable_set.get_graph_solution "qiskit.optimization.applications.ising.stable_set.get_graph_solution")(x) | Get graph solution from binary string.                      |
| [`get_operator`](#qiskit.optimization.applications.ising.stable_set.get_operator "qiskit.optimization.applications.ising.stable_set.get_operator")(w)                   | Generate Hamiltonian for the maximum stable set in a graph. |
| [`stable_set_value`](#qiskit.optimization.applications.ising.stable_set.stable_set_value "qiskit.optimization.applications.ising.stable_set.stable_set_value")(x, w)    | Compute the value of a stable set, and its feasibility.     |

<span id="undefined" />

`get_graph_solution(x)`

Get graph solution from binary string.

**Parameters**

**x** (*numpy.ndarray*) – binary string as numpy array.

**Returns**

graph solution as binary numpy array.

**Return type**

numpy.ndarray

<span id="undefined" />

`get_operator(w)`

Generate Hamiltonian for the maximum stable set in a graph.

**Parameters**

**w** (*numpy.ndarray*) – adjacency matrix.

**Returns**

operator for the Hamiltonian and a constant shift for the obj function.

**Return type**

tuple([WeightedPauliOperator](qiskit.aqua.operators.legacy.WeightedPauliOperator#qiskit.aqua.operators.legacy.WeightedPauliOperator "qiskit.aqua.operators.legacy.WeightedPauliOperator"), float)

<span id="undefined" />

`stable_set_value(x, w)`

Compute the value of a stable set, and its feasibility.

**Parameters**

*   **x** (*numpy.ndarray*) – binary string in original format – not graph solution!.
*   **w** (*numpy.ndarray*) – adjacency matrix.

**Returns**

**size of the stable set, and Boolean indicating**

feasibility.

**Return type**

tuple(float, bool)

