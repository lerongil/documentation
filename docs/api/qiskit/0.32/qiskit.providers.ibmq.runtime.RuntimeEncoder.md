# RuntimeEncoder

<span id="undefined" />

`RuntimeEncoder(*, skipkeys=False, ensure_ascii=True, check_circular=True, allow_nan=True, sort_keys=False, indent=None, separators=None, default=None)`

Bases: `json.encoder.JSONEncoder`

JSON Encoder used by runtime service.

Constructor for JSONEncoder, with sensible defaults.

If skipkeys is false, then it is a TypeError to attempt encoding of keys that are not str, int, float or None. If skipkeys is True, such items are simply skipped.

If ensure\_ascii is true, the output is guaranteed to be str objects with all incoming non-ASCII characters escaped. If ensure\_ascii is false, the output can contain non-ASCII characters.

If check\_circular is true, then lists, dicts, and custom encoded objects will be checked for circular references during encoding to prevent an infinite recursion (which would cause an OverflowError). Otherwise, no such check takes place.

If allow\_nan is true, then NaN, Infinity, and -Infinity will be encoded as such. This behavior is not JSON specification compliant, but is consistent with most JavaScript based encoders and decoders. Otherwise, it will be a ValueError to encode such floats.

If sort\_keys is true, then the output of dictionaries will be sorted by key; this is useful for regression tests to ensure that JSON serializations can be compared on a day-to-day basis.

If indent is a non-negative integer, then JSON array elements and object members will be pretty-printed with that indent level. An indent level of 0 will only insert newlines. None is the most compact representation.

If specified, separators should be an (item\_separator, key\_separator) tuple. The default is (‘, ‘, ‘: ‘) if *indent* is `None` and (‘,’, ‘: ‘) otherwise. To get the most compact JSON representation, you should specify (‘,’, ‘:’) to eliminate whitespace.

If specified, default is a function that gets called for objects that can’t otherwise be serialized. It should return a JSON encodable version of the object or raise a `TypeError`.

## Methods

|                                                                                                                                                                                           |                                                                                                                                                    |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`default`](qiskit.providers.ibmq.runtime.RuntimeEncoder.default#qiskit.providers.ibmq.runtime.RuntimeEncoder.default "qiskit.providers.ibmq.runtime.RuntimeEncoder.default")             | Implement this method in a subclass such that it returns a serializable object for `o`, or calls the base implementation (to raise a `TypeError`). |
| [`encode`](qiskit.providers.ibmq.runtime.RuntimeEncoder.encode#qiskit.providers.ibmq.runtime.RuntimeEncoder.encode "qiskit.providers.ibmq.runtime.RuntimeEncoder.encode")                 | Return a JSON string representation of a Python data structure.                                                                                    |
| [`iterencode`](qiskit.providers.ibmq.runtime.RuntimeEncoder.iterencode#qiskit.providers.ibmq.runtime.RuntimeEncoder.iterencode "qiskit.providers.ibmq.runtime.RuntimeEncoder.iterencode") | Encode the given object and yield each string representation as available.                                                                         |

## Attributes

<span id="undefined" />

### item\_separator

`= ', '`

<span id="undefined" />

### key\_separator = '

`= ':`

`= ': '`
