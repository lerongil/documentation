# qiskit.algorithms.PhaseEstimationResult

<span id="undefined" />

`PhaseEstimationResult(num_evaluation_qubits, circuit_result, phases)`

Store and manipulate results from running PhaseEstimation.

This class is instantiated by the PhaseEstimation class, not via user code. The PhaseEstimation class generates a list of phases and corresponding weights. Upon completion it returns the results as an instance of this class. The main method for accessing the results is filter\_phases.

**Parameters**

*   **num\_evaluation\_qubits** (`int`) – number of qubits in phase-readout register.
*   **circuit\_result** (`Result`) – result object returned by method running circuit.
*   **phases** (`Union`\[`ndarray`, `Dict`\[`str`, `float`]]) – ndarray or dict of phases and frequencies determined by QPE.

<span id="undefined" />

`__init__(num_evaluation_qubits, circuit_result, phases)`

**Parameters**

*   **num\_evaluation\_qubits** (`int`) – number of qubits in phase-readout register.
*   **circuit\_result** (`Result`) – result object returned by method running circuit.
*   **phases** (`Union`\[`ndarray`, `Dict`\[`str`, `float`]]) – ndarray or dict of phases and frequencies determined by QPE.

## Methods

|                                                                                                                                                         |                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`__init__`](#qiskit.algorithms.PhaseEstimationResult.__init__ "qiskit.algorithms.PhaseEstimationResult.__init__")(num\_evaluation\_qubits, …)          | **type num\_evaluation\_qubits**`int`                                  |
| [`combine`](#qiskit.algorithms.PhaseEstimationResult.combine "qiskit.algorithms.PhaseEstimationResult.combine")(result)                                 | Any property from the argument that exists in the receiver is updated. |
| [`filter_phases`](#qiskit.algorithms.PhaseEstimationResult.filter_phases "qiskit.algorithms.PhaseEstimationResult.filter_phases")(\[cutoff, as\_float]) | Return a filtered dict of phases (keys) and frequencies (values).      |

## Attributes

|                                                                                                                                               |                                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| [`circuit_result`](#qiskit.algorithms.PhaseEstimationResult.circuit_result "qiskit.algorithms.PhaseEstimationResult.circuit_result")          | Return the result object returned by running the QPE circuit (on hardware or simulator). |
| [`most_likely_phase`](#qiskit.algorithms.PhaseEstimationResult.most_likely_phase "qiskit.algorithms.PhaseEstimationResult.most_likely_phase") | Return the estimated phase as a number in $[0.0, 1.0)$.                                  |
| [`phases`](#qiskit.algorithms.PhaseEstimationResult.phases "qiskit.algorithms.PhaseEstimationResult.phases")                                  | Return all phases and their frequencies computed by QPE.                                 |

<span id="undefined" />

`property circuit_result`

Return the result object returned by running the QPE circuit (on hardware or simulator).

This is useful for inspecting and troubleshooting the QPE algorithm.

**Return type**

`Result`

<span id="undefined" />

`combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

<span id="undefined" />

`filter_phases(cutoff=0.0, as_float=True)`

Return a filtered dict of phases (keys) and frequencies (values).

Only phases with frequencies (counts) larger than cutoff are included. It is assumed that the run method has been called so that the phases have been computed. When using a noiseless, shot-based simulator to read a single phase that can be represented exactly by num\_evaluation\_qubits, all the weight will be concentrated on a single phase. In all other cases, many, or all, bit strings will have non-zero weight. This method is useful for filtering out these uninteresting bit strings.

**Parameters**

*   **cutoff** (`float`) – Minimum weight of number of counts required to keep a bit string. The default value is 0.0.
*   **as\_float** (`bool`) – If True, returned keys are floats in $[0.0, 1.0)$. If False returned keys are bit strings.

**Return type**

`Dict`

**Returns**

A filtered dict of phases (keys) and frequencies (values).

<span id="undefined" />

`property most_likely_phase`

Return the estimated phase as a number in $[0.0, 1.0)$.

1.0 corresponds to a phase of $2\pi$. It is assumed that the input vector is an eigenvector of the unitary so that the peak of the probability density occurs at the bit string that most closely approximates the true phase.

**Return type**

`float`

<span id="undefined" />

`property phases`

Return all phases and their frequencies computed by QPE.

This is an array or dict whose values correspond to weights on bit strings.

**Return type**

`Union`\[`ndarray`, `dict`]
