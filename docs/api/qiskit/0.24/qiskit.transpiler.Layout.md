<span id="qiskit-transpiler-layout" />

# qiskit.transpiler.Layout

<span id="undefined" />

`Layout(input_dict=None)`

Two-ways dict to represent a Layout.

construct a Layout from a bijective dictionary, mapping virtual qubits to physical qubits

<span id="undefined" />

`__init__(input_dict=None)`

construct a Layout from a bijective dictionary, mapping virtual qubits to physical qubits

## Methods

|                                                                                                                                              |                                                                                                                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.transpiler.Layout.__init__ "qiskit.transpiler.Layout.__init__")(\[input\_dict])                                         | construct a Layout from a bijective dictionary, mapping virtual qubits to physical qubits                                                           |
| [`add`](#qiskit.transpiler.Layout.add "qiskit.transpiler.Layout.add")(virtual\_bit\[, physical\_bit])                                        | Adds a map element between bit and physical\_bit.                                                                                                   |
| [`add_register`](#qiskit.transpiler.Layout.add_register "qiskit.transpiler.Layout.add_register")(reg)                                        | Adds at the end physical\_qubits that map each bit in reg.                                                                                          |
| [`combine_into_edge_map`](#qiskit.transpiler.Layout.combine_into_edge_map "qiskit.transpiler.Layout.combine_into_edge_map")(another\_layout) | Combines self and another\_layout into an “edge map”.                                                                                               |
| [`copy`](#qiskit.transpiler.Layout.copy "qiskit.transpiler.Layout.copy")()                                                                   | Returns a copy of a Layout instance.                                                                                                                |
| [`from_dict`](#qiskit.transpiler.Layout.from_dict "qiskit.transpiler.Layout.from_dict")(input\_dict)                                         | Populates a Layout from a dictionary.                                                                                                               |
| [`from_intlist`](#qiskit.transpiler.Layout.from_intlist "qiskit.transpiler.Layout.from_intlist")(int\_list, \*qregs)                         | Converts a list of integers to a Layout mapping virtual qubits (index of the list) to physical qubits (the list values).                            |
| [`from_qubit_list`](#qiskit.transpiler.Layout.from_qubit_list "qiskit.transpiler.Layout.from_qubit_list")(qubit\_list)                       | Populates a Layout from a list containing virtual qubits, Qubit or None.                                                                            |
| [`generate_trivial_layout`](#qiskit.transpiler.Layout.generate_trivial_layout "qiskit.transpiler.Layout.generate_trivial_layout")(\*regs)    | Creates a trivial (“one-to-one”) Layout with the registers in regs.                                                                                 |
| [`get_physical_bits`](#qiskit.transpiler.Layout.get_physical_bits "qiskit.transpiler.Layout.get_physical_bits")()                            | Returns the dictionary where the keys are physical (qu)bits and the values are virtual (qu)bits.                                                    |
| [`get_registers`](#qiskit.transpiler.Layout.get_registers "qiskit.transpiler.Layout.get_registers")()                                        | Returns the registers in the layout \[QuantumRegister(2, ‘qr0’), QuantumRegister(3, ‘qr1’)] :returns: A list of Register in the layout :rtype: List |
| [`get_virtual_bits`](#qiskit.transpiler.Layout.get_virtual_bits "qiskit.transpiler.Layout.get_virtual_bits")()                               | Returns the dictionary where the keys are virtual (qu)bits and the values are physical (qu)bits.                                                    |
| [`order_based_on_type`](#qiskit.transpiler.Layout.order_based_on_type "qiskit.transpiler.Layout.order_based_on_type")(value1, value2)        | decides which one is physical/virtual based on the type.                                                                                            |
| [`reorder_bits`](#qiskit.transpiler.Layout.reorder_bits "qiskit.transpiler.Layout.reorder_bits")(bits)                                       | Given an ordered list of bits, reorder them according to this layout.                                                                               |
| [`swap`](#qiskit.transpiler.Layout.swap "qiskit.transpiler.Layout.swap")(left, right)                                                        | Swaps the map between left and right.                                                                                                               |

<span id="undefined" />

`add(virtual_bit, physical_bit=None)`

Adds a map element between bit and physical\_bit. If physical\_bit is not defined, bit will be mapped to a new physical bit (extending the length of the layout by one.)

**Parameters**

*   **virtual\_bit** (*tuple*) – A (qu)bit. For example, (QuantumRegister(3, ‘qr’), 2).
*   **physical\_bit** (*int*) – A physical bit. For example, 3.

<span id="undefined" />

`add_register(reg)`

Adds at the end physical\_qubits that map each bit in reg.

**Parameters**

**reg** (*Register*) – A (qu)bit Register. For example, QuantumRegister(3, ‘qr’).

<span id="undefined" />

`combine_into_edge_map(another_layout)`

Combines self and another\_layout into an “edge map”.

For example:

```python
   self       another_layout  resulting edge map
qr_1 -> 0        0 <- q_2         qr_1 -> q_2
qr_2 -> 2        2 <- q_1         qr_2 -> q_1
qr_3 -> 3        3 <- q_0         qr_3 -> q_0
```

The edge map is used to compose dags via, for example, compose.

**Parameters**

**another\_layout** ([*Layout*](#qiskit.transpiler.Layout "qiskit.transpiler.Layout")) – The other layout to combine.

**Returns**

A “edge map”.

**Return type**

dict

**Raises**

**LayoutError** – another\_layout can be bigger than self, but not smaller. Otherwise, raises.

<span id="undefined" />

`copy()`

Returns a copy of a Layout instance.

<span id="undefined" />

`from_dict(input_dict)`

Populates a Layout from a dictionary.

The dictionary must be a bijective mapping between virtual qubits (tuple) and physical qubits (int).

**Parameters**

**input\_dict** (*dict*) –

e.g.:

```python
{(QuantumRegister(3, 'qr'), 0): 0,
 (QuantumRegister(3, 'qr'), 1): 1,
 (QuantumRegister(3, 'qr'), 2): 2}

Can be written more concisely as follows:

* virtual to physical::

    {qr[0]: 0,
     qr[1]: 1,
     qr[2]: 2}

* physical to virtual::

    {0: qr[0],
     1: qr[1],
     2: qr[2]}
```

<span id="undefined" />

`static from_intlist(int_list, *qregs)`

Converts a list of integers to a Layout mapping virtual qubits (index of the list) to physical qubits (the list values).

**Parameters**

*   **int\_list** (*list*) – A list of integers.
*   **\*qregs** (*QuantumRegisters*) – The quantum registers to apply the layout to.

**Returns**

The corresponding Layout object.

**Return type**

[Layout](#qiskit.transpiler.Layout "qiskit.transpiler.Layout")

**Raises**

**LayoutError** – Invalid input layout.

<span id="undefined" />

`static from_qubit_list(qubit_list)`

Populates a Layout from a list containing virtual qubits, Qubit or None.

**Parameters**

**qubit\_list** (*list*) – e.g.: \[qr\[0], None, qr\[2], qr\[3]]

**Returns**

the corresponding Layout object

**Return type**

[Layout](#qiskit.transpiler.Layout "qiskit.transpiler.Layout")

**Raises**

**LayoutError** – If the elements are not Qubit or None

<span id="undefined" />

`static generate_trivial_layout(*regs)`

Creates a trivial (“one-to-one”) Layout with the registers in regs.

**Parameters**

**\*regs** (*Registers*) – registers to include in the layout.

**Returns**

A layout with all the regs in the given order.

**Return type**

[Layout](#qiskit.transpiler.Layout "qiskit.transpiler.Layout")

<span id="undefined" />

`get_physical_bits()`

Returns the dictionary where the keys are physical (qu)bits and the values are virtual (qu)bits.

<span id="undefined" />

`get_registers()`

Returns the registers in the layout \[QuantumRegister(2, ‘qr0’), QuantumRegister(3, ‘qr1’)] :returns: A list of Register in the layout :rtype: List

<span id="undefined" />

`get_virtual_bits()`

Returns the dictionary where the keys are virtual (qu)bits and the values are physical (qu)bits.

<span id="undefined" />

`static order_based_on_type(value1, value2)`

decides which one is physical/virtual based on the type. Returns (virtual, physical)

<span id="undefined" />

`reorder_bits(bits)`

Given an ordered list of bits, reorder them according to this layout.

The list of bits must exactly match the virtual bits in this layout.

**Parameters**

**bits** (*list\[Bit]*) – the bits to reorder.

**Returns**

ordered bits.

**Return type**

List

<span id="undefined" />

`swap(left, right)`

Swaps the map between left and right.

**Parameters**

*   **left** (*tuple or int*) – Item to swap with right.
*   **right** (*tuple or int*) – Item to swap with left.

**Raises**

**LayoutError** – If left and right have not the same type.
