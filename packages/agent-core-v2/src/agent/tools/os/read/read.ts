import { z } from 'zod';

import { createDecorator } from '#/_base/di/instantiation';
import { type AgentTool } from '#/tool/toolContract';

export const MAX_LINES: number = 1000;
export const MAX_LINE_LENGTH: number = 2000;
export const MAX_BYTES: number = 100 * 1024;

/**
 * Largest file the Read tool transcodes from UTF-16 in memory. Unlike the
 * streaming UTF-8 path, transcoding needs the whole file decoded at once;
 * 10 MiB mirrors kap-server's `FS_READ_MAX_BYTES`.
 */
export const TRANSCODE_MAX_BYTES: number = 10 * 1024 * 1024;

const PositiveLineOffsetSchema = z.number().int().min(1);
const TailLineOffsetSchema = z.number().int().min(-MAX_LINES).max(-1);

export const ReadInputSchema = z.object({
  path: z
    .string()
    .describe(
      'Path to a text file. Relative paths resolve against the working directory; a path outside the working directory must be absolute. Directories are not supported; use `ls` via Bash for a known directory, or Glob for pattern search.',
    ),
  line_offset: z
    .union([PositiveLineOffsetSchema, TailLineOffsetSchema])
    .optional()
    .describe(
      `The line number to start reading from. Omit to start at line 1. Negative values read from the end of the file; the absolute value cannot exceed ${String(MAX_LINES)}.`,
    ),
  n_lines: z
    .number()
    .int()
    .positive()
    .optional()
    .describe(
      `The number of lines to read; the tool also applies its internal cap. Omit to read up to the internal cap of ${String(MAX_LINES)} lines.`,
    ),
});

export const ReadOutputSchema = z.object({
  content: z.string(),
  lineCount: z.number().int().nonnegative(),
});

export type ReadInput = z.infer<typeof ReadInputSchema>;
export type ReadOutput = z.infer<typeof ReadOutputSchema>;

const LINE_OFFSET_ALIAS_KEYS = ['offset', 'start_line', 'startLine'] as const;
const N_LINES_ALIAS_KEYS = ['count', 'limit', 'max_lines', 'maxLines'] as const;

function coerceInteger(value: unknown): number | undefined {
  if (typeof value === 'number') return Number.isInteger(value) ? value : undefined;
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (/^-?\d+$/.test(trimmed)) return Number.parseInt(trimmed, 10);
  }
  return undefined;
}

function pickDefined(record: Record<string, unknown>, keys: readonly string[]): unknown {
  for (const key of keys) {
    const value = record[key];
    if (value !== undefined && value !== null) return value;
  }
  return undefined;
}

/**
 * Pre-validation normalizer for raw model-supplied Read arguments. Maps
 * Claude-style aliases (`offset`/`start_line` → `line_offset`, `count`/`limit`
 * → `n_lines`) and coerces numeric strings so the strict schema accepts them.
 * Unknown keys and nulls are dropped; uncoercible values are preserved so the
 * schema still reports them.
 */
export function normalizeReadInput(args: unknown): unknown {
  if (typeof args !== 'object' || args === null || Array.isArray(args)) return args;
  const raw = args as Record<string, unknown>;
  const normalized: Record<string, unknown> = {};

  if (raw['path'] !== undefined) normalized['path'] = raw['path'];

  const rawOffset = raw['line_offset'] ?? pickDefined(raw, LINE_OFFSET_ALIAS_KEYS);
  if (rawOffset !== undefined && rawOffset !== null) {
    normalized['line_offset'] = coerceInteger(rawOffset) ?? rawOffset;
  }

  const rawCount = raw['n_lines'] ?? pickDefined(raw, N_LINES_ALIAS_KEYS);
  if (rawCount !== undefined && rawCount !== null) {
    normalized['n_lines'] = coerceInteger(rawCount) ?? rawCount;
  }

  return normalized;
}

export interface IReadTool extends AgentTool<ReadInput> { readonly _serviceBrand: undefined }
export const IReadTool = createDecorator<IReadTool>('readTool');
