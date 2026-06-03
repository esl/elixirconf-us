---
level:
- Introductory and overview
tags: [OTP, Erlang, history]
title: "Code Archaeology: Tracing 30 years of OTP from BOS to Elixir"
speakers:
- _participants/Francesco-cesarini.md

---
The Open Telecom Platform (OTP) is often cited as the "secret sauce" behind the unrivaled scalability and fault tolerance of the Erlang ecosystem. But OTP wasn't born in a vacuum—it is the result of decades of rigorous industrial evolution, shifting from a bespoke framework and tools to a universal concurrency framework.

In this session, Francesco Cesarini—a member of the original OTP team—takes you on a journey of "code archaeology" to uncover the origins of the behaviors we rely on today. We begin in the early 1990s with BOS (the Basic Operating System) and the Mobility Server project, where the first blueprints for supervisors, generic servers, and finite state machines were drafted out of pure necessity. We will explore how these patterns were decoupled from their hardware-specific code bases and how they evolved into the generic behaviors that define modern distributed systems.


**Key takeaways:**

* Understanding the past of OTP isn't just a history lesson—it's a roadmap for building concurrent, resilient systems in the future.

**Target audience:**

* These are primarily Elixir developers who use GenServer or Supervisor daily but treat them as "magic black boxes." They want to understand the why behind the conventions. Knowing that a specific design choice was made to handle 1990s telecommunications hardware helps them appreciate the constraints and brilliance of the modern BEAM.
