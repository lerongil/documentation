<span id="qiskit-ignis-characterization-zzfitter" />

# qiskit.ignis.characterization.ZZFitter

<span id="undefined" />

`ZZFitter(backend_result, xdata, qubits, spectators, fit_p0, fit_bounds, time_unit='micro-seconds')`

ZZ fitter

<span id="undefined" />

`__init__(backend_result, xdata, qubits, spectators, fit_p0, fit_bounds, time_unit='micro-seconds')`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                     |                                                                        |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`ZZ_rate`](#qiskit.ignis.characterization.ZZFitter.ZZ_rate "qiskit.ignis.characterization.ZZFitter.ZZ_rate")(\[qind])                              | Return the ZZ rate from the fit of the two curves                      |
| [`__init__`](#qiskit.ignis.characterization.ZZFitter.__init__ "qiskit.ignis.characterization.ZZFitter.__init__")(backend\_result, xdata, qubits, …) | Initialize self.                                                       |
| [`add_data`](#qiskit.ignis.characterization.ZZFitter.add_data "qiskit.ignis.characterization.ZZFitter.add_data")(results\[, recalc, refit])         | Add new execution results to previous execution results                |
| [`fit_data`](#qiskit.ignis.characterization.ZZFitter.fit_data "qiskit.ignis.characterization.ZZFitter.fit_data")(\[qid, p0, bounds, series])        | Fit the curve.                                                         |
| [`plot`](#qiskit.ignis.characterization.ZZFitter.plot "qiskit.ignis.characterization.ZZFitter.plot")(qind, series\[, ax, show\_plot])               | Plot coherence data.                                                   |
| [`plot_ZZ`](#qiskit.ignis.characterization.ZZFitter.plot_ZZ "qiskit.ignis.characterization.ZZFitter.plot_ZZ")(qind\[, ax, show\_plot])              | Plot ZZ data.                                                          |
| [`time`](#qiskit.ignis.characterization.ZZFitter.time "qiskit.ignis.characterization.ZZFitter.time")(\[qid, series])                                | Return the characteristic time for the given qubit and series          |
| [`time_err`](#qiskit.ignis.characterization.ZZFitter.time_err "qiskit.ignis.characterization.ZZFitter.time_err")(\[qid, series])                    | Return the error of characteristic time for the given qubit and series |

## Attributes

|                                                                                                                                       |                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [`backend_result`](#qiskit.ignis.characterization.ZZFitter.backend_result "qiskit.ignis.characterization.ZZFitter.backend_result")    | Return the execution results                                                          |
| [`description`](#qiskit.ignis.characterization.ZZFitter.description "qiskit.ignis.characterization.ZZFitter.description")             | Return the fitter’s purpose, e.g.                                                     |
| [`fit_fun`](#qiskit.ignis.characterization.ZZFitter.fit_fun "qiskit.ignis.characterization.ZZFitter.fit_fun")                         | Return the function used in the fit, e.g.                                             |
| [`measured_qubits`](#qiskit.ignis.characterization.ZZFitter.measured_qubits "qiskit.ignis.characterization.ZZFitter.measured_qubits") | Return the indices of the qubits to be characterized                                  |
| [`params`](#qiskit.ignis.characterization.ZZFitter.params "qiskit.ignis.characterization.ZZFitter.params")                            | Return the fit function parameters that were calculated by curve\_fit                 |
| [`params_err`](#qiskit.ignis.characterization.ZZFitter.params_err "qiskit.ignis.characterization.ZZFitter.params_err")                | Return the error of the fit function parameters                                       |
| [`series`](#qiskit.ignis.characterization.ZZFitter.series "qiskit.ignis.characterization.ZZFitter.series")                            | Return the list of series for the data                                                |
| [`xdata`](#qiskit.ignis.characterization.ZZFitter.xdata "qiskit.ignis.characterization.ZZFitter.xdata")                               | Return the data points on the x-axis, the independenet parameter which is fit against |
| [`ydata`](#qiskit.ignis.characterization.ZZFitter.ydata "qiskit.ignis.characterization.ZZFitter.ydata")                               | Return the data points on the y-axis                                                  |

<span id="undefined" />

`ZZ_rate(qind=- 1)`

Return the ZZ rate from the fit of the two curves

**Parameters**

**qind** (*int*) – qubit index to return (-1 return all)

**Returns**

a list of zz\_rates

**Return type**

list

<span id="undefined" />

`add_data(results, recalc=True, refit=True)`

Add new execution results to previous execution results

**Parameters**

*   **results** (`Union`\[`Result`, `List`\[`Result`]]) – new execution results
*   **recalc** (`bool`) – whether tp recalculate the data
*   **refit** (`bool`) – whether to refit the data

<span id="undefined" />

`property backend_result`

Return the execution results

**Return type**

`Union`\[`Result`, `List`\[`Result`]]

<span id="undefined" />

`property description`

Return the fitter’s purpose, e.g. ‘T1’

**Return type**

`str`

<span id="undefined" />

`fit_data(qid=- 1, p0=None, bounds=None, series=None)`

Fit the curve.

Compute self.\_params and self.\_params\_err

**Parameters**

*   **qid** (`int`) – qubit for fitting. If -1 fit for all the qubits
*   **p0** (`Optional`\[`List`\[`float`]]) – initial guess, equivalent to p0 in scipy.optimize
*   **bounds** (`Optional`\[`Tuple`\[`List`\[`float`], `List`\[`float`]]]) – bounds, equivalent to bounds in scipy.optimize
*   **series** (`Optional`\[`str`]) – series to fit (if None fit all)

<span id="undefined" />

`property fit_fun`

Return the function used in the fit, e.g. BaseFitter.\_exp\_fit\_fun

**Return type**

`Callable`

<span id="undefined" />

`property measured_qubits`

Return the indices of the qubits to be characterized

**Return type**

`List`\[`int`]

<span id="undefined" />

`property params`

Return the fit function parameters that were calculated by curve\_fit

**Return type**

`List`\[`float`]

<span id="undefined" />

`property params_err`

Return the error of the fit function parameters

**Return type**

`List`\[`float`]

<span id="undefined" />

`plot(qind, series, ax=None, show_plot=True)`

Plot coherence data.

**Parameters**

*   **qind** (`int`) – qubit index to plot
*   **series** (`str`) – which series to plot (if list then plot multiple)
*   **ax** (`Optional`\[`Any`]) – plot axes
*   **show\_plot** (`bool`) – whether to call plt.show()

**Returns**

The axes object

**Return type**

Axes

**Raises**

**ImportError** – if matplotlib is not installed

<span id="undefined" />

`plot_ZZ(qind, ax=None, show_plot=False)`

Plot ZZ data. Will plot both traces on the plot.

**Parameters**

*   **qind** (*int*) – qubit index to plot
*   **ax** (*Axes*) – plot axes
*   **show\_plot** (*bool*) – call plt.show()

**Returns**

the axes object

**Return type**

Axes

**Raises**

**ImportError** – If matplotlib is not installed

<span id="undefined" />

`property series`

Return the list of series for the data

**Return type**

`Optional`\[`List`\[`str`]]

<span id="undefined" />

`time(qid=- 1, series='0')`

Return the characteristic time for the given qubit and series

**Parameters**

*   **qid** (`int`) – the qubit index (or all qubits if -1)
*   **series** (`str`) – the series to get

**Return type**

`Union`\[`float`, `List`\[`float`]]

**Returns**

The characteristic time of the qubit, or all qubits

<span id="undefined" />

`time_err(qid=- 1, series='0')`

Return the error of characteristic time for the given qubit and series

**Parameters**

*   **qid** (`int`) – the qubit index (or all qubits if -1)
*   **series** (`str`) – the series to get

**Return type**

`Union`\[`float`, `List`\[`float`]]

**Returns**

The error of the characteristic time of the qubit, or all qubits

<span id="undefined" />

`property xdata`

Return the data points on the x-axis, the independenet parameter which is fit against

**Return type**

`Union`\[`List`\[`float`], `array`]

<span id="undefined" />

`property ydata`

Return the data points on the y-axis

The data points are returning in the form of a list of dictionaries:

> *   **ydata\[i]\[‘mean’] is a list, where item**
>
>     no. j is the probability of success of qubit i for a circuit that lasts xdata\[j].
>
> *   **ydata\[i]\[‘std’] is a list, where ydata\[‘std’]\[j] is the**
>
>     standard deviation of the success of qubit i.

**Return type**

`List`\[`Dict`]
