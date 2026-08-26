Use this tool to trace data flow from user input to dangerous sinks, within a single file or across related files.

It performs lightweight taint analysis: user-controlled sources (request params, req.query, PHP superglobals, stdin, env vars) are tracked through assignments and propagations, and any flow that reaches a dangerous sink is reported with the vulnerability class — SQL injection, command injection, code injection, XSS, path traversal, SSRF, or unsafe deserialization.

By default the analysis follows the import/require graph: pass an entry point (e.g. a route handler) and tainted variables are propagated across module boundaries through exports and imports, so a source defined in one file and reaching a sink in another is still reported. Set `scope` to `file` to restrict analysis to a single file.

When to use:
- You found a suspicious pattern via SecurityScan and want the concrete source-to-sink flow
- The user asks how user input reaches a given sink, or whether a parameter is sanitized before use
- Reviewing route handlers, controllers, or API endpoints that process user input
- Tracing how a raw request value flows through helpers/utilities into a dangerous operation

Parameters:
- `path`: the file to analyze (required). For `module` scope this is the entry point of the module graph to trace.
- `scope`: `module` (default, follows imports/requires) or `file` (single file only).

Each finding includes the source line and kind, the sink line and kind, and the full flow description. Cross-file flows include the imported module in the flow description. Note the analysis is heuristic — bare/npm imports are not followed, and dynamic imports are resolved on a best-effort basis, so treat results as evidence to be confirmed with Read.
