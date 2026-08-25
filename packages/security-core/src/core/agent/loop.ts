// ═══════════════════════════════════════════════════════════════════
// Agent 核心循环 — Plan → Act → Observe → Reflect 状态机
// - Act 阶段：只读工具并行执行，写工具串行（借鉴 nighthawk tool-scheduler）
// - Reflect 阶段：周期性自我审查，修正策略
// - 文件修改追踪：支持 /undo 回滚
// ═══════════════════════════════════════════════════════════════════
import fs from 'node:fs';
import path from 'node:path';
import type { LLMClient } from '../llm/client.js';
import type { ProviderMessage, ProviderResponse, Tool } from '../types.js';
import type { ToolRegistry } from '../../tools/registry.js';
import { buildRagContext } from '../rag/index.js';

// 只读工具可并行；写工具必须串行
const READ_ONLY = new Set([
  'read_file', 'list_files', 'search_code', 'grep_code', 'count_lines',
  'complexity_score', 'file_hash', 'semgrep_scan', 'secret_scan', 'taint_trace',
  'dep_audit', 'propose_fix', 'list_rules', 'git_status', 'git_diff', 'git_log', 'git_blame',
]);

export interface TurnEvents {
  onToken?: (t: string) => void;
  onThinking?: (t: string) => void;
  onPhase?: (phase: 'plan' | 'act' | 'observe' | 'reflect' | 'done') => void;
  onToolStart?: (name: string, args: Record<string, unknown>, toolCallId: string) => void;
  onToolEnd?: (name: string, result: string, ok: boolean, toolCallId: string) => void;
}

export interface TurnResult {
  reply: string;
  steps: number;
  toolCalls: number;
  interrupted: boolean;
}

export interface FileChange { path: string; before: string | null; }

export class AgentLoop {
  messages: ProviderMessage[] = [];
  fileChanges: FileChange[] = [];
  private interrupted = false;
  private turnCount = 0;

  constructor(
    private llm: LLMClient,
    private registry: ToolRegistry,
    private maxTurns = 40,
    private reflectEvery = 5,
  ) {}

  interrupt() { this.interrupted = true; }

  clear() { this.messages = []; this.fileChanges = []; }

  // 记录被修改文件的历史内容（供 undo）
  private snapshotForUndo(toolName: string, args: Record<string, unknown>) {
    if (toolName === 'write_file' && typeof args.path === 'string') {
      const p = path.resolve(args.path);
      const exists = this.fileChanges.find(c => c.path === p);
      if (!exists) {
        this.fileChanges.push({ path: p, before: fs.existsSync(p) ? fs.readFileSync(p, 'utf-8') : null });
      }
    }
  }

  undoLast(): number {
    let restored = 0;
    for (const ch of [...this.fileChanges].reverse()) {
      if (ch.before === null) { try { fs.rmSync(ch.path); restored++; } catch {} }
      else { try { fs.mkdirSync(path.dirname(ch.path), { recursive: true }); fs.writeFileSync(ch.path, ch.before); restored++; } catch {} }
    }
    this.fileChanges = [];
    return restored;
  }

