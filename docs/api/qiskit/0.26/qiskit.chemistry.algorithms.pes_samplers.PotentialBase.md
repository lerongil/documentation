# qiskit.chemistry.algorithms.pes\_samplers.PotentialBase

<span id="undefined" />

`PotentialBase(molecule)`

Class to hold prescribed 1D potentials (e.g. Morse/Harmonic) over a degree of freedom.

<span id="undefined" />

`__init__(molecule)`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                                                                              |                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.chemistry.algorithms.pes_samplers.PotentialBase.__init__ "qiskit.chemistry.algorithms.pes_samplers.PotentialBase.__init__")(molecule)                                                   | Initialize self.                                                                                                           |
| [`dissociation_energy`](#qiskit.chemistry.algorithms.pes_samplers.PotentialBase.dissociation_energy "qiskit.chemistry.algorithms.pes_samplers.PotentialBase.dissociation_energy")(\[scaling])                | Returns the dissociation energy (scaled by ‘scaling’)                                                                      |
| [`eval`](#qiskit.chemistry.algorithms.pes_samplers.PotentialBase.eval "qiskit.chemistry.algorithms.pes_samplers.PotentialBase.eval")(x)                                                                      | After fitting the data to the fit function, predict the energy at a point x.                                               |
| [`fit`](#qiskit.chemistry.algorithms.pes_samplers.PotentialBase.fit "qiskit.chemistry.algorithms.pes_samplers.PotentialBase.fit")(xdata, ydata\[, initial\_vals, bounds\_list])                              | Fits surface to data                                                                                                       |
| [`get_equilibrium_geometry`](#qiskit.chemistry.algorithms.pes_samplers.PotentialBase.get_equilibrium_geometry "qiskit.chemistry.algorithms.pes_samplers.PotentialBase.get_equilibrium_geometry")(\[scaling]) | Get the equilibrium energy.                                                                                                |
| [`get_maximum_trusted_level`](#qiskit.chemistry.algorithms.pes_samplers.PotentialBase.get_maximum_trusted_level "qiskit.chemistry.algorithms.pes_samplers.PotentialBase.get_maximum_trusted_level")(\[n])    | Returns the maximum energy level for which the particular implementation still provides a good approximation of reality.   |
| [`get_minimal_energy`](#qiskit.chemistry.algorithms.pes_samplers.PotentialBase.get_minimal_energy "qiskit.chemistry.algorithms.pes_samplers.PotentialBase.get_minimal_energy")(\[scaling])                   | Get the minimal energy.                                                                                                    |
| [`get_num_modes`](#qiskit.chemistry.algorithms.pes_samplers.PotentialBase.get_num_modes "qiskit.chemistry.algorithms.pes_samplers.PotentialBase.get_num_modes")()                                            | This (1D) potential represents a single vibrational mode                                                                   |
| [`get_trust_region`](#qiskit.chemistry.algorithms.pes_samplers.PotentialBase.get_trust_region "qiskit.chemistry.algorithms.pes_samplers.PotentialBase.get_trust_region")()                                   | The potential will usually be well-defined (even if not useful) for arbitrary x so we return a fairly large interval here. |
| [`update_molecule`](#qiskit.chemistry.algorithms.pes_samplers.PotentialBase.update_molecule "qiskit.chemistry.algorithms.pes_samplers.PotentialBase.update_molecule")(molecule)                              | Wipe state if molecule changes, and check validity of molecule for potential.                                              |
| [`vibrational_energy_level`](#qiskit.chemistry.algorithms.pes_samplers.PotentialBase.vibrational_energy_level "qiskit.chemistry.algorithms.pes_samplers.PotentialBase.vibrational_energy_level")(n)          | Returns the n-th vibrational energy level for a given mode.                                                                |

<span id="undefined" />

`abstract dissociation_energy(scaling=1.0)`

Returns the dissociation energy (scaled by ‘scaling’)

**Return type**

`float`

<span id="undefined" />

`abstract eval(x)`

After fitting the data to the fit function, predict the energy at a point x.

**Parameters**

**x** (`float`) – value to evaluate surface in

**Return type**

`float`

**Returns**

value of surface in point x

<span id="undefined" />

`abstract fit(xdata, ydata, initial_vals=None, bounds_list=None)`

Fits surface to data

**Parameters**

*   **xdata** (`List`\[`float`]) – x data to be fitted
*   **ydata** (`List`\[`float`]) – y data to be fitted
*   **initial\_vals** (`Optional`\[`List`\[`float`]]) – Initial values for fit parameters. None for default. Order of parameters is d\_e, alpha, r\_0 and m\_shift (see fit\_function implementation)
*   **bounds\_list** (`Optional`\[`Tuple`\[`List`\[`float`], `List`\[`float`]]]) – Bounds for the fit parameters. None for default. Order of parameters is d\_e, alpha, r\_0 and m\_shift (see fit\_function implementation)

**Return type**

`None`

<span id="undefined" />

`abstract get_equilibrium_geometry(scaling=1.0)`

Get the equilibrium energy.

Returns the geometry for the minimal energy (scaled by ‘scaling’) Default units (scaling=1.0) are Angstroms. Scale by 1E-10 to get meters.

**Parameters**

**scaling** (`float`) – scaling factor

**Return type**

`float`

**Returns**

equilibrium geometry

<span id="undefined" />

`get_maximum_trusted_level(n=0)`

Returns the maximum energy level for which the particular implementation still provides a good approximation of reality. Default value of 100. Redefined where needed (see e.g. Morse).

**Parameters**

**n** (`int`) – vibronic mode

**Return type**

`float`

**Returns**

maximum\_trusted\_level setted

<span id="undefined" />

`abstract get_minimal_energy(scaling=1.0)`

Get the minimal energy.

Returns the value of the minimal energy (scaled by ‘scaling’) Default units (scaling=1.0) are J/mol. Scale appropriately for Hartrees.

**Parameters**

**scaling** (`float`) – scaling factor

**Return type**

`float`

**Returns**

minimum energy

<span id="undefined" />

`get_num_modes()`

This (1D) potential represents a single vibrational mode

**Return type**

`int`

<span id="undefined" />

`get_trust_region()`

The potential will usually be well-defined (even if not useful) for arbitrary x so we return a fairly large interval here. Redefine in derived classes if needed.

**Return type**

`Tuple`\[`float`, `float`]

<span id="undefined" />

`update_molecule(molecule)`

Wipe state if molecule changes, and check validity of molecule for potential.

**Parameters**

**molecule** (`Molecule`) – chemistry molecule

**Return type**

`Molecule`

**Returns**

molecule used

<span id="undefined" />

`abstract vibrational_energy_level(n)`

Returns the n-th vibrational energy level for a given mode.

**Parameters**

**n** (`int`) – number of vibrational mode

**Return type**

`float`

**Returns**

n-th vibrational energy level for a given mode
