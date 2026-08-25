// ═══════════════════════════════════════════════════════════════════
// 会话 Checkpoint 存储 — PostgresSaver 思想的文件实现
// 每回合持久化消息快照，支持断点续跑（resume）
// ═══════════════════════════════════════════════════════════════════
import fs from 'node:fs';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import type { ProviderMessage, TokenUsage } from '../types.js';

export interface Checkpoint {
  id: string;
  turn: number;
  messages: ProviderMessage[];
  savedAt: number;
}

export interface StoredSession {
  id: string;
  workspace: string;
  model: string;
  provider: string;
  createdAt: number;
  updatedAt: number;
  checkpoints: Checkpoint[];
  usage: TokenUsage;
  title: string;
}

function sessionsDir(): string {
  const dir = path.join(process.env.HOME || '~', '.sca', 'sessions');
  fs.mkdirSync(dir, { recursive: true });
  return dir;
}

export class SessionStore {
  private session: StoredSession;
  private lastSavedTurn = -1;

  constructor(workspace: string, model: string, provider: string) {
    this.session = {
      id: randomUUID().slice(0, 8),
      workspace, model, provider,
      createdAt: Date.now(), updatedAt: Date.now(),
      checkpoints: [],
      usage: { promptTokens: 0, completionTokens: 0, totalTokens: 0, requests: 0 },
      title: '(untitled)',
    };
  }

  get id() { return this.session.id; }
  get checkpoints() { return this.session.checkpoints; }

  /** 每回合保存 Checkpoint（增量追加，避免全量重写） */
  checkpoint(turn: number, messages: ProviderMessage[]) {
    this.session.checkpoints.push({ id: randomUUID().slice(0, 8), turn, messages: structuredClone(messages), savedAt: Date.now() });
    this.session.updatedAt = Date.now();
    this.lastSavedTurn = turn;
    this.persist();
  }

  setUsage(u: TokenUsage) { this.session.usage = u; }
  setTitle(t: string) { if (this.session.title === '(untitled)' && t) this.session.title = t.slice(0, 60); }

  private persist() {
    const file = path.join(sessionsDir(), `${this.session.id}.json`);
    fs.writeFileSync(file, JSON.stringify(this.session), 'utf-8');
  }

  /** 断点续跑：恢复最近 Checkpoint 的消息 */
  resume(): ProviderMessage[] | null {
    const last = this.session.checkpoints[this.session.checkpoints.length - 1];
    return last ? structuredClone(last.messages) : null;
  }

  exportMarkdown(): string {
    const s = this.session;
    const lines = [
      `# SCA Session ${s.id}`,
      `- Workspace: \`${s.workspace}\``,
      `- Model: ${s.model} (${s.provider})`,
      `- Created: ${new Date(s.createdAt).toLocaleString('zh-CN')}`,
      `- Checkpoints: ${s.checkpoints.length}`,
      `- Tokens: ${s.usage.totalTokens} (prompt ${s.usage.promptTokens} / completion ${s.usage.completionTokens})`,
      '',
      '---', '',
    ];
    for (const cp of s.checkpoints) {
      const visible = cp.messages.filter(m => m.role !== 'system');
      for (const m of visible) {
        const role = m.role === 'assistant' ? '🤖 **Agent**' : m.role === 'user' ? '👤 **User**' : '🔧 **Tool**';
        const content = (m.content || JSON.stringify(m.tool_calls || '')).slice(0, 4000);
        lines.push(`${role}\n\n${content}\n`);
      }
    }
    return lines.join('\n');
  }
}

// ── 会话列表 / 加载 ─────────────────────────────────────────────────
export function listSessions(workspace?: string): Array<{ id: string; title: string; updatedAt: number; model: string; turns: number }> {
  const dir = sessionsDir();
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.json'))
    .map(f => {
      try {
        const s: StoredSession = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf-8'));
        if (workspace && s.workspace !== workspace) return null;
        return { id: s.id, title: s.title, updatedAt: s.updatedAt, model: s.model, turns: s.checkpoints.length };
      } catch { return null; }
    })
    .filter(Boolean)
    .sort((a, b) => b!.updatedAt - a!.updatedAt) as any;
}

export function loadSession(id: string): StoredSession | null {
  try {
    return JSON.parse(fs.readFileSync(path.join(sessionsDir(), `${id}.json`), 'utf-8'));
  } catch { return null; }
}
