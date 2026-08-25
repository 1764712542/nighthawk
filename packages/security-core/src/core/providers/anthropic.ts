import type { ChatProvider, ProviderMessage, ProviderTool, ProviderResponse, ToolCall } from '../types.js';

export class AnthropicProvider implements ChatProvider {
  readonly name = 'anthropic'; readonly displayName = 'Anthropic Claude';
  readonly supportedModels = ['claude-sonnet-4-20250514','claude-3-5-sonnet-20241022','claude-3-5-haiku-20241022','claude-3-opus-20240229'];
  private apiKey: string; private baseUrl: string; model: string;

  constructor(apiKey: string, baseUrl?: string, model?: string) {
    this.apiKey = apiKey; this.baseUrl = (baseUrl || 'https://api.anthropic.com').replace(/\/$/, '');
    this.model = model || 'claude-3-5-sonnet-20241022';
  }

  private convert(messages: ProviderMessage[]): { system: string; msgs: any[] } {
    let system = ''; const msgs: any[] = [];
    for (const m of messages) {
      if (m.role === 'system') system = m.content;
      else if (m.role === 'tool') msgs.push({ role: 'user', content: [{ type: 'tool_result', tool_use_id: m.tool_call_id || '', content: m.content }] });
      else if (m.role === 'assistant' && m.tool_calls?.length) {
        const c: any[] = []; if (m.content) c.push({ type: 'text', text: m.content });
        for (const tc of m.tool_calls) c.push({ type: 'tool_use', id: tc.id, name: tc.name, input: tc.arguments });
        msgs.push({ role: 'assistant', content: c });
      } else msgs.push({ role: m.role, content: m.content });
    }
    return { system, msgs };
  }

  async chat(messages: ProviderMessage[], tools?: ProviderTool[], opts?: { temperature?: number; maxTokens?: number }): Promise<ProviderResponse> {
    const { system, msgs } = this.convert(messages);
    const body: Record<string, unknown> = { model: this.model, messages: msgs, max_tokens: opts?.maxTokens ?? 4096, temperature: opts?.temperature ?? 0.1 };
    if (system) body.system = system;
    if (tools?.length) body.tools = tools.map(t => ({ name: t.function.name, description: t.function.description, input_schema: t.function.parameters }));
    const resp = await fetch(`${this.baseUrl}/v1/messages`, { method: 'POST', headers: { 'x-api-key': this.apiKey, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' }, body: JSON.stringify(body) });
    const data = await resp.json() as any;
    if (data.error) throw new Error(`Anthropic: ${data.error.message || data.error}`);
    let content = ''; let reasoning = ''; const tc: ToolCall[] = [];
    for (const b of data.content || []) {
      if (b.type === 'text') content += b.text || '';
      else if (b.type === 'thinking') reasoning += b.thinking || '';
      else if (b.type === 'tool_use') tc.push({ id: b.id, name: b.name, arguments: b.input || {} });
    }
    const u = data.usage || {};
    return { content, tool_calls: tc, reasoning_content: reasoning,
      usage: { prompt_tokens: u.input_tokens || 0, completion_tokens: u.output_tokens || 0, total_tokens: (u.input_tokens || 0) + (u.output_tokens || 0) },
      finish_reason: data.stop_reason || '' };
  }

  async chatStream(messages: ProviderMessage[], tools?: ProviderTool[], opts?: { temperature?: number; maxTokens?: number; onToken?: (t: string) => void }): Promise<ProviderResponse> {
    return this.chat(messages, tools, opts);
  }
}
