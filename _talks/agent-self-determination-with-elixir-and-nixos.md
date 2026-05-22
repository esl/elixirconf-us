---
level:
- intermediate
tags: [OTP AI Exploration]
title: It's Alive! Agent Self-Determination With Elixir (and NixOS)
speakers:
- _participants/chris-ertel.md

---
Agent harnesses are all the new hotness, from Claude Code to OpenClaw--but, as BEAM developers, we've already been exposed to the ideas that I think will underpin the next generation of AI agents.

In this talk, I'm going to start by exploring the things that the BEAM does for us really well: messaging, concurrency, supervision, hot code reloading.

Then, I'll explore an alternate way of thinking about LLM agent harnesses and tool-calling, drawing heavily from the ideas from the BEAM and showing places we can crib shamelessly from prior art.

Then, we'll develop a single-file agent that can do basic tasks, and then a theory of dynamic tooling and services for that agent as dynamically-created GenServers. We'll use NixOS to create its development environment.

We'll extend this work to allow the agent to not only patch its own prompts, but then additionally to patch its own runtime using clustering and a few underhanded tricks with the BEAM.

Finally, we'll explore using NixOS to create a VM to sandbox that agent--and we'll show how the agent can then use NixOS to safely reconfigure its sandbox on the fly.


**Key takeaways:**

* An agent built from the ground-up with BEAM principles has a lot of promise.

* It's possible to use LLMs to work with Elixir in ways you wouldn't normally consider.

* NixOS makes development easier for humans *and* agents.

* It's possible make interesting agents from scratch without a lot of ceremony.

**Target audience:**

* Developers that would like to create new LLM agent research projects

* Developers that would like to learn more about modern DevOps tooling, especially NixOS

* Developers that would like to see how to pair effectively with an agent while doing research spikes
