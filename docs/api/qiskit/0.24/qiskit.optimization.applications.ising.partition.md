---
title: partition
description: API reference for qiskit.optimization.applications.ising.partition
in_page_toc_min_heading_level: 1
python_api_type: module
python_api_name: qiskit.optimization.applications.ising.partition
---

<span id="module-qiskit.optimization.applications.ising.partition" />

<span id="qiskit-optimization-applications-ising-partition" />

# qiskit.optimization.applications.ising.partition

Generate Number Partitioning (Partition) instances, and convert them into a Hamiltonian given as a Pauli list.

## Functions

|                                                                                                                                                                            |                                                           |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| [`get_operator`](#qiskit.optimization.applications.ising.partition.get_operator "qiskit.optimization.applications.ising.partition.get_operator")(values)                   | Construct the Hamiltonian for a given Partition instance. |
| [`partition_value`](#qiskit.optimization.applications.ising.partition.partition_value "qiskit.optimization.applications.ising.partition.partition_value")(x, number\_list) | Compute the value of a partition.                         |

<span id="undefined" />

`get_operator(values)`

Construct the Hamiltonian for a given Partition instance.

Given a list of numbers for the Number Partitioning problem, we construct the Hamiltonian described as a list of Pauli gates.

**Parameters**

**values** (*numpy.ndarray*) – array of values.

**Returns**

operator for the Hamiltonian and a constant shift for the obj function.

**Return type**

tuple([WeightedPauliOperator](qiskit.aqua.operators.legacy.WeightedPauliOperator#qiskit.aqua.operators.legacy.WeightedPauliOperator "qiskit.aqua.operators.legacy.WeightedPauliOperator"), float)

<span id="undefined" />

`partition_value(x, number_list)`

Compute the value of a partition.

**Parameters**

*   **x** (*numpy.ndarray*) – binary string as numpy array.
*   **number\_list** (*numpy.ndarray*) – list of numbers in the instance.

**Returns**

**difference squared between the two sides of the number**

partition.

**Return type**

float

