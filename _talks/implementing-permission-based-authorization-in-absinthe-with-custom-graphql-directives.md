---
tags:
  - authorization
  - absinthe
  - graphql

level: Intermediate
title: "@auth and Beyond: Building Custom GraphQL Directives in Absinthe"
speakers:
  - _participants/ivy-markwell.md

---
I want to walk through the process of implementing a permission-based authorization system in Absinthe using custom GraphQL directives. Absinthe provides the flexibility for us to define granular permissions at the field, argument, and object level, but managing access control across a GraphQL API can be complex. I will show how to create and integrate a custom @auth directive in our Absinthe schemas, allowing for dynamic and precise control over user access as GraphQL queries and mutations are resolved.

**Key Takeaways:**

- Know what directives are in GraphQL and how we can build custom directives in Absinthe
- Know an alternative way to enforce your permissions in your system

**Target Audience:**

- Software engineers building web applications in Absinthe
- Absinthe engineers who want to better understand and utilize directives
- Engineers interested in permission based authorization
- Other female software engineers looking for diversity
