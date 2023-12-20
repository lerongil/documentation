<span id="qiskit-aqua-operators-expectations-expectationbase" />

# qiskit.aqua.operators.expectations.ExpectationBase

<span id="undefined" />

`ExpectationBase`

A base for Expectation value converters. Expectations are converters which enable the computation of the expectation value of an Observable with respect to some state function. They traverse an Operator tree, replacing OperatorStateFn measurements with equivalent measurements which are more amenable to computation on quantum or classical hardware. For example, if one would like to measure the expectation value of an Operator `o` expressed as a sum of Paulis with respect to some state function, but only has access to diagonal measurements on Quantum hardware, we can create a measurement \~StateFn(o), use a `PauliExpectation` to convert it to a diagonal measurement and circuit pre-rotations to a append to the state, and sample this circuit on Quantum hardware with a CircuitSampler. All in all, this would be: `my_sampler.convert(my_expect.convert(~StateFn(o)) @ my_state).eval()`.

<span id="undefined" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                                           |                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.operators.expectations.ExpectationBase.__init__ "qiskit.aqua.operators.expectations.ExpectationBase.__init__")()                                | Initialize self.                                                                                                                   |
| [`compute_variance`](#qiskit.aqua.operators.expectations.ExpectationBase.compute_variance "qiskit.aqua.operators.expectations.ExpectationBase.compute_variance")(exp\_op) | Compute the variance of the expectation estimator.                                                                                 |
| [`convert`](#qiskit.aqua.operators.expectations.ExpectationBase.convert "qiskit.aqua.operators.expectations.ExpectationBase.convert")(operator)                           | Accept an Operator and return a new Operator with the measurements replaced by alternate methods to compute the expectation value. |

<span id="undefined" />

`abstract compute_variance(exp_op)`

Compute the variance of the expectation estimator.

**Parameters**

**exp\_op** (`OperatorBase`) – The full expectation value Operator after sampling.

**Return type**

`Union`\[`list`, `float`, `complex`, `ndarray`]

**Returns**

The variances or lists thereof (if exp\_op contains ListOps) of the expectation value estimation.

<span id="undefined" />

`abstract convert(operator)`

Accept an Operator and return a new Operator with the measurements replaced by alternate methods to compute the expectation value.

**Parameters**

**operator** (`OperatorBase`) – The operator to convert.

**Return type**

`OperatorBase`

**Returns**

The converted operator.
