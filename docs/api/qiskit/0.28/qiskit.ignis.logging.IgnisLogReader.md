# qiskit.ignis.logging.IgnisLogReader

<span id="undefined" />

`IgnisLogReader`

Class to read from Ignis log files

Reads and constructs tabular representation of logged data based on date/time and key criteria

<span id="undefined" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                             |                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.ignis.logging.IgnisLogReader.__init__ "qiskit.ignis.logging.IgnisLogReader.__init__")()                                | Initialize self.                                                                  |
| [`get_log_files`](#qiskit.ignis.logging.IgnisLogReader.get_log_files "qiskit.ignis.logging.IgnisLogReader.get_log_files")()                 | Get Names of all log files (several may be present due to logging file rotation). |
| [`read_values`](#qiskit.ignis.logging.IgnisLogReader.read_values "qiskit.ignis.logging.IgnisLogReader.read_values")(\[log\_files, keys, …]) | Retrieve log lines using key and date/time filtering criteria                     |

<span id="undefined" />

`get_log_files()`

Get Names of all log files (several may be present due to logging file rotation). File names are sorted by modification time.

**Returns**

list of all log file names

**Return type**

list

<span id="undefined" />

`read_values(log_files=None, keys=None, from_datetime=None, from_datetime_format=None, to_datetime=None, to_datetime_format=None)`

Retrieve log lines using key and date/time filtering criteria

**Params:**

log\_files: List of log files to read from keys: Retrieve only key value pairs of corresponding to keys A row with no matching keys will not be retrieved. If not specified, all keys are retrieved (optional)

from\_datetime(None): Retrieve only rows newer than the given date and time

from\_datetime\_format(None): datetime format string. If not specified will assume “%Y/%m/%d %H:%M:%S”

to\_datetime(None): Retrieve only rows older than the given date and time

to\_datetime\_format(None): datetime format string. If not specified will assume “%Y/%m/%d %H:%M:%S”

**Returns**

A list containing the retrieved rows of key pair values

**Return type**

list
