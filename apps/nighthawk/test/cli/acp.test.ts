/**
 * `nighthawk acp`
 *
 * Verifies that the ACP sub-command is registered on the program and
 * that the action wires the harness into `@nighthawk/acp-adapter`'s
 * `runAcpServer` (the real server is stubbed so the test doesn't
 * actually take over stdio).
 */

import { Command } from 'commander';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('@nighthawk/acp-adapter', () => ({
  ACP_BUILTIN_SLASH_COMMANDS: [],
  runAcpServer: vi.fn(async () => undefined),
}));

import { runAcpServer } from '@nighthawk/acp-adapter';

import { registerAcpCommand } from '#/cli/sub/acp';

class ExitCalled extends Error {
  constructor(public code: number | string | null | undefined) {
    super(`process.exit(${String(code)})`);
  }
}

describe('nighthawk acp', () => {
  let exitSpy: ReturnType<typeof vi.spyOn>;
  let stderrSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    vi.stubEnv('NIGHTHAWK_LEGACY_FLAG', '1');
    vi.mocked(runAcpServer).mockClear();
    exitSpy = vi.spyOn(process, 'exit').mockImplementation(((code?: number | string | null) => {
      throw new ExitCalled(code);
    }) as never);
    stderrSpy = vi.spyOn(process.stderr, 'write').mockImplementation(() => true);
  });

  afterEach(() => {
    exitSpy.mockRestore();
    stderrSpy.mockRestore();
    vi.unstubAllEnvs();
  });

  it('registers an `acp` subcommand on the program', () => {
    const program = new Command('nighthawk');
    registerAcpCommand(program);

    const acp = program.commands.find((c) => c.name() === 'acp');
    expect(acp).toBeDefined();
    expect(acp?.description()).toMatch(/Agent Client Protocol/);
  });

  it('invokes runAcpServer with a constructed harness and exits 0 on success', async () => {
    const program = new Command('nighthawk').exitOverride();
    registerAcpCommand(program);

    await expect(program.parseAsync(['node', 'nighthawk', 'acp'])).rejects.toThrow(ExitCalled);

    expect(runAcpServer).toHaveBeenCalledTimes(1);
    const harnessArg = vi.mocked(runAcpServer).mock.calls[0]?.[0];
    expect(harnessArg).toBeDefined();
    const optsArg = vi.mocked(runAcpServer).mock.calls[0]?.[1];
    expect(optsArg).toEqual(
      expect.objectContaining({
        agentInfo: { name: 'NightHawk CLI', version: expect.any(String) },
      }),
    );
    expect(exitSpy).toHaveBeenCalledWith(0);
  });

  it('passes no terminal-auth options to runAcpServer', async () => {
    const program = new Command('nighthawk').exitOverride();
    registerAcpCommand(program);

    await expect(program.parseAsync(['node', 'nighthawk', 'acp'])).rejects.toThrow(ExitCalled);

    const optsArg = vi.mocked(runAcpServer).mock.calls[0]?.[1] as {
      terminalAuthEnv?: unknown;
      terminalAuthLegacyCommand?: unknown;
    };
    expect(optsArg?.terminalAuthEnv).toBeUndefined();
    expect(optsArg?.terminalAuthLegacyCommand).toBeUndefined();
  });
});
