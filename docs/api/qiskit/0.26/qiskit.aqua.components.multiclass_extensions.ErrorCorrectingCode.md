# qiskit.aqua.components.multiclass\_extensions.ErrorCorrectingCode

<span id="undefined" />

`ErrorCorrectingCode(code_size=4)`

The Error Correcting Code multiclass extension.

Error Correcting Code (ECC) is an ensemble method designed for the multiclass classification problem. As for the other multiclass methods, the task is to decide one label from $k > 2$ possible choices.

|       |           |       |       |       |       |       |
| ----- | --------- | ----- | ----- | ----- | ----- | ----- |
| Class | Code Word |       |       |       |       |       |
|       | $f_0$     | $f_1$ | $f_2$ | $f_3$ | $f_4$ | $f_5$ |
| 1     | 0         | 1     | 0     | 1     | 0     | 1     |
| 2     | 1         | 0     | 0     | 1     | 0     | 0     |
| 3     | 1         | 1     | 1     | 0     | 0     | 0     |

The table above shows a 6-bit ECC for a 3-class problem. Each class is assigned a unique binary string of length 6. The string is also called a **codeword**. For example, class 2 has codeword `100100`. During training, one binary classifier is learned for each column. For example, for the first column, ECC builds a binary classifier to separate $\{2, 3\}$ from $\{1\}$. Thus, 6 binary classifiers are trained in this way. To classify a new data point $\mathbf{x}$, all 6 binary classifiers are evaluated to obtain a 6-bit string. Finally, we choose the class whose bitstring is closest to $\mathbf{x}$’s output string as the predicted label. This implementation of ECC uses the Euclidean distance.

**Parameters**

**code\_size** (`int`) – Size of error correcting code

<span id="undefined" />

`__init__(code_size=4)`

**Parameters**

**code\_size** (`int`) – Size of error correcting code

## Methods

|                                                                                                                                                                                                                |                                                                                                                                                                                                                                         |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.components.multiclass_extensions.ErrorCorrectingCode.__init__ "qiskit.aqua.components.multiclass_extensions.ErrorCorrectingCode.__init__")(\[code\_size])                            | **type code\_size**`int`                                                                                                                                                                                                                |
| [`predict`](#qiskit.aqua.components.multiclass_extensions.ErrorCorrectingCode.predict "qiskit.aqua.components.multiclass_extensions.ErrorCorrectingCode.predict")(x)                                           | Applying multiple estimators for prediction.                                                                                                                                                                                            |
| [`set_estimator`](#qiskit.aqua.components.multiclass_extensions.ErrorCorrectingCode.set_estimator "qiskit.aqua.components.multiclass_extensions.ErrorCorrectingCode.set_estimator")(estimator\_cls\[, params]) | Called internally to set `Estimator` and parameters :type estimator\_cls: `Callable`\[\[`List`], `Estimator`] :param estimator\_cls: An `Estimator` class :type params: `Optional`\[`List`] :param params: Parameters for the estimator |
| [`test`](#qiskit.aqua.components.multiclass_extensions.ErrorCorrectingCode.test "qiskit.aqua.components.multiclass_extensions.ErrorCorrectingCode.test")(x, y)                                                 | Testing multiple estimators each for distinguishing a pair of classes.                                                                                                                                                                  |
| [`train`](#qiskit.aqua.components.multiclass_extensions.ErrorCorrectingCode.train "qiskit.aqua.components.multiclass_extensions.ErrorCorrectingCode.train")(x, y)                                              | Training multiple estimators each for distinguishing a pair of classes.                                                                                                                                                                 |

<span id="undefined" />

`predict(x)`

Applying multiple estimators for prediction.

**Parameters**

**x** (*numpy.ndarray*) – NxD array

**Returns**

predicted labels, Nx1 array

**Return type**

numpy.ndarray

<span id="undefined" />

`set_estimator(estimator_cls, params=None)`

Called internally to set `Estimator` and parameters :type estimator\_cls: `Callable`\[\[`List`], `Estimator`] :param estimator\_cls: An `Estimator` class :type params: `Optional`\[`List`] :param params: Parameters for the estimator

**Return type**

`None`

<span id="undefined" />

`test(x, y)`

Testing multiple estimators each for distinguishing a pair of classes.

**Parameters**

*   **x** (*numpy.ndarray*) – input points
*   **y** (*numpy.ndarray*) – input labels

**Returns**

accuracy

**Return type**

float

<span id="undefined" />

`train(x, y)`

Training multiple estimators each for distinguishing a pair of classes.

**Parameters**

*   **x** (*numpy.ndarray*) – input points
*   **y** (*numpy.ndarray*) – input labels
