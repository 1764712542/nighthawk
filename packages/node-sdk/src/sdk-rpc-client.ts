import {
  createRPC,
  ensureConfigFile,
  getRootLogger,
  NighthawkCore,
  noopTelemetryClient,
  resolveConfigPath,
  resolveNighthawkHome,
  resolveLoggingConfig,
  type CoreAPI,
  type OAuthTokenProviderResolver,
  type RPCMethods,
  type SDKAPI,
  type TelemetryClient,
} from '@nighthawk/agent-core';
import type { Kaos } from '@nighthawk/kaos';
import { assertNighthawkHostIdentity, createNighthawkDefaultHeaders } from '@nighthawk/nighthawk-oauth';

import { NighthawkAuthFacade } from '#/auth';
import { NighthawkHarness } from '#/nighthawk-harness';
import { ClientAPI, SDKRpcClientBase } from '#/rpc';
import type {
  CreateSessionOptions,
  NighthawkHarnessOptions,
  NighthawkHostIdentity,
  OAuthRefreshOutcome,
  ResumeSessionInput,
  ResumedSessionSummary,
  SessionSummary,
} from '#/types';

export interface SDKRpcClientOptions {
  readonly homeDir?: string;
  readonly configPath?: string;
  readonly identity?: NighthawkHostIdentity;
  readonly resolveOAuthTokenProvider?: OAuthTokenProviderResolver;
  readonly skillDirs?: readonly string[];
  readonly telemetry?: TelemetryClient;
  readonly onOAuthRefresh?: (outcome: OAuthRefreshOutcome) => void;
  /**
   * Host UI mode (`'print'` for `nighthawk -p`, `'cli'` for the TUI, ...). Forwarded
   * to the v1 core, which applies print-mode config defaults when it is
   * `'print'`.
   */
  readonly uiMode?: string;
}

export class SDKRpcClient extends SDKRpcClientBase {
  readonly homeDir: string;
  readonly configPath: string;
  readonly identity: NighthawkHostIdentity | undefined;
  readonly telemetry: TelemetryClient;
  readonly auth: NighthawkAuthFacade;
  readonly core: NighthawkCore;

  private readonly ready: Promise<RPCMethods<CoreAPI>>;

  constructor(options: SDKRpcClientOptions = {}) {
    super();
    this.identity =
      options.identity === undefined ? undefined : assertNighthawkHostIdentity(options.identity);
    this.homeDir = resolveNighthawkHome(options.homeDir);
    this.configPath = resolveConfigPath({
      homeDir: this.homeDir,
      configPath: options.configPath,
    });
    this.telemetry = options.telemetry ?? noopTelemetryClient;
    this.auth = new NighthawkAuthFacade({
      homeDir: this.homeDir,
      configPath: this.configPath,
      identity: this.identity,
      onRefresh: options.onOAuthRefresh,
    });

    void getRootLogger().configure(resolveLoggingConfig({ homeDir: this.homeDir }));

    const [coreRpc, sdkRpc] = createRPC<CoreAPI, SDKAPI>();
    this.core = new NighthawkCore(coreRpc, {
      homeDir: options.homeDir,
      configPath: this.configPath,
      nighthawkRequestHeaders: this.createNighthawkRequestHeaders(),
      resolveOAuthTokenProvider:
        options.resolveOAuthTokenProvider ?? this.auth.resolveOAuthTokenProvider,
      skillDirs: options.skillDirs,
      telemetry: this.telemetry,
      appVersion: this.identity?.version,
      uiMode: options.uiMode,
    });
    this.ready = sdkRpc(new ClientAPI(this));
  }

  async ensureConfigFile(): Promise<void> {
    await ensureConfigFile(this.configPath);
  }

  async close(): Promise<void> {
    try {
      // Close live sessions and stop the shared MCP OAuth service (proactive
      // refresh timers, in-flight authorization flows) before flushing logs.
      await this.core.shutdown();
    } catch {
      // never let core shutdown block process exit
    }
    try {
      await getRootLogger().flush();
    } catch {
      // never let logger flush block process exit
    }
  }

  protected async getRpc(): Promise<RPCMethods<CoreAPI>> {
    return this.ready;
  }

  override async createSessionWithKaos(
    input: CreateSessionOptions,
    kaos: Kaos,
    persistenceKaos?: Kaos,
  ): Promise<SessionSummary> {
    const { planMode, ...coreInput } = input;
    void planMode;
    return this.core.createSessionWithOverrides(coreInput, { kaos, persistenceKaos });
  }

  override async resumeSessionWithKaos(
    input: ResumeSessionInput,
    kaos: Kaos,
    persistenceKaos?: Kaos,
  ): Promise<ResumedSessionSummary> {
    return this.core.resumeSessionWithOverrides(
      { ...input, sessionId: input.id },
      { kaos, persistenceKaos },
    );
  }

  private createNighthawkRequestHeaders(): Record<string, string> | undefined {
    if (this.identity === undefined) return undefined;
    return createNighthawkDefaultHeaders({
      homeDir: this.homeDir,
      ...this.identity,
    });
  }
}

export function createNighthawkHarness(options: NighthawkHarnessOptions): NighthawkHarness {
  const rpc = new SDKRpcClient(options);
  return new NighthawkHarness(rpc, {
    identity: rpc.identity,
    uiMode: options.uiMode,
    homeDir: rpc.homeDir,
    configPath: rpc.configPath,
    auth: rpc.auth,
    telemetry: rpc.telemetry,
    ensureConfigFile: () => rpc.ensureConfigFile(),
    onClose: () => rpc.close(),
    imageLimits: rpc.core.imageLimits,
    sessionStartedProperties: options.sessionStartedProperties,
  });
}
