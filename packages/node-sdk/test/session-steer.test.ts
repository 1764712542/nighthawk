import type * as KosongModule from '@nighthawk/kosong';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { createNighthawkHarness, type NighthawkError } from '#/index';

import { makeTempDir, removeTempDirs, waitForAgentWireEvent } from './session-runtime-helpers';
import { TEST_IDENTITY } from './test-identity';

const fakeProviderState = vi.hoisted(() => ({
  responseText: 'steer response',
}));

vi.mock('@nighthawk/kosong', async (importOriginal) => {
  const actual = await importOriginal<typeof KosongModule>();
  return {
    ...actual,
    createProvider: () => ({
      name: 'fake',
      modelName: 'fake-model',
      thinkingEffort: null,
      async generate() {
        return {
          id: 'fake-response',
          usage: {
            inputOther: 0,
            output: 1,
            inputCacheRead: 0,
            inputCacheCreation: 0,
          },
          finishReason: 'completed',
          rawFinishReason: 'stop',
          async *[Symbol.asyncIterator]() {
            yield { type: 'text', text: fakeProviderState.responseText };
          },
        };
      },
      withThinking() {
        return this;
      },
    }),
  };
});

const tempDirs: string[] = [];

beforeEach(() => {
  fakeProviderState.responseText = 'steer response';
});

afterEach(async () => {
  await removeTempDirs(tempDirs);
});

describe('Session.steer', () => {
  it('sends turn.steer to the core session runtime', async () => {
    const homeDir = await makeTempDir(tempDirs, 'nighthawk-sdk-steer-home-');
    const workDir = await makeTempDir(tempDirs, 'nighthawk-sdk-steer-work-');
    const harness = createNighthawkHarness({ homeDir, identity: TEST_IDENTITY });

    try {
      const session = await harness.createSession({ id: 'ses_steer_wire', workDir });

      await session.steer('also do this');

      await expect(
        waitForAgentWireEvent(homeDir, session.id, 'turn.steer', (event) =>
          Array.isArray(event['input']),
        ),
      ).resolves.toMatchObject({
        type: 'turn.steer',
        input: [{ type: 'text', text: 'also do this' }],
      });
    } finally {
      await harness.close();
    }
  });

  it('rejects empty steer input', async () => {
    const homeDir = await makeTempDir(tempDirs, 'nighthawk-sdk-steer-home-');
    const workDir = await makeTempDir(tempDirs, 'nighthawk-sdk-steer-work-');
    const harness = createNighthawkHarness({ homeDir, identity: TEST_IDENTITY });

    try {
      const session = await harness.createSession({ id: 'ses_steer_empty', workDir });

      await expect(session.steer('   ')).rejects.toMatchObject({
        name: 'NighthawkError',
        code: 'request.prompt_input_empty',
      } satisfies Partial<NighthawkError>);
    } finally {
      await harness.close();
    }
  });

  it('rejects after the session is closed', async () => {
    const homeDir = await makeTempDir(tempDirs, 'nighthawk-sdk-steer-home-');
    const workDir = await makeTempDir(tempDirs, 'nighthawk-sdk-steer-work-');
    const harness = createNighthawkHarness({ homeDir, identity: TEST_IDENTITY });

    try {
      const session = await harness.createSession({ id: 'ses_steer_closed', workDir });
      await session.close();

      await expect(session.steer('hello')).rejects.toMatchObject({
        name: 'NighthawkError',
        code: 'session.closed',
      } satisfies Partial<NighthawkError>);
    } finally {
      await harness.close();
    }
  });
});
