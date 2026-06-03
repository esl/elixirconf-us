---
level:
- Intermediate
tags: [Pragmatic, Evolutionary, Sustainable]
title: "Phoenix Contexts in the Real World: From Theory to Survival"
speakers:
- _participants/juan-manuel-azambuja.md

---
Phoenix contexts are a powerful idea, but many teams struggle with them once an application starts to grow.

Should you define all boundaries up front? When is it time to split a context? What happens when your "Accounts" context slowly takes over half the system?

In this talk, I will share a practical perspective on working with contexts in real projects. Instead of treating them as fixed architectural decisions made on day one, we will look at how boundaries can emerge from real use cases and the code written to support them.

We will cover:

* Why over-modeling early can slow down development
* How to let domains emerge from real behavior instead of forcing them up front
* Signals that suggest a context should be split or merged
* How to refactor a growing context safely
* Common anti-patterns that lead to tangled boundaries
* Testing strategies that reinforce context APIs

The goal is to offer practical heuristics that teams can apply as their Phoenix applications evolve.


**Key takeaways:**

* A clearer understanding of what a Phoenix context is responsible for and what it is not
* Practical signals that indicate when a context boundary needs to change
* A step-by-step approach to refactoring contexts safely
* Concrete testing practices that support strong boundaries
* A more confident and less dogmatic way to think about context design

**Target audience:**

* Engineers who are starting new Phoenix projects
* Teams whose contexts have grown larger than expected
* Tech leads making architectural decisions
* Developers who feel that most discussions about contexts are too theoretical
