# qiskit.chemistry.components.bosonic\_bases.HarmonicBasis

<span id="undefined" />

`HarmonicBasis(watson_hamiltonian, basis, truncation_order=3)`

Basis in which the Watson Hamiltonian is expressed.

This class uses the Hermite polynomials (eigenstates of the harmonic oscillator) as a modal basis for the expression of the Watson Hamiltonian or any bosonic operator.

## References

\[1] Ollitrault Pauline J., Chemical science 11 (2020): 6842-6855.

**Parameters**

*   **watson\_hamiltonian** (`WatsonHamiltonian`) – A `WatsonHamiltonian` object which contains the hamiltonian information.
*   **basis** (`List`\[`int`]) – Is a list defining the number of modals per mode. E.g. for a 3 modes system with 4 modals per mode `basis = [4, 4, 4]`.
*   **truncation\_order** (`int`) – where is the Hamiltonian expansion truncation (1 for having only 1-body terms, 2 for having on 1- and 2-body terms…)

<span id="undefined" />

`__init__(watson_hamiltonian, basis, truncation_order=3)`

**Parameters**

*   **watson\_hamiltonian** (`WatsonHamiltonian`) – A `WatsonHamiltonian` object which contains the hamiltonian information.
*   **basis** (`List`\[`int`]) – Is a list defining the number of modals per mode. E.g. for a 3 modes system with 4 modals per mode `basis = [4, 4, 4]`.
*   **truncation\_order** (`int`) – where is the Hamiltonian expansion truncation (1 for having only 1-body terms, 2 for having on 1- and 2-body terms…)

## Methods

|                                                                                                                                                                                      |                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.chemistry.components.bosonic_bases.HarmonicBasis.__init__ "qiskit.chemistry.components.bosonic_bases.HarmonicBasis.__init__")(watson\_hamiltonian, basis\[, …]) | **type watson\_hamiltonian**`WatsonHamiltonian`                                                   |
| [`convert`](#qiskit.chemistry.components.bosonic_bases.HarmonicBasis.convert "qiskit.chemistry.components.bosonic_bases.HarmonicBasis.convert")(\[threshold])                        | This prepares an array object representing a bosonic hamiltonian expressed in the harmonic basis. |

<span id="undefined" />

`convert(threshold=1e-06)`

This prepares an array object representing a bosonic hamiltonian expressed in the harmonic basis. This object can directly be given to the BosonicOperator class to be mapped to a qubit hamiltonian.

**Parameters**

**threshold** (`float`) – the matrix elements of value below this threshold are discarded

**Return type**

`List`\[`List`\[`Tuple`\[`List`\[`List`\[`int`]], `float`]]]

**Returns**

List of modes for input to creation of a bosonic hamiltonian in the harmonic basis

**Raises**

**ValueError** – If problem with order value from computed modes
