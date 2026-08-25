import { emptyUsage } from '#/kosong/contract/usage';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { IAgentLLMRequesterService } from '#/agent/llmRequester/llmRequester';
import { IAgentProfileService } from '#/agent/profile/profile';
import type { ModelRecord } from '#/kosong/model/model';
import {
  configServices,
  createTestAgent,
  llmGenerateServices,
  modelProviderOptionServices,
  telemetryServices,
  type TestAgentContext,
} from '../../harness';
import { recordingTelemetry, type TelemetryRecord } from '../../app/telemetry/stubs';

type TestNighthawkConfig = ReturnType<Parameters<typeof configServices>[0]>;
type TestProtocolModelConfig = NonNullable<TestNighthawkConfig['models']>[string] &
  Pick<ModelRecord, 'protocol'>;
type GenerateFn = Parameters<typeof llmGenerateServices>[0];

function defaultGenerate(): ReturnType<GenerateFn> {
  throw new Error('generate should not be called');
}

describe('ConfigState model capabilities', () => {
  let ctx: TestAgentContext;
  let profile: IAgentProfileService;
  let requester: IAgentLLMRequesterService;
  let nighthawkConfig: TestNighthawkConfig;
  let generate: GenerateFn;
  let records: TelemetryRecord[];

  beforeEach(() => {
    nighthawkConfig = {
      providers: {},
    };
    generate = defaultGenerate;
    records = [];
    ctx = createTestAgent(
      configServices(() => nighthawkConfig),
      llmGenerateServices((...args) => generate(...args)),
      telemetryServices(recordingTelemetry(records)),
    );
    profile = ctx.get(IAgentProfileService);
    requester = ctx.get(IAgentLLMRequesterService);
  });

  afterEach(async () => {
    try {
      await ctx.expectResumeMatches();
    } finally {
      await ctx.dispose();
    }
  });

  it('computes provider and model capabilities from config metadata', () => {
    nighthawkConfig = {
      providers: {
        nighthawk: {
          type: 'nighthawk',
          apiKey: 'test-key',
          baseUrl: 'https://api.example.test/v1',
        },
      },
      models: {
        'nighthawk/nighthawk': {
          provider: 'nighthawk',
          model: 'nighthawk',
          maxContextSize: 1_000_000,
          supportEfforts: ['low', 'high'],
          capabilities: ['image_in', 'video_in', 'thinking', 'tool_use'],
        },
      },
    };

    profile.update({ modelAlias: 'nighthawk/nighthawk' });

    expect(profile.getModel()).toBe('nighthawk/nighthawk');
    expect(ctx.modelResolver.get('nighthawk/nighthawk').name).toBe('nighthawk');
    expect(profile.getModelCapabilities()).toMatchObject({
      image_in: true,
      video_in: true,
      audio_in: false,
      thinking: true,
      tool_use: true,
      max_context_tokens: 1_000_000,
    });
  });

  it('republishes the model status slice on demand', () => {
    nighthawkConfig = {
      providers: {
        nighthawk: {
          type: 'nighthawk',
          apiKey: 'test-key',
          baseUrl: 'https://api.example.test/v1',
        },
      },
      models: {
        'nighthawk/nighthawk': {
          provider: 'nighthawk',
          model: 'nighthawk',
          maxContextSize: 1_000_000,
          supportEfforts: ['low', 'high'],
        },
      },
    };
    profile.update({ modelAlias: 'nighthawk/nighthawk' });
    const before = ctx.allEvents.filter((entry) => entry.event === 'agent.status.updated').length;

    profile.republishStatus();

    const statuses = ctx.allEvents.filter((entry) => entry.event === 'agent.status.updated');
    expect(statuses).toHaveLength(before + 1);
    expect(statuses.at(-1)?.args).toMatchObject({
      model: 'nighthawk/nighthawk',
      maxContextTokens: 1_000_000,
    });
  });

  it('omits maxContextTokens when the bound model no longer resolves', () => {
    profile.update({ modelAlias: 'ghost/model' });

    const statuses = ctx.allEvents.filter((entry) => entry.event === 'agent.status.updated');
    expect(statuses.length).toBeGreaterThan(0);
    const last = statuses.at(-1)?.args as { model?: string; maxContextTokens?: number };
    expect(last.model).toBe('ghost/model');
    expect(last.maxContextTokens).toBeUndefined();
  });

  it('tracks thinking_toggle with the effort payload when effort changes', () => {
    nighthawkConfig = {
      providers: {
        nighthawk: {
          type: 'nighthawk',
          apiKey: 'test-key',
          baseUrl: 'https://api.example.test/v1',
        },
      },
      models: {
        'nighthawk/nighthawk': {
          provider: 'nighthawk',
          model: 'nighthawk',
          maxContextSize: 1_000_000,
          capabilities: ['thinking'],
          supportEfforts: ['low', 'high'],
        },
      },
    };
    profile.update({ modelAlias: 'nighthawk/nighthawk' });
    profile.setThinking('off');
    records.length = 0;

    profile.setThinking('low');

    expect(records).toContainEqual({
      event: 'thinking_toggle',
      properties: { agent_id: 'main', enabled: true, effort: 'low', from: 'off' },
    });
  });

  it('does not infer NightHawk capabilities from the provider catalogue', () => {
    nighthawkConfig = {
      providers: {
        nighthawk: {
          type: 'nighthawk',
          apiKey: 'test-key',
          baseUrl: 'https://api.example.test/v1',
        },
      },
      models: {
        'nighthawk': {
          provider: 'nighthawk',
          model: 'nighthawk',
          maxContextSize: 128_000,
        },
      },
    };

    profile.update({ modelAlias: 'nighthawk' });

    expect(profile.getModelCapabilities()).toMatchObject({
      image_in: false,
      video_in: false,
      audio_in: false,
      max_context_tokens: 128_000,
    });
  });

  it('uses model max output size as the LLM completion cap', async () => {
    let requestMaxTokens: unknown;
    nighthawkConfig = {
      providers: {
        deepseek: {
          type: 'openai',
          apiKey: 'test-key',
          baseUrl: 'https://api.deepseek.example/v1',
        },
      },
      models: {
        'deepseek/deepseek-v4-flash': {
          provider: 'deepseek',
          model: 'deepseek-v4-flash',
          maxContextSize: 1_000_000,
          maxOutputSize: 384_000,
        },
      },
    };
    generate = async (_provider, _systemPrompt, _tools, _history, _callbacks, options) => {
      requestMaxTokens = options?.maxCompletionTokens;
      return {
        id: 'response-1',
        message: { role: 'assistant', content: [], toolCalls: [] },
        usage: emptyUsage(),
        finishReason: 'completed',
        rawFinishReason: 'stop',
      };
    };

    profile.update({
      modelAlias: 'deepseek/deepseek-v4-flash',
      systemPrompt: 'system',
      thinkingLevel: 'off',
    });
    await requester.request({}, undefined, new AbortController().signal);

    expect(requestMaxTokens).toBe(384000);
  });
});

