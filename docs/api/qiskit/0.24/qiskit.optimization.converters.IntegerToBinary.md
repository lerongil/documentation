<span id="qiskit-optimization-converters-integertobinary" />

# qiskit.optimization.converters.IntegerToBinary

<span id="undefined" />

`IntegerToBinary`

Convert a [`QuadraticProgram`](qiskit.optimization.problems.QuadraticProgram#qiskit.optimization.problems.QuadraticProgram "qiskit.optimization.problems.QuadraticProgram") into new one by encoding integer with binary variables.

This bounded-coefficient encoding used in this converted is proposed in \[1], Eq. (5).

## Examples

```python
>>> from qiskit.optimization.problems import QuadraticProgram
>>> from qiskit.optimization.converters import IntegerToBinary
>>> problem = QuadraticProgram()
>>> var = problem.integer_var(name='x', lowerbound=0, upperbound=10)
>>> conv = IntegerToBinary()
>>> problem2 = conv.convert(problem)
```

## References

**\[1]: Sahar Karimi, Pooya Ronagh (2017), Practical Integer-to-Binary Mapping for Quantum**

Annealers. arxiv.org:1706.01945.

<span id="undefined" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                             |                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.optimization.converters.IntegerToBinary.__init__ "qiskit.optimization.converters.IntegerToBinary.__init__")()          | Initialize self.                                                                                               |
| [`convert`](#qiskit.optimization.converters.IntegerToBinary.convert "qiskit.optimization.converters.IntegerToBinary.convert")(problem)      | Convert an integer problem into a new problem with binary variables.                                           |
| [`decode`](#qiskit.optimization.converters.IntegerToBinary.decode "qiskit.optimization.converters.IntegerToBinary.decode")(result)          | DEPRECATED Decode a result into another form using the information of conversion.                              |
| [`encode`](#qiskit.optimization.converters.IntegerToBinary.encode "qiskit.optimization.converters.IntegerToBinary.encode")(problem)         | DEPRECATED Encode a QuadraticProgram into another form and keep the information required to decode the result. |
| [`interpret`](#qiskit.optimization.converters.IntegerToBinary.interpret "qiskit.optimization.converters.IntegerToBinary.interpret")(result) | Convert back the converted problem (binary variables) to the original (integer variables).                     |

<span id="undefined" />

`convert(problem)`

Convert an integer problem into a new problem with binary variables.

**Parameters**

**problem** (`QuadraticProgram`) – The problem to be solved, that may contain integer variables.

**Return type**

`QuadraticProgram`

**Returns**

The converted problem, that contains no integer variables.

**Raises**

[**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError#qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – if variable or constraint type is not supported.

<span id="undefined" />

`decode(result)`

DEPRECATED Decode a result into another form using the information of conversion.

**Return type**

`OptimizationResult`

<span id="undefined" />

`encode(problem)`

DEPRECATED Encode a QuadraticProgram into another form and keep the information required to decode the result.

**Return type**

`QuadraticProgram`

<span id="undefined" />

`interpret(result)`

Convert back the converted problem (binary variables) to the original (integer variables).

**Parameters**

**result** (`OptimizationResult`) – The result of the converted problem or the given result in case of FAILURE.

**Return type**

`OptimizationResult`

**Returns**

The result of the original problem.
