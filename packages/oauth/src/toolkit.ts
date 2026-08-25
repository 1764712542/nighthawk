import { homedir } from 'node:os';
import { join } from 'node:path';

import { NIGHTHAWK_FLOW_CONFIG } from './constants';
import { OAuthUnauthorizedError } from './errors';
import {
  assertNighthawkHostIdentity,
  createNighthawkDefaultHeaders,
  type NighthawkHostIdentity,
} from './identity';
import {
  fetchSubmitFeedback,
  nighthawkFeedbackUrl,
  type FetchSubmitFeedbackResult,
  type SubmitFeedbackBody,
} from './managed-feedback';
import {
  fetchCompleteFeedbackUpload,
  fetchCreateFeedbackUploadUrl,
  type CompleteFeedbackUploadBody,
  type CreateFeedbackUploadUrlBody,
  type FetchCompleteFeedbackUploadResult,
  type FetchCreateFeedbackUploadUrlResult,
} from './managed-feedback-upload';
import {
  NIGHTHAWK_OAUTH_KEY,
  NIGHTHAWK_PROVIDER_NAME,
  provisionManagedNighthawkConfig,
  resolveNighthawkOAuthKey,
  type ManagedNighthawkProvisionResult,
  type ManagedNighthawkConfigAdapter,
} from './managed-nighthawk';
import {
  fetchManagedUserInfo,
  nighthawkUserInfoUrl,
  type ManagedUserInfoResult,
} from './managed-userinfo';
import {
  fetchManagedUsage,
  nighthawkUsageUrl,
  type FetchManagedUsageError,
  type ParsedManagedUsage,
} from './managed-usage';
import { OAuthManager, type LoginOptions, type OAuthManagerOptions } from './oauth-manager';
import { FileTokenStorage, type TokenStorage } from './storage';
import type { OAuthFlowConfig } from './types';

export interface BearerTokenProvider {
  getAccessToken(options?: { readonly force?: boolean | undefined }): Promise<string>;
}

export interface AuthProviderStatus {
  readonly providerName: string;
  readonly hasToken: boolean;
}

export interface AuthStatus {
  readonly providers: readonly AuthProviderStatus[];
}

export interface NighthawkOAuthToolkitOptions<TConfig = unknown> {
  readonly identity?: NighthawkHostIdentity | undefined;
  readonly homeDir?: string | undefined;
  readonly credentialsDir?: string | undefined;
  readonly storage?: TokenStorage | undefined;
  readonly flowConfig?: OAuthFlowConfig | undefined;
  readonly configAdapter?: ManagedNighthawkConfigAdapter<TConfig> | undefined;
  readonly fetchImpl?: typeof fetch | undefined;
  readonly now?: OAuthManagerOptions['now'];
  readonly sleep?: OAuthManagerOptions['sleep'];
  readonly deviceCodeTimeoutMs?: number | undefined;
  readonly refreshThreshold?: OAuthManagerOptions['refreshThreshold'];
  readonly onRefresh?: OAuthManagerOptions['onRefresh'];
}

export interface NighthawkOAuthLoginOptions extends LoginOptions {
  readonly provisionConfig?: boolean | undefined;
  readonly baseUrl?: string | undefined;
  readonly oauthRef?: NighthawkOAuthTokenRef | undefined;
  readonly oauthHost?: string | undefined;
}

export interface NighthawkOAuthTokenRef {
  readonly key?: string | undefined;
  readonly oauthHost?: string | undefined;
}

export interface NighthawkOAuthLoginResult {
  readonly providerName: string;
  readonly ok: true;
  readonly provision?: ManagedNighthawkProvisionResult | undefined;
}

export interface NighthawkOAuthLogoutResult {
  readonly providerName: string;
  readonly ok: true;
}

