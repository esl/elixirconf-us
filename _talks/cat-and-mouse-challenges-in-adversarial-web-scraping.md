---
tags:
  - respectful
  - humanlike-scraping

level: Intermediate
title: "Cat and Mouse: Challenges in Adversarial Web Scraping"
speakers:
  - _participants/tyler-young.md

---
The time comes in every developer’s career when they need to scrape a web page. If you’re lucky, a simple HTTP request gets you what you need, or maybe you have to spoof some browser headers. But if that’s not enough, what can you do?

And from the other side, as a site operator, how can you prevent your site from being scraped by any script kiddie who knows what a user agent is?

In this talk, we’ll explore the dark art of scraping the web from both perspectives: the bots, and the services that try to confound them. We’ll look at a number of techniques for detecting non-human traffic, and show how a respectful, ethical scraper might get around them. (Hint: You can’t use OTP’s built-in HTTP stack for this!) We’ll also look at the gold standard for bot detection, and test the limits for how sites can prevent automated access.

**Key Takeaways:**

- Methods for bot detection go way beyond user agents; they go as low in the stack as the TLS handshake, and as high as JavaScript execution and mouse movement tracking
- Aggressive prevention of bot traffic provides a disservice to human users
- Guidelines for ethical web scraping include adhering to the law and avoiding putting an excessive load on the remote server

**Target Audience:**

- Developers who want to know how bot detection works, and how to get around it
- Site operators who want to prevent bots from accessing their site
