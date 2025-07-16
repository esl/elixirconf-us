---
tags: 
  - distributed
  - orchestration
  - pool

level: Intermediate
title: "From Complexity to Clarity: Managing Distributed Recorder Workers with Elixir"
speakers: 
  - _participants/misael-perez-chamorro.md

---
At Tich, our online teaching platform, we needed to record live sessions. This included real-time WebRTC media and interactions like whiteboard drawing, slide navigation, and student tools. Initially, we used a Node.js/Puppeteer setup to capture everything from a browser. It worked until we tried to scale. We ran into orchestration issues, communication overhead, and difficulties supporting elastic growth.

Since our backend was already written in Elixir, we chose to migrate the entire recording infrastructure to an Elixir-native solution.

Elixir provides lightweight process supervision, built-in fault tolerance, and a native way to handle distributed workloads. We built a distributed worker pool where each worker runs in a Kubernetes pod and supervises a Python-based ChromeDriver process. Node communication happens through BEAM messaging—not HTTP—making coordination fast, fault-tolerant, and fully integrated into the runtime. With native distribution, we built a system that’s clean, reliable, and aligned with what the BEAM was built for.

In this talk, I’ll share how we made that transition—from architecture to small insights that shaped a robust and scalable recording system.

**Key Takeaways:**

- Why Elixir is a great fit for orchestrating distributed workloads, even non-Elixir ones.
- Even pre-Kubernetes, the BEAM proves to be a perfect fit for orchestrating and communicating inside it, thanks to its native distributed design.
- Think beyond HTTP, use the BEAM’s native messaging to build and scale like everything’s local, even across nodes.

**Target Audience:**

- Elixir developers deploying applications to Kubernetes who may not yet be leveraging the full potential of the BEAM for distributed orchestration. This talk is especially relevant for those looking to go beyond HTTP-based coordination and explore native messaging, supervision, and scalability using OTP in real-world scenarios.
