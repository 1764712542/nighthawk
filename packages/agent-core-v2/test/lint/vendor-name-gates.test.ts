import { readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC_ROOT = join(__dirname, '..', '..', 'src');

const VENDOR_GATE_RE = /[!=]==?\s*'nighthawk'|'nighthawk'\s*[!=]==?|\bcase\s+'nighthawk'\s*:/;

interface GateHit {
  readonly file: string;
  readonly line: number;
  readonly text: string;
}

function walk(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir)) {
    const abs = join(dir, entry);
    const st = statSync(abs);
    if (st.isDirectory()) {
      if (relative(SRC_ROOT, abs) === 'kosong') continue;
      out.push(...walk(abs));
    } else if (abs.endsWith('.ts')) {
      out.push(abs);
    }
  }
  return out;
}

function isCommentLine(line: string): boolean {
  const trimmed = line.trimStart();
  return trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('*');
}

function findVendorGates(source: string, file: string): GateHit[] {
  const hits: GateHit[] = [];
  const lines = source.split('\n');
  for (const [index, line] of lines.entries()) {
    if (isCommentLine(line)) continue;
    VENDOR_GATE_RE.lastIndex = 0;
    if (VENDOR_GATE_RE.test(line)) {
      hits.push({ file, line: index + 1, text: line.trim() });
    }
  }
  return hits;
}

describe('vendor-name gates', () => {
  it('flags vendor compares and switch cases in code', () => {
    const hits = findVendorGates(
      [
        `if (provider.type === 'nighthawk') return;`,
        `if (provider?.type !== 'nighthawk' || provider.oauth === undefined) return;`,
        `const managed = 'nighthawk' === vendor;`,
        `switch (type) { case 'nighthawk': break; }`,
        `if (type == 'nighthawk') return;`,
      ].join('\n'),
      'fixture.ts',
    );
    expect(hits.map((hit) => hit.line)).toEqual([1, 2, 3, 4, 5]);
  });

  it('ignores comments, brand/env names, and nighthawk as data', () => {
    const hits = findVendorGates(
      [
        '// v1 `provider.type === \'nighthawk\'` gate restored.',
        ' * `provider.type === \'nighthawk\'` parity): strict validation',
        '/* legacy: provider.type === \'nighthawk\' */',
        'const home = process.env.NIGHTHAWK_HOME;',
        `const event = { provider_type: 'nighthawk' };`,
        `const provider = { type: 'nighthawk', oauth };`,
        `registerProviderDefinition({ id: 'nighthawk', ...rest });`,
      ].join('\n'),
      'fixture.ts',
    );
    expect(hits).toEqual([]);
  });

  it('finds no vendor-name gates in src/ outside kosong', () => {
    const hits = walk(SRC_ROOT).flatMap((file) =>
      findVendorGates(readFileSync(file, 'utf8'), relative(SRC_ROOT, file)),
    );
    expect(
      hits.map((hit) => `${hit.file}:${hit.line} ${hit.text}`),
      'vendor-name gate found outside kosong — ask the provider-definition / adapter registries instead',
    ).toEqual([]);
  });
});
