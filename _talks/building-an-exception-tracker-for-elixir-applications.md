---
tags:
  - elixir-exception-tracking

level: Intermediate
title: "Building an Exception Tracker for Elixir Applications"
speakers:
  - _participants/gonzalo-rodriguez.md

---
Go from having a some or little idea to having a clear understanding of how any Exception Tracker in Elixir works behind the scenes by attending this step-by-step presentation on how we built the elixir tower package and it's multiple reporters.

Understand how listening to exceptions strategies evolved over time as Erlang and Elixir improved and made things easier for us.

How can we listen for any unexpected run-time exception in a running application and do something with it, ignore it, store it or report it somewhere?

How can we be sure we are listening for all exceptions in the context of runtime like the BEAM with it’s many (linked or unlinked) processes running concurrently?

What about exceptions that are handled by libraries that are not re-raised?

**Key Takeaways:**

- Understand how exception tracking fits into the "Let it crash" philosophy
- Understand better whether the Elixir Exception Tracker one is using is tracking all or some exceptions
- Gain domain knowledge to better understand how to choose an Elixir Exception Tracker package and configure it properly
