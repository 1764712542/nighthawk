import OpenAI from 'openai';
import type { ChatProvider, ProviderMessage, ProviderTool, ProviderResponse, ToolCall } from '../types.js';

export class OpenAIProvider implements ChatProvider {
  readonly name: string = 'openai_compatible';
  readonly displayName: string = 'OpenAI Compatible';
  readonly supportedModels = ['deepseek-chat','deepseek-reasoner','gpt-4o','gpt-4o-mini','qwen-max','glm-4','mistral-large','llama3-70b'];
  private client: OpenAI;
  model: string;

  constructor(apiKey: string, baseUrl?: string, model?: string) {
    this.model = model || 'deepseek-chat';
    this.client = new OpenAI({ apiKey: apiKey || 'dummy', baseURL: baseUrl, maxRetries: 0 });
  }

  async chat(messages: ProviderMessage[], tools?: ProviderTool[], opts?: { temperature?: number; maxTokens?: number }): Promise<ProviderResponse> {
    const resp = await this.client.chat.completions.create({
      model: this.model, messages: messages as any, tools: tools as any,
      temperature: opts?.temperature ?? 0.1, max_tokens: opts?.maxTokens ?? 4096,
    });
    const c = resp.choices[0]; const m = c.message;
    const tc: ToolCall[] = ((m as any).tool_calls || []).map((t: any) => ({ id: t.id, name: t.function.name, arguments: JSON.parse(t.function.arguments || '{}') }));
    return { content: m.content || '', tool_calls: tc, reasoning_content: (m as any).reasoning_content || '',
      usage: { prompt_tokens: resp.usage?.prompt_tokens || 0, completion_tokens: resp.usage?.completion_tokens || 0, total_tokens: resp.usage?.total_tokens || 0 },
      finish_reason: c.finish_reason || '' };
  }

  async chatStream(messages: ProviderMessage[], tools?: ProviderTool[], opts?: { temperature?: number; maxTokens?: number; onToken?: (t: string) => void; onThinking?: (t: string) => void }): Promise<ProviderResponse> {
    const stream = await this.client.chat.completions.create({
      model: this.model, messages: messages as any, tools: tools as any,
      temperature: opts?.temperature ?? 0.1, max_tokens: opts?.maxTokens ?? 4096, stream: true,
    });
    const cp: string[] = []; const rp: string[] = [];
    const td: Record<number, { id: string; n: string; a: string }> = {};
    for await (const ch of stream) {
      const d = ch.choices?.[0]?.delta; if (!d) continue;
      if (d.content) { cp.push(d.content); opts?.onToken?.(d.content); }
      if ((d as any).reasoning_content) { rp.push((d as any).reasoning_content); opts?.onThinking?.((d as any).reasoning_content); }
      if (d.tool_calls) for (const t of d.tool_calls) {
        const i = t.index ?? Object.keys(td).length;
        if (!td[i]) td[i] = { id: '', n: '', a: '' };
        if (t.id) td[i].id = t.id;
        if (t.function?.name) td[i].n = t.function.name;
        if (t.function?.arguments) td[i].a += t.function.arguments;
      }
    }
    const tc: ToolCall[] = Object.values(td).filter(t => t.n).map(t => ({ id: t.id, name: t.n, arguments: JSON.parse(t.a || '{}') }));
    return { content: cp.join(''), tool_calls: tc, reasoning_content: rp.join(''), usage: { prompt_tokens: 0, completion_tokens: 0, total_tokens: 0 }, finish_reason: '' };
  }
}
