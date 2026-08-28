import type { SlashCommandHost } from './dispatch';

export async function handleTraceCommand(host: SlashCommandHost, _args: string): Promise<void> {
  const summary = host.state.appState.traceStore?.formatTraceSummary();
  if (!summary) {
    host.showStatus('No trace data available. Run some commands first.');
    return;
  }
  host.sendNormalUserInput(`Show the session trace timeline:\n\n${summary}`);
}
