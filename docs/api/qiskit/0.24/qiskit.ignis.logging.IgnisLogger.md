<span id="qiskit-ignis-logging-ignislogger" />

# qiskit.ignis.logging.IgnisLogger

<span id="undefined" />

`IgnisLogger(name, level=0)`

A logger class for Ignis

IgnisLogger is a like any other `logging.Logger` object except it has an additional method, [`log_to_file()`](#qiskit.ignis.logging.IgnisLogger.log_to_file "qiskit.ignis.logging.IgnisLogger.log_to_file"), used to log data in the form of key:value pairs to a log file. Logging configuration is performed via a configuration file and is handled by IgnisLogging.

Refer to Python’s logging documentation for more details on how to use logging in Python

Initialize the IgnisLogger object

**Parameters**

*   **name** (`str`) – name of the logger. Usually set to package name using \_\_name\_\_
*   **level** (*logging.NOTSET*) – Verbosity level (use logging package enums)

<span id="undefined" />

`__init__(name, level=0)`

Initialize the IgnisLogger object

**Parameters**

*   **name** (`str`) – name of the logger. Usually set to package name using \_\_name\_\_
*   **level** (*logging.NOTSET*) – Verbosity level (use logging package enums)

## Methods

|                                                                                                                                                |                                                                                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.ignis.logging.IgnisLogger.__init__ "qiskit.ignis.logging.IgnisLogger.__init__")(name\[, level])                           | Initialize the IgnisLogger object                                                                           |
| [`addFilter`](#qiskit.ignis.logging.IgnisLogger.addFilter "qiskit.ignis.logging.IgnisLogger.addFilter")(filter)                                | Add the specified filter to this handler.                                                                   |
| [`addHandler`](#qiskit.ignis.logging.IgnisLogger.addHandler "qiskit.ignis.logging.IgnisLogger.addHandler")(hdlr)                               | Add the specified handler to this logger.                                                                   |
| [`callHandlers`](#qiskit.ignis.logging.IgnisLogger.callHandlers "qiskit.ignis.logging.IgnisLogger.callHandlers")(record)                       | Pass a record to all relevant handlers.                                                                     |
| [`configure`](#qiskit.ignis.logging.IgnisLogger.configure "qiskit.ignis.logging.IgnisLogger.configure")(sh, conf\_file\_exists)                | Internal configuration method of IgnisLogger.                                                               |
| [`critical`](#qiskit.ignis.logging.IgnisLogger.critical "qiskit.ignis.logging.IgnisLogger.critical")(msg, \*args, \*\*kwargs)                  | Log ‘msg % args’ with severity ‘CRITICAL’.                                                                  |
| [`debug`](#qiskit.ignis.logging.IgnisLogger.debug "qiskit.ignis.logging.IgnisLogger.debug")(msg, \*args, \*\*kwargs)                           | Log ‘msg % args’ with severity ‘DEBUG’.                                                                     |
| [`disable_file_logging`](#qiskit.ignis.logging.IgnisLogger.disable_file_logging "qiskit.ignis.logging.IgnisLogger.disable_file_logging")()     | Disable file logging for this logger object (note there is a single object for a given logger name          |
| [`enable_file_logging`](#qiskit.ignis.logging.IgnisLogger.enable_file_logging "qiskit.ignis.logging.IgnisLogger.enable_file_logging")()        | Enable file logging for this logger object (note there is a single object for a given logger name           |
| [`error`](#qiskit.ignis.logging.IgnisLogger.error "qiskit.ignis.logging.IgnisLogger.error")(msg, \*args, \*\*kwargs)                           | Log ‘msg % args’ with severity ‘ERROR’.                                                                     |
| [`exception`](#qiskit.ignis.logging.IgnisLogger.exception "qiskit.ignis.logging.IgnisLogger.exception")(msg, \*args\[, exc\_info])             | Convenience method for logging an ERROR with exception information.                                         |
| [`fatal`](#qiskit.ignis.logging.IgnisLogger.fatal "qiskit.ignis.logging.IgnisLogger.fatal")(msg, \*args, \*\*kwargs)                           | Log ‘msg % args’ with severity ‘CRITICAL’.                                                                  |
| [`filter`](#qiskit.ignis.logging.IgnisLogger.filter "qiskit.ignis.logging.IgnisLogger.filter")(record)                                         | Determine if a record is loggable by consulting all the filters.                                            |
| [`findCaller`](#qiskit.ignis.logging.IgnisLogger.findCaller "qiskit.ignis.logging.IgnisLogger.findCaller")(\[stack\_info])                     | Find the stack frame of the caller so that we can note the source file name, line number and function name. |
| [`getChild`](#qiskit.ignis.logging.IgnisLogger.getChild "qiskit.ignis.logging.IgnisLogger.getChild")(suffix)                                   | Get a logger which is a descendant to this one.                                                             |
| [`getEffectiveLevel`](#qiskit.ignis.logging.IgnisLogger.getEffectiveLevel "qiskit.ignis.logging.IgnisLogger.getEffectiveLevel")()              | Get the effective level for this logger.                                                                    |
| [`handle`](#qiskit.ignis.logging.IgnisLogger.handle "qiskit.ignis.logging.IgnisLogger.handle")(record)                                         | Call the handlers for the specified record.                                                                 |
| [`hasHandlers`](#qiskit.ignis.logging.IgnisLogger.hasHandlers "qiskit.ignis.logging.IgnisLogger.hasHandlers")()                                | See if this logger has any handlers configured.                                                             |
| [`info`](#qiskit.ignis.logging.IgnisLogger.info "qiskit.ignis.logging.IgnisLogger.info")(msg, \*args, \*\*kwargs)                              | Log ‘msg % args’ with severity ‘INFO’.                                                                      |
| [`isEnabledFor`](#qiskit.ignis.logging.IgnisLogger.isEnabledFor "qiskit.ignis.logging.IgnisLogger.isEnabledFor")(level)                        | Is this logger enabled for level ‘level’?                                                                   |
| [`log`](#qiskit.ignis.logging.IgnisLogger.log "qiskit.ignis.logging.IgnisLogger.log")(level, msg, \*args, \*\*kwargs)                          | Log ‘msg % args’ with the integer severity ‘level’.                                                         |
| [`log_to_file`](#qiskit.ignis.logging.IgnisLogger.log_to_file "qiskit.ignis.logging.IgnisLogger.log_to_file")(\*\*kwargs)                      | Log key:value pairs to a log file.                                                                          |
| [`makeRecord`](#qiskit.ignis.logging.IgnisLogger.makeRecord "qiskit.ignis.logging.IgnisLogger.makeRecord")(name, level, fn, lno, msg, args, …) | A factory method which can be overridden in subclasses to create specialized LogRecords.                    |
| [`removeFilter`](#qiskit.ignis.logging.IgnisLogger.removeFilter "qiskit.ignis.logging.IgnisLogger.removeFilter")(filter)                       | Remove the specified filter from this handler.                                                              |
| [`removeHandler`](#qiskit.ignis.logging.IgnisLogger.removeHandler "qiskit.ignis.logging.IgnisLogger.removeHandler")(hdlr)                      | Remove the specified handler from this logger.                                                              |
| [`setLevel`](#qiskit.ignis.logging.IgnisLogger.setLevel "qiskit.ignis.logging.IgnisLogger.setLevel")(level)                                    | Set the logging level of this logger.                                                                       |
| `warn`(msg, \*args, \*\*kwargs)                                                                                                                |                                                                                                             |
| [`warning`](#qiskit.ignis.logging.IgnisLogger.warning "qiskit.ignis.logging.IgnisLogger.warning")(msg, \*args, \*\*kwargs)                     | Log ‘msg % args’ with severity ‘WARNING’.                                                                   |

## Attributes

|           |   |
| --------- | - |
| `manager` |   |
| `root`    |   |

<span id="undefined" />

`addFilter(filter)`

Add the specified filter to this handler.

<span id="undefined" />

`addHandler(hdlr)`

Add the specified handler to this logger.

<span id="undefined" />

`callHandlers(record)`

Pass a record to all relevant handlers.

Loop through all handlers for this logger and its parents in the logger hierarchy. If no handler was found, output a one-off error message to sys.stderr. Stop searching up the hierarchy whenever a logger with the “propagate” attribute set to zero is found - that will be the last logger whose handlers are called.

<span id="undefined" />

`configure(sh, conf_file_exists)`

Internal configuration method of IgnisLogger. Should only be called by IgnisLogger

**Parameters**

*   **sh** (`StreamHandler`) – StreamHandler object
*   **conf\_file\_exists** (`bool`) – Whether or not a file config exists

<span id="undefined" />

`critical(msg, *args, **kwargs)`

Log ‘msg % args’ with severity ‘CRITICAL’.

To pass exception information, use the keyword argument exc\_info with a true value, e.g.

logger.critical(“Houston, we have a %s”, “major disaster”, exc\_info=1)

<span id="undefined" />

`debug(msg, *args, **kwargs)`

Log ‘msg % args’ with severity ‘DEBUG’.

To pass exception information, use the keyword argument exc\_info with a true value, e.g.

logger.debug(“Houston, we have a %s”, “thorny problem”, exc\_info=1)

<span id="undefined" />

`disable_file_logging()`

Disable file logging for this logger object (note there is a single object for a given logger name

<span id="undefined" />

`enable_file_logging()`

Enable file logging for this logger object (note there is a single object for a given logger name

<span id="undefined" />

`error(msg, *args, **kwargs)`

Log ‘msg % args’ with severity ‘ERROR’.

To pass exception information, use the keyword argument exc\_info with a true value, e.g.

logger.error(“Houston, we have a %s”, “major problem”, exc\_info=1)

<span id="undefined" />

`exception(msg, *args, exc_info=True, **kwargs)`

Convenience method for logging an ERROR with exception information.

<span id="undefined" />

`fatal(msg, *args, **kwargs)`

Log ‘msg % args’ with severity ‘CRITICAL’.

To pass exception information, use the keyword argument exc\_info with a true value, e.g.

logger.critical(“Houston, we have a %s”, “major disaster”, exc\_info=1)

<span id="undefined" />

`filter(record)`

Determine if a record is loggable by consulting all the filters.

The default is to allow the record to be logged; any filter can veto this and the record is then dropped. Returns a zero value if a record is to be dropped, else non-zero.

Changed in version 3.2: Allow filters to be just callables.

<span id="undefined" />

`findCaller(stack_info=False)`

Find the stack frame of the caller so that we can note the source file name, line number and function name.

<span id="undefined" />

`getChild(suffix)`

Get a logger which is a descendant to this one.

This is a convenience method, such that

logging.getLogger(‘abc’).getChild(‘def.ghi’)

is the same as

logging.getLogger(‘abc.def.ghi’)

It’s useful, for example, when the parent logger is named using \_\_name\_\_ rather than a literal string.

<span id="undefined" />

`getEffectiveLevel()`

Get the effective level for this logger.

Loop through this logger and its parents in the logger hierarchy, looking for a non-zero logging level. Return the first one found.

<span id="undefined" />

`handle(record)`

Call the handlers for the specified record.

This method is used for unpickled records received from a socket, as well as those created locally. Logger-level filtering is applied.

<span id="undefined" />

`hasHandlers()`

See if this logger has any handlers configured.

Loop through all handlers for this logger and its parents in the logger hierarchy. Return True if a handler was found, else False. Stop searching up the hierarchy whenever a logger with the “propagate” attribute set to zero is found - that will be the last logger which is checked for the existence of handlers.

<span id="undefined" />

`info(msg, *args, **kwargs)`

Log ‘msg % args’ with severity ‘INFO’.

To pass exception information, use the keyword argument exc\_info with a true value, e.g.

logger.info(“Houston, we have a %s”, “interesting problem”, exc\_info=1)

<span id="undefined" />

`isEnabledFor(level)`

Is this logger enabled for level ‘level’?

<span id="undefined" />

`log(level, msg, *args, **kwargs)`

Log ‘msg % args’ with the integer severity ‘level’.

To pass exception information, use the keyword argument exc\_info with a true value, e.g.

logger.log(level, “We have a %s”, “mysterious problem”, exc\_info=1)

<span id="undefined" />

`log_to_file(**kwargs)`

Log key:value pairs to a log file.

Note: Logger name in the log file is fixed (ignis\_logging)

**Parameters**

**kwargs** – key/value pairs to be logged, e.g t1=0.02, qubits=\[1,2,4]

<span id="undefined" />

`makeRecord(name, level, fn, lno, msg, args, exc_info, func=None, extra=None, sinfo=None)`

A factory method which can be overridden in subclasses to create specialized LogRecords.

<span id="undefined" />

`removeFilter(filter)`

Remove the specified filter from this handler.

<span id="undefined" />

`removeHandler(hdlr)`

Remove the specified handler from this logger.

<span id="undefined" />

`setLevel(level)`

Set the logging level of this logger. level must be an int or a str.

<span id="undefined" />

`warning(msg, *args, **kwargs)`

Log ‘msg % args’ with severity ‘WARNING’.

To pass exception information, use the keyword argument exc\_info with a true value, e.g.

logger.warning(“Houston, we have a %s”, “bit of a problem”, exc\_info=1)
