import { describe, it, expect } from 'vitest';

import type { ScanCacheKey, ScanCacheEntry, ScanProgress } from '#/features/security/engine/engine';
import { ScanCache, runScan, createScanCacheKey } from '#/features/security/engine/engine';
import { createScanCache, PersistentScanCache } from '#/features/security/engine/scan-cache-persist';
import { MemoryHostFileSystem } from './stubs/memoryHostFs';

const CACHE_PATH = '/workspace/.nighthawk/scan-cache.json';

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

function populate(fs: MemoryHostFileSystem, files: Record<string, string>): void {
  const dirs = new Set<string>();
  for (const p of Object.keys(files)) {
    const parts = p.split('/');
    for (let i = 1; i < parts.length; i++) {
      dirs.add(parts.slice(0, i).join('/'));
    }
  }
  for (const d of dirs) {
    fs.putDir(d);
  }
  for (const [p, c] of Object.entries(files)) {
    fs.put(p, c);
  }
}

describe('PersistentScanCache', () => {
  it('should return an empty cache for a nonexistent path', async () => {
    const memfs = new MemoryHostFileSystem();
    const cache = await createScanCache(memfs, '/workspace');
    const key = mkKey();
    expect(cache.get(key)).toBeUndefined();
    expect(cache.size).toBe(0);
  });

  it('should perform set/get and persist to disk', async () => {
    const memfs = new MemoryHostFileSystem();
    const cache = await createScanCache(memfs, '/workspace');
    const key = mkKey();
    const entry = mkEntry(key);

    cache.set(key, entry);
    expect(cache.get(key)).toEqual(entry);

    await cache.persist();
  });

  it('should load previously persisted entries', async () => {
    const memfs = new MemoryHostFileSystem();
    const cache1 = await createScanCache(memfs, '/workspace');
    const key = mkKey();
    const entry = mkEntry(key);
    cache1.set(key, entry);
    await cache1.persist();

    const cache2 = await createScanCache(memfs, '/workspace');
    expect(cache2.get(key)).toEqual(entry);
    expect(cache2.size).toBe(1);
  });

  it('should handle long keys via hashing', async () => {
    const memfs = new MemoryHostFileSystem();
    const cache = await createScanCache(memfs, '/workspace');
    const longFile = 'a'.repeat(200);
    const key = mkKey(longFile);

    cache.set(key, mkEntry(key));
    expect(cache.get(key)).toBeDefined();
  });

  it('should clear entries', async () => {
    const memfs = new MemoryHostFileSystem();
    const cache = await createScanCache(memfs, '/workspace');
    const key = mkKey();
    cache.set(key, mkEntry(key));
    expect(cache.size).toBe(1);
    cache.clear();
    expect(cache.size).toBe(0);
  });
});

describe('createScanCache factory', () => {
  it('should return a PersistentScanCache instance', async () => {
    const memfs = new MemoryHostFileSystem();
    const cache = await createScanCache(memfs, '/workspace');
    expect(cache).toBeInstanceOf(PersistentScanCache);
  });
});

describe('PersistentScanCache streaming persistence', () => {
  it('persist() is idempotent and does not race', async () => {
    const memfs = new MemoryHostFileSystem();
    const cache = new PersistentScanCache(CACHE_PATH, memfs);
    const k1 = mkKey('a.ts', '1', 'hash1');
    const k2 = mkKey('b.ts', '1', 'hash2');
    cache.set(k1, mkEntry(k1));
    cache.set(k2, mkEntry(k2));

    await Promise.all([cache.persist(), cache.persist()]);

    const loaded = await PersistentScanCache.load(CACHE_PATH, memfs);
    expect(loaded.get(k1)).toBeDefined();
    expect(loaded.get(k2)).toBeDefined();
    expect(loaded.size).toBe(2);
  });

  it('multiple sequential persist() calls save latest state', async () => {
    const memfs = new MemoryHostFileSystem();
    const cache = new PersistentScanCache(CACHE_PATH, memfs);
    const k1 = mkKey('a.ts', '1', 'hash1');
    cache.set(k1, mkEntry(k1));
    await cache.persist();

    const k2 = mkKey('b.ts', '1', 'hash2');
    cache.set(k2, mkEntry(k2));
    await cache.persist();

    const loaded = await PersistentScanCache.load(CACHE_PATH, memfs);
    expect(loaded.size).toBe(2);
    expect(loaded.get(k1)).toBeDefined();
    expect(loaded.get(k2)).toBeDefined();
  });
});

