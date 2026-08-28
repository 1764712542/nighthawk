# @nighthawk/acp-adapter

Agent Client Protocol adapter for nighthawk. Exposes the nighthawk agent over the [Agent Client Protocol](https://agentclientprotocol.com/) so that ACP-compatible clients (editors, IDEs, custom front-ends) can drive a nighthawk session over stdio.

Part of the [NightHawk](https://github.com/AliceGoto/nighthawk) monorepo.

## Minimum usage

```ts
import { createNighthawkHarness } from '@nighthawk/nighthawk-sdk';
import { runAcpServer } from '@nighthawk/acp-adapter';

const harness = await createNighthawkHarness();
await runAcpServer(harness);
```

`runAcpServer` reads JSON-RPC from `process.stdin`, writes to `process.stdout`, and resolves when the client closes the connection. SIGINT and SIGTERM trigger a graceful drain that calls `harness.close()` before the process exits.

See `docs/zh/reference/nighthawk-acp.md` for the full capability matrix (which `Agent` methods are wired, which extensions are stubbed, image / MCP support) and `docs/zh/guides/ides.md` for Zed and JetBrains setup.

## License

MIT
