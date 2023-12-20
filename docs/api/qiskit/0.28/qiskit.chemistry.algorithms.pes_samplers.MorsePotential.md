# qiskit.chemistry.algorithms.pes\_samplers.MorsePotential

<span id="undefined" />

`MorsePotential(molecule)`

Implements a 1D Morse potential.

Input units are Angstroms (distance between the two atoms), and output units are Hartrees (molecular energy).

Initializes the potential to the zero-function. [`fit()`](#qiskit.chemistry.algorithms.pes_samplers.MorsePotential.fit "qiskit.chemistry.algorithms.pes_samplers.MorsePotential.fit") should be used afterwards to fit the potential to computed molecular energies.

**Parameters**

**molecule** (`Molecule`) – the underlying molecule.

**Raises**

**ValueError** – Only implemented for diatomic molecules

<span id="undefined" />

`__init__(molecule)`

Initializes the potential to the zero-function. [`fit()`](#qiskit.chemistry.algorithms.pes_samplers.MorsePotential.fit "qiskit.chemistry.algorithms.pes_samplers.MorsePotential.fit") should be used afterwards to fit the potential to computed molecular energies.

**Parameters**

**molecule** (`Molecule`) – the underlying molecule.

**Raises**

**ValueError** – Only implemented for diatomic molecules

## Methods

|                                                                                                                                                                                                                |                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.chemistry.algorithms.pes_samplers.MorsePotential.__init__ "qiskit.chemistry.algorithms.pes_samplers.MorsePotential.__init__")(molecule)                                                   | Initializes the potential to the zero-function.                                                                            |
| [`dissociation_energy`](#qiskit.chemistry.algorithms.pes_samplers.MorsePotential.dissociation_energy "qiskit.chemistry.algorithms.pes_samplers.MorsePotential.dissociation_energy")(\[scaling])                | Returns the calculated dissociation energy for the current fit.                                                            |
| [`eval`](#qiskit.chemistry.algorithms.pes_samplers.MorsePotential.eval "qiskit.chemistry.algorithms.pes_samplers.MorsePotential.eval")(x)                                                                      | After fitting the data to the fit function, predict the energy at a point x.                                               |
| [`fit`](#qiskit.chemistry.algorithms.pes_samplers.MorsePotential.fit "qiskit.chemistry.algorithms.pes_samplers.MorsePotential.fit")(xdata, ydata\[, initial\_vals, bounds\_list])                              | Fits a potential to computed molecular energies.                                                                           |
| [`fit_function`](#qiskit.chemistry.algorithms.pes_samplers.MorsePotential.fit_function "qiskit.chemistry.algorithms.pes_samplers.MorsePotential.fit_function")(x, d\_e, alpha, r\_0, m\_shift)                 | Functional form of the potential.                                                                                          |
| [`fundamental_frequency`](#qiskit.chemistry.algorithms.pes_samplers.MorsePotential.fundamental_frequency "qiskit.chemistry.algorithms.pes_samplers.MorsePotential.fundamental_frequency")()                    | Returns the fundamental frequency for the current fit (in s^-1).                                                           |
| [`get_equilibrium_geometry`](#qiskit.chemistry.algorithms.pes_samplers.MorsePotential.get_equilibrium_geometry "qiskit.chemistry.algorithms.pes_samplers.MorsePotential.get_equilibrium_geometry")(\[scaling]) | Returns the interatomic distance corresponding to minimal energy.                                                          |
| [`get_maximum_trusted_level`](#qiskit.chemistry.algorithms.pes_samplers.MorsePotential.get_maximum_trusted_level "qiskit.chemistry.algorithms.pes_samplers.MorsePotential.get_maximum_trusted_level")(\[n])    | Returns the maximum energy level for which the particular implementation still provides a good approximation of reality.   |
| [`get_minimal_energy`](#qiskit.chemistry.algorithms.pes_samplers.MorsePotential.get_minimal_energy "qiskit.chemistry.algorithms.pes_samplers.MorsePotential.get_minimal_energy")(\[scaling])                   | Returns the smallest molecular energy for the current fit.                                                                 |
| [`get_num_modes`](#qiskit.chemistry.algorithms.pes_samplers.MorsePotential.get_num_modes "qiskit.chemistry.algorithms.pes_samplers.MorsePotential.get_num_modes")()                                            | This (1D) potential represents a single vibrational mode                                                                   |
| [`get_trust_region`](#qiskit.chemistry.algorithms.pes_samplers.MorsePotential.get_trust_region "qiskit.chemistry.algorithms.pes_samplers.MorsePotential.get_trust_region")()                                   | The potential will usually be well-defined (even if not useful) for arbitrary x so we return a fairly large interval here. |
| [`update_molecule`](#qiskit.chemistry.algorithms.pes_samplers.MorsePotential.update_molecule "qiskit.chemistry.algorithms.pes_samplers.MorsePotential.update_molecule")(molecule)                              | Updates the underlying molecule.                                                                                           |
| [`vibrational_energy_level`](#qiskit.chemistry.algorithms.pes_samplers.MorsePotential.vibrational_energy_level "qiskit.chemistry.algorithms.pes_samplers.MorsePotential.vibrational_energy_level")(n)          | Returns the n-th vibrational energy level for the current fit (in Hartrees).                                               |
| [`wave_number`](#qiskit.chemistry.algorithms.pes_samplers.MorsePotential.wave_number "qiskit.chemistry.algorithms.pes_samplers.MorsePotential.wave_number")()                                                  | Returns the wave number for the current fit (in cm^-1).                                                                    |

<span id="undefined" />

`dissociation_energy(scaling=1.0)`

Returns the calculated dissociation energy for the current fit.

**Parameters**

**scaling** (`float`) – Scaling to change units. (Default is 1.0 for Hartrees)

**Return type**

`float`

**Returns**

calculated dissociation energy for the current fit

<span id="undefined" />

`eval(x)`

After fitting the data to the fit function, predict the energy at a point x.

**Parameters**

**x** (`float`) – value to evaluate surface in

**Return type**

`float`

**Returns**

value of surface in point x

<span id="undefined" />

`fit(xdata, ydata, initial_vals=None, bounds_list=None)`

Fits a potential to computed molecular energies.

**Parameters**

*   **xdata** (`List`\[`float`]) – interatomic distance points (Angstroms)
*   **ydata** (`List`\[`float`]) – molecular energies (Hartrees)
*   **initial\_vals** (`Optional`\[`List`\[`float`]]) – Initial values for fit parameters. None for default. Order of parameters is d\_e, alpha, r\_0 and m\_shift (see fit\_function implementation)
*   **bounds\_list** (`Optional`\[`Tuple`\[`List`\[`float`], `List`\[`float`]]]) – Bounds for the fit parameters. None for default. Order of parameters is d\_e, alpha, r\_0 and m\_shift (see fit\_function implementation)

**Return type**

`None`

<span id="undefined" />

`static fit_function(x, d_e, alpha, r_0, m_shift)`

Functional form of the potential.

**Parameters**

*   **x** (`float`) – x parameter of morse potential
*   **d\_e** (`float`) – d\_e parameter of morse potential
*   **alpha** (`float`) – alpha parameter of morse potential
*   **r\_0** (`float`) – r\_0 parameter of morse potential
*   **m\_shift** (`float`) – m\_shift parameter of morse potential

**Return type**

`float`

**Returns**

potential functional form

<span id="undefined" />

`fundamental_frequency()`

Returns the fundamental frequency for the current fit (in s^-1).

**Return type**

`float`

**Returns**

fundamental frequency for the current fit

<span id="undefined" />

`get_equilibrium_geometry(scaling=1.0)`

Returns the interatomic distance corresponding to minimal energy.

**Parameters**

**scaling** (`float`) – Scaling to change units. (Default is 1.0 for Angstroms)

**Return type**

`float`

**Returns**

interatomic distance corresponding to minimal energy

<span id="undefined" />

`get_maximum_trusted_level(n=0)`

Returns the maximum energy level for which the particular implementation still provides a good approximation of reality.

**Parameters**

**n** (`int`) – vibronic mode

**Return type**

`float`

**Returns**

maximum\_trusted\_level estimated

<span id="undefined" />

`get_minimal_energy(scaling=1.0)`

Returns the smallest molecular energy for the current fit.

**Parameters**

**scaling** (`float`) – Scaling to change units. (Default is 1.0 for Hartrees)

**Return type**

`float`

**Returns**

smallest molecular energy for the current fit

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

Updates the underlying molecule.

**Parameters**

**molecule** (`Molecule`) – chemistry molecule

**Raises**

**ValueError** – Only implemented for diatomic molecules

**Return type**

`None`

<span id="undefined" />

`vibrational_energy_level(n)`

Returns the n-th vibrational energy level for the current fit (in Hartrees).

**Parameters**

**n** (`int`) – vibrational mode

**Return type**

`float`

**Returns**

vibrational energy level for the current fit

<span id="undefined" />

`wave_number()`

Returns the wave number for the current fit (in cm^-1).

**Return type**

`float`

**Returns**

wave number for the current fit
