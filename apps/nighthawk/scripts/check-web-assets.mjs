import { access, stat } from 'node:fs/promises';
import { resolve } from 'node:path';

const distWeb = resolve(import.meta.dirname, '..', 'dist-web');
const entry = resolve(distWeb, 'index.html');

try {
  const info = await stat(entry);
  if (!info.isFile() || info.size === 0) {
    throw new Error('index.html is empty');
  }
  await access(resolve(distWeb, 'boot.js'));
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`Web assets are missing or invalid at ${distWeb}: ${message}`);
  process.exit(1);
}

console.log(`Web assets are present at ${distWeb}`);
