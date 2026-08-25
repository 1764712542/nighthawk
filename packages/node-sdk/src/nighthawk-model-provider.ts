import {
  ErrorCodes,
  NighthawkError,
  resolveNighthawkHome,
  type Logger,
  type ModelProvider,
  type ResolvedRuntimeProvider,
} from '@nighthawk/agent-core';
import {
  createNighthawkDefaultHeaders,
  NIGHTHAWK_FLOW_CONFIG,
  NIGHTHAWK_PROVIDER_NAME,
  NighthawkOAuthToolkit,
  nighthawkBaseUrl,
  parseNighthawkCustomHeaders,
  resolveNighthawkOAuthRef,
  type NighthawkHostIdentity,
  type ManagedNighthawkOAuthRef,
} from '@nighthawk/nighthawk-oauth';
import type {
  ProviderConfig as KosongProviderConfig,
  ProviderRequestAuth,
} from '@nighthawk/kosong';
import { APIStatusError, UNKNOWN_CAPABILITY } from '@nighthawk/kosong';

import { mapOAuthTokenError } from '#/oauth-error';

export interface NighthawkForCodingProviderOptions extends NighthawkHostIdentity {
  readonly homeDir?: string;
  readonly model?: string;
  readonly baseUrl?: string;
  readonly promptCacheKey?: string;
  readonly defaultHeaders?: Record<string, string>;
}

export class NighthawkForCodingProvider implements ModelProvider {
  private readonly model: string;
  private readonly baseUrl: string;
  private readonly promptCacheKey: string | undefined;
  private readonly defaultHeaders: Record<string, string> | undefined;
  private readonly toolkit: NighthawkOAuthToolkit;
  private readonly homeDir: string;
  private readonly identity: NighthawkHostIdentity;
  private readonly oauthRef: ManagedNighthawkOAuthRef;

  constructor(options: NighthawkForCodingProviderOptions) {
    this.model = options.model ?? 'nighthawk';
    this.baseUrl = options.baseUrl ?? nighthawkBaseUrl();
    this.promptCacheKey = options.promptCacheKey;
    this.defaultHeaders = options.defaultHeaders;
    this.homeDir = resolveNighthawkHome(options.homeDir);
    this.identity = {
      productName: options.productName,
      version: options.version,
      platform: options.platform,
      userAgentSuffix: options.userAgentSuffix,
    };
    this.oauthRef = resolveNighthawkOAuthRef({
      oauthHost: NIGHTHAWK_FLOW_CONFIG.oauthHost,
      baseUrl: this.baseUrl,
    });
    this.toolkit = new NighthawkOAuthToolkit({
      homeDir: this.homeDir,
      identity: this.identity,
    });
  }

  get defaultModel(): string {
    return this.model;
  }

  resolveProviderConfig(model: string): ResolvedRuntimeProvider {
    if (model !== this.model) {
      throw new NighthawkError(
        ErrorCodes.CONFIG_INVALID,
        `Model "${model}" is not supported by NighthawkForCodingProvider.`,
      );
    }

    const provider: KosongProviderConfig = {
      type: 'nighthawk',
      model: this.model,
      baseUrl: this.baseUrl,
      generationKwargs: this.promptCacheKey
        ? { prompt_cache_key: this.promptCacheKey }
        : undefined,
      defaultHeaders: {
        ...parseNighthawkCustomHeaders(),
        ...createNighthawkDefaultHeaders({
          homeDir: this.homeDir,
          ...this.identity,
        }),
        ...this.defaultHeaders,
      },
    };

    return {
      providerName: 'nighthawk',
      provider,
      modelCapabilities: UNKNOWN_CAPABILITY,
      type: 'nighthawk',
      protocol: undefined,
    };
  }

  resolveAuth(_model: string, _options?: { readonly log?: Logger }) {
    return async <T>(request: (auth: ProviderRequestAuth) => Promise<T>): Promise<T> => {
      let auth = await this.buildAuth(false);
      for (let refreshed = false; ; refreshed = true) {
        try {
          return await request(auth);
        } catch (error) {
          const is401 = error instanceof APIStatusError && error.statusCode === 401;
          if (!is401) throw error;
          if (refreshed) {
            throw new NighthawkError(
              ErrorCodes.AUTH_LOGIN_REQUIRED,
              'OAuth token was rejected after refresh. Run /login to re-authenticate.',
              { cause: error },
            );
          }
          auth = await this.buildAuth(true);
        }
      }
    };
  }

  private async buildAuth(force: boolean): Promise<ProviderRequestAuth> {
    try {
      const apiKey = await this.toolkit.ensureFresh(NIGHTHAWK_PROVIDER_NAME, {
        force,
        oauthRef: this.oauthRef,
      });
      return { apiKey };
    } catch (error) {
      // Classify OAuth token failures into the public NighthawkError protocol so the
      // turn surfaces `auth.login_required` / `provider.connection_error`
      // instead of collapsing everything to `internal`. Unrecognized errors are
      // rethrown raw (see mapOAuthTokenError).
      throw mapOAuthTokenError(error, NIGHTHAWK_PROVIDER_NAME) ?? error;
    }
  }
}
