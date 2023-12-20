# qiskit.visualization.plot\_bloch\_multivector

<span id="undefined" />

`plot_bloch_multivector(state, title='', figsize=None, *, rho=None, reverse_bits=False)`

Plot the Bloch sphere.

Plot a sphere, axes, the Bloch vector, and its projections onto each axis.

**Parameters**

*   **state** ([*Statevector*](qiskit.quantum_info.Statevector#qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector")  *or*[*DensityMatrix*](qiskit.quantum_info.DensityMatrix#qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix") *or ndarray*) – an N-qubit quantum state.
*   **title** (*str*) – a string that represents the plot title
*   **figsize** (*tuple*) – Has no effect, here for compatibility only.
*   **reverse\_bits** (*bool*) – If True, plots qubits following Qiskit’s convention \[Default:False].

**Returns**

A matplotlib figure instance.

**Return type**

matplotlib.Figure

**Raises**

*   **ImportError** – Requires matplotlib.
*   [**VisualizationError**](qiskit.visualization.VisualizationError#qiskit.visualization.VisualizationError "qiskit.visualization.VisualizationError") – if input is not a valid N-qubit state.

## Example

```python
from qiskit import QuantumCircuit
from qiskit.quantum_info import Statevector
from qiskit.visualization import plot_bloch_multivector
%matplotlib inline

qc = QuantumCircuit(2)
qc.h(0)
qc.cx(0, 1)

state = Statevector.from_instruction(qc)
plot_bloch_multivector(state, title="New Bloch Multivector", reverse_bits=False)
```

![../\_images/qiskit.visualization.plot\_bloch\_multivector\_0\_0.png](/images/api/qiskit/0.27/qiskit.visualization.plot_bloch_multivector_0_0.png) ![../\_images/qiskit.visualization.plot\_bloch\_multivector\_0\_1.png](/images/api/qiskit/0.27/qiskit.visualization.plot_bloch_multivector_0_1.png)
