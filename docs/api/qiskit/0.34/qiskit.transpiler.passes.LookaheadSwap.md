# LookaheadSwap

<span id="undefined" />

`LookaheadSwap(*args, **kwargs)`

Bases: `qiskit.transpiler.basepasses.TransformationPass`

Map input circuit onto a backend topology via insertion of SWAPs.

Implementation of Sven Jandura’s swap mapper submission for the 2018 Qiskit Developer Challenge, adapted to integrate into the transpiler architecture.

The role of the swapper pass is to modify the starting circuit to be compatible with the target device’s topology (the set of two-qubit gates available on the hardware.) To do this, the pass will insert SWAP gates to relocate the virtual qubits for each upcoming gate onto a set of coupled physical qubits. However, as SWAP gates are particularly lossy, the goal is to accomplish this remapping while introducing the fewest possible additional SWAPs.

This algorithm searches through the available combinations of SWAP gates by means of a narrowed best first/beam search, described as follows:

*   Start with a layout of virtual qubits onto physical qubits.
*   Find any gates in the input circuit which can be performed with the current layout and mark them as mapped.
*   For all possible SWAP gates, calculate the layout that would result from their application and rank them according to the distance of the resulting layout over upcoming gates (see \_calc\_layout\_distance.)
*   For the four (search\_width) highest-ranking SWAPs, repeat the above process on the layout that would be generated if they were applied.
*   Repeat this process down to a depth of four (search\_depth) SWAPs away from the initial layout, for a total of 256 (search\_width^search\_depth) prospective layouts.
*   Choose the layout which maximizes the number of two-qubit which could be performed. Add its mapped gates, including the SWAPs generated, to the output circuit.
*   Repeat the above until all gates from the initial circuit are mapped.

For more details on the algorithm, see Sven’s blog post: [https://medium.com/qiskit/improving-a-quantum-compiler-48410d7a7084](https://medium.com/qiskit/improving-a-quantum-compiler-48410d7a7084)

LookaheadSwap initializer.

**Parameters**

*   **coupling\_map** ([*CouplingMap*](qiskit.transpiler.CouplingMap#qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap")) – CouplingMap of the target backend.
*   **search\_depth** (*int*) – lookahead tree depth when ranking best SWAP options.
*   **search\_width** (*int*) – lookahead tree width when ranking best SWAP options.
*   **fake\_run** (*bool*) – if true, it only pretend to do routing, i.e., no swap is effectively added.

## Methods

|                                                                                                                                                 |                                    |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| [`name`](qiskit.transpiler.passes.LookaheadSwap.name#qiskit.transpiler.passes.LookaheadSwap.name "qiskit.transpiler.passes.LookaheadSwap.name") | Return the name of the pass.       |
| [`run`](qiskit.transpiler.passes.LookaheadSwap.run#qiskit.transpiler.passes.LookaheadSwap.run "qiskit.transpiler.passes.LookaheadSwap.run")     | Run the LookaheadSwap pass on dag. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
