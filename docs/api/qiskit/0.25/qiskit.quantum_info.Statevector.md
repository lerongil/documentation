# qiskit.quantum\_info.Statevector

<span id="undefined" />

`Statevector(data, dims=None)`

Statevector class

Initialize a statevector object.

**Parameters**

*   \*\*(****np.array**** or ****list**** or ****Statevector**** or ****Operator**** or \*\***QuantumCircuit or** (*data*) – qiskit.circuit.Instruction): Data from which the statevector can be constructed. This can be either a complex vector, another statevector, a ```Operator` with only one column or a ``QuantumCircuit``` or `Instruction`. If the data is a circuit or instruction, the statevector is constructed by assuming that all qubits are initialized to the zero state.
*   **dims** (*int or tuple or list*) – Optional. The subsystem dimension of the state (See additional information).

**Raises**

**QiskitError** – if input data is not valid.

**Additional Information:**

The `dims` kwarg can be None, an integer, or an iterable of integers.

*   `Iterable` – the subsystem dimensions are the values in the list with the total number of subsystems given by the length of the list.
*   `Int` or `None` – the length of the input vector specifies the total dimension of the density matrix. If it is a power of two the state will be initialized as an N-qubit state. If it is not a power of two the state will have a single d-dimensional subsystem.

<span id="undefined" />

`__init__(data, dims=None)`

Initialize a statevector object.

**Parameters**

*   \*\*(****np.array**** or ****list**** or ****Statevector**** or ****Operator**** or \*\***QuantumCircuit or** (*data*) – qiskit.circuit.Instruction): Data from which the statevector can be constructed. This can be either a complex vector, another statevector, a ```Operator` with only one column or a ``QuantumCircuit``` or `Instruction`. If the data is a circuit or instruction, the statevector is constructed by assuming that all qubits are initialized to the zero state.
*   **dims** (*int or tuple or list*) – Optional. The subsystem dimension of the state (See additional information).

**Raises**

**QiskitError** – if input data is not valid.

**Additional Information:**

The `dims` kwarg can be None, an integer, or an iterable of integers.

*   `Iterable` – the subsystem dimensions are the values in the list with the total number of subsystems given by the length of the list.
*   `Int` or `None` – the length of the input vector specifies the total dimension of the density matrix. If it is a power of two the state will be initialized as an N-qubit state. If it is not a power of two the state will have a single d-dimensional subsystem.

## Methods

