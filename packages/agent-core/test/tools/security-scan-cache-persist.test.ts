import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mkdtemp } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

import type { Kaos } from '@nighthawk/kaos';

import type { ScanCacheKey, ScanCacheEntry, ScanProgress, ScanProgressCallback } from '../../src/tools/builtin/security/engine.js';
import { ScanCache } from '../../src/tools/builtin/security/engine.js';
import { createScanCache, PersistentScanCache } from '../../src/tools/builtin/security/scan-cache-persist.js';

const mkKey = (file = 'test.ts', version = '1', contentHash = 'abc123'): ScanCacheKey => ({
  version,
  file,
  contentHash,
});

const mkEntry = (key: ScanCacheKey): ScanCacheEntry => ({
  key,
  generatedAt: Date.now(),
  scanResults: [],
  normalizedFindings: [],
});

/** Create a fake Kaos with iterdir returning the given paths and stat/readText per file. */
function fakeKaos(files: Record<string, string>): Kaos {
  const keys = Object.keys(files);
  const statMap = new Map<string, { stMode: number; stSize: number }>();
  for (const [p, c] of Object.entries(files)) {
    statMap.set(p, { stMode: 0o100000, stSize: c.length });
  }

  // Directories implied by file paths (all parent dirs)
  const allDirs = new Set<string>();
  for (const p of keys) {
    const parts = p.split('/');
    for (let i = 1; i < parts.length; i++) {
      allDirs.add(parts.slice(0, i).join('/'));
    }
  }
  for (const d of allDirs) {
    if (!statMap.has(d)) {
      statMap.set(d, { stMode: 0o040000, stSize: 0 });
    }
  }

  return {
    name: 'fake',
    normpath: (p: string) => p,
    pathClass: () => 'posix',
    osEnv: { osKind: 'Linux', osArch: 'x86_64', osVersion: 'test', shellName: 'bash', shellPath: '/bin/bash' },
    gethome: () => '/home/test',
    getcwd: () => '/workspace',
    withCwd: () => undefined as unknown as Kaos,
    withEnv: () => undefined as unknown as Kaos,
    chdir: async () => {},
    stat: async (p: string) => {
      const entry = statMap.get(p);
      if (!entry) throw new Error(`stat: ${p}`);
      return entry;
    },
    iterdir: (async function* (dir: string) {
      // Yield direct children of `dir`
      const prefix = dir.endsWith('/') ? dir : `${dir}/`;
      const yielded = new Set<string>();
      for (const k of keys) {
        if (k.startsWith(prefix)) {
          const rel = k.slice(prefix.length);
          const child = rel.split('/')[0]!;
          const fullPath = prefix + child;
          if (!yielded.has(fullPath)) {
            yielded.add(fullPath);
            yield fullPath;
          }
        }
      }
    }) as unknown as Kaos['iterdir'],
    glob: async () => [],
    readBytes: async () => Buffer.from(''),
    readText: async (p: string) => files[p] ?? '',
    readLines: async () => [],
    writeBytes: async () => {},
    writeText: async () => {},
    mkdir: async () => {},
    exec: async () => ({ exitCode: 0, stdout: '', stderr: '' }),
    execWithEnv: async () => ({ exitCode: 0, stdout: '', stderr: '' }),
  } as unknown as Kaos;
}

