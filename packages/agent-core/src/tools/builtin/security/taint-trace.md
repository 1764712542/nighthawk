Use this tool to trace data flow from user input to dangerous sinks in a single file.

It performs lightweight taint analysis: user-controlled sources (request params, req.query, PHP superglobals, stdin, env vars) are tracked through assignments and propagations, and any flow that reaches a dangerous sink is reported with the vulnerability class — SQL injection, command injection, code injection, XSS, path traversal, SSRF, or unsafe deserialization.

When to use:
- You found a suspicious pattern via SecurityScan and want the concrete source-to-sink flow
- The user asks how user input reaches a given sink, or whether a parameter is sanitized before use
- Reviewing route handlers, controllers, or API endpoints that process user input

Parameters:
- `path`: the file to analyze (required; analysis is per-file)

Each finding includes the source line and kind, the sink line and kind, and the full flow description. Cross-file flows are not tracked — treat results as intra-file evidence and follow up with Read on related files when a flow continues elsewhere.
