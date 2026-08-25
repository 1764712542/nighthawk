import {
  applyOpenPlatformConfig,
  fetchOpenPlatformModels,
  filterModelsByPrefix,
  getOpenPlatformById,
  OpenPlatformApiError,
  type NighthawkRegion,
  type ManagedNighthawkModelInfo,
  type ManagedNighthawkConfigShape,
  type OpenPlatformDefinition,
} from '@nighthawk/nighthawk-oauth';
import { log } from '@nighthawk/nighthawk-sdk';

import type { ChoiceOption } from '../components/dialogs/choice-picker';
import { PRESET_PROVIDERS } from '../components/dialogs/platform-selector';
import { DEFAULT_OAUTH_PROVIDER_NAME, PRODUCT_NAME } from '../constant/nighthawk-tui';
import { formatErrorMessage } from '../utils/event-payload';
import {
  NIGHTHAWK_GLOBAL_PLATFORM_VALUE,
  refreshNighthawkRegion,
} from '#/utils/region';
import type { LoginProgressSpinnerHandle } from '../types';
import {
  promptApiKey,
  promptBaseUrl,
  promptLogoutProviderSelection,
  promptModelSelectionForOpenPlatform,
  promptPlatformSelection,
  promptProviderName,
} from './prompts';
import type { SlashCommandHost } from './dispatch';

// ---------------------------------------------------------------------------
// Auth: login / logout
// ---------------------------------------------------------------------------

export async function handleLoginCommand(host: SlashCommandHost): Promise<void> {
  const platformId = await promptPlatformSelection(host);
  if (platformId === undefined) return;

  if (platformId === 'nighthawk' || platformId === NIGHTHAWK_GLOBAL_PLATFORM_VALUE) {
    const region: NighthawkRegion = platformId === NIGHTHAWK_GLOBAL_PLATFORM_VALUE ? 'global' : 'mainland-cn';
    await handleNighthawkOAuthLogin(host, region);
    return;
  }

  if (platformId === '__catalog__') {
    const { handleCatalogProviderAdd } = await import('./provider');
    await handleCatalogProviderAdd(host);
    return;
  }

  if (platformId === '__custom__') {
    await handleCustomEndpointLogin(host);
    return;
  }

  const preset = PRESET_PROVIDERS.find((provider) => provider.id === platformId);
  if (preset !== undefined) {
    await handleOpenPlatformLogin(host, preset);
    return;
  }

  const platform = getOpenPlatformById(platformId);
  if (platform === undefined) return;
  await handleOpenPlatformLogin(host, platform);
}

async function handleCustomEndpointLogin(host: SlashCommandHost): Promise<void> {
  const name = await promptProviderName(host);
  if (name === undefined) return;
  const trimmedName = name.trim();
  if (trimmedName.length === 0) {
    host.showError('Name cannot be empty.');
    return;
  }
  const baseUrl = await promptBaseUrl(host, trimmedName);
  if (baseUrl === undefined) return;
  const trimmed = baseUrl.trim().replace(/\/+$/, '');
  if (trimmed.length === 0) {
    host.showError('Base URL cannot be empty.');
    return;
  }
  const platform: OpenPlatformDefinition = {
    id: await customProviderIdFor(host, trimmedName, trimmed),
    name: trimmedName,
    baseUrl: trimmed,
  };
  await handleOpenPlatformLogin(host, platform);
}

/**
 * Derives the config provider id from the user-chosen name: lowercase,
 * non-alphanumerics collapsed to '-', capped at 24 characters. A colliding id
 * whose baseUrl differs gets a numeric suffix, so re-entering the same
 * endpoint reuses the original entry instead of duplicating it.
 */
