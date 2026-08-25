/**
 * Hermetic experimental-flag state for tests: scrub ambient
 * `NIGHTHAWK_EXPERIMENTAL_*` env vars inherited from the developer shell
 * (e.g. a globally exported `NIGHTHAWK_EXPERIMENTAL_FLAG=1`) so flag-driven
 * behavior — including tool schemas embedded in `llm.tools_snapshot`
 * snapshots — stays deterministic and matches CI. Tests opt into flags
 * explicitly via `vi.stubEnv` or harness flag options.
 */
for (const key of Object.keys(process.env)) {
  if (key.startsWith('NIGHTHAWK_EXPERIMENTAL_')) {
    delete process.env[key];
  }
}
