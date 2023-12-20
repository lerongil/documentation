# qiskit.chemistry.algorithms.VQEUVCCSDFactory

<span id="undefined" />

`VQEUVCCSDFactory(quantum_instance, optimizer=None, initial_point=None, gradient=None, expectation=None, include_custom=False)`

A factory to construct a VQE minimum eigensolver with UVCCSD ansatz wavefunction.

**Parameters**

*   **quantum\_instance** (`QuantumInstance`) – The quantum instance used in the minimum eigensolver.
*   **optimizer** (`Optional`\[`Optimizer`]) – A classical optimizer.
*   **initial\_point** (`Optional`\[`ndarray`]) – An optional initial point (i.e. initial parameter values) for the optimizer. If `None` then VQE will look to the variational form for a preferred point and if not will simply compute a random one.
*   **gradient** (`Union`\[`GradientBase`, `Callable`, `None`]) – An optional gradient function or operator for optimizer.
*   **expectation** (`Optional`\[`ExpectationBase`]) – The Expectation converter for taking the average value of the Observable over the var\_form state function. When `None` (the default) an [`ExpectationFactory`](qiskit.aqua.operators.expectations.ExpectationFactory#qiskit.aqua.operators.expectations.ExpectationFactory "qiskit.aqua.operators.expectations.ExpectationFactory") is used to select an appropriate expectation based on the operator and backend. When using Aer qasm\_simulator backend, with paulis, it is however much faster to leverage custom Aer function for the computation but, although VQE performs much faster with it, the outcome is ideal, with no shot noise, like using a state vector simulator. If you are just looking for the quickest performance when choosing Aer qasm\_simulator and the lack of shot noise is not an issue then set include\_custom parameter here to `True` (defaults to `False`).
*   **include\_custom** (`bool`) – When expectation parameter here is None setting this to `True` will allow the factory to include the custom Aer pauli expectation.

<span id="undefined" />

`__init__(quantum_instance, optimizer=None, initial_point=None, gradient=None, expectation=None, include_custom=False)`

**Parameters**

*   **quantum\_instance** (`QuantumInstance`) – The quantum instance used in the minimum eigensolver.
*   **optimizer** (`Optional`\[`Optimizer`]) – A classical optimizer.
*   **initial\_point** (`Optional`\[`ndarray`]) – An optional initial point (i.e. initial parameter values) for the optimizer. If `None` then VQE will look to the variational form for a preferred point and if not will simply compute a random one.
*   **gradient** (`Union`\[`GradientBase`, `Callable`, `None`]) – An optional gradient function or operator for optimizer.
*   **expectation** (`Optional`\[`ExpectationBase`]) – The Expectation converter for taking the average value of the Observable over the var\_form state function. When `None` (the default) an [`ExpectationFactory`](qiskit.aqua.operators.expectations.ExpectationFactory#qiskit.aqua.operators.expectations.ExpectationFactory "qiskit.aqua.operators.expectations.ExpectationFactory") is used to select an appropriate expectation based on the operator and backend. When using Aer qasm\_simulator backend, with paulis, it is however much faster to leverage custom Aer function for the computation but, although VQE performs much faster with it, the outcome is ideal, with no shot noise, like using a state vector simulator. If you are just looking for the quickest performance when choosing Aer qasm\_simulator and the lack of shot noise is not an issue then set include\_custom parameter here to `True` (defaults to `False`).
*   **include\_custom** (`bool`) – When expectation parameter here is None setting this to `True` will allow the factory to include the custom Aer pauli expectation.

## Methods

|                                                                                                                                                                          |                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.chemistry.algorithms.VQEUVCCSDFactory.__init__ "qiskit.chemistry.algorithms.VQEUVCCSDFactory.__init__")(quantum\_instance\[, optimizer, …])         | **type quantum\_instance**`QuantumInstance`                                             |
| [`get_solver`](#qiskit.chemistry.algorithms.VQEUVCCSDFactory.get_solver "qiskit.chemistry.algorithms.VQEUVCCSDFactory.get_solver")(transformation)                       | Returns a VQE with a UVCCSD wavefunction ansatz, based on `transformation`.             |
| [`supports_aux_operators`](#qiskit.chemistry.algorithms.VQEUVCCSDFactory.supports_aux_operators "qiskit.chemistry.algorithms.VQEUVCCSDFactory.supports_aux_operators")() | Returns whether the eigensolver generated by this factory supports auxiliary operators. |

## Attributes

|                                                                                                                                                      |                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`expectation`](#qiskit.chemistry.algorithms.VQEUVCCSDFactory.expectation "qiskit.chemistry.algorithms.VQEUVCCSDFactory.expectation")                | Getter of the expectation.                                            |
| [`gradient`](#qiskit.chemistry.algorithms.VQEUVCCSDFactory.gradient "qiskit.chemistry.algorithms.VQEUVCCSDFactory.gradient")                         | Getter of the gradient function                                       |
| [`include_custom`](#qiskit.chemistry.algorithms.VQEUVCCSDFactory.include_custom "qiskit.chemistry.algorithms.VQEUVCCSDFactory.include_custom")       | Getter of the `include_custom` setting for the `expectation` setting. |
| [`initial_point`](#qiskit.chemistry.algorithms.VQEUVCCSDFactory.initial_point "qiskit.chemistry.algorithms.VQEUVCCSDFactory.initial_point")          | Getter of the initial point.                                          |
| [`optimizer`](#qiskit.chemistry.algorithms.VQEUVCCSDFactory.optimizer "qiskit.chemistry.algorithms.VQEUVCCSDFactory.optimizer")                      | Getter of the optimizer.                                              |
| [`quantum_instance`](#qiskit.chemistry.algorithms.VQEUVCCSDFactory.quantum_instance "qiskit.chemistry.algorithms.VQEUVCCSDFactory.quantum_instance") | Getter of the quantum instance.                                       |

<span id="undefined" />

`property expectation`

Getter of the expectation.

**Return type**

`ExpectationBase`

<span id="undefined" />

`get_solver(transformation)`

Returns a VQE with a UVCCSD wavefunction ansatz, based on `transformation`. This works only with a `BosonicTransformation`.

**Parameters**

**transformation** (`BosonicTransformation`) – a bosonic qubit operator transformation.

**Return type**

`MinimumEigensolver`

**Returns**

A VQE suitable to compute the ground state of the molecule transformed by `transformation`.

<span id="undefined" />

`property gradient`

Getter of the gradient function

**Return type**

`Union`\[`GradientBase`, `Callable`, `None`]

<span id="undefined" />

`property include_custom`

Getter of the `include_custom` setting for the `expectation` setting.

**Return type**

`bool`

<span id="undefined" />

`property initial_point`

Getter of the initial point.

**Return type**

`ndarray`

<span id="undefined" />

`property optimizer`

Getter of the optimizer.

**Return type**

`Optimizer`

<span id="undefined" />

`property quantum_instance`

Getter of the quantum instance.

**Return type**

`QuantumInstance`

<span id="undefined" />

`supports_aux_operators()`

Returns whether the eigensolver generated by this factory supports auxiliary operators.
