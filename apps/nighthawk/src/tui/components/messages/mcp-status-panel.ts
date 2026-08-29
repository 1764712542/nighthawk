import type { McpServerInfo } from '@nighthawk/nighthawk-sdk';

import { currentTheme } from '#/tui/theme';

export interface McpStatusReportOptions {
  readonly servers: readonly McpServerInfo[];
}

const STATUS_PRIORITY: Record<McpServerInfo['status'], number> = {
  failed: 0,
  'needs-auth': 1,
  pending: 2,
  connected: 3,
  disabled: 4,
  removed: 5,
};

const STATUS_LABEL: Record<McpServerInfo['status'], string> = {
  connected: '已连接',
  pending: '连接中',
  'needs-auth': '需要认证',
  failed: '失败',
  disabled: '已禁用',
  removed: '已移除',
};

const SUMMARY_ORDER: readonly McpServerInfo['status'][] = [
  'connected',
  'pending',
  'needs-auth',
  'failed',
  'disabled',
  'removed',
];

function statusPainter(
  status: McpServerInfo['status'],
): (text: string) => string {
  switch (status) {
    case 'connected':
      return (text) => currentTheme.fg('success', text);
    case 'failed':
      return (text) => currentTheme.fg('error', text);
    case 'needs-auth':
    case 'pending':
      return (text) => currentTheme.fg('warning', text);
    case 'disabled':
    case 'removed':
      return (text) => currentTheme.fg('textDim', text);
  }
}

function formatToolCount(server: McpServerInfo): string {
  if (server.status === 'disabled' || server.status === 'removed') return '—';
  return `${server.toolCount} 个工具`;
}

function formatToolsAvailable(count: number): string {
  return `${count} 个工具可用`;
}

/**
 * Collapse a (possibly multi-line) MCP error into a single line. The status
 * panel renders each returned string as exactly one boxed row (see
 * `UsagePanelComponent.render`), so an embedded newline — e.g. the
 * `\nstderr: ...` a failed stdio server appends — would drop the trailing
 * text to column 0 and punch through the rounded border. Folding every run
 * of whitespace to a single space keeps the error on one row, which the
 * panel then truncates to the available width.
 */
function formatErrorLine(error: string): string {
  return error.trim().replaceAll(/\s+/g, ' ');
}

function sortedServers(servers: readonly McpServerInfo[]): McpServerInfo[] {
  return servers.toSorted(
    (a, b) =>
      STATUS_PRIORITY[a.status] - STATUS_PRIORITY[b.status] || a.name.localeCompare(b.name),
  );
}

function buildSummary(servers: readonly McpServerInfo[]): string {
  const counts: Partial<Record<McpServerInfo['status'], number>> = {};
  let toolsAvailable = 0;
  for (const server of servers) {
    counts[server.status] = (counts[server.status] ?? 0) + 1;
    if (server.status === 'connected') toolsAvailable += server.toolCount;
  }
  const parts: string[] = [];
  for (const status of SUMMARY_ORDER) {
    const n = counts[status];
    if (n === undefined || n === 0) continue;
    parts.push(`${n} ${STATUS_LABEL[status]}`);
  }
  parts.push(formatToolsAvailable(toolsAvailable));
  return parts.join(' · ');
}

export function buildMcpStatusReportLines(options: McpStatusReportOptions): string[] {
  const servers = sortedServers(options.servers);
  const accent = (text: string) => currentTheme.boldFg('primary', text);
  const muted = (text: string) => currentTheme.fg('textDim', text);
  const value = (text: string) => currentTheme.fg('text', text);
  const error = (text: string) => currentTheme.fg('error', text);

  const lines: string[] = [accent('服务器')];

  if (servers.length === 0) {
    lines.push(muted('  未配置 MCP 服务器。运行 /mcp-config 添加一个。'));
    return lines;
  }

  const nameWidth = Math.max('名称'.length, ...servers.map((server) => server.name.length));
  const statusWidth = Math.max(
    '状态'.length,
    ...servers.map((server) => STATUS_LABEL[server.status].length),
  );
  const transportWidth = Math.max(
    '传输'.length,
    ...servers.map((server) => server.transport.length),
  );

  lines.push(
    `  ${muted('名称'.padEnd(nameWidth))}  ${muted('状态'.padEnd(statusWidth))}  ${muted(
      '传输'.padEnd(transportWidth),
    )}  ${muted('工具')}`,
  );

  for (const server of servers) {
    const status = statusPainter(
      server.status,
    )(STATUS_LABEL[server.status].padEnd(statusWidth));
    lines.push(
      `  ${value(server.name.padEnd(nameWidth))}  ${status}  ${muted(
        server.transport.padEnd(transportWidth),
      )}  ${value(formatToolCount(server))}`,
    );

    if (
      server.status === 'failed' &&
      server.error !== undefined &&
      server.error.trim().length > 0
    ) {
      lines.push(`    ${muted('错误：')} ${error(formatErrorLine(server.error))}`);
    }
    if (server.status === 'needs-auth') {
      lines.push(`    ${muted('操作：')} ${value(`运行 /mcp-config login ${server.name}`)}`);
    }
  }

  lines.push('');
  lines.push(`  ${value(buildSummary(servers))}`);
  lines.push(`  ${muted('通过以下方式配置')} ${value('/mcp-config')}`);

  return lines;
}