describe('ConfigState prompt cache hint', () => {
  let ctx: TestAgentContext;
  let profile: IAgentProfileService;
  let nighthawkConfig: TestNighthawkConfig;

  beforeEach(() => {
    nighthawkConfig = {
      providers: {
        nighthawk: {
          type: 'nighthawk',
          apiKey: 'test-key',
          baseUrl: 'https://api.example.test/v1',
        },
      },
      models: {
        'nighthawk': {
          provider: 'nighthawk',
          model: 'nighthawk',
          maxContextSize: 128_000,
        },
      },
    };
    ctx = createTestAgent(
      configServices(() => nighthawkConfig),
      modelProviderOptionServices({ promptCacheKey: 'session-test' }),
    );
    profile = ctx.get(IAgentProfileService);
  });

  afterEach(async () => {
    try {
      await ctx.expectResumeMatches();
    } finally {
      await ctx.dispose();
    }
  });

  it('uses session id as a provider prompt cache hint without storing it on Agent', () => {
    profile.update({ modelAlias: 'nighthawk' });

    const model = ctx.modelResolver.get('nighthawk');
    expect(model.protocol).toBe('openai');
    expect(model.providerType).toBe('nighthawk');
    expect('sessionId' in ctx).toBe(false);
  });
});

describe('ConfigState thinking clamp for always-thinking models', () => {
  let ctx: TestAgentContext;
  let profile: IAgentProfileService;
  let requester: IAgentLLMRequesterService;
  let nighthawkConfig: TestNighthawkConfig;
  let capturedThinking: unknown;

  beforeEach(() => {
    nighthawkConfig = {
      providers: { nighthawk: { type: 'nighthawk', apiKey: 'test-key', baseUrl: 'https://api.example.test/v1' } },
      models: {
        'nighthawk/deep': {
          provider: 'nighthawk',
          model: 'nighthawk-deep-coder',
          maxContextSize: 128_000,
          capabilities: ['thinking', 'always_thinking', 'tool_use'],
          supportEfforts: ['low', 'high', 'max'],
        },
        'nighthawk/toggle': {
          provider: 'nighthawk',
          model: 'nighthawk',
          maxContextSize: 128_000,
          capabilities: ['thinking'],
        },
        'nighthawk/custom': {
          provider: 'nighthawk',
          model: 'nighthawk-custom-coder',
          maxContextSize: 128_000,
          capabilities: ['thinking'],
          supportEfforts: ['low', 'medium', 'max'],
          defaultEffort: 'max',
        },
        'nighthawk/ultra': {
          provider: 'nighthawk',
          model: 'nighthawk-ultra',
          maxContextSize: 128_000,
          capabilities: ['thinking'],
          supportEfforts: ['low', 'high', 'ultra'],
          defaultEffort: 'ultra',
        },
        'nighthawk/compatible': {
          provider: 'nighthawk',
          protocol: 'anthropic',
          model: 'compatible-model',
          maxContextSize: 128_000,
          capabilities: ['thinking', 'always_thinking'],
          supportEfforts: ['max'],
          defaultEffort: 'max',
        } as TestProtocolModelConfig,
      },
    };
    capturedThinking = undefined;
    ctx = createTestAgent(
      configServices(() => nighthawkConfig),
      llmGenerateServices(async (_provider, _systemPrompt, _tools, _history, _callbacks, options) => {
        capturedThinking = options?.thinking;
        return {
          id: 'response-1',
          message: { role: 'assistant', content: [], toolCalls: [] },
          usage: emptyUsage(),
          finishReason: 'completed',
          rawFinishReason: 'stop',
        };
      }),
    );
    profile = ctx.get(IAgentProfileService);
    requester = ctx.get(IAgentLLMRequesterService);
  });

  afterEach(async () => {
    try {
      await ctx.expectResumeMatches();
    } finally {
      await ctx.dispose();
    }
  });

  it('clamps thinkingLevel off to the configured effort', () => {
    profile.update({ modelAlias: 'nighthawk/deep', thinkingLevel: 'off' });

    expect(profile.data().thinkingLevel).toBe('high');
  });

  it('sends the clamped thinking effort in the per-turn intent after thinking was set off', async () => {
    profile.update({ modelAlias: 'nighthawk/deep', thinkingLevel: 'off' });

    await requester.request({}, undefined, new AbortController().signal);

    expect(capturedThinking).toMatchObject({ effort: 'high' });
  });

  it('keeps thinking off working for toggleable models', () => {
    profile.update({ modelAlias: 'nighthawk/toggle', thinkingLevel: 'off' });

    expect(profile.data().thinkingLevel).toBe('off');
  });

  it('resolves an explicit on request to the model default effort', () => {
    profile.update({ modelAlias: 'nighthawk/custom', thinkingLevel: 'on' });

    expect(profile.data().thinkingLevel).toBe('max');
  });

  it('re-clamps when switching to an always-on model after thinking was off', () => {
    profile.update({ modelAlias: 'nighthawk/toggle', thinkingLevel: 'off' });
    expect(profile.data().thinkingLevel).toBe('off');

    profile.update({ modelAlias: 'nighthawk/deep' });
    expect(profile.data().thinkingLevel).toBe('high');
  });

  it('falls back to the target default when a model switch carries an unsupported effort', () => {
    profile.update({ modelAlias: 'nighthawk/ultra', thinkingLevel: 'ultra' });

    profile.update({ modelAlias: 'nighthawk/custom' });

    expect(profile.data().thinkingLevel).toBe('max');
  });

  it('projects an inherited concrete effort to on when switching to a boolean model', () => {
    profile.update({ modelAlias: 'nighthawk/ultra', thinkingLevel: 'ultra' });

    profile.update({ modelAlias: 'nighthawk/toggle' });

    expect(profile.data().thinkingLevel).toBe('on');
  });

  it('rejects an unsupported effort explicitly set on the current NightHawk model', () => {
    profile.update({ modelAlias: 'nighthawk/custom' });

    expect(() => {
      profile.setThinking('ultra');
    }).toThrow(
      'Thinking effort "ultra" is not supported by model "nighthawk/custom"',
    );
  });

  it.each([
    [' HIGH ', 'high'],
    ['OFF', 'off'],
  ])('normalizes runtime effort %j to %s before validation', (input, expected) => {
    profile.update({ modelAlias: 'nighthawk/ultra' });

    profile.setThinking(input);

    expect(profile.data().thinkingLevel).toBe(expected);
  });

  it('uses the model default when the runtime effort is blank', () => {
    profile.update({ modelAlias: 'nighthawk/custom', thinkingLevel: 'low' });

    profile.setThinking('   ');

    expect(profile.data().thinkingLevel).toBe('max');
  });

  it('preserves unlisted efforts with a warning for NightHawk-managed Anthropic models', () => {
    profile.update({ modelAlias: 'nighthawk/compatible', thinkingLevel: 'max' });

    expect(() => {
      profile.setThinking('high');
    }).not.toThrow();
    expect(profile.data().thinkingLevel).toBe('high');
    expect(ctx.allEvents).toContainEqual({
      type: '[rpc]',
      event: 'warning',
      args: expect.objectContaining({
        code: 'anthropic-thinking-effort-not-listed',
        message:
          'Thinking effort "high" is not listed for model "compatible-model" (known: max). The configured value will be sent unchanged to the Anthropic-compatible backend.',
      }),
    });
  });

  it('clamps off to the model default for always-on models, on any transport', () => {
    profile.update({ modelAlias: 'nighthawk/compatible', thinkingLevel: 'max' });

    expect(() => {
      profile.setThinking('off');
    }).not.toThrow();
    expect(profile.data().thinkingLevel).toBe('max');
  });
});

