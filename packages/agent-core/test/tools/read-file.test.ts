import type { Kaos } from '@nighthawk/kaos';
import { describe, expect, it, vi } from 'vitest';

import { normalizeReadInput, ReadTool } from '../../src/tools/builtin/file/read';
import { createFakeKaos, PERMISSIVE_WORKSPACE } from './fixtures/fake-kaos';
import { executeTool } from './fixtures/execute-tool';

const signal = new AbortController().signal;
const REGULAR_FILE_STAT = {
  stMode: 0o100_644,
  stIno: 1,
  stDev: 1,
  stNlink: 1,
  stUid: 1000,
  stGid: 1000,
  stSize: 0,
  stAtime: 0,
  stMtime: 0,
  stCtime: 0,
} satisfies Awaited<ReturnType<Kaos['stat']>>;

function linesFromContent(content: string): string[] {
  if (content === '') return [];
  const rawLines = content.split('\n');
  return rawLines.flatMap((line, index) => {
    if (index < rawLines.length - 1) return [`${line}\n`];
    return line === '' ? [] : [line];
  });
}

function readLinesFromContent(content: string): Kaos['readLines'] {
  return async function* readLines(): AsyncGenerator<string> {
    for (const line of linesFromContent(content)) {
      yield line;
    }
  };
}

function toolWithContent(content: string): ReadTool {
  const bytes = Buffer.from(content, 'utf8');
  return new ReadTool(
    createFakeKaos({
      stat: vi.fn<Kaos['stat']>().mockResolvedValue(REGULAR_FILE_STAT),
      readBytes: vi.fn<Kaos['readBytes']>().mockImplementation(async (_path, n) => {
        return n === undefined ? bytes : bytes.subarray(0, n);
      }),
      readLines: vi.fn<Kaos['readLines']>().mockImplementation(readLinesFromContent(content)),
    }),
    PERMISSIVE_WORKSPACE,
  );
}

describe('ReadTool — total-lines message channel', () => {
  it('reports the file total in the status message even with a positive line_offset window', async () => {
    // Five-line file, request just line 3 with n_lines=1. The status
    // line must still surface the file's full length so the model can plan
    // a follow-up read of the rest of the file.
    const tool = toolWithContent('a\nb\nc\nd\ne');

    const result = await executeTool(tool, {
      turnId: 't1',
      toolCallId: 'c1',
      args: { path: '/tmp/sample.txt', line_offset: 3, n_lines: 1 },
      signal,
    });

    expect(result.isError).toBeFalsy();
    expect(result.output).toContain('3\tc');
    expect(result.note).toContain('Total lines in file: 5.');
  });
});

describe('normalizeReadInput', () => {
  it('maps alias keys onto canonical schema fields', () => {
    expect(normalizeReadInput({ path: 'a.txt', offset: 5, count: '10' })).toEqual({
      path: 'a.txt',
      line_offset: 5,
      n_lines: 10,
    });
    expect(normalizeReadInput({ path: 'a.txt', start_line: '3', limit: 20 })).toEqual({
      path: 'a.txt',
      line_offset: 3,
      n_lines: 20,
    });
  });

  it('coerces numeric strings for canonical keys', () => {
    expect(normalizeReadInput({ path: 'a.txt', line_offset: '-7', n_lines: '100' })).toEqual({
      path: 'a.txt',
      line_offset: -7,
      n_lines: 100,
    });
  });

  it('keeps canonical values when both canonical and alias keys exist', () => {
    expect(normalizeReadInput({ path: 'a.txt', line_offset: 2, offset: 99 })).toEqual({
      path: 'a.txt',
      line_offset: 2,
    });
  });

  it('preserves uncoercible values so schema validation reports them', () => {
    expect(normalizeReadInput({ path: 'a.txt', line_offset: 'abc' })).toEqual({
      path: 'a.txt',
      line_offset: 'abc',
    });
    expect(normalizeReadInput({ path: 'a.txt', n_lines: 3.5 })).toEqual({
      path: 'a.txt',
      n_lines: 3.5,
    });
  });

  it('drops null values and unknown keys', () => {
    expect(normalizeReadInput({ path: 'a.txt', offset: null, extra: true })).toEqual({
      path: 'a.txt',
    });
  });

  it('passes through non-object args untouched', () => {
    expect(normalizeReadInput('oops')).toBe('oops');
    expect(normalizeReadInput(null)).toBe(null);
    expect(normalizeReadInput([1, 2])).toEqual([1, 2]);
  });
});
