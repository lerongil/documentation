# qiskit.qpy.load

<span id="undefined" />

`load(file_obj, metadata_deserializer=None)`

Load a QPY binary file

This function is used to load a serialized QPY circuit file and create [`QuantumCircuit`](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") objects from its contents. For example:

```python
from qiskit.circuit import qpy_serialization

with open('bell.qpy', 'rb') as fd:
    circuits = qpy_serialization.load(fd)
```

or with a gzip compressed file:

```python
import gzip
from qiskit.circuit import qpy_serialization

with gzip.open('bell.qpy.gz', 'rb') as fd:
    circuits = qpy_serialization.load(fd)
```

which will read the contents of the qpy and return a list of [`QuantumCircuit`](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") objects from the file.

**Parameters**

*   **file\_obj** (*File*) – A file like object that contains the QPY binary data for a circuit
*   **metadata\_deserializer** (*JSONDecoder*) – An optional JSONDecoder class that will be used for the `cls` kwarg on the internal `json.load` call used to deserialize the JSON payload used for the [`QuantumCircuit.metadata`](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit.metadata "qiskit.circuit.QuantumCircuit.metadata") attribute for any circuits in the QPY file. If this is not specified the circuit metadata will be parsed as JSON with the stdlib `json.load()` function using the default `JSONDecoder` class.

**Returns**

**List of `QuantumCircuit`**

The list of [`QuantumCircuit`](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") objects contained in the QPY data. A list is always returned, even if there is only 1 circuit in the QPY data.

**Return type**

list

**Raises**

**QiskitError** – if `file_obj` is not a valid QPY file
