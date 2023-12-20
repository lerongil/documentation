---
title: Options
description: API reference for qiskit_ibm_runtime.options.Options
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_ibm_runtime.options.Options
---

# Options

<span id="qiskit_ibm_runtime.options.Options" />

`Options(optimization_level=None, resilience_level=None, max_execution_time=None, transpilation=<factory>, resilience=<factory>, execution=<factory>, environment=<factory>, simulator=<factory>)`

Options for the primitives.

**Parameters**

*   **optimization\_level** (`Optional`\[`int`]) –

    How much optimization to perform on the circuits. Higher levels generate more optimized circuits, at the expense of longer transpilation times. This is based on the `optimization_level` parameter in qiskit-terra but may include backend-specific optimization. Default: 3.

    *   0: no optimization
    *   1: light optimization
    *   2: heavy optimization
    *   3: even heavier optimization

*   **resilience\_level** (`Optional`\[`int`]) –

    How much resilience to build against errors. Higher levels generate more accurate results, at the expense of longer processing times. Default: 1.

    *   0: No mitigation.
    *   1: Minimal mitigation costs. Mitigate error associated with readout errors.
    *   2: Medium mitigation costs. Typically reduces bias in estimators but is not guaranteed to be zero bias. Only applies to estimator.
    *   3: Heavy mitigation with layer sampling. Theoretically expected to deliver zero bias estimators. Only applies to estimator.

    Refer to the [Qiskit Runtime documentation](https://qiskit.org/documentation/partners/qiskit_ibm_runtime). for more information about the error mitigation methods used at each level.

*   **max\_execution\_time** (`Optional`\[`int`]) –

    Maximum execution time in seconds, which is based on system execution time (not wall clock time). System execution time is the amount of time that the system is dedicated to processing your job. If a job exceeds this time limit, it is forcibly cancelled. Simulator jobs continue to use wall clock time.

    Refer to the [Max execution time documentation](https://docs.quantum-computing.ibm.com/run/max-execution-time#maximum-execution-time). for more information.

*   **transpilation** (`Union`\[[`TranspilationOptions`](qiskit_ibm_runtime.options.TranspilationOptions "qiskit_ibm_runtime.options.transpilation_options.TranspilationOptions"), `Dict`]) – Transpilation options. See [`TranspilationOptions`](qiskit_ibm_runtime.options.TranspilationOptions "qiskit_ibm_runtime.options.TranspilationOptions") for all available options.

*   **resilience** (`Union`\[[`ResilienceOptions`](qiskit_ibm_runtime.options.ResilienceOptions "qiskit_ibm_runtime.options.resilience_options.ResilienceOptions"), `Dict`]) – Advanced resilience options to fine tune the resilience strategy. See [`ResilienceOptions`](qiskit_ibm_runtime.options.ResilienceOptions "qiskit_ibm_runtime.options.ResilienceOptions") for all available options.

*   **execution** (`Union`\[[`ExecutionOptions`](qiskit_ibm_runtime.options.ExecutionOptions "qiskit_ibm_runtime.options.execution_options.ExecutionOptions"), `Dict`]) – Execution time options. See [`ExecutionOptions`](qiskit_ibm_runtime.options.ExecutionOptions "qiskit_ibm_runtime.options.ExecutionOptions") for all available options.

*   **environment** (`Union`\[[`EnvironmentOptions`](qiskit_ibm_runtime.options.EnvironmentOptions "qiskit_ibm_runtime.options.environment_options.EnvironmentOptions"), `Dict`]) – Options related to the execution environment. See [`EnvironmentOptions`](qiskit_ibm_runtime.options.EnvironmentOptions "qiskit_ibm_runtime.options.EnvironmentOptions") for all available options.

*   **simulator** (`Union`\[[`SimulatorOptions`](qiskit_ibm_runtime.options.SimulatorOptions "qiskit_ibm_runtime.options.simulator_options.SimulatorOptions"), `Dict`]) – Simulator options. See [`SimulatorOptions`](qiskit_ibm_runtime.options.SimulatorOptions "qiskit_ibm_runtime.options.SimulatorOptions") for all available options.

## Attributes

<span id="qiskit_ibm_runtime.options.Options.max_execution_time" />

### max\_execution\_time

`int | None`

`= None`

<span id="qiskit_ibm_runtime.options.Options.optimization_level" />

### optimization\_level

`int | None`

`= None`

<span id="qiskit_ibm_runtime.options.Options.resilience_level" />

### resilience\_level

`int | None`

`= None`

<span id="qiskit_ibm_runtime.options.Options.transpilation" />

### transpilation

`TranspilationOptions | Dict`

<span id="qiskit_ibm_runtime.options.Options.resilience" />

### resilience

`ResilienceOptions | Dict`

<span id="qiskit_ibm_runtime.options.Options.execution" />

### execution

`ExecutionOptions | Dict`

<span id="qiskit_ibm_runtime.options.Options.environment" />

### environment

`EnvironmentOptions | Dict`

<span id="qiskit_ibm_runtime.options.Options.simulator" />

### simulator

`SimulatorOptions | Dict`

## Methods

### validate\_options

<span id="qiskit_ibm_runtime.options.Options.validate_options" />

`static validate_options(options)`

Validate that program inputs (options) are valid :raises ValueError: if optimization\_level is outside the allowed range. :raises ValueError: if max\_execution\_time is outside the allowed range.

**Return type**

`None`

