---
tags:
  - ecto-domain-modeling

level: Intermediate
title: "Mise en Place for Ecto: Organizing Domain Complexity with Business Rule Thinking"
speakers:
  - _participants/nicholas-henry.md
published: true

---
Just as a chef organizes ingredients before cooking—mise en place—successful Elixir applications require organizing domain complexity before implementation. This talk introduces Business Rule Thinking, a disciplined approach to modeling rich domains in Ecto that goes far beyond simple belongs_to and has_many associations.

Drawing from the Business Rules Manifesto and domain modeling principles, you'll learn three essential abilities:

1. Model the Domain as Facts: Using the 7W Framework, we'll discover entities and relationships in your business domain, creating a Fact Model that captures concrete, verifiable statements about business activity—separate from implementation concerns.

2. Derive Business Rules from Facts: Learn to identify the five types of business rules that constrain relationships between entities, moving beyond process-focused thinking to rule-based domain design.

3. Transform Business Rules into Association Validations: Discover practical patterns for implementing business rules as association validations in Ecto, including the association changeset pattern and validation pipelines that ensure your domain logic remains explicit and maintainable.

**Key Takeaways:**

- Move beyond simple CRUD to express rich business concepts in Ecto
- Structure domain logic that collaborates naturally as complexity grows
- Build flexibility for evolving business requirements
- Implement validation patterns that make business rules explicit and testable

**Target Audience:**

- Perfect for Elixir developers who want to elevate their domain modeling beyond basic associations and create applications that truly reflect business reality.
