<span id="qiskit-ignis-mitigation-completemeasfitter" />

# qiskit.ignis.mitigation.CompleteMeasFitter

<span id="undefined" />

`CompleteMeasFitter(results, state_labels, qubit_list=None, circlabel='')`

Measurement correction fitter for a full calibration

Initialize a measurement calibration matrix from the results of running the circuits returned by measurement\_calibration\_circuits

A wrapper for the tensored fitter

**Parameters**

*   **results** (`Union`\[`Result`, `List`\[`Result`]]) – the results of running the measurement calibration circuits. If this is None the user will set a calibration matrix later.
*   **state\_labels** (`List`\[`str`]) – list of calibration state labels returned from measurement\_calibration\_circuits. The output matrix will obey this ordering.
*   **qubit\_list** (`Optional`\[`List`\[`int`]]) – List of the qubits (for reference and if the subset is needed). If None, the qubit\_list will be created according to the length of state\_labels\[0].
*   **circlabel** (`str`) – if the qubits were labeled.

<span id="undefined" />

`__init__(results, state_labels, qubit_list=None, circlabel='')`

Initialize a measurement calibration matrix from the results of running the circuits returned by measurement\_calibration\_circuits

A wrapper for the tensored fitter

**Parameters**

*   **results** (`Union`\[`Result`, `List`\[`Result`]]) – the results of running the measurement calibration circuits. If this is None the user will set a calibration matrix later.
*   **state\_labels** (`List`\[`str`]) – list of calibration state labels returned from measurement\_calibration\_circuits. The output matrix will obey this ordering.
*   **qubit\_list** (`Optional`\[`List`\[`int`]]) – List of the qubits (for reference and if the subset is needed). If None, the qubit\_list will be created according to the length of state\_labels\[0].
*   **circlabel** (`str`) – if the qubits were labeled.

## Methods

|                                                                                                                                                                     |                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.ignis.mitigation.CompleteMeasFitter.__init__ "qiskit.ignis.mitigation.CompleteMeasFitter.__init__")(results, state\_labels\[, …])              | Initialize a measurement calibration matrix from the results of running the circuits returned by measurement\_calibration\_circuits |
| [`add_data`](#qiskit.ignis.mitigation.CompleteMeasFitter.add_data "qiskit.ignis.mitigation.CompleteMeasFitter.add_data")(new\_results\[, rebuild\_cal\_matrix])     | Add measurement calibration data                                                                                                    |
| [`plot_calibration`](#qiskit.ignis.mitigation.CompleteMeasFitter.plot_calibration "qiskit.ignis.mitigation.CompleteMeasFitter.plot_calibration")(\[ax, show\_plot]) | Plot the calibration matrix (2D color grid plot)                                                                                    |
| [`readout_fidelity`](#qiskit.ignis.mitigation.CompleteMeasFitter.readout_fidelity "qiskit.ignis.mitigation.CompleteMeasFitter.readout_fidelity")(\[label\_list])    | Based on the results, output the readout fidelity which is the normalized trace of the calibration matrix                           |
| [`subset_fitter`](#qiskit.ignis.mitigation.CompleteMeasFitter.subset_fitter "qiskit.ignis.mitigation.CompleteMeasFitter.subset_fitter")(\[qubit\_sublist])          | Return a fitter object that is a subset of the qubits in the original list.                                                         |

## Attributes

|                                                                                                                                      |                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| [`cal_matrix`](#qiskit.ignis.mitigation.CompleteMeasFitter.cal_matrix "qiskit.ignis.mitigation.CompleteMeasFitter.cal_matrix")       | Return cal\_matrix.                               |
| [`filter`](#qiskit.ignis.mitigation.CompleteMeasFitter.filter "qiskit.ignis.mitigation.CompleteMeasFitter.filter")                   | Return a measurement filter using the cal matrix. |
| [`qubit_list`](#qiskit.ignis.mitigation.CompleteMeasFitter.qubit_list "qiskit.ignis.mitigation.CompleteMeasFitter.qubit_list")       | Return list of qubits.                            |
| [`state_labels`](#qiskit.ignis.mitigation.CompleteMeasFitter.state_labels "qiskit.ignis.mitigation.CompleteMeasFitter.state_labels") | Return state\_labels.                             |

<span id="undefined" />

`add_data(new_results, rebuild_cal_matrix=True)`

Add measurement calibration data

**Parameters**

*   **new\_results** (*list or* [*qiskit.result.Result*](qiskit.result.Result#qiskit.result.Result "qiskit.result.Result")) – a single result or list of result objects.
*   **rebuild\_cal\_matrix** (*bool*) – rebuild the calibration matrix

<span id="undefined" />

`property cal_matrix`

Return cal\_matrix.

<span id="undefined" />

`property filter`

Return a measurement filter using the cal matrix.

<span id="undefined" />

`plot_calibration(ax=None, show_plot=True)`

Plot the calibration matrix (2D color grid plot)

**Parameters**

*   **show\_plot** (*bool*) – call plt.show()
*   **ax** (*matplotlib.axes.Axes*) – An optional Axes object to use for the plot

<span id="undefined" />

`property qubit_list`

Return list of qubits.

<span id="undefined" />

`readout_fidelity(label_list=None)`

Based on the results, output the readout fidelity which is the normalized trace of the calibration matrix

**Parameters**

**label\_list** (*bool*) – If None, returns the average assignment fidelity of a single state. Otherwise it returns the assignment fidelity to be in any one of these states averaged over the second index.

**Returns**

readout fidelity (assignment fidelity)

**Return type**

numpy.array

**Additional Information:**

The on-diagonal elements of the calibration matrix are the probabilities of measuring state ‘x’ given preparation of state ‘x’ and so the normalized trace is the average assignment fidelity

<span id="undefined" />

`property state_labels`

Return state\_labels.

<span id="undefined" />

`subset_fitter(qubit_sublist=None)`

Return a fitter object that is a subset of the qubits in the original list.

**Parameters**

**qubit\_sublist** (*list*) – must be a subset of qubit\_list

**Returns**

**A new fitter that has the calibration for a**

subset of qubits

**Return type**

[CompleteMeasFitter](#qiskit.ignis.mitigation.CompleteMeasFitter "qiskit.ignis.mitigation.CompleteMeasFitter")

**Raises**

**QiskitError** – If the calibration matrix is not initialized
