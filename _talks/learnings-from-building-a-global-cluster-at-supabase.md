---
level:
- Advanced
tags: [Phoenix, distribution, performance]
title: Learnings from building a Global Cluster at Supabase
speakers:
- _participants/filipe-cabaco.md

---
Running Supabase Realtime - which uses Phoenix - across multiple global regions forced us to confront some of the limits of Erlang's built-in distribution. :rpc wasn't enough. Phoenix.PubSub's default adapter wasn't enough. And assert_receive definitely wasn't enough for testing it.

This talk walks through three concrete problems and how we solved them. First, why we use gen_rpc and what you give up and gain compared to native distribution. Second, how we built a custom Phoenix.PubSub adapter with two-tier fan-out to reduce inter-region traffic from O(nodes) to O(regions). Third, how we test all of it in a distributed manner wiring them with different region configs, and writing ExUnit tests that assert actual cross-node message delivery with assert_receive.

Every slide has production context behind it so you will leave with patterns you can apply to any distributed Elixir system.


**Key takeaways:**

* The BEAM was built for distributed systems: production will show you exactly where the defaults run out, and that's where the some very interesting learning begins
* Easy to enrich the ecosystem: how we built our own PubSub adapter and it just worked with Phoenix.
* Real distributed systems deserve real tests: not mocks, not stubs, but actual nodes talking to each other, and OTP already gives you everything you need to do it

**Target audience:**

* Elixir developers that are eager to know more about the challenges of scaling up a global cluster and what that entails in terms of performance improvements.