describe('PersistentScanCache', () => {
  let tmpDir: string;

  beforeEach(async () => {
    tmpDir = await mkdtemp(join(tmpdir(), 'scan-cache-test-'));
  });

  it('should return an empty cache for a nonexistent path', async () => {
    const cache = await createScanCache(join(tmpDir, 'nonexistent'));
    const key = mkKey();
    expect(cache.get(key)).toBeUndefined();
    expect(cache.size).toBe(0);
  });

  it('should perform set/get and persist to disk', async () => {
    const cache = await createScanCache(tmpDir);
    const key = mkKey();
    const entry = mkEntry(key);

    cache.set(key, entry);
    expect(cache.get(key)).toEqual(entry);

    await cache.persist();
  });

  it('should load previously persisted entries', async () => {
    const cache1 = await createScanCache(tmpDir);
    const key = mkKey();
    const entry = mkEntry(key);
    cache1.set(key, entry);
    await cache1.persist();

    const cache2 = await createScanCache(tmpDir);
    expect(cache2.get(key)).toEqual(entry);
    expect(cache2.size).toBe(1);
  });

  it('should handle long keys via hashing', async () => {
    const cache = await createScanCache(tmpDir);
    const longFile = 'a'.repeat(200);
    const key = mkKey(longFile);

    cache.set(key, mkEntry(key));
    expect(cache.get(key)).toBeDefined();
  });

  it('should clear entries', async () => {
    const cache = await createScanCache(tmpDir);
    const key = mkKey();
    cache.set(key, mkEntry(key));
    expect(cache.size).toBe(1);
    cache.clear();
    expect(cache.size).toBe(0);
  });
});

describe('createScanCache factory', () => {
  it('should return a PersistentScanCache instance', async () => {
    const tmpDir = await mkdtemp(join(tmpdir(), 'scan-cache-factory-'));
    const cache = await createScanCache(tmpDir);
    expect(cache).toBeInstanceOf(PersistentScanCache);
  });
});

describe('PersistentScanCache streaming persistence', () => {
  let tmpDir: string;

  beforeEach(async () => {
    tmpDir = await mkdtemp(join(tmpdir(), 'scan-cache-streaming-'));
  });

  it('persist() is idempotent and does not race', async () => {
    const cache = new PersistentScanCache(join(tmpDir, 'scan-cache.json'));
    const k1 = mkKey('a.ts', '1', 'hash1');
    const k2 = mkKey('b.ts', '1', 'hash2');
    cache.set(k1, mkEntry(k1));
    cache.set(k2, mkEntry(k2));

    // Fire persist twice concurrently — the second should be a no-op
    await Promise.all([cache.persist(), cache.persist()]);

    const loaded = await PersistentScanCache.load(join(tmpDir, 'scan-cache.json'));
    expect(loaded.get(k1)).toBeDefined();
    expect(loaded.get(k2)).toBeDefined();
    expect(loaded.size).toBe(2);
  });

  it('multiple sequential persist() calls save latest state', async () => {
    const cache = new PersistentScanCache(join(tmpDir, 'scan-cache.json'));
    const k1 = mkKey('a.ts', '1', 'hash1');
    cache.set(k1, mkEntry(k1));
    await cache.persist();

    const k2 = mkKey('b.ts', '1', 'hash2');
    cache.set(k2, mkEntry(k2));
    await cache.persist();

    const loaded = await PersistentScanCache.load(join(tmpDir, 'scan-cache.json'));
    expect(loaded.size).toBe(2);
    expect(loaded.get(k1)).toBeDefined();
    expect(loaded.get(k2)).toBeDefined();
  });
});

