---
tags:
  - bits
  - low-level
  - binaries

level: Intermediate
title: "Let's talk a bit about bits and bytes"
speakers:
  - _participants/geoffrey-lessel.md

---
At the lowest level of every computer, the machine is controlled by 1s and 0s—also known as bits. When you compile your Elixir program, it is also compiled down to 1s and 0s. While the vast majority of us never need to know or care about where each 1 or 0 is used, Elixir has some amazing tools to help us work with those bits when we need to harness their power.

In this intermediate-level talk, we will do some deep dives into all the powerful ways Elixir helps us work with bits—1s and 0s. Learn to leverage the `<<>>` syntax for pattern matching bitstrings, use bitwise operations with the Bitwise module, and work with the :binary module for performance-critical operations. Through live coding demonstrations, we'll tackle some real-world examples including (but not limited to):

- Decode audio formats (MP3) and image data (JPEG)
- Process a stream of network protocol requests
- Decode and parse racing simulator telemetry

You'll walk out with practical knowledge of when and how to use Elixir's binary manipulation tools, enabling you to tackle new and unexpected challenges at the lowest levels of computing while maintaining the expressiveness and reliability that make Elixir great.

**Key Takeaways:**

- Some of these can be added to or reduced based on whether it is a 20 or 40 minute talk.

- practical binary pattern matching skills
- bitwise operation knowledge
- real-world application examples
- extend your Elixir toolkit
- learn a "bit" more about low-level computing
- cross-domain application ideas (IoT, multimedia, telecommunications, data analytics, etc.)

**Target Audience:**

- An intermediate-level Elixir developer that is aware of normal Elixir operations and syntax but would like ideas on how to further their knowledge and toolkit into areas they haven't previously considered using Elixir.
