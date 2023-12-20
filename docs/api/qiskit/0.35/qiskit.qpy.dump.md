# qiskit.qpy.dump

<span id="undefined" />

`dump(circuits, file_obj, metadata_serializer=None)`

Write QPY binary data to a file

This function is used to save a circuit to a file for later use or transfer between machines. The QPY format is backwards compatible and can be loaded with future versions of Qiskit.

For example:

```python
from qiskit.circuit import QuantumCircuit
from qiskit.circuit import qpy_serialization

qc = QuantumCircuit(2, name='Bell', metadata={'test': True})
qc.h(0)
qc.cx(0, 1)
qc.measure_all()
```

from this you can write the qpy data to a file:

```python
with open('bell.qpy', 'wb') as fd:
    qpy_serialization.dump(qc, fd)
```

or a gzip compressed file:

```python
import gzip

with gzip.open('bell.qpy.gz', 'wb') as fd:
    qpy_serialization.dump(qc, fd)
```

Which will save the qpy serialized circuit to the provided file.

**Parameters**

*   **circuits** (*list or* [*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – The quantum circuit object(s) to store in the specified file like object. This can either be a single QuantumCircuit object or a list of QuantumCircuits.
*   **file\_obj** (*file*) – The file like object to write the QPY data too
*   **metadata\_serializer** (*JSONEncoder*) – An optional JSONEncoder class that will be passed the [`QuantumCircuit.metadata`](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit.metadata "qiskit.circuit.QuantumCircuit.metadata") dictionary for each circuit in `circuits` and will be used as the `cls` kwarg on the `json.dump()` call to JSON serialize that dictionary.
