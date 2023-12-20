<span id="qiskit-providers-baseprovider" />

# qiskit.providers.BaseProvider

<span id="undefined" />

`BaseProvider(*args, **kwargs)`

Base class for a Backend Provider.

<span id="undefined" />

`__init__(*args, **kwargs)`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                    |                                                             |
| ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| [`__init__`](#qiskit.providers.BaseProvider.__init__ "qiskit.providers.BaseProvider.__init__")(\*args, \*\*kwargs) | Initialize self.                                            |
| [`backends`](#qiskit.providers.BaseProvider.backends "qiskit.providers.BaseProvider.backends")(\[name])            | Return a list of backends matching the specified filtering. |
| [`get_backend`](#qiskit.providers.BaseProvider.get_backend "qiskit.providers.BaseProvider.get_backend")(\[name])   | Return a single backend matching the specified filtering.   |

<span id="undefined" />

`abstract backends(name=None, **kwargs)`

Return a list of backends matching the specified filtering.

**Parameters**

*   **name** (*str*) – name of the backend.
*   **\*\*kwargs** – dict used for filtering.

**Returns**

**a list of Backends that match the filtering**

criteria.

**Return type**

list\[[BaseBackend](qiskit.providers.BaseBackend#qiskit.providers.BaseBackend "qiskit.providers.BaseBackend")]

<span id="undefined" />

`get_backend(name=None, **kwargs)`

Return a single backend matching the specified filtering.

**Parameters**

*   **name** (*str*) – name of the backend.
*   **\*\*kwargs** – dict used for filtering.

**Returns**

a backend matching the filtering.

**Return type**

[BaseBackend](qiskit.providers.BaseBackend#qiskit.providers.BaseBackend "qiskit.providers.BaseBackend")

**Raises**

[**QiskitBackendNotFoundError**](qiskit.providers.QiskitBackendNotFoundError#qiskit.providers.QiskitBackendNotFoundError "qiskit.providers.QiskitBackendNotFoundError") – if no backend could be found or more than one backend matches the filtering criteria.