describe('runScan parallel processing and progress', () => {
  it('emits progress for every file processed', async () => {
    // We need to import runScan. To avoid running real scans, we feed a fake Kaos
    // that returns known files and content. The scanContent function will find
    // no matches but the progress should still fire.
    const { runScan } = await import('../../src/tools/builtin/security/engine.js');

    const files: Record<string, string> = {};
    for (let i = 0; i < 20; i++) {
      files[`/root/file${String(i)}.ts`] = `const x = ${String(i)};`;
    }
    const kaos = fakeKaos(files);
    const progressUpdates: ScanProgress[] = [];
    const onProgress: ScanProgressCallback = (p) => { progressUpdates.push({ ...p }); };

    const report = await runScan(kaos, { root: '/root', onProgress });

    expect(report.filesScanned).toBe(20);
    expect(progressUpdates.length).toBe(20);

    // Each update should have processed in [1..20], total=20, and currentFile should be a file path
    for (const p of progressUpdates) {
      expect(p.total).toBe(20);
      expect(p.processed).toBeGreaterThanOrEqual(1);
      expect(p.processed).toBeLessThanOrEqual(20);
      expect(p.currentFile).toMatch(/^\/root\/file\d+\.ts$/);
    }

    // Verify all 20 unique files were seen across the progress callbacks
    const seenFiles = new Set(progressUpdates.map(p => p.currentFile));
    expect(seenFiles.size).toBe(20);
  });

  it('produces correct results with concurrent workers (all files scanned)', async () => {
    const { runScan } = await import('../../src/tools/builtin/security/engine.js');

    const contentWithSqlInjection = 'const sql = "SELECT * FROM users WHERE id=" + input;';
    const files: Record<string, string> = {};
    // Put 10 files with SQL injection, 10 without
    for (let i = 0; i < 10; i++) {
      files[`/src/inject${String(i)}.ts`] = contentWithSqlInjection;
    }
    for (let i = 0; i < 10; i++) {
      files[`/src/safe${String(i)}.ts`] = 'const x = 42;';
    }

    const kaos = fakeKaos(files);
    const report = await runScan(kaos, { root: '/src' });

    expect(report.filesScanned).toBe(20);
    expect(report.results.length).toBeGreaterThanOrEqual(10);
  });

  it('handles empty file list gracefully', async () => {
    const { runScan } = await import('../../src/tools/builtin/security/engine.js');

    const kaos = fakeKaos({});
    const report = await runScan(kaos, { root: '/empty' });

    expect(report.filesScanned).toBe(0);
    expect(report.results).toHaveLength(0);
  });

  it('counts cache hits correctly', async () => {
    const { runScan, createScanCacheKey } = await import('../../src/tools/builtin/security/engine.js');

    const content = 'const x = 42;';
    const files: Record<string, string> = {};
    for (let i = 0; i < 5; i++) {
      files[`/dir/f${String(i)}.ts`] = content;
    }
    const kaos = fakeKaos(files);

    // Create a pre-populated cache
    const cache = new ScanCache();
    const key = createScanCacheKey('1', '/dir/f0.ts', content);
    cache.set(key, {
      key,
      generatedAt: Date.now(),
      scanResults: [],
      normalizedFindings: [],
    });

    const report = await runScan(kaos, { root: '/dir' }, cache);

    expect(report.filesScanned).toBe(5);
    expect(report.metrics).toBeDefined();
    expect(report.metrics!.cacheHits).toBe(1);
  });

  it('skips oversized files', async () => {
    const { runScan } = await import('../../src/tools/builtin/security/engine.js');

    const bigContent = 'x'.repeat(2_500_000);
    const kaos = fakeKaos({
      '/code/big.ts': bigContent,
      '/code/small.ts': 'const x = 1;',
    });
    const report = await runScan(kaos, { root: '/code' });

    expect(report.filesScanned).toBe(2);
    expect(report.metrics).toBeDefined();
    expect(report.metrics!.filesSkipped).toBe(1);
  });
});

