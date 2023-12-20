# qiskit.aqua.components.reciprocals.LongDivision

<span id="undefined" />

`LongDivision(scale=0, precision=None, negative_evals=False, evo_time=None, lambda_min=None)`

The Long Division Rotation for Reciprocals.

This method calculates inverse of eigenvalues using binary long division and performs the corresponding rotation. Long division is implemented as a sequence of subtraction (utilizing ripple carry adder module) and bit shifting. The method allows for adjusting of the reciprocal precision by changing number of iterations. The method was optimized for register conventions used in HHL algorithm (i.e. eigenvalues rescaled to values between 0 and 1).

The rotation value is always scaled down additionally to the normal scale parameter by 0.5 to get the angle into the linear part of the arcsin(x).

It finds the reciprocal with long division method and rotates the ancillary qubit by C/lambda. This is a first order approximation of arcsin(C/lambda).

**Parameters**

*   **scale** (`float`) – The scale of rotation angle, corresponds to HHL constant C. This parameter is used to scale the reciprocals such that for a scale C, the rotation is performed by an angle $\arcsin{\frac{C}{\lambda}}$. If neither the scale nor the evo\_time and lambda\_min parameters are specified, the smallest resolvable Eigenvalue is used.
*   **precision** (`Optional`\[`int`]) – Number of qubits that defines the precision of long division. The parameter sets minimum desired bit precision for the reciprocal. Due to shifting some of reciprocals, however, are effectively estimated with higher than this minimum specified precision.
*   **negative\_evals** (`bool`) – Indicate if negative eigenvalues need to be handled
*   **evo\_time** (`Optional`\[`float`]) – The evolution time. This parameter scales the Eigenvalues in the phase estimation onto the range (0,1] ( (-0.5,0.5] for negative Eigenvalues ).
*   **lambda\_min** (`Optional`\[`float`]) – The smallest expected eigenvalue

<span id="undefined" />

`__init__(scale=0, precision=None, negative_evals=False, evo_time=None, lambda_min=None)`

**Parameters**

*   **scale** (`float`) – The scale of rotation angle, corresponds to HHL constant C. This parameter is used to scale the reciprocals such that for a scale C, the rotation is performed by an angle $\arcsin{\frac{C}{\lambda}}$. If neither the scale nor the evo\_time and lambda\_min parameters are specified, the smallest resolvable Eigenvalue is used.
*   **precision** (`Optional`\[`int`]) – Number of qubits that defines the precision of long division. The parameter sets minimum desired bit precision for the reciprocal. Due to shifting some of reciprocals, however, are effectively estimated with higher than this minimum specified precision.
*   **negative\_evals** (`bool`) – Indicate if negative eigenvalues need to be handled
*   **evo\_time** (`Optional`\[`float`]) – The evolution time. This parameter scales the Eigenvalues in the phase estimation onto the range (0,1] ( (-0.5,0.5] for negative Eigenvalues ).
*   **lambda\_min** (`Optional`\[`float`]) – The smallest expected eigenvalue

## Methods

|                                                                                                                                                                                           |                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| [`__init__`](#qiskit.aqua.components.reciprocals.LongDivision.__init__ "qiskit.aqua.components.reciprocals.LongDivision.__init__")(\[scale, precision, negative\_evals, …])               | **type scale**`float`                         |
| [`construct_circuit`](#qiskit.aqua.components.reciprocals.LongDivision.construct_circuit "qiskit.aqua.components.reciprocals.LongDivision.construct_circuit")(mode\[, register, circuit]) | Construct the Long Division Rotation circuit. |
| [`sv_to_resvec`](#qiskit.aqua.components.reciprocals.LongDivision.sv_to_resvec "qiskit.aqua.components.reciprocals.LongDivision.sv_to_resvec")(statevector, num\_q)                       | Convert statevector to result vector.         |

<span id="undefined" />

`construct_circuit(mode, register=None, circuit=None)`

Construct the Long Division Rotation circuit.

**Parameters**

*   **mode** (*str*) – construction mode, ‘matrix’ not supported
*   **register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister#qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – input register, typically output register of Eigenvalues
*   **circuit** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – Quantum Circuit or None

**Returns**

containing the Long Division Rotation circuit.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**NotImplementedError** – mode not supported

<span id="undefined" />

`sv_to_resvec(statevector, num_q)`

Convert statevector to result vector.

**Parameters**

*   **statevector** (*list*) – The statevector from simulation.
*   **num\_q** (*int*) – Number of qubits of result register.

**Returns**

The result vector.
