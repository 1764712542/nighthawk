Use this tool to run a security vulnerability scan over the codebase.

It executes a built-in OWASP Top 10 / CWE rule engine with 200+ patterns covering: SQL injection, XSS, command injection, path traversal, SSRF, unsafe deserialization, cryptographic weaknesses, authentication/session flaws, XXE, plus language-specific packs for Node.js, Python, Java, Go, and PHP.

When to use:
- The user asks for a security audit, vulnerability scan, or code review with a security focus
- Before committing changes to security-sensitive code (auth, crypto, file handling, SQL, shell)
- Investigating whether a codebase contains a specific vulnerability class

Parameters:
- `path`: file or directory to scan; omit for the whole workspace
- `include`: glob filter for file names, e.g. `*.py`
- `min_severity`: only report findings at or above this severity (`critical`/`high`/`medium`/`low`)
- `categories`: restrict to rule categories, e.g. `["sqli", "xss"]`

The report lists findings sorted by severity with rule id, CWE mapping, file:line, and a concrete fix suggestion. Findings are heuristics — verify each in context before treating it as a true positive. For hardcoded credentials specifically, prefer SecretScan; for data-flow tracing from user input to dangerous sinks, prefer TaintTrace.
