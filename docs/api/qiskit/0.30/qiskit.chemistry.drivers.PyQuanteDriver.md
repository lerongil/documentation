# PyQuanteDriver

<span id="undefined" />

`PyQuanteDriver(atoms='H 0.0 0.0 0.0; H 0.0 0.0 0.735', units=<UnitsType.ANGSTROM: 'Angstrom'>, charge=0, multiplicity=1, basis=<BasisType.BSTO3G: 'sto3g'>, hf_method=<HFMethodType.RHF: 'rhf'>, tol=1e-08, maxiters=100, molecule=None)`

Bases: `qiskit.chemistry.drivers.fermionic_driver.FermionicDriver`

Qiskit chemistry driver using the PyQuante2 library.

See [https://github.com/rpmuller/pyquante2](https://github.com/rpmuller/pyquante2)

**Parameters**

*   **atoms** (`Union`\[`str`, `List`\[`str`]]) – Atoms list or string separated by semicolons or line breaks. Each element in the list is an atom followed by position e.g. H 0.0 0.0 0.5. The preceding example shows the XYZ format for position but Z-Matrix format is supported too here.
*   **units** (`UnitsType`) – Angstrom or Bohr
*   **charge** (`int`) – Charge on the molecule
*   **multiplicity** (`int`) – Spin multiplicity (2S+1)
*   **basis** (`BasisType`) – Basis set; sto3g, 6-31g or 6-31g\*\*
*   **hf\_method** (`HFMethodType`) – Hartree-Fock Method type
*   **tol** (`float`) – Convergence tolerance see pyquante2.scf hamiltonians and iterators
*   **maxiters** (`int`) – Convergence max iterations see pyquante2.scf hamiltonians and iterators, has a min. value of 1.
*   **molecule** (`Optional`\[`Molecule`]) – A driver independent Molecule definition instance may be provided. When a molecule is supplied the atoms, units, charge and multiplicity parameters are all ignored as the Molecule instance now defines these instead. The Molecule object is read when the driver is run and converted to the driver dependent configuration for the computation. This allows, for example, the Molecule geometry to be updated to compute different points.

**Raises**

[**QiskitChemistryError**](qiskit.chemistry.QiskitChemistryError#qiskit.chemistry.QiskitChemistryError "qiskit.chemistry.QiskitChemistryError") – Invalid Input

## Methods

|                                                                                                                                                |                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| [`run`](qiskit.chemistry.drivers.PyQuanteDriver.run#qiskit.chemistry.drivers.PyQuanteDriver.run "qiskit.chemistry.drivers.PyQuanteDriver.run") | Runs driver to produce a QMolecule output. |

## Attributes

<span id="undefined" />

### basis

return basis

**Return type**

`str`

<span id="undefined" />

### hf\_method

return Hartree-Fock method

**Return type**

`str`

<span id="undefined" />

### molecule

return molecule

**Return type**

`Optional`\[`Molecule`]

<span id="undefined" />

### supports\_molecule

True for derived classes that support Molecule.

**Return type**

`bool`

**Returns**

True if Molecule is supported.
