# Grover

<span id="undefined" />

`Grover(iterations=None, growth_rate=None, sample_from_iterations=False, quantum_instance=None)`

Bases: `qiskit.algorithms.amplitude_amplifiers.amplitude_amplifier.AmplitudeAmplifier`

Grover’s Search algorithm.

Grover’s Search \[1, 2] is a well known quantum algorithm that can be used for searching through unstructured collections of records for particular targets with quadratic speedup compared to classical algorithms.

Given a set $X$ of $N$ elements $X=\{x_1,x_2,\ldots,x_N\}$ and a boolean function $f : X \rightarrow \{0,1\}$, the goal of an unstructured-search problem is to find an element $x^* \in X$ such that $f(x^*)=1$.

The search is called *unstructured* because there are no guarantees as to how the database is ordered. On a sorted database, for instance, one could perform binary search to find an element in $\mathbb{O}(\log N)$ worst-case time. Instead, in an unstructured-search problem, there is no prior knowledge about the contents of the database. With classical circuits, there is no alternative but to perform a linear number of queries to find the target element. Conversely, Grover’s Search algorithm allows to solve the unstructured-search problem on a quantum computer in $\mathcal{O}(\sqrt{N})$ queries.

To carry out this search a so-called oracle is required, that flags a good element/state. The action of the oracle $\mathcal{S}_f$ is

$$
\mathcal{S}_f |x\rangle = (-1)^{f(x)} |x\rangle,
$$

i.e. it flips the phase of the state $|x\rangle$ if $x$ is a hit. The details of how $S_f$ works are unimportant to the algorithm; Grover’s search algorithm treats the oracle as a black box.

This class supports oracles in form of a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit").

With the given oracle, Grover’s Search constructs the Grover operator to amplify the amplitudes of the good states:

$$
\mathcal{Q} = H^{\otimes n} \mathcal{S}_0 H^{\otimes n} \mathcal{S}_f
            = D \mathcal{S}_f,
$$

where $\mathcal{S}_0$ flips the phase of the all-zero state and acts as identity on all other states. Sometimes the first three operands are summarized as diffusion operator, which implements a reflection over the equal superposition state.

If the number of solutions is known, we can calculate how often $\mathcal{Q}$ should be applied to find a solution with very high probability, see the method optimal\_num\_iterations. If the number of solutions is unknown, the algorithm tries different powers of Grover’s operator, see the iterations argument, and after each iteration checks if a good state has been measured using good\_state.

The generalization of Grover’s Search, Quantum Amplitude Amplification \[3], uses a modified version of $\mathcal{Q}$ where the diffusion operator does not reflect about the equal superposition state, but another state specified via an operator $\mathcal{A}$:

$$
\mathcal{Q} = \mathcal{A} \mathcal{S}_0 \mathcal{A}^\dagger \mathcal{S}_f.
$$

For more information, see the [`GroverOperator`](qiskit.circuit.library.GroverOperator#qiskit.circuit.library.GroverOperator "qiskit.circuit.library.GroverOperator") in the circuit library.

## References

**\[1]: L. K. Grover (1996), A fast quantum mechanical algorithm for database search,**

[arXiv:quant-ph/9605043](https://arxiv.org/abs/quant-ph/9605043).

**\[2]: I. Chuang & M. Nielsen, Quantum Computation and Quantum Information,**

Cambridge: Cambridge University Press, 2000. Chapter 6.1.2.

**\[3]: Brassard, G., Hoyer, P., Mosca, M., & Tapp, A. (2000).**

Quantum Amplitude Amplification and Estimation. [arXiv:quant-ph/0005055](http://arxiv.org/abs/quant-ph/0005055).

**Parameters**

*   **iterations** (`Union`\[`List`\[`int`], `Iterator`\[`int`], `int`, `None`]) – Specify the number of iterations/power of Grover’s operator to be checked. \* If an int, only one circuit is run with that power of the Grover operator. If the number of solutions is known, this option should be used with the optimal power. The optimal power can be computed with `Grover.optimal_num_iterations`. \* If a list, all the powers in the list are run in the specified order. \* If an iterator, the powers yielded by the iterator are checked, until a maximum number of iterations or maximum power is reached. \* If `None`, the [`AmplificationProblem`](qiskit.algorithms.AmplificationProblem#qiskit.algorithms.AmplificationProblem "qiskit.algorithms.AmplificationProblem") provided must have an `is_good_state`, and circuits are run until that good state is reached.
*   **growth\_rate** (`Optional`\[`float`]) – If specified, the iterator is set to increasing powers of `growth_rate`, i.e. to `int(growth_rate ** 1), int(growth_rate ** 2), ...` until a maximum number of iterations is reached.
*   **sample\_from\_iterations** (`bool`) – If True, instead of taking the values in `iterations` as powers of the Grover operator, a random integer sample between 0 and smaller value than the iteration is used as a power, see \[1], Section 4.
*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – A Quantum Instance or Backend to run the circuits.

**Raises**

*   **ValueError** – If `growth_rate` is a float but not larger than 1.
*   **ValueError** – If both `iterations` and `growth_rate` is set.

## References

**\[1]: Boyer et al., Tight bounds on quantum searching**

[https://arxiv.org/abs/quant-ph/9605034](https://arxiv.org/abs/quant-ph/9605034)

## Methods

|                                                                                                                                                                               |                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`amplify`](qiskit.algorithms.Grover.amplify#qiskit.algorithms.Grover.amplify "qiskit.algorithms.Grover.amplify")                                                             | Run the Grover algorithm.                                                     |
| [`construct_circuit`](qiskit.algorithms.Grover.construct_circuit#qiskit.algorithms.Grover.construct_circuit "qiskit.algorithms.Grover.construct_circuit")                     | Construct the circuit for Grover’s algorithm with `power` Grover operators.   |
| [`optimal_num_iterations`](qiskit.algorithms.Grover.optimal_num_iterations#qiskit.algorithms.Grover.optimal_num_iterations "qiskit.algorithms.Grover.optimal_num_iterations") | Return the optimal number of iterations, if the number of solutions is known. |

## Attributes

<span id="undefined" />

### quantum\_instance

Get the quantum instance. :rtype: `Optional`\[`QuantumInstance`] :returns: The quantum instance used to run this algorithm.
