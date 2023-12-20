# PySCFDriver

<span id="undefined" />

`PySCFDriver(atom='H 0.0 0.0 0.0; H 0.0 0.0 0.735', unit=<UnitsType.ANGSTROM: 'Angstrom'>, charge=0, spin=0, basis='sto3g', hf_method=<HFMethodType.RHF: 'rhf'>, conv_tol=1e-09, max_cycle=50, init_guess=<InitialGuess.MINAO: 'minao'>, max_memory=None, molecule=None)`

Bases: `qiskit.chemistry.drivers.fermionic_driver.FermionicDriver`

Qiskit chemistry driver using the PySCF library.

See [https://sunqm.github.io/pyscf/](https://sunqm.github.io/pyscf/)

**Parameters**

*   **atom** (`Union`\[`str`, `List`\[`str`]]) – Atom list or string separated by semicolons or line breaks. Each element in the list is an atom followed by position e.g. H 0.0 0.0 0.5. The preceding example shows the XYZ format for position but Z-Matrix format is supported too here.
*   **unit** (`UnitsType`) – Angstrom or Bohr
*   **charge** (`int`) – Charge on the molecule
*   **spin** (`int`) – Spin (2S), in accordance with how PySCF defines a molecule in pyscf.gto.mole.Mole
*   **basis** (`str`) – Basis set
*   **hf\_method** (`HFMethodType`) – Hartree-Fock Method type
*   **conv\_tol** (`float`) – Convergence tolerance see PySCF docs and pyscf/scf/hf.py
*   **max\_cycle** (`int`) – Max convergence cycles see PySCF docs and pyscf/scf/hf.py, has a min. value of 1.
*   **init\_guess** (`InitialGuess`) – See PySCF pyscf/scf/hf.py init\_guess\_by\_minao/1e/atom methods
*   **max\_memory** (`Optional`\[`int`]) – Maximum memory that PySCF should use
*   **molecule** (`Optional`\[`Molecule`]) – A driver independent Molecule definition instance may be provided. When a molecule is supplied the atom, unit, charge and spin parameters are all ignored as the Molecule instance now defines these instead. The Molecule object is read when the driver is run and converted to the driver dependent configuration for the computation. This allows, for example, the Molecule geometry to be updated to compute different points.

**Raises**

[**QiskitChemistryError**](qiskit.chemistry.QiskitChemistryError#qiskit.chemistry.QiskitChemistryError "qiskit.chemistry.QiskitChemistryError") – Invalid Input

## Methods

|                                                                                                                                       |                                            |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| [`run`](qiskit.chemistry.drivers.PySCFDriver.run#qiskit.chemistry.drivers.PySCFDriver.run "qiskit.chemistry.drivers.PySCFDriver.run") | Runs driver to produce a QMolecule output. |

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
