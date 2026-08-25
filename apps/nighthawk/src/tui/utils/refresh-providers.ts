import {
  refreshProviderModels,
  type ProviderChange,
  type RefreshProviderOptions,
  type RefreshProviderScope,
  type RefreshResult,
} from '@nighthawk/nighthawk-oauth';
import type { NighthawkConfig, NighthawkConfigPatch, OAuthRef } from '@nighthawk/nighthawk-sdk';

/**
 * CLI-side host for provider-model refresh. Kept on the SDK's full config types
 * so existing TUI callers (and tests) don't change; the daemon uses the oauth
 * package's `ManagedNighthawkConfigShape`-typed host directly.
 */
export interface RefreshProviderHost {
  getConfig(): Promise<NighthawkConfig>;
  removeProvider(providerId: string): Promise<NighthawkConfig>;
  setConfig(patch: NighthawkConfigPatch): Promise<NighthawkConfig>;
  resolveOAuthToken(providerName: string, oauthRef?: OAuthRef): Promise<string>;
  /** Product User-Agent sent on custom-registry (api.json) fetches. */
  readonly userAgent?: string;
}

export type { ProviderChange, RefreshProviderOptions, RefreshProviderScope, RefreshResult };

/**
 * Refresh remote model metadata for the configured providers. Thin adapter over
 * the shared `refreshProviderModels` orchestrator in `@nighthawk/nighthawk-oauth`
 * (which is also what the daemon's scheduled/manual refresh uses).
 */
export async function refreshAllProviderModels(
  host: RefreshProviderHost,
  options: RefreshProviderOptions = {},
): Promise<RefreshResult> {
  return refreshProviderModels(
    {
      getConfig: () => host.getConfig(),
      removeProvider: (providerId) => host.removeProvider(providerId),
      setConfig: (patch) => host.setConfig(patch as unknown as NighthawkConfigPatch),
      resolveOAuthToken: (providerName, oauthRef) =>
        host.resolveOAuthToken(providerName, oauthRef as unknown as OAuthRef),
      userAgent: host.userAgent,
    },
    options,
  );
}
