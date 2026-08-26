/**
 * `nighthawk acp`
 *
 * Verifies that the ACP v2 sub-command is registered on the program and that
 * the action wires `@nighthawk/acp-server`'s `runAcpServer` (the real server
 * is stubbed so the test doesn't actually take over stdio). The module is
 * loaded via a lazy dynamic import in the action, so the mock intercepts that
 * import.
 */

import { Command } from 'commander';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('@nighthawk/acp-server', () => ({
  runAcpServer: vi.fn(async () => undefined),
}));

import { runAcpServer } from '@nighthawk/acp-server';

import { registerAcpCommand } from '#/cli/sub/acp';
import { registerNativeAcpCommand } from '#/cli/sub/acp-native';
import { getDataDir } from '#/utils/paths';

class ExitCalled extends Error {
  constructor(public code: number | string | null | undefined) {
    super(`process.exit(${String(code)})`);
  }
}

describe('nighthawk acp', () => {
  let exitSpy: ReturnType<typeof vi.spyOn>;
  let stderrSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    vi.stubEnv('NIGHTHAWK_LEGACY_FLAG', '');
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
    registerNativeAcpCommand(program);

    const acpV2 = program.commands.find((c) => c.name() === 'acp');
    expect(acpV2).toBeDefined();
    expect(acpV2?.description()).toMatch(/Agent Client Protocol/);
  });

  it('uses the v2 server for the default `acp` command', async () => {
    const program = new Command('nighthawk').exitOverride();
    registerAcpCommand(program);

    await expect(program.parseAsync(['node', 'nighthawk', 'acp'])).rejects.toThrow(ExitCalled);

    expect(runAcpServer).toHaveBeenCalledTimes(1);
    expect(vi.mocked(runAcpServer).mock.calls[0]?.[0]).toEqual(
      expect.objectContaining({ homeDir: getDataDir() }),
    );
    expect(exitSpy).toHaveBeenCalledWith(0);
  });

  it('invokes runAcpServer with the v2 host options and exits 0 on success', async () => {
    const program = new Command('nighthawk').exitOverride();
    registerNativeAcpCommand(program);

    await expect(program.parseAsync(['node', 'nighthawk', 'acp'])).rejects.toThrow(ExitCalled);

    expect(runAcpServer).toHaveBeenCalledTimes(1);
    const optsArg = vi.mocked(runAcpServer).mock.calls[0]?.[0];
    expect(optsArg).toEqual(
      expect.objectContaining({
        homeDir: getDataDir(),
        agentInfo: { name: 'NightHawk CLI', version: expect.any(String) },
      }),
    );
    expect(exitSpy).toHaveBeenCalledWith(0);
  });

  it('passes no terminal-auth options to runAcpServer', async () => {
    const program = new Command('nighthawk').exitOverride();
    registerNativeAcpCommand(program);

    await expect(program.parseAsync(['node', 'nighthawk', 'acp'])).rejects.toThrow(ExitCalled);

    const optsArg = vi.mocked(runAcpServer).mock.calls[0]?.[0] as {
      terminalAuthEnv?: unknown;
      terminalAuthLegacyCommand?: unknown;
    };
    expect(optsArg?.terminalAuthEnv).toBeUndefined();
    expect(optsArg?.terminalAuthLegacyCommand).toBeUndefined();
  });
});
