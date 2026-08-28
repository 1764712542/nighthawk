# NightHawk Plugin and Extension Design

> Scope: how NightHawk redefines an agent’s capability boundary through a **multi-manifest compatible** extension system — not tied to a single harness plugin dialect, but bringing every widely adopted extension format into one runtime.

## Design philosophy: strengths from everywhere

The current agent ecosystem reality is: **no single plugin standard has won everything**, but de facto standards have emerged at each layer:

| Extension layer | De facto standard | NightHawk stance |
| --- | --- | --- |
| Capabilities (tools) | MCP (Model Context Protocol) | Native client, first-class citizen |
| Knowledge (process/playbook) | SKILL.md (Markdown + frontmatter) | Native support, multi-root |
| Tool description protocol | OpenAI-style function-calling JSON Schema | Common exchange format for tool schema |
| Distribution | npm / GitHub repo + manifest | Manifest-declared, trust-tiered install |

NightHawk’s choice: **the runtime speaks all these dialects at once**. Write an MCP server, a SKILL.md, or an OpenAI-style `tools.json`, and they all enter the same tool registry — extension authors use the format they already know, while the agent engine only cares about the unified internal representation.

## Extension point panorama

```
                     ┌────────────────────────────┐
                     │   Agent Tool Registry       │
                     │   （unified internal repr） │
                     └──────┬──────┬──────┬───────┘
                            │      │      │
              ┌─────────────┤      │      ├─────────────┐
              ▼             ▼      ▼      ▼             ▼
         Built-in tools MCP server Skill Plugin tools Dynamic registration
      (read/bash/       (stdio/   (knowledge (manifest (runtime
       security…)       http/sse)  injection) declared) declared)
```

All extensions converge into the same path: enter the registry, bind an `approvalRule`, and accept unified approval and audit. **Extension diversity must not become a bypass for the permission model.**

## Extension format details

### 1. Skill — knowledge extension

Markdown + YAML frontmatter (`name` / `description` / `whenToUse` / `type` / `disableModelInvocation`). Multi-root by layer (project > user > plugin > builtin), activated on demand, injecting origin-marked context blocks.

### 2. MCP — capability extension

Any MCP server (stdio / sse / http transport) connects through `McpConnectionManager`, and tools register under the namespace `mcp__<server>__<tool>`.

### 3. Plugin manifest — packaged distribution

A plugin is a directory containing a `nighthawk.plugin.json` manifest, and it can carry:

```json
{
  "kind": "nighthawk-plugin-root",
  "name": "example-plugin",
  "version": "1.0.0",
  "skills": ["skills/"],
  "mcpServers": {
    "example": { "command": "node", "args": ["server.js"] }
  },
  "tools": ["tools/"]
}
```

The install source (marketplace / GitHub repo / local path) determines trust level and is made explicit at install time. **One plugin = a self-contained bundle of knowledge + capability + configuration.**

### 4. Common exchange format for tool schema

Tool definitions use OpenAI-style function-calling JSON Schema as the exchange format (same format used by DeepSeek and most OpenAI-compatible backends):

```json
{
  "name": "security_scan",
  "description": "Scan files for vulnerability patterns",
  "parameters": {
    "type": "object",
    "properties": { "paths": { "type": "array", "items": { "type": "string" } } },
    "required": ["paths"]
  }
}
```

The reason for choosing it: it is **the most widely implemented lingua franca for tool descriptions** — the same schema can drive NightHawk’s tool registry and be fed directly into any OpenAI-compatible backend’s `tools` parameter; tool/plugin definitions from the DeepSeek harness ecosystem can be reused directly without translation. Provider-specific extensions (e.g. Anthropic’s `input_schema`, thinking blocks) are adapted in the `kosong` protocol layer, invisible to extension authors.

## Advanced concept comparison (for interview scripts)

**Q: Why not define a custom plugin format instead of supporting so many formats?**
A: Plugin-format network effects live on the ecosystem side, not the engine side. A custom dialect means extension authors must learn one more thing and maintain one more artifact — pure friction. Do the engine’s internal representation well and keep the external-format adapter thin; authors stay where their existing work already is.

**Q: What is the boundary of multi-format compatibility? When do you refuse compatibility?**
A: Compatibility is at the manifest/schema layer, not at runtime semantics. Once an extension enters the registry, it must obey the same approval, audit, and namespace rules — format freedom, behavioral non-freedom. That is the security baseline.

**Q: Compared with mainstream coding agent extension systems, where is the advanced design?**
A: Three points — (1) the three-way split (knowledge / capability / distribution) matches three orthogonal extension motivations instead of stuffing everything into one “plugin” bucket; (2) unified permission convergence so extension diversity does not erode the security model; (3) the tool schema picks the highest common denominator format, enabling zero-translation ecosystem reuse.
