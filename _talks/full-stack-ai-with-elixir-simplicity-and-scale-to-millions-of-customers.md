---
tags:
  - ai
  - llm

level: Intermediate
title: "Full-Stack AI with Elixir: Simplicity and Scale to Millions of Customers"
speakers:
  - _participants/george-guimaraes.md

---
AI systems are usually complex: Python APIs, model servers, queues, multiple frontends, and way too many moving parts.

At work, we took a different path. We built a full-stack AI system in Elixir that serves over 3 million customers—handling everything from LLM-based chat to GPU-powered image moderation, all in one cohesive codebase.

In this talk, I’ll show how Elixir helped us:
	•	Build a production-ready chat agent with multi-agent orchestration
	•	Run neural networks on GPUs directly from Elixir using Bumblebee
	•	Deliver real-time insights via LiveView dashboards
	•	Avoid the overhead of microservices while scaling reliably

If you’re wondering whether Elixir can power serious AI at scale—this is living proof.

**Key Takeaways:**

- You can build and scale real AI systems in Elixir—LLMs, image models, dashboards, and all
- Elixir’s concurrency model and GPU integration (via Nx + Bumblebee) unlock surprising power
- LiveView enables full-featured, real-time operator UIs without extra frontend stacks
- A single, unified codebase can replace the complexity of multiple Python services
- Elixir is not just web/backend—it’s production-grade AI at scale

**Target Audience:**

- Elixir developers curious about AI/ML applications
- Engineers building or scaling AI-powered features (chatbots, moderation, etc.)
- Tech leads exploring alternatives to Python-heavy AI stacks
- Anyone interested in running LLMs, neural networks, and dashboards in one unified system
- Builders who care about simplicity, performance, and observability in production
