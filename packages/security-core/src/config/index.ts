import dotenv from 'dotenv';
import fs from 'node:fs';
import path from 'node:path';
import type { AppConfig, ProviderConfig, McpServerConfig, Lang, PermissionMode, ProviderType } from '../core/types.js';

dotenv.config();

export function loadConfig(): AppConfig {
  const home = process.env.HOME || '~';
  const workspace = process.env.SCA_WORKSPACE || '.';
  let trustedDirs: string[] = [];
  try { trustedDirs = JSON.parse(fs.readFileSync(path.join(home, '.sca-trust.json'), 'utf-8')).trustedDirs || []; } catch {}
  let mcpServers: Record<string, McpServerConfig> = {};
  try { mcpServers = JSON.parse(fs.readFileSync(path.join(workspace, '.sca-mcp.json'), 'utf-8')); } catch {}

  return {
    providerType: (process.env.AUDIT_AGENT_PROVIDER as ProviderType) || 'openai_compatible',
    apiKey: process.env.AUDIT_AGENT_API_KEY || '',
    baseUrl: process.env.AUDIT_AGENT_BASE_URL || '',
    model: process.env.AUDIT_AGENT_MODEL || '',
    anthropicApiKey: process.env.ANTHROPIC_API_KEY || '',
    anthropicBaseUrl: process.env.ANTHROPIC_BASE_URL || '',
    workspace, lang: (process.env.SCA_LANG as Lang) || 'en',
    maxTurns: parseInt(process.env.SCA_MAX_TURNS || '40'), maxToolCalls: parseInt(process.env.SCA_MAX_TOOL_CALLS || '50'),
    permissionMode: (process.env.SCA_PERMISSION_MODE as PermissionMode) || 'manual', trustedDirs,
    thinkingEnabled: process.env.SCA_THINKING !== 'false', thinkingEffort: process.env.SCA_THINKING_EFFORT || 'medium',
    theme: process.env.SCA_THEME || 'eva', yoloMode: process.env.SCA_YOLO === 'true', planMode: false, mcpServers,
  };
}

export function getProviderConfig(c: AppConfig): ProviderConfig {
  if (c.providerType === 'anthropic') return { type: 'anthropic', apiKey: c.anthropicApiKey || c.apiKey, baseUrl: c.anthropicBaseUrl, model: c.model || 'claude-3-5-sonnet-20241022' };
  if (c.providerType === 'nighthawk') return { type: 'nighthawk', apiKey: c.apiKey, baseUrl: c.baseUrl || 'https://api.moonshot.cn', model: c.model || 'nighthawk-v1-auto' };
  return { type: 'openai_compatible', apiKey: c.apiKey, baseUrl: c.baseUrl, model: c.model };
}

export function trustDir(dir: string, c: AppConfig): void {
  const r = path.resolve(dir);
  if (!c.trustedDirs.includes(r)) {
    c.trustedDirs.push(r);
    fs.writeFileSync(path.join(process.env.HOME || '~', '.sca-trust.json'), JSON.stringify({ trustedDirs: c.trustedDirs }, null, 2));
  }
}

export function isTrustedDir(dir: string, c: AppConfig): boolean {
  return c.trustedDirs.includes(path.resolve(dir));
}
