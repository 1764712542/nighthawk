import { dirname, join } from 'pathe';

import type { IHostFileSystem } from '#/os/interface/hostFileSystem';

import type { ScanCacheEntry, ScanCacheKey } from './engine';
import { ScanCache } from './engine';

const CACHE_FILE = 'scan-cache.json';
const MAX_ENTRIES = 10_000;

export class PersistentScanCache extends ScanCache {
  private outIndex = new Map<string, ScanCacheEntry>();
  private persisting = false;

  constructor(
    private readonly cachePath: string,
    private readonly fs: IHostFileSystem,
    entries?: ScanCacheEntry[],
  ) {
    super(MAX_ENTRIES);
    if (entries !== undefined) {
      for (const entry of entries) {
        super.set(entry.key, entry);
        this.outIndex.set(this.toIndex(entry.key), entry);
      }
      this.evict();
    }
  }

  override get(key: ScanCacheKey): ScanCacheEntry | undefined {
    const index = this.toIndex(key);
    const hit = super.get(key);
    if (hit !== undefined) {
      this.outIndex.delete(index);
      this.outIndex.set(index, hit);
    }
    return hit;
  }

  override set(key: ScanCacheKey, value: ScanCacheEntry): void {
    super.set(key, value);
    const index = this.toIndex(key);
    this.outIndex.delete(index);
    this.outIndex.set(index, value);
    if (this.outIndex.size > MAX_ENTRIES) {
      this.evict();
    }
  }

  override clear(): void {
    super.clear();
    this.outIndex.clear();
  }

  async persist(): Promise<void> {
    if (this.persisting) return;
    this.persisting = true;
    try {
      await this.fs.mkdir(dirname(this.cachePath), { recursive: true });
      const data: Record<string, ScanCacheEntry> = Object.fromEntries(this.outIndex);
      await this.fs.writeText(this.cachePath, JSON.stringify(data));
    } catch {
    } finally {
      this.persisting = false;
    }
  }

  static async load(cachePath: string, fs: IHostFileSystem): Promise<PersistentScanCache> {
    let entries: ScanCacheEntry[] | undefined;
    try {
      const raw = await fs.readText(cachePath);
      const parsed: Record<string, ScanCacheEntry> = JSON.parse(raw);
      entries = Object.values(parsed);
    } catch {
    }
    return new PersistentScanCache(cachePath, fs, entries);
  }

  private evict(): void {
    while (this.outIndex.size > MAX_ENTRIES) {
      const oldest = this.outIndex.keys().next().value;
      if (oldest === undefined) break;
      this.outIndex.delete(oldest);
      const [version, file, contentHash] = oldest.split('::');
      if (version !== undefined && file !== undefined && contentHash !== undefined) {
        this.delete({ version, file, contentHash });
      }
    }
  }
}

export async function createScanCache(fs: IHostFileSystem, workspaceDir: string): Promise<PersistentScanCache> {
  const cachePath = join(workspaceDir, '.nighthawk', CACHE_FILE);
  return PersistentScanCache.load(cachePath, fs);
}
