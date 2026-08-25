import { mkdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'pathe';

export function resolveNighthawkHome(homeDir?: string | undefined): string {
  return homeDir ?? process.env['NIGHTHAWK_HOME'] ?? join(homedir(), '.nighthawk');
}

export function resolveConfigPath(input: {
  readonly homeDir?: string | undefined;
  readonly configPath?: string | undefined;
}): string {
  return input.configPath ?? join(resolveNighthawkHome(input.homeDir), 'config.toml');
}

export function ensureNighthawkHome(homeDir: string): void {
  mkdirSync(homeDir, { recursive: true, mode: 0o700 });
}