describe('ConfigState.provider applies global NIGHTHAWK_MODEL_* request config', () => {
  let ctx: TestAgentContext | undefined;
  let profile: IAgentProfileService;
  let requester: IAgentLLMRequesterService;
  let nighthawkConfig: TestNighthawkConfig;
  let capturedProvider: unknown;
  let capturedOptions: Parameters<GenerateFn>[5];

  beforeEach(() => {
    nighthawkConfig = {
      providers: { nighthawk: { type: 'nighthawk', apiKey: 'test-key', baseUrl: 'https://api.example.test/v1' } },
      models: {
        'nighthawk': {
          provider: 'nighthawk',
          model: 'nighthawk',
          maxContextSize: 128_000,
          capabilities: ['thinking'],
        },
        'nighthawk-anthropic': {
          provider: 'nighthawk',
          protocol: 'anthropic',
          model: 'nighthawk-anthropic',
          maxContextSize: 128_000,
          capabilities: ['thinking'],
          supportEfforts: ['low', 'high'],
        } as TestProtocolModelConfig,
      },
    };
    capturedProvider = undefined;
  });

  afterEach(async () => {
    try {
      await ctx?.expectResumeMatches();
    } finally {
      await ctx?.dispose();
      ctx = undefined;
      vi.unstubAllEnvs();
    }
  });

  function createAgentWithEnv(): void {
    ctx = createTestAgent(
      configServices(() => nighthawkConfig),
      llmGenerateServices(async (provider, _systemPrompt, _tools, _history, _callbacks, options) => {
        capturedProvider = provider;
        capturedOptions = options;
        return {
          id: 'response-1',
          message: { role: 'assistant', content: [], toolCalls: [] },
          usage: emptyUsage(),
          finishReason: 'completed',
          rawFinishReason: 'stop',
        };
      }),
    );
    profile = ctx.get(IAgentProfileService);
    requester = ctx.get(IAgentLLMRequesterService);
  }

  it('injects NIGHTHAWK_MODEL_TEMPERATURE into the per-turn sampling intent (the compaction request also uses)', async () => {
    vi.stubEnv('NIGHTHAWK_MODEL_TEMPERATURE', '0.3');
    createAgentWithEnv();

    profile.update({ modelAlias: 'nighthawk' });
    await requester.request({}, undefined, new AbortController().signal);

    expect(capturedOptions?.sampling).toMatchObject({
      temperature: 0.3,
    });
  });

  it('injects NIGHTHAWK_MODEL_THINKING_KEEP into the per-turn thinking intent when thinking is on (so compaction keeps it)', async () => {
    vi.stubEnv('NIGHTHAWK_MODEL_THINKING_KEEP', 'all');
    createAgentWithEnv();

    profile.update({ modelAlias: 'nighthawk', thinkingLevel: 'high' });
    await requester.request({}, undefined, new AbortController().signal);

    expect(capturedOptions?.thinking).toMatchObject({ effort: 'on', keep: 'all' });
  });

  it('does NOT inject thinking.keep into the per-turn intent when thinking is off', async () => {
    vi.stubEnv('NIGHTHAWK_MODEL_THINKING_KEEP', 'all');
    createAgentWithEnv();

    profile.update({ modelAlias: 'nighthawk', thinkingLevel: 'off' });
    await requester.request({}, undefined, new AbortController().signal);

    expect(capturedOptions?.thinking?.effort).toBe('off');
    expect(capturedOptions?.thinking?.keep).toBeUndefined();
  });

  it('injects forced effort through the Anthropic protocol for a NightHawk provider', async () => {
    vi.stubEnv('NIGHTHAWK_MODEL_THINKING_EFFORT', 'max');
    createAgentWithEnv();

    profile.update({ modelAlias: 'nighthawk-anthropic', thinkingLevel: 'high' });
    expect(profile.data().thinkingLevel).toBe('high');
    expect(profile.resolveModelContext().thinkingLevel).toBe('max');
    const statusEvent = ctx?.allEvents.findLast(
      (event) =>
        event.event === 'agent.status.updated' &&
        (event.args as { thinkingEffort?: unknown } | undefined)?.thinkingEffort !== undefined,
    );
    expect(statusEvent?.args).toMatchObject({
      model: 'nighthawk-anthropic',
      thinkingEffort: 'max',
    });

    await requester.request({}, undefined, new AbortController().signal);

    expect(capturedProvider).toMatchObject({ name: 'anthropic' });
    expect(capturedOptions?.thinking?.effort).toBe('max');
  });
});
