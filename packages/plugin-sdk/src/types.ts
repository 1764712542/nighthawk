/**
 * @nighthawk/plugin-sdk — TypeScript types and utilities for NightHawk plugin developers.
 *
 * ## Usage
 *
 * ```ts
 * import type { PluginManifest } from '@nighthawk/plugin-sdk';
 *
 * const manifest: PluginManifest = {
 *   name: 'my-plugin',
 *   version: '1.0.0',
 *   description: 'My plugin',
 *   skills: './skills',
 * };
 * ```
 *
 * @module
 */

/** Severity of a plugin diagnostic message. */
export type PluginDiagnosticSeverity = 'error' | 'warn' | 'info';

/** A diagnostic message about a plugin. */
export interface PluginDiagnostic {
  readonly severity: PluginDiagnosticSeverity;
  readonly message: string;
}

/** Author information for a plugin. */
export interface PluginAuthor {
  readonly name?: string;
  readonly email?: string;
}

/** Session start skill configuration. */
export interface PluginSessionStart {
  readonly skill: string;
}

/** Display interface for a plugin (used in the marketplace / UI). */
export interface PluginInterface {
  readonly displayName?: string;
  readonly shortDescription?: string;
  readonly longDescription?: string;
  readonly developerName?: string;
  readonly websiteURL?: string;
}

/** A single plugin-declared command file entry. */
export interface PluginCommandEntry {
  readonly path: string;
  readonly name: string;
}

/** The `nighthawk.plugin.json` manifest schema. */
export interface PluginManifest {
  /** Plugin identifier — must match `/^[a-z0-9][a-z0-9_-]{0,63}$/`. */
  readonly name: string;
  /** Semantic version of the plugin. */
  readonly version?: string;
  /** Short description of what the plugin does. */
  readonly description?: string;
  /** Search keywords for the marketplace. */
  readonly keywords?: readonly string[];
  /** Author information. */
  readonly author?: PluginAuthor;
  /** Project homepage URL. */
  readonly homepage?: string;
  /** License identifier (e.g. "MIT"). */
  readonly license?: string;
  /** Directory path containing skill files. */
  readonly skills?: string;
  /** Directory path containing agent profile files. */
  readonly agents?: string;
  /** Session start skill configuration. */
  readonly sessionStart?: PluginSessionStart;
  /** MCP server configurations. */
  readonly mcpServers?: Readonly<Record<string, McpServerConfig>>;
  /** Event hook definitions. */
  readonly hooks?: readonly HookDefConfig[];
  /** Directory or file path for slash command definitions. */
  readonly commands?: string | PluginCommandEntry[];
  /** Display metadata for the marketplace UI. */
  readonly interface?: PluginInterface;
  /** Additional instructions appended to all plugin skills. */
  readonly skillInstructions?: string;
  /** Inline system prompt contributed by the plugin. */
  readonly systemPrompt?: string;
  /** Path to a system prompt file (relative to plugin root). */
  readonly systemPromptPath?: string;
  /** Directory path containing tool definition files. */
  readonly tools?: string;
  /** Directory path containing agent profile files. */
  readonly profiles?: string;
  /** Directory path containing config section definition files. */
  readonly configSections?: string;
}

/** MCP server transport type. */
export type McpTransport = 'stdio' | 'http' | 'sse' | 'acp';

/** Common fields shared by all MCP server configs. */
interface McpServerCommonFields {
  readonly enabled?: boolean;
  readonly description?: string;
}

/** STDIO-based MCP server configuration. */
export interface McpServerStdioConfig extends McpServerCommonFields {
  readonly transport: 'stdio';
  readonly command: string;
  readonly args?: readonly string[];
  readonly cwd?: string;
  readonly env?: Record<string, string>;
  readonly envPassthrough?: Record<string, string>;
}

/** HTTP-based MCP server configuration. */
export interface McpServerHttpConfig extends McpServerCommonFields {
  readonly transport: 'http';
  readonly url: string;
  readonly headers?: Record<string, string>;
}

/** SSE-based MCP server configuration. */
export interface McpServerSseConfig extends McpServerCommonFields {
  readonly transport: 'sse';
  readonly url: string;
  readonly headers?: Record<string, string>;
}

/** ACP-based MCP server configuration. */
export interface McpServerAcpConfig extends McpServerCommonFields {
  readonly transport: 'acp';
  readonly serverId: string;
}

/** MCP server configuration (any transport). */
export type McpServerConfig =
  | McpServerStdioConfig
  | McpServerHttpConfig
  | McpServerSseConfig
  | McpServerAcpConfig;

/** Known event types for plugin hooks. */
export type HookEventType =
  | 'session:start'
  | 'session:end'
  | 'skill:before'
  | 'skill:after'
  | 'tool:before'
  | 'tool:after';

/** A single hook definition. */
export interface HookDefConfig {
  readonly event: HookEventType;
  readonly matcher?: string;
  readonly command: string;
  readonly timeout?: number;
}

/** Which manifest file a plugin was loaded from. */
export type PluginManifestKind =
  | 'nighthawk-plugin-root'
  | 'nighthawk-plugin-dir'
  | 'legacy-plugin-root'
  | 'legacy-plugin-dir'
  | 'generic-plugin-root'
  | 'generic-plugin-dir';

/** How a plugin was installed. */
export type PluginSource = 'local-path' | 'zip-url' | 'github';

/** Plugin state. */
export type PluginState = 'ok' | 'error';

/** Git reference for a GitHub-sourced plugin. */
export interface PluginGithubRef {
  readonly kind: 'branch' | 'tag' | 'sha';
  readonly value: string;
}

/** Metadata for a GitHub-sourced plugin. */
export interface PluginGithubMetadata {
  readonly owner: string;
  readonly repo: string;
  readonly ref: PluginGithubRef;
  readonly installedSha?: string;
}

/** Marketplace entry (the `plugins/marketplace.json` format). */
export interface MarketplacePluginEntry {
  readonly id: string;
  readonly tier: 'official' | 'curated' | 'community';
  readonly displayName: string;
  readonly version?: string;
  readonly description: string;
  readonly keywords?: readonly string[];
  readonly homepage?: string;
  readonly source: string;
}

/** Top-level marketplace file. */
export interface MarketplaceManifest {
  readonly version: string;
  readonly plugins: readonly MarketplacePluginEntry[];
}

/** Regex for validating plugin names. */
export const PLUGIN_NAME_REGEX = /^[a-z0-9][a-z0-9_-]{0,63}$/;

/** Normalize a plugin id to lowercase. */
export function normalizePluginId(name: string): string {
  return name.toLowerCase();
}