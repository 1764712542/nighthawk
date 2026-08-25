import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { afterEach, describe, expect, it } from 'vitest';

import type { NighthawkConfig } from '@nighthawk/agent-core';
import { createNighthawkDefaultHeaders, NIGHTHAWK_PLATFORM } from '@nighthawk/nighthawk-oauth';

import { ProviderManager } from '../../agent-core/src/session/provider-manager';
import { SDKRpcClient } from '#/index';
import { TEST_IDENTITY } from './test-identity';

const tempDirs: string[] = [];

function resolveRuntimeProvider(options: {
  readonly config: NighthawkConfig;
  readonly model?: string;
  readonly nighthawkRequestHeaders?: Record<string, string>;
}) {
  const manager = new ProviderManager({
    config: options.config,
    nighthawkRequestHeaders: options.nighthawkRequestHeaders,
  });
  const model = options.model ?? options.config.defaultModel;
  if (model === undefined) {
    throw new Error('No model selected');
  }
  return manager.resolveProviderConfig(model);
}

async function makeTempDir(): Promise<string> {
  const dir = await mkdtemp(join(tmpdir(), 'nighthawk-sdk-provider-identity-'));
  tempDirs.push(dir);
  return dir;
}

afterEach(async () => {
  for (const dir of tempDirs.splice(0)) {
    await rm(dir, { recursive: true, force: true });
  }
});

describe('runtime provider identity headers', () => {
  it('preserves the host user agent suffix in SDK RPC headers', async () => {
    const homeDir = await makeTempDir();
    const client = new SDKRpcClient({
      homeDir,
      identity: {
        ...TEST_IDENTITY,
        userAgentSuffix: 'web-runtime',
      },
    });
    const core = client.core as unknown as {
      readonly nighthawkRequestHeaders?: Record<string, string>;
    };

    try {
      expect(core.nighthawkRequestHeaders).toMatchObject({
        'User-Agent': 'nighthawk-cli/0.0.0-test (web-runtime)',
        'X-Msh-Version': '0.0.0-test',
      });
    } finally {
      await client.close();
    }
  });

  it('adds nighthawk-cli User-Agent and complete X-Msh headers to the default NightHawk provider', async () => {
    const homeDir = await makeTempDir();
    const nighthawkRequestHeaders = createNighthawkDefaultHeaders({ homeDir, ...TEST_IDENTITY });
    const resolved = resolveRuntimeProvider({
      config: {
        defaultModel: 'nighthawk-model',
        providers: {
          nighthawk: {
            type: 'nighthawk',
            apiKey: 'test-key',
          },
        },
        models: {
          'nighthawk-model': {
            provider: 'nighthawk',
            model: 'nighthawk-model',
            maxContextSize: 1000,
          },
        },
      },
      nighthawkRequestHeaders,
    });

    expect(resolved.provider).toMatchObject({
      type: 'nighthawk',
      defaultHeaders: expect.objectContaining({
        'User-Agent': 'nighthawk-cli/0.0.0-test',
        'X-Msh-Platform': NIGHTHAWK_PLATFORM,
        'X-Msh-Version': '0.0.0-test',
        'X-Msh-Device-Name': expect.any(String),
        'X-Msh-Device-Model': expect.any(String),
        'X-Msh-Os-Version': expect.any(String),
        'X-Msh-Device-Id': expect.stringMatching(/^[0-9a-f-]+$/),
      }),
    });
  });

  it('lets NightHawk provider customHeaders override default identity headers', async () => {
    const homeDir = await makeTempDir();
    const nighthawkRequestHeaders = createNighthawkDefaultHeaders({ homeDir, ...TEST_IDENTITY });
    const config: NighthawkConfig = {
      providers: {
        nighthawk: {
          type: 'nighthawk',
          apiKey: 'test-key',
          customHeaders: {
            'User-Agent': 'Custom/1',
            'X-Msh-Version': 'override-version',
          },
        },
      },
      defaultProvider: 'nighthawk',
      defaultModel: 'nighthawk-model',
      models: {
        'nighthawk-model': {
          provider: 'nighthawk',
          model: 'nighthawk-model',
          maxContextSize: 1000,
        },
      },
    };

    const resolved = resolveRuntimeProvider({
      config,
      nighthawkRequestHeaders,
    });

    expect(resolved.provider).toMatchObject({
      type: 'nighthawk',
      defaultHeaders: expect.objectContaining({
        'User-Agent': 'Custom/1',
        'X-Msh-Version': 'override-version',
        'X-Msh-Platform': NIGHTHAWK_PLATFORM,
      }),
    });
  });

  it('applies only the User-Agent (no device identity headers) to non-NightHawk providers', async () => {
    const homeDir = await makeTempDir();
    const nighthawkRequestHeaders = createNighthawkDefaultHeaders({ homeDir, ...TEST_IDENTITY });
    const config: NighthawkConfig = {
      providers: {
        openai: {
          type: 'openai',
          baseUrl: 'https://example.test/v1',
          apiKey: 'sk-test',
        },
      },
      defaultProvider: 'openai',
      defaultModel: 'gpt-test',
      models: {
        'gpt-test': {
          provider: 'openai',
          model: 'gpt-test',
          maxContextSize: 1000,
        },
      },
    };

    const resolved = resolveRuntimeProvider({
      config,
      nighthawkRequestHeaders,
    });

    expect(resolved.provider).toMatchObject({
      type: 'openai',
      model: 'gpt-test',
      defaultHeaders: {
        'User-Agent': `nighthawk-cli/${TEST_IDENTITY.version}`,
      },
    });
    // Device identity headers (`X-Msh-*`) stay NightHawk-only — must not leak to
    // third-party providers.
    const headers = (resolved.provider as { defaultHeaders?: Record<string, string> })
      .defaultHeaders;
    expect(headers).toBeDefined();
    expect(headers).not.toHaveProperty('X-Msh-Platform');
  });
});
