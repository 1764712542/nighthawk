import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@nighthawk/agent-core': fileURLToPath(new URL('../agent-core/src/index.ts', import.meta.url)),
      '@nighthawk/nighthawk-oauth': fileURLToPath(
        new URL('../oauth/src/index.ts', import.meta.url),
      ),
    },
  },
  test: {
    name: 'nighthawk-sdk',
    env: {
      NIGHTHAWK_LOG_LEVEL: 'off',
    },
    include: ['test/**/*.test.ts'],
  },
});