async function customProviderIdFor(
  host: SlashCommandHost,
  name: string,
  baseUrl: string,
): Promise<string> {
  const slug =
    name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 24) ||
    'custom';
  const providers = (await host.harness.getConfig()).providers;
  const existing = providers[slug];
  if (existing === undefined || existing.baseUrl === baseUrl) return slug;
  for (let i = 2; i < 100; i++) {
    const suffix = `-${i}`;
    const candidate = `${slug.slice(0, 24 - suffix.length)}${suffix}`;
    const clash = providers[candidate];
    if (clash === undefined || clash.baseUrl === baseUrl) return candidate;
  }
  return `${slug}-${Date.now().toString(36)}`.slice(0, 24);
}

async function handleNighthawkOAuthLogin(
  host: SlashCommandHost,
  region: NighthawkRegion,
): Promise<void> {
  const status = await host.harness.auth.status(DEFAULT_OAUTH_PROVIDER_NAME);
  const alreadyLoggedIn = status.providers.some(
    (provider) => provider.providerName === DEFAULT_OAUTH_PROVIDER_NAME && provider.hasToken,
  );

  let spinner: LoginProgressSpinnerHandle | undefined;
  const controller = new AbortController();
  const cancelLogin = (): void => {
    controller.abort();
  };
  host.cancelInFlight = cancelLogin;
  try {
    // The facade maps region → profile hosts (env overrides keep priority);
    // 'mainland-cn' is passed explicitly too so switching back overrides a
    // persisted global login.
    await host.harness.auth.login(DEFAULT_OAUTH_PROVIDER_NAME, {
      signal: controller.signal,
      region,
      onDeviceCode: (data) => {
        spinner = host.showLoginAuthorizationPrompt(data);
      },
    });
    refreshNighthawkRegion();
    spinner?.stop({ ok: true, label: 'Logged in.' });
    spinner = undefined;
    try {
      await host.authFlow.refreshConfigAfterLogin();
    } catch (refreshError) {
      const message = formatErrorMessage(refreshError);
      host.showError(`Authentication successful, but failed to refresh config: ${message}`);
      return;
    }
    host.track('login', {
      provider: DEFAULT_OAUTH_PROVIDER_NAME,
      method: 'oauth',
      already_logged_in: alreadyLoggedIn,
    });
    if (alreadyLoggedIn) {
      host.showStatus('Already logged in. Model configuration refreshed.', 'success');
    }
  } catch (error) {
    const cancelled = controller.signal.aborted;
    spinner?.stop({
      ok: false,
      label: cancelled ? 'Login cancelled.' : 'Login failed.',
    });
    spinner = undefined;
    if (cancelled) return;
    log.warn('login failed', {
      providerName: DEFAULT_OAUTH_PROVIDER_NAME,
      alreadyLoggedIn,
      sessionId: host.session?.id,
      error,
    });
    const message = formatErrorMessage(error);
    host.showError(`Login failed: ${message}`);
  } finally {
    if (host.cancelInFlight === cancelLogin) {
      host.cancelInFlight = undefined;
    }
  }
}

