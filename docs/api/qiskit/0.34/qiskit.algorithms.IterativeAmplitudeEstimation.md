# IterativeAmplitudeEstimation

<span id="undefined" />

`IterativeAmplitudeEstimation(epsilon_target, alpha, confint_method='beta', min_ratio=2, quantum_instance=None)`

Bases: `qiskit.algorithms.amplitude_estimators.amplitude_estimator.AmplitudeEstimator`

The Iterative Amplitude Estimation algorithm.

This class implements the Iterative Quantum Amplitude Estimation (IQAE) algorithm, proposed in \[1]. The output of the algorithm is an estimate that, with at least probability $1 - \alpha$, differs by epsilon to the target value, where both alpha and epsilon can be specified.

It differs from the original QAE algorithm proposed by Brassard \[2] in that it does not rely on Quantum Phase Estimation, but is only based on Grover’s algorithm. IQAE iteratively applies carefully selected Grover iterations to find an estimate for the target amplitude.

## References

**\[1]: Grinko, D., Gacon, J., Zoufal, C., & Woerner, S. (2019).**

Iterative Quantum Amplitude Estimation. [arXiv:1912.05559](https://arxiv.org/abs/1912.05559).

**\[2]: Brassard, G., Hoyer, P., Mosca, M., & Tapp, A. (2000).**

Quantum Amplitude Amplification and Estimation. [arXiv:quant-ph/0005055](http://arxiv.org/abs/quant-ph/0005055).

The output of the algorithm is an estimate for the amplitude a, that with at least probability 1 - alpha has an error of epsilon. The number of A operator calls scales linearly in 1/epsilon (up to a logarithmic factor).

**Parameters**

*   **epsilon\_target** (`float`) – Target precision for estimation target a, has values between 0 and 0.5
*   **alpha** (`float`) – Confidence level, the target probability is 1 - alpha, has values between 0 and 1
*   **confint\_method** (`str`) – Statistical method used to estimate the confidence intervals in each iteration, can be ‘chernoff’ for the Chernoff intervals or ‘beta’ for the Clopper-Pearson intervals (default)
*   **min\_ratio** (`float`) – Minimal q-ratio ($K_{i+1} / K_i$) for FindNextK
*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – Quantum Instance or Backend

**Raises**

*   [**AlgorithmError**](qiskit.algorithms.AlgorithmError#qiskit.algorithms.AlgorithmError "qiskit.algorithms.AlgorithmError") – if the method to compute the confidence intervals is not supported
*   **ValueError** – If the target epsilon is not in (0, 0.5]
*   **ValueError** – If alpha is not in (0, 1)
*   **ValueError** – If confint\_method is not supported

## Methods

|                                                                                                                                                                                                                             |                                                   |             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | ----------- |
| [`construct_circuit`](qiskit.algorithms.IterativeAmplitudeEstimation.construct_circuit#qiskit.algorithms.IterativeAmplitudeEstimation.construct_circuit "qiskit.algorithms.IterativeAmplitudeEstimation.construct_circuit") | Construct the circuit \$\mathcal{Q}^k \mathcal{A} | 0\rangle\$. |
| [`estimate`](qiskit.algorithms.IterativeAmplitudeEstimation.estimate#qiskit.algorithms.IterativeAmplitudeEstimation.estimate "qiskit.algorithms.IterativeAmplitudeEstimation.estimate")                                     | Run the amplitude estimation algorithm.           |             |

## Attributes

<span id="undefined" />

### epsilon\_target

Returns the target precision `epsilon_target` of the algorithm.

**Return type**

`float`

**Returns**

The target precision (which is half the width of the confidence interval).

<span id="undefined" />

### quantum\_instance

Get the quantum instance.

**Return type**

`Optional`\[`QuantumInstance`]

**Returns**

The quantum instance used to run this algorithm.
