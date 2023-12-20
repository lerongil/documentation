<span id="qiskit-aqua-algorithms-qgan" />

# qiskit.aqua.algorithms.QGAN

<span id="undefined" />

`QGAN(data, bounds=None, num_qubits=None, batch_size=500, num_epochs=3000, seed=7, discriminator=None, generator=None, tol_rel_ent=None, snapshot_dir=None, quantum_instance=None)`

The Quantum Generative Adversarial Network algorithm.

The qGAN \[1] is a hybrid quantum-classical algorithm used for generative modeling tasks.

This adaptive algorithm uses the interplay of a generative [`GenerativeNetwork`](qiskit.aqua.components.neural_networks.GenerativeNetwork#qiskit.aqua.components.neural_networks.GenerativeNetwork "qiskit.aqua.components.neural_networks.GenerativeNetwork") and a discriminative [`DiscriminativeNetwork`](qiskit.aqua.components.neural_networks.DiscriminativeNetwork#qiskit.aqua.components.neural_networks.DiscriminativeNetwork "qiskit.aqua.components.neural_networks.DiscriminativeNetwork") network to learn the probability distribution underlying given training data.

These networks are trained in alternating optimization steps, where the discriminator tries to differentiate between training data samples and data samples from the generator and the generator aims at generating samples which the discriminator classifies as training data samples. Eventually, the quantum generator learns the training data’s underlying probability distribution. The trained quantum generator loads a quantum state which is a model of the target distribution.

**References:**

**\[1] Zoufal et al.,**

[Quantum Generative Adversarial Networks for learning and loading random distributions](https://www.nature.com/articles/s41534-019-0223-2)

**Parameters**

*   **data** (`ndarray`) – Training data of dimension k
*   **bounds** (`Optional`\[`ndarray`]) – k min/max data values \[\[min\_0,max\_0],…,\[min\_k-1,max\_k-1]] if univariate data: \[min\_0,max\_0]
*   **num\_qubits** (`Optional`\[`ndarray`]) – k numbers of qubits to determine representation resolution, i.e. n qubits enable the representation of 2\*\*n values \[num\_qubits\_0,…, num\_qubits\_k-1]
*   **batch\_size** (`int`) – Batch size, has a min. value of 1.
*   **num\_epochs** (`int`) – Number of training epochs
*   **seed** (`int`) – Random number seed
*   **discriminator** (`Optional`\[`DiscriminativeNetwork`]) – Discriminates between real and fake data samples
*   **generator** (`Optional`\[`GenerativeNetwork`]) – Generates ‘fake’ data samples
*   **tol\_rel\_ent** (`Optional`\[`float`]) – Set tolerance level for relative entropy. If the training achieves relative entropy equal or lower than tolerance it finishes.
*   **snapshot\_dir** (`Optional`\[`str`]) – Directory in to which to store cvs file with parameters, if None (default) then no cvs file is created.
*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – Quantum Instance or Backend

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – invalid input

<span id="undefined" />

`__init__(data, bounds=None, num_qubits=None, batch_size=500, num_epochs=3000, seed=7, discriminator=None, generator=None, tol_rel_ent=None, snapshot_dir=None, quantum_instance=None)`

**Parameters**

*   **data** (`ndarray`) – Training data of dimension k
*   **bounds** (`Optional`\[`ndarray`]) – k min/max data values \[\[min\_0,max\_0],…,\[min\_k-1,max\_k-1]] if univariate data: \[min\_0,max\_0]
*   **num\_qubits** (`Optional`\[`ndarray`]) – k numbers of qubits to determine representation resolution, i.e. n qubits enable the representation of 2\*\*n values \[num\_qubits\_0,…, num\_qubits\_k-1]
*   **batch\_size** (`int`) – Batch size, has a min. value of 1.
*   **num\_epochs** (`int`) – Number of training epochs
*   **seed** (`int`) – Random number seed
*   **discriminator** (`Optional`\[`DiscriminativeNetwork`]) – Discriminates between real and fake data samples
*   **generator** (`Optional`\[`GenerativeNetwork`]) – Generates ‘fake’ data samples
*   **tol\_rel\_ent** (`Optional`\[`float`]) – Set tolerance level for relative entropy. If the training achieves relative entropy equal or lower than tolerance it finishes.
*   **snapshot\_dir** (`Optional`\[`str`]) – Directory in to which to store cvs file with parameters, if None (default) then no cvs file is created.
*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – Quantum Instance or Backend

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – invalid input

## Methods

|                                                                                                                                         |                                                              |
| --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [`__init__`](#qiskit.aqua.algorithms.QGAN.__init__ "qiskit.aqua.algorithms.QGAN.__init__")(data\[, bounds, num\_qubits, …])             | **type data**`ndarray`                                       |
| [`get_rel_entr`](#qiskit.aqua.algorithms.QGAN.get_rel_entr "qiskit.aqua.algorithms.QGAN.get_rel_entr")()                                | Get relative entropy between target and trained distribution |
| [`run`](#qiskit.aqua.algorithms.QGAN.run "qiskit.aqua.algorithms.QGAN.run")(\[quantum\_instance])                                       | Execute the algorithm with selected backend.                 |
| [`set_backend`](#qiskit.aqua.algorithms.QGAN.set_backend "qiskit.aqua.algorithms.QGAN.set_backend")(backend, \*\*kwargs)                | Sets backend with configuration.                             |
| [`set_discriminator`](#qiskit.aqua.algorithms.QGAN.set_discriminator "qiskit.aqua.algorithms.QGAN.set_discriminator")(\[discriminator]) | Initialize discriminator.                                    |
| [`set_generator`](#qiskit.aqua.algorithms.QGAN.set_generator "qiskit.aqua.algorithms.QGAN.set_generator")(\[generator\_circuit, …])     | Initialize generator.                                        |
| [`train`](#qiskit.aqua.algorithms.QGAN.train "qiskit.aqua.algorithms.QGAN.train")()                                                     | Train the qGAN                                               |

## Attributes

|                                                                                                                    |                                                                  |
| ------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| [`backend`](#qiskit.aqua.algorithms.QGAN.backend "qiskit.aqua.algorithms.QGAN.backend")                            | Returns backend.                                                 |
| [`d_loss`](#qiskit.aqua.algorithms.QGAN.d_loss "qiskit.aqua.algorithms.QGAN.d_loss")                               | Returns discriminator loss                                       |
| [`discriminator`](#qiskit.aqua.algorithms.QGAN.discriminator "qiskit.aqua.algorithms.QGAN.discriminator")          | Returns discriminator                                            |
| [`g_loss`](#qiskit.aqua.algorithms.QGAN.g_loss "qiskit.aqua.algorithms.QGAN.g_loss")                               | Returns generator loss                                           |
| [`generator`](#qiskit.aqua.algorithms.QGAN.generator "qiskit.aqua.algorithms.QGAN.generator")                      | Returns generator                                                |
| [`quantum_instance`](#qiskit.aqua.algorithms.QGAN.quantum_instance "qiskit.aqua.algorithms.QGAN.quantum_instance") | Returns quantum instance.                                        |
| [`random`](#qiskit.aqua.algorithms.QGAN.random "qiskit.aqua.algorithms.QGAN.random")                               | Return a numpy random.                                           |
| [`rel_entr`](#qiskit.aqua.algorithms.QGAN.rel_entr "qiskit.aqua.algorithms.QGAN.rel_entr")                         | Returns relative entropy between target and trained distribution |
| [`seed`](#qiskit.aqua.algorithms.QGAN.seed "qiskit.aqua.algorithms.QGAN.seed")                                     | Returns random seed                                              |
| [`tol_rel_ent`](#qiskit.aqua.algorithms.QGAN.tol_rel_ent "qiskit.aqua.algorithms.QGAN.tol_rel_ent")                | Returns tolerance for relative entropy                           |

<span id="undefined" />

`property backend`

Returns backend.

**Return type**

`Union`\[`Backend`, `BaseBackend`]

<span id="undefined" />

`property d_loss`

Returns discriminator loss

**Return type**

`List`\[`float`]

<span id="undefined" />

`property discriminator`

Returns discriminator

<span id="undefined" />

`property g_loss`

Returns generator loss

**Return type**

`List`\[`float`]

<span id="undefined" />

`property generator`

Returns generator

<span id="undefined" />

`get_rel_entr()`

Get relative entropy between target and trained distribution

**Return type**

`float`

<span id="undefined" />

`property quantum_instance`

Returns quantum instance.

**Return type**

`Optional`\[`QuantumInstance`]

<span id="undefined" />

`property random`

Return a numpy random.

<span id="undefined" />

`property rel_entr`

Returns relative entropy between target and trained distribution

**Return type**

`List`\[`float`]

<span id="undefined" />

`run(quantum_instance=None, **kwargs)`

Execute the algorithm with selected backend.

**Parameters**

*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – the experimental setting.
*   **kwargs** (*dict*) – kwargs

**Returns**

results of an algorithm.

**Return type**

dict

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – If a quantum instance or backend has not been provided

<span id="undefined" />

`property seed`

Returns random seed

<span id="undefined" />

`set_backend(backend, **kwargs)`

Sets backend with configuration.

**Return type**

`None`

<span id="undefined" />

`set_discriminator(discriminator=None)`

Initialize discriminator.

**Parameters**

**discriminator** (*Discriminator*) – discriminator

<span id="undefined" />

`set_generator(generator_circuit=None, generator_init_params=None, generator_optimizer=None)`

Initialize generator.

**Parameters**

*   **generator\_circuit** (`Union`\[`UnivariateVariationalDistribution`, `MultivariateVariationalDistribution`, `QuantumCircuit`, `None`]) – parameterized quantum circuit which sets the structure of the quantum generator
*   **generator\_init\_params** (`Optional`\[`ndarray`]) – initial parameters for the generator circuit
*   **generator\_optimizer** (`Optional`\[`Optimizer`]) – optimizer to be used for the training of the generator

<span id="undefined" />

`property tol_rel_ent`

Returns tolerance for relative entropy

<span id="undefined" />

`train()`

Train the qGAN

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – Batch size bigger than the number of items in the truncated data set
