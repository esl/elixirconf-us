---
tags: 
  - distributed-computing
  - clustering
  - handoff

level: Intermediate
title: "Handoff - a new Nx-compatible library for distributed DAGs"
speakers: 
  - _participants/paulo-valente.md

---
This talk presents Handoff, a library that let's the user represent functions that depend on each other, creating a Directed Acyclic Graph (DAG) that can be executed to obtain results at each node.

We will talk about how Handoff DAGs can specify requirements for each function, such as the cost for a given function, or node allocation requirements when running in a distributed BEAM environment. 

In this, we will learn how to specify things like as "run this function in the same node as that one" or "run this function on this node".


We will see how this is applicable to Nx, Nerves or general data dependecy coordination problems.

**Key Takeaways:**

- The audience will learn the basics of how to use the Handoff library.

- We will briefly discuss how this enables distributed Nx, but the focus is on the Handoff library itself.

**Target Audience:**

- Elixir developers in general.

- This library is suited for anyone that works with complex asynchronous and possibly branched data processing pipelines.
