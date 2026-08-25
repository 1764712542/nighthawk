// ═══════════════════════════════════════════════════════════════════
// Core Types — 安全编码智能体类型系统
// ═══════════════════════════════════════════════════════════════════

export type Lang = 'zh' | 'en';
export type Severity = 'critical' | 'high' | 'medium' | 'low' | 'info';
export type PermissionMode = 'manual' | 'yolo' | 'auto';
export type RunState = 'idle' | 'thinking' | 'tool_calling' | 'observing' | 'completed' | 'error' | 'cancelled';
export type ProviderType = 'openai_compatible' | 'anthropic' | 'nighthawk' | 'google';

// ── Provider ──────────────────────────────────────────────────────

export interface ProviderConfig {
  type: ProviderType;
  apiKey: string;
  baseUrl: string;
  model: string;
}

export interface ProviderMessage {
  role: 'system' | 'user' | 'assistant' | 'tool';
  content: string;
  tool_calls?: ToolCall[];
  tool_call_id?: string;
  reasoning_content?: string;
}

export interface ToolCall {
  id: string;
  name: string;
  arguments: Record<string, unknown>;
}

export interface ProviderTool {
  type: 'function';
  function: { name: string; description: string; parameters: Record<string, unknown> };
}

export interface ProviderResponse {
  content: string;
  tool_calls: ToolCall[];
  reasoning_content: string;
  usage: { prompt_tokens: number; completion_tokens: number; total_tokens: number };
  finish_reason: string;
}

export interface TokenUsage {
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
  requests: number;
}

// ── Chat Provider Interface ───────────────────────────────────────

export interface ChatProvider {
  readonly name: string;
  readonly displayName: string;
  readonly supportedModels: string[];
  chat(messages: ProviderMessage[], tools?: ProviderTool[], opts?: { temperature?: number; maxTokens?: number }): Promise<ProviderResponse>;
  chatStream(messages: ProviderMessage[], tools?: ProviderTool[], opts?: { temperature?: number; maxTokens?: number; onToken?: (t: string) => void; onThinking?: (t: string) => void }): Promise<ProviderResponse>;
}

// ── Tool ──────────────────────────────────────────────────────────

export interface ToolDefinition {
  name: string;
  description: string;
  parameters: Record<string, unknown>;
}

export interface Tool {
  definition: ToolDefinition;
  run(args: Record<string, unknown>): Promise<string>;
}

// ── Security Rules ────────────────────────────────────────────────

export interface SecurityRule {
  id: string;
  name: string;
  nameZh: string;
  severity: Severity;
  category: string;
  cwe?: string;
  owasp?: string;
  languages: string[];
  patterns: RegExp[];
  description: string;
  descriptionZh: string;
  fix: string;
  fixZh: string;
}

export interface ScanResult {
  rule: SecurityRule;
  file: string;
  line: number;
  match: string;
  context: string;
}

// ── Config ────────────────────────────────────────────────────────

export interface AppConfig {
  providerType: ProviderType;
  apiKey: string;
  baseUrl: string;
  model: string;
  anthropicApiKey: string;
  anthropicBaseUrl: string;
  workspace: string;
  lang: Lang;
  maxTurns: number;
  maxToolCalls: number;
  permissionMode: PermissionMode;
  trustedDirs: string[];
  thinkingEnabled: boolean;
  thinkingEffort: string;
  theme: string;
  yoloMode: boolean;
  planMode: boolean;
  mcpServers: Record<string, McpServerConfig>;
}

export interface McpServerConfig {
  transport: 'stdio' | 'http' | 'sse';
  command?: string;
  args?: string[];
  env?: Record<string, string>;
  cwd?: string;
  url?: string;
  headers?: Record<string, string>;
  enabled?: boolean;
  startupTimeoutMs?: number;
  toolTimeoutMs?: number;
  enabledTools?: string[];
  disabledTools?: string[];
}

// ── Agent ─────────────────────────────────────────────────────────

export interface AgentCallbacks {
  onToken?: (text: string) => void;
  onToolStart?: (name: string, args: Record<string, unknown>) => void;
  onToolEnd?: (name: string, result: string, success: boolean) => void;
}

// ── Goal ──────────────────────────────────────────────────────────

export interface Goal {
  id: string;
  objective: string;
  status: 'active' | 'paused' | 'completed' | 'cancelled';
  createdAt: number;
  turns: number;
  maxTurns?: number;
}

// ── Session ───────────────────────────────────────────────────────

export interface Session {
  id: string;
  workspace: string;
  model: string;
  provider: string;
  messages: ProviderMessage[];
  createdAt: number;
  updatedAt: number;
  goal?: Goal;
}
