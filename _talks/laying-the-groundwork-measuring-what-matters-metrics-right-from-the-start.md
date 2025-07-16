---
tags:
  - metrics
  - design
  - mindset

level: Intermediate
title: "Laying the Groundwork: Measuring What Matters, Metrics Right From the Start"
speakers:
  - _participants/kate-rezentes.md

---
Silence the noise, calm the stakeholders -- let metrics do the talking

This talk will provide a path to building a strong, intentional foundation for metrics in Elixir applications using :telemetry, telemetry_metrics, and Phoenix LiveDashboard. The approach is especially well-suited for early-stage apps where thoughtful design choices can pay off quickly and scale gracefully. This talk also gives direction for apps that lack instrumentation to reach full visibility.

We’ll explore what makes an action worth measuring — not just what to track, but how to develop the judgment to decide what’s truly metric-worthy. You’ll learn how to structure your telemetry code for clarity and flexibility by isolating instrumentation into dedicated modules that cleanly separate concerns. This pattern improves maintainability and makes it easy to switch metric providers without entangling your core application logic.

When the time comes, scaling up to OpenTelemetry, Prometheus, and Grafana is a smooth progression — not a rewrite, but a continuation of the foundation you've already laid.

**Key Takeaways:**

- Don’t wait for an incident, a slowdown, or a tough question to start measuring. By laying a solid metrics foundation early, you gain clarity, control, and insight from the very beginning — and set yourself up for easy growth down the line. Whether you're architecting a new Elixir app or already deep in development, building with an observability mindset gives your team (and stakeholders) real confidence in what you’re shipping.

Attendees should walk away understanding:

1. How to think about instrumentation — develop good judgment around what’s worth measuring.
2. How to structure their code — use wrappers and isolation to keep business logic clean and metrics provider-agnostic.
3. What’s next — how thoughtful design makes it easy to evolve from regular Telemetry and LiveDashboard into OpenTelemetry and Graphana later.

- Attendees will leave with a clear, practical framework for implementing metrics in Elixir — one that delivers immediate value and long-term flexibility.

**Target Audience:**

- Elixir developers of all experience levels who are building or maintaining applications. It’s especially relevant for those working on early-stage or non-distributed systems who want to establish an effective, scalable approach to observability through metrics. This talk is ideal for engineers looking to structure implementation cleanly, with future growth in mind.
