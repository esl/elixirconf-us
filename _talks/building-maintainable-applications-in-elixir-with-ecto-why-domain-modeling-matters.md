---
tags:
  - ecto-domain-modeling

level: Intermediate
title: "Building Maintainable Applications in Elixir with Ecto: Why Domain Modeling Matters"
speakers:
  - _participants/nicholas-henry.md
published: false

---
As developers, we are often tasked with building applications that not only perform well but also reflect real-world business concepts. However, in the world of Elixir and Ecto, many of us struggle with modeling complex domains beyond basic database relationships like belongs_to and has_many. When our models are reduced to little more than tables with associations, we lose the opportunity to express the richness of business logic in a clear, maintainable way.

In this talk, we will explore why relying on simple database associations is insufficient for creating long-term, scalable applications. We will delve into how domain modeling techniques can help us organize and manage complex business logic by structuring our domain more effectively. By using Ecto in combination with domain modeling principles, we can ensure our applications grow and evolve in a way that reflects real business interactions, not just database schema relationships.

**Key Takeaways:**

- The Pitfalls of Simple Associations: Why relying on belongs_to and has_many alone can lead to overly simplistic and hard-to-maintain models.
- Mapping Business Concepts to Models: How domain modeling techniques allow you to map complex business concepts, like order fulfillment or customer lifecycle, into well-structured domain models.
- Collaborating Business Logic: How to structure your domain so that business concepts and processes can collaborate naturally, enabling your code to grow in complexity without becoming a tangled mess.
- Beyond Ecto’s Associations: Leveraging Ecto schemas and changesets in combination with richer domain models to model complex relationships, validations, and behaviors.
- Building Flexibility for the Future: How domain modeling helps avoid rigid database schemas that make evolving business requirements difficult to implement.

**Target Audience:**

- This talk is for Elixir developers who are familiar with the basics of Ecto but are looking for a deeper understanding of how to structure and maintain complex domains. If you’re tired of feeling stuck with overly simplistic associations and want to elevate your domain modeling to reflect real business processes, this session will help guide you through the concepts and techniques that make it possible.