async function handleOpenPlatformLogin(
  host: SlashCommandHost,
  platform: OpenPlatformDefinition,
): Promise<void> {
  const consoleHost = platform.consoleUrl?.replace(/^https?:\/\//, '') ?? '';
  const platformName = consoleHost.length > 0 ? `Open Platform (${consoleHost})` : 'Open Platform';
  const subtitleLines = [
    `${'base_url'.padEnd(12)}${platform.baseUrl}`,
    `${'saved to'.padEnd(12)}~/.nighthawk/config.toml`,
  ];
  const apiKey = await promptApiKey(host, platformName, subtitleLines);
  if (apiKey === undefined) return;

  const controller = new AbortController();
  const cancelLogin = (): void => {
    controller.abort();
  };
  host.cancelInFlight = cancelLogin;

  let models: ManagedNighthawkModelInfo[];
  try {
    models = await fetchOpenPlatformModels(platform, apiKey, fetch, controller.signal);
    models = filterModelsByPrefix(models, platform);
  } catch (error) {
    if (controller.signal.aborted) return;
    const msg = formatErrorMessage(error);
    host.showError(`Failed to verify API key: ${msg}`);
    if (
      error instanceof OpenPlatformApiError &&
      error.status === 401 &&
      platform.id.startsWith('nighthawk')
    ) {
      host.showStatus(
        'Hint: If your API key was obtained from NightHawk, please select "NightHawk" instead.',
      );
    }
    return;
  } finally {
    if (host.cancelInFlight === cancelLogin) {
      host.cancelInFlight = undefined;
    }
  }

  if (models.length === 0) {
    host.showError('No models available for this platform.');
    return;
  }

  const selection = await promptModelSelectionForOpenPlatform(host, models, platform);
  if (selection === undefined) return;

  const existingConfig = await host.harness.getConfig();
  if (existingConfig.providers[platform.id] !== undefined) {
    await host.harness.removeProvider(platform.id);
  }

  const config = await host.harness.getConfig();
  applyOpenPlatformConfig(config as ManagedNighthawkConfigShape, {
    platform,
    models,
    selectedModel: selection.model,
    thinking: selection.thinking !== 'off',
    effort:
      selection.thinking !== 'off' && selection.thinking !== 'on'
        ? selection.thinking
        : undefined,
    apiKey,
  });

  await host.harness.setConfig({
    providers: config.providers,
    models: config.models,
    defaultModel: config.defaultModel,
    thinking: config.thinking,
  });

  await host.authFlow.refreshConfigAfterLogin();
  host.track('login', { provider: platform.id, method: 'api_key' });
  host.showStatus(`Setup complete: ${platform.name} · ${selection.model.id}`);
}

export async function handleLogoutCommand(host: SlashCommandHost): Promise<void> {
  const oauthStatus = await host.harness.auth.status(DEFAULT_OAUTH_PROVIDER_NAME);
  const hasOAuthToken = oauthStatus.providers.some(
    (p) => p.providerName === DEFAULT_OAUTH_PROVIDER_NAME && p.hasToken,
  );
  const config = await host.harness.getConfig();
  const hasManagedRemnant =
    hasOAuthToken || config.providers[DEFAULT_OAUTH_PROVIDER_NAME] !== undefined;
  const apiKeyProviderIds = Object.keys(config.providers ?? {})
    .filter((id) => id !== DEFAULT_OAUTH_PROVIDER_NAME)
    .toSorted();

  const options: ChoiceOption[] = [];
  if (hasManagedRemnant) {
    options.push({
      value: DEFAULT_OAUTH_PROVIDER_NAME,
      label: PRODUCT_NAME,
      description: 'OAuth login',
    });
  }
  for (const id of apiKeyProviderIds) {
    const baseUrl = config.providers[id]?.baseUrl;
    options.push({
      value: id,
      label: id,
      description: typeof baseUrl === 'string' && baseUrl.length > 0 ? baseUrl : undefined,
    });
  }

  if (options.length === 0) {
    host.showStatus('Nothing to logout.');
    return;
  }

  const currentModel = host.state.appState.model.trim();
  const currentProvider = host.state.appState.availableModels[currentModel]?.provider;

  const target = await promptLogoutProviderSelection(host, options, currentProvider);
  if (target === undefined) return;

  if (target === DEFAULT_OAUTH_PROVIDER_NAME) {
    await host.harness.auth.logout(DEFAULT_OAUTH_PROVIDER_NAME);
  } else {
    await host.harness.removeProvider(target);
  }

  if (target === currentProvider) {
    await host.authFlow.refreshConfigAfterLogout();
  } else {
    const updated = await host.harness.getConfig({ reload: true });
    host.setAppState({
      availableModels: updated.models ?? {},
      availableProviders: updated.providers ?? {},
    });
  }
  refreshNighthawkRegion();

  host.track('logout', { provider: target });
  const label = target === DEFAULT_OAUTH_PROVIDER_NAME ? PRODUCT_NAME : target;
  host.showStatus(`Logged out from ${label}.`);
}
