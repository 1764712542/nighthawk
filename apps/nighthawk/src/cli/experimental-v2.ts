/**
 * Agent engine routing gates for the CLI surfaces.
 *
 * `nighthawk -p`, the interactive TUI, and `nighthawk doctor` use the native
 * agent-core-v2 path by default. A truthy `NIGHTHAWK_LEGACY_FLAG` selects the
 * legacy agent-core-backed path instead. `NIGHTHAWK_EXPERIMENTAL_FLAG` remains
 * the master switch for experimental features within either engine; it does
 * not select the engine.
 */

export const NIGHTHAWK_LEGACY_ENV = 'NIGHTHAWK_LEGACY_FLAG';

const TRUTHY_VALUES = new Set(['1', 'true', 'yes', 'on']);

function isTruthyEnv(
  key: string,
  env: Readonly<Record<string, string | undefined>>,
): boolean {
  return TRUTHY_VALUES.has((env[key] ?? '').trim().toLowerCase());
}

export function isLegacyEnabled(
  env: Readonly<Record<string, string | undefined>> = process.env,
): boolean {
  return isTruthyEnv(NIGHTHAWK_LEGACY_ENV, env);
}

export function isNighthawkV2Enabled(
  env: Readonly<Record<string, string | undefined>> = process.env,
): boolean {
  return !isLegacyEnabled(env);
}
