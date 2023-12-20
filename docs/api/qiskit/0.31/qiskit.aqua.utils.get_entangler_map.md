# qiskit.aqua.utils.get\_entangler\_map

<span id="undefined" />

`get_entangler_map(map_type, num_qubits, offset=0)`

Utility method to get an entangler map among qubits.

**Parameters**

*   **map\_type** (*str*) – ‘full’ entangles each qubit with all the subsequent ones ‘linear’ entangles each qubit with the next ‘sca’ (shifted circular alternating entanglement) is a circular entanglement where the ‘long’ entanglement is shifted by one position every block and every block the role or control/target qubits alternate
*   **num\_qubits** (*int*) – Number of qubits for which the map is needed
*   **offset** (*int*) – Some map\_types (e.g. ‘sca’) can shift the gates in the entangler map by the specified integer offset.

**Returns**

A map of qubit index to an array of indexes to which this should be entangled

**Return type**

list

**Raises**

**ValueError** – if map\_type is not valid.
