<span id="qiskit-providers-aer-noise-quantumerror" />

# qiskit.providers.aer.noise.QuantumError

<span id="undefined" />

`QuantumError(noise_ops, number_of_qubits=None, standard_gates=True, atol=1e-08)`

Quantum error class for Qiskit Aer noise model

**WARNING: The init interface for this class is not finalized and may**

change in future releases. For maximum backwards compatibility use the QuantumError generating functions in the noise.errors module.

Create a quantum error for a noise model.

Noise ops may either be specified as list of Kraus operators for a general CPTP map, or as a list of `(circuit, p)` pairs where `circuit` is a qobj circuit for the noise, and `p` is the probability of the error circuit. If the input is Kraus operators they will be converted to the circuit format, with checks applied for determining if any Kraus operators are unitary matrices.

**Example**

An example noise\_ops for a bit-flip error with error probability `p = 0.1` is:

```python
noise_ops = [([{"name": "id", "qubits": 0}], 0.9),
             ([{"name": "x", "qubits": 0}], 0.1)]
```

The same error represented as a Kraus channel can be input as:

```python
noise_ops = [np.sqrt(0.9) * np.array([[1, 0], [0, 1]]),
             np.sqrt(0.1) * np.array([[0, 1], [1, 0]])]
```

**Parameters**

*   **noise\_ops** (*list*) – A list of noise ops. See additional information.
*   **number\_of\_qubits** (*int*) – specify the number of qubits for the error. If None this will be determined automatically (default None).
*   **standard\_gates** (*bool*) – Check if input matrices are standard gates.
*   **atol** (*double*) – Threshold for testing if probabilities are equal to 0 or 1 (Default: 1e-8).

**Raises**

**NoiseError** – If input noise\_ops are not a CPTP map.

<span id="undefined" />

`__init__(noise_ops, number_of_qubits=None, standard_gates=True, atol=1e-08)`

Create a quantum error for a noise model.

Noise ops may either be specified as list of Kraus operators for a general CPTP map, or as a list of `(circuit, p)` pairs where `circuit` is a qobj circuit for the noise, and `p` is the probability of the error circuit. If the input is Kraus operators they will be converted to the circuit format, with checks applied for determining if any Kraus operators are unitary matrices.

**Example**

An example noise\_ops for a bit-flip error with error probability `p = 0.1` is:

```python
noise_ops = [([{"name": "id", "qubits": 0}], 0.9),
             ([{"name": "x", "qubits": 0}], 0.1)]
```

The same error represented as a Kraus channel can be input as:

```python
noise_ops = [np.sqrt(0.9) * np.array([[1, 0], [0, 1]]),
             np.sqrt(0.1) * np.array([[0, 1], [1, 0]])]
```

**Parameters**

*   **noise\_ops** (*list*) – A list of noise ops. See additional information.
*   **number\_of\_qubits** (*int*) – specify the number of qubits for the error. If None this will be determined automatically (default None).
*   **standard\_gates** (*bool*) – Check if input matrices are standard gates.
*   **atol** (*double*) – Threshold for testing if probabilities are equal to 0 or 1 (Default: 1e-8).

**Raises**

**NoiseError** – If input noise\_ops are not a CPTP map.

## Methods

