import type { PersonaCard } from './types';

export function matchPersonaForTask(
  taskDescription: string,
  personas: readonly PersonaCard[],
): PersonaCard | undefined {
  if (personas.length === 0 || taskDescription.length === 0) return undefined;

  const lowerTask = taskDescription.toLowerCase();
  const taskTokens = new Set(lowerTask.split(/\s+/).filter((t) => t.length > 2));

  let bestScore = 0;
  let bestMatch: PersonaCard | undefined;

  for (const persona of personas) {
    const lowerDesc = persona.description.toLowerCase();
    const lowerName = persona.name.toLowerCase();
    const descTokens = new Set(lowerDesc.split(/\s+/).filter((t) => t.length > 2));

    let score = 0;
    if (lowerTask.includes(lowerName)) score += 5;
    if (lowerTask.includes(lowerDesc)) score += 3;
    for (const token of taskTokens) {
      if (descTokens.has(token)) score += 1;
    }
    if (persona.content.length > 0) {
      const lowerContent = persona.content.toLowerCase();
      for (const token of taskTokens) {
        if (lowerContent.includes(token)) score += 0.5;
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestMatch = persona;
    }
  }

  return bestMatch;
}