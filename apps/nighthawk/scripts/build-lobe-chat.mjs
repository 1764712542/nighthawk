#!/usr/bin/env node
/**
 * Build Lobe Chat as SPA and copy to dist-web.
 * Usage: node scripts/build-lobe-chat.mjs
 */
import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const appRoot = resolve(import.meta.dirname, '..');
const distWeb = resolve(appRoot, 'dist-web');
const lobeChatDir = '/tmp/lobe-chat';

async function main() {
  if (!existsSync(lobeChatDir)) {
    console.error('Lobe Chat not found at /tmp/lobe-chat. Clone it first.');
    process.exit(1);
  }

  // Set env vars for Lobe Chat to use NightHawk API
  process.env.OPENAI_API_KEY = 'nighthawk';
  process.env.OPENAI_PROXY_URL = 'http://localhost:3000/v1';
  process.env.NEXT_PUBLIC_OPENAI_API_KEY = 'nighthawk';
  process.env.NEXT_PUBLIC_OPENAI_PROXY_URL = 'http://localhost:3000/v1';

  console.log('Installing Lobe Chat dependencies...');
  const { execSync } = await import('node:child_process');
  execSync('pnpm install --frozen-lockfile=false', { cwd: lobeChatDir, stdio: 'inherit' });

  console.log('Building Lobe Chat SPA...');
  execSync('pnpm run build:spa', { cwd: lobeChatDir, stdio: 'inherit' });

  // Copy built SPA to dist-web
  const spaOut = resolve(lobeChatDir, 'dist-spa');
  if (!existsSync(spaOut)) {
    console.error('SPA build output not found at', spaOut);
    // Try alternative output paths
    const alt = resolve(lobeChatDir, 'out');
    if (existsSync(alt)) {
      await cp(alt, distWeb, { recursive: true, force: true });
      console.log('Copied from', alt, 'to', distWeb);
    }
    process.exit(1);
  }

  await cp(spaOut, distWeb, { recursive: true, force: true });
  console.log('Lobe Chat SPA built and copied to', distWeb);
}

main().catch(console.error);