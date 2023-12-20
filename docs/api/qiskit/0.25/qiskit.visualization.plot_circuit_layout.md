# qiskit.visualization.plot\_circuit\_layout

<span id="undefined" />

`plot_circuit_layout(circuit, backend, view='virtual')`

Plot the layout of a circuit transpiled for a given target backend.

**Parameters**

*   **circuit** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – Input quantum circuit.
*   **backend** ([*BaseBackend*](qiskit.providers.BaseBackend#qiskit.providers.BaseBackend "qiskit.providers.BaseBackend")) – Target backend.
*   **view** (*str*) – Layout view: either ‘virtual’ or ‘physical’.

**Returns**

A matplotlib figure showing layout.

**Return type**

Figure

**Raises**

*   **QiskitError** – Invalid view type given.
*   [**VisualizationError**](qiskit.visualization.VisualizationError#qiskit.visualization.VisualizationError "qiskit.visualization.VisualizationError") – Circuit has no layout attribute.

## Example

```python
import numpy as np
from qiskit import QuantumCircuit, IBMQ, transpile
from qiskit.visualization import plot_histogram, plot_gate_map, plot_circuit_layout
from qiskit.tools.monitor import job_monitor
import matplotlib.pyplot as plt
%matplotlib inline

IBMQ.load_account()

ghz = QuantumCircuit(3, 3)
ghz.h(0)
for idx in range(1,3):
    ghz.cx(0,idx)
ghz.measure(range(3), range(3))

provider = IBMQ.get_provider(hub='ibm-q')
backend = provider.get_backend('ibmq_vigo')
new_circ_lv3 = transpile(ghz, backend=backend, optimization_level=3)
plot_circuit_layout(new_circ_lv3, backend)
```

![../\_images/qiskit.visualization.plot\_circuit\_layout\_1\_0.png](/images/api/qiskit/0.25/qiskit.visualization.plot_circuit_layout_1_0.png) ![../\_images/qiskit.visualization.plot\_circuit\_layout\_1\_1.png](/images/api/qiskit/0.25/qiskit.visualization.plot_circuit_layout_1_1.png)
