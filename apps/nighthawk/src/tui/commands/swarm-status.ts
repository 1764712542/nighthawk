import { currentTheme } from '#/tui/theme';

import type { SlashCommandHost } from './dispatch';

export function handleSwarmStatusCommand(host: SlashCommandHost): void {
  const summaries = host.sessionEventHandler.subAgentEventHandler.getSwarmProgressSummaries();

  if (summaries.length === 0) {
    host.showStatus(currentTheme.fg('textDim', '╔══════════════════════════════╗\n║  没有活跃的集群进度。  ║\n╚══════════════════════════════╝'));
    return;
  }

  const lines: string[] = [];
  const t = currentTheme;

  for (const s of summaries) {
    const status = s.isFinished ? t.fg('success', '● 已完成') : t.fg('warning', '● 活跃中');
    const desc = t.fg('textStrong', s.description);
    const stats = t.fg('textDim', `${s.total} 个子代理`);
    const done = t.fg('success', `${s.completed} 已完成`);
    const active = t.fg('warning', `${s.active} 活跃中`);
    const failed = t.fg('error', `${s.failed} 失败`);
    const cancelled = t.fg('textMuted', `${s.cancelled} 已取消`);

    lines.push(
      t.fg('border', '╔══') + status + t.fg('border', '══╗'),
      t.fg('border', '║ ') + desc + t.fg('border', ' ║'),
      t.fg('border', '║ ') + `${stats}: ${done}, ${active}, ${failed}, ${cancelled}` + t.fg('border', ' ║'),
      t.fg('border', '╚══════════════════════════════╝'),
    );
  }
  host.showStatus(lines.join('\n'));
}