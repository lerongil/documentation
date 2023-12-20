---
title: common
description: API reference for qiskit.optimization.applications.ising.common
in_page_toc_min_heading_level: 1
python_api_type: module
python_api_name: qiskit.optimization.applications.ising.common
---

<span id="module-qiskit.optimization.applications.ising.common" />

<span id="qiskit-optimization-applications-ising-common" />

# qiskit.optimization.applications.ising.common

common module

## Functions

|                                                                                                                                                                                      |                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| [`get_gset_result`](#qiskit.optimization.applications.ising.common.get_gset_result "qiskit.optimization.applications.ising.common.get_gset_result")(x)                               | Get graph solution in Gset format from binary string.       |
| [`parse_gset_format`](#qiskit.optimization.applications.ising.common.parse_gset_format "qiskit.optimization.applications.ising.common.parse_gset_format")(filename)                  | Read graph in Gset format from file.                        |
| [`random_graph`](#qiskit.optimization.applications.ising.common.random_graph "qiskit.optimization.applications.ising.common.random_graph")(n\[, weight\_range, edge\_prob, …])       | Generate random Erdos-Renyi graph.                          |
| [`random_number_list`](#qiskit.optimization.applications.ising.common.random_number_list "qiskit.optimization.applications.ising.common.random_number_list")(n\[, weight\_range, …]) | Generate a set of positive integers within the given range. |
| [`read_numbers_from_file`](#qiskit.optimization.applications.ising.common.read_numbers_from_file "qiskit.optimization.applications.ising.common.read_numbers_from_file")(filename)   | Read numbers from a file                                    |
| [`sample_most_likely`](#qiskit.optimization.applications.ising.common.sample_most_likely "qiskit.optimization.applications.ising.common.sample_most_likely")(state\_vector)          | Compute the most likely binary string from state vector.    |

<span id="undefined" />

`get_gset_result(x)`

Get graph solution in Gset format from binary string.

**Parameters**

**x** (*numpy.ndarray*) – binary string as numpy array.

**Returns**

graph solution in Gset format.

**Return type**

Dict\[int, int]

<span id="undefined" />

`parse_gset_format(filename)`

Read graph in Gset format from file.

**Parameters**

**filename** (*str*) – name of the file.

**Returns**

adjacency matrix as a 2D numpy array.

**Return type**

numpy.ndarray

<span id="undefined" />

`random_graph(n, weight_range=10, edge_prob=0.3, negative_weight=True, savefile=None, seed=None)`

Generate random Erdos-Renyi graph.

**Parameters**

*   **n** (*int*) – number of nodes.
*   **weight\_range** (*int*) – weights will be smaller than this value, in absolute value. range: \[1, weight\_range).
*   **edge\_prob** (*float*) – probability of edge appearing.
*   **negative\_weight** (*bool*) – allow to have edge with negative weights
*   **savefile** (*str or None*) – name of file where to save graph.
*   **seed** (*int or None*) – random seed - if None, will not initialize.

**Returns**

adjacency matrix (with weights).

**Return type**

numpy.ndarray

<span id="undefined" />

`random_number_list(n, weight_range=100, savefile=None, seed=None)`

Generate a set of positive integers within the given range.

**Parameters**

*   **n** (*int*) – size of the set of numbers.
*   **weight\_range** (*int*) – maximum absolute value of the numbers.
*   **savefile** (*str or None*) – write numbers to this file.
*   **seed** (*Union(int,None)*) – random seed - if None, will not initialize.

**Returns**

the list of integer numbers.

**Return type**

numpy.ndarray

<span id="undefined" />

`read_numbers_from_file(filename)`

Read numbers from a file

**Parameters**

**filename** (*str*) – name of the file.

**Returns**

list of numbers as a numpy.ndarray.

**Return type**

numpy.ndarray

<span id="undefined" />

`sample_most_likely(state_vector)`

Compute the most likely binary string from state vector. :param state\_vector: state vector or counts. :type state\_vector: numpy.ndarray or dict

**Returns**

binary string as numpy.ndarray of ints.

**Return type**

numpy.ndarray

