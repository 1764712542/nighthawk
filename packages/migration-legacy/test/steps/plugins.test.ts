import { describe, expect, it, beforeEach, afterEach, vi } from 'vitest';
import { mkdtemp, mkdir, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

vi.mock('@nighthawk/agent-core', () => {
  const installed = new Map<string, string>();
  return {
    parseManifest: async (dir: string) => ({
      manifest: dir.includes('bad') ? (undefined as unknown as { name: string }) : { name: 'test-plugin' },
      diagnostics: dir.includes('bad')
        ? [{ severity: 'error', message: 'manifest invalid' }]
        : [],
    }),
    PluginManager: class {
      private readonly home: string;
      constructor(opts: { nighthawkHomeDir: string }) {
        this.home = opts.nighthawkHomeDir;
      }
      async load() {}
      get(id: string) {
        const root = installed.get(id);
        if (root === undefined) return undefined;
        return { root, originalSource: root };
      }
      async install(source: string) {
        const id = 'test-plugin';
        installed.set(id, source);
      }
    },
  };
});

import { migratePluginsStep } from '../../src/steps/plugins.js';

let src: string;
let tgt: string;
beforeEach(async () => {
  src = await mkdtemp(join(tmpdir(), 'src-plugins-'));
  tgt = await mkdtemp(join(tmpdir(), 'tgt-plugins-'));
});
afterEach(async () => {
  await rm(src, { recursive: true, force: true });
  await rm(tgt, { recursive: true, force: true });
});

describe('migratePluginsStep', () => {
  it('migrates installable legacy plugins and reports ids', async () => {
    await mkdir(join(src, 'plugins', 'p1'), { recursive: true });
    const r = await migratePluginsStep({ sourceHome: src, targetHome: tgt });
    expect(r.migrated).toEqual(['test-plugin']);
    expect(r.alreadyInstalled).toEqual([]);
    expect(r.conflicts).toEqual([]);
    expect(r.failed).toEqual([]);
  });

  it('marks plugins without a parseable manifest as failed', async () => {
    await mkdir(join(src, 'plugins', 'bad'), { recursive: true });
    const r = await migratePluginsStep({ sourceHome: src, targetHome: tgt });
    expect(r.migrated).toEqual([]);
    expect(r.failed.length).toBe(1);
    expect(r.failed[0]?.reason).toContain('manifest invalid');
  });

  it('handles empty source directory', async () => {
    const r = await migratePluginsStep({ sourceHome: src, targetHome: tgt });
    expect(r.migrated).toEqual([]);
    expect(r.alreadyInstalled).toEqual([]);
    expect(r.conflicts).toEqual([]);
    expect(r.failed).toEqual([]);
  });
});
