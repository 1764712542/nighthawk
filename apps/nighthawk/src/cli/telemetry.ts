import { createNighthawkDeviceId, NIGHTHAWK_PROVIDER_NAME } from '@nighthawk/nighthawk-oauth';
import {
  NighthawkAuthFacade,
  loadRuntimeConfigSafe,
  resolveConfigPath,
  resolveNighthawkHome,
  type NighthawkConfig,
  type TelemetryClient,
} from '@nighthawk/nighthawk-sdk';

import type { PromptHarness } from './prompt-session';
import {
  initializeTelemetry,
  setTelemetryContext,
  track,
  withTelemetryContext,
} from '@nighthawk/telemetry';

import { CLI_USER_AGENT_PRODUCT, WEB_UI_MODE } from '#/constant/app';
import { nighthawkTelemetryEndpoint } from '#/utils/region';

import { createNighthawkHostIdentity } from './version';

export interface CliTelemetryBootstrap {
  readonly homeDir: string;
  readonly deviceId: string;
  readonly firstLaunch: boolean;
}

export interface InitializeCliTelemetryOptions {
  readonly harness: PromptHarness;
  readonly bootstrap: CliTelemetryBootstrap;
  readonly config: Pick<NighthawkConfig, 'defaultModel' | 'telemetry'>;
  readonly version: string;
  readonly uiMode: string;
  readonly model?: string;
  readonly sessionId?: string;
}

export function createCliTelemetryBootstrap(): CliTelemetryBootstrap {
  let firstLaunch = false;
  const homeDir = resolveNighthawkHome();
  const deviceId = createNighthawkDeviceId(homeDir, {
    onFirstLaunch: () => {
      firstLaunch = true;
    },
  });
  return { homeDir, deviceId, firstLaunch };
}

export function initializeCliTelemetry(options: InitializeCliTelemetryOptions): void {
  initializeTelemetry({
    homeDir: options.harness.homeDir,
    deviceId: options.bootstrap.deviceId,
    enabled: options.config.telemetry !== false,
    appName: CLI_USER_AGENT_PRODUCT,
    version: options.version,
    uiMode: options.uiMode,
    model: options.model ?? options.config.defaultModel,
    sessionId: options.sessionId,
    endpoint: () => nighthawkTelemetryEndpoint(),
    getAccessToken: async () =>
      (await options.harness.auth.getCachedAccessToken(NIGHTHAWK_PROVIDER_NAME)) ?? null,
  });
  if (options.bootstrap.firstLaunch) {
    options.harness.track('first_launch');
  }
}

export interface InitializeServerTelemetryOptions {
  readonly version: string;
}

/**
 * Bootstrap telemetry for the `nighthawk web` host.
 *
 * Mirrors {@link initializeCliTelemetry}: mints the device id, reads config to
 * honor the `telemetry` toggle and pick up the default model, attaches the
 * sink with `ui_mode = "web"`, and returns a {@link TelemetryClient} the
 * caller hands to `startServer` via `coreProcessOptions.telemetry`. That wires
 * the same real client into `NighthawkCore`, so agent-core events emitted inside the
 * server process (`mcp_connected`, `session_load_failed`, plan-mode / cron
 * events, …) actually leave the process carrying the enriched context
 * (`app_name` / `version` / `ui_mode` / `model` / platform fields).
 *
 * The returned client wraps the `@nighthawk/telemetry` module
 * functions, so the module-level `track` / `withTelemetryContext` (used to
 * fire the startup event) share the same underlying client + sink.
 */
export function initializeServerTelemetry(
  options: InitializeServerTelemetryOptions,
): TelemetryClient {
  const bootstrap = createCliTelemetryBootstrap();
  const configPath = resolveConfigPath({ homeDir: bootstrap.homeDir });
  const config = readServerTelemetryConfig(configPath);
  const auth = new NighthawkAuthFacade({
    homeDir: bootstrap.homeDir,
    configPath,
    identity: createNighthawkHostIdentity(options.version),
  });

  initializeTelemetry({
    homeDir: bootstrap.homeDir,
    deviceId: bootstrap.deviceId,
    enabled: config.telemetry !== false,
    appName: CLI_USER_AGENT_PRODUCT,
    version: options.version,
    uiMode: WEB_UI_MODE,
    model: config.defaultModel,
    endpoint: () => nighthawkTelemetryEndpoint(),
    getAccessToken: async () => (await auth.getCachedAccessToken(NIGHTHAWK_PROVIDER_NAME)) ?? null,
  });

  return {
    track,
    withContext: withTelemetryContext,
    setContext: setTelemetryContext,
  };
}

function readServerTelemetryConfig(
  configPath: string,
): Pick<NighthawkConfig, 'telemetry' | 'defaultModel'> {
  try {
    const { config, fileError } = loadRuntimeConfigSafe(configPath);
    // A broken config fails the server on its own inside NighthawkCore; for
    // telemetry just degrade to "enabled, no model" so we never block startup.
    if (fileError !== undefined) return {};
    return config;
  } catch {
    return {};
  }
}
