import type { AutocompleteItem, SlashCommand } from '@nighthawk/pi-tui';

export type SlashCommandAvailability = 'always' | 'idle-only';

export interface NighthawkSlashCommand<Name extends string = string> extends SlashCommand {
  readonly name: Name;
  readonly aliases: readonly string[];
  readonly description: string;
  readonly priority?: number;
  readonly availability?: SlashCommandAvailability | ((args: string) => SlashCommandAvailability);
  /** When set, the command is hidden from the palette and blocked unless this flag is enabled.
   * A plain string: the gating flag may live in either engine's registry (v1 core or v2 domain). */
  readonly experimentalFlag?: string;
  /** When set, the command is hidden and unresolved on the legacy (v1) engine. */
  readonly requiresEngineV2?: boolean;
  /** When true, the command is only available when pentest mode is active. */
  readonly pentestOnly?: boolean;
  /** When true, the command is hidden when pentest mode is active. */
  readonly normalOnly?: boolean;
  /**
   * Generic argument autocompletion. `argumentPrefix` is the text typed after
   * `/<command> `; return suggestions or `null`. Declared as a plain function
   * property (not a method) so passing it around is `this`-free. Adapted to
   * pi-tui's `getArgumentCompletions` in the autocomplete setup.
   */
  readonly completeArgs?: (argumentPrefix: string) => AutocompleteItem[] | null;
}

export interface ParsedSlashInput {
  readonly name: string;
  readonly args: string;
}

export type SlashCommandBusyReason = 'streaming' | 'compacting';

export type SlashCommandInvalidReason = 'unknown';
