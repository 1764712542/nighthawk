import type { ModelCapability, ProviderConfig } from '@nighthawk/kosong';

export interface AgentConfigData {
  cwd: string;
  provider?: ProviderConfig;
  modelAlias?: string;
  modelCapabilities: ModelCapability;
  profileName?: string;
  subagentNames?: readonly string[];
  thinkingEffort: string;
  systemPrompt: string;
  pentestMode: boolean;
}

export type AgentConfigUpdateData = Partial<{
  cwd: string;
  modelAlias: string;
  profileName: string;
  subagentNames: readonly string[];
  thinkingEffort: string;
  systemPrompt: string;
  pentestMode: boolean;
}>;
