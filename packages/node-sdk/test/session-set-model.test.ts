import { join } from 'node:path';

import { FileTokenStorage, type TokenInfo } from '@nighthawk/nighthawk-oauth';
import { afterEach, describe, expect, it } from 'vitest';

import { createNighthawkHarness, type NighthawkError, type NighthawkHarness } from '#/index';
import { makeTempDir, removeTempDirs, waitForAgentWireEvent } from './session-runtime-helpers';
import { TEST_IDENTITY } from './test-identity';

const tempDirs: string[] = [];

function freshToken(): TokenInfo {
  return {
    accessToken: 'oauth-access-token',
    refreshToken: 'oauth-refresh-token',
    expiresAt: Math.floor(Date.now() / 1000) + 3600,
    scope: '',
    tokenType: 'Bearer',
    expiresIn: 3600,
  };
}

afterEach(async () => {
  await removeTempDirs(tempDirs);
});

describe('Session.setModel', () => {
  it('updates the runtime model and sends config.update with the resolved model', async () => {
    const homeDir = await makeTempDir(tempDirs, 'nighthawk-sdk-model-home-');
    const workDir = await makeTempDir(tempDirs, 'nighthawk-sdk-model-work-');
    const harness = createNighthawkHarness({ homeDir, identity: TEST_IDENTITY });

    try {
      await configureLocalProvider(harness);
      const session = await harness.createSession({
        id: 'ses_model_wire',
        workDir,
        model: 'initial-model',
      });

      await session.setModel('next-model');

      await expect(session.getStatus()).resolves.toMatchObject({ model: 'next-model' });
      const configEvent = await waitForAgentWireEvent(
        homeDir,
        session.id,
        'config.update',
        (event) => event['modelAlias'] === 'next-model',
      );
      expect(configEvent).toMatchObject({
        type: 'config.update',
        modelAlias: 'next-model',
      });
      expect(configEvent).not.toHaveProperty('provider');
    } finally {
      await harness.close();
    }
  });

  it('resolves managed OAuth aliases before updating the runtime provider', async () => {
    const homeDir = await makeTempDir(tempDirs, 'nighthawk-sdk-model-home-');
    const workDir = await makeTempDir(tempDirs, 'nighthawk-sdk-model-work-');
    await new FileTokenStorage(join(homeDir, 'credentials')).save('nighthawk', freshToken());
    const harness = createNighthawkHarness({ homeDir, identity: TEST_IDENTITY });

    try {
      await harness.setConfig({
        providers: {
          'managed:nighthawk': {
            type: 'nighthawk',
            baseUrl: 'https://api.kimi.com/coding/v1',
            apiKey: '',
            oauth: { storage: 'file', key: 'oauth/nighthawk' },
          },
        },
        models: {
          'nighthawk/initial': {
            provider: 'managed:nighthawk',
            model: 'nighthawk-initial',
            maxContextSize: 262144,
          },
          'nighthawk/nighthawk': {
            provider: 'managed:nighthawk',
            model: 'nighthawk',
            maxContextSize: 262144,
          },
        },
        defaultModel: 'nighthawk/initial',
      });
      const session = await harness.createSession({
        id: 'ses_model_oauth_wire',
        workDir,
        model: 'nighthawk/initial',
      });

      await session.setModel('nighthawk/nighthawk');

      await expect(session.getStatus()).resolves.toMatchObject({
        model: 'nighthawk/nighthawk',
      });
      const configEvent = await waitForAgentWireEvent(
        homeDir,
        session.id,
        'config.update',
        (event) => event['modelAlias'] === 'nighthawk/nighthawk',
      );
      expect(configEvent).toMatchObject({
        type: 'config.update',
        modelAlias: 'nighthawk/nighthawk',
      });
      expect(configEvent).not.toHaveProperty('provider');
    } finally {
      await harness.close();
    }
  });

  it('rejects empty model names', async () => {
    const homeDir = await makeTempDir(tempDirs, 'nighthawk-sdk-model-home-');
    const workDir = await makeTempDir(tempDirs, 'nighthawk-sdk-model-work-');
    const harness = createNighthawkHarness({ homeDir, identity: TEST_IDENTITY });

    try {
      await configureLocalProvider(harness);
      const session = await harness.createSession({ id: 'ses_model_empty', workDir });

      await expect(session.setModel('   ')).rejects.toMatchObject({
        name: 'NighthawkError',
        code: 'session.model_empty',
      } satisfies Partial<NighthawkError>);
    } finally {
      await harness.close();
    }
  });

  it('rejects after the session is closed', async () => {
    const homeDir = await makeTempDir(tempDirs, 'nighthawk-sdk-model-home-');
    const workDir = await makeTempDir(tempDirs, 'nighthawk-sdk-model-work-');
    const harness = createNighthawkHarness({ homeDir, identity: TEST_IDENTITY });

    try {
      await configureLocalProvider(harness);
      const session = await harness.createSession({ id: 'ses_model_closed', workDir });
      await session.close();

      await expect(session.setModel('next-model')).rejects.toMatchObject({
        name: 'NighthawkError',
        code: 'session.closed',
      } satisfies Partial<NighthawkError>);
    } finally {
      await harness.close();
    }
  });
});

async function configureLocalProvider(harness: NighthawkHarness): Promise<void> {
  await harness.setConfig({
    providers: {
      local: {
        type: 'nighthawk',
        apiKey: 'sk-test',
      },
    },
    models: {
      'initial-model': {
        provider: 'local',
        model: 'initial-model',
        maxContextSize: 262144,
      },
      'next-model': {
        provider: 'local',
        model: 'next-model',
        maxContextSize: 262144,
      },
    },
    defaultProvider: 'local',
  });
}
