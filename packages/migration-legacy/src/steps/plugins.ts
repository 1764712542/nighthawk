import { readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { PluginManager, parseManifest } from '@nighthawk/agent-core';
import { sourcePluginsDir } from '../paths.js';
import type { PluginsMigrationSummary } from '../types.js';

export interface PluginsStepInput {
  readonly sourceHome: string;
  readonly targetHome: string;
}

export async function migratePluginsStep(input: PluginsStepInput): Promise<PluginsMigrationSummary> {
  const sourceDir = sourcePluginsDir(input.sourceHome);
  let entries: string[];
  try {
    entries = await readdir(sourceDir);
  } catch {
    return emptyResult();
  }

  const manager = new PluginManager({ nighthawkHomeDir: input.targetHome });
  const failed: Array<PluginsMigrationSummary['failed'][number]> = [];
  try {
    await manager.load();
  } catch (error) {
    return {
      ...emptyResult(),
      failed: [{ sourcePath: join(input.targetHome, 'plugins', 'installed.json'), reason: formatError(error) }],
    };
  }

  const migrated: string[] = [];
  const alreadyInstalled: string[] = [];
  const conflicts: string[] = [];
  for (const name of entries) {
    const sourcePath = join(sourceDir, name);
    if (!(await isDirectory(sourcePath))) continue;

    const parsed = await parseManifest(sourcePath);
    if (parsed.manifest === undefined) {
      failed.push({
        sourcePath,
        reason:
          parsed.diagnostics.find((diagnostic) => diagnostic.severity === 'error')?.message ??
          'Plugin manifest could not be loaded.',
      });
      continue;
    }

    const id = parsed.manifest.name.toLowerCase();
    const existing = manager.get(id);
    if (existing !== undefined) {
      if (existing.root === sourcePath || existing.originalSource === sourcePath) {
        alreadyInstalled.push(id);
      } else {
        conflicts.push(id);
      }
      continue;
    }

    try {
      await manager.install(sourcePath);
      migrated.push(id);
    } catch (error) {
      failed.push({ sourcePath, reason: formatError(error) });
    }
  }

  return { migrated, alreadyInstalled, conflicts, failed };
}

function emptyResult(): PluginsMigrationSummary {
  return { migrated: [], alreadyInstalled: [], conflicts: [], failed: [] };
}

async function isDirectory(path: string): Promise<boolean> {
  try {
    return (await stat(path)).isDirectory();
  } catch {
    return false;
  }
}

function formatError(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}