export type AuthManagedUsageResult =
  | {
      readonly kind: 'ok';
      readonly summary: ParsedManagedUsage['summary'];
      readonly limits: ParsedManagedUsage['limits'];
      readonly extraUsage: ParsedManagedUsage['extraUsage'];
    }
  | FetchManagedUsageError;

export type AuthManagedUserInfoResult = ManagedUserInfoResult;

export class NighthawkOAuthToolkit<TConfig = unknown> {
  private readonly homeDir: string;
  private readonly identity: NighthawkHostIdentity | undefined;
  private readonly storage: TokenStorage;
  private readonly flowConfig: OAuthFlowConfig;
  private readonly configAdapter: ManagedNighthawkConfigAdapter<TConfig> | undefined;
  private readonly fetchImpl: typeof fetch | undefined;
  private readonly managerOptions: Pick<
    OAuthManagerOptions,
    'now' | 'sleep' | 'deviceCodeTimeoutMs' | 'refreshThreshold' | 'onRefresh'
  >;
  private readonly managers = new Map<string, OAuthManager>();
  private _identityHeaders: Record<string, string> | undefined;

  constructor(options: NighthawkOAuthToolkitOptions<TConfig>) {
    this.identity =
      options.identity === undefined ? undefined : assertNighthawkHostIdentity(options.identity);
    this.homeDir = options.homeDir ?? defaultNighthawkHome();
    const credentialsDir = options.credentialsDir ?? join(this.homeDir, 'credentials');
    this.storage = options.storage ?? new FileTokenStorage(credentialsDir);
    this.flowConfig = options.flowConfig ?? NIGHTHAWK_FLOW_CONFIG;
    this.configAdapter = options.configAdapter;
    this.fetchImpl = options.fetchImpl;
    this.managerOptions = {
      now: options.now,
      sleep: options.sleep,
      deviceCodeTimeoutMs: options.deviceCodeTimeoutMs,
      refreshThreshold: options.refreshThreshold,
      onRefresh: options.onRefresh,
    };
  }

  async status(
    providerName?: string | undefined,
    oauthRef?: NighthawkOAuthTokenRef | undefined,
  ): Promise<AuthStatus> {
    const name = providerName ?? NIGHTHAWK_PROVIDER_NAME;
    const oauthHost = this.oauthHostFor(oauthRef);
    const oauthKey = oauthRef?.key ?? this.defaultOAuthKey(undefined, oauthHost);
    return {
      providers: [
        {
          providerName: name,
          hasToken: await this.managerFor(name, oauthKey, oauthHost).hasToken(),
        },
      ],
    };
  }

  async login(
    providerName?: string | undefined,
    options: NighthawkOAuthLoginOptions = {},
  ): Promise<NighthawkOAuthLoginResult> {
    const name = providerName ?? NIGHTHAWK_PROVIDER_NAME;
    const oauthHost = this.oauthHostFor(options.oauthRef, options.oauthHost);
    const oauthKey = options.oauthRef?.key ?? this.defaultOAuthKey(options.baseUrl, oauthHost);
    const manager = this.managerFor(name, oauthKey, oauthHost);
    const hadToken = await manager.hasToken();
    let usedDeviceLogin = false;
    const loginWithDevice = async (): Promise<string> => {
      usedDeviceLogin = true;
      return (
        await manager.login({
          signal: options.signal,
          onDeviceCode: options.onDeviceCode,
        })
      ).accessToken;
    };
    let accessToken: string;
    if (hadToken) {
      try {
        accessToken = await manager.ensureFresh();
      } catch (error) {
        if (!(error instanceof OAuthUnauthorizedError)) throw error;
        accessToken = await loginWithDevice();
      }
    } else {
      accessToken = await loginWithDevice();
    }

    const shouldProvision = options.provisionConfig ?? this.configAdapter !== undefined;
    const configAdapter = this.configAdapter;
    let provision: ManagedNighthawkProvisionResult | undefined;
    if (shouldProvision && configAdapter !== undefined) {
      const provisionWithToken = (token: string): Promise<ManagedNighthawkProvisionResult> =>
        provisionManagedNighthawkConfig({
          accessToken: token,
          adapter: configAdapter,
          baseUrl: options.baseUrl,
          oauthKey,
          oauthHost,
          preserveDefaultModel: hadToken,
          fetchImpl: this.fetchImpl,
          headers: this.identityHeaders(),
        });
      try {
        provision = await provisionWithToken(accessToken);
      } catch (error) {
        if (!(error instanceof OAuthUnauthorizedError) || !hadToken || usedDeviceLogin) {
          throw error;
        }
        let retryToken: string;
        try {
          retryToken = await manager.ensureFresh({ force: true });
        } catch (refreshError) {
          if (!(refreshError instanceof OAuthUnauthorizedError)) throw refreshError;
          retryToken = await loginWithDevice();
        }
        try {
          provision = await provisionWithToken(retryToken);
        } catch (retryError) {
          if (!(retryError instanceof OAuthUnauthorizedError) || usedDeviceLogin) {
            throw retryError;
          }
          provision = await provisionWithToken(await loginWithDevice());
        }
      }
    }

    return { providerName: name, ok: true, provision };
  }

