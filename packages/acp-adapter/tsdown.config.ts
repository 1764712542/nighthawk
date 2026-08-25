import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['./src/index.ts'],
  format: ['esm'],
  dts: true,
  outDir: 'dist',
  clean: true,
  deps: {
    neverBundle: [
      '@agentclientprotocol/sdk',
      '@nighthawk/agent-core',
      '@nighthawk/nighthawk-sdk',
      '@nighthawk/kosong',
      '@nighthawk/kaos',
    ],
  },
});
