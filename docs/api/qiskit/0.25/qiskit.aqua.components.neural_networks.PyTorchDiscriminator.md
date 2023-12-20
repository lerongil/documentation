# qiskit.aqua.components.neural\_networks.PyTorchDiscriminator

<span id="undefined" />

`PyTorchDiscriminator(n_features=1, n_out=1)`

Discriminator based on PyTorch

**Parameters**

*   **n\_features** (`int`) – Dimension of input data vector.
*   **n\_out** (`int`) – Dimension of the discriminator’s output vector.

**Raises**

[**MissingOptionalLibraryError**](qiskit.aqua.MissingOptionalLibraryError#qiskit.aqua.MissingOptionalLibraryError "qiskit.aqua.MissingOptionalLibraryError") – Pytorch not installed

<span id="undefined" />

`__init__(n_features=1, n_out=1)`

**Parameters**

*   **n\_features** (`int`) – Dimension of input data vector.
*   **n\_out** (`int`) – Dimension of the discriminator’s output vector.

**Raises**

[**MissingOptionalLibraryError**](qiskit.aqua.MissingOptionalLibraryError#qiskit.aqua.MissingOptionalLibraryError "qiskit.aqua.MissingOptionalLibraryError") – Pytorch not installed

## Methods

|                                                                                                                                                                                                          |                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [`__init__`](#qiskit.aqua.components.neural_networks.PyTorchDiscriminator.__init__ "qiskit.aqua.components.neural_networks.PyTorchDiscriminator.__init__")(\[n\_features, n\_out])                       | **type n\_features**`int`                                          |
| [`get_label`](#qiskit.aqua.components.neural_networks.PyTorchDiscriminator.get_label "qiskit.aqua.components.neural_networks.PyTorchDiscriminator.get_label")(x\[, detach])                              | Get data sample labels, i.e. true or fake.                         |
| [`gradient_penalty`](#qiskit.aqua.components.neural_networks.PyTorchDiscriminator.gradient_penalty "qiskit.aqua.components.neural_networks.PyTorchDiscriminator.gradient_penalty")(x\[, lambda\_, k, c]) | Compute gradient penalty for discriminator optimization            |
| [`load_model`](#qiskit.aqua.components.neural_networks.PyTorchDiscriminator.load_model "qiskit.aqua.components.neural_networks.PyTorchDiscriminator.load_model")(load\_dir)                              | Load discriminator model                                           |
| [`loss`](#qiskit.aqua.components.neural_networks.PyTorchDiscriminator.loss "qiskit.aqua.components.neural_networks.PyTorchDiscriminator.loss")(x, y\[, weights])                                         | Loss function                                                      |
| [`save_model`](#qiskit.aqua.components.neural_networks.PyTorchDiscriminator.save_model "qiskit.aqua.components.neural_networks.PyTorchDiscriminator.save_model")(snapshot\_dir)                          | Save discriminator model                                           |
| [`set_seed`](#qiskit.aqua.components.neural_networks.PyTorchDiscriminator.set_seed "qiskit.aqua.components.neural_networks.PyTorchDiscriminator.set_seed")(seed)                                         | Set seed.                                                          |
| [`train`](#qiskit.aqua.components.neural_networks.PyTorchDiscriminator.train "qiskit.aqua.components.neural_networks.PyTorchDiscriminator.train")(data, weights\[, penalty, …])                          | Perform one training step w\.r.t to the discriminator’s parameters |

## Attributes

|                                                                                                                                                                                       |                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| [`discriminator_net`](#qiskit.aqua.components.neural_networks.PyTorchDiscriminator.discriminator_net "qiskit.aqua.components.neural_networks.PyTorchDiscriminator.discriminator_net") | Get discriminator |

<span id="undefined" />

`property discriminator_net`

Get discriminator

**Returns**

discriminator object

**Return type**

object

<span id="undefined" />

`get_label(x, detach=False)`

Get data sample labels, i.e. true or fake.

**Parameters**

*   **x** (*Union(numpy.ndarray, torch.Tensor)*) – Discriminator input, i.e. data sample.
*   **detach** (*bool*) – if None detach from torch tensor variable (optional)

**Returns**

Discriminator output, i.e. data label

**Return type**

torch.Tensor

<span id="undefined" />

`gradient_penalty(x, lambda_=5.0, k=0.01, c=1.0)`

Compute gradient penalty for discriminator optimization

**Parameters**

*   **x** (*numpy.ndarray*) – Generated data sample.
*   **lambda** (*float*) – Gradient penalty coefficient 1.
*   **k** (*float*) – Gradient penalty coefficient 2.
*   **c** (*float*) – Gradient penalty coefficient 3.

**Returns**

Gradient penalty.

**Return type**

torch.Tensor

<span id="undefined" />

`load_model(load_dir)`

Load discriminator model

**Parameters**

**load\_dir** (`str`) – file with stored pytorch discriminator model to be loaded

<span id="undefined" />

`loss(x, y, weights=None)`

Loss function

**Parameters**

*   **x** (*torch.Tensor*) – Discriminator output.
*   **y** (*torch.Tensor*) – Label of the data point
*   **weights** (*torch.Tensor*) – Data weights.

**Returns**

Loss w\.r.t to the generated data points.

**Return type**

torch.Tensor

<span id="undefined" />

`save_model(snapshot_dir)`

Save discriminator model

**Parameters**

**snapshot\_dir** (`str`) – directory path for saving the model

<span id="undefined" />

`set_seed(seed)`

Set seed.

**Parameters**

**seed** (`int`) – seed

<span id="undefined" />

`train(data, weights, penalty=False, quantum_instance=None, shots=None)`

Perform one training step w\.r.t to the discriminator’s parameters

**Parameters**

*   **data** (`Iterable`) – Data batch.
*   **weights** (`Iterable`) – Data sample weights.
*   **penalty** (`bool`) – Indicate whether or not penalty function is applied to the loss function. Ignored if no penalty function defined.
*   **quantum\_instance** ([*QuantumInstance*](qiskit.aqua.QuantumInstance#qiskit.aqua.QuantumInstance "qiskit.aqua.QuantumInstance")) – used to run Quantum network. Ignored for a classical network.
*   **shots** (`Optional`\[`int`]) – Number of shots for hardware or qasm execution. Ignored for classical network

**Returns**

**with discriminator loss and updated parameters.data, weights, penalty=True,**

quantum\_instance=None, shots=None) -> Dict\[str, Any]:

**Return type**

dict
