<span id="qiskit-dagcircuit-dagdependency" />

# qiskit.dagcircuit.DAGDependency

<span id="undefined" />

`DAGDependency`

Object to represent a quantum circuit as a directed acyclic graph via operation dependencies (i.e. lack of commutation).

The nodes in the graph are operations represented by quantum gates. The edges correspond to non-commutation between two operations (i.e. a dependency). A directed edge from node A to node B means that operation A does not commute with operation B. The object’s methods allow circuits to be constructed.

The nodes in the graph have the following attributes: ‘operation’, ‘successors’, ‘predecessors’.

**Example:**

Bell circuit with no measurement.

```python
      ┌───┐
qr_0: ┤ H ├──■──
      └───┘┌─┴─┐
qr_1: ─────┤ X ├
           └───┘
```

The dependency DAG for the above circuit is represented by two nodes. The first one corresponds to Hadamard gate, the second one to the CNOT gate as the gates do not commute there is an edge between the two nodes.

**Reference:**

\[1] Iten, R., Moyard, R., Metger, T., Sutter, D. and Woerner, S., 2020. Exact and practical pattern matching for quantum circuit optimization. [arXiv:1909.05270](https://arxiv.org/abs/1909.05270)

Create an empty DAGDependency.

<span id="undefined" />

`__init__()`

Create an empty DAGDependency.

## Methods

|                                                                                                                                               |                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| [`__init__`](#qiskit.dagcircuit.DAGDependency.__init__ "qiskit.dagcircuit.DAGDependency.__init__")()                                          | Create an empty DAGDependency.                                          |
| [`add_creg`](#qiskit.dagcircuit.DAGDependency.add_creg "qiskit.dagcircuit.DAGDependency.add_creg")(creg)                                      | Add clbits in a classical register.                                     |
| [`add_op_node`](#qiskit.dagcircuit.DAGDependency.add_op_node "qiskit.dagcircuit.DAGDependency.add_op_node")(operation, qargs, cargs)          | Add a DAGDepNode to the graph and update the edges.                     |
| [`add_qreg`](#qiskit.dagcircuit.DAGDependency.add_qreg "qiskit.dagcircuit.DAGDependency.add_qreg")(qreg)                                      | Add qubits in a quantum register.                                       |
| [`copy`](#qiskit.dagcircuit.DAGDependency.copy "qiskit.dagcircuit.DAGDependency.copy")()                                                      | Function to copy a DAGDependency object.                                |
| [`depth`](#qiskit.dagcircuit.DAGDependency.depth "qiskit.dagcircuit.DAGDependency.depth")()                                                   | Return the circuit depth.                                               |
| [`direct_predecessors`](#qiskit.dagcircuit.DAGDependency.direct_predecessors "qiskit.dagcircuit.DAGDependency.direct_predecessors")(node\_id) | Direct predecessors id of a given node as sorted list.                  |
| [`direct_successors`](#qiskit.dagcircuit.DAGDependency.direct_successors "qiskit.dagcircuit.DAGDependency.direct_successors")(node\_id)       | Direct successors id of a given node as sorted list.                    |
| [`draw`](#qiskit.dagcircuit.DAGDependency.draw "qiskit.dagcircuit.DAGDependency.draw")(\[scale, filename, style])                             | Draws the DAGDependency graph.                                          |
| [`get_all_edges`](#qiskit.dagcircuit.DAGDependency.get_all_edges "qiskit.dagcircuit.DAGDependency.get_all_edges")()                           | Enumaration of all edges.                                               |
| [`get_edges`](#qiskit.dagcircuit.DAGDependency.get_edges "qiskit.dagcircuit.DAGDependency.get_edges")(src\_id, dest\_id)                      | Edge enumeration between two nodes through method get\_all\_edge\_data. |
| [`get_in_edges`](#qiskit.dagcircuit.DAGDependency.get_in_edges "qiskit.dagcircuit.DAGDependency.get_in_edges")(node\_id)                      | Enumeration of all incoming edges for a given node.                     |
| [`get_node`](#qiskit.dagcircuit.DAGDependency.get_node "qiskit.dagcircuit.DAGDependency.get_node")(node\_id)                                  | **param node\_id**label of considered node.                             |
| [`get_nodes`](#qiskit.dagcircuit.DAGDependency.get_nodes "qiskit.dagcircuit.DAGDependency.get_nodes")()                                       | **returns**iterator over all the nodes.                                 |
| [`get_out_edges`](#qiskit.dagcircuit.DAGDependency.get_out_edges "qiskit.dagcircuit.DAGDependency.get_out_edges")(node\_id)                   | Enumeration of all outgoing edges for a given node.                     |
| [`predecessors`](#qiskit.dagcircuit.DAGDependency.predecessors "qiskit.dagcircuit.DAGDependency.predecessors")(node\_id)                      | Predecessors id of a given node as sorted list.                         |
| [`size`](#qiskit.dagcircuit.DAGDependency.size "qiskit.dagcircuit.DAGDependency.size")()                                                      | Returns the number of gates in the circuit                              |
| [`successors`](#qiskit.dagcircuit.DAGDependency.successors "qiskit.dagcircuit.DAGDependency.successors")(node\_id)                            | Successors id of a given node as sorted list.                           |
| [`to_networkx`](#qiskit.dagcircuit.DAGDependency.to_networkx "qiskit.dagcircuit.DAGDependency.to_networkx")()                                 | Returns a copy of the DAGDependency in networkx format.                 |
| [`to_retworkx`](#qiskit.dagcircuit.DAGDependency.to_retworkx "qiskit.dagcircuit.DAGDependency.to_retworkx")()                                 | Returns the DAGDependency in retworkx format.                           |
| [`topological_nodes`](#qiskit.dagcircuit.DAGDependency.topological_nodes "qiskit.dagcircuit.DAGDependency.topological_nodes")()               | Yield nodes in topological order.                                       |

## Attributes

|                                                                                                                |                                         |
| -------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| [`calibrations`](#qiskit.dagcircuit.DAGDependency.calibrations "qiskit.dagcircuit.DAGDependency.calibrations") | Return calibration dictionary.          |
| [`global_phase`](#qiskit.dagcircuit.DAGDependency.global_phase "qiskit.dagcircuit.DAGDependency.global_phase") | Return the global phase of the circuit. |

<span id="undefined" />

`add_creg(creg)`

Add clbits in a classical register.

<span id="undefined" />

`add_op_node(operation, qargs, cargs)`

Add a DAGDepNode to the graph and update the edges.

**Parameters**

*   **operation** ([*qiskit.circuit.Instruction*](qiskit.circuit.Instruction#qiskit.circuit.Instruction "qiskit.circuit.Instruction")) – operation as a quantum gate.
*   **qargs** (*list\[*[*Qubit*](qiskit.circuit.Qubit#qiskit.circuit.Qubit "qiskit.circuit.Qubit")*]*) – list of qubits on which the operation acts
*   **cargs** (*list\[*[*Clbit*](qiskit.circuit.Clbit#qiskit.circuit.Clbit "qiskit.circuit.Clbit")*]*) – list of classical wires to attach to.

<span id="undefined" />

`add_qreg(qreg)`

Add qubits in a quantum register.

<span id="undefined" />

`property calibrations`

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

<span id="undefined" />

`copy()`

Function to copy a DAGDependency object. :returns: a copy of a DAGDependency object. :rtype: DAGDependency

<span id="undefined" />

`depth()`

Return the circuit depth. :returns: the circuit depth :rtype: int

<span id="undefined" />

`direct_predecessors(node_id)`

Direct predecessors id of a given node as sorted list.

**Parameters**

**node\_id** (*int*) – label of considered node.

**Returns**

direct predecessors id as a sorted list

**Return type**

List

<span id="undefined" />

`direct_successors(node_id)`

Direct successors id of a given node as sorted list.

**Parameters**

**node\_id** (*int*) – label of considered node.

**Returns**

direct successors id as a sorted list

**Return type**

List

<span id="undefined" />

`draw(scale=0.7, filename=None, style='color')`

Draws the DAGDependency graph.

This function needs pydot \<[https://github.com/erocarrera/pydot](https://github.com/erocarrera/pydot)>, which in turn needs Graphviz \<[https://www.graphviz.org/](https://www.graphviz.org/)>\` to be installed.

**Parameters**

*   **scale** (*float*) – scaling factor
*   **filename** (*str*) – file path to save image to (format inferred from name)
*   **style** (*str*) – ‘plain’: B\&W graph ‘color’ (default): color input/output/op nodes

**Returns**

**if in Jupyter notebook and not saving to file,**

otherwise None.

**Return type**

Ipython.display.Image

<span id="undefined" />

`get_all_edges()`

Enumaration of all edges.

**Returns**

corresponding to the label.

**Return type**

List

<span id="undefined" />

`get_edges(src_id, dest_id)`

Edge enumeration between two nodes through method get\_all\_edge\_data.

**Parameters**

*   **src\_id** (*int*) – label of the first node.
*   **dest\_id** (*int*) – label of the second node.

**Returns**

corresponding to all edges between the two nodes.

**Return type**

List

<span id="undefined" />

`get_in_edges(node_id)`

Enumeration of all incoming edges for a given node.

**Parameters**

**node\_id** (*int*) – label of considered node.

**Returns**

corresponding incoming edges data.

**Return type**

List

<span id="undefined" />

`get_node(node_id)`

**Parameters**

**node\_id** (*int*) – label of considered node.

**Returns**

corresponding to the label.

**Return type**

node

<span id="undefined" />

`get_nodes()`

**Returns**

iterator over all the nodes.

**Return type**

generator(dict)

<span id="undefined" />

`get_out_edges(node_id)`

Enumeration of all outgoing edges for a given node.

**Parameters**

**node\_id** (*int*) – label of considered node.

**Returns**

corresponding outgoing edges data.

**Return type**

List

<span id="undefined" />

`property global_phase`

Return the global phase of the circuit.

<span id="undefined" />

`predecessors(node_id)`

Predecessors id of a given node as sorted list.

**Parameters**

**node\_id** (*int*) – label of considered node.

**Returns**

all predecessors id as a sorted list

**Return type**

List

<span id="undefined" />

`size()`

Returns the number of gates in the circuit

<span id="undefined" />

`successors(node_id)`

Successors id of a given node as sorted list.

**Parameters**

**node\_id** (*int*) – label of considered node.

**Returns**

all successors id as a sorted list

**Return type**

List

<span id="undefined" />

`to_networkx()`

Returns a copy of the DAGDependency in networkx format.

<span id="undefined" />

`to_retworkx()`

Returns the DAGDependency in retworkx format.

<span id="undefined" />

`topological_nodes()`

Yield nodes in topological order.

**Returns**

node in topological order.

**Return type**

generator([DAGNode](qiskit.dagcircuit.DAGNode#qiskit.dagcircuit.DAGNode "qiskit.dagcircuit.DAGNode"))