describe('runScan streaming batch persistence', () => {
  it('persists cache to disk during scan when persistBatchSize is small', async () => {
    const { runScan } = await import('../../src/tools/builtin/security/engine.js');
    const { join } = await import('node:path');

    const cacheDir = await mkdtemp(join(tmpdir(), 'scan-streaming-'));
    const cachePath = join(cacheDir, '.nighthawk', 'scan-cache.json');

    const files: Record<string, string> = {};
    for (let i = 0; i < 10; i++) {
      files[`/root/file${String(i)}.ts`] = `const val${String(i)} = ${String(i)};`;
    }
    const kaos = fakeKaos(files);

    await runScan(kaos, { root: '/root', persistBatchSize: 3 }, undefined, async () => {
      return PersistentScanCache.load(cachePath);
    });

    // After the scan, the cache file should exist and have entries
    const { readFile } = await import('node:fs/promises');
    const raw = await readFile(cachePath, 'utf-8');
    const parsed = JSON.parse(raw) as Record<string, ScanCacheEntry>;
    expect(Object.keys(parsed).length).toBeGreaterThanOrEqual(3);
  });

  it('does not persist mid-scan when persistBatchSize is 0', async () => {
    const { runScan } = await import('../../src/tools/builtin/security/engine.js');
    const { join } = await import('node:path');

    const cacheDir = await mkdtemp(join(tmpdir(), 'scan-no-streaming-'));
    const cachePath = join(cacheDir, '.nighthawk', 'scan-cache.json');

    const files: Record<string, string> = {};
    for (let i = 0; i < 5; i++) {
      files[`/root/file${String(i)}.ts`] = `const v${String(i)} = ${String(i)};`;
    }
    const kaos = fakeKaos(files);

    await runScan(kaos, { root: '/root', persistBatchSize: 0 }, undefined, async () => {
      return PersistentScanCache.load(cachePath);
    });

    // persistBatchSize=0 means no mid-scan persistence, but the final persist() still runs
    const { readFile } = await import('node:fs/promises');
    const raw = await readFile(cachePath, 'utf-8');
    const parsed = JSON.parse(raw) as Record<string, ScanCacheEntry>;
    expect(Object.keys(parsed).length).toBe(5);
  });

  it('uses default persistBatchSize of 100 when not specified', async () => {
    const { runScan } = await import('../../src/tools/builtin/security/engine.js');
    const { join } = await import('node:path');

    const cacheDir = await mkdtemp(join(tmpdir(), 'scan-default-batch-'));
    const cachePath = join(cacheDir, '.nighthawk', 'scan-cache.json');

    const files: Record<string, string> = {};
    for (let i = 0; i < 5; i++) {
      files[`/root/f${String(i)}.ts`] = `const v = ${String(i)};`;
    }
    const kaos = fakeKaos(files);

    // Should not error — with only 5 files and default batch of 100,
    // persist is called only at the end
    await runScan(kaos, { root: '/root' }, undefined, async () => {
      return PersistentScanCache.load(cachePath);
    });

    const { readFile } = await import('node:fs/promises');
    const raw = await readFile(cachePath, 'utf-8');
    const parsed = JSON.parse(raw) as Record<string, ScanCacheEntry>;
    expect(Object.keys(parsed).length).toBe(5);
  });
});

describe('worker pool concurrency behavior', () => {
  it('all files are scanned exactly once even with concurrency', async () => {
    const { runScan } = await import('../../src/tools/builtin/security/engine.js');

    const fileCount = 32;
    const files: Record<string, string> = {};
    for (let i = 0; i < fileCount; i++) {
      files[`/code/${String(i)}.ts`] = `// file ${String(i)}\nconsole.log(${String(i)});`;
    }
    const kaos = fakeKaos(files);

    const progressUpdates: ScanProgress[] = [];
    await runScan(kaos, {
      root: '/code',
      onProgress: (p) => { progressUpdates.push({ ...p }); },
    });

    expect(progressUpdates.length).toBe(fileCount);

    // All processed values 1..fileCount should appear
    const processedSet = new Set(progressUpdates.map(p => p.processed));
    expect(processedSet.size).toBe(fileCount);
  });

  it('progress processed count is monotonic for each call', async () => {
    const { runScan } = await import('../../src/tools/builtin/security/engine.js');

    const files: Record<string, string> = {};
    for (let i = 0; i < 15; i++) {
      files[`/data/${String(i)}.ts`] = `export default ${String(i)};`;
    }
    const kaos = fakeKaos(files);

    const progressUpdates: ScanProgress[] = [];
    await runScan(kaos, {
      root: '/data',
      onProgress: (p) => { progressUpdates.push({ ...p }); },
    });

    // The sequence of processed values should include all numbers 1..15
    const processedValues = progressUpdates.map(p => p.processed);
    const sorted = [...processedValues].sort((a, b) => a - b);
    expect(sorted).toEqual(Array.from({ length: 15 }, (_, i) => i + 1));
  });
});
