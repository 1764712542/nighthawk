// ═══════════════════════════════════════════════════════════════════
// i18n — 中英文界面文案
// ═══════════════════════════════════════════════════════════════════
import type { Lang } from '../core/types.js';

const STRINGS = {
  welcome: { zh: '安全编码智能体已就绪 — 输入 /help 查看命令', en: 'Security Coding Agent ready — type /help for commands' },
  prompt: { zh: '提问', en: 'Ask' },
  thinking: { zh: '思考中', en: 'Thinking' },
  observing: { zh: '观察结果', en: 'Observing' },
  reflecting: { zh: '自我审查', en: 'Reflecting' },
  scanning: { zh: '扫描中', en: 'Scanning' },
  toolRunning: { zh: '执行工具', en: 'Running tool' },
  truncated: { zh: '（输出已截断）', en: '(output truncated)' },
  confirmTool: { zh: '是否执行此命令？', en: 'Execute this command?' },
  yes: { zh: '是 (y)', en: 'Yes (y)' },
  no: { zh: '否 (n)', en: 'No (n)' },
  cancelled: { zh: '已取消', en: 'Cancelled' },
  noApiKey: { zh: '未配置 API Key，请设置 AUDIT_AGENT_API_KEY 环境变量（仍可使用 /scan 等本地命令）', en: 'No API key configured. Set AUDIT_AGENT_API_KEY (local commands like /scan still work)' },
  sessionSaved: { zh: '会话已保存', en: 'Session saved' },
  sessionLoaded: { zh: '会话已加载', en: 'Session loaded' },
  noSessions: { zh: '暂无历史会话', en: 'No saved sessions' },
  cleared: { zh: '上下文已清空', en: 'Context cleared' },
  compacted: { zh: '上下文已压缩', en: 'Context compacted' },
  providerSwitched: { zh: 'Provider 已切换', en: 'Provider switched' },
  modelSwitched: { zh: '模型已切换', en: 'Model switched' },
  modeSwitched: { zh: '权限模式已切换', en: 'Permission mode switched' },
  langSwitched: { zh: '语言已切换 / Language switched', en: 'Language switched / 语言已切换' },
  themeSwitched: { zh: '主题已切换', en: 'Theme switched' },
  unknownCommand: { zh: '未知命令，输入 /help 查看', en: 'Unknown command, type /help' },
  usage: { zh: '用量', en: 'Usage' },
  rules: { zh: '安全规则', en: 'Security rules' },
  scanDone: { zh: '扫描完成', en: 'Scan complete' },
  goodbye: { zh: '再见', en: 'Goodbye' },
  hints: { zh: '提示', en: 'Hints' },
  exitHint: { zh: '/quit 退出 · Ctrl+C 中断 · ↑↓ 历史 · \\ 换行', en: '/quit to exit · Ctrl+C interrupt · ↑↓ history · \\ for newline' },
} as const;

export type StringKey = keyof typeof STRINGS;

export function t(lang: Lang, key: StringKey): string {
  return STRINGS[key][lang];
}

export const COMMAND_HELP: Record<string, { zh: string; en: string }> = {
  '/help': { zh: '显示本帮助', en: 'Show this help' },
  '/scan': { zh: '安全扫描 [路径] [--sev high] [--cat sqli]', en: 'Security scan [path] [--sev high] [--cat sqli]' },
  '/audit': { zh: '依赖漏洞审计', en: 'Dependency audit' },
  '/secrets': { zh: '密钥泄漏扫描', en: 'Secret detection scan' },
  '/rules': { zh: '列出安全规则 [分类]', en: 'List security rules [category]' },
  '/model': { zh: '切换模型', en: 'Switch model' },
  '/provider': { zh: '切换 Provider (openai/anthropic/nighthawk)', en: 'Switch provider' },
  '/mode': { zh: '权限模式 (manual/auto/yolo)', en: 'Permission mode' },
  '/lang': { zh: '切换语言 zh/en', en: 'Switch language' },
  '/theme': { zh: '切换主题 eva/dark/default', en: 'Switch theme' },
  '/sessions': { zh: '列出历史会话', en: 'List sessions' },
  '/save': { zh: '保存当前会话', en: 'Save current session' },
  '/load': { zh: '加载会话 <id>', en: 'Load session <id>' },
  '/compact': { zh: '压缩上下文', en: 'Compact context' },
  '/undo': { zh: '撤销上一轮文件修改', en: 'Undo last file changes' },
  '/status': { zh: '显示状态与用量', en: 'Show status & usage' },
  '/clear': { zh: '清空上下文', en: 'Clear context' },
  '/export': { zh: '导出会话为 Markdown', en: 'Export session as Markdown' },
  '/version': { zh: '版本信息', en: 'Version info' },
  '/quit': { zh: '退出', en: 'Exit' },
};
