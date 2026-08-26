import { dirname, join } from 'pathe';

import type { IHostFileSystem } from '#/os/interface/hostFileSystem';

import type { ScanCacheEntry, ScanCacheKey } from './engine';
import { ScanCache } from './engine';

const CACHE_FILE = 'scan-cache.json';

export class PersistentScanCache extends ScanCache {
  private outIndex = new Map<string, ScanCacheEntry>();
  private persisting = false;

  constructor(
    private readonly cachePath: string,
    private readonly fs: IHostFileSystem,
    entries?: ScanCacheEntry[],
  ) {
    super();
    if (entries !== undefined) {
      for (const entry of entries) {
        super.set(entry.key, entry);
      }
    }
  }

  override get(key: ScanCacheKey): ScanCacheEntry | undefined {
    return super.get(key);
  }

  override set(key: ScanCacheKey, value: ScanCacheEntry): void {
    super.set(key, value);
    const index = (this as any).toIndex(key) as string;
    this.outIndex.set(index, value);
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
}

export async function createScanCache(fs: IHostFileSystem, workspaceDir: string): Promise<PersistentScanCache> {
  const cachePath = join(workspaceDir, '.nighthawk', CACHE_FILE);
  return PersistentScanCache.load(cachePath, fs);
}
