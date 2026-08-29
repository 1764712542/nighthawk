import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

export interface PersonaCard {
  readonly name: string;
  readonly description: string;
  readonly path: string;
  readonly content: string;
}

const AGENTS_DIR_NAME = '.nighthawk/agents';

function parseMarkdownFrontmatter(content: string): { name?: string; description?: string } {
  const match = /^---\n([\s\S]*?)\n---/.exec(content);
  if (match === null) return {};
  const frontmatter = match[1]!;
  const name = frontmatter.match(/^name\s*:\s*(.+)$/m)?.[1]?.trim();
  const description = frontmatter.match(/^description\s*:\s*(.+)$/m)?.[1]?.trim();
  return { name, description };
}

function discoverPersonasFromDir(dir: string): PersonaCard[] {
  const agentsDir = join(dir, AGENTS_DIR_NAME);
  if (!existsSync(agentsDir)) return [];
  const entries = readdirSync(agentsDir, { withFileTypes: true });
  const cards: PersonaCard[] = [];
  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.endsWith('.md')) continue;
    const filePath = join(agentsDir, entry.name);
    let content: string;
    try {
      content = readFileSync(filePath, 'utf-8');
    } catch {
      continue;
    }
    const { name, description } = parseMarkdownFrontmatter(content);
    if (name === undefined) continue;
    cards.push({
      name,
      description: description ?? '',
      path: filePath,
      content,
    });
  }
  return cards;
}

export function discoverPersonaCards(workspaceDir?: string): PersonaCard[] {
  const homeDir = homedir();
  const seen = new Set<string>();
  const cards: PersonaCard[] = [];

  for (const dir of [homeDir, workspaceDir].filter((d): d is string => d !== undefined)) {
    for (const card of discoverPersonasFromDir(dir)) {
      if (seen.has(card.name)) continue;
      seen.add(card.name);
      cards.push(card);
    }
  }

  return cards;
}