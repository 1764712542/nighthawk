import type { McpServerAcpConfig, McpServerConfig } from './config-schema';

export type McpServerConfigView =
  | (Omit<Extract<McpServerConfig, { readonly transport: 'stdio' }>, 'env'> & {
      readonly envKeys?: readonly string[];
    })
  | (Omit<Extract<McpServerConfig, { readonly transport: 'http' | 'sse' }>, 'headers'> & {
      readonly headerKeys?: readonly string[];
    })
  | McpServerAcpConfig;

/** Project a full effective config into its wire-facing view. */
export function toMcpServerConfigView(config: McpServerConfig): McpServerConfigView {
  if (config.transport === 'stdio') {
    const { env, ...safe } = config;
    return env === undefined ? safe : { ...safe, envKeys: Object.keys(env).toSorted() };
  }
  if (config.transport === 'acp') {
    const { ...safe } = config;
    return safe;
  }
  const { headers, ...safe } = config;
  return headers === undefined ? safe : { ...safe, headerKeys: Object.keys(headers).toSorted() };
}