  async logout(
    providerName?: string | undefined,
    oauthRef?: NighthawkOAuthTokenRef | undefined,
  ): Promise<NighthawkOAuthLogoutResult> {
    const name = providerName ?? NIGHTHAWK_PROVIDER_NAME;
    const oauthHost = this.oauthHostFor(oauthRef);
    const oauthKey = oauthRef?.key ?? this.defaultOAuthKey(undefined, oauthHost);
    await this.managerFor(name, oauthKey, oauthHost).logout();
    if (this.configAdapter?.remove !== undefined && name === NIGHTHAWK_PROVIDER_NAME) {
      const config = await this.configAdapter.read();
      this.configAdapter.remove(config);
      await this.configAdapter.write(config);
    }
    return { providerName: name, ok: true };
  }

  async ensureFresh(
    providerName?: string | undefined,
    options: {
      readonly force?: boolean | undefined;
      readonly oauthRef?: NighthawkOAuthTokenRef | undefined;
    } = {},
  ): Promise<string> {
    const name = providerName ?? NIGHTHAWK_PROVIDER_NAME;
    const oauthHost = this.oauthHostFor(options.oauthRef);
    const oauthKey = options.oauthRef?.key ?? this.defaultOAuthKey(undefined, oauthHost);
    return this.managerFor(name, oauthKey, oauthHost).ensureFresh(options);
  }

  async getCachedAccessToken(
    providerName?: string,
    oauthRef?: NighthawkOAuthTokenRef,
  ): Promise<string | undefined> {
    const name = providerName ?? NIGHTHAWK_PROVIDER_NAME;
    const oauthHost = this.oauthHostFor(oauthRef);
    const oauthKey = oauthRef?.key ?? this.defaultOAuthKey(undefined, oauthHost);
    return this.managerFor(name, oauthKey, oauthHost).getCachedAccessToken();
  }

  tokenProvider(
    providerName?: string | undefined,
    oauthRef?: NighthawkOAuthTokenRef | undefined,
  ): BearerTokenProvider {
    const name = providerName ?? NIGHTHAWK_PROVIDER_NAME;
    const oauthHost = this.oauthHostFor(oauthRef);
    const oauthKey = oauthRef?.key ?? this.defaultOAuthKey(undefined, oauthHost);
    return {
      getAccessToken: (options) => this.managerFor(name, oauthKey, oauthHost).ensureFresh(options),
    };
  }