|                                                                                                                                                          |                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [`__init__`](#qiskit.providers.aer.noise.QuantumError.__init__ "qiskit.providers.aer.noise.QuantumError.__init__")(noise\_ops\[, number\_of\_qubits, …]) | Create a quantum error for a noise model.                                 |
| [`compose`](#qiskit.providers.aer.noise.QuantumError.compose "qiskit.providers.aer.noise.QuantumError.compose")(other\[, front])                         | Return the composition error channel other \* self.                       |
| [`copy`](#qiskit.providers.aer.noise.QuantumError.copy "qiskit.providers.aer.noise.QuantumError.copy")()                                                 | Make a copy of current QuantumError.                                      |
| [`dot`](#qiskit.providers.aer.noise.QuantumError.dot "qiskit.providers.aer.noise.QuantumError.dot")(other)                                               | Return the composition error channel self \* other.                       |
| [`error_term`](#qiskit.providers.aer.noise.QuantumError.error_term "qiskit.providers.aer.noise.QuantumError.error_term")(position)                       | Return a single term from the error.                                      |
| [`expand`](#qiskit.providers.aer.noise.QuantumError.expand "qiskit.providers.aer.noise.QuantumError.expand")(other)                                      | Return the tensor product quantum error channel self ⊗ other.             |
| [`ideal`](#qiskit.providers.aer.noise.QuantumError.ideal "qiskit.providers.aer.noise.QuantumError.ideal")()                                              | Return True if current error object is an identity                        |
| [`power`](#qiskit.providers.aer.noise.QuantumError.power "qiskit.providers.aer.noise.QuantumError.power")(n)                                             | Return the compose of a error channel with itself n times.                |
| [`set_atol`](#qiskit.providers.aer.noise.QuantumError.set_atol "qiskit.providers.aer.noise.QuantumError.set_atol")(value)                                | Set the class default absolute tolerance parameter for float comparisons. |
| [`set_rtol`](#qiskit.providers.aer.noise.QuantumError.set_rtol "qiskit.providers.aer.noise.QuantumError.set_rtol")(value)                                | Set the class default relative tolerance parameter for float comparisons. |
| [`tensor`](#qiskit.providers.aer.noise.QuantumError.tensor "qiskit.providers.aer.noise.QuantumError.tensor")(other)                                      | Return the tensor product quantum error channel self ⊗ other.             |
| [`to_dict`](#qiskit.providers.aer.noise.QuantumError.to_dict "qiskit.providers.aer.noise.QuantumError.to_dict")()                                        | Return the current error as a dictionary.                                 |
| [`to_instruction`](#qiskit.providers.aer.noise.QuantumError.to_instruction "qiskit.providers.aer.noise.QuantumError.to_instruction")()                   | Convert the QuantumError to a circuit Instruction.                        |
| [`to_quantumchannel`](#qiskit.providers.aer.noise.QuantumError.to_quantumchannel "qiskit.providers.aer.noise.QuantumError.to_quantumchannel")()          | Convert the QuantumError to a SuperOp quantum channel.                    |

## Attributes

|                                                                                                                                            |                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------- |
| [`atol`](#qiskit.providers.aer.noise.QuantumError.atol "qiskit.providers.aer.noise.QuantumError.atol")                                     | The default absolute tolerance parameter for float comparisons. |
| [`circuits`](#qiskit.providers.aer.noise.QuantumError.circuits "qiskit.providers.aer.noise.QuantumError.circuits")                         | Return the list of error circuits.                              |
| [`number_of_qubits`](#qiskit.providers.aer.noise.QuantumError.number_of_qubits "qiskit.providers.aer.noise.QuantumError.number_of_qubits") | Return the number of qubits for the error.                      |
| [`probabilities`](#qiskit.providers.aer.noise.QuantumError.probabilities "qiskit.providers.aer.noise.QuantumError.probabilities")          | Return the list of error probabilities.                         |
| [`rtol`](#qiskit.providers.aer.noise.QuantumError.rtol "qiskit.providers.aer.noise.QuantumError.rtol")                                     | The relative tolerance parameter for float comparisons.         |
| [`size`](#qiskit.providers.aer.noise.QuantumError.size "qiskit.providers.aer.noise.QuantumError.size")                                     | Return the number of error circuit.                             |

<span id="undefined" />

`property atol`

The default absolute tolerance parameter for float comparisons.

<span id="undefined" />

`property circuits`

Return the list of error circuits.

<span id="undefined" />

`compose(other, front=False)`

Return the composition error channel other \* self.

Note that for front=True this is equivalent to the [`QuantumError.dot()`](#qiskit.providers.aer.noise.QuantumError.dot "qiskit.providers.aer.noise.QuantumError.dot") method.

**Parameters**

*   **other** ([*QuantumError*](#qiskit.providers.aer.noise.QuantumError "qiskit.providers.aer.noise.QuantumError")) – a quantum error channel.
*   **front** (*bool*) – If True return the reverse order composation self \* other instead \[default: False].

**Returns**

The composition error channel.

**Return type**

[QuantumError](#qiskit.providers.aer.noise.QuantumError "qiskit.providers.aer.noise.QuantumError")

**Raises**

*   **NoiseError** – if other cannot be converted into a QuantumError,
*   **or has incompatible dimensions.** –

<span id="undefined" />

`copy()`

Make a copy of current QuantumError.

<span id="undefined" />

`dot(other)`

Return the composition error channel self \* other.

**Parameters**

**other** ([*QuantumError*](#qiskit.providers.aer.noise.QuantumError "qiskit.providers.aer.noise.QuantumError")) – a quantum error channel.

**Returns**

The composition error channel.

**Return type**

[QuantumError](#qiskit.providers.aer.noise.QuantumError "qiskit.providers.aer.noise.QuantumError")

**Raises**

*   **NoiseError** – if other cannot be converted into a QuantumError,
*   **or has incompatible dimensions.** –

<span id="undefined" />

`error_term(position)`

Return a single term from the error.

**Parameters**

**position** (*int*) – the position of the error term.

**Returns**

A pair (p, circuit) for error term at position \< size where p is the probability of the error term, and circuit is the list of qobj instructions for the error term.

**Return type**

tuple

**Raises**

*   **NoiseError** – If the position is greater than the size of
*   **the quantum error.** –

<span id="undefined" />

`expand(other)`

Return the tensor product quantum error channel self ⊗ other.

**Parameters**

**other** ([*QuantumError*](#qiskit.providers.aer.noise.QuantumError "qiskit.providers.aer.noise.QuantumError")) – a quantum error channel.

**Returns**

the tensor product error channel other ⊗ self.

**Return type**

[QuantumError](#qiskit.providers.aer.noise.QuantumError "qiskit.providers.aer.noise.QuantumError")

**Raises**

**NoiseError** – if other cannot be converted to a QuantumError.

<span id="undefined" />

`ideal()`

Return True if current error object is an identity

<span id="undefined" />

`property number_of_qubits`

Return the number of qubits for the error.

<span id="undefined" />

`power(n)`

Return the compose of a error channel with itself n times.

**Parameters**

**n** (*int*) – the number of times to compose with self (n>0).

**Returns**

the n-times composition error channel.

**Return type**

[QuantumError](#qiskit.providers.aer.noise.QuantumError "qiskit.providers.aer.noise.QuantumError")

**Raises**

**NoiseError** – if the power is not a positive integer.

<span id="undefined" />

`property probabilities`

Return the list of error probabilities.

<span id="undefined" />

`property rtol`

The relative tolerance parameter for float comparisons.

<span id="undefined" />

`classmethod set_atol(value)`

Set the class default absolute tolerance parameter for float comparisons.

<span id="undefined" />

`classmethod set_rtol(value)`

Set the class default relative tolerance parameter for float comparisons.

<span id="undefined" />

`property size`

Return the number of error circuit.

<span id="undefined" />

`tensor(other)`

Return the tensor product quantum error channel self ⊗ other.

**Parameters**

**other** ([*QuantumError*](#qiskit.providers.aer.noise.QuantumError "qiskit.providers.aer.noise.QuantumError")) – a quantum error channel.

**Returns**

the tensor product error channel self ⊗ other.

**Return type**

[QuantumError](#qiskit.providers.aer.noise.QuantumError "qiskit.providers.aer.noise.QuantumError")

**Raises**

**NoiseError** – if other cannot be converted to a QuantumError.

<span id="undefined" />

`to_dict()`

Return the current error as a dictionary.

<span id="undefined" />

`to_instruction()`

Convert the QuantumError to a circuit Instruction.

<span id="undefined" />

`to_quantumchannel()`

Convert the QuantumError to a SuperOp quantum channel.
