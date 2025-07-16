---
tags:
  - liveview
  - eventsourcing
  - realworld

level: Intermediate
title: "Starting a business on Phoenix LiveView and Event Sourcing in 2025"
speakers:
  - _participants/aaron-votre.md

---
We started a new application for our new business and committed to Event Sourcing right from the start—it’s been worth it. In this talk, I’ll share how pairing Commanded with Phoenix LiveView has given our small team the power to ship quickly, stay consistent, and keep users in sync without boilerplate. We’ll look at how events flow through the system: how LiveViews handle eventual consistency, how projections drive UI updates, and how PubSub makes everything seamless for the user.

This isn’t a theoretical intro; it looks at how event sourcing plays out in production, including the tradeoffs and wins. If you’ve been curious about this architecture and want a realistic take from a team doing it today, this talk is for you.

NOTE: I'm also submitting an AI-related talk, but I figured there would be so many of those I'd be happy to do the AI talk or this one, with a mild preference for the AI talk.

**Key Takeaways:**

- [Brief] Intro: Why Event Sourcing and the differences to traditional CRUD
- How event sourcing and LiveView pair beautifully in real-world apps
- Where ES and `commanded` has been a benefit to us in our business journey
- Where adopting ES for the first time has been challenging (especially the learning curve)
- [Brief] Patterns for handling eventual consistency with minimal UI friction
- Conclusion: Why we’d choose this stack again and when it's most appropriate
- I want folks to be aware of ES as an option, better understand when it would be valuable, and get a real look at the impact on our business.
- It's not about implementation but about impact and how to leverage ES.

**Target Audience:**

- Intermediate Elixir Developers with at least minor Liveview experience
- It is Approachable for junior Elixir Developers, but I will assume some understanding of processes, concurrency, and basic Genservers.
- Anyone curious about Event Sourcing, especially those actively using it in production?
- This is not an introductory tutorial to Event Sourcing; it focuses more on its practical application and impact on our business.
