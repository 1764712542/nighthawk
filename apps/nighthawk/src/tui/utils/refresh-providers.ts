import {
  applyOpenPlatformConfig,
  fetchOpenPlatformModels,
  refreshProviderModels,
  type ManagedNighthawkConfigShape,
  type ManagedNighthawkModelInfo,
  type OpenPlatformDefinition,
  type ProviderChange,
  type RefreshProviderOptions,
  type RefreshProviderScope,
  type RefreshResult,
} from '@nighthawk/nighthawk-oauth';
import type {
  ModelAlias,
  NighthawkConfig,
  NighthawkConfigPatch,
  OAuthRef,
  ProviderConfig,
} from '@nighthawk/nighthawk-sdk';

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


// ---------------------------------------------------------------------------
// Per-provider refresh for the model picker's 'r' key
// ---------------------------------------------------------------------------

/**
 * Host surface `refreshProviderModelsForPicker` needs: config read/write via
 * the harness, an app-state patch to publish the refreshed model table, and
 * status reporting. SlashCommandHost satisfies this structurally.
 */
export interface ProviderModelRefreshHost {
  readonly harness: {
    getConfig(options?: { readonly reload?: boolean }): Promise<NighthawkConfig>;
    removeProvider(providerId: string): Promise<NighthawkConfig>;
    setConfig(patch: NighthawkConfigPatch): Promise<NighthawkConfig>;
  };
  setAppState(patch: {
    availableModels?: Record<string, ModelAlias>;
    availableProviders?: Record<string, ProviderConfig>;
  }): void;
  showStatus(message: string, color?: string): void;
  showError(message: string): void;
}

export type ProviderModelRefreshOutcome =
  | { readonly kind: 'refreshed'; readonly added: number; readonly removed: number }
  | { readonly kind: 'unchanged' }
  | { readonly kind: 'unsupported' }
  | { readonly kind: 'failed'; readonly reason: string };

/**
 * Refresh one provider's model list on behalf of the model picker's 'r' key:
 * re-fetch the endpoint's `/models` (OpenPlatform shape), persist through
 * applyOpenPlatformConfig, publish the new table into app state, and report
 * via showStatus/showError. `onRefreshed` runs only when something actually
 * changed — callers rebuild the picker's model dictionary with it.
 */
export async function refreshProviderModelsForPicker(
  host: ProviderModelRefreshHost,
  providerId: string,
  onRefreshed?: () => void,
): Promise<void> {
  const outcome = await refreshProviderModelList(host, providerId);
  switch (outcome.kind) {
    case 'unsupported':
      host.showStatus('OAuth provider models refresh via /connect.');
      return;
    case 'failed':
      host.showError(`Failed to refresh models: ${outcome.reason}`);
      return;
    case 'unchanged':
      host.showStatus('Models already up to date.');
      return;
    case 'refreshed':
      host.showStatus(
        outcome.added > 0 && outcome.removed > 0
          ? `Models refreshed: +${String(outcome.added)} new, -${String(outcome.removed)} removed.`
          : outcome.added > 0
            ? `Models refreshed: +${String(outcome.added)} new.`
            : outcome.removed > 0
              ? `Models refreshed: -${String(outcome.removed)} removed.`
              : 'Models refreshed.',
      );
      onRefreshed?.();
      return;
  }
}

