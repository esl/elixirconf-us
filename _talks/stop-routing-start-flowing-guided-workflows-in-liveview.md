---
level:
- Introductory and overview
tags: [State, Flow, LiveView]
title: "Stop Routing; Start Flowing: Guided Workflows in LiveView"
speakers:
- _participants/matt-milton.md

---
Every Phoenix app starts with a router. But when your UX requires multi-step flows, conditional branching, and resumable progress, the router becomes a state machine in disguise, and a poorly designed one.

This talk introduces a better pattern: modeling workflows as explicit, immutable data. Instead of routes that encode user state, each workflow is a struct that knows the current screen, the path ahead, and the path behind. Navigation is a state transition, not a redirect.

The UX case is just as strong as the technical one. Exploratory interfaces (hub pages full of links) put the cognitive burden on users to figure out where to start. Guided workflows constrain the possible paths on purpose. Each screen has one job. Users don't navigate; they progress.

We'll also look at how compile-time error boundaries apply Erlang's "let it fail" philosophy at the UX layer: catching failures at the boundary and returning users to safe state, rather than scattering defensive code everywhere. This talk is about knowing when you've outgrown the router.


**Key takeaways:**

* A new mental model for complex UX flows. Most developers reach for more routes when a flow gets complicated. This talk reframes the problem: complex UX flows are state management problems, not routing problems. Attendees will understand why treating workflow position as explicit, structured data produces more predictable applications than encoding it implicitly in routes, session flags, or component assigns.

* A practical pattern for screen composition. Attendees will see how to design screens that know nothing about their neighbors: no hardcoded "go to screen X next" logic, no awareness of what came before. Screens render state and emit events. The workflow engine handles the rest.

* Nested workflows without nested complexity. A clean model for suspending a parent workflow, running a child, and restoring the original context intact, without conditional branching that grows harder to follow over time.

* A UX-first argument for constrained navigation. Fewer choices at each step means less cognitive load. That principle should shape how we structure the code.

**Target audience:**

* This talk will appeal to Phoenix and LiveView developers who have built multi-step flows and felt the strain of encoding user progress in routes and session state. It will also resonate with JavaScript developers familiar with Elm or Redux who are curious how unidirectional, state-driven UI patterns translate into Elixir.

* More broadly, anyone building applications where user experience depends on guiding people through a process (onboarding, enrollment, checkout, configuration) will find the architectural pattern immediately applicable to their own work.
