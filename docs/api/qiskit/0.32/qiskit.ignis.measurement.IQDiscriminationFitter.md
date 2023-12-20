# IQDiscriminationFitter

<span id="undefined" />

`IQDiscriminationFitter(cal_results, qubit_mask, expected_states=None, standardize=False, schedules=None)`

Bases: `qiskit.ignis.measurement.discriminator.discriminators.BaseDiscriminationFitter`

Abstract discriminator that implements the data formatting for IQ level 1 data.

**Parameters**

*   **cal\_results** (*Union\[*[*Result*](qiskit.result.Result#qiskit.result.Result "qiskit.result.Result")*, List\[*[*Result*](qiskit.result.Result#qiskit.result.Result "qiskit.result.Result")*]]*) – calibration results, Result or list of Result used to fit the discriminator.
*   **qubit\_mask** (*List\[int]*) – determines which qubit’s level 1 data to use in the discrimination process.
*   **expected\_states** (*List\[str]*) – a list that should have the same length as schedules. All results in cal\_results are used if schedules is None. expected\_states must have the corresponding length.
*   **standardize** (*bool*) – if true the discriminator will standardize the xdata using the internal method \_scale\_data.
*   **schedules** (*Union\[List\[str], List\[*[*Schedule*](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule")*]]*) – The schedules or a subset of schedules in cal\_results used to train the discriminator. The user may also pass the name of the schedules instead of the schedules. If schedules is None, then all the schedules in cal\_results are used.

## Methods

|                                                                                                                                                                                                                    |                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| [`add_data`](qiskit.ignis.measurement.IQDiscriminationFitter.add_data#qiskit.ignis.measurement.IQDiscriminationFitter.add_data "qiskit.ignis.measurement.IQDiscriminationFitter.add_data")                         | **type result**`Result`                                                                                    |
| [`discriminate`](qiskit.ignis.measurement.IQDiscriminationFitter.discriminate#qiskit.ignis.measurement.IQDiscriminationFitter.discriminate "qiskit.ignis.measurement.IQDiscriminationFitter.discriminate")         | Applies the discriminator to x\_data.                                                                      |
| [`fit`](qiskit.ignis.measurement.IQDiscriminationFitter.fit#qiskit.ignis.measurement.IQDiscriminationFitter.fit "qiskit.ignis.measurement.IQDiscriminationFitter.fit")                                             | Fits the discriminator using self.\_xdata and self.\_ydata.                                                |
| [`format_iq_data`](qiskit.ignis.measurement.IQDiscriminationFitter.format_iq_data#qiskit.ignis.measurement.IQDiscriminationFitter.format_iq_data "qiskit.ignis.measurement.IQDiscriminationFitter.format_iq_data") | Takes IQ data obtained from get\_memory(), applies the qubit mask and formats the data as a list of lists. |
| [`get_xdata`](qiskit.ignis.measurement.IQDiscriminationFitter.get_xdata#qiskit.ignis.measurement.IQDiscriminationFitter.get_xdata "qiskit.ignis.measurement.IQDiscriminationFitter.get_xdata")                     | Retrieves feature data (xdata) for the discriminator.                                                      |
| [`get_ydata`](qiskit.ignis.measurement.IQDiscriminationFitter.get_ydata#qiskit.ignis.measurement.IQDiscriminationFitter.get_ydata "qiskit.ignis.measurement.IQDiscriminationFitter.get_ydata")                     | Retrieves the expected states (ydata) for the discriminator.                                               |
| [`is_calibration`](qiskit.ignis.measurement.IQDiscriminationFitter.is_calibration#qiskit.ignis.measurement.IQDiscriminationFitter.is_calibration "qiskit.ignis.measurement.IQDiscriminationFitter.is_calibration") | Identify if a name corresponds to a calibration name identified by the regex pattern self.\_cal\_pattern.  |
| [`plot`](qiskit.ignis.measurement.IQDiscriminationFitter.plot#qiskit.ignis.measurement.IQDiscriminationFitter.plot "qiskit.ignis.measurement.IQDiscriminationFitter.plot")                                         | Creates a plot of the data used to fit the discriminator.                                                  |
| [`plot_xdata`](qiskit.ignis.measurement.IQDiscriminationFitter.plot_xdata#qiskit.ignis.measurement.IQDiscriminationFitter.plot_xdata "qiskit.ignis.measurement.IQDiscriminationFitter.plot_xdata")                 | Add the relevant IQ data from the Qiskit Result, or list thereof, to the given axes as a scatter plot.     |

## Attributes

<span id="undefined" />

### expected\_states

Returns the expected states used to train the discriminator.

<span id="undefined" />

### fitted

True if the discriminator has been fitted to calibration data.

<span id="undefined" />

### schedules

Returns the schedules with which the discriminator was fitted.
