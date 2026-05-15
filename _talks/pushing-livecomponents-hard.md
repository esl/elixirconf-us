---
level:
- intermediate
tags: [LiveView Components Architecture]
title: Pushing LiveComponents Hard
speakers:
- _participants/garth-hitchens.md

---
When we started with LiveView a few years ago, we kept hearing that LiveComponents should be used sparingly — prefer functional components, watch out for performance. After building an ambitious LiveView app — multi-pane UI, slide-in panels, organizers, app panes, and sophisticated navigation. We've come to to the opposite conclusion. LiveComponents make a far better central building block than most people assume, and with hundreds active any given moment in our app, we've found them performant, flexible, and highly composable.

What is hard is everything around them: state that needs to survive remounts, event routing, and (especially) allowing them to subscribe to PubSub without hard-coded glue in the LiveView.  This talk examines one approach to using LiveComponents to provide a rich UX, along with patterns that provide solutions to the common problems people run into.  We'll also discuss the performance reality after years of pushing this model further than we probably should have.


**Key takeaways:**
- LiveComponents are a lot more composable and flexible than they seem at first
- LiveComponents scale much further than community caution suggests
- Ways to let LiveComponents register for Pub/Sub without glue code
- Strategies to hold state across remounts and navigation
- Event routing approaches for deeply nested component trees
- Performance observations from pushing LiveComponents hard

**Target audience:**
* Developers of large user interfaces in Phoenix LiveView, comparable in sophistication to apps like Notion or Obsidian.
