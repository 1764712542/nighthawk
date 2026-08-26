Use this tool to audit dependency manifests for known security risks.

It parses package.json, requirements.txt, and go.mod, then flags:
- packages from a curated list of known-vulnerable or deprecated packages (with CVE references where applicable)
- un-pinned version ranges (`*`, `latest`) and plain-http registry URLs
- suspicious postinstall scripts that fetch remote content
- Go pseudo-version pins

When to use:
- The user asks for a dependency audit or supply-chain review
- Adding or upgrading dependencies in a security-sensitive project
- Investigating whether the project uses a known-compromised package

Parameters:
- `path`: directory containing the manifests; omit for the current working directory

The curated list is a high-signal subset, not a full advisory database — for exhaustive CVE coverage, run `npm audit` / `pip-audit` / `govulncheck` via Bash and combine with this result.
