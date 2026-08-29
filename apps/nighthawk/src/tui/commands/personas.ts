import type { SlashCommandHost } from './dispatch';
import { discoverPersonaCards } from '../utils/persona-card';

export function handlePersonasCommand(host: SlashCommandHost): void {
  const workDir = host.state.appState.workDir;
  const cards = discoverPersonaCards(workDir);

  if (cards.length === 0) {
    host.showStatus('No persona cards found in ~/.nighthawk/agents/ or <workspace>/.nighthawk/agents/.');
    return;
  }

  const lines = cards.map(
    (card) => `  ${card.name}${card.description.length > 0 ? ` — ${card.description}` : ''}`,
  );
  host.showNotice('Persona Cards', lines.join('\n'));
}