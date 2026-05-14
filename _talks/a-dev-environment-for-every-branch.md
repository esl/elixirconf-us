---
level:
- intermediate
tags: [devex workflow isolation]
title: A Dev Environment for Every Branch
speakers:
- _participants/jason-axelson.md

---
What if every branch had its own server, its own database, and its own HTTPS URL — ready the moment you created it? That's what git worktrees make possible, but 'git worktree add' is not enough, you also need to build a workflow around it.

In this talk, I'll show how I built a workflow that makes worktrees practical for Phoenix apps: copying '_build' artifacts with copy-on-write, cloning the Postgres database, automatically assigning ports so your servers never collide, and giving every branch its own URL — like 'https://my-feature.local' (look Ma, no port!). I'll also show how I used LLMs to build the script itself, and how you can prompt your way to a version that fits your personal workflow.


**Key takeaways:**

- git worktrees lower the cost of context switching, but only with intentional tooling around them useful
- we shouldn't settle for not having isolated dev environments for each branch, one single shared dev environment is too limiting
- LLMs are excellent at generating and adapting workflow automation scripts for your personal workflow

**Target audience:**

* Any Elixir developer who has felt the friction of switching branches mid-flow — whether juggling features, hotfixes, experiments, or PR reviews. Developers who've tried git worktrees and given up will find a complete, practical workflow here. Comfort with the terminal is helpful but no shell scripting experience required.
