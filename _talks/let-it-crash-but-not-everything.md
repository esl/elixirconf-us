---
level:
- intermediate
tags: [Supervision Reliability Systems]
title: Let It Crash (But Not Everything). Strategic Supervision for Resilient Systems
speakers:
- _participants/stephanie-lane.md
- _participants/joe-harrow.md

---
The Elixir community lives by the mantra ""Let It Crash,"" but blindly applying this to every process is a recipe for cascading failures and poor user experiences. Fault tolerance isn't just about restarting; it’s about intentional design.

In this session, we move beyond the basics of one_for_one to explore how to architect supervision trees that are as surgical as they are resilient. You’ll learn how to distinguish between ""expected"" errors and ""exceptional"" crashes, how to utilize dynamic topologies for modern workloads, and why your supervision tree is actually a blueprint for your business logic.

You’ll leave with a mental model for designing supervision trees that are not just resilient—but intentional and observable.


**Key takeaways:**
- A decision framework for when to “let it crash” vs handle errors
- Techniques for breaking down ""God Supervisors"" into nested, manageable sub-trees.
- How to choose the right supervision strategy for real production scenarios
- Techniques to reduce failure blast radius and avoid cascading crashes
- How to monitor supervisor reports and identify ""flapping"" processes before they trigger a system-wide shutdown.

**Target audience:**
* Prerequisites: Attendees should have a basic understanding of Genservers and have at least tinkered with a mix new generated supervision tree.
* Who this is for: Developers moving from "making it work" to "making it production-grade" and architects looking to harden their distributed systems.
