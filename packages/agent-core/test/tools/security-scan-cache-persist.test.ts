import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mkdtemp, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

import type { ScanCacheKey, ScanCacheEntry } from '../../src/tools/builtin/security/engine.js';
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
