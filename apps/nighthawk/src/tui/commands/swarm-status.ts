import { currentTheme } from '#/tui/theme';

import type { SlashCommandHost } from './dispatch';

export function handleSwarmStatusCommand(host: SlashCommandHost): void {
  const summaries = host.sessionEventHandler.subAgentEventHandler.getSwarmProgressSummaries();

  if (summaries.length === 0) {
    host.showStatus(currentTheme.fg('textDim', '╔══════════════════════════════╗\n║  No active swarm progress.  ║\n╚══════════════════════════════╝'));
    return;
  }

  const lines: string[] = [];
  const t = currentTheme;

  for (const s of summaries) {
    const status = s.isFinished ? t.fg('success', '● FINISHED') : t.fg('warning', '● ACTIVE');
    const desc = t.fg('textStrong', s.description);
    const stats = t.fg('textDim', `${s.total} subagents`);
    const done = t.fg('success', `${s.completed} done`);
    const active = t.fg('warning', `${s.active} active`);
    const failed = t.fg('error', `${s.failed} failed`);
    const cancelled = t.fg('textMuted', `${s.cancelled} cancelled`);

    lines.push(
      t.fg('border', '╔══') + status + t.fg('border', '══╗'),
      t.fg('border', '║ ') + desc + t.fg('border', ' ║'),
      t.fg('border', '║ ') + `${stats}: ${done}, ${active}, ${failed}, ${cancelled}` + t.fg('border', ' ║'),
      t.fg('border', '╚══════════════════════════════╝'),
    );
  }
  host.showStatus(lines.join('\n'));
}