<span id="qiskit-chemistry-drivers-molecule" />

# qiskit.chemistry.drivers.Molecule

<span id="undefined" />

`Molecule(geometry, multiplicity=1, charge=0, degrees_of_freedom=None, masses=None)`

Driver-independent Molecule definition.

This module implements an interface for a driver-independent, i.e. generic molecule definition. It defines the composing atoms (with properties like masses), and allows for changing the molecular geometry through given degrees of freedom (e.g. bond-stretching, angle-bending, etc.). The geometry as provided in the constructor can be affected, through setting perturbations, and it is this perturbed geometry that is supplied by the geometry getter. Setting perturbations to None will cause the original geometry to be returned, and there is a getter to get this value directly if its needed.

**Parameters**

*   **geometry** (`List`\[`Tuple`\[`str`, `List`\[`float`]]]) – A list of atoms defining a given molecule where each item in the list is an atom name together with a list of 3 floats representing the x,y and z Cartesian coordinates of the atom’s position in units of **Angstrom**.
*   **multiplicity** (`int`) – Multiplicity (2S+1) of the molecule
*   **charge** (`int`) – Charge on the molecule
*   **degrees\_of\_freedom** (`Optional`\[`List`\[`Callable`]]) – List of functions taking a perturbation value and geometry and returns a perturbed geometry. Helper functions for typical perturbations are provided and can be used by the form itertools.partial(Molecule.stretching\_potential,\{‘atom\_pair’: (1, 2)) to specify the desired degree of freedom.
*   **masses** (`Optional`\[`List`\[`float`]]) – Mass of each atom the molecule may optionally be provided.

**Raises**

**ValueError** – Length of masses must match length of geometries.

<span id="undefined" />

`__init__(geometry, multiplicity=1, charge=0, degrees_of_freedom=None, masses=None)`

**Parameters**

*   **geometry** (`List`\[`Tuple`\[`str`, `List`\[`float`]]]) – A list of atoms defining a given molecule where each item in the list is an atom name together with a list of 3 floats representing the x,y and z Cartesian coordinates of the atom’s position in units of **Angstrom**.
*   **multiplicity** (`int`) – Multiplicity (2S+1) of the molecule
*   **charge** (`int`) – Charge on the molecule
*   **degrees\_of\_freedom** (`Optional`\[`List`\[`Callable`]]) – List of functions taking a perturbation value and geometry and returns a perturbed geometry. Helper functions for typical perturbations are provided and can be used by the form itertools.partial(Molecule.stretching\_potential,\{‘atom\_pair’: (1, 2)) to specify the desired degree of freedom.
*   **masses** (`Optional`\[`List`\[`float`]]) – Mass of each atom the molecule may optionally be provided.

**Raises**

**ValueError** – Length of masses must match length of geometries.

## Methods

|                                                                                                                                                                    |                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| [`__init__`](#qiskit.chemistry.drivers.Molecule.__init__ "qiskit.chemistry.drivers.Molecule.__init__")(geometry\[, multiplicity, charge, …])                       | **type geometry**`List`\[`Tuple`\[`str`, `List`\[`float`]]] |
| [`absolute_angle`](#qiskit.chemistry.drivers.Molecule.absolute_angle "qiskit.chemistry.drivers.Molecule.absolute_angle")(angle, geometry, atom\_trio)              | **type angle**`float`                                       |
| [`absolute_bending`](#qiskit.chemistry.drivers.Molecule.absolute_bending "qiskit.chemistry.drivers.Molecule.absolute_bending")(bend, geometry, atom\_trio)         | **type bend**`float`                                        |
| [`absolute_distance`](#qiskit.chemistry.drivers.Molecule.absolute_distance "qiskit.chemistry.drivers.Molecule.absolute_distance")(distance, geometry, atom\_pair)  | **type distance**`float`                                    |
| [`absolute_stretching`](#qiskit.chemistry.drivers.Molecule.absolute_stretching "qiskit.chemistry.drivers.Molecule.absolute_stretching")(perturbation, geometry, …) | **type perturbation**`float`                                |
| [`relative_bending`](#qiskit.chemistry.drivers.Molecule.relative_bending "qiskit.chemistry.drivers.Molecule.relative_bending")(bend, geometry, atom\_trio)         | **type bend**`float`                                        |
| [`relative_stretching`](#qiskit.chemistry.drivers.Molecule.relative_stretching "qiskit.chemistry.drivers.Molecule.relative_stretching")(perturbation, geometry, …) | **type perturbation**`float`                                |

## Attributes

|                                                                                                                       |                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| [`charge`](#qiskit.chemistry.drivers.Molecule.charge "qiskit.chemistry.drivers.Molecule.charge")                      | Get charge                                    |
| [`geometry`](#qiskit.chemistry.drivers.Molecule.geometry "qiskit.chemistry.drivers.Molecule.geometry")                | Get geometry accounting for any perturbations |
| [`masses`](#qiskit.chemistry.drivers.Molecule.masses "qiskit.chemistry.drivers.Molecule.masses")                      | Get masses                                    |
| [`multiplicity`](#qiskit.chemistry.drivers.Molecule.multiplicity "qiskit.chemistry.drivers.Molecule.multiplicity")    | Get multiplicity                              |
| [`perturbations`](#qiskit.chemistry.drivers.Molecule.perturbations "qiskit.chemistry.drivers.Molecule.perturbations") | Get perturbations                             |
| [`units`](#qiskit.chemistry.drivers.Molecule.units "qiskit.chemistry.drivers.Molecule.units")                         | The geometry coordinate units                 |

<span id="undefined" />

`classmethod absolute_angle(angle, geometry, atom_trio)`

**Parameters**

*   **angle** (`float`) – The magnitude of the perturbation in **radians**. **Positive bend is always in the direction toward Atom3.** the direction of increasing the starting angle.\*\*
*   **geometry** (`List`\[`Tuple`\[`str`, `List`\[`float`]]]) – The initial geometry to perturb.
*   **atom\_trio** (`Tuple`\[`int`, `int`, `int`]) – A tuple with three integers, indexing which atoms from the starting geometry should be bent apart. **Atom1 is bent \*away\* from Atom3 by an angle whose vertex is Atom2 and equal to \*\*angle**, while Atom2 and Atom3 remain stationary.\*\*

**Return type**

`List`\[`Tuple`\[`str`, `List`\[`float`]]]

**Returns**

end geometry

<span id="undefined" />

`classmethod absolute_bending(bend, geometry, atom_trio)`

**Parameters**

*   **bend** (`float`) – The magnitude of the perturbation in **radians**. **Positive bend is always in the direction toward Atom3.** the direction of increasing the starting angle.\*\*
*   **geometry** (`List`\[`Tuple`\[`str`, `List`\[`float`]]]) – The initial geometry to perturb.
*   **atom\_trio** (`Tuple`\[`int`, `int`, `int`]) – A tuple with three integers, indexing which atoms from the starting geometry should be bent apart. **Atom1 is bent \*away\* from Atom3 by an angle whose vertex is Atom2 and equal to the initial angle \*\*plus** bend, while Atom2 and Atom3 remain stationary.\*\*

**Return type**

`List`\[`Tuple`\[`str`, `List`\[`float`]]]

**Returns**

end geometry

<span id="undefined" />

`classmethod absolute_distance(distance, geometry, atom_pair)`

**Parameters**

*   **distance** (`float`) – The (new) distance between the two atoms.
*   **geometry** (`List`\[`Tuple`\[`str`, `List`\[`float`]]]) – The initial geometry to perturb.
*   **atom\_pair** (`Tuple`\[`int`, `int`]) – A tuple with two integers, indexing which atoms from the starting geometry should be moved apart. **Atom1 is moved away (at the given distance) from Atom2, while Atom2 remains stationary.**

**Return type**

`List`\[`Tuple`\[`str`, `List`\[`float`]]]

**Returns**

end geometry

<span id="undefined" />

`classmethod absolute_stretching(perturbation, geometry, atom_pair)`

**Parameters**

*   **perturbation** (`float`) – The magnitude of the stretch. (New distance = stretch + old distance)
*   **geometry** (`List`\[`Tuple`\[`str`, `List`\[`float`]]]) – The initial geometry to perturb.
*   **atom\_pair** (`Tuple`\[`int`, `int`]) – A tuple with two integers, indexing which atoms from the starting geometry should be stretched apart. **Atom1 is stretched away from Atom2, while Atom2 remains stationary.**

**Return type**

`List`\[`Tuple`\[`str`, `List`\[`float`]]]

**Returns**

end geometry

<span id="undefined" />

`property charge`

Get charge

**Return type**

`int`

<span id="undefined" />

`property geometry`

Get geometry accounting for any perturbations

**Return type**

`List`\[`Tuple`\[`str`, `List`\[`float`]]]

<span id="undefined" />

`property masses`

Get masses

**Return type**

`Optional`\[`List`\[`float`]]

<span id="undefined" />

`property multiplicity`

Get multiplicity

**Return type**

`int`

<span id="undefined" />

`property perturbations`

Get perturbations

**Return type**

`Optional`\[`List`\[`float`]]

<span id="undefined" />

`classmethod relative_bending(bend, geometry, atom_trio)`

**Parameters**

*   **bend** (`float`) – The magnitude of the perturbation in **radians**. **Positive bend is always in the direction toward Atom3.** the direction of increasing the starting angle.\*\*
*   **geometry** (`List`\[`Tuple`\[`str`, `List`\[`float`]]]) – The initial geometry to perturb.
*   **atom\_trio** (`Tuple`\[`int`, `int`, `int`]) – A tuple with three integers, indexing which atoms from the starting geometry should be bent apart. **Atom1 is bent \*away\* from Atom3 by an angle whose vertex is Atom2 and equal to the initial angle \*\*times** bend, while Atom2 and Atom3 remain stationary.\*\*

**Return type**

`List`\[`Tuple`\[`str`, `List`\[`float`]]]

**Returns**

end geometry

<span id="undefined" />

`classmethod relative_stretching(perturbation, geometry, atom_pair)`

**Parameters**

*   **perturbation** (`float`) – The magnitude of the stretch. (New distance = stretch \* old distance)
*   **geometry** (`List`\[`Tuple`\[`str`, `List`\[`float`]]]) – The initial geometry to perturb.
*   **atom\_pair** (`Tuple`\[`int`, `int`]) – A tuple with two integers, indexing which atoms from the starting geometry should be stretched apart. **Atom1 is stretched away from Atom2, while Atom2 remains stationary.**

**Return type**

`List`\[`Tuple`\[`str`, `List`\[`float`]]]

**Returns**

end geometry

<span id="undefined" />

`property units`

The geometry coordinate units