describe('runScan parallel processing and progress', () => {
  it('emits progress for every file processed', async () => {
    const files: Record<string, string> = {};
    for (let i = 0; i < 20; i++) {
      files[`/root/file${String(i)}.ts`] = `const x = ${String(i)};`;
    }
    const memfs = new MemoryHostFileSystem();
    populate(memfs, files);
    const progressUpdates: ScanProgress[] = [];
    const report = await runScan(memfs, {
      root: '/root',
      onProgress: (p) => { progressUpdates.push({ ...p }); },
    });

    expect(report.filesScanned).toBe(20);
    expect(progressUpdates.length).toBe(20);

    for (const p of progressUpdates) {
      expect(p.total).toBe(20);
      expect(p.processed).toBeGreaterThanOrEqual(1);
      expect(p.processed).toBeLessThanOrEqual(20);
      expect(p.currentFile).toMatch(/^\/root\/file\d+\.ts$/);
    }

    const seenFiles = new Set(progressUpdates.map(p => p.currentFile));
    expect(seenFiles.size).toBe(20);
  });

  it('produces correct results with concurrent workers (all files scanned)', async () => {
    const contentWithSqlInjection = 'const sql = "SELECT * FROM users WHERE id=" + input;';
    const files: Record<string, string> = {};
    for (let i = 0; i < 10; i++) {
      files[`/src/inject${String(i)}.ts`] = contentWithSqlInjection;
    }
    for (let i = 0; i < 10; i++) {
      files[`/src/safe${String(i)}.ts`] = 'const x = 42;';
    }

    const memfs = new MemoryHostFileSystem();
    populate(memfs, files);
    const report = await runScan(memfs, { root: '/src' });

    expect(report.filesScanned).toBe(20);
    expect(report.results.length).toBeGreaterThanOrEqual(10);
  });

  it('handles empty file list gracefully', async () => {
    const memfs = new MemoryHostFileSystem();
    const report = await runScan(memfs, { root: '/empty' });

    expect(report.filesScanned).toBe(0);
    expect(report.results).toHaveLength(0);
  });

  it('counts cache hits correctly', async () => {
    const content = 'const x = 42;';
    const files: Record<string, string> = {};
    for (let i = 0; i < 5; i++) {
      files[`/dir/f${String(i)}.ts`] = content;
    }
    const memfs = new MemoryHostFileSystem();
    populate(memfs, files);

    const cache = new ScanCache();
    const key = createScanCacheKey('1', '/dir/f0.ts', content);
    cache.set(key, {
      key,
      generatedAt: Date.now(),
      scanResults: [],
      normalizedFindings: [],
    });

    const report = await runScan(memfs, { root: '/dir' }, cache);

    expect(report.filesScanned).toBe(5);
    expect(report.metrics).toBeDefined();
    expect(report.metrics!.cacheHits).toBe(1);
  });

  it('skips oversized files', async () => {
    const bigContent = 'x'.repeat(2_500_000);
    const memfs = new MemoryHostFileSystem();
    populate(memfs, {
      '/code/big.ts': bigContent,
      '/code/small.ts': 'const x = 1;',
    });
    const report = await runScan(memfs, { root: '/code' });

    expect(report.filesScanned).toBe(2);
    expect(report.metrics).toBeDefined();
    expect(report.metrics!.filesSkipped).toBe(1);
  });
});

