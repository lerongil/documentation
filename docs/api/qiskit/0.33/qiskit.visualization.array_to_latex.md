# qiskit.visualization.array\_to\_latex

<span id="undefined" />

`array_to_latex(array, precision=5, prefix='', source=False, max_size=8)`

Latex representation of a complex numpy array (with dimension 1 or 2)

**Parameters**

*   **array** (*ndarray*) – The array to be converted to latex, must have dimension 1 or 2 and contain only numerical data.

*   **precision** (*int*) – For numbers not close to integers or common terms, the number of decimal places to round to.

*   **prefix** (*str*) – Latex string to be prepended to the latex, intended for labels.

*   **source** (*bool*) – If `False`, will return IPython.display.Latex object. If display is `True`, will instead return the LaTeX source string.

*   **max\_size** (*list(int) or int*) –

    The maximum size of the output Latex array.

    *   If list(`int`), then the 0th element of the list specifies the maximum width (including dots characters) and the 1st specifies the maximum height (also inc. dots characters).
    *   If a single `int` then this value sets the maximum width \_and\_ maximum height.

**Returns**

**If `source` is `True`, a `str` of the LaTeX**

representation of the array, else an `IPython.display.Latex` representation of the array.

**Return type**

str or IPython.display.Latex

**Raises**

*   **TypeError** – If array can not be interpreted as a numerical numpy array.
*   **ValueError** – If the dimension of array is not 1 or 2.
*   **MissingOptionalLibraryError** – If `source` is `False` and `IPython.display.Latex` cannot be imported.
