# qiskit.quantum\_info.Quaternion

<span id="undefined" />

`Quaternion(data)`

A class representing a Quaternion.

<span id="undefined" />

`__init__(data)`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                             |                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| [`__init__`](#qiskit.quantum_info.Quaternion.__init__ "qiskit.quantum_info.Quaternion.__init__")(data)                                      | Initialize self.                                                               |
| [`from_axis_rotation`](#qiskit.quantum_info.Quaternion.from_axis_rotation "qiskit.quantum_info.Quaternion.from_axis_rotation")(angle, axis) | Return quaternion for rotation about given axis.                               |
| [`from_euler`](#qiskit.quantum_info.Quaternion.from_euler "qiskit.quantum_info.Quaternion.from_euler")(angles\[, order])                    | Generate a quaternion from a set of Euler angles.                              |
| [`norm`](#qiskit.quantum_info.Quaternion.norm "qiskit.quantum_info.Quaternion.norm")()                                                      | Norm of quaternion.                                                            |
| [`normalize`](#qiskit.quantum_info.Quaternion.normalize "qiskit.quantum_info.Quaternion.normalize")(\[inplace])                             | Normalizes a Quaternion to unit length so that it represents a valid rotation. |
| [`to_matrix`](#qiskit.quantum_info.Quaternion.to_matrix "qiskit.quantum_info.Quaternion.to_matrix")()                                       | Converts a unit-length quaternion to a rotation matrix.                        |
| [`to_zyz`](#qiskit.quantum_info.Quaternion.to_zyz "qiskit.quantum_info.Quaternion.to_zyz")()                                                | Converts a unit-length quaternion to a sequence of ZYZ Euler angles.           |

<span id="undefined" />

`classmethod from_axis_rotation(angle, axis)`

Return quaternion for rotation about given axis.

**Parameters**

*   **angle** (*float*) – Angle in radians.
*   **axis** (*str*) – Axis for rotation

**Returns**

Quaternion for axis rotation.

**Return type**

[Quaternion](#qiskit.quantum_info.Quaternion "qiskit.quantum_info.Quaternion")

**Raises**

**ValueError** – Invalid input axis.

<span id="undefined" />

`classmethod from_euler(angles, order='yzy')`

Generate a quaternion from a set of Euler angles.

**Parameters**

*   **angles** (*array\_like*) – Array of Euler angles.
*   **order** (*str*) – Order of Euler rotations. ‘yzy’ is default.

**Returns**

Quaternion representation of Euler rotation.

**Return type**

[Quaternion](#qiskit.quantum_info.Quaternion "qiskit.quantum_info.Quaternion")

<span id="undefined" />

`norm()`

Norm of quaternion.

<span id="undefined" />

`normalize(inplace=False)`

Normalizes a Quaternion to unit length so that it represents a valid rotation.

**Parameters**

**inplace** (*bool*) – Do an inplace normalization.

**Returns**

Normalized quaternion.

**Return type**

[Quaternion](#qiskit.quantum_info.Quaternion "qiskit.quantum_info.Quaternion")

<span id="undefined" />

`to_matrix()`

Converts a unit-length quaternion to a rotation matrix.

**Returns**

Rotation matrix.

**Return type**

ndarray

<span id="undefined" />

`to_zyz()`

Converts a unit-length quaternion to a sequence of ZYZ Euler angles.

**Returns**

Array of Euler angles.

**Return type**

ndarray
