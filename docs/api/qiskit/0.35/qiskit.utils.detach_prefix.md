# qiskit.utils.detach\_prefix

<span id="undefined" />

`detach_prefix(value, decimal=None)`

Given a SI unit value, find the most suitable prefix to scale the value.

For example, the `value = 1.3e8` will be converted into a tuple of `(130.0, "M")`, which represents a scaled value and auxiliary unit that may be used to display the value. In above example, that value might be displayed as `130 MHz` (unit is arbitrary here).

## Example

```python
>>> value, prefix = detach_prefix(1e4)
>>> print(f"{value} {prefix}Hz")
10 kHz
```

**Parameters**

*   **value** (`float`) – The number to find prefix.
*   **decimal** (`Optional`\[`int`]) – Optional. An arbitrary integer number to represent a precision of the value. If specified, it tries to round the mantissa and adjust the prefix to rounded value. For example, 999\_999.91 will become 999.9999 k with `decimal=4`, while 1.0 M with `decimal=3` or less.

**Return type**

`Tuple`\[`float`, `str`]

**Returns**

A tuple of scaled value and prefix.

<Admonition title="Note" type="note">
  This may induce tiny value error due to internal representation of float object. See [https://docs.python.org/3/tutorial/floatingpoint.html](https://docs.python.org/3/tutorial/floatingpoint.html) for details.
</Admonition>

**Raises**

*   **ValueError** – If the `value` is out of range.
*   **ValueError** – If the `value` is not real number.
