import type { HostDirEntry, HostFileStat, IHostFileSystem } from '#/os/interface/hostFileSystem';

export interface MemoryFileEntry {
  readonly content?: string;
  readonly isDirectory?: boolean;
}

export class MemoryHostFileSystem implements IHostFileSystem {
  declare readonly _serviceBrand: undefined;

  private readonly files = new Map<string, MemoryFileEntry>();

  put(path: string, content: string): void {
    this.files.set(path, { content });
  }

  putDir(path: string): void {
    this.files.set(path, { isDirectory: true });
  }

  private entry(path: string): MemoryFileEntry | undefined {
    return this.files.get(path);
  }

  async readText(path: string): Promise<string> {
    const entry = this.entry(path);
    if (!entry || entry.isDirectory || entry.content === undefined) {
      throw new Error(`ENOENT: ${path}`);
    }
    return entry.content;
  }

  async writeText(path: string, data: string): Promise<void> {
    this.files.set(path, { content: data });
  }

  async appendText(path: string, data: string): Promise<void> {
    const entry = this.entry(path);
    const existing = !entry || entry.isDirectory ? '' : (entry.content ?? '');
    this.files.set(path, { content: existing + data });
  }

  async readBytes(path: string, n?: number, offset?: number): Promise<Uint8Array> {
    const text = await this.readText(path);
    const bytes = Buffer.from(text, 'utf8');
    const start = offset ?? 0;
    const end = n !== undefined ? start + n : undefined;
    return bytes.subarray(start, end);
  }

  async writeBytes(path: string, data: Uint8Array): Promise<void> {
    this.files.set(path, { content: Buffer.from(data).toString('utf8') });
  }

  async *readLines(): AsyncGenerator<string> {
    yield* [];
  }

  async createExclusive(path: string, data: Uint8Array): Promise<boolean> {
    if (this.files.has(path)) return false;
    this.files.set(path, { content: Buffer.from(data).toString('utf8') });
    return true;
  }

  async mkdir(path: string, options?: { readonly recursive?: boolean }): Promise<void> {
    this.files.set(path, { isDirectory: true });
  }

  async lstat(path: string): Promise<HostFileStat> {
    return this.stat(path);
  }

  async remove(path: string): Promise<void> {
    this.files.delete(path);
  }

  async realpath(path: string): Promise<string> {
    if (!this.files.has(path)) {
      throw new Error(`ENOENT: ${path}`);
    }
    return path;
  }

  async stat(path: string): Promise<HostFileStat> {
    const entry = this.entry(path);
    if (!entry) {
      throw new Error(`ENOENT: ${path}`);
    }
    if (entry.isDirectory) {
      return { isFile: false, isDirectory: true, size: 0 };
    }
    return {
      isFile: true,
      isDirectory: false,
      size: entry.content === undefined ? 0 : Buffer.byteLength(entry.content, 'utf8'),
    };
  }

  async readdir(path: string): Promise<readonly HostDirEntry[]> {
    const prefix = path.endsWith('/') ? path : `${path}/`;
    const out: HostDirEntry[] = [];
    for (const [key, value] of this.files) {
      if (!key.startsWith(prefix)) continue;
      const rest = key.slice(prefix.length);
      if (rest.includes('/')) continue;
      out.push({
        name: rest,
        isFile: !value.isDirectory,
        isDirectory: value.isDirectory === true,
      });
    }
    return out;
  }
}
