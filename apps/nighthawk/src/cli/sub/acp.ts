/**
 * `nighthawk acp` sub-command routing and legacy implementation.
 *
 * By default the command delegates to the agent-core-v2 ACP server. A truthy
 * `NIGHTHAWK_LEGACY_FLAG` uses the SDK harness and `@nighthawk/acp-adapter`
 * implementation below instead.
 *
 * Wire-up:
 *  - A {@link NighthawkHarness} is constructed with the nighthawk host identity
 *    and a dedicated `uiMode: 'acp'` so downstream telemetry can
 *    distinguish ACP sessions from the TUI.
 *  - {@link runAcpServer} owns the JSON-RPC stdio bridge and redirects
 *    rogue `console.*` traffic to stderr.
 *  - `--login` pivots into the device-code login flow instead of
 *    starting the server. This is the entry point ACP clients hit
 *    via the first-class `AuthMethodTerminal` path when they re-invoke
 *    the agent binary with the advertised `args:['--login']` appended.
 *  - On stream close or unhandled error the process exits with the
 *    appropriate code.
 */

import type { Command } from 'commander';

import {
  ACP_BUILTIN_SLASH_COMMANDS,
  runAcpServer,
  type AvailableCommand,
  type SlashCommandsSnapshot,
} from '@nighthawk/acp-adapter';
import { createNighthawkHarness, type Session, type SkillSummary } from '@nighthawk/nighthawk-sdk';

import { NIGHTHAWK_HOME_ENV } from '#/constant/app';
import { createNighthawkHostIdentity, getVersion } from '#/cli/version';
import { buildSkillSlashCommands } from '#/tui/commands/skills';

import { isLegacyEnabled } from '../experimental-v2';
import { registerNativeAcpCommand } from './acp-native';
import { parseRegionFlag, runLoginFlow } from './login-flow';

export function registerAcpCommand(parent: Command): void {
  if (!isLegacyEnabled()) {
    registerNativeAcpCommand(parent);
    return;
  }

  parent
    .command('acp')
    .description('Run nighthawk as an Agent Client Protocol (ACP) server over stdio.')
    .option(
      '--login',
      'Run the device-code login flow then exit (entry point for ACP terminal-auth).',
      false,
    )
    .option('--region <region>', 'Login region used together with --login: "mainland-cn" (China mainland deployment) or "global" (global deployment).')
    .action(async (opts: { login?: boolean; region?: string }) => {
      if (opts.login === true) {
        await runLoginFlow({
          region: opts.region === undefined ? undefined : parseRegionFlag(opts.region),
        });
        return;
      }
      const identity = createNighthawkHostIdentity();
      const harness = createNighthawkHarness({
        identity,
        uiMode: 'acp',
      });
      // Forward `NIGHTHAWK_HOME` (if set) into `authMethods[0].env` so the
      // `nighthawk login` subprocess clients spawn for terminal-auth writes its
      // token under the same data root the ACP server reads from. Used for
      // sandboxed test setups (Zed's `agent_servers.*.env.NIGHTHAWK_HOME =
      // /tmp/...`). Production runs leave the env unset and the field stays
      // empty.
      const sandboxHome = process.env[NIGHTHAWK_HOME_ENV];
      const terminalAuthEnv =
        sandboxHome !== undefined && sandboxHome.length > 0
          ? { [NIGHTHAWK_HOME_ENV]: sandboxHome }
          : undefined;
      // Legacy `_meta.terminal-auth` fallback for clients that don't yet
      // honor the first-class `type:'terminal'` (Zed without the
      // AcpBetaFeatureFlag, current JetBrains plugin, etc.). `command` is
      // the absolute path to this very binary (`process.argv[1]`) so the
      // client can spawn it with `args:['login']` for the top-level
      // `nighthawk login` subcommand — matches legacy-cli `acp/server.py:77-96`.
      const legacyCommand = process.argv[1];
      const builtinCommands: AvailableCommand[] = (ACP_BUILTIN_SLASH_COMMANDS as readonly AvailableCommand[]).map((cmd) => ({
        name: cmd.name,
        description: cmd.description,
        input: cmd.input,
      }));
      // Skills are session-scoped (per-cwd config), so we defer the
      // listSkills() call until the adapter hands us the just-created
      // Session — mirrors opencode's per-directory snapshot. A
      // listSkills() failure degrades to builtins-only so a broken
      // skill source never blanks the palette.
      const resolveSlashCommands = async (
        session: Session,
      ): Promise<SlashCommandsSnapshot> => {
        let skills: readonly SkillSummary[] = [];
        try {
          skills = await session.listSkills();
        } catch {
          skills = [];
        }
        // `buildSkillSlashCommands` already returns both views — the
        // palette entries (advertised via `available_commands_update`)
        // and the `commandName → skillName` map the adapter uses to
        // intercept `/skill:<name>` inputs and route them to
        // `Session.activateSkill`. Passing both through keeps the two
        // surfaces in lockstep (palette ↔ interceptable set) without
        // a second `listSkills()` round trip.
        const built = buildSkillSlashCommands(skills);
        const skillCommands = built.commands.map((cmd) => ({
          name: cmd.name,
          description: cmd.description,
        }));
        return {
          commands: [...builtinCommands, ...skillCommands],
          skillCommandMap: built.commandMap,
        };
      };
      try {
        await runAcpServer(harness, {
          agentInfo: { name: 'NightHawk CLI', version: getVersion() },
          slashCommands: resolveSlashCommands,
          ...(terminalAuthEnv ? { terminalAuthEnv } : {}),
          ...(legacyCommand !== undefined && legacyCommand.length > 0
            ? { terminalAuthLegacyCommand: legacyCommand }
            : {}),
        });
        process.exit(0);
      } catch (err) {
        process.stderr.write(`acp server: fatal error: ${String(err)}\n`);
        process.exit(1);
      }
    });
}
