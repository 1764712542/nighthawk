export interface ToolbarTip {
  readonly text: string;
  /**
   * Long/important tips render on their own. They never pair with a
   * neighbour and never appear as the second half of someone else's pair.
   */
  readonly solo?: boolean;
  /**
   * Rotation weight: a higher value makes the tip recur more often. Defaults
   * to 1. Used to give newer/important features more airtime.
   */
  readonly priority?: number;
}

/**
 * Subset of toolbar tips shown behind the composing spinner.
 */
export const WORKING_TIPS: readonly ToolbarTip[] = [
  { text: 'ctrl-s to add guidance without waiting for the turn to finish', priority: 2, solo: true },
  { text: '/tasks to check progress and status for background tasks', priority: 2 },
  { text: '/init: generate AGENTS.md', priority: 2 },
  { text: 'Try /dance for a hidden Easter egg' },
  { text: '/plugins: manage plugins — skills, MCP servers, and data sources from the plugin catalog', solo: true, priority: 3 },
  { text: 'ask NightHawk to schedule tasks, e.g. "remind me at 5pm"', solo: true, priority: 3 },
  { text: '/sessions to browse and resume earlier sessions', solo: true },
  { text: '/goal for multi-step work with a clear finish line', priority: 2, solo: true  },
  { text: '/goal next to queue follow-up work while the current goal keeps running', solo: true },
  { text: '/web: use the Web UI for a better experience', solo: true },
  { text: '@: mention files', priority: 2 },
  { text: '! to run a shell command', priority: 2 },
];

export const ALL_TIPS: readonly ToolbarTip[] = [
  ...WORKING_TIPS,
  { text: 'shift+enter: newline' },
  { text: 'ctrl+c: cancel' },
  { text: '/theme to switch the terminal UI theme' },
  { text: '/auto when you want NightHawk to handle approvals and keep going unattended' },
  { text: '/yolo to skip most approvals for trusted batch work, only use it in repos you trust' },
  { text: '/help: show commands' },
  { text: '/compact compresses context when it gets long', priority: 2 },
  { text: 'ctrl-o to hide or reveal tool output switching between a clean chat view and full execution details', priority: 2 },
  { text: 'shift-tab to Plan mode to review the approach before NightHawk edits files.', priority: 2 },
  { text: '/model: switch model', priority: 2 },
];

/**
 * Playful Chinese one-liners shown behind the waiting spinner while the
 * agent works. Picked at random per loading burst; kept short so they fit
 * on one activity-pane row.
 */
export const WORKING_WITS: readonly ToolbarTip[] = [
  { text: '发现 SSR 菜单~' },
  { text: '正在施展黑魔法…' },
  { text: '编译五彩斑斓的黑…' },
  { text: '和比特精灵谈判中…' },
  { text: '夜鹰出巡，bug 退散' },
  { text: '翻代码比翻书还快' },
  { text: '正在召唤良构代码…' },
  { text: '深潜上下文之海…' },
  { text: '嗅探 bug 的气味中…' },
  { text: '偷偷加载了 buff' },
  { text: '这边建议直接跑路（并没有' },
  { text: '猫头鹰说：快了快了' },
  { text: '代码在蒸锅里，马上出炉' },
  { text: '重构引力场中…' },
  { text: '给灵感一点时间' },
];
