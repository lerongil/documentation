# qiskit.algorithms.FasterAmplitudeEstimation

<span id="undefined" />

`FasterAmplitudeEstimation(delta, maxiter, rescale=True, quantum_instance=None)`

The Faster Amplitude Estimation algorithm.

The Faster Amplitude Estimation (FAE) \[1] algorithm is a variant of Quantum Amplitude Estimation (QAE), where the Quantum Phase Estimation (QPE) by an iterative Grover search, similar to \[2].

Due to the iterative version of the QPE, this algorithm does not require any additional qubits, as the originally proposed QAE \[3] and thus the resulting circuits are less complex.

## References

**\[1]: K. Nakaji. Faster Amplitude Estimation, 2020;**

[arXiv:2002.02417](https://arxiv.org/pdf/2003.02417.pdf)

**\[2]: D. Grinko et al. Iterative Amplitude Estimation, 2019;**

[arXiv:1912.05559](http://arxiv.org/abs/1912.05559)

**\[3]: G. Brassard et al. Quantum Amplitude Amplification and Estimation, 2000;**

[arXiv:quant-ph/0005055](http://arxiv.org/abs/quant-ph/0005055)

**Parameters**

*   **delta** (`float`) – The probability that the true value is outside of the final confidence interval.
*   **maxiter** (`int`) – The number of iterations, the maximal power of Q is 2 \*\* (maxiter - 1).
*   **rescale** (`bool`) – Whether to rescale the problem passed to estimate.
*   **quantum\_instance** (`Union`\[`Backend`, `BaseBackend`, `QuantumInstance`, `None`]) – The quantum instance or backend to run the circuits.

<Admonition title="Note" type="note">
  This algorithm overwrites the number of shots set in the `quantum_instance` argument, but will reset them to the initial number after running.
</Admonition>

<span id="undefined" />

`__init__(delta, maxiter, rescale=True, quantum_instance=None)`

**Parameters**

*   **delta** (`float`) – The probability that the true value is outside of the final confidence interval.
*   **maxiter** (`int`) – The number of iterations, the maximal power of Q is 2 \*\* (maxiter - 1).
*   **rescale** (`bool`) – Whether to rescale the problem passed to estimate.
*   **quantum\_instance** (`Union`\[`Backend`, `BaseBackend`, `QuantumInstance`, `None`]) – The quantum instance or backend to run the circuits.

<Admonition title="Note" type="note">
  This algorithm overwrites the number of shots set in the `quantum_instance` argument, but will reset them to the initial number after running.
</Admonition>

## Methods

|                                                                                                                                                                                     |                                         |              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | ------------ |
| [`__init__`](#qiskit.algorithms.FasterAmplitudeEstimation.__init__ "qiskit.algorithms.FasterAmplitudeEstimation.__init__")(delta, maxiter\[, rescale, …])                           | **type delta**`float`                   |              |
| [`construct_circuit`](#qiskit.algorithms.FasterAmplitudeEstimation.construct_circuit "qiskit.algorithms.FasterAmplitudeEstimation.construct_circuit")(estimation\_problem, k\[, …]) | Construct the circuit \$Q^k X           | 0\rangle>\$. |
| [`estimate`](#qiskit.algorithms.FasterAmplitudeEstimation.estimate "qiskit.algorithms.FasterAmplitudeEstimation.estimate")(estimation\_problem)                                     | Run the amplitude estimation algorithm. |              |

## Attributes

|                                                                                                                                                    |                           |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| [`quantum_instance`](#qiskit.algorithms.FasterAmplitudeEstimation.quantum_instance "qiskit.algorithms.FasterAmplitudeEstimation.quantum_instance") | Get the quantum instance. |

<span id="undefined" />

`construct_circuit(estimation_problem, k, measurement=False)`

Construct the circuit $Q^k X |0\rangle>$.

The A operator is the unitary specifying the QAE problem and Q the associated Grover operator.

**Parameters**

*   **estimation\_problem** (`EstimationProblem`) – The estimation problem for which to construct the circuit.
*   **k** (`int`) – The power of the Q operator.
*   **measurement** (`bool`) – Boolean flag to indicate if measurements should be included in the circuits.

**Return type**

`Union`\[`QuantumCircuit`, `Tuple`\[`QuantumCircuit`, `List`\[`int`]]]

**Returns**

The circuit $Q^k X |0\rangle$.

<span id="undefined" />

`estimate(estimation_problem)`

Run the amplitude estimation algorithm.

**Parameters**

**estimation\_problem** (`EstimationProblem`) – An `EstimationProblem` containing all problem-relevant information such as the state preparation and the objective qubits.

**Return type**

`FasterAmplitudeEstimationResult`

<span id="undefined" />

`property quantum_instance`

Get the quantum instance.

**Return type**

`Optional`\[`QuantumInstance`]

**Returns**

The quantum instance used to run this algorithm.
