---
tags: 
  - elixir-distributed-cluster

level: Introductory and overview
title: "Leaving a BEAM cluster (basically) unattended for 2 years"
speakers: 
  - _participants/yuri-oliveira.md

---
We implemented one of our services as an Erlang cluster with a team of 2 and then left it basically unattended for the next 2 years with a team of one that wasn't on the initial team. What happened? How do we monitor it? Is it growing by itself?

As mentioned in previous conference talks, the cluster runs SQLite and Elixir to deal with video stream data mapping, and it had 53 nodes on 2023-07-10.

It's now made of 100+ nodes, 25k+ live streams, and is still running SQLite.

In the talk, we'll talk about maintenance challenges and how hard it is to keep such a cluster up and running.

Outline
- Recap why we moved from Cassandra to SQLite
- State of the Art on 2023-07-10
  - # of streams
  - # of nodes
  - # of writes, reads per second
  - team size
- Team changed
- OOM kills
- Netsplits
- PG connections going down when the Cloud provider reboots the DB
- State of the Art in 2025
  - same metrics as above
- Challenges
  - Updating OS (Ubuntu LTS 20 to 24)
  - SOC 2
  - Updating Elixir/OTP versions (1.13.4 now)
  - Keeping costs low (storage, compute usage)

**Key Takeaways:**

- How hard it is to maintain a BEAM cluster and how it provides a reliable service even when there's no one watching it.

**Target Audience:**

- All levels.