async function refreshProviderModelList(
  host: ProviderModelRefreshHost,
  providerId: string,
): Promise<ProviderModelRefreshOutcome> {
  const config = await host.harness.getConfig({ reload: true });
  const provider = config.providers[providerId];
  if (
    provider === undefined ||
    typeof provider.baseUrl !== 'string' ||
    provider.baseUrl.length === 0 ||
    typeof provider.apiKey !== 'string' ||
    provider.apiKey.length === 0
  ) {
    // OAuth/token providers carry no inline endpoint credentials to list
    // models with; their tabs route users back to /connect.
    return { kind: 'unsupported' };
  }

  const platform: OpenPlatformDefinition = {
    id: providerId,
    name: providerId,
    baseUrl: provider.baseUrl,
  };
  let models: ManagedNighthawkModelInfo[];
  try {
    models = await fetchOpenPlatformModels(platform, provider.apiKey);
  } catch (error) {
    return { kind: 'failed', reason: error instanceof Error ? error.message : String(error) };
  }
  if (models.length === 0) {
    return { kind: 'failed', reason: '端点未返回任何模型。' };
  }

  const previousDefault = config.defaultModel;
  const previousThinking = structuredClone(config.thinking);
  const next = structuredClone(config);

  // applyOpenPlatformConfig forces a default selection; feed it the current
  // default while it belongs to this provider and survived the fetch.
  const currentAlias =
    previousDefault === undefined ? undefined : config.models?.[previousDefault];
  const fallback = models[0]!;
  const preferred =
    currentAlias !== undefined && currentAlias.provider === providerId
      ? (models.find((m) => m.id === currentAlias.model) ?? fallback)
      : fallback;
  applyOpenPlatformConfig(next as unknown as ManagedNighthawkConfigShape, {
    platform,
    models,
    selectedModel: preferred,
    thinking: previousThinking?.enabled ?? false,
    ...(previousThinking?.effort !== undefined ? { effort: previousThinking.effort } : {}),
    apiKey: provider.apiKey,
  });
  // Only model aliases change on a refresh — keep the provider record (type,
  // env, custom headers, oauth ref…) exactly as the user configured it.
  next.providers[providerId] = structuredClone(provider);
  // Restore the previous default when it survived; otherwise leave the
  // default unset so the user picks from the refreshed list.
  if (previousDefault !== undefined && next.models?.[previousDefault] !== undefined) {
    next.defaultModel = previousDefault;
    next.thinking = previousThinking;
  } else if (previousDefault === undefined) {
    // No default was set; a refresh must not force one (applyOpenPlatformConfig
    // always writes its own pick).
    next.defaultModel = undefined;
    next.thinking = previousThinking;
  } else {
    next.defaultModel = undefined;
    next.thinking = undefined;
  }

  if (providerAliasesEqual(config, next, providerId)) {
    return { kind: 'unchanged' };
  }
  const { added, removed } = providerModelDiff(config, next, providerId);

  // setConfig deep-merges and cannot drop model keys, so mirror the login
  // flow: clear the provider's records first, then write the refreshed ones.
  await host.harness.removeProvider(providerId);
  const saved = await host.harness.setConfig({
    providers: next.providers,
    models: next.models,
    defaultModel: next.defaultModel,
    thinking: next.thinking,
  });
  host.setAppState({
    availableModels: saved.models ?? {},
    availableProviders: saved.providers ?? {},
  });
  return { kind: 'refreshed', added, removed };
}

function providerAliases(
  config: NighthawkConfig,
  providerId: string,
): Array<[string, ModelAlias]> {
  return Object.entries(config.models ?? {}).filter(([, model]) => model.provider === providerId);
}

// Same comparison the shared orchestrator uses: capability order is not
// meaningful, so normalize it before comparing snapshots.
function providerAliasesEqual(
  before: NighthawkConfig,
  after: NighthawkConfig,
  providerId: string,
): boolean {
  const snapshot = (config: NighthawkConfig): string =>
    JSON.stringify(
      providerAliases(config, providerId)
        .map(
          ([alias, model]) =>
            [
              alias,
              {
                ...model,
                capabilities:
                  model.capabilities === undefined
                    ? undefined
                    : [...model.capabilities].sort(),
              },
            ] as const,
        )
        .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0)),
    );
  return snapshot(before) === snapshot(after);
}

function providerModelDiff(
  before: NighthawkConfig,
  after: NighthawkConfig,
  providerId: string,
): { readonly added: number; readonly removed: number } {
  const ids = (config: NighthawkConfig): Set<string> =>
    new Set(providerAliases(config, providerId).map(([, model]) => model.model));
  const beforeIds = ids(before);
  const afterIds = ids(after);
  let added = 0;
  for (const id of afterIds) {
    if (!beforeIds.has(id)) added++;
  }
  let removed = 0;
  for (const id of beforeIds) {
    if (!afterIds.has(id)) removed++;
  }
  return { added, removed };
}
