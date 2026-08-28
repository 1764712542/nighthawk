import { PENTEST_WITS, WORKING_TIPS, WORKING_WITS, type ToolbarTip } from '#/tui/constant/tips';

import { buildWeightedTips } from './footer';

export { WORKING_TIPS };

const TIP_ROTATE_INTERVAL_MS = 10_000;

const WORKING_TIP_ROTATION = buildWeightedTips(WORKING_TIPS);
const WORKING_WIT_POOL = [...WORKING_WITS];
const PENTEST_WIT_POOL = [...PENTEST_WITS];

export function currentWorkingTip(now = Date.now()): ToolbarTip | undefined {
  if (WORKING_TIP_ROTATION.length === 0) return undefined;
  const index = Math.floor(now / TIP_ROTATE_INTERVAL_MS) % WORKING_TIP_ROTATION.length;
  return WORKING_TIP_ROTATION[index];
}

/**
 * Pick a random tip from the weighted working-tip rotation.
 * If `excludeText` is provided and there are other tips available, avoid
 * returning the same text twice in a row.
 */
export function pickRandomWorkingTip(excludeText?: string): ToolbarTip | undefined {
  if (WORKING_TIP_ROTATION.length === 0) return undefined;
  const candidates =
    excludeText === undefined || WORKING_TIP_ROTATION.length === 1
      ? WORKING_TIP_ROTATION
      : WORKING_TIP_ROTATION.filter((t) => t.text !== excludeText);
  const pool = candidates.length > 0 ? candidates : WORKING_TIP_ROTATION;
  const index = Math.floor(Math.random() * pool.length);
  return pool[index];
}

/**
 * Stage-to-keyword mapping for stage-aware pentest wits.
 * When a stage is provided, only tips whose text includes at least one
 * keyword for that stage are eligible.
 */
const STAGE_WIT_KEYWORDS: Record<string, readonly string[]> = {
  recon: ['端口', '子域名', '扫描', '指纹', '攻击面', '测绘', '枚举', '抓取', 'WAF', '入口点', 'secret', '密钥', '凭证', 'hydra', '目录', 'gobuster', 'curl', '靶标'],
  'attack-surface': ['端口', '子域名', '扫描', '指纹', '攻击面', '测绘', '枚举', '抓取', 'WAF', '入口点', 'secret', '密钥', '凭证', 'hydra', '目录', 'gobuster', 'curl', '靶标', '内网穿透', '隧道', '逃逸', '元数据', 'SSH', '信任关系', '权限提升'],
  exploitation: ['注入', 'SQL', '负载', '破解', 'hash', 'shell', 'Webshell', '反连', 'nc', '漏洞验证', 'exploit', 'DLL', '劫持', '内核', 'Kerberos', '黄金', 'golden', '横向移动', '权限提升', 'sudo', '哈希'],
  'post-exploitation': ['横向移动', '信任关系', '权限提升', 'sudo', '凭证', '渗透', '内网'],
  report: ['日志', 'C2', 'beacon', '域渗透', 'BloodHound', '报告', '路径规划', '清理'],
};

/**
 * Pick a random playful Chinese wit for the loading spinner, avoiding an
 * immediate repeat of `excludeText` when other options exist.
 * When `pentestMode` is true, uses hacker-themed wits instead.
 * When `stage` is also provided, filters wits to those matching the stage.
 */
export function pickRandomWorkingWit(excludeText?: string, stage?: string, pentestMode = false): ToolbarTip | undefined {
  let pool = pentestMode ? PENTEST_WIT_POOL : WORKING_WIT_POOL;
  if (pool.length === 0) return undefined;

  // Stage-aware filtering for pentest mode
  if (pentestMode && stage !== undefined && stage !== '') {
    const keywords = STAGE_WIT_KEYWORDS[stage];
    if (keywords !== undefined && keywords.length > 0) {
      const filtered = pool.filter((t) => keywords.some((kw) => t.text.includes(kw)));
      if (filtered.length > 0) pool = filtered;
    }
  }

  const candidates =
    excludeText === undefined || pool.length === 1
      ? pool
      : pool.filter((t) => t.text !== excludeText);
  const selected = candidates.length > 0 ? candidates : pool;
  const index = Math.floor(Math.random() * selected.length);
  return selected[index];
}
