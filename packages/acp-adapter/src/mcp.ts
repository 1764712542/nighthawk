/**
 * ACP → nighthawk MCP server conversion.
 *
 * Translates ACP `McpServer[]` (per the ACP schema discriminated by
 * `type: 'http' | 'sse' | 'acp' | 'stdio'`) into nighthawk's
 * keyed `Record<string, McpServerConfig>` (the same shape the kernel's
 * `loadMcpServers` returns and what
 * `CreateSessionPayload.mcpServers` / `ResumeSessionPayload.mcpServers`
 * accept). The conversion is intentionally narrow:
 *
 *  - `http`  → nighthawk `transport: 'http'` with headers projected from
 *              `Array<{name, value}>` to `Record<string, string>`.
 *  - `sse`   → nighthawk `transport: 'sse'` with headers projected the same way.
 *  - `stdio` → nighthawk `transport: 'stdio'` with env projected similarly.
 *  - `acp`   → nighthawk `transport: 'acp'` with `serverId` projected from the
 *              ACP MCP server's `id` field (the v0.23.0 SDK names it `id`; the
 *              v1.3.0 SDK renamed it to `serverId` — the engine's
 *              `McpServerAcpConfig` normalises both to `serverId`).
 *
 * The kernel keys MCP servers by name at the config-map level, so the
 * ACP `name` field becomes the Record key here. Duplicate names within a
 * single ACP request collapse with last-write-wins — same behaviour as
 * the kernel's own `loadMcpServers` user/project merge.
 *
 * @see packages/agent-core/src/config/schema.ts (McpServerConfigSchema)
 * @see packages/agent-core/src/mcp/session-config.ts (mergeCallerMcpServers)
 * @see node_modules/@agentclientprotocol/sdk/dist/schema/types.gen.d.ts (McpServer)
 */

import type { McpServer, McpServerStdio } from '@agentclientprotocol/sdk';
import type { McpServerConfig } from '@nighthawk/agent-core';
import { log } from '@nighthawk/nighthawk-sdk';

/**
 * Convert an ACP `McpServer[]` into the kernel-native
 * `Record<string, McpServerConfig>` keyed by server name. All current
 * ACP transport types (`http`, `sse`, `stdio`, `acp`) are supported.
 *
 * Caveat (ACP schema 0.23): the `McpServer` union types stdio as a
 * bare branch WITHOUT a discriminator. Members marked `http`, `sse`,
 * `acp` carry an explicit `type` field; stdio is identified by the
 * ABSENCE of `type`. We branch accordingly.
 */
export function acpMcpServersToConfigs(
  servers: readonly McpServer[] | undefined,
): Record<string, McpServerConfig> {
  if (!servers || servers.length === 0) return {};
  const out: Record<string, McpServerConfig> = {};
  for (const server of servers) {
    const converted = acpMcpServerToConfig(server);
    if (converted !== null) out[converted.name] = converted.config;
  }
  return out;
}

function acpMcpServerToConfig(
  server: McpServer,
): { name: string; config: McpServerConfig } | null {
  // The stdio branch of the `McpServer` union has no `type` field
  // (see ACP schema 0.23 — stdio is the bare `McpServerStdio` shape
  // in the discriminated union). Anything without an explicit `type`
  // is treated as stdio.
  if (!('type' in server) || typeof server.type !== 'string') {
    const stdio = server as McpServerStdio;
    const config: McpServerConfig = {
      transport: 'stdio',
      command: stdio.command,
      args: stdio.args,
      env: envArrayToRecord(stdio.env),
    };
    return { name: stdio.name, config };
  }
  switch (server.type) {
    case 'http': {
      const config: McpServerConfig = {
        transport: 'http',
        url: server.url,
        headers: headersArrayToRecord(server.headers),
      };
      return { name: server.name, config };
    }
    case 'sse': {
      const config: McpServerConfig = {
        transport: 'sse',
        url: server.url,
        headers: headersArrayToRecord(server.headers),
      };
      return { name: server.name, config };
    }
    case 'acp': {
      const config: McpServerConfig = {
        transport: 'acp',
        serverId: (server as { id: string }).id,
      };
      return { name: server.name, config };
    }
    default: {
      // Defensive: future ACP transports land here too. The cast is the
      // narrowest way to read `name`/`type` off the leftover variant
      // without re-declaring the union.
      const fallback = server as { name?: string; type?: string };
      log.warn('acp: dropping unsupported MCP server transport', {
        name: fallback.name,
        type: fallback.type,
      });
      return null;
    }
  }
}

function headersArrayToRecord(
  headers: ReadonlyArray<{ readonly name: string; readonly value: string }>,
): Record<string, string> {
  const out: Record<string, string> = {};
  for (const h of headers) out[h.name] = h.value;
  return out;
}

function envArrayToRecord(
  env: ReadonlyArray<{ readonly name: string; readonly value: string }>,
): Record<string, string> {
  const out: Record<string, string> = {};
  for (const e of env) out[e.name] = e.value;
  return out;
}
