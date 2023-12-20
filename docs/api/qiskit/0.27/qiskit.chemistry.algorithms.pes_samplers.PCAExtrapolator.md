# qiskit.chemistry.algorithms.pes\_samplers.PCAExtrapolator

<span id="undefined" />

`PCAExtrapolator(extrapolator=None, kernel=None, window=2)`

A wrapper extrapolator which reduces the points’ dimensionality with PCA, performs extrapolation in the transformed pca space, and inverse transforms the results before returning. A user specifies the kernel within how the PCA transformation should be done.

Constructor.

**Parameters**

*   **extrapolator** (`Union`\[`PolynomialExtrapolator`, `DifferentialExtrapolator`, `None`]) – ‘internal’ extrapolator that performs extrapolation on variational parameters based on data window.
*   **kernel** (`Optional`\[`str`]) – Kernel (from sklearn) that specifies how dimensionality reduction should be done for PCA. Default value is None, and switches the extrapolation to standard PCA.
*   **window** (`int`) – Number of previous points to use for extrapolation.

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – if kernel is not defined in sklearn module.

<span id="undefined" />

`__init__(extrapolator=None, kernel=None, window=2)`

Constructor.

**Parameters**

*   **extrapolator** (`Union`\[`PolynomialExtrapolator`, `DifferentialExtrapolator`, `None`]) – ‘internal’ extrapolator that performs extrapolation on variational parameters based on data window.
*   **kernel** (`Optional`\[`str`]) – Kernel (from sklearn) that specifies how dimensionality reduction should be done for PCA. Default value is None, and switches the extrapolation to standard PCA.
*   **window** (`int`) – Number of previous points to use for extrapolation.

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – if kernel is not defined in sklearn module.

## Methods

|                                                                                                                                                                                       |                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.chemistry.algorithms.pes_samplers.PCAExtrapolator.__init__ "qiskit.chemistry.algorithms.pes_samplers.PCAExtrapolator.__init__")(\[extrapolator, kernel, window]) | Constructor.                                                                      |
| [`extrapolate`](#qiskit.chemistry.algorithms.pes_samplers.PCAExtrapolator.extrapolate "qiskit.chemistry.algorithms.pes_samplers.PCAExtrapolator.extrapolate")(points, param\_dict)    | Extrapolate at specified point of interest given a set of variational parameters. |
| [`factory`](#qiskit.chemistry.algorithms.pes_samplers.PCAExtrapolator.factory "qiskit.chemistry.algorithms.pes_samplers.PCAExtrapolator.factory")(mode, \*\*kwargs)                   | Factory method for constructing extrapolators.                                    |

<span id="undefined" />

`extrapolate(points, param_dict)`

Extrapolate at specified point of interest given a set of variational parameters. This method transforms the parameters in PCA space before performing the internal extrapolation. The parameters are transformed back to regular space after extrapolation.

**Parameters**

*   **points** (`List`\[`float`]) – List of point(s) to be used for extrapolation. Can represent some degree of freedom, ex, interatomic distance.
*   **param\_dict** (`Optional`\[`Dict`\[`float`, `List`\[`float`]]]) – Dictionary of variational parameters. Each key is the point
*   **the value is a list of the variational parameters.** (*and*) –

**Return type**

`Dict`\[`float`, `List`\[`float`]]

**Returns**

Dictionary of variational parameters for extrapolated point(s).

<span id="undefined" />

`static factory(mode, **kwargs)`

Factory method for constructing extrapolators.

**Parameters**

*   **mode** (`str`) – Extrapolator to instantiate. Can be one of: - ‘window’ - ‘poly’ - ‘diff\_model’ - ‘pca’ - ‘l1’
*   **kwargs** – arguments to be passed to the constructor of an extrapolator

**Return type**

`Extrapolator`

**Returns**

A newly created extrapolator instance.

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – if specified mode is unknown.
