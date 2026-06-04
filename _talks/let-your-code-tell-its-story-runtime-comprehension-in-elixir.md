---
level:
- Intermediate
tags: [tracing, comprehension, narrative]
title: "Let Your Code Tell Its Story: Runtime Comprehension in Elixir"
speakers:
- _participants/angeleah-daidone.md

---
Every Elixir developer has faced a moment where they need to understand what code actually *does*. Not how it's structured, but how it behaves at runtime. Maybe you just joined a team. Maybe you're refactoring code you wrote six months ago. Maybe a function returns the wrong value and you're not sure where things went sideways. Maybe you're reading through modules and the vocabulary keeps shifting, a 'contact' here, a 'recipient' there, and you can't tell if they're the same thing or not. The question is always the same: "What happens when I call this?"

CodeStory is a dev tool that solves this problem. It traces a span of execution and renders a nested call tree showing only your project's functions, with named arguments, values, and returns, so you can read the code's story without the noise of stdlib and dependency internals.

This talk walks through five scenarios where seeing the call tree changes how you work:

* Onboarding onto an unfamiliar codebase
* Understanding code before a refactor
* Tracking down where data goes wrong in a call chain
* Spotting redundant calls hiding in plain sight
* Identifying ubiquitous language mismatches across module boundaries


**Key takeaways:**

* You'll leave knowing how to use CodeStory in your own projects, but more importantly, you'll have a new mental model for approaching unfamiliar Elixir code, solving comprehension, debugging, and design problems, and exposing opportunities to unify your code's language.

**Target audience:**

* This talk is for anyone who has ever stared at an Elixir codebase and wished they could see the full narrative of a code path, every function, every argument, every return value, in one cohesive picture.
