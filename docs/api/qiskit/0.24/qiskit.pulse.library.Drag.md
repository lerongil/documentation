<span id="qiskit-pulse-library-drag" />

# qiskit.pulse.library.Drag

<span id="undefined" />

`Drag(duration, amp, sigma, beta, name=None)`

The Derivative Removal by Adiabatic Gate (DRAG) pulse is a standard Gaussian pulse with an additional Gaussian derivative component. It is designed to reduce the frequency spectrum of a normal gaussian pulse near the $|1\rangle$ - $|2\rangle$ transition, reducing the chance of leakage to the $|2\rangle$ state.

$$
f(x) = Gaussian + 1j * beta * d/dx [Gaussian]
     = Gaussian + 1j * beta * (-(x - duration/2) / sigma^2) [Gaussian]
$$

where ‘Gaussian’ is:

$$
Gaussian(x, amp, sigma) = amp * exp( -(1/2) * (x - duration/2)^2 / sigma^2) )
$$

## References

1.  [*Gambetta, J. M., Motzoi, F., Merkel, S. T. & Wilhelm, F. K. Analytic control methods for high-fidelity unitary operations in a weakly nonlinear oscillator. Phys. Rev. A 83, 012308 (2011).*](https://link.aps.org/doi/10.1103/PhysRevA.83.012308)

2.  [*F. Motzoi, J. M. Gambetta, P. Rebentrost, and F. K. Wilhelm Phys. Rev. Lett. 103, 110501 – Published 8 September 2009.*](https://link.aps.org/doi/10.1103/PhysRevLett.103.110501)

Initialize the drag pulse.

**Parameters**

*   **duration** (`int`) – Pulse length in terms of the the sampling period dt.
*   **amp** (`Union`\[`complex`, `ParameterExpression`]) – The amplitude of the Drag envelope.
*   **sigma** (`Union`\[`float`, `ParameterExpression`]) – A measure of how wide or narrow the Gaussian peak is; described mathematically in the class docstring.
*   **beta** (`Union`\[`float`, `ParameterExpression`]) – The correction amplitude.
*   **name** (`Optional`\[`str`]) – Display name for this pulse envelope.

<span id="undefined" />

`__init__(duration, amp, sigma, beta, name=None)`

Initialize the drag pulse.

**Parameters**

*   **duration** (`int`) – Pulse length in terms of the the sampling period dt.
*   **amp** (`Union`\[`complex`, `ParameterExpression`]) – The amplitude of the Drag envelope.
*   **sigma** (`Union`\[`float`, `ParameterExpression`]) – A measure of how wide or narrow the Gaussian peak is; described mathematically in the class docstring.
*   **beta** (`Union`\[`float`, `ParameterExpression`]) – The correction amplitude.
*   **name** (`Optional`\[`str`]) – Display name for this pulse envelope.

## Methods

|                                                                                                                                |                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| [`__init__`](#qiskit.pulse.library.Drag.__init__ "qiskit.pulse.library.Drag.__init__")(duration, amp, sigma, beta\[, name])    | Initialize the drag pulse.                                                                                                     |
| [`assign_parameters`](#qiskit.pulse.library.Drag.assign_parameters "qiskit.pulse.library.Drag.assign_parameters")(value\_dict) | Return a new ParametricPulse with parameters assigned.                                                                         |
| [`draw`](#qiskit.pulse.library.Drag.draw "qiskit.pulse.library.Drag.draw")(\[dt, style, filename, interp\_method, …])          | Plot the pulse.                                                                                                                |
| [`get_sample_pulse`](#qiskit.pulse.library.Drag.get_sample_pulse "qiskit.pulse.library.Drag.get_sample_pulse")()               | Deprecated.                                                                                                                    |
| [`get_waveform`](#qiskit.pulse.library.Drag.get_waveform "qiskit.pulse.library.Drag.get_waveform")()                           | Return a Waveform with samples filled according to the formula that the pulse represents and the parameter values it contains. |
| [`validate_parameters`](#qiskit.pulse.library.Drag.validate_parameters "qiskit.pulse.library.Drag.validate_parameters")()      | Validate parameters.                                                                                                           |

## Attributes

|                                                                                              |                                                                            |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [`amp`](#qiskit.pulse.library.Drag.amp "qiskit.pulse.library.Drag.amp")                      | The Gaussian amplitude.                                                    |
| [`beta`](#qiskit.pulse.library.Drag.beta "qiskit.pulse.library.Drag.beta")                   | The weighing factor for the Gaussian derivative component of the waveform. |
| [`id`](#qiskit.pulse.library.Drag.id "qiskit.pulse.library.Drag.id")                         | Unique identifier for this pulse.                                          |
| [`parameters`](#qiskit.pulse.library.Drag.parameters "qiskit.pulse.library.Drag.parameters") | Return a dictionary containing the pulse’s parameters.                     |
| [`sigma`](#qiskit.pulse.library.Drag.sigma "qiskit.pulse.library.Drag.sigma")                | The Gaussian standard deviation of the pulse width.                        |

<span id="undefined" />

`property amp`

The Gaussian amplitude.

**Return type**

`Union`\[`complex`, `ParameterExpression`]

<span id="undefined" />

`assign_parameters(value_dict)`

Return a new ParametricPulse with parameters assigned.

**Parameters**

**value\_dict** (`Dict`\[`ParameterExpression`, `Union`\[`ParameterExpression`, `float`, `int`]]) – A mapping from Parameters to either numeric values or another Parameter expression.

**Return type**

`ParametricPulse`

**Returns**

New pulse with updated parameters.

<span id="undefined" />

`property beta`

The weighing factor for the Gaussian derivative component of the waveform.

**Return type**

`Union`\[`float`, `ParameterExpression`]

<span id="undefined" />

`draw(dt=1, style=None, filename=None, interp_method=None, scale=1, interactive=False)`

Plot the pulse.

**Parameters**

*   **dt** (`float`) – Time interval of samples.
*   **style** (*Optional\[*[*PulseStyle*](qiskit.visualization.pulse.qcstyle#PulseStyle "qiskit.visualization.pulse.qcstyle.PulseStyle")*]*) – A style sheet to configure plot appearance
*   **filename** (`Optional`\[`str`]) – Name required to save pulse image
*   **interp\_method** (`Optional`\[`Callable`]) – A function for interpolation
*   **scale** (`float`) – Relative visual scaling of waveform amplitudes
*   **interactive** (`bool`) – When set true show the circuit in a new window (this depends on the matplotlib backend being used supporting this)

**Returns**

A matplotlib figure object of the pulse envelope

**Return type**

matplotlib.figure

<span id="undefined" />

`get_sample_pulse()`

Deprecated.

**Return type**

`Waveform`

<span id="undefined" />

`get_waveform()`

Return a Waveform with samples filled according to the formula that the pulse represents and the parameter values it contains.

**Return type**

`Waveform`

<span id="undefined" />

`property id`

Unique identifier for this pulse.

**Return type**

`int`

<span id="undefined" />

`property parameters`

Return a dictionary containing the pulse’s parameters.

**Return type**

`Dict`\[`str`, `Any`]

<span id="undefined" />

`property sigma`

The Gaussian standard deviation of the pulse width.

**Return type**

`Union`\[`float`, `ParameterExpression`]

<span id="undefined" />

`validate_parameters()`

Validate parameters.

**Raises**

[**PulseError**](qiskit.pulse.PulseError#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If the parameters passed are not valid.

**Return type**

`None`
