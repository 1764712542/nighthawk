import type { ChatProvider, ProviderMessage, ProviderTool, ProviderResponse, TokenUsage } from '../types.js';
import { createProvider } from '../providers/index.js';
import type { ProviderConfig } from '../types.js';

export class LLMClient {
  provider: ChatProvider;
  tokenUsage: TokenUsage = { promptTokens: 0, completionTokens: 0, totalTokens: 0, requests: 0 };
  private systemPrompt: string;

  constructor(config: ProviderConfig, systemPrompt: string) {
    this.provider = createProvider(config);
    this.systemPrompt = systemPrompt;
  }

  setModel(model: string) { (this.provider as any).model = model; }

  setSystemPrompt(prompt: string) { this.systemPrompt = prompt; }

  buildSystemPrompt(toolDefs: { definition: any }[]): string {
    const tools = toolDefs.map(t => `- ${t.definition.name}: ${t.definition.description}`).join('\n');
    return `You are Security Coding Agent — a versatile AI coding assistant with security expertise. Respond in the user's language.

## Core Identity
You are a **general coding assistant** first, security expert second. Handle ALL coding questions naturally:
- Write code, explain algorithms, debug, refactor, answer questions
- Only do security analysis when explicitly asked
- Never force security topics on users

## Tools
${tools}

## When to Use Tools
- Use tools when you need to read/search/modify actual files
- For simple questions (write code, explain concepts) — just answer directly
- For security audits — use the full tool chain

## Output
- Be natural and conversational
- Show code when writing code
- For security: findings with file:line, evidence, and fix`;
  }

  async chat(messages: ProviderMessage[], tools?: ProviderTool[]): Promise<ProviderResponse> {
    const full: ProviderMessage[] = [{ role: 'system', content: this.systemPrompt }, ...messages];
    const resp = await this.provider.chat(full, tools);
    this.track(resp); return resp;
  }

  async chatStream(messages: ProviderMessage[], tools?: ProviderTool[], onToken?: (t: string) => void, onThinking?: (t: string) => void): Promise<ProviderResponse> {
    const full: ProviderMessage[] = [{ role: 'system', content: this.systemPrompt }, ...messages];
    const resp = await this.provider.chatStream(full, tools, { onToken, onThinking, temperature: 0.1, maxTokens: 4096 });
    this.track(resp); return resp;
  }

  buildToolDefinitions(tools: { definition: any }[]): ProviderTool[] {
    return tools.map(t => ({ type: 'function' as const, function: { name: t.definition.name, description: t.definition.description, parameters: t.definition.parameters } }));
  }

  private track(r: ProviderResponse) {
    this.tokenUsage.promptTokens += r.usage.prompt_tokens;
    this.tokenUsage.completionTokens += r.usage.completion_tokens;
    this.tokenUsage.totalTokens += r.usage.total_tokens;
    this.tokenUsage.requests++;
  }
}
