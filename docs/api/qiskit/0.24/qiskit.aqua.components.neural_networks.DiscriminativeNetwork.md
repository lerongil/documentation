<span id="qiskit-aqua-components-neural-networks-discriminativenetwork" />

# qiskit.aqua.components.neural\_networks.DiscriminativeNetwork

<span id="undefined" />

`DiscriminativeNetwork`

Base class for discriminative Quantum or Classical Neural Networks.

This method should initialize the module but raise an exception if a required component of the module is not available.

<span id="undefined" />

`abstract __init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                                                   |                                                                                                        |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| [`__init__`](#qiskit.aqua.components.neural_networks.DiscriminativeNetwork.__init__ "qiskit.aqua.components.neural_networks.DiscriminativeNetwork.__init__")()                    | Initialize self.                                                                                       |
| [`get_label`](#qiskit.aqua.components.neural_networks.DiscriminativeNetwork.get_label "qiskit.aqua.components.neural_networks.DiscriminativeNetwork.get_label")(x)                | Apply quantum/classical neural network to the given input sample and compute the respective data label |
| [`loss`](#qiskit.aqua.components.neural_networks.DiscriminativeNetwork.loss "qiskit.aqua.components.neural_networks.DiscriminativeNetwork.loss")(x, y\[, weights])                | Loss function used for optimization                                                                    |
| [`set_seed`](#qiskit.aqua.components.neural_networks.DiscriminativeNetwork.set_seed "qiskit.aqua.components.neural_networks.DiscriminativeNetwork.set_seed")(seed)                | Set seed.                                                                                              |
| [`train`](#qiskit.aqua.components.neural_networks.DiscriminativeNetwork.train "qiskit.aqua.components.neural_networks.DiscriminativeNetwork.train")(data, weights\[, penalty, …]) | Perform one training step w\.r.t to the discriminator’s parameters                                     |

<span id="undefined" />

`abstract get_label(x)`

Apply quantum/classical neural network to the given input sample and compute the respective data label

**Parameters**

**x** (*Discriminator*) – input, i.e. data sample.

**Raises**

**NotImplementedError** – not implemented

<span id="undefined" />

`abstract loss(x, y, weights=None)`

Loss function used for optimization

**Parameters**

*   **x** (*Discriminator*) – output.
*   **y** (*Label*) – the data point
*   **weights** (*numpy.ndarray*) – Data weights.

**Returns**

Loss w\.r.t to the generated data points.

**Raises**

**NotImplementedError** – not implemented

<span id="undefined" />

`abstract set_seed(seed)`

Set seed.

**Parameters**

**seed** (*int*) – seed

**Raises**

**NotImplementedError** – not implemented

<span id="undefined" />

`abstract train(data, weights, penalty=False, quantum_instance=None, shots=None)`

Perform one training step w\.r.t to the discriminator’s parameters

**Parameters**

*   **data** (*numpy.ndarray*) – Data batch.
*   **weights** (*numpy.ndarray*) – Data sample weights.
*   **penalty** (*bool*) – Indicate whether or not penalty function is applied to the loss function. Ignored if no penalty function defined.
*   **quantum\_instance** ([*QuantumInstance*](qiskit.aqua.QuantumInstance#qiskit.aqua.QuantumInstance "qiskit.aqua.QuantumInstance")) – used to run Quantum network. Ignored for a classical network.
*   **shots** (*int*) – Number of shots for hardware or qasm execution. Ignored for classical network

**Returns**

with Discriminator loss and updated parameters.

**Return type**

dict

**Raises**

**NotImplementedError** – not implemented
