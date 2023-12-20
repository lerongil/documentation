# qiskit.ignis.verification.QVFitter

<span id="undefined" />

`QVFitter(backend_result=None, statevector_result=None, qubit_lists=None)`

Class for fitters for quantum volume.

**Parameters**

*   **backend\_result** (*list*) – list of results (qiskit.Result).
*   **statevector\_result** (*list*) – the ideal statevectors of each circuit
*   **qubit\_lists** (*list*) – list of qubit lists (what was passed to the circuit generation)

<span id="undefined" />

`__init__(backend_result=None, statevector_result=None, qubit_lists=None)`

**Parameters**

*   **backend\_result** (*list*) – list of results (qiskit.Result).
*   **statevector\_result** (*list*) – the ideal statevectors of each circuit
*   **qubit\_lists** (*list*) – list of qubit lists (what was passed to the circuit generation)

## Methods

|                                                                                                                                                                        |                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.ignis.verification.QVFitter.__init__ "qiskit.ignis.verification.QVFitter.__init__")(\[backend\_result, …])                                        | **param backend\_result**list of results (qiskit.Result).                                                                              |
| [`add_data`](#qiskit.ignis.verification.QVFitter.add_data "qiskit.ignis.verification.QVFitter.add_data")(new\_backend\_result\[, rerun\_fit])                          | Add a new result.                                                                                                                      |
| [`add_statevectors`](#qiskit.ignis.verification.QVFitter.add_statevectors "qiskit.ignis.verification.QVFitter.add_statevectors")(new\_statevector\_result)             | Add the ideal results and convert to the heavy outputs.                                                                                |
| [`calc_confidence_level`](#qiskit.ignis.verification.QVFitter.calc_confidence_level "qiskit.ignis.verification.QVFitter.calc_confidence_level")(z\_value)              | Calculate confidence level using z value.                                                                                              |
| [`calc_data`](#qiskit.ignis.verification.QVFitter.calc_data "qiskit.ignis.verification.QVFitter.calc_data")()                                                          | Make a count dictionary for each unique circuit from all the results.                                                                  |
| [`calc_statistics`](#qiskit.ignis.verification.QVFitter.calc_statistics "qiskit.ignis.verification.QVFitter.calc_statistics")()                                        | Convert the heavy outputs in the different trials into mean and error for plotting.                                                    |
| [`calc_z_value`](#qiskit.ignis.verification.QVFitter.calc_z_value "qiskit.ignis.verification.QVFitter.calc_z_value")(mean, sigma)                                      | Calculate z value using mean and sigma.                                                                                                |
| [`plot_hop_accumulative`](#qiskit.ignis.verification.QVFitter.plot_hop_accumulative "qiskit.ignis.verification.QVFitter.plot_hop_accumulative")(depth\[, ax, figsize]) | Plot individual and accumulative heavy output probability (HOP) as a function of number of trials.                                     |
| [`plot_qv_data`](#qiskit.ignis.verification.QVFitter.plot_qv_data "qiskit.ignis.verification.QVFitter.plot_qv_data")(\[ax, show\_plt, figsize, …])                     | Plot the qv data as a function of depth                                                                                                |
| [`plot_qv_trial`](#qiskit.ignis.verification.QVFitter.plot_qv_trial "qiskit.ignis.verification.QVFitter.plot_qv_trial")(depth, trial\_index\[, figsize, ax])           | Plot individual trial.                                                                                                                 |
| [`quantum_volume`](#qiskit.ignis.verification.QVFitter.quantum_volume "qiskit.ignis.verification.QVFitter.quantum_volume")()                                           | Return the volume for each depth.                                                                                                      |
| [`qv_success`](#qiskit.ignis.verification.QVFitter.qv_success "qiskit.ignis.verification.QVFitter.qv_success")()                                                       | Return whether each depth was successful (> 2/3 with confidence level > 0.977 corresponding to z\_value = 2) and the confidence level. |

## Attributes

|                                                                                                                                                       |                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [`depths`](#qiskit.ignis.verification.QVFitter.depths "qiskit.ignis.verification.QVFitter.depths")                                                    | Return depth list.                                    |
| [`heavy_output_counts`](#qiskit.ignis.verification.QVFitter.heavy_output_counts "qiskit.ignis.verification.QVFitter.heavy_output_counts")             | Return the number of heavy output counts as measured. |
| [`heavy_output_prob_ideal`](#qiskit.ignis.verification.QVFitter.heavy_output_prob_ideal "qiskit.ignis.verification.QVFitter.heavy_output_prob_ideal") | Return the heavy output probability ideally.          |
| [`heavy_outputs`](#qiskit.ignis.verification.QVFitter.heavy_outputs "qiskit.ignis.verification.QVFitter.heavy_outputs")                               | Return the ideal heavy outputs dictionary.            |
| [`qubit_lists`](#qiskit.ignis.verification.QVFitter.qubit_lists "qiskit.ignis.verification.QVFitter.qubit_lists")                                     | Return depth list.                                    |
| [`results`](#qiskit.ignis.verification.QVFitter.results "qiskit.ignis.verification.QVFitter.results")                                                 | Return all the results.                               |
| [`ydata`](#qiskit.ignis.verification.QVFitter.ydata "qiskit.ignis.verification.QVFitter.ydata")                                                       | Return the average and std of the output probability. |

<span id="undefined" />

`add_data(new_backend_result, rerun_fit=True)`

Add a new result. Re calculate fit

**Parameters**

*   **new\_backend\_result** (*list*) – list of qv results
*   **rerun\_fit** (*bool*) – re calculate the means and fit the result

**Raises**

**QiskitError** – If the ideal distribution isn’t loaded yet

**Additional information:**

Assumes that ‘result’ was executed is the output of circuits generated by qv\_circuits,

<span id="undefined" />

`add_statevectors(new_statevector_result)`

Add the ideal results and convert to the heavy outputs.

Assume the result is from ‘statevector\_simulator’

**Parameters**

**new\_statevector\_result** (*list*) – ideal results

**Raises**

**QiskitError** – If the result has already been added for the circuit

<span id="undefined" />

`calc_confidence_level(z_value)`

Calculate confidence level using z value.

Accumulative probability for standard normal distribution in \[-z, +infinity] is 1/2 (1 + erf(z/sqrt(2))), where z = (X - mu)/sigma = (hmean - 2/3)/sigma

**Parameters**

**z\_value** (*float*) – z value in in standard normal distibution.

**Returns**

confidence level in decimal (not percentage).

**Return type**

float

<span id="undefined" />

`calc_data()`

Make a count dictionary for each unique circuit from all the results.

Calculate the heavy output probability.

**Additional information:**

Assumes that ‘result’ was executed is the output of circuits generated by qv\_circuits,

<span id="undefined" />

`calc_statistics()`

Convert the heavy outputs in the different trials into mean and error for plotting.

Here we assume the error is due to a binomial distribution. Error (standard deviation) for binomial distribution is sqrt(np(1-p)), where n is the number of trials (self.\_ntrials) and p is the success probability (self.\_ydata\[0]\[depthidx]/self.\_ntrials).

<span id="undefined" />

`calc_z_value(mean, sigma)`

Calculate z value using mean and sigma.

**Parameters**

*   **mean** (*float*) – mean
*   **sigma** (*float*) – standard deviation

**Returns**

z\_value in standard normal distibution.

**Return type**

float

<span id="undefined" />

`property depths`

Return depth list.

<span id="undefined" />

`property heavy_output_counts`

Return the number of heavy output counts as measured.

<span id="undefined" />

`property heavy_output_prob_ideal`

Return the heavy output probability ideally.

<span id="undefined" />

`property heavy_outputs`

Return the ideal heavy outputs dictionary.

<span id="undefined" />

`plot_hop_accumulative(depth, ax=None, figsize=(7, 5))`

Plot individual and accumulative heavy output probability (HOP) as a function of number of trials.

**Parameters**

*   **depth** (*int*) – depth of QV circuits
*   **ax** (*Axes or None*) – plot axis (if passed in).
*   **figsize** (*tuple*) – figure size in inches.

**Raises**

**ImportError** – If matplotlib is not installed.

**Returns**

A figure of individual and accumulative HOP as a function of number of trials, with 2-sigma confidence interval and 2/3 threshold.

**Return type**

matplotlib.Figure

<span id="undefined" />

`plot_qv_data(ax=None, show_plt=True, figsize=(7, 5), set_title=True, title=None)`

Plot the qv data as a function of depth

**Parameters**

*   **ax** (*Axes or None*) – plot axis (if passed in).
*   **show\_plt** (*bool*) – display the plot.
*   **figsize** (*tuple*) – Figure size in inches.
*   **set\_title** (*bool*) – set figure title.
*   **title** (*String or None*) – text for setting figure title

**Raises**

**ImportError** – If matplotlib is not installed.

**Returns**

A figure of Quantum Volume data (heavy output probability) with two-sigma error bar as a function of circuit depth.

**Return type**

matplotlib.Figure

<span id="undefined" />

`plot_qv_trial(depth, trial_index, figsize=(7, 5), ax=None)`

Plot individual trial. :param depth: circuit depth :type depth: int :param trial\_index: trial index :type trial\_index: int :param figsize: Figure size in inches. :type figsize: tuple :param ax: plot axis (if passed in). :type ax: Axes or None

**Returns**

A figure for histogram of ideal and experiment probabilities.

**Return type**

matplotlib.Figure

<span id="undefined" />

`quantum_volume()`

Return the volume for each depth.

**Returns**

List of quantum volumes

**Return type**

list

<span id="undefined" />

`property qubit_lists`

Return depth list.

<span id="undefined" />

`qv_success()`

Return whether each depth was successful (> 2/3 with confidence level > 0.977 corresponding to z\_value = 2) and the confidence level.

**Returns**

List of list of 2 elements for each depth: - success True/False - confidence level

**Return type**

list

<span id="undefined" />

`property results`

Return all the results.

<span id="undefined" />

`property ydata`

Return the average and std of the output probability.
