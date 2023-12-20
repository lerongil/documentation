# qiskit.algorithms.IterativeAmplitudeEstimationResult

<span id="undefined" />

`IterativeAmplitudeEstimationResult`

The `IterativeAmplitudeEstimation` result object.

<span id="undefined" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                   |                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`__init__`](#qiskit.algorithms.IterativeAmplitudeEstimationResult.__init__ "qiskit.algorithms.IterativeAmplitudeEstimationResult.__init__")()    | Initialize self.                                                       |
| [`combine`](#qiskit.algorithms.IterativeAmplitudeEstimationResult.combine "qiskit.algorithms.IterativeAmplitudeEstimationResult.combine")(result) | Any property from the argument that exists in the receiver is updated. |

## Attributes

|                                                                                                                                                                                                             |                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [`alpha`](#qiskit.algorithms.IterativeAmplitudeEstimationResult.alpha "qiskit.algorithms.IterativeAmplitudeEstimationResult.alpha")                                                                         | Return the confidence level $\alpha$.                                               |
| [`circuit_results`](#qiskit.algorithms.IterativeAmplitudeEstimationResult.circuit_results "qiskit.algorithms.IterativeAmplitudeEstimationResult.circuit_results")                                           | Return the circuit results.                                                         |
| [`confidence_interval`](#qiskit.algorithms.IterativeAmplitudeEstimationResult.confidence_interval "qiskit.algorithms.IterativeAmplitudeEstimationResult.confidence_interval")                               | Return the confidence interval for the amplitude (95% interval by default).         |
| [`confidence_interval_processed`](#qiskit.algorithms.IterativeAmplitudeEstimationResult.confidence_interval_processed "qiskit.algorithms.IterativeAmplitudeEstimationResult.confidence_interval_processed") | Return the post-processed confidence interval.                                      |
| [`epsilon_estimated`](#qiskit.algorithms.IterativeAmplitudeEstimationResult.epsilon_estimated "qiskit.algorithms.IterativeAmplitudeEstimationResult.epsilon_estimated")                                     | Return the estimated half-width of the confidence interval.                         |
| [`epsilon_estimated_processed`](#qiskit.algorithms.IterativeAmplitudeEstimationResult.epsilon_estimated_processed "qiskit.algorithms.IterativeAmplitudeEstimationResult.epsilon_estimated_processed")       | Return the post-processed estimated half-width of the confidence interval.          |
| [`epsilon_target`](#qiskit.algorithms.IterativeAmplitudeEstimationResult.epsilon_target "qiskit.algorithms.IterativeAmplitudeEstimationResult.epsilon_target")                                              | Return the target half-width of the confidence interval.                            |
| [`estimate_intervals`](#qiskit.algorithms.IterativeAmplitudeEstimationResult.estimate_intervals "qiskit.algorithms.IterativeAmplitudeEstimationResult.estimate_intervals")                                  | Return the confidence intervals for the estimate in each iteration.                 |
| [`estimation`](#qiskit.algorithms.IterativeAmplitudeEstimationResult.estimation "qiskit.algorithms.IterativeAmplitudeEstimationResult.estimation")                                                          | Return the estimation for the amplitude in $[0, 1]$.                                |
| [`estimation_processed`](#qiskit.algorithms.IterativeAmplitudeEstimationResult.estimation_processed "qiskit.algorithms.IterativeAmplitudeEstimationResult.estimation_processed")                            | Return the estimation for the amplitude after the post-processing has been applied. |
| [`num_oracle_queries`](#qiskit.algorithms.IterativeAmplitudeEstimationResult.num_oracle_queries "qiskit.algorithms.IterativeAmplitudeEstimationResult.num_oracle_queries")                                  | Return the number of Grover oracle queries.                                         |
| [`post_processing`](#qiskit.algorithms.IterativeAmplitudeEstimationResult.post_processing "qiskit.algorithms.IterativeAmplitudeEstimationResult.post_processing")                                           | Return a handle to the post processing function.                                    |
| [`powers`](#qiskit.algorithms.IterativeAmplitudeEstimationResult.powers "qiskit.algorithms.IterativeAmplitudeEstimationResult.powers")                                                                      | Return the powers of the Grover operator in each iteration.                         |
| [`ratios`](#qiskit.algorithms.IterativeAmplitudeEstimationResult.ratios "qiskit.algorithms.IterativeAmplitudeEstimationResult.ratios")                                                                      | Return the ratios $K_{i+1}/K_{i}$ for each iteration $i$.                           |
| [`shots`](#qiskit.algorithms.IterativeAmplitudeEstimationResult.shots "qiskit.algorithms.IterativeAmplitudeEstimationResult.shots")                                                                         | Return the number of shots used.                                                    |
| [`theta_intervals`](#qiskit.algorithms.IterativeAmplitudeEstimationResult.theta_intervals "qiskit.algorithms.IterativeAmplitudeEstimationResult.theta_intervals")                                           | Return the confidence intervals for the angles in each iteration.                   |

<span id="undefined" />

`property alpha`

Return the confidence level $\alpha$.

**Return type**

`float`

<span id="undefined" />

`property circuit_results`

Return the circuit results. Can be a statevector or counts dictionary.

**Return type**

`Union`\[`ndarray`, `Dict`\[`str`, `int`], `None`]

<span id="undefined" />

`combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

<span id="undefined" />

`property confidence_interval`

Return the confidence interval for the amplitude (95% interval by default).

**Return type**

`Tuple`\[`float`, `float`]

<span id="undefined" />

`property confidence_interval_processed`

Return the post-processed confidence interval.

**Return type**

`Tuple`\[`float`, `float`]

<span id="undefined" />

`property epsilon_estimated`

Return the estimated half-width of the confidence interval.

**Return type**

`float`

<span id="undefined" />

`property epsilon_estimated_processed`

Return the post-processed estimated half-width of the confidence interval.

**Return type**

`float`

<span id="undefined" />

`property epsilon_target`

Return the target half-width of the confidence interval.

**Return type**

`float`

<span id="undefined" />

`property estimate_intervals`

Return the confidence intervals for the estimate in each iteration.

**Return type**

`List`\[`List`\[`float`]]

<span id="undefined" />

`property estimation`

Return the estimation for the amplitude in $[0, 1]$.

**Return type**

`float`

<span id="undefined" />

`property estimation_processed`

Return the estimation for the amplitude after the post-processing has been applied.

**Return type**

`float`

<span id="undefined" />

`property num_oracle_queries`

Return the number of Grover oracle queries.

**Return type**

`int`

<span id="undefined" />

`property post_processing`

Return a handle to the post processing function.

**Return type**

`Callable`\[\[`float`], `float`]

<span id="undefined" />

`property powers`

Return the powers of the Grover operator in each iteration.

**Return type**

`List`\[`int`]

<span id="undefined" />

`property ratios`

Return the ratios $K_{i+1}/K_{i}$ for each iteration $i$.

**Return type**

`List`\[`float`]

<span id="undefined" />

`property shots`

Return the number of shots used. Is 1 for statevector-based simulations.

**Return type**

`int`

<span id="undefined" />

`property theta_intervals`

Return the confidence intervals for the angles in each iteration.

**Return type**

`List`\[`List`\[`float`]]
