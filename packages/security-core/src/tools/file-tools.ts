import fs from 'node:fs';
import path from 'node:path';
import type { Tool } from '../core/types.js';
import { SKIP_DIRS } from './registry.js';

export const readFileTool: Tool = {
  definition: {
    name: 'read_file', description: 'Read file content with optional line range and line numbers.',
    parameters: { type: 'object', properties: {
      path: { type: 'string', description: 'File path' },
      start_line: { type: 'number', description: 'Start line (1-based, optional)' },
      end_line: { type: 'number', description: 'End line (optional)' },
      show_line_numbers: { type: 'boolean', description: 'Show line numbers (default: true)' },
    }, required: ['path'] },
  },
  async run(args) {
    const p = args.path as string; const abs = path.resolve(p);
    if (!fs.existsSync(abs)) return `Error: File not found: ${p}`;
    if (fs.statSync(abs).size > 1_000_000) return `Error: File too large (>1MB). Use start_line/end_line.`;
    const lines = fs.readFileSync(abs, 'utf-8').split('\n');
    const start = Math.max(1, (args.start_line as number) || 1);
    const end = Math.min(lines.length, (args.end_line as number) || lines.length);
    const showNums = args.show_line_numbers !== false;
    const selected = lines.slice(start - 1, end);
    const maxLen = String(end).length;
    return selected.map((l, i) => showNums ? `${String(start + i).padStart(maxLen)} │ ${l}` : l).join('\n');
  },
};

export const writeFileTool: Tool = {
  definition: {
    name: 'write_file', description: 'Write content to a file (create or overwrite). Creates backup.',
    parameters: { type: 'object', properties: {
      path: { type: 'string' }, content: { type: 'string' }, mode: { type: 'string', enum: ['overwrite', 'append'] },
    }, required: ['path', 'content'] },
  },
  async run(args) {
    const p = path.resolve(args.path as string);
    const mode = args.mode === 'append' ? 'a' : 'w';
    if (mode === 'w' && fs.existsSync(p)) fs.copyFileSync(p, p + '.bak.' + Date.now());
    fs.mkdirSync(path.dirname(p), { recursive: true });
    fs.writeFileSync(p, args.content as string, { flag: mode, encoding: 'utf-8' });
    return `OK: ${args.mode === 'append' ? 'Appended to' : 'Wrote'} ${p}`;
  },
};

export const listFilesTool: Tool = {
  definition: {
    name: 'list_files', description: 'List files recursively with optional glob pattern and depth limit.',
    parameters: { type: 'object', properties: {
      path: { type: 'string', description: 'Directory path (default: .)' },
      pattern: { type: 'string', description: 'Glob pattern filter (e.g. *.py)' },
      max_depth: { type: 'number', description: 'Max depth (default: 5)' },
    } },
  },
  async run(args) {
    const root = path.resolve((args.path as string) || '.');
    const maxDepth = (args.max_depth as number) || 5;
    const pattern = args.pattern as string | undefined;
    const results: string[] = [];
    function walk(dir: string, depth: number) {
      if (depth > maxDepth) return;
      try { for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        if (SKIP_DIRS.has(e.name) || e.name.startsWith('.')) continue;
        const full = path.join(dir, e.name);
        if (e.isDirectory()) { results.push(`${full}/`); walk(full, depth + 1); }
        else if (!pattern || minimatch(e.name, pattern)) results.push(full);
      }} catch {}
    }
    walk(root, 0);
    return results.length ? results.join('\n') : 'No files found.';
  },
};

export const searchCodeTool: Tool = {
  definition: {
    name: 'search_code', description: 'Search code with regex across files.',
    parameters: { type: 'object', properties: {
      pattern: { type: 'string', description: 'Regex pattern' },
      path: { type: 'string', description: 'Search directory (default: .)' },
      include: { type: 'string', description: 'File glob filter (e.g. *.py)' },
    }, required: ['pattern'] },
  },
  async run(args) {
    const root = path.resolve((args.path as string) || '.');
    const re = new RegExp(args.pattern as string, 'gi');
    const include = args.include as string | undefined;
    const results: string[] = []; let totalMatches = 0;
    function walk(dir: string) {
      try { for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        if (SKIP_DIRS.has(e.name) || e.name.startsWith('.')) continue;
        const full = path.join(dir, e.name);
        if (e.isDirectory()) { walk(full); continue; }
        if (include && !minimatch(e.name, include)) continue;
        try {
          const content = fs.readFileSync(full, 'utf-8');
          const lines = content.split('\n');
          const fileMatches: string[] = [];
          lines.forEach((line, i) => { if (re.test(line)) { re.lastIndex = 0; fileMatches.push(`  ${i + 1}: ${line.trim()}`); totalMatches++; } });
          if (fileMatches.length) results.push(`${full}:\n${fileMatches.join('\n')}`);
        } catch {}
      }} catch {}
    }
    walk(root);
    return results.length ? `${totalMatches} matches in ${results.length} files:\n${results.join('\n\n')}` : 'No matches found.';
  },
};

function minimatch(name: string, pattern: string): boolean {
  const re = new RegExp('^' + pattern.replace(/\*/g, '.*').replace(/\?/g, '.') + '$');
  return re.test(name);
}

export const fileTools = [readFileTool, writeFileTool, listFilesTool, searchCodeTool];
