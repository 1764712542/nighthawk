import {
  createProvider,
  UNKNOWN_CAPABILITY,
  type ChatProvider,
  type ModelCapability,
  type ProviderConfig,
} from '@nighthawk/kosong';

import {
  applyAnthropicThinkingKeep,
  applyNighthawkEnvSamplingParams,
  applyNighthawkEnvThinkingKeep,
  resolveNighthawkEnvThinkingEffort,
} from '#/config/nighthawk-env-params';

import type { Agent } from '..';
import { ErrorCodes, NighthawkError } from '../../errors';
import type { AgentConfigData, AgentConfigUpdateData } from './types';
import {
  resolveThinkingEffort,
  supportsThinkingEffort,
  type ThinkingEffort,
} from './thinking';
import type { ModelAlias } from '../../config/schema';
import type { ResolvedRuntimeProvider } from '../../session/provider-manager';

export * from './types';
export { resolveThinkingEffort, type ThinkingEffort } from './thinking';

export class ConfigState {
  private _cwd: string;
  private _modelAlias: string | undefined;
  private _profileName: string | undefined;
  private _subagentNames: readonly string[] | undefined;
  // `undefined` until an effort has actually been resolved: a bare modelAlias
  // update must then fall through to the model's own default instead of
  // treating the never-chosen initial "off" as an explicit user choice.
  private _unforcedThinkingEffort: ThinkingEffort | undefined;
  private _thinkingEffort: ThinkingEffort = 'off';
  private _systemPrompt: string = '';

  constructor(protected readonly agent: Agent) {
    this._cwd = agent.kaos.getcwd();
    this._modelAlias = agent.modelProvider?.defaultModel;
  }

  update(changed: AgentConfigUpdateData): void {
    this.applyUpdate(changed, true);
  }

  /**
   * Restore config state without synthesizing a v1 replay record. This is
   * used when a v2-only wire record is projected onto v1 state: the state
   * should be available to the resumed agent, but the v2 record must not
   * appear as a `config_updated` event in the replay surface.
   */
  restore(changed: AgentConfigUpdateData): void {
    this.applyUpdate(changed, false);
  }

  private applyUpdate(changed: AgentConfigUpdateData, emitReplayRecord: boolean): void {
    if (Object.keys(changed).length === 0) return;

    const targetAlias = changed.modelAlias ?? this._modelAlias;
    const targetProvider = this.tryResolvedProviderConfigFor(targetAlias);
    const targetModel = this.modelForThinking(targetAlias, targetProvider);
    const nighthawkProtocol = targetProvider?.provider.type === 'nighthawk';
    const nighthawkProvider = targetProvider?.type === 'nighthawk';
    let unforcedThinkingEffort: ThinkingEffort | undefined;
    let thinkingEffort: ThinkingEffort | undefined;
    if (changed.thinkingEffort !== undefined) {
      unforcedThinkingEffort = resolveThinkingEffort(
        changed.thinkingEffort,
        this.agent.nighthawkConfig?.thinking,
        targetModel,
        nighthawkProtocol,
      );
    } else if (changed.modelAlias !== undefined) {
      // A bare model switch carries the previously resolved effort over to the
      // new model. Before any effort was resolved (fresh session bootstrap)
      // `undefined` lets resolveThinkingEffort fall through to the model
      // default — computed from the resolved provider, whose capabilities and
      // efforts include the provider-level protocol inference.
      unforcedThinkingEffort = resolveThinkingEffort(
        this._unforcedThinkingEffort,
        this.agent.nighthawkConfig?.thinking,
        targetModel,
        nighthawkProtocol,
      );
    }
    if (unforcedThinkingEffort !== undefined) {
      thinkingEffort =
        resolveNighthawkEnvThinkingEffort(unforcedThinkingEffort, nighthawkProvider) ??
        unforcedThinkingEffort;
    }
    const effectiveChanged =
      thinkingEffort === undefined ? changed : { ...changed, thinkingEffort };

    this.agent.records.logRecord({
      type: 'config.update',
      ...effectiveChanged,
    });
    if (emitReplayRecord) {
      this.agent.replayBuilder.push({
        type: 'config_updated',
        config: effectiveChanged,
      });
    }
    if (changed.cwd) {
      this._cwd = changed.cwd;
      this.agent.setKaos(this.agent.kaos.withCwd(changed.cwd));
    }
    if (changed.modelAlias) {
      this._modelAlias = changed.modelAlias;
    }
    if (changed.profileName) {
      this._profileName = changed.profileName;
    }
    if (changed.subagentNames !== undefined) {
      this._subagentNames = [...changed.subagentNames];
    }
    if (unforcedThinkingEffort !== undefined && thinkingEffort !== undefined) {
      this._unforcedThinkingEffort = unforcedThinkingEffort;
      this._thinkingEffort = thinkingEffort;
    }
    if (changed.systemPrompt !== undefined) {
      this._systemPrompt = changed.systemPrompt;
    }
    if (this.hasProvider && (changed.cwd !== undefined || changed.modelAlias)) {
      this.agent.tools.initializeBuiltinTools();
    }
    if (thinkingEffort !== undefined || changed.modelAlias !== undefined) {
      this.agent.warnAboutCurrentAnthropicThinkingEffort();
    }
    this.agent.emitStatusUpdated(thinkingEffort !== undefined);
  }

