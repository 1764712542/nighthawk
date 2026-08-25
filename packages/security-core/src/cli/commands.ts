// ═══════════════════════════════════════════════════════════════════
// 斜杠命令系统 — 注册 + 分发
// ═══════════════════════════════════════════════════════════════════
import fs from 'node:fs';
import type { SlashCommand } from '@nighthawk/pi-tui';
import type { AppConfig } from '../core/types.js';
import type { LLMClient } from '../core/llm/client.js';
import type { AgentLoop } from '../core/agent/loop.js';
import type { ToolRegistry } from '../tools/registry.js';
import type { SessionStore } from '../core/session/store.js';
import type { ScaShell } from '../ui/shell.js';
import { currentTheme } from '../ui/theme.js';
import { COMMAND_HELP, t } from '../ui/i18n.js';
import { runScan, formatScanReport } from '../security/scanner.js';
import { scanSecrets } from '../security/secrets.js';
import { RULE_STATS } from '../security/rules.js';
import { getProviderConfig } from '../config/index.js';

export const VERSION = '0.2.0';

export interface CommandContext {
  config: AppConfig;
  loop: AgentLoop;
  llm: LLMClient;
  registry: ToolRegistry;
  store: SessionStore;
  shell: ScaShell;
  rebuildAgent: () => void; // provider/model 切换后重建 LLM
  exit: () => void;
}

export function buildSlashCommands(): SlashCommand[] {
  return Object.entries(COMMAND_HELP).map(([name, desc]) => ({
    name: name.slice(1),
    description: desc.zh,
  }));
}

function parseFlags(rest: string[]): { flags: Record<string, string>; positional: string[] } {
  const flags: Record<string, string> = {};
  const positional: string[] = [];
  for (let i = 0; i < rest.length; i++) {
    if (rest[i].startsWith('--')) {
      const key = rest[i].slice(2);
      if (i + 1 < rest.length && !rest[i + 1].startsWith('--')) { flags[key] = rest[++i]; }
      else flags[key] = 'true';
    } else positional.push(rest[i]);
  }
  return { flags, positional };
}

