Use this tool to scan for hardcoded secrets, credentials, and API keys.

It detects known token formats (AWS access keys, GitHub/GitLab tokens, Slack tokens, Google API keys, private key blocks, JWTs, OpenAI/Anthropic keys, database URIs, Stripe keys, Telegram bot tokens) plus generic key/password assignments validated by Shannon entropy to keep false positives low.

When to use:
- The user asks to check for leaked secrets or credentials
- Reviewing config files, env files, or test fixtures before committing
- Auditing a repository before making it public

Parameters:
- `path`: file or directory to scan; omit for the whole workspace
- `include`: glob filter for file names

Findings are masked in the output (only a short preview is shown). High-confidence hits should be rotated immediately if they are real. This is a read-only scan; it never modifies or exfiltrates files.
