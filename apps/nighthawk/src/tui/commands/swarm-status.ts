import type { SlashCommandHost } from './dispatch';

export function handleSwarmStatusCommand(host: SlashCommandHost): void {
  const summaries = host.sessionEventHandler.subAgentEventHandler.getSwarmProgressSummaries();

  if (summaries.length === 0) {
    host.showStatus('No active or recent swarm progress.');
    return;
  }

  const lines: string[] = [];
  for (const s of summaries) {
    const status = s.isFinished ? 'Finished' : 'Active';
    lines.push(
      `  ${s.description}`,
      `    ${status} — ${s.total} subagents: ${s.completed} completed, ${s.active} active, ${s.failed} failed, ${s.cancelled} cancelled`,
    );
  }
  host.showStatus(lines.join('\n'));
}