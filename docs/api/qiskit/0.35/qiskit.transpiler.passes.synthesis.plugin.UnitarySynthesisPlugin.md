# UnitarySynthesisPlugin

<span id="undefined" />

`UnitarySynthesisPlugin`

Bases: `abc.ABC`

Abstract unitary synthesis plugin class

This abstract class defines the interface for unitary synthesis plugins.

## Methods

|                                                                                                                                                                                                                           |                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| [`run`](qiskit.transpiler.passes.synthesis.plugin.UnitarySynthesisPlugin.run#qiskit.transpiler.passes.synthesis.plugin.UnitarySynthesisPlugin.run "qiskit.transpiler.passes.synthesis.plugin.UnitarySynthesisPlugin.run") | Run synthesis for the given unitary matrix |

## Attributes

<span id="undefined" />

### max\_qubits

Return the maximum number of qubits the unitary synthesis plugin supports.

If the size of the unitary to be synthesized exceeds this value the `default` plugin will be used. If there is no upper bound return `None` and all unitaries (`>= min_qubits` if it’s defined) will be passed to this plugin when it’s enabled.

<span id="undefined" />

### min\_qubits

Return the minimum number of qubits the unitary synthesis plugin supports.

If the size of the unitary to be synthesized is below this value the `default` plugin will be used. If there is no lower bound return `None` and all unitaries (`<= max_qubits` if it’s defined) will be passed to this plugin when it’s enabled.

<span id="undefined" />

### supported\_bases

Returns a dictionary of supported bases for synthesis

This is expected to return a dictionary where the key is a string basis and the value is a list of gate names that the basis works in. If the synthesis method doesn’t support multiple bases this should return `None`. For example:

```python
{
    "XZX": ["rz", "rx"],
    "XYX": ["rx", "ry"],
}
```

If a dictionary is returned by this method the run kwargs will be passed a parameter `matched_basis` which contains a list of the basis strings (i.e. keys in the dictionary) which match the target basis gate set for the transpilation. If no entry in the dictionary matches the target basis gate set then the `matched_basis` kwarg will be set to an empty list, and a plugin can choose how to deal with the target basis gate set not matching the plugin’s capabilities.

<span id="undefined" />

### supports\_basis\_gates

Return whether the plugin supports taking `basis_gates`

If this returns `True` the plugin’s `run()` method will be passed a `basis_gates` kwarg with a list of gate names the target backend supports. For example, `['sx', 'x', 'cx', 'id', 'rz']`.

<span id="undefined" />

### supports\_coupling\_map

Return whether the plugin supports taking `coupling_map`

If this returns `True` the plugin’s `run()` method will receive one kwarg `coupling_map`. The `coupling_map` kwarg will be set to a tuple with the first element being a [`CouplingMap`](qiskit.transpiler.CouplingMap#qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap") object representing the qubit connectivity of the target backend, the second element will be a list of integers that represent the qubit indices in the coupling map that unitary is on. Note that if the target backend doesn’t have a coupling map set, the `coupling_map` kwarg’s value will be `(None, qubit_indices)`.

<span id="undefined" />

### supports\_gate\_errors

Return whether the plugin supports taking `gate_errors`

`gate_errors` will be a dictionary in the form of `{gate_name: {(qubit_1, qubit_2): error}}`. For example:

```python
{
'sx': {(0,): 0.0006149355812506126, (1,): 0.0006149355812506126},
'cx': {(0, 1): 0.012012477900732316, (1, 0): 5.191111111111111e-07}
}
```

Do note that this dictionary might not be complete or could be empty as it depends on the target backend reporting gate errors on every gate for each qubit. The gate error rates reported in `gate_errors` are provided by the target device `Backend` object and the exact meaning might be different depending on the backend.

<span id="undefined" />

### supports\_gate\_lengths

Return whether the plugin supports taking `gate_lengths`

`gate_lengths` will be a dictionary in the form of `{gate_name: {(qubit_1, qubit_2): length}}`. For example:

```python
{
'sx': {(0,): 0.0006149355812506126, (1,): 0.0006149355812506126},
'cx': {(0, 1): 0.012012477900732316, (1, 0): 5.191111111111111e-07}
}
```

where the `length` value is in units of seconds.

Do note that this dictionary might not be complete or could be empty as it depends on the target backend reporting gate lengths on every gate for each qubit.

<span id="undefined" />

### supports\_natural\_direction

Return whether the plugin supports a toggle for considering directionality of 2-qubit gates as `natural_direction`.

Refer to the documentation for [`UnitarySynthesis`](qiskit.transpiler.passes.UnitarySynthesis#qiskit.transpiler.passes.UnitarySynthesis "qiskit.transpiler.passes.UnitarySynthesis") for the possible values and meaning of these values.

<span id="undefined" />

### supports\_pulse\_optimize

Return whether the plugin supports a toggle to optimize pulses during synthesis as `pulse_optimize`.

Refer to the documentation for [`UnitarySynthesis`](qiskit.transpiler.passes.UnitarySynthesis#qiskit.transpiler.passes.UnitarySynthesis "qiskit.transpiler.passes.UnitarySynthesis") for the possible values and meaning of these values.

<span id="undefined" />

### supports\_target

Whether the plugin supports taking `target` as an option

`target` will be a [`Target`](qiskit.transpiler.Target#qiskit.transpiler.Target "qiskit.transpiler.Target") object representing the target device for the output of the synthesis pass.

By default this will be `False` since the plugin interface predates the [`Target`](qiskit.transpiler.Target#qiskit.transpiler.Target "qiskit.transpiler.Target") class. If a plugin returns `True` for this attribute, it is expected that the plugin will use the [`Target`](qiskit.transpiler.Target#qiskit.transpiler.Target "qiskit.transpiler.Target") instead of the values passed if any of `supports_gate_lengths`, `supports_gate_errors`, `supports_coupling_map`, and `supports_basis_gates` are set (although ideally all those parameters should contain duplicate information).
