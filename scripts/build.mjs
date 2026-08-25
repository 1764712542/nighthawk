// 构建脚本 — esbuild 打包（vendor 包为 TS 源码直接导出，需一并 bundle）
import { build } from 'esbuild';
import { mkdirSync } from 'node:fs';

mkdirSync('dist', { recursive: true });

await build({
  entryPoints: ['src/cli/index.ts'],
  bundle: true,
  platform: 'node',
  format: 'esm',
  target: 'node22',
  outfile: 'dist/cli/index.js',
  banner: { js: '#!/usr/bin/env node' },
  sourcemap: false,
  external: [
    // 原生/可选依赖不打包
    'node-pty', '@mariozechner/clipboard', 'sharp',
    'fsevents',
  ],
  loader: { '.node': 'file' },
});

console.log('✓ built dist/cli/index.js');
