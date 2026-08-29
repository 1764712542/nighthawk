export interface PersonaCard {
  readonly name: string;
  readonly description: string;
  readonly filePath: string;
  readonly tags: readonly string[];
  readonly capabilities: readonly string[];
  readonly systemPrompt?: string;
}