  setThinkingEffort(effort: ThinkingEffort): void {
    const model = this.currentModel;
    const nighthawkProtocol = this.tryResolvedProviderConfig()?.provider.type === 'nighthawk';
    if (!supportsThinkingEffort(effort, model, nighthawkProtocol)) {
      const efforts = model?.supportEfforts ?? [];
      const supported = efforts.length === 0 ? 'off' : ['off', ...efforts].join(', ');
      throw new NighthawkError(
        ErrorCodes.MODEL_CONFIG_INVALID,
        `Thinking effort "${effort}" is not supported by model "${this.modelAlias}". Supported efforts: ${supported}.`,
      );
    }
    this.update({ thinkingEffort: effort });
  }

  data(): AgentConfigData {
    const resolved = this.tryResolvedProviderConfig();
    return {
      cwd: this.cwd,
      provider: resolved?.provider,
      modelAlias: this._modelAlias,
      modelCapabilities: resolved?.modelCapabilities ?? UNKNOWN_CAPABILITY,
      profileName: this.profileName,
      subagentNames: this.subagentNames,
      thinkingEffort: this.thinkingEffort,
      systemPrompt: this.systemPrompt,
    };
  }

  get cwd(): string {
    return this._cwd;
  }

  get hasModel(): boolean {
    return this._modelAlias !== undefined;
  }

  get hasProvider(): boolean {
    return this.tryResolvedProviderConfig() !== undefined;
  }

  get providerConfig(): ProviderConfig {
    const provider = this.resolvedProviderConfig?.provider;
    if (provider === undefined) {
      throw new NighthawkError(ErrorCodes.MODEL_NOT_CONFIGURED, 'Provider not set');
    }
    return provider;
  }

  /**
   * Memo of the base provider built by {@link provider}, keyed by config
   * content. The morphs applied per access (withThinking, sampling,
   * thinking.keep) clone the base, and the clones share provider-level state
   * — the OpenAI client and the reasoning-field dialect detected from inbound
   * responses. Rebuilding the base per access would silently reset that
   * dialect on every turn; a config change (model switch, credential refresh)
   * changes the key and rebuilds cleanly.
   */
  private providerMemo: { key: string; provider: ChatProvider } | undefined;

