<span id="qiskit-optimization-applications-ising-graph-partition" />

# qiskit.optimization.applications.ising.graph\_partition

Convert graph partitioning instances into Pauli list Deal with Gset format. See [https://web.stanford.edu/\~yyye/yyye/Gset/](https://web.stanford.edu/~yyye/yyye/Gset/)

## Functions

|                                                                                                                                                                                   |                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| [`get_graph_solution`](#qiskit.optimization.applications.ising.graph_partition.get_graph_solution "qiskit.optimization.applications.ising.graph_partition.get_graph_solution")(x) | Get graph solution from binary string.          |
| [`get_operator`](#qiskit.optimization.applications.ising.graph_partition.get_operator "qiskit.optimization.applications.ising.graph_partition.get_operator")(weight\_matrix)      | Generate Hamiltonian for the graph partitioning |
| [`objective_value`](#qiskit.optimization.applications.ising.graph_partition.objective_value "qiskit.optimization.applications.ising.graph_partition.objective_value")(x, w)       | Compute the value of a cut.                     |

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

`get_operator(weight_matrix)`

Generate Hamiltonian for the graph partitioning

## Notes

## Goals:

1 separate the vertices into two set of the same size 2 make sure the number of edges between the two set is minimized.

## Hamiltonian:

H = H\_A + H\_B H\_A = sum\_\{(i,j)in E}\{(1-ZiZj)/2} H\_B = (sum\_\{i}\{Zi})^2 = sum\_\{i}\{Zi^2}+sum\_\{i!=j}\{ZiZj} H\_A is for achieving goal 2 and H\_B is for achieving goal 1.

**Parameters**

**weight\_matrix** (*numpy.ndarray*) – adjacency matrix.

**Returns**

operator for the Hamiltonian float: a constant shift for the obj function.

**Return type**

[WeightedPauliOperator](qiskit.aqua.operators.legacy.WeightedPauliOperator#qiskit.aqua.operators.legacy.WeightedPauliOperator "qiskit.aqua.operators.legacy.WeightedPauliOperator")

<span id="undefined" />

`objective_value(x, w)`

Compute the value of a cut.

**Parameters**

*   **x** (*numpy.ndarray*) – binary string as numpy array.
*   **w** (*numpy.ndarray*) – adjacency matrix.

**Returns**

value of the cut.

**Return type**

float
