---
level:
- Intermediate
tags: [Astronomy, Scientific-Computing, Real-time]
title: Calculating the Sky in Pure Elixir
speakers:
- _participants/jacob-johnson.md

---
NASA's Jet Propulsion Laboratory publishes the same ephemeris data used to navigate interplanetary missions — planetary positions for the entire solar system. I built an engine that computes these positions in real-time, from the original JPL data, in pure Elixir. No C bindings, no NIFs, no ports. Pattern matching, ETS, and OTP all the way down.

This talk starts with a live demo: a 3D celestial sphere in the browser (https://ex-ephemeris.fly.dev), computing real astronomy on a $7/month fly.io machine with BEAM VM telemetry visible alongside the planets. From there, I'll explore the architecture decisions that made it possible — why GenServer-per-observer, why ETS as a scientific data store, why a pipeline with telemetry at every stage — and where it's going: as an MCP server providing real-world astronomical data to AI agents.

The BEAM wasn't designed for scientific computing. I'll show you why it should have been — and what becomes possible when you can compute the state of the sky for any observer, at any moment, and start correlating it with everything else.


**Key takeaways:**

* Why the BEAM is a legitimate platform for scientific computing — demonstrated with a working engine and benchmarked against established tools like Swiss Ephemeris and Python's Skyfield for both accuracy and performance
* Architecture patterns for real-time scientific streaming: GenServer-per-observer, ETS as a hot-path data store, pipeline composition with telemetry at every stage boundary
* How to handle computationally intensive workloads on a single fly.io machine — 10 Hz streaming, backpressure via mailbox depth, and what the BEAM gives you for free (supervision, fault tolerance, graceful degradation) that C and Python libraries don't
* Where domain-specific Elixir engines are going — a look at serving real-world computation through MCP for the emerging agent ecosystem

**Target audience:**

* Intermediate to advanced Elixir developers curious about pushing the BEAM beyond web applications. Developers who've wondered whether Elixir can handle computationally intensive, real-time workloads. Anyone interested in what OTP patterns look like when applied to scientific computing instead of web requests. No astronomy background needed — the patterns are universal, the domain is just uncommonly interesting.
