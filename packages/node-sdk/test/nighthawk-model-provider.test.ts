import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import {
  NighthawkOAuthToolkit,
  OAuthConnectionError,
  OAuthError,
  OAuthUnauthorizedError,
  RetryableRefreshError,
} from '@nighthawk/nighthawk-oauth';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { ErrorCodes, NighthawkError, NighthawkForCodingProvider } from '#/index';

import { TEST_IDENTITY } from './test-identity';

describe('NighthawkForCodingProvider OAuth error mapping', () => {
  let homeDir: string;

  beforeEach(async () => {
    homeDir = await mkdtemp(join(tmpdir(), 'nighthawk-provider-'));
  });

  afterEach(async () => {
    vi.restoreAllMocks();
    await rm(homeDir, { recursive: true, force: true });
  });

  function resolveAuth() {
    const provider = new NighthawkForCodingProvider({ homeDir, ...TEST_IDENTITY });
    return provider.resolveAuth('nighthawk');
  }

  it('maps unauthorized token failures to auth.login_required', async () => {
    vi.spyOn(NighthawkOAuthToolkit.prototype, 'ensureFresh').mockRejectedValue(
      new OAuthUnauthorizedError('No token for "nighthawk". Run /login to authenticate.'),
    );

    const auth = resolveAuth();
    await expect(auth(async () => 'ok')).rejects.toMatchObject({
      code: ErrorCodes.AUTH_LOGIN_REQUIRED,
    });
  });

  it('maps transient token failures to provider.connection_error', async () => {
    const tokenErrors = [
      new OAuthConnectionError('OAuth request to https://example.test failed: fetch failed'),
      new RetryableRefreshError('Token refresh failed (HTTP 503).'),
    ];

    for (const tokenError of tokenErrors) {
      vi.spyOn(NighthawkOAuthToolkit.prototype, 'ensureFresh').mockRejectedValue(tokenError);

      const auth = resolveAuth();
      const caught = await auth(async () => 'ok').catch((error: unknown) => error);

      expect(caught).toBeInstanceOf(NighthawkError);
      expect(caught).toMatchObject({
        code: ErrorCodes.PROVIDER_CONNECTION_ERROR,
        message: expect.stringContaining(tokenError.message),
        cause: tokenError,
      });

      vi.restoreAllMocks();
    }
  });

  it('rethrows unrecognized OAuth errors raw instead of guessing a category', async () => {
    const oauthError = new OAuthError('Token refresh failed (HTTP 400).');
    vi.spyOn(NighthawkOAuthToolkit.prototype, 'ensureFresh').mockRejectedValue(oauthError);

    const auth = resolveAuth();
    await expect(auth(async () => 'ok')).rejects.toBe(oauthError);
  });
});
