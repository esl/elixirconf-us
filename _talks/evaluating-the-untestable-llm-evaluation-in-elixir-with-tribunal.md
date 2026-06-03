---
level:
- Intermediate
tags: [LLM, Testing, Evals]
title: "Evaluating the Untestable: LLM Evaluation in Elixir with Tribunal"
speakers:
- _participants/george-guimaraes.md

---
You can't assert response == "expected" when your LLM rephrases things every time. So how do you actually test AI features?

Tribunal is an open-source evaluation framework for Elixir that brings LLM testing into ExUnit.

It provides two modes for two problems: tests that block your deploys (safety checks, hallucination detection, faithfulness to source context), and evaluations that track quality over time (batch scoring across hundreds of inputs with pass thresholds).

In this talk, I'll walk through building a real test suite for a RAG pipeline: deterministic assertions for the easy stuff, LLM-as-judge for faithfulness and hallucination, semantic similarity for fuzzy matching, and red team testing to find holes before users do.

You'll leave with a practical playbook for CI/CD quality gates on LLM features.


**Key takeaways:**

* A mental model for the difference between LLM tests (binary, block deploys) and evaluations (scored, track drift)
* Practical patterns for testing non-deterministic AI outputs using deterministic checks, LLM-as-judge, and semantic similarity
* How to set up CI/CD quality gates for LLM features with configurable pass thresholds
* Red team testing techniques to stress-test safety mechanisms before production

**Target audience:**

* Elixir developers building or planning to build LLM-powered features who want to ship with confidence.
