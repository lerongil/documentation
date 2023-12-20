<span id="qiskit-transpiler-passes-csplayout" />

# qiskit.transpiler.passes.CSPLayout

<span id="undefined" />

`CSPLayout(*args, **kwargs)`

If possible, chooses a Layout as a CSP, using backtracking.

If possible, chooses a Layout as a CSP, using backtracking.

If not possible, does not set the layout property. In all the cases, the property CSPLayout\_stop\_reason will be added with one of the following values:

*   solution found: If a perfect layout was found.
*   nonexistent solution: If no perfect layout was found and every combination was checked.
*   call limit reached: If no perfect layout was found and the call limit was reached.
*   time limit reached: If no perfect layout was found and the time limit was reached.

**Parameters**

*   **coupling\_map** (*Coupling*) – Directed graph representing a coupling map.
*   **strict\_direction** (*bool*) – If True, considers the direction of the coupling map. Default is False.
*   **seed** (*int*) – Sets the seed of the PRNG.
*   **call\_limit** (*int*) – Amount of times that `constraint.RecursiveBacktrackingSolver.recursiveBacktracking` will be called. None means no call limit. Default: 1000.
*   **time\_limit** (*int*) – Amount of seconds that the pass will try to find a solution. None means no time limit. Default: 10 seconds.

<span id="undefined" />

`__init__(coupling_map, strict_direction=False, seed=None, call_limit=1000, time_limit=10)`

If possible, chooses a Layout as a CSP, using backtracking.

If not possible, does not set the layout property. In all the cases, the property CSPLayout\_stop\_reason will be added with one of the following values:

*   solution found: If a perfect layout was found.
*   nonexistent solution: If no perfect layout was found and every combination was checked.
*   call limit reached: If no perfect layout was found and the call limit was reached.
*   time limit reached: If no perfect layout was found and the time limit was reached.

**Parameters**

*   **coupling\_map** (*Coupling*) – Directed graph representing a coupling map.
*   **strict\_direction** (*bool*) – If True, considers the direction of the coupling map. Default is False.
*   **seed** (*int*) – Sets the seed of the PRNG.
*   **call\_limit** (*int*) – Amount of times that `constraint.RecursiveBacktrackingSolver.recursiveBacktracking` will be called. None means no call limit. Default: 1000.
*   **time\_limit** (*int*) – Amount of seconds that the pass will try to find a solution. None means no time limit. Default: 10 seconds.

## Methods

|                                                                                                                                                  |                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| [`__init__`](#qiskit.transpiler.passes.CSPLayout.__init__ "qiskit.transpiler.passes.CSPLayout.__init__")(coupling\_map\[, strict\_direction, …]) | If possible, chooses a Layout as a CSP, using backtracking. |
| [`name`](#qiskit.transpiler.passes.CSPLayout.name "qiskit.transpiler.passes.CSPLayout.name")()                                                   | Return the name of the pass.                                |
| [`run`](#qiskit.transpiler.passes.CSPLayout.run "qiskit.transpiler.passes.CSPLayout.run")(dag)                                                   | Run a pass on the DAGCircuit.                               |

## Attributes

|                                                                                                                                                    |                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`is_analysis_pass`](#qiskit.transpiler.passes.CSPLayout.is_analysis_pass "qiskit.transpiler.passes.CSPLayout.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`is_transformation_pass`](#qiskit.transpiler.passes.CSPLayout.is_transformation_pass "qiskit.transpiler.passes.CSPLayout.is_transformation_pass") | Check if the pass is a transformation pass. |

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

Run a pass on the DAGCircuit. This is implemented by the pass developer.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – the dag on which the pass is run.

**Raises**

**NotImplementedError** – when this is left unimplemented for a pass.
