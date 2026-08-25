/**
 * Process-wide region cache for the CLI/TUI.
 *
 * Region decides which deployment (mainland-China .com / international .ai)
 * the client's off-session endpoints point at: CDN (updates, plugins, tips)
 * and site links. The OAuth login flow itself does NOT read this — it
 * takes explicit hosts; this cache is for everything derived afterwards.
 * Telemetry is not region-derived at all: its endpoint comes solely from
 * `NIGHTHAWK_TELEMETRY_ENDPOINT` (see `nighthawkTelemetryEndpoint`), and
 * `NIGHTHAWK_CDN_BASE` / `NIGHTHAWK_SITE_BASE` override the profile's CDN /
 * site roots (see `nighthawkRegionProfile`).
 *
 * Resolution lives in `@nighthawk/nighthawk-oauth` (see `resolveNighthawkRegion`);
 * this module only adds the one thing that package deliberately does not own:
 * reading the persisted login's oauth ref (credential key + `oauthHost`) out
 * of config.toml, synchronously, via the SDK's safe config reader. First call
 * wins; `refreshNighthawkRegion` re-resolves after login/logout rewrote the oauth
 * ref.
 */

import { loadRuntimeConfigSafe, resolveConfigPath } from '@nighthawk/nighthawk-sdk';
import {
  NIGHTHAWK_OAUTH_KEY,
  nighthawkRegionProfile,
  nighthawkTelemetryEndpoint,
  resolveNighthawkRegion,
  type NighthawkRegion,
  type NighthawkRegionProfile,
} from '@nighthawk/nighthawk-oauth';

export { nighthawkTelemetryEndpoint };

// Same value as DEFAULT_OAUTH_PROVIDER_NAME in '#/constant/app' — inlined here
// to keep the import one-directional (constant/app derives URLs from this
// module, so this module must not import back from it).
const MANAGED_NIGHTHAWK_PROVIDER_KEY = 'managed:nighthawk';

/** Platform-selector value for the global OAuth login entry. */
export const NIGHTHAWK_GLOBAL_PLATFORM_VALUE = 'nighthawk-global';

let cached: NighthawkRegion | undefined;

export interface PersistedNighthawkOAuthRef {
  readonly key: string;
  readonly oauthHost?: string;
}

/** The oauth ref persisted by a previous login, if any. */
export function persistedNighthawkOAuthRef(): PersistedNighthawkOAuthRef | undefined {
  const result = loadRuntimeConfigSafe(resolveConfigPath({}));
  // `providers` is always present on a real config load; the `?.` guards
  // hosts/tests that hand us a partial config shape.
  const oauth = result.config.providers?.[MANAGED_NIGHTHAWK_PROVIDER_KEY]?.oauth;
  if (oauth === undefined) return undefined;
  return { key: oauth.key, oauthHost: oauth.oauthHost };
}

/** Region for a no-flag `nighthawk login` / `nighthawk acp --login`: a fresh install
    follows the resolved region (env/marker/default); the default slot (only
    ever a mainland-cn login) re-pins the profile explicitly; a scoped slot —
    a global login, or a custom env persisted with only NIGHTHAWK_BASE_URL and
    no oauthHost — keeps its configured hosts (`undefined`). */
export function regionForBareLogin(ref: PersistedNighthawkOAuthRef | undefined): NighthawkRegion | undefined {
  if (ref === undefined) return currentNighthawkRegion();
  return ref.key === NIGHTHAWK_OAUTH_KEY ? 'mainland-cn' : undefined;
}

export function currentNighthawkRegion(): NighthawkRegion {
  if (cached === undefined) {
    const persisted = persistedNighthawkOAuthRef();
    cached = resolveNighthawkRegion({
      configuredOAuthHost: persisted?.oauthHost,
      configuredOAuthKey: persisted?.key,
      readMarker: process.env['NIGHTHAWK_REGION_MARKER'] !== 'off',
    });
  }
  return cached;
}

export function currentNighthawkProfile(): NighthawkRegionProfile {
  return nighthawkRegionProfile(currentNighthawkRegion());
}

/** Drop the cache and re-resolve. Call after login/logout rewrote config. */
export function refreshNighthawkRegion(): NighthawkRegion {
  cached = undefined;
  return currentNighthawkRegion();
}
