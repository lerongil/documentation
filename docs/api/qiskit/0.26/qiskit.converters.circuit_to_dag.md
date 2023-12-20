# qiskit.converters.circuit\_to\_dag

<span id="undefined" />

`circuit_to_dag(circuit)`

Build a `DAGCircuit` object from a `QuantumCircuit`.

**Parameters**

**circuit** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – the input circuit.

**Returns**

the DAG representing the input circuit.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

## Example

```python
from qiskit import QuantumRegister, ClassicalRegister, QuantumCircuit
from qiskit.dagcircuit import DAGCircuit
from qiskit.converters import circuit_to_dag
from qiskit.visualization import dag_drawer
%matplotlib inline

q = QuantumRegister(3, 'q')
c = ClassicalRegister(3, 'c')
circ = QuantumCircuit(q, c)
circ.h(q[0])
circ.cx(q[0], q[1])
circ.measure(q[0], c[0])
circ.rz(0.5, q[1]).c_if(c, 2)
dag = circuit_to_dag(circ)
dag_drawer(dag)
```

![../\_images/qiskit.converters.circuit\_to\_dag\_0\_0.png](/images/api/qiskit/0.26/qiskit.converters.circuit_to_dag_0_0.png)
