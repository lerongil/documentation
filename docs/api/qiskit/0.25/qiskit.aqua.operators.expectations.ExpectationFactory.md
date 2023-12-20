# qiskit.aqua.operators.expectations.ExpectationFactory

<span id="undefined" />

`ExpectationFactory`

A factory class for convenient automatic selection of an Expectation based on the Operator to be converted and backend used to sample the expectation value.

<span id="undefined" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                                              |                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.operators.expectations.ExpectationFactory.__init__ "qiskit.aqua.operators.expectations.ExpectationFactory.__init__")()                             | Initialize self.                                                                                                                                              |
| [`build`](#qiskit.aqua.operators.expectations.ExpectationFactory.build "qiskit.aqua.operators.expectations.ExpectationFactory.build")(operator\[, backend, include\_custom]) | A factory method for convenient automatic selection of an Expectation based on the Operator to be converted and backend used to sample the expectation value. |

<span id="undefined" />

`static build(operator, backend=None, include_custom=True)`

A factory method for convenient automatic selection of an Expectation based on the Operator to be converted and backend used to sample the expectation value.

**Parameters**

*   **operator** (`OperatorBase`) – The Operator whose expectation value will be taken.
*   **backend** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – The backend which will be used to sample the expectation value.
*   **include\_custom** (`bool`) – Whether the factory will include the (Aer) specific custom expectations if their behavior against the backend might not be as expected. For instance when using Aer qasm\_simulator with paulis the Aer snapshot can be used but the outcome lacks shot noise and hence does not intuitively behave overall as people might expect when choosing a qasm\_simulator. It is however fast as long as the more state vector like behavior is acceptable.

**Return type**

`ExpectationBase`

**Returns**

The expectation algorithm which best fits the Operator and backend.

**Raises**

**ValueError** – If operator is not of a composition for which we know the best Expectation method.