  get provider(): ChatProvider {
    // All provider-level request config is applied here so every request built
    // from config.provider — the main loop AND full-history compaction — carries it:
    //   - withThinking: preserve thinking during compaction (#464)
    //   - sampling params: NIGHTHAWK_MODEL_TEMPERATURE / NIGHTHAWK_MODEL_TOP_P
    //   - thinking.effort: the resolved ConfigState value, including the
    //     NIGHTHAWK_MODEL_THINKING_EFFORT override while thinking is on
    //   - thinking.keep: env NIGHTHAWK_MODEL_THINKING_KEEP > config thinking.keep > default "all"
    //     (only while thinking is on). Drives NightHawk's `thinking.keep` and, on the
    //     Anthropic path, a `context_management` `clear_thinking_20251015` edit.
    const providerConfig = this.providerConfig;
    const memoKey = JSON.stringify(providerConfig);
    if (this.providerMemo?.key !== memoKey) {
      this.providerMemo = { key: memoKey, provider: createProvider(providerConfig) };
    }
    const provider = this.providerMemo.provider.withThinking(this.thinkingEffort);
    const withSampling = applyNighthawkEnvSamplingParams(provider);
    const configKeep = this.agent.nighthawkConfig?.thinking?.keep;
    const withNighthawkKeep = applyNighthawkEnvThinkingKeep(
      withSampling,
      this.thinkingEffort,
      undefined,
      configKeep,
    );
    return applyAnthropicThinkingKeep(withNighthawkKeep, this.thinkingEffort, undefined, configKeep);
  }

  get model(): string {
    if (this._modelAlias === undefined) {
      throw new NighthawkError(ErrorCodes.MODEL_NOT_CONFIGURED, 'Model not set');
    }
    return this._modelAlias;
  }

  get modelAlias(): string | undefined {
    return this._modelAlias;
  }

  get thinkingEffort(): ThinkingEffort {
    // Already resolved (with the always_thinking clamp applied) in update();
    // return it verbatim.
    return this._thinkingEffort;
  }

  private get currentModel(): ModelAlias | undefined {
    const resolved = this.tryResolvedProviderConfig();
    return this.modelForThinking(this._modelAlias, resolved);
  }

  private modelForThinking(
    alias: string | undefined,
    resolved: ResolvedRuntimeProvider | undefined,
  ): ModelAlias | undefined {
    if (resolved !== undefined) {
      const capabilities = resolved.alwaysThinking
        ? ['always_thinking']
        : resolved.modelCapabilities.thinking
          ? ['thinking']
          : [];
      return {
        provider: resolved.providerName,
        model: resolved.provider.model,
        maxContextSize: Math.max(resolved.modelCapabilities.max_context_tokens, 1),
        capabilities,
        supportEfforts:
          resolved.supportEfforts === undefined ? undefined : [...resolved.supportEfforts],
        defaultEffort: resolved.defaultEffort,
      };
    }
    return alias === undefined ? undefined : this.agent.nighthawkConfig?.models?.[alias];
  }

  get profileName(): string | undefined {
    return this._profileName;
  }

  get subagentNames(): readonly string[] | undefined {
    return this._subagentNames;
  }

  get systemPrompt(): string {
    return this._systemPrompt;
  }

  get modelCapabilities(): ModelCapability {
    return this.tryResolvedProviderConfig()?.modelCapabilities ?? UNKNOWN_CAPABILITY;
  }

  get maxOutputSize(): number | undefined {
    return this.tryResolvedProviderConfig()?.maxOutputSize;
  }

  private get resolvedProviderConfig(): ResolvedRuntimeProvider | undefined {
    if (this._modelAlias === undefined) return undefined;
    return this.agent.modelProvider?.resolveProviderConfig(this._modelAlias);
  }

  private tryResolvedProviderConfig(): ResolvedRuntimeProvider | undefined {
    return this.tryResolvedProviderConfigFor(this._modelAlias);
  }

  private tryResolvedProviderConfigFor(
    alias: string | undefined,
  ): ResolvedRuntimeProvider | undefined {
    try {
      return alias === undefined ? undefined : this.agent.modelProvider?.resolveProviderConfig(alias);
    } catch {
      return undefined;
    }
  }
}
