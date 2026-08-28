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
 * Hacker-style one-liners shown behind the waiting spinner when pentest mode
 * is active. Picked at random per loading burst.
 */
export const PENTEST_WITS: readonly ToolbarTip[] = [
  { text: '刺探端口…  ssh -p 22 正在响应' },
  { text: '注入 SQL 负载…  UNION SELECT NULL--' },
  { text: '枚举子域名…  dig +nocmd any target' },
  { text: '破解哈希中…  hashcat -m 0 hash.txt' },
  { text: '横向移动分析…  寻找信任关系' },
  { text: '权限提升路径探测…  sudo -l 检查' },
  { text: 'Webshell 部署准备…  上传路径验证' },
  { text: '反连 shell 监听中…  nc -lvnp 4444' },
  { text: '抓取 HTTP 响应头…  curl -v target' },
  { text: '扫描目录…  gobuster dir -w wordlist' },
  { text: 'WAF 指纹识别…  绕过策略加载' },
  { text: '靶标攻击面测绘…  入口点排序' },
  { text: '凭证喷洒…  hydra -L users -P pass' },
  { text: '内网穿透…  chisel 隧道建立' },
  { text: '漏洞验证…  Python exploit 骨架生成' },
  { text: 'Secrets 提取…  Git 历史深度扫描' },
  { text: 'SSH 密钥劫持分析…  authorized_keys 检查' },
  { text: '容器逃逸检查…  /proc/1/root 可达性' },
  { text: '云元数据探测…  169.254.169.254 可达' },
  { text: '日志清理痕迹…  审计日志梳理' },
  { text: 'C2 心跳维持…  beacon 间隔调优' },
  { text: '域渗透路径规划…  BloodHound 数据导入' },
  { text: 'Kerberos 票据投毒…  golden ticket 检测' },
  { text: 'DLL 劫持点枚举…  Process Monitor 日志' },
  { text: '内核 exploit 条件检查…  uname -a 比对' },
];

/**
 * Playful Chinese one-liners shown behind the waiting spinner while the
 * agent works, decorated with kaomoji (text emoticons). Picked at random per
 * loading burst; kept short so they fit on one activity-pane row. Shared by
 * the main agent, subagents and the swarm status line.
 */
export const WORKING_WITS: readonly ToolbarTip[] = [
  { text: '发现 SSR 菜单~ (>.<~)' },
  { text: '正在施展黑魔法… (｡•̀ᴗ-)✧' },
  { text: '编译五彩斑斓的黑… (´∀｀)' },
  { text: '和比特精灵谈判中… (◕‿◕)' },
  { text: '夜鹰出巡，bug 退散！(๑•̀ㅂ•́)و' },
  { text: '翻代码比翻书还快 (￣▽￣)ノ' },
  { text: '正在召唤良构代码… ✧(≖ ◡ ≖✿)' },
  { text: '深潜上下文之海… (っ˘ω˘ς)' },
  { text: '嗅探 bug 的气味中… (￣ω￣)' },
  { text: '偷偷加载了 buff (¬‿¬)' },
  { text: '这边建议直接跑路（并没有 (；一_一)' },
  { text: '猫头鹰说：快了快了 (｡•ᴗ•｡)' },
  { text: '代码在蒸锅里，马上出炉 ( ˘ ³˘)' },
  { text: '重构引力场中… (╯°□°)╯' },
  { text: '给灵感一点时间 (´｡• ᵕ •｡`)' },
  { text: '正在给代码泡咖啡 (￣▽￣)~*' },
  { text: '夜鹰戴上了小眼镜 (｡•̀ᴗ-)✧' },
  { text: '和 bug 玩捉迷藏 (｡◕‿◕｡)' },
  { text: '把代码揉成面团，准备烘烤 (ノ◕ヮ◕)ノ' },
  { text: '小夜鹰扇动翅膀，灰常努力 (๑•̀ㅂ•́)و✧' },
  { text: '给灵感喂了点猫粮 (ฅ´ω`ฅ)' },
  { text: '正在连接星网… (￣︶￣)↗' },
  { text: '敲代码的夜莺，歌声嘹亮 (♫_♫)' },
  { text: '把 bug 塞进小黑屋 (￢_￢)' },
  { text: '编译中，请给编译器一点爱 (づ￣ ³￣)づ' },
  { text: '正在和模型酱聊天… (≧▽≦)' },
  { text: '优化性能，给代码装上火箭 (＾▽＾)／' },
  { text: '夜鹰巡逻中，发现可疑 bug！(눈_눈)' },
  { text: '把需求翻译成喵语再执行… (=^･ω･^=)' },
  { text: '代码森林探险中，小心落叶 (っ´▽`)っ' },
  { text: '给小 bug 们发好人卡 (￣ε￣)' },
  { text: '深呼吸，准备 merge (￣▽￣)ゞ' },
  { text: '正在拼装 0 和 1 的积木 ( ﾟ▽ﾟ)/' },
  { text: '让代码跑起来，就像让猫不拆家 (´･ω･`)' },
  { text: '从 bug 海洋里捞珍珠 ( ˘ ³˘)♥' },
  { text: '夜鹰值夜班，咖啡续命 (￣﹃￣)' },
  { text: '正在修一条看不见的路 (ー_ー;)' },
  { text: '把报错当成谜语来解 (￢‿￢)' },
  { text: '给每个函数起个可爱的名字 (｡•ᴗ•｡)♥' },
  { text: '正在升级夜鹰翅膀 (๑˃ᴗ˂)ﻭ' },
  { text: '拆解需求就像拆盲盒 (¬‿¬)' },
  { text: '给小 bug 们唱摇篮曲 (￣▽￣)～♪' },
  { text: '上下文太长？夜鹰帮你理一理 (￣^￣)ゞ' },
  { text: '正在给代码缝缝补补 ( ￣▽￣)σ' },
];
