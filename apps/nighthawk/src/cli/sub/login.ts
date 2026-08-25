/**
 * `nighthawk connect` (alias `login`) — drive the OAuth device-code flow
 * non-interactively. The `authMethods.terminal-auth.args=['login']` (legacy
 * `_meta` path) advertised by the ACP server points clients at this entry
 * point. The first-class ACP `args=['--login']` path enters the same flow
 * via `nighthawk acp --login`.
 */

import type { Command } from 'commander';

import { parseRegionFlag, runLoginFlow } from './login-flow';

export function registerLoginCommand(parent: Command): void {
  parent
    .command('connect')
    .alias('login')
    .description('Connect a model provider via the device-code flow.')
    .option(
      '--region <region>',
      'Login region: "mainland-cn" (China mainland deployment) or "global" (global deployment).',
    )
    .action(async (opts: { region?: string }) => {
      await runLoginFlow({
        region: opts.region === undefined ? undefined : parseRegionFlag(opts.region),
      });
    });
}