export async function dispatchCommand(input: string, ctx: CommandContext): Promise<boolean> {
  const trimmed = input.trim();
  if (!trimmed.startsWith('/')) return false;

  const parts = trimmed.slice(1).split(/\s+/);
  const cmd = parts[0].toLowerCase();
  const args = parts.slice(1);
  const { flags, positional } = parseFlags(args);
  const zh = ctx.config.lang === 'zh';
  const { shell, config } = ctx;

  switch (cmd) {
    case 'help': {
      shell.printMarkdown(Object.entries(COMMAND_HELP).map(([c, d]) => `- \`${c}\` — ${zh ? d.zh : d.en}`).join('\n'));
      return true;
    }
    case 'scan': {
      shell.showLoader(zh ? '安全扫描中' : 'Scanning');
      const report = await runScan({
        root: positional[0] || '.',
        minSeverity: (flags.sev || 'low') as any,
        categories: flags.cat ? flags.cat.split(',') : undefined,
        include: flags.include,
      });
      shell.hideLoader();
      shell.printMarkdown(formatScanReport(report, config.lang));
      return true;
    }
    case 'secrets': {
      shell.showLoader(zh ? '密钥扫描中' : 'Scanning secrets');
      const findings = scanSecrets(positional[0] || '.', flags.include);
      shell.hideLoader();
      shell.printMarkdown(findings.length
        ? `发现 ${findings.length} 个疑似密钥：\n\n` + findings.slice(0, 30).map(f =>
          `- ${f.confidence === 'high' ? '🔴' : '🟡'} **${f.type}** \`${f.file}:${f.line}\` (entropy=${f.entropy})`
        ).join('\n')
        : (zh ? '未发现硬编码密钥 ✅' : 'No secrets found ✅'));
      return true;
    }
    case 'audit': {
      shell.showLoader(zh ? '依赖审计中' : 'Auditing dependencies');
      const depAudit = ctx.registry.get('dep_audit');
      const result = await depAudit!.run({ path: positional[0] || '.' });
      shell.hideLoader();
      shell.printMarkdown('```\n' + result.slice(0, 4000) + '\n```');
      return true;
    }
    case 'rules': {
      const s = RULE_STATS;
      shell.printMarkdown(
        `### ${zh ? '安全规则库' : 'Security Rules'} — ${s.total} total\n\n` +
        Object.entries(s.byCategory).map(([k, n]) => `- \`${k}\`: ${n}`).join('\n') +
        `\n\n**${zh ? '按严重度' : 'By severity'}**: ` +
        Object.entries(s.bySeverity).map(([k, n]) => `${k}: ${n}`).join(' · ')
      );
      return true;
    }
    case 'model': {
      const m = positional[0];
      if (m) {
        ctx.llm.setModel(m); config.model = m;
        shell.print(`✓ ${zh ? '模型已切换' : 'Model switched'}: ${m}`);
      } else shell.print(`model: ${config.model}`);
      return true;
    }
    case 'provider': {
      const p = positional[0] as AppConfig['providerType'];
      if (p && ['openai_compatible', 'anthropic', 'nighthawk', 'google'].includes(p)) {
        config.providerType = p;
        ctx.rebuildAgent();
        shell.print(`✓ ${zh ? 'Provider 已切换' : 'Provider switched'}: ${p} (${getProviderConfig(config).model})`);
      } else shell.print(`provider: ${config.providerType}`);
      return true;
    }
    case 'mode': {
      const m = positional[0] as AppConfig['permissionMode'];
      if (m && ['manual', 'auto', 'yolo'].includes(m)) {
        config.permissionMode = m; config.yoloMode = m === 'yolo';
        ctx.rebuildAgent();
        shell.print(`✓ ${zh ? '权限模式' : 'Permission mode'}: ${m}`);
      } else shell.print(`mode: ${config.permissionMode} (manual | auto | yolo)`);
      return true;
    }
    case 'lang': {
      config.lang = config.lang === 'zh' ? 'en' : 'zh';
      shell.print(t(config.lang, 'langSwitched'));
      return true;
    }
    case 'theme': {
      const th = positional[0];
      if (th && currentTheme.set(th)) {
        config.theme = th;
        shell.print(`✓ ${zh ? '主题已切换' : 'Theme switched'}: ${th}`);
      } else shell.print(`theme: ${currentTheme.name} (eva | dark | default)`);
      return true;
    }
    case 'sessions': {
      const { listSessions } = await import('../core/session/store.js');
      const list = listSessions();
      shell.printMarkdown(list.length
        ? list.slice(0, 15).map(s => `- \`${s.id}\` ${s.title} — ${new Date(s.updatedAt).toLocaleString('zh-CN')} (${s.turns} turns)`).join('\n')
        : (zh ? '暂无历史会话' : 'No saved sessions'));
      return true;
    }
    case 'save': {
      ctx.store.checkpoint(999, ctx.loop.messages);
      shell.print(`✓ ${zh ? '会话已保存' : 'Session saved'}: ${ctx.store.id}`);
      return true;
    }
    case 'load': {
      const { loadSession } = await import('../core/session/store.js');
      const s = positional[0] ? loadSession(positional[0]) : null;
      if (!s) { shell.print(zh ? '未找到该会话' : 'Session not found'); return true; }
      const last = s.checkpoints[s.checkpoints.length - 1];
      if (last) ctx.loop.messages = last.messages;
      shell.print(`✓ ${zh ? '已恢复' : 'Restored'} ${s.title} (${s.checkpoints.length} checkpoints) — ${zh ? '输入 continue 继续' : 'type continue to resume'}`);
      return true;
    }
    case 'compact': {
      const dropped = ctx.loop.compact();
      shell.print(`✓ ${zh ? '上下文已压缩' : 'Compacted'} (${dropped} messages)`);
      return true;
    }
    case 'undo': {
      const n = ctx.loop.undoLast();
      shell.print(n ? `↩ ${zh ? '已回滚' : 'Restored'} ${n} ${zh ? '个文件' : 'files'}` : (zh ? '无可回滚的修改' : 'Nothing to undo'));
      return true;
    }
    case 'status': {
      const u = ctx.llm.tokenUsage;
      shell.printMarkdown(
        `### ${zh ? '状态' : 'Status'}\n` +
        `- model: \`${config.model}\` (${config.providerType})\n` +
        `- mode: ${config.permissionMode} | lang: ${config.lang} | theme: ${currentTheme.name}\n` +
        `- ${zh ? '规则' : 'rules'}: ${RULE_STATS.total} | tools: ${ctx.registry.listNames().length}\n` +
        `- ${zh ? '消息' : 'messages'}: ${ctx.loop.messages.length} | checkpoints: ${ctx.store.checkpoints.length}\n` +
        `- tokens: ${u.totalTokens} (prompt ${u.promptTokens} / completion ${u.completionTokens} / ${u.requests} reqs)`
      );
      return true;
    }
    case 'clear': {
      ctx.loop.clear();
      shell.print(`✓ ${zh ? '上下文已清空' : 'Context cleared'}`);
      return true;
    }
    case 'export': {
      const md = ctx.store.exportMarkdown();
      const file = `sca-session-${ctx.store.id}.md`;
      fs.writeFileSync(file, md);
      shell.print(`✓ ${zh ? '已导出' : 'Exported'}: ${file}`);
      return true;
    }
    case 'version': {
      shell.print(`Security Coding Agent v${VERSION} — NightHawk superset (${RULE_STATS.total} rules, ${ctx.registry.listNames().length} tools)`);
      return true;
    }
    case 'quit': case 'exit': {
      ctx.exit();
      return true;
    }
    default: {
      shell.print(zh ? `未知命令 /${cmd}，输入 /help 查看` : `Unknown command /${cmd}`);
      return true;
    }
  }
}
