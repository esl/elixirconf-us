---
tags: 
  - beyond-safe-migrations

level: Intermediate
title: "Beyond Safe Migrations: Better Practices for Ecto + PostgreSQL"
speakers: 
  - _participants/joe-harrow.md

---
Database migrations can look safe—tests pass, the code deploys, and the migration runs without error. But as I've discovered the hard way, “safe” ain't easy. In this talk, I’ll explore the subtle (and sometimes catastrophic) ways seemingly safe migrations can impact production systems, especially in high-traffic Elixir applications backed by PostgreSQL.
Drawing from real-world experience at Cars.com, I'll share what’s gone wrong, what we've learned, and how we’ve evolved our processes to make migrations safer in practice. Topics will include common Ecto migration pitfalls, how PostgreSQL's locking behavior can catch teams off-guard, and how to use CI checks, strategies, and custom tooling to build a migration culture that’s both cautious and fast-moving.
This talk is especially geared toward teams managing live production databases but will be valuable to any Elixir developer who’s ever had to run mix ecto.migrate with crossed fingers.

**Key Takeaways:**

- A deeper understanding of how PostgreSQL handles schema changes under load
- Practical patterns for breaking up risky Ecto migrations
- CI-level safety checks and developer workflows that catch problems before they deploy
- Real examples of process improvements and tooling from a production team

**Target Audience:**

- Really anyone who has cares about safe migrations. While some of the talk will be specific to PostgreSQL internals, much of it will cover general lessons for managing migrations.
