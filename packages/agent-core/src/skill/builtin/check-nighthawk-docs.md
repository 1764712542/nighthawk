---
name: check-nighthawk-docs
description: Answer questions about the NightHawk product using the official documentation — CLI usage, configuration, slash commands, features, membership and quota, API onboarding, third-party tool setup, and error codes. Use when the user asks how NightHawk works, how to set something up, or what a NightHawk error message means.
---

# Check NightHawk docs (check-nighthawk-docs)

Answer NightHawk **product** questions from the official documentation, not from memory. This skill covers product usage ("how do I configure a provider", "what does this error mean", "how does membership quota work"); it is not for developing the NightHawk repository itself.

## The single source of truth

Official documentation lives in the `docs/` directory of the repository:

```
https://github.com/1764712542/nighthawk/tree/main/docs
```

Both `docs/en/` (English) and `docs/zh/` (Chinese) are available.

## How to answer

1. Determine which documentation page is relevant based on the user's question.
2. Read the relevant page from the `docs/` directory before answering — answer strictly from the documentation content, never from memory.
3. Cite the page path(s) you used at the end of the answer.
4. If the documentation does not cover the question, say so plainly and answer from what you already know. **Never invent config keys, command names, model IDs, or product behaviors.**
