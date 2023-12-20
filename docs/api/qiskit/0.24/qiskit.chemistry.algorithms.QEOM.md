<span id="qiskit-chemistry-algorithms-qeom" />

# qiskit.chemistry.algorithms.QEOM

<span id="undefined" />

`QEOM(ground_state_solver, excitations='sd')`

The calculation of excited states via the qEOM algorithm

**Parameters**

*   **ground\_state\_solver** (`GroundStateSolver`) – a GroundStateSolver object. The qEOM algorithm will use this ground state to compute the EOM matrix elements
*   **excitations** (`Union`\[`str`, `List`\[`List`\[`int`]]]) – The excitations to be included in the eom pseudo-eigenvalue problem. If a string (‘s’, ‘d’ or ‘sd’) then all excitations of the given type will be used. Otherwise a list of custom excitations can directly be provided.

<span id="undefined" />

`__init__(ground_state_solver, excitations='sd')`

**Parameters**

*   **ground\_state\_solver** (`GroundStateSolver`) – a GroundStateSolver object. The qEOM algorithm will use this ground state to compute the EOM matrix elements
*   **excitations** (`Union`\[`str`, `List`\[`List`\[`int`]]]) – The excitations to be included in the eom pseudo-eigenvalue problem. If a string (‘s’, ‘d’ or ‘sd’) then all excitations of the given type will be used. Otherwise a list of custom excitations can directly be provided.

## Methods

|                                                                                                                                             |                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| [`__init__`](#qiskit.chemistry.algorithms.QEOM.__init__ "qiskit.chemistry.algorithms.QEOM.__init__")(ground\_state\_solver\[, excitations]) | **type ground\_state\_solver**`GroundStateSolver` |
| [`solve`](#qiskit.chemistry.algorithms.QEOM.solve "qiskit.chemistry.algorithms.QEOM.solve")(driver\[, aux\_operators])                      | Run the excited-states calculation.               |

## Attributes

|                                                                                                               |                                                                              |
| ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [`excitations`](#qiskit.chemistry.algorithms.QEOM.excitations "qiskit.chemistry.algorithms.QEOM.excitations") | Returns the excitations to be included in the eom pseudo-eigenvalue problem. |

<span id="undefined" />

`property excitations`

Returns the excitations to be included in the eom pseudo-eigenvalue problem.

**Return type**

`Union`\[`str`, `List`\[`List`\[`int`]]]

<span id="undefined" />

`solve(driver, aux_operators=None)`

Run the excited-states calculation.

Construct and solves the EOM pseudo-eigenvalue problem to obtain the excitation energies and the excitation operators expansion coefficients.

**Parameters**

*   **driver** (`BaseDriver`) – a chemistry driver object which defines the chemical problem that is to be solved by this calculation.
*   **aux\_operators** (`Union`\[`List`\[`FermionicOperator`], `List`\[`BosonicOperator`], `None`]) – Additional auxiliary operators to evaluate. Must be of type `FermionicOperator` if the qubit transformation is fermionic and of type `BosonicOperator` it is bosonic.

**Return type**

`Union`\[`ElectronicStructureResult`, `VibronicStructureResult`]

**Returns**

The excited states result. In case of a fermionic problem a `ElectronicStructureResult` is returned and in the bosonic case a `VibronicStructureResult`.
