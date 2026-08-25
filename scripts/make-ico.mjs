// Pack PNG files into a multi-size .ico (PNG-embedded entries).
// Usage: node scripts/make-ico.mjs <out.ico> <16.png> <32.png> ...
import { readFileSync, writeFileSync } from 'node:fs';

const [out, ...inputs] = process.argv.slice(2);
if (inputs.length === 0) {
  console.error('usage: node make-ico.mjs <out.ico> <png...>');
  process.exit(1);
}

const images = inputs.map((p) => readFileSync(p));
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(images.length, 4);

const entries = [];
let offset = 6 + 16 * images.length;
images.forEach((data, i) => {
  // Size is read from the PNG IHDR chunk (bytes 16..23).
  const width = data.readUInt32BE(16);
  const height = data.readUInt32BE(20);
  const entry = Buffer.alloc(16);
  entry.writeUInt8(width >= 256 ? 0 : width, 0);
  entry.writeUInt8(height >= 256 ? 0 : height, 1);
  entry.writeUInt8(0, 2); // colors
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // planes
  entry.writeUInt16LE(32, 6); // bpp
  entry.writeUInt32LE(data.length, 8);
  entry.writeUInt32LE(offset, 12);
  entries.push(entry);
  offset += data.length;
  console.log(`entry ${i}: ${width}x${height}, ${data.length} bytes`);
});

writeFileSync(out, Buffer.concat([header, ...entries, ...images]));
console.log(`wrote ${out}`);
