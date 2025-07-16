---
tags: 
  - phoenix
  - ecto
  - bestpractices

level: Introductory and overview
title: "Phoenix and Ecto Taught Me Backend Engineering (And I Didn’t Even Notice)"
speakers: 
  - _participants/doug-vonmoser.md

---
Stepping into backend development can feel overwhelming. When I first encountered Elixir, Phoenix, and Ecto, a lot of the conventions felt opaque. Why are controllers and plugs structured this way? What’s the deal with contexts? And why are these changeset things everywhere??

It wasn’t until I really got into the framework—building things, reading through the docs, getting feedback in code reviews—that I started to realize something: Phoenix and Ecto weren’t just tools, they were guides. Best practices aren’t something you have to chase—they’re baked right into the framework.

This talk explores how Phoenix’s architecture and Ecto’s abstractions naturally lead you toward robust, maintainable, and secure application design. We’ll decode the “why” behind the generators and folder structure—like how mix phx.gen.html introduces domain-driven design through contexts, how changesets enforce data validation at the right layer, and how phx.gen.auth scaffolds secure, plug-based authentication.

By the end, you’ll see how Phoenix and Ecto don’t just help you build apps—they help you grow as a backend engineer, guiding you toward best practices in software design, architecture, and security.

**Key Takeaways:**

- Recognize how Phoenix’s generators and conventions promote clean architecture (via contexts, separation of concerns, and composable design).
- Understand how Ecto changesets are central to maintaining data integrity—powering everything from backend validation to form handling.
- Learn how Phoenix’s built-in auth scaffolding (phx.gen.auth) sets you up with secure, idiomatic patterns out of the box.
- Appreciate how Ecto's Repo pattern provides a clean boundary for database interactions, enhancing testability and decoupling business logic from storage concerns.
- Understand how Phoenix organizes request handling and business logic via the Plug pipeline, controllers, and routers.

**Target Audience:**

- Developers new to Elixir and/or the Phoenix framework.
- Beginner back-end developers regardless of language background.
- Front-end developers seeking to transition to or better understand full-stack development.
- Developers curious about framework design choices and how they influence development practices.
- Anyone who has used Phoenix generators but wants a deeper understanding of why they are structured the way they are.
