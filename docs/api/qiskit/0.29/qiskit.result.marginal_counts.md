# qiskit.result.marginal\_counts

<span id="undefined" />

`marginal_counts(result, indices=None, inplace=False, format_marginal=False)`

Marginalize counts from an experiment over some indices of interest.

**Parameters**

*   **result** (*dict or* [*Result*](qiskit.result.Result#qiskit.result.Result "qiskit.result.Result")) – result to be marginalized (a Result object or a dict(str, int) of counts).
*   **indices** (*list(int) or None*) – The bit positions of interest to marginalize over. If `None` (default), do not marginalize at all.
*   **inplace** (*bool*) – Default: False. Operates on the original Result argument if True, leading to loss of original Job Result. It has no effect if `result` is a dict.
*   **format\_marginal** (*bool*) – Default: False. If True, takes the output of marginalize and formats it with placeholders between cregs and for non-indices.

**Returns**

**A Result object or a dictionary with**

the observed counts, marginalized to only account for frequency of observations of bits of interest.

**Return type**

[Result](qiskit.result.Result#qiskit.result.Result "qiskit.result.Result") or dict(str, int)

**Raises**

**QiskitError** – in case of invalid indices to marginalize over.
