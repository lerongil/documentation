# qiskit.chemistry.core.ChemistryOperator

<span id="undefined" />

`ChemistryOperator`

Base class for ChemistryOperator.

<span id="undefined" />

`abstract __init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                                                  |                                                                                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.chemistry.core.ChemistryOperator.__init__ "qiskit.chemistry.core.ChemistryOperator.__init__")()                                                             | Initialize self.                                                                                                    |
| [`process_algorithm_result`](#qiskit.chemistry.core.ChemistryOperator.process_algorithm_result "qiskit.chemistry.core.ChemistryOperator.process_algorithm_result")(algo\_result) | Takes the algorithm result and processes it as required, e.g.                                                       |
| [`run`](#qiskit.chemistry.core.ChemistryOperator.run "qiskit.chemistry.core.ChemistryOperator.run")(qmolecule)                                                                   | Convert the qmolecule, according to the ChemistryOperator, into an Operator that can be given to a QuantumAlgorithm |

## Attributes

|                                                                                                                                   |                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `INFO_NUM_ORBITALS`                                                                                                               |                       |
| `INFO_NUM_PARTICLES`                                                                                                              |                       |
| `INFO_TWO_QUBIT_REDUCTION`                                                                                                        |                       |
| `INFO_Z2SYMMETRIES`                                                                                                               |                       |
| [`molecule_info`](#qiskit.chemistry.core.ChemistryOperator.molecule_info "qiskit.chemistry.core.ChemistryOperator.molecule_info") | returns molecule info |

<span id="undefined" />

`property molecule_info`

returns molecule info

<span id="undefined" />

`process_algorithm_result(algo_result)`

Takes the algorithm result and processes it as required, e.g. by combination of any parts that were classically computed, for the final result.

**Parameters**

**algo\_result** (`Union`\[`dict`, `MinimumEigensolverResult`, `EigensolverResult`]) – Result from algorithm

**Return type**

`Union`\[`Tuple`\[`List`\[`str`], `dict`], `MolecularGroundStateResult`, `MolecularExcitedStatesResult`]

**Returns**

Final chemistry result computed from the algorithm result

<span id="undefined" />

`abstract run(qmolecule)`

Convert the qmolecule, according to the ChemistryOperator, into an Operator that can be given to a QuantumAlgorithm

**Parameters**

**qmolecule** ([*QMolecule*](qiskit.chemistry.QMolecule#qiskit.chemistry.QMolecule "qiskit.chemistry.QMolecule")) – from a chemistry driver

**Returns**

(qubit\_op, aux\_ops)

**Return type**

Tuple