  async getManagedUsage(
    providerName?: string | undefined,
    options: {
      readonly oauthRef?: NighthawkOAuthTokenRef | undefined;
      readonly baseUrl?: string | undefined;
    } = {},
  ): Promise<AuthManagedUsageResult> {
    const name = providerName ?? NIGHTHAWK_PROVIDER_NAME;
    try {
      const accessToken = await this.ensureFresh(name, {
        oauthRef: options.oauthRef ?? this.defaultOAuthRef(options.baseUrl),
      });
      const result = await fetchManagedUsage(managedUsageUrl(options.baseUrl), accessToken);
      if (result.kind === 'error') return result;
      return {
        kind: 'ok',
        summary: result.parsed.summary,
        limits: result.parsed.limits,
        extraUsage: result.parsed.extraUsage,
      };
    } catch (error) {
      return {
        kind: 'error',
        message: error instanceof Error ? error.message : String(error),
      };
    }
  }

  async getManagedUserInfo(
    providerName?: string | undefined,
    options: {
      readonly oauthRef?: NighthawkOAuthTokenRef | undefined;
      readonly baseUrl?: string | undefined;
    } = {},
  ): Promise<AuthManagedUserInfoResult> {
    const name = providerName ?? NIGHTHAWK_PROVIDER_NAME;
    try {
      const accessToken = await this.ensureFresh(name, {
        oauthRef: options.oauthRef ?? this.defaultOAuthRef(options.baseUrl),
      });
      const result = await fetchManagedUserInfo(managedUserInfoUrl(options.baseUrl), accessToken);
      if (result.kind === 'error') return result;
      return { kind: 'ok', userInfo: result.userInfo };
    } catch (error) {
      return {
        kind: 'error',
        message: error instanceof Error ? error.message : String(error),
      };
    }
  }

  async submitFeedback(
    body: SubmitFeedbackBody,
    providerName?: string | undefined,
    options: {
      readonly oauthRef?: NighthawkOAuthTokenRef | undefined;
      readonly baseUrl?: string | undefined;
    } = {},
  ): Promise<FetchSubmitFeedbackResult> {
    return this.withAccessToken(
      providerName,
      options,
      (accessToken) => fetchSubmitFeedback(managedFeedbackUrl(options.baseUrl), accessToken, body),
    );
  }

  private async withAccessToken<T>(
    providerName: string | undefined,
    options: {
      readonly oauthRef?: NighthawkOAuthTokenRef | undefined;
      readonly baseUrl?: string | undefined;
    },
    run: (accessToken: string) => Promise<T>,
  ): Promise<T | { readonly kind: 'error'; readonly message: string }> {
    const name = providerName ?? NIGHTHAWK_PROVIDER_NAME;
    try {
      const accessToken = await this.ensureFresh(name, {
        oauthRef: options.oauthRef ?? this.defaultOAuthRef(options.baseUrl),
      });
      return await run(accessToken);
    } catch (error) {
      return {
        kind: 'error',
        message: error instanceof Error ? error.message : String(error),
      };
    }
  }

  async createFeedbackUploadUrl(
    body: CreateFeedbackUploadUrlBody,
    providerName?: string | undefined,
    options: {
      readonly oauthRef?: NighthawkOAuthTokenRef | undefined;
      readonly baseUrl?: string | undefined;
    } = {},
  ): Promise<FetchCreateFeedbackUploadUrlResult> {
    return this.withAccessToken(
      providerName,
      options,
      (accessToken) => fetchCreateFeedbackUploadUrl(accessToken, body, { baseUrl: options.baseUrl }),
    );
  }

  async completeFeedbackUpload(
    body: CompleteFeedbackUploadBody,
    providerName?: string | undefined,
    options: {
      readonly oauthRef?: NighthawkOAuthTokenRef | undefined;
      readonly baseUrl?: string | undefined;
    } = {},
  ): Promise<FetchCompleteFeedbackUploadResult> {
    return this.withAccessToken(
      providerName,
      options,
      (accessToken) => fetchCompleteFeedbackUpload(accessToken, body, { baseUrl: options.baseUrl }),
    );
  }

