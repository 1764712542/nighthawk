/**
 * One-shot config migrations. Each migration runs at most once per nighthawk home:
 * a marker in `<home>/migrations-effort.json` records completion (ISO
 * timestamp), so a value the user re-sets by hand afterwards is never
 * migrated again. All helpers are best-effort and never throw — a migration
 * must never block startup.
 */
import { existsSync, readFileSync, renameSync, writeFileSync } from 'node:fs';

import { join } from 'pathe';
import { parse as parseToml, stringify as stringifyToml } from 'smol-toml';

import { ensureNighthawkHome } from './path';
import { configToTomlData, readConfigFileForUpdate } from './toml';
import { validateConfig } from './schema';

const MIGRATIONS_FILE = 'migrations-effort.json';
const THINKING_EFFORT_MAX_TO_HIGH = 'thinking-effort-max-to-high';
const PROVIDER_TYPE_KIMI_TO_NIGHTHAWK = 'provider-type-kimi-to-nighthawk';

function readMigrationMarkers(homeDir: string): Record<string, string> {
  try {
    const parsed: unknown = JSON.parse(readFileSync(join(homeDir, MIGRATIONS_FILE), 'utf-8'));
    if (parsed !== null && typeof parsed === 'object' && !Array.isArray(parsed)) {
      return parsed as Record<string, string>;
    }
  } catch {
    // Missing or corrupt marker file — treated as "no migrations done".
  }
  return {};
}

function writeMigrationMarker(homeDir: string, key: string): void {
  try {
    ensureNighthawkHome(homeDir);
    const markers = readMigrationMarkers(homeDir);
    markers[key] = new Date().toISOString();
    writeFileSync(join(homeDir, MIGRATIONS_FILE), `${JSON.stringify(markers, null, 2)}\n`, {
      mode: 0o600,
    });
  } catch {
    // A lost marker only means the check runs once more — harmless.
  }
}

/**
 * Persisted `thinking.effort = "max"` dates from when the UI recorded any pick
 * unconditionally. `max` is session-only now, so rewrite it to `"high"` once.
 * Skipped when the marker exists; a config that cannot be parsed is left
 * untouched AND unmarked so the next start retries. All other values — and a
 * `max` the user writes by hand after the migration — are honored as-is.
 */
export function migrateThinkingEffortMaxToHigh(configPath: string, homeDir: string): void {
  try {
    if (readMigrationMarkers(homeDir)[THINKING_EFFORT_MAX_TO_HIGH] !== undefined) return;
    if (!existsSync(configPath)) {
      writeMigrationMarker(homeDir, THINKING_EFFORT_MAX_TO_HIGH);
      return;
    }
    let config;
    try {
      config = readConfigFileForUpdate(configPath);
    } catch {
      return; // Unreadable config: no marker, retry on the next start.
    }
    if (config.thinking?.effort === 'max') {
      const validated = validateConfig({
        ...config,
        thinking: { ...config.thinking, effort: 'high' },
      });
      const tmp = `${configPath}.migrate-${process.pid}-${Date.now()}`;
      writeFileSync(tmp, `${stringifyToml(configToTomlData(validated))}\n`, { mode: 0o600 });
      renameSync(tmp, configPath);
    }
    writeMigrationMarker(homeDir, THINKING_EFFORT_MAX_TO_HIGH);
  } catch {
    // Best-effort: never block startup on a migration.
  }
}

function isPlainRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

/**
 * Configs written before the provider-type rename carry `type = "kimi"` and
 * `[services.moonshot_search]` / `[services.moonshot_fetch]` sections, which
 * the current schema rejects. Rewrite them in place, once, on the raw TOML
 * tree — the validated read path cannot be used because these very values
 * are what fails validation.
 */
export function migrateProviderTypeKimiToNighthawk(configPath: string, homeDir: string): void {
  try {
    if (readMigrationMarkers(homeDir)[PROVIDER_TYPE_KIMI_TO_NIGHTHAWK] !== undefined) return;
    if (existsSync(configPath)) {
      let raw: unknown;
      try {
        raw = parseToml(readFileSync(configPath, 'utf-8'));
      } catch {
        return; // Unreadable config: no marker, retry on the next start.
      }
      if (isPlainRecord(raw)) {
        let changed = false;
        const providers = raw['providers'];
        if (isPlainRecord(providers)) {
          for (const entry of Object.values(providers)) {
            if (isPlainRecord(entry) && entry['type'] === 'kimi') {
              entry['type'] = 'nighthawk';
              changed = true;
            }
          }
        }
        const services = raw['services'];
        if (isPlainRecord(services)) {
          const serviceKeyRenames: readonly [string, string][] = [
            ['moonshot_search', 'nighthawk_search'],
            ['moonshot_fetch', 'nighthawk_fetch'],
          ];
          for (const [from, to] of serviceKeyRenames) {
            if (from in services) {
              services[to] = services[from];
              delete services[from];
              changed = true;
            }
          }
        }
        if (changed) {
          const tmp = `${configPath}.migrate-${process.pid}-${Date.now()}`;
          writeFileSync(tmp, `${stringifyToml(raw as never)}\n`, { mode: 0o600 });
          renameSync(tmp, configPath);
        }
      }
    }
    writeMigrationMarker(homeDir, PROVIDER_TYPE_KIMI_TO_NIGHTHAWK);
  } catch {
    // Best-effort: never block startup on a migration.
  }
}
