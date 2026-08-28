export interface TraceSpan {
  readonly id: string;
  readonly parentId?: string;
  readonly name: string;
  readonly kind: 'turn' | 'tool_call';
  readonly startedAt: number;
  readonly durationMs?: number;
  readonly status: 'ok' | 'error';
  readonly toolName?: string;
  readonly step?: number;
  readonly turnId?: string;
  readonly children: TraceSpan[];
}

export class TraceStore {
  private spans: Map<string, TraceSpan> = new Map();
  private turnSpans: string[] = [];
  private currentTurnId: string | null = null;
  private currentStep: number = 0;

  onTurnStarted(turnId: string): void {
    this.currentTurnId = turnId;
    this.currentStep = 0;
    const span: TraceSpan = {
      id: `turn-${turnId}`,
      name: `Turn #${turnId}`,
      kind: 'turn',
      startedAt: Date.now(),
      status: 'ok',
      children: [],
    };
    this.spans.set(span.id, span);
    this.turnSpans.push(span.id);
  }

  onToolCall(toolName: string, durationMs: number, status: 'ok' | 'error', step: number, turnId?: string): void {
    const tid = turnId ?? this.currentTurnId;
    if (!tid) return;
    this.currentStep = step;
    const id = `tool-${tid}-${step}-${toolName}`;
    const parentId = `turn-${tid}`;
    const span: TraceSpan = {
      id,
      parentId,
      name: toolName,
      kind: 'tool_call',
      startedAt: Date.now() - durationMs,
      durationMs,
      status,
      toolName,
      step,
      turnId: tid,
      children: [],
    };
    this.spans.set(span.id, span);
    // Add as child to parent turn span
    const parent = this.spans.get(parentId);
    if (parent) {
      (parent.children as TraceSpan[]).push(span);
    }
  }

  onTurnEnded(turnId: string, durationMs: number): void {
    const span = this.spans.get(`turn-${turnId}`);
    if (span) {
      (span as any).durationMs = durationMs;
    }
    this.currentTurnId = null;
  }

  getTraceTree(): TraceSpan[] {
    return this.turnSpans.map((id) => this.spans.get(id)!);
  }

  formatTraceSummary(): string {
    const turns = this.getTraceTree();
    if (turns.length === 0) return 'No trace data available.';

    const lines: string[] = ['Session Trace Timeline · 会话追踪时间线', ''];
    for (const turn of turns) {
      const turnDur = turn.durationMs ? `${(turn.durationMs / 1000).toFixed(1)}s` : '...';
      const toolCount = turn.children.length;
      lines.push(`Turn ${turn.name} — ${turnDur} — ${toolCount} tool calls`);
      for (const tool of turn.children) {
        const toolDur = tool.durationMs ? `${(tool.durationMs / 1000).toFixed(1)}s` : '...';
        const icon = tool.status === 'ok' ? '✅' : '❌';
        lines.push(`  ${icon} Step ${tool.step ?? '?'}: ${tool.toolName ?? tool.name}  ${toolDur}`);
      }
      lines.push('');
    }
    return lines.join('\n');
  }
}
