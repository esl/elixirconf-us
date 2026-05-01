---
experience:
- Beginners
title: "Instrumenting Elixir Applications"
type: training
event_date: September 9, 2026
venue: TBC
trainers:
- _participants/ethan-gunderson.md
- _participants/zack-kayser.md
---

This course will be a hands-on dive into the world of instrumenting Elixir applications. We’ll cover the Telemetry library. How it works, drawbacks, and why it’s pervasive in the community. From there we’ll see how we can use Telemetry to generate metrics and trace data for an application. We’ll look at popular libraries and frameworks and how to use their Telemetry events to further enrich our instrumentation. From there, we’ll explore options for visualizing the data we’ve collected.

By the end of the day, you’ll have a solid understanding of the available tools to add an extensible instrumentation framework to any Elixir application.

Topics that will be covered: Why instrumentation is important. How traces, metrics, and logging fit into the observability stack. What is Telemetry and how to use it? What are the different types of instrumentation we can gather for an application. How to use Telemetry.Metrics to collection data from the BEAM. How to generate traces and spans for Phoenix requests, Broadway consumers, and Oban Workers. How to trace across distributed contexts. Different options for visualizing metrics and spans. Where OpenTelemetry fits into the instrumentation stack.

**DURATION**

8 hours (including breaks and lunch)

**OBJECTIVES**

Students will leave the class learning how Erlang's Telemetry library works, how to incorporate Telemetry into Phoenix applications, and how to turn that into a fully observed system with charts and dashboard using Opentelemetry.