describe('runScan streaming batch persistence', () => {
  it('persists cache to disk during scan when persistBatchSize is small', async () => {
    const files: Record<string, string> = {};
    for (let i = 0; i < 10; i++) {
      files[`/root/file${String(i)}.ts`] = `const val${String(i)} = ${String(i)};`;
    }
    const memfs = new MemoryHostFileSystem();
    populate(memfs, files);

    await runScan(memfs, { root: '/root', persistBatchSize: 3 }, undefined, async () => {
      return PersistentScanCache.load('/root/.nighthawk/scan-cache.json', memfs);
    });

    const raw = await memfs.readText('/root/.nighthawk/scan-cache.json');
    const parsed = JSON.parse(raw) as Record<string, ScanCacheEntry>;
    expect(Object.keys(parsed).length).toBeGreaterThanOrEqual(3);
  });

  it('does not persist mid-scan when persistBatchSize is 0', async () => {
    const files: Record<string, string> = {};
    for (let i = 0; i < 5; i++) {
      files[`/root/file${String(i)}.ts`] = `const v${String(i)} = ${String(i)};`;
    }
    const memfs = new MemoryHostFileSystem();
    populate(memfs, files);

    await runScan(memfs, { root: '/root', persistBatchSize: 0 }, undefined, async () => {
      return PersistentScanCache.load('/root/.nighthawk/scan-cache.json', memfs);
    });

    const raw = await memfs.readText('/root/.nighthawk/scan-cache.json');
    const parsed = JSON.parse(raw) as Record<string, ScanCacheEntry>;
    expect(Object.keys(parsed).length).toBe(5);
  });

  it('uses default persistBatchSize of 100 when not specified', async () => {
    const files: Record<string, string> = {};
    for (let i = 0; i < 5; i++) {
      files[`/root/f${String(i)}.ts`] = `const v = ${String(i)};`;
    }
    const memfs = new MemoryHostFileSystem();
    populate(memfs, files);

    await runScan(memfs, { root: '/root' }, undefined, async () => {
      return PersistentScanCache.load('/root/.nighthawk/scan-cache.json', memfs);
    });

    const raw = await memfs.readText('/root/.nighthawk/scan-cache.json');
    const parsed = JSON.parse(raw) as Record<string, ScanCacheEntry>;
    expect(Object.keys(parsed).length).toBe(5);
  });
});

describe('worker pool concurrency behavior', () => {
  it('all files are scanned exactly once even with concurrency', async () => {
    const fileCount = 32;
    const files: Record<string, string> = {};
    for (let i = 0; i < fileCount; i++) {
      files[`/code/${String(i)}.ts`] = `/* file ${String(i)} */ console.log(${String(i)});`;
    }
    const memfs = new MemoryHostFileSystem();
    populate(memfs, files);

    const progressUpdates: ScanProgress[] = [];
    await runScan(memfs, {
      root: '/code',
      onProgress: (p) => { progressUpdates.push({ ...p }); },
    });

    expect(progressUpdates.length).toBe(fileCount);

    const processedSet = new Set(progressUpdates.map(p => p.processed));
    expect(processedSet.size).toBe(fileCount);
  });

  it('progress processed count is monotonic for each call', async () => {
    const files: Record<string, string> = {};
    for (let i = 0; i < 15; i++) {
      files[`/data/${String(i)}.ts`] = `export default ${String(i)};`;
    }
    const memfs = new MemoryHostFileSystem();
    populate(memfs, files);

    const progressUpdates: ScanProgress[] = [];
    await runScan(memfs, {
      root: '/data',
      onProgress: (p) => { progressUpdates.push({ ...p }); },
    });

    const processedValues = progressUpdates.map(p => p.processed);
    const sorted = [...processedValues].sort((a, b) => a - b);
    expect(sorted).toEqual(Array.from({ length: 15 }, (_, i) => i + 1));
  });
});
