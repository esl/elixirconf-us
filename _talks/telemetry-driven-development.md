---
tags: 
  - telemetry-debugging-testing

level: Intermediate
title: "Telemetry-Driven Development"
speakers: 
  - _participants/noah-betzen.md

---
Telemetry is an invaluable part of any production deployment, but have you ever used it for local debugging or when writing unit/integration tests? While logging is a form of telemetry that many developers are familiar with, other tools like tracing and metrics have historically been production-only concerns. Even then, how often are your traces and metrics really being utilized? Developers should understand that these same tools that give you confidence in production can also help you during development and testing.

**Key Takeaways:**

- Telemetry is more than just logs. It's incredibly flexible and can be used for more than just operating a production deployment. You can also use telemetry to debug an application locally during development or even use it to unit/integration test entire parts of your system.

**Target Audience:**

- Developers with basic Elixir proficiency that are also familiar with high-level telemetry concepts (logs, tracing, metrics). Experience with the `: telemetry` (hexdocs.pm/telemetry) and or OpenTelemetry (opentelemetry.io) is nice to have.
