<span id="qiskit-transpiler-passes-sabrelayout" />

# qiskit.transpiler.passes.SabreLayout

<span id="undefined" />

`SabreLayout(*args, **kwargs)`

Choose a Layout via iterative bidirectional routing of the input circuit.

Starting with a random initial Layout, the algorithm does a full routing of the circuit (via the routing\_pass method) to end up with a final\_layout. This final\_layout is then used as the initial\_layout for routing the reverse circuit. The algorithm iterates a number of times until it finds an initial\_layout that reduces full routing cost.

This method exploits the reversibility of quantum circuits, and tries to include global circuit information in the choice of initial\_layout.

**References:**

\[1] Li, Gushu, Yufei Ding, and Yuan Xie. “Tackling the qubit mapping problem for NISQ-era quantum devices.” ASPLOS 2019. [arXiv:1809.02573](https://arxiv.org/pdf/1809.02573.pdf)

SabreLayout initializer.

**Parameters**

*   **coupling\_map** (*Coupling*) – directed graph representing a coupling map.
*   **routing\_pass** (*BasePass*) – the routing pass to use while iterating.
*   **seed** (*int*) – seed for setting a random first trial layout.
*   **max\_iterations** (*int*) – number of forward-backward iterations.

<span id="undefined" />

`__init__(coupling_map, routing_pass=None, seed=None, max_iterations=3)`

SabreLayout initializer.

**Parameters**

*   **coupling\_map** (*Coupling*) – directed graph representing a coupling map.
*   **routing\_pass** (*BasePass*) – the routing pass to use while iterating.
*   **seed** (*int*) – seed for setting a random first trial layout.
*   **max\_iterations** (*int*) – number of forward-backward iterations.

## Methods

|                                                                                                                                                        |                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- |
| [`__init__`](#qiskit.transpiler.passes.SabreLayout.__init__ "qiskit.transpiler.passes.SabreLayout.__init__")(coupling\_map\[, routing\_pass, seed, …]) | SabreLayout initializer.         |
| [`name`](#qiskit.transpiler.passes.SabreLayout.name "qiskit.transpiler.passes.SabreLayout.name")()                                                     | Return the name of the pass.     |
| [`run`](#qiskit.transpiler.passes.SabreLayout.run "qiskit.transpiler.passes.SabreLayout.run")(dag)                                                     | Run the SabreLayout pass on dag. |

## Attributes

|                                                                                                                                                        |                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| [`is_analysis_pass`](#qiskit.transpiler.passes.SabreLayout.is_analysis_pass "qiskit.transpiler.passes.SabreLayout.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`is_transformation_pass`](#qiskit.transpiler.passes.SabreLayout.is_transformation_pass "qiskit.transpiler.passes.SabreLayout.is_transformation_pass") | Check if the pass is a transformation pass. |

<span id="undefined" />

`property is_analysis_pass`

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

`property is_transformation_pass`

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

<span id="undefined" />

`name()`

Return the name of the pass.

<span id="undefined" />

`run(dag)`

Run the SabreLayout pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – DAG to find layout for.

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError#qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – if dag wider than self.coupling\_map