  managerFor(
    providerName: string,
    oauthKey = NIGHTHAWK_OAUTH_KEY,
    oauthHost?: string | undefined,
  ): OAuthManager {
    const storageName = resolveNighthawkTokenStorageName({ providerName, oauthKey });
    const effectiveOAuthHost = oauthHost ?? this.flowConfig.oauthHost;
    const managerKey = `${storageName}\0${normalizeOAuthHost(effectiveOAuthHost)}`;
    let manager = this.managers.get(managerKey);
    if (manager !== undefined) return manager;

    const identity = this.identity;
    manager = new OAuthManager({
      config: {
        ...this.flowConfig,
        oauthHost: effectiveOAuthHost,
        name: storageName,
      },
      storage: this.storage,
      configDir: this.homeDir,
      deviceHeaders:
        identity === undefined
          ? undefined
          : () =>
              // Full identity headers (User-Agent + X-Msh-*): the OAuth host
              // reads the platform for the client family and the UA (suffix)
              // for the runtime surface, e.g. nighthawk web's `(web)`.
              createNighthawkDefaultHeaders({
                homeDir: this.homeDir,
                ...identity,
              }),
      ...this.managerOptions,
    });
    this.managers.set(managerKey, manager);
    return manager;
  }

  private defaultOAuthKey(
    baseUrl?: string | undefined,
    oauthHost?: string | undefined,
  ): string {
    return resolveNighthawkOAuthKey({
      oauthHost: oauthHost ?? this.flowConfig.oauthHost,
      baseUrl,
    });
  }

  private defaultOAuthRef(baseUrl?: string | undefined): NighthawkOAuthTokenRef {
    return {
      key: this.defaultOAuthKey(baseUrl, this.flowConfig.oauthHost),
      oauthHost: this.flowConfig.oauthHost,
    };
  }

  private oauthHostFor(
    oauthRef?: NighthawkOAuthTokenRef | undefined,
    oauthHost?: string | undefined,
  ): string {
    return oauthRef?.oauthHost ?? oauthHost ?? this.flowConfig.oauthHost;
  }

  private identityHeaders(): Record<string, string> | undefined {
    if (this.identity === undefined) return undefined;
    this._identityHeaders ??= createNighthawkDefaultHeaders({
      homeDir: this.homeDir,
      ...this.identity,
    });
    return this._identityHeaders;
  }
}

export function resolveNighthawkTokenStorageName(input: {
  readonly providerName?: string | undefined;
  readonly oauthKey?: string | undefined;
}): string {
  const key = input.oauthKey ?? NIGHTHAWK_OAUTH_KEY;
  if (key === 'nighthawk' || key === NIGHTHAWK_OAUTH_KEY) return 'nighthawk';

  const prefix = 'oauth/';
  if (key.startsWith(prefix) && key.slice(prefix.length).length > 0) {
    return key.slice(prefix.length);
  }

  if (!key.includes('/') && !key.startsWith('.')) return key;
  throw new Error(`Invalid NightHawk OAuth token key: "${key}".`);
}

function defaultNighthawkHome(): string {
  const override = process.env['NIGHTHAWK_HOME'];
  if (override !== undefined && override.length > 0) return override;
  return join(homedir(), '.nighthawk');
}

function managedUsageUrl(baseUrl: string | undefined): string {
  if (baseUrl === undefined) return nighthawkUsageUrl();
  return `${baseUrl.replace(/\/+$/, '')}/usages`;
}

function managedUserInfoUrl(baseUrl: string | undefined): string {
  if (baseUrl === undefined) return nighthawkUserInfoUrl();
  return `${baseUrl.replace(/\/+$/, '')}/me`;
}

function managedFeedbackUrl(baseUrl: string | undefined): string {
  return nighthawkFeedbackUrl(baseUrl);
}

function normalizeOAuthHost(oauthHost: string): string {
  return oauthHost.trim().replace(/\/+$/, '');
}
