<span id="qiskit-aqua-utils-random-hermitian" />

# qiskit.aqua.utils.random\_hermitian

<span id="undefined" />

`random_hermitian(N, eigs=None, K=None, eigrange=None, sparsity=None, trunc=None)`

Generate random hermitian (sparse) matrix with given properties. Sparsity is achieved by truncating Pauli matrices. Sparsity settings alternate the eigenvalues due to truncation.

**Parameters**

*   **N** (*int*) – size of matrix
*   **eigs** (*Union(list, tuple, np.ndarray)*) – list of N eigenvalues. Overrides K, eigrange
*   **K** (*Union(float, list, tuple)*) – condition number. Either use only condition number K or list/tuple of (K, lmin) or (K, lmin, sgn). Where lmin is the smallest eigenvalue and sign +/- 1 specifies if eigenvalues can be negative.
*   **eigrange** (*Union(list, tuple, nd.ndarray)*) – \[min, max] list for eigenvalue range. (default=\[0, 1])
*   **trunc** (*int*) – limit for number of Pauli matrices.
*   **sparsity** (*float*) – sparsity of matrix. Overrides trunc.

**Returns**

hermitian matrix

**Return type**

np.ndarray

**Raises**

**ValueError** – invalid matrix
