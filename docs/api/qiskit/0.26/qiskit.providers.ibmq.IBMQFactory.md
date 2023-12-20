# qiskit.providers.ibmq.IBMQFactory

<span id="undefined" />

`IBMQFactory`

Factory and account manager for IBM Quantum Experience.

IBMQFactory constructor.

<span id="undefined" />

`__init__()`

IBMQFactory constructor.

## Methods

|                                                                                                                                                              |                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.providers.ibmq.IBMQFactory.__init__ "qiskit.providers.ibmq.IBMQFactory.__init__")()                                                     | IBMQFactory constructor.                                                          |
| [`active_account`](#qiskit.providers.ibmq.IBMQFactory.active_account "qiskit.providers.ibmq.IBMQFactory.active_account")()                                   | Return the IBM Quantum Experience account currently in use for the session.       |
| [`delete_account`](#qiskit.providers.ibmq.IBMQFactory.delete_account "qiskit.providers.ibmq.IBMQFactory.delete_account")()                                   | Delete the saved account from disk.                                               |
| [`disable_account`](#qiskit.providers.ibmq.IBMQFactory.disable_account "qiskit.providers.ibmq.IBMQFactory.disable_account")()                                | Disable the account currently in use for the session.                             |
| [`enable_account`](#qiskit.providers.ibmq.IBMQFactory.enable_account "qiskit.providers.ibmq.IBMQFactory.enable_account")(token\[, url, hub, group, project]) | Authenticate against IBM Quantum Experience for use during the session.           |
| [`get_provider`](#qiskit.providers.ibmq.IBMQFactory.get_provider "qiskit.providers.ibmq.IBMQFactory.get_provider")(\[hub, group, project])                   | Return a provider for a single hub/group/project combination.                     |
| [`load_account`](#qiskit.providers.ibmq.IBMQFactory.load_account "qiskit.providers.ibmq.IBMQFactory.load_account")()                                         | Authenticate against IBM Quantum Experience from stored credentials.              |
| [`providers`](#qiskit.providers.ibmq.IBMQFactory.providers "qiskit.providers.ibmq.IBMQFactory.providers")(\[hub, group, project])                            | Return a list of providers, subject to optional filtering.                        |
| [`save_account`](#qiskit.providers.ibmq.IBMQFactory.save_account "qiskit.providers.ibmq.IBMQFactory.save_account")(token\[, url, hub, group, …])             | Save the account to disk for future use.                                          |
| [`stored_account`](#qiskit.providers.ibmq.IBMQFactory.stored_account "qiskit.providers.ibmq.IBMQFactory.stored_account")()                                   | List the account stored on disk.                                                  |
| [`update_account`](#qiskit.providers.ibmq.IBMQFactory.update_account "qiskit.providers.ibmq.IBMQFactory.update_account")(\[force])                           | Interactive helper for migrating stored credentials to IBM Quantum Experience v2. |

<span id="undefined" />

`active_account()`

Return the IBM Quantum Experience account currently in use for the session.

**Return type**

`Optional`\[`Dict`\[`str`, `str`]]

**Returns**

Information about the account currently in the session.

<span id="undefined" />

`static delete_account()`

Delete the saved account from disk.

**Raises**

*   [**IBMQAccountCredentialsNotFound**](qiskit.providers.ibmq.IBMQAccountCredentialsNotFound#qiskit.providers.ibmq.IBMQAccountCredentialsNotFound "qiskit.providers.ibmq.IBMQAccountCredentialsNotFound") – If no valid IBM Quantum Experience credentials can be found on disk.
*   [**IBMQAccountMultipleCredentialsFound**](qiskit.providers.ibmq.IBMQAccountMultipleCredentialsFound#qiskit.providers.ibmq.IBMQAccountMultipleCredentialsFound "qiskit.providers.ibmq.IBMQAccountMultipleCredentialsFound") – If multiple IBM Quantum Experience credentials are found on disk.
*   [**IBMQAccountCredentialsInvalidUrl**](qiskit.providers.ibmq.IBMQAccountCredentialsInvalidUrl#qiskit.providers.ibmq.IBMQAccountCredentialsInvalidUrl "qiskit.providers.ibmq.IBMQAccountCredentialsInvalidUrl") – If invalid IBM Quantum Experience credentials are found on disk.

**Return type**

`None`

<span id="undefined" />

`disable_account()`

Disable the account currently in use for the session.

**Raises**

[**IBMQAccountCredentialsNotFound**](qiskit.providers.ibmq.IBMQAccountCredentialsNotFound#qiskit.providers.ibmq.IBMQAccountCredentialsNotFound "qiskit.providers.ibmq.IBMQAccountCredentialsNotFound") – If no account is in use for the session.

**Return type**

`None`

<span id="undefined" />

`enable_account(token, url='https://auth.quantum-computing.ibm.com/api', hub=None, group=None, project=None, **kwargs)`

Authenticate against IBM Quantum Experience for use during the session.

<Admonition title="Note" type="note">
  With version 0.4 of this `qiskit-ibmq-provider` package, use of the legacy Quantum Experience and Qconsole (also known as the IBM Quantum Experience v1) credentials is no longer supported.
</Admonition>

**Parameters**

*   **token** (`str`) – IBM Quantum Experience token.

*   **url** (`str`) – URL for the IBM Quantum Experience authentication server.

*   **hub** (`Optional`\[`str`]) – Name of the hub to use.

*   **group** (`Optional`\[`str`]) – Name of the group to use.

*   **project** (`Optional`\[`str`]) – Name of the project to use.

*   **\*\*kwargs** –

    Additional settings for the connection:

    *   proxies (dict): proxy configuration.
    *   verify (bool): verify the server’s TLS certificate.

**Return type**

`Optional`\[`AccountProvider`]

**Returns**

If hub, group, and project are specified, the corresponding provider is returned. Otherwise the provider for the open access project is returned.

**Raises**

*   [**IBMQAccountError**](qiskit.providers.ibmq.IBMQAccountError#qiskit.providers.ibmq.IBMQAccountError "qiskit.providers.ibmq.IBMQAccountError") – If an IBM Quantum Experience account is already in use for the session.
*   [**IBMQAccountCredentialsInvalidUrl**](qiskit.providers.ibmq.IBMQAccountCredentialsInvalidUrl#qiskit.providers.ibmq.IBMQAccountCredentialsInvalidUrl "qiskit.providers.ibmq.IBMQAccountCredentialsInvalidUrl") – If the URL specified is not a valid IBM Quantum Experience authentication URL.
*   [**IBMQProviderError**](qiskit.providers.ibmq.IBMQProviderError#qiskit.providers.ibmq.IBMQProviderError "qiskit.providers.ibmq.IBMQProviderError") – If no provider matches the specified criteria, or more than one provider matches the specified criteria.

<span id="undefined" />

`get_provider(hub=None, group=None, project=None)`

Return a provider for a single hub/group/project combination.

**Parameters**

*   **hub** (`Optional`\[`str`]) – Name of the hub.
*   **group** (`Optional`\[`str`]) – Name of the group.
*   **project** (`Optional`\[`str`]) – Name of the project.

**Return type**

`AccountProvider`

**Returns**

A provider that matches the specified criteria.

**Raises**

[**IBMQProviderError**](qiskit.providers.ibmq.IBMQProviderError#qiskit.providers.ibmq.IBMQProviderError "qiskit.providers.ibmq.IBMQProviderError") – If no provider matches the specified criteria, or more than one provider matches the specified criteria.

<span id="undefined" />

`load_account()`

Authenticate against IBM Quantum Experience from stored credentials.

**Return type**

`Optional`\[`AccountProvider`]

**Returns**

If the configuration file specifies a default provider, it is returned. Otherwise the provider for the open access project is returned.

**Raises**

*   [**IBMQAccountCredentialsInvalidFormat**](qiskit.providers.ibmq.IBMQAccountCredentialsInvalidFormat#qiskit.providers.ibmq.IBMQAccountCredentialsInvalidFormat "qiskit.providers.ibmq.IBMQAccountCredentialsInvalidFormat") – If the default provider stored on disk could not be parsed.
*   [**IBMQAccountCredentialsNotFound**](qiskit.providers.ibmq.IBMQAccountCredentialsNotFound#qiskit.providers.ibmq.IBMQAccountCredentialsNotFound "qiskit.providers.ibmq.IBMQAccountCredentialsNotFound") – If no IBM Quantum Experience credentials can be found.
*   [**IBMQAccountMultipleCredentialsFound**](qiskit.providers.ibmq.IBMQAccountMultipleCredentialsFound#qiskit.providers.ibmq.IBMQAccountMultipleCredentialsFound "qiskit.providers.ibmq.IBMQAccountMultipleCredentialsFound") – If multiple IBM Quantum Experience credentials are found.
*   [**IBMQAccountCredentialsInvalidUrl**](qiskit.providers.ibmq.IBMQAccountCredentialsInvalidUrl#qiskit.providers.ibmq.IBMQAccountCredentialsInvalidUrl "qiskit.providers.ibmq.IBMQAccountCredentialsInvalidUrl") – If invalid IBM Quantum Experience credentials are found.
*   [**IBMQProviderError**](qiskit.providers.ibmq.IBMQProviderError#qiskit.providers.ibmq.IBMQProviderError "qiskit.providers.ibmq.IBMQProviderError") – If the default provider stored on disk could not be found.

<span id="undefined" />

`providers(hub=None, group=None, project=None)`

Return a list of providers, subject to optional filtering.

**Parameters**

*   **hub** (`Optional`\[`str`]) – Name of the hub.
*   **group** (`Optional`\[`str`]) – Name of the group.
*   **project** (`Optional`\[`str`]) – Name of the project.

**Return type**

`List`\[`AccountProvider`]

**Returns**

A list of providers that match the specified criteria.

<span id="undefined" />

`static save_account(token, url='https://auth.quantum-computing.ibm.com/api', hub=None, group=None, project=None, overwrite=False, **kwargs)`

Save the account to disk for future use.

<Admonition title="Note" type="note">
  If storing a default provider to disk, all three parameters hub, group, project must be specified.
</Admonition>

**Parameters**

*   **token** (`str`) – IBM Quantum Experience token.

*   **url** (`str`) – URL for the IBM Quantum Experience authentication server.

*   **hub** (`Optional`\[`str`]) – Name of the hub for the default provider to store on disk.

*   **group** (`Optional`\[`str`]) – Name of the group for the default provider to store on disk.

*   **project** (`Optional`\[`str`]) – Name of the project for the default provider to store on disk.

*   **overwrite** (`bool`) – Overwrite existing credentials.

*   **\*\*kwargs** –

    *   proxies (dict): Proxy configuration for the server.
    *   verify (bool): If False, ignores SSL certificates errors

**Raises**

*   [**IBMQAccountCredentialsInvalidUrl**](qiskit.providers.ibmq.IBMQAccountCredentialsInvalidUrl#qiskit.providers.ibmq.IBMQAccountCredentialsInvalidUrl "qiskit.providers.ibmq.IBMQAccountCredentialsInvalidUrl") – If the url is not a valid IBM Quantum Experience authentication URL.
*   [**IBMQAccountCredentialsInvalidToken**](qiskit.providers.ibmq.IBMQAccountCredentialsInvalidToken#qiskit.providers.ibmq.IBMQAccountCredentialsInvalidToken "qiskit.providers.ibmq.IBMQAccountCredentialsInvalidToken") – If the token is not a valid IBM Quantum Experience token.
*   **IBMQAccountValueError** – If only one or two parameters from hub, group, project are specified.

**Return type**

`None`

<span id="undefined" />

`static stored_account()`

List the account stored on disk.

**Return type**

`Dict`\[`str`, `str`]

**Returns**

A dictionary with information about the account stored on disk.

**Raises**

*   [**IBMQAccountMultipleCredentialsFound**](qiskit.providers.ibmq.IBMQAccountMultipleCredentialsFound#qiskit.providers.ibmq.IBMQAccountMultipleCredentialsFound "qiskit.providers.ibmq.IBMQAccountMultipleCredentialsFound") – If multiple IBM Quantum Experience credentials are found on disk.
*   [**IBMQAccountCredentialsInvalidUrl**](qiskit.providers.ibmq.IBMQAccountCredentialsInvalidUrl#qiskit.providers.ibmq.IBMQAccountCredentialsInvalidUrl "qiskit.providers.ibmq.IBMQAccountCredentialsInvalidUrl") – If invalid IBM Quantum Experience credentials are found on disk.

<span id="undefined" />

`static update_account(force=False)`

Interactive helper for migrating stored credentials to IBM Quantum Experience v2.

**Parameters**

**force** (`bool`) – If `True`, disable interactive prompts and perform the changes.

**Return type**

`Optional`\[`Credentials`]

**Returns**

The credentials for IBM Quantum Experience v2 if updating is successful or `None` otherwise.
