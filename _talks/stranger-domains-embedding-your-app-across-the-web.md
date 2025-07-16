---
tags: 
  - phoenix
  - livestate
  - embeddedweb

level: Advanced
title: "Stranger Domains: Embedding your app across the web"
speakers: 
  - _participants/nathan-hessler.md

---
LiveView is great—until it has to live somewhere else.

Whether you're integrating with a third-party site, building a white-label solution, or exposing your app as a widget, operating outside your own domain introduces a new class of problems. LiveView starts to feel boxed in, and the usual tooling for cookies, headers, and sockets doesn’t quite behave as expected.

In this talk, we’ll dig into the challenges and tradeoffs of embedding Phoenix apps into third-party domains. And when to choose between iframes and custom elements as delivery mechanisms.

**Key Takeaways:**

- Understand why LiveState offers more flexibility than LiveView for embedded use cases

- Learn the tradeoffs between iframes and custom elements when delivering Phoenix-powered components

- Gain practical tools for managing session state, cross-domain communication, and security concerns

**Target Audience:**

- Phoenix devs building embedded tools, white-label platforms, or integrations

- Engineers evaluating how to expose reactive features to third-party environments

- Anyone hitting the walls of LiveView in constrained or sandboxed setups
