import type { PluginCommandDef } from '@nighthawk/nighthawk-sdk';

import type { NighthawkSlashCommand } from './types';

export interface PluginSlashCommands {
  readonly commands: readonly NighthawkSlashCommand[];
  /** Maps a namespaced command name (`plugin:command`) to its markdown body. */
  readonly commandMap: ReadonlyMap<string, string>;
}

export function pluginCommandName(pluginId: string, name: string): string {
  return `${pluginId}:${name}`;
}

export function buildPluginSlashCommands(defs: readonly PluginCommandDef[]): PluginSlashCommands {
  const commandMap = new Map<string, string>();
  const commands = defs.map((def) => {
    const commandName = pluginCommandName(def.pluginId, def.name);
    commandMap.set(commandName, def.body);
    return {
      name: commandName,
      aliases: [],
      description: def.description,
    } satisfies NighthawkSlashCommand;
  });
  return { commands, commandMap };
}
