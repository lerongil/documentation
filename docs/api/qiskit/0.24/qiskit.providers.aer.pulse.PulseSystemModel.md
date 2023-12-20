<span id="qiskit-providers-aer-pulse-pulsesystemmodel" />

# qiskit.providers.aer.pulse.PulseSystemModel

<span id="undefined" />

`PulseSystemModel(hamiltonian=None, u_channel_lo=None, control_channel_labels=None, subsystem_list=None, dt=None)`

Physical model object for pulse simulator.

This class contains model information required by the [`PulseSimulator`](qiskit.providers.aer.PulseSimulator#qiskit.providers.aer.PulseSimulator "qiskit.providers.aer.PulseSimulator"). It contains:

> *   `"hamiltonian"`: a `HamiltonianModel` object representing the Hamiltonian of the system.
> *   `"u_channel_lo"`: A description of `ControlChannel` local oscillator frequencies in terms of qubit local oscillator frequencies.
> *   `"control_channel_labels"`: Optional list of identifying information for each `ControlChannel` that the model supports.
> *   `"subsystem_list"`: List of subsystems in the model.
> *   `"dt"`: Sample width size for OpenPulse instructions.

A model can be instantiated from the helper function [`duffing_system_model()`](qiskit.providers.aer.pulse.duffing_system_model#qiskit.providers.aer.pulse.duffing_system_model "qiskit.providers.aer.pulse.duffing_system_model"), or using the [`PulseSystemModel.from_backend()`](#qiskit.providers.aer.pulse.PulseSystemModel.from_backend "qiskit.providers.aer.pulse.PulseSystemModel.from_backend") constructor.

**Example**

Constructing from a backend:

Initialize a PulseSystemModel.

**Parameters**

*   **hamiltonian** (*HamiltonianModel*) – The Hamiltonian of the system.
*   **u\_channel\_lo** (*list*) – list of ControlChannel frequency specifications.
*   **control\_channel\_labels** (*list*) – list of labels for control channels, which can be of any type.
*   **subsystem\_list** (*list*) – list of valid qubit indicies for the model.
*   **dt** (*float*) – pixel size for pulse Instructions.

**Raises**

[**AerError**](qiskit.providers.aer.AerError#qiskit.providers.aer.AerError "qiskit.providers.aer.AerError") – if hamiltonian is not None or a HamiltonianModel

<span id="undefined" />

`__init__(hamiltonian=None, u_channel_lo=None, control_channel_labels=None, subsystem_list=None, dt=None)`

Initialize a PulseSystemModel.

**Parameters**

*   **hamiltonian** (*HamiltonianModel*) – The Hamiltonian of the system.
*   **u\_channel\_lo** (*list*) – list of ControlChannel frequency specifications.
*   **control\_channel\_labels** (*list*) – list of labels for control channels, which can be of any type.
*   **subsystem\_list** (*list*) – list of valid qubit indicies for the model.
*   **dt** (*float*) – pixel size for pulse Instructions.

**Raises**

[**AerError**](qiskit.providers.aer.AerError#qiskit.providers.aer.AerError "qiskit.providers.aer.AerError") – if hamiltonian is not None or a HamiltonianModel

## Methods

|                                                                                                                                                                                                               |                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.providers.aer.pulse.PulseSystemModel.__init__ "qiskit.providers.aer.pulse.PulseSystemModel.__init__")(\[hamiltonian, u\_channel\_lo, …])                                                 | Initialize a PulseSystemModel.                                                   |
| [`calculate_channel_frequencies`](#qiskit.providers.aer.pulse.PulseSystemModel.calculate_channel_frequencies "qiskit.providers.aer.pulse.PulseSystemModel.calculate_channel_frequencies")(\[qubit\_lo\_freq]) | Calculate frequencies for each channel given qubit\_lo\_freq.                    |
| [`control_channel_index`](#qiskit.providers.aer.pulse.PulseSystemModel.control_channel_index "qiskit.providers.aer.pulse.PulseSystemModel.control_channel_index")(label)                                      | Return the index of the control channel with identifying label.                  |
| [`from_backend`](#qiskit.providers.aer.pulse.PulseSystemModel.from_backend "qiskit.providers.aer.pulse.PulseSystemModel.from_backend")(backend\[, subsystem\_list])                                           | Returns a PulseSystemModel constructed from an OpenPulse enabled backend object. |
| [`from_config`](#qiskit.providers.aer.pulse.PulseSystemModel.from_config "qiskit.providers.aer.pulse.PulseSystemModel.from_config")(configuration\[, subsystem\_list])                                        | Construct a model from configuration and defaults.                               |

<span id="undefined" />

`calculate_channel_frequencies(qubit_lo_freq=None)`

Calculate frequencies for each channel given qubit\_lo\_freq.

**Parameters**

**qubit\_lo\_freq** (*list or None*) – list of qubit linear oscillator drive frequencies.

**Returns**

a dictionary of channel frequencies.

**Return type**

OrderedDict

**Raises**

**ValueError** – If channel or u\_channel\_lo are invalid.

<span id="undefined" />

`control_channel_index(label)`

Return the index of the control channel with identifying label.

**Parameters**

**label** (*Any*) – label that identifies a control channel

**Returns**

index of the ControlChannel

**Return type**

int or None

<span id="undefined" />

`classmethod from_backend(backend, subsystem_list=None)`

Returns a PulseSystemModel constructed from an OpenPulse enabled backend object.

**Parameters**

*   **backend** ([*Backend*](qiskit.providers.Backend#qiskit.providers.Backend "qiskit.providers.Backend")) – backend object to draw information from.
*   **subsystem\_list** (*list*) – a list of ints for which qubits to include in the model.

**Returns**

the PulseSystemModel constructed from the backend.

**Return type**

[PulseSystemModel](#qiskit.providers.aer.pulse.PulseSystemModel "qiskit.providers.aer.pulse.PulseSystemModel")

**Raises**

[**AerError**](qiskit.providers.aer.AerError#qiskit.providers.aer.AerError "qiskit.providers.aer.AerError") – If channel or u\_channel\_lo are invalid.

<span id="undefined" />

`classmethod from_config(configuration, subsystem_list=None)`

Construct a model from configuration and defaults.
