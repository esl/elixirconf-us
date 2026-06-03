---
level:
- Intermediate
tags: [LSP, scale, devexp]
title: "Dexter: An Elixir LSP optimized for large codebases"
speakers:
- _participants/jesse-herrick.md

---
Remote has one of the largest Elixir codebases, at 57k files and growing. We love working with Elixir and have had great success with it at scale, but in the process we've hit growing pains that only occur at our scale.

Among the issues we've encountered, Elixir LSPs have been a persistent pain point. Existing LSPs simply haven't been able to handle the scale of our codebase. Indexing takes hours, and responses are slow even once indexing is complete. Many on the engineering team had all but given up on having a working LSP.

Dexter was born out of this frustration. Cold indexing time went from hours to 11 seconds. Requests respond in under 10ms, or under 300ms for complex use/import chains.

Rather than compiling the codebase, Dexter uses a two-tier parsing strategy to build a SQLite index of definitions and references - fast enough to handle enormous codebases without sacrificing accuracy. Context-building at runtime handles even complex macro chains.

In this talk, I will walk through the motivations behind Dexter, its design and architecture, how it evolved from a simple CLI helper to a full-featured LSP, and how it fits into the broader Elixir LSP landscape.


**Key takeaways:**

* Sometimes the "wrong" approach is the right one. Static parsing of the code gets you almost everything devs want from an LSP, even when it doesn't compile the code.
* How Dexter deals with complex cases, like `use` and `import` by using heuristics and deferring some of the complexity to request-time.
* Complex renames of modules, functions, and variables (with scoping) as a demonstration of what's possible with this approach.
* Dexter's evolution from a CLI tool to a full-featured LSP, one feature at a time.
* AI makes it easier than ever to prototype and try out your crazy ideas. The initial Dexter prototype was built in a single evening.
* Why Dexter was built in Go and why this same approach would work in Elixir if we were to start from scratch.
* Limitations of Dexter's approach.
* Building an LSP is simultaneously not as hard as it sounds, and just as hard as it sounds. Edge-cases are everywhere!
* How some of the optimizations done in Dexter can be applied to Expert.

Link to Dexter: https://github.com/remoteoss/dexter

**Target audience:**

* All developers interested in Elixir LSPs, working with Elixir at scale, and developer experience.
