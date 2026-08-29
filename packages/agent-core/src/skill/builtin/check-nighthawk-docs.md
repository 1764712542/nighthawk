---
name: check-nighthawk-docs
description: 使用官方文档回答关于 NightHawk 产品的问题——CLI 用法、配置、斜杠命令、功能、会员与配额、API 接入、第三方工具设置和错误码。当用户询问 NightHawk 如何使用、如何设置某项功能、或某个错误消息的含义时使用。
---

# Check NightHawk docs (check-nighthawk-docs)

Answer NightHawk **product** questions from the official documentation, not from memory. This skill covers product usage ("how do I configure a provider", "what does this error mean", "how does membership quota work"); it is not for developing the NightHawk repository itself.

## The single source of truth

Official documentation lives in the `docs/` directory of the repository:

```
https://github.com/AliceGoto/nighthawk/tree/main/docs
```

Both `docs/en/` (English) and `docs/zh/` (Chinese) are available.

## How to answer

1. Determine which documentation page is relevant based on the user's question.
2. Read the relevant page from the `docs/` directory before answering — answer strictly from the documentation content, never from memory.
3. Cite the page path(s) you used at the end of the answer.
4. If the documentation does not cover the question, say so plainly and answer from what you already know. **Never invent config keys, command names, model IDs, or product behaviors.**
