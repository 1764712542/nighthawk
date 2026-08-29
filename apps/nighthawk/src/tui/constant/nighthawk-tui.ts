import { DEFAULT_OAUTH_PROVIDER_NAME } from '#/constant/app';

export { DEFAULT_OAUTH_PROVIDER_NAME, OAUTH_LOGIN_REQUIRED_CODE, PRODUCT_NAME } from '#/constant/app';

export const LLM_NOT_SET_MESSAGE = 'LLM not set, send "/connect" to connect a provider';
export const NO_ACTIVE_SESSION_MESSAGE = '没有活跃会话。发送 /connect 连接一个供应商。';
export const CTRL_D_HINT = '再按 Ctrl+D 退出';
export const CTRL_C_HINT = '再按 Ctrl+C 退出';
export const MAIN_AGENT_ID = 'main';
export const OAUTH_LOGIN_REQUIRED_STARTUP_NOTICE = 'Provider session expired. Send /connect to reconnect.';
export const SESSIONLESS_STARTUP_NOTICE =
  '尚未创建会话——您的第一条消息将自动创建。';
export const TOWER_STATUS_PROMPT =
  'Report the current tower status: call TowerStatus and give a compact summary.';
export const TOWER_TEARDOWN_PROMPT =
  'Tear down the tower: call TowerTeardown and report what it did. It refuses to destroy dirty worktrees unless forced.';
export const EXIT_CONFIRM_WINDOW_MS = 1500;
// Time window for treating two consecutive Esc presses as a double-Esc, which
// opens the undo selector. Kept short (double-click feel) so two deliberate
// presses far apart don't accidentally trigger undo.
export const DOUBLE_ESC_WINDOW_MS = 600;

/** Session picker page size: one backend keyset page and one picker window. */
export const SESSION_LIST_PAGE_SIZE = 50;

export function isManagedUsageProvider(
  providerKey: string | undefined,
): providerKey is typeof DEFAULT_OAUTH_PROVIDER_NAME {
  return providerKey === DEFAULT_OAUTH_PROVIDER_NAME;
}
