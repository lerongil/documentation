# qiskit.aqua.algorithms.MinimumEigensolverResult

<span id="undefined" />

`MinimumEigensolverResult(a_dict=None)`

Minimum Eigensolver Result.

<span id="undefined" />

`__init__(a_dict=None)`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                  |                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.algorithms.MinimumEigensolverResult.__init__ "qiskit.aqua.algorithms.MinimumEigensolverResult.__init__")(\[a\_dict])   | Initialize self.                                                                                                                                                                                                     |
| [`clear`](#qiskit.aqua.algorithms.MinimumEigensolverResult.clear "qiskit.aqua.algorithms.MinimumEigensolverResult.clear")()                      | **rtype**`None`                                                                                                                                                                                                      |
| [`combine`](#qiskit.aqua.algorithms.MinimumEigensolverResult.combine "qiskit.aqua.algorithms.MinimumEigensolverResult.combine")(result)          | Any property from the argument that exists in the receiver is updated.                                                                                                                                               |
| `copy`()                                                                                                                                         |                                                                                                                                                                                                                      |
| [`from_dict`](#qiskit.aqua.algorithms.MinimumEigensolverResult.from_dict "qiskit.aqua.algorithms.MinimumEigensolverResult.from_dict")(a\_dict)   | create new object from a dictionary                                                                                                                                                                                  |
| `fromkeys`(iterable\[, value])                                                                                                                   |                                                                                                                                                                                                                      |
| [`get`](#qiskit.aqua.algorithms.MinimumEigensolverResult.get "qiskit.aqua.algorithms.MinimumEigensolverResult.get")(k\[,d])                      |                                                                                                                                                                                                                      |
| [`items`](#qiskit.aqua.algorithms.MinimumEigensolverResult.items "qiskit.aqua.algorithms.MinimumEigensolverResult.items")()                      |                                                                                                                                                                                                                      |
| [`keys`](#qiskit.aqua.algorithms.MinimumEigensolverResult.keys "qiskit.aqua.algorithms.MinimumEigensolverResult.keys")()                         |                                                                                                                                                                                                                      |
| [`pop`](#qiskit.aqua.algorithms.MinimumEigensolverResult.pop "qiskit.aqua.algorithms.MinimumEigensolverResult.pop")(key\[, default])             | If key is not found, d is returned if given, otherwise KeyError is raised.                                                                                                                                           |
| [`popitem`](#qiskit.aqua.algorithms.MinimumEigensolverResult.popitem "qiskit.aqua.algorithms.MinimumEigensolverResult.popitem")()                | as a 2-tuple; but raise KeyError if D is empty.                                                                                                                                                                      |
| [`setdefault`](#qiskit.aqua.algorithms.MinimumEigensolverResult.setdefault "qiskit.aqua.algorithms.MinimumEigensolverResult.setdefault")(k\[,d]) |                                                                                                                                                                                                                      |
| [`update`](#qiskit.aqua.algorithms.MinimumEigensolverResult.update "qiskit.aqua.algorithms.MinimumEigensolverResult.update")(\*args, \*\*kwargs) | If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v |
| [`values`](#qiskit.aqua.algorithms.MinimumEigensolverResult.values "qiskit.aqua.algorithms.MinimumEigensolverResult.values")()                   |                                                                                                                                                                                                                      |

## Attributes

|                                                                                                                                                                                    |                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| [`aux_operator_eigenvalues`](#qiskit.aqua.algorithms.MinimumEigensolverResult.aux_operator_eigenvalues "qiskit.aqua.algorithms.MinimumEigensolverResult.aux_operator_eigenvalues") | return aux operator eigen values |
| [`eigenstate`](#qiskit.aqua.algorithms.MinimumEigensolverResult.eigenstate "qiskit.aqua.algorithms.MinimumEigensolverResult.eigenstate")                                           | return eigen state               |
| [`eigenvalue`](#qiskit.aqua.algorithms.MinimumEigensolverResult.eigenvalue "qiskit.aqua.algorithms.MinimumEigensolverResult.eigenvalue")                                           | returns eigen value              |

<span id="undefined" />

`property aux_operator_eigenvalues`

return aux operator eigen values

**Return type**

`Optional`\[`ndarray`]

<span id="undefined" />

`clear()`

**Return type**

`None`

<span id="undefined" />

`combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

<span id="undefined" />

`property eigenstate`

return eigen state

**Return type**

`Optional`\[`ndarray`]

<span id="undefined" />

`property eigenvalue`

returns eigen value

**Return type**

`Optional`\[`complex`]

<span id="undefined" />

`static from_dict(a_dict)`

create new object from a dictionary

**Return type**

`MinimumEigensolverResult`

<span id="undefined" />

`get(k[, d]) → D[k] if k in D, else d. d defaults to None.`

<span id="undefined" />

`items() → a set-like object providing a view on D’s items`

<span id="undefined" />

`keys() → a set-like object providing a view on D’s keys`

<span id="undefined" />

`pop(key, default=None)`

If key is not found, d is returned if given, otherwise KeyError is raised.

**Return type**

`object`

<span id="undefined" />

`popitem()`

as a 2-tuple; but raise KeyError if D is empty.

**Return type**

`Tuple`\[`object`, `object`]

<span id="undefined" />

`setdefault(k[, d]) → D.get(k,d), also set D[k]=d if k not in D`

<span id="undefined" />

`update(*args, **kwargs)`

If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v

**Return type**

`None`

<span id="undefined" />

`values() → an object providing a view on D’s values`