  async runTurn(userInput: string, events: TurnEvents): Promise<TurnResult> {
    this.interrupted = false;
    this.turnCount++;

    // ── Plan：注入 RAG 上下文后构建请求 ─────────────────────────
    events.onPhase?.('plan');
    this.messages.push({ role: 'user', content: userInput });

    let steps = 0, toolCalls = 0;
    const toolDefs = this.llm.buildToolDefinitions(this.registry.getAll());
    const maxSteps = this.maxTurns;

    while (steps < maxSteps) {
      if (this.interrupted) break;

      // ── Reflect：周期性自我审查（注入反思提示）─────────────────
      if (steps > 0 && steps % this.reflectEvery === 0) {
        events.onPhase?.('reflect');
        this.messages.push({
          role: 'system', content:
            '[Reflect] Review your progress so far: are you closer to answering the user? ' +
            'If a tool result was unhelpful, change strategy instead of repeating the same call. ' +
            'Wrap up with a final answer when evidence is sufficient.',
        });
      }

      // ── Plan/继续推理：调用 LLM ─────────────────────────────────
      let resp: ProviderResponse;
      try {
        resp = await this.llm.chatStream(this.messages, toolDefs, events.onToken, events.onThinking);
      } catch (e: any) {
        this.messages.push({ role: 'assistant', content: `⚠ LLM 调用失败: ${e.message}` });
        return { reply: `LLM error: ${e.message}`, steps, toolCalls, interrupted: false };
      }
      steps++;

      const reasoning = resp.reasoning_content?.trim();
      if (reasoning) this.messages.push({ role: 'assistant', content: reasoning, reasoning_content: reasoning });
      this.messages.push({ role: 'assistant', content: resp.content || '', tool_calls: resp.tool_calls });

      // ── 无工具调用：回合结束 ────────────────────────────────────
      if (!resp.tool_calls?.length) {
        events.onPhase?.('done');
        return { reply: resp.content || (reasoning || ''), steps, toolCalls, interrupted: this.interrupted };
      }

      // ── Act：执行工具调用（读并行 / 写串行）────────────────────
      events.onPhase?.('act');
      const calls = resp.tool_calls;
      const results: Array<{ id: string; name: string; result: string; ok: boolean }> = [];

      const readOnly = calls.filter(c => READ_ONLY.has(c.name));
      const writeOps = calls.filter(c => !READ_ONLY.has(c.name));

      if (readOnly.length) {
        const settled = await Promise.all(readOnly.map(async c => {
          events.onToolStart?.(c.name, c.arguments, c.id);
          const r = await this.exec(c.name, c.arguments, events);
          events.onToolEnd?.(c.name, r.result, r.ok, c.id);
          return { id: c.id, name: c.name, result: r.result, ok: r.ok };
        }));
        results.push(...settled);
      }
      for (const c of writeOps) {
        if (this.interrupted) break;
        events.onToolStart?.(c.name, c.arguments, c.id);
        this.snapshotForUndo(c.name, c.arguments);
        const r = await this.exec(c.name, c.arguments, events);
        events.onToolEnd?.(c.name, r.result, r.ok, c.id);
        results.push({ id: c.id, name: c.name, result: r.result, ok: r.ok });
      }
      toolCalls += results.length;

      // ── Observe：工具结果回填 ───────────────────────────────────
      events.onPhase?.('observe');
      for (const r of results) {
        this.messages.push({
          role: 'tool', tool_call_id: r.id,
          content: r.result.length > 30_000 ? r.result.slice(0, 30_000) + '\n…(truncated)' : r.result,
        });
      }

      // 工具全部失败时的兜底终止
      if (results.length > 0 && results.every(r => !r.ok)) {
        this.messages.push({ role: 'system', content: 'All tool calls failed. Provide your best answer without tools, explaining the limitation.' });
      }
    }

    events.onPhase?.('done');
    return {
      reply: '(reached max steps — 输入 "continue" 继续或 /clear 重置)',
      steps, toolCalls, interrupted: this.interrupted,
    };
  }

  private async exec(name: string, args: Record<string, unknown>, _events: TurnEvents): Promise<{ result: string; ok: boolean }> {
    const tool: Tool | undefined = this.registry.get(name);
    if (!tool) return { result: `Error: unknown tool "${name}"`, ok: false };
    try {
      const result = await tool.run(args);
      return { result, ok: !/^⛔|^Error:/i.test(result) };
    } catch (e: any) {
      return { result: `Error: ${e.message}`, ok: false };
    }
  }

  // 压缩上下文：保留 system + 最近消息，中间用摘要替代
  compact(): number {
    if (this.messages.length <= 8) return 0;
    const kept = this.messages.slice(-6);
    const dropped = this.messages.slice(0, -6);
    const summary = `[Context compacted] Dropped ${dropped.length} messages. ` +
      `Topics: ${dropped.filter(m => m.role === 'user').map(m => m.content.slice(0, 40)).join(' | ')}`;
    this.messages = [{ role: 'system', content: summary }, ...kept];
    return dropped.length;
  }

  // RAG 上下文注入（Plan 前置）
  async enrichWithRag(query: string, workspace: string): Promise<string> {
    try {
      const ctx = await buildRagContext(query, workspace);
      return ctx;
    } catch { return ''; }
  }
}