|                                                                                                                                                      |                                                                         |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| [`__init__`](#qiskit.quantum_info.Statevector.__init__ "qiskit.quantum_info.Statevector.__init__")(data\[, dims])                                    | Initialize a statevector object.                                        |
| [`conjugate`](#qiskit.quantum_info.Statevector.conjugate "qiskit.quantum_info.Statevector.conjugate")()                                              | Return the conjugate of the operator.                                   |
| [`copy`](#qiskit.quantum_info.Statevector.copy "qiskit.quantum_info.Statevector.copy")()                                                             | Make a copy of current operator.                                        |
| [`dims`](#qiskit.quantum_info.Statevector.dims "qiskit.quantum_info.Statevector.dims")(\[qargs])                                                     | Return tuple of input dimension for specified subsystems.               |
| [`draw`](#qiskit.quantum_info.Statevector.draw "qiskit.quantum_info.Statevector.draw")(\[output])                                                    | Return a visualization of the Statevector.                              |
| [`equiv`](#qiskit.quantum_info.Statevector.equiv "qiskit.quantum_info.Statevector.equiv")(other\[, rtol, atol])                                      | Return True if other is equivalent as a statevector up to global phase. |
| [`evolve`](#qiskit.quantum_info.Statevector.evolve "qiskit.quantum_info.Statevector.evolve")(other\[, qargs])                                        | Evolve a quantum state by the operator.                                 |
| [`expand`](#qiskit.quantum_info.Statevector.expand "qiskit.quantum_info.Statevector.expand")(other)                                                  | Return the tensor product state other ⊗ self.                           |
| [`expectation_value`](#qiskit.quantum_info.Statevector.expectation_value "qiskit.quantum_info.Statevector.expectation_value")(oper\[, qargs])        | Compute the expectation value of an operator.                           |
| [`from_instruction`](#qiskit.quantum_info.Statevector.from_instruction "qiskit.quantum_info.Statevector.from_instruction")(instruction)              | Return the output statevector of an instruction.                        |
| [`from_int`](#qiskit.quantum_info.Statevector.from_int "qiskit.quantum_info.Statevector.from_int")(i, dims)                                          | Return a computational basis statevector.                               |
| [`from_label`](#qiskit.quantum_info.Statevector.from_label "qiskit.quantum_info.Statevector.from_label")(label)                                      | Return a tensor product of Pauli X,Y,Z eigenstates.                     |
| [`is_valid`](#qiskit.quantum_info.Statevector.is_valid "qiskit.quantum_info.Statevector.is_valid")(\[atol, rtol])                                    | Return True if a Statevector has norm 1.                                |
| [`measure`](#qiskit.quantum_info.Statevector.measure "qiskit.quantum_info.Statevector.measure")(\[qargs])                                            | Measure subsystems and return outcome and post-measure state.           |
| [`probabilities`](#qiskit.quantum_info.Statevector.probabilities "qiskit.quantum_info.Statevector.probabilities")(\[qargs, decimals])                | Return the subsystem measurement probability vector.                    |
| [`probabilities_dict`](#qiskit.quantum_info.Statevector.probabilities_dict "qiskit.quantum_info.Statevector.probabilities_dict")(\[qargs, decimals]) | Return the subsystem measurement probability dictionary.                |
| [`purity`](#qiskit.quantum_info.Statevector.purity "qiskit.quantum_info.Statevector.purity")()                                                       | Return the purity of the quantum state.                                 |
| [`reset`](#qiskit.quantum_info.Statevector.reset "qiskit.quantum_info.Statevector.reset")(\[qargs])                                                  | Reset state or subsystems to the 0-state.                               |
| [`reverse_qargs`](#qiskit.quantum_info.Statevector.reverse_qargs "qiskit.quantum_info.Statevector.reverse_qargs")()                                  | Return a Statevector with reversed subsystem ordering.                  |
| [`sample_counts`](#qiskit.quantum_info.Statevector.sample_counts "qiskit.quantum_info.Statevector.sample_counts")(shots\[, qargs])                   | Sample a dict of qubit measurement outcomes in the computational basis. |
| [`sample_memory`](#qiskit.quantum_info.Statevector.sample_memory "qiskit.quantum_info.Statevector.sample_memory")(shots\[, qargs])                   | Sample a list of qubit measurement outcomes in the computational basis. |
| [`seed`](#qiskit.quantum_info.Statevector.seed "qiskit.quantum_info.Statevector.seed")(\[value])                                                     | Set the seed for the quantum state RNG.                                 |
| [`tensor`](#qiskit.quantum_info.Statevector.tensor "qiskit.quantum_info.Statevector.tensor")(other)                                                  | Return the tensor product state self ⊗ other.                           |
| [`to_dict`](#qiskit.quantum_info.Statevector.to_dict "qiskit.quantum_info.Statevector.to_dict")(\[decimals])                                         | Convert the statevector to dictionary form.                             |
| [`to_operator`](#qiskit.quantum_info.Statevector.to_operator "qiskit.quantum_info.Statevector.to_operator")()                                        | Convert state to a rank-1 projector operator                            |
| [`trace`](#qiskit.quantum_info.Statevector.trace "qiskit.quantum_info.Statevector.trace")()                                                          | Return the trace of the quantum state as a density matrix.              |

## Attributes

|                                                                                                          |                                                                   |
| -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| [`atol`](#qiskit.quantum_info.Statevector.atol "qiskit.quantum_info.Statevector.atol")                   | Default absolute tolerance parameter for float comparisons.       |
| [`data`](#qiskit.quantum_info.Statevector.data "qiskit.quantum_info.Statevector.data")                   | Return data.                                                      |
| [`dim`](#qiskit.quantum_info.Statevector.dim "qiskit.quantum_info.Statevector.dim")                      | Return total state dimension.                                     |
| [`num_qubits`](#qiskit.quantum_info.Statevector.num_qubits "qiskit.quantum_info.Statevector.num_qubits") | Return the number of qubits if a N-qubit state or None otherwise. |
| [`rtol`](#qiskit.quantum_info.Statevector.rtol "qiskit.quantum_info.Statevector.rtol")                   | Default relative tolerance parameter for float comparisons.       |

<span id="undefined" />

`property atol`

Default absolute tolerance parameter for float comparisons.

<span id="undefined" />

`conjugate()`

Return the conjugate of the operator.

<span id="undefined" />

`copy()`

Make a copy of current operator.

<span id="undefined" />

`property data`

Return data.

<span id="undefined" />

`property dim`

Return total state dimension.

<span id="undefined" />

`dims(qargs=None)`

Return tuple of input dimension for specified subsystems.

<span id="undefined" />

`draw(output=None, **drawer_args)`

Return a visualization of the Statevector.

**repr**: ASCII TextMatrix of the state’s `__repr__`.

**text**: ASCII TextMatrix that can be printed in the console.

**latex**: An IPython Latex object for displaying in Jupyter Notebooks.

**latex\_source**: Raw, uncompiled ASCII source to generate array using LaTeX.

**qsphere**: Matplotlib figure, rendering of statevector using plot\_state\_qsphere().

**hinton**: Matplotlib figure, rendering of statevector using plot\_state\_hinton().

**bloch**: Matplotlib figure, rendering of statevector using plot\_bloch\_multivector().

**Parameters**

*   **output** (*str*) – Select the output method to use for drawing the state. Valid choices are repr, text, latex, latex\_source, qsphere, hinton, or bloch. Default is repr. Default can be changed by adding the line `state_drawer = <default>` to `~/.qiskit/settings.conf` under `[default]`.
*   **drawer\_args** – Arguments to be passed directly to the relevant drawing function or constructor (TextMatrix(), array\_to\_latex(), plot\_state\_qsphere(), plot\_state\_hinton() or plot\_bloch\_multivector()). See the relevant function under qiskit.visualization for that function’s documentation.

**Returns**

`matplotlib.Figure` or `str` or `TextMatrix` or `IPython.display.Latex`: Drawing of the Statevector.

**Raises**

**ValueError** – when an invalid output method is selected.

<span id="undefined" />

`equiv(other, rtol=None, atol=None)`

Return True if other is equivalent as a statevector up to global phase.

<Admonition title="Note" type="note">
  If other is not a Statevector, but can be used to initialize a statevector object, this will check that Statevector(other) is equivalent to the current statevector up to global phase.
</Admonition>

**Parameters**

*   **other** ([*Statevector*](#qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector")) – an object from which a `Statevector` can be constructed.
*   **rtol** (*float*) – relative tolerance value for comparison.
*   **atol** (*float*) – absolute tolerance value for comparison.

**Returns**

True if statevectors are equivalent up to global phase.

**Return type**

bool

<span id="undefined" />

`evolve(other, qargs=None)`

Evolve a quantum state by the operator.

**Parameters**

*   **other** ([*Operator*](qiskit.quantum_info.Operator#qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – The operator to evolve by.
*   **qargs** (*list*) – a list of Statevector subsystem positions to apply the operator on.

**Returns**

the output quantum state.

**Return type**

[Statevector](#qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector")

**Raises**

**QiskitError** – if the operator dimension does not match the specified Statevector subsystem dimensions.

<span id="undefined" />

`expand(other)`

Return the tensor product state other ⊗ self.

**Parameters**

**other** ([*Statevector*](#qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector")) – a quantum state object.

**Returns**

the tensor product state other ⊗ self.

**Return type**

[Statevector](#qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector")

**Raises**

**QiskitError** – if other is not a quantum state.

<span id="undefined" />

`expectation_value(oper, qargs=None)`

Compute the expectation value of an operator.

**Parameters**

*   **oper** ([*Operator*](qiskit.quantum_info.Operator#qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – an operator to evaluate expval of.
*   **qargs** (*None or list*) – subsystems to apply operator on.

**Returns**

the expectation value.

**Return type**

complex

<span id="undefined" />

`classmethod from_instruction(instruction)`

Return the output statevector of an instruction.

The statevector is initialized in the state $|{0,\ldots,0}\rangle$ of the same number of qubits as the input instruction or circuit, evolved by the input instruction, and the output statevector returned.

**Parameters**

**instruction** ([*qiskit.circuit.Instruction*](qiskit.circuit.Instruction#qiskit.circuit.Instruction "qiskit.circuit.Instruction")  *or*[*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – instruction or circuit

**Returns**

The final statevector.

**Return type**

[Statevector](#qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector")

**Raises**

**QiskitError** – if the instruction contains invalid instructions for the statevector simulation.

<span id="undefined" />

`static from_int(i, dims)`

Return a computational basis statevector.

**Parameters**

*   **i** (*int*) – the basis state element.
*   **dims** (*int or tuple or list*) – The subsystem dimensions of the statevector (See additional information).

**Returns**

The computational basis state $|i\rangle$.

**Return type**

[Statevector](#qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector")

**Additional Information:**

The `dims` kwarg can be an integer or an iterable of integers.

*   `Iterable` – the subsystem dimensions are the values in the list with the total number of subsystems given by the length of the list.
*   `Int` – the integer specifies the total dimension of the state. If it is a power of two the state will be initialized as an N-qubit state. If it is not a power of two the state will have a single d-dimensional subsystem.

<span id="undefined" />

`classmethod from_label(label)`

Return a tensor product of Pauli X,Y,Z eigenstates.

| Label | Statevector                     |
| ----- | ------------------------------- |
| `"0"` | $[1, 0]$                        |
| `"1"` | $[0, 1]$                        |
| `"+"` | $[1 / \sqrt{2}, 1 / \sqrt{2}]$  |
| `"-"` | $[1 / \sqrt{2}, -1 / \sqrt{2}]$ |
| `"r"` | $[1 / \sqrt{2}, i / \sqrt{2}]$  |
| `"l"` | $[1 / \sqrt{2}, -i / \sqrt{2}]$ |

**Parameters**

**label** (*string*) – a eigenstate string ket label (see table for allowed values).

**Returns**

The N-qubit basis state density matrix.

**Return type**

[Statevector](#qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector")

**Raises**

**QiskitError** – if the label contains invalid characters, or the length of the label is larger than an explicitly specified num\_qubits.

<span id="undefined" />

`is_valid(atol=None, rtol=None)`

Return True if a Statevector has norm 1.

<span id="undefined" />

`measure(qargs=None)`

Measure subsystems and return outcome and post-measure state.

Note that this function uses the QuantumStates internal random number generator for sampling the measurement outcome. The RNG seed can be set using the [`seed()`](#qiskit.quantum_info.Statevector.seed "qiskit.quantum_info.Statevector.seed") method.

**Parameters**

**qargs** (*list or None*) – subsystems to sample measurements for, if None sample measurement of all subsystems (Default: None).

**Returns**

**the pair `(outcome, state)` where `outcome` is the**

measurement outcome string label, and `state` is the collapsed post-measurement state for the corresponding outcome.

**Return type**

tuple

<span id="undefined" />

`property num_qubits`

Return the number of qubits if a N-qubit state or None otherwise.

<span id="undefined" />

`probabilities(qargs=None, decimals=None)`

Return the subsystem measurement probability vector.

Measurement probabilities are with respect to measurement in the computation (diagonal) basis.

**Parameters**

*   **qargs** (*None or list*) – subsystems to return probabilities for, if None return for all subsystems (Default: None).
*   **decimals** (*None or int*) – the number of decimal places to round values. If None no rounding is done (Default: None).

**Returns**

The Numpy vector array of probabilities.

**Return type**

np.array

## Examples

Consider a 2-qubit product state $|\psi\rangle=|+\rangle\otimes|0\rangle$.

```python
from qiskit.quantum_info import Statevector

psi = Statevector.from_label('+0')

# Probabilities for measuring both qubits
probs = psi.probabilities()
print('probs: {}'.format(probs))

# Probabilities for measuring only qubit-0
probs_qubit_0 = psi.probabilities([0])
print('Qubit-0 probs: {}'.format(probs_qubit_0))

# Probabilities for measuring only qubit-1
probs_qubit_1 = psi.probabilities([1])
print('Qubit-1 probs: {}'.format(probs_qubit_1))
```

```python
probs: [0.5 0.  0.5 0. ]
Qubit-0 probs: [1. 0.]
Qubit-1 probs: [0.5 0.5]
```

We can also permute the order of qubits in the `qargs` list to change the qubit position in the probabilities output

```python
from qiskit.quantum_info import Statevector

psi = Statevector.from_label('+0')

# Probabilities for measuring both qubits
probs = psi.probabilities([0, 1])
print('probs: {}'.format(probs))

# Probabilities for measuring both qubits
# but swapping qubits 0 and 1 in output
probs_swapped = psi.probabilities([1, 0])
print('Swapped probs: {}'.format(probs_swapped))
```

```python
probs: [0.5 0.  0.5 0. ]
Swapped probs: [0.5 0.5 0.  0. ]
```

<span id="undefined" />

`probabilities_dict(qargs=None, decimals=None)`

Return the subsystem measurement probability dictionary.

Measurement probabilities are with respect to measurement in the computation (diagonal) basis.

This dictionary representation uses a Ket-like notation where the dictionary keys are qudit strings for the subsystem basis vectors. If any subsystem has a dimension greater than 10 comma delimiters are inserted between integers so that subsystems can be distinguished.

**Parameters**

*   **qargs** (*None or list*) – subsystems to return probabilities for, if None return for all subsystems (Default: None).
*   **decimals** (*None or int*) – the number of decimal places to round values. If None no rounding is done (Default: None).

**Returns**

The measurement probabilities in dict (ket) form.

**Return type**

dict

<span id="undefined" />

`purity()`

Return the purity of the quantum state.

<span id="undefined" />

`reset(qargs=None)`

Reset state or subsystems to the 0-state.

**Parameters**

**qargs** (*list or None*) – subsystems to reset, if None all subsystems will be reset to their 0-state (Default: None).

**Returns**

the reset state.

**Return type**

[Statevector](#qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector")

**Additional Information:**

If all subsystems are reset this will return the ground state on all subsystems. If only a some subsystems are reset this function will perform a measurement on those subsystems and evolve the subsystems so that the collapsed post-measurement states are rotated to the 0-state. The RNG seed for this sampling can be set using the [`seed()`](#qiskit.quantum_info.Statevector.seed "qiskit.quantum_info.Statevector.seed") method.

<span id="undefined" />

`reverse_qargs()`

Return a Statevector with reversed subsystem ordering.

For a tensor product state this is equivalent to reversing the order of tensor product subsystems. For a statevector $|\psi \rangle = |\psi_{n-1} \rangle \otimes ... \otimes |\psi_0 \rangle$ the returned statevector will be $|\psi_{0} \rangle \otimes ... \otimes |\psi_{n-1} \rangle$.

**Returns**

the Statevector with reversed subsystem order.

**Return type**

[Statevector](#qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector")

<span id="undefined" />

`property rtol`

Default relative tolerance parameter for float comparisons.

<span id="undefined" />

`sample_counts(shots, qargs=None)`

Sample a dict of qubit measurement outcomes in the computational basis.

**Parameters**

*   **shots** (*int*) – number of samples to generate.
*   **qargs** (*None or list*) – subsystems to sample measurements for, if None sample measurement of all subsystems (Default: None).

**Returns**

sampled counts dictionary.

**Return type**

[Counts](qiskit.result.Counts#qiskit.result.Counts "qiskit.result.Counts")

Additional Information:

> This function *samples* measurement outcomes using the measure [`probabilities()`](#qiskit.quantum_info.Statevector.probabilities "qiskit.quantum_info.Statevector.probabilities") for the current state and qargs. It does not actually implement the measurement so the current state is not modified.
>
> The seed for random number generator used for sampling can be set to a fixed value by using the stats [`seed()`](#qiskit.quantum_info.Statevector.seed "qiskit.quantum_info.Statevector.seed") method.

<span id="undefined" />

`sample_memory(shots, qargs=None)`

Sample a list of qubit measurement outcomes in the computational basis.

**Parameters**

*   **shots** (*int*) – number of samples to generate.
*   **qargs** (*None or list*) – subsystems to sample measurements for, if None sample measurement of all subsystems (Default: None).

**Returns**

list of sampled counts if the order sampled.

**Return type**

np.array

Additional Information:

> This function *samples* measurement outcomes using the measure [`probabilities()`](#qiskit.quantum_info.Statevector.probabilities "qiskit.quantum_info.Statevector.probabilities") for the current state and qargs. It does not actually implement the measurement so the current state is not modified.
>
> The seed for random number generator used for sampling can be set to a fixed value by using the stats [`seed()`](#qiskit.quantum_info.Statevector.seed "qiskit.quantum_info.Statevector.seed") method.

<span id="undefined" />

`seed(value=None)`

Set the seed for the quantum state RNG.

<span id="undefined" />

`tensor(other)`

Return the tensor product state self ⊗ other.

**Parameters**

**other** ([*Statevector*](#qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector")) – a quantum state object.

**Returns**

the tensor product operator self ⊗ other.

**Return type**

[Statevector](#qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector")

**Raises**

**QiskitError** – if other is not a quantum state.

<span id="undefined" />

`to_dict(decimals=None)`

Convert the statevector to dictionary form.

This dictionary representation uses a Ket-like notation where the dictionary keys are qudit strings for the subsystem basis vectors. If any subsystem has a dimension greater than 10 comma delimiters are inserted between integers so that subsystems can be distinguished.

**Parameters**

**decimals** (*None or int*) – the number of decimal places to round values. If None no rounding is done (Default: None).

**Returns**

the dictionary form of the Statevector.

**Return type**

dict

## Example

The ket-form of a 2-qubit statevector $|\psi\rangle = |-\rangle\otimes |0\rangle$

```python
from qiskit.quantum_info import Statevector

psi = Statevector.from_label('-0')
print(psi.to_dict())
```

```python
{'00': (0.7071067811865475+0j), '10': (-0.7071067811865475+0j)}
```

For non-qubit subsystems the integer range can go from 0 to 9. For example in a qutrit system

```python
import numpy as np
from qiskit.quantum_info import Statevector

vec = np.zeros(9)
vec[0] = 1 / np.sqrt(2)
vec[-1] = 1 / np.sqrt(2)
psi = Statevector(vec, dims=(3, 3))
print(psi.to_dict())
```

```python
{'00': (0.7071067811865475+0j), '22': (0.7071067811865475+0j)}
```

For large subsystem dimensions delimiters are required. The following example is for a 20-dimensional system consisting of a qubit and 10-dimensional qudit.

```python
import numpy as np
from qiskit.quantum_info import Statevector

vec = np.zeros(2 * 10)
vec[0] = 1 / np.sqrt(2)
vec[-1] = 1 / np.sqrt(2)
psi = Statevector(vec, dims=(2, 10))
print(psi.to_dict())
```

```python
{'00': (0.7071067811865475+0j), '91': (0.7071067811865475+0j)}
```

<span id="undefined" />

`to_operator()`

Convert state to a rank-1 projector operator

<span id="undefined" />

`trace()`

Return the trace of the quantum state as a density matrix.
