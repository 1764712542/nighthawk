import { ErrorCodes } from '@nighthawk/nighthawk-sdk';

import { currentNighthawkProfile } from '#/utils/region';

export const PRODUCT_NAME = 'NightHawk';
export const CLI_COMMAND_NAME = 'nighthawk';
export const PROCESS_NAME = 'nighthawk';

// Used in telemetry app names and HTTP User-Agent headers.
export const CLI_USER_AGENT_PRODUCT = 'nighthawk-cli';
export const CLI_UI_MODE = 'shell';
// Telemetry ui_mode for the `nighthawk web` host. Same product
// as the CLI (CLI_USER_AGENT_PRODUCT); the surface is distinguished by ui_mode.
export const WEB_UI_MODE = 'web';
// User-Agent suffix for the `nighthawk web` host: its requests go out as
// `nighthawk-cli/<version> (web)` so upstream can tell web-UI traffic
// apart from direct CLI runs without changing the product token or platform.
export const WEB_USER_AGENT_SUFFIX = 'web';

// Give telemetry a short flush window without making CLI exit feel stuck.
export const CLI_SHUTDOWN_TIMEOUT_MS = 3000;

// Upper bound on headless (`nighthawk -p`) shutdown. A wedged cleanup step (e.g. a
// SessionEnd hook, an MCP shutdown, or a connection blackholed by a restrictive
// firewall) must not keep a completed run alive indefinitely — once this elapses
// we stop waiting on cleanup and let the run return.
export const PROMPT_CLEANUP_TIMEOUT_MS = 8000;

// Grace after a headless run has fully completed (turn done, cleanup attempted)
// before force-exiting. `nighthawk -p` otherwise relies on the event loop draining to
// exit; a stray ref'd handle (socket/timer/child) left over from the run would
// wedge it. The guard timer is unref'd, so a healthy run still exits naturally
// well before this fires.
export const HEADLESS_FORCE_EXIT_GRACE_MS = 2000;

// Max time to wait for buffered stdout/stderr to flush before arming the
// force-exit fallback. A slow/piped consumer's still-draining stdio is a
// legitimate ref'd handle — flushing first prevents the fallback from
// truncating completed output. Bounded so a permanently-stuck consumer can't
// re-introduce the hang.
export const HEADLESS_STDIO_DRAIN_TIMEOUT_MS = 10000;

// Published npm package name; this can differ from the executable command.
export const NPM_PACKAGE_NAME = '@nighthawk/nighthawk';

// App-owned data paths. SDK/core runtime config is intentionally not routed here.
export const NIGHTHAWK_HOME_ENV = 'NIGHTHAWK_HOME';
export const NIGHTHAWK_DATA_DIR_NAME = '.nighthawk';
export const NIGHTHAWK_LOG_DIR_NAME = 'logs';
export const NIGHTHAWK_CACHE_DIR_NAME = 'cache';
export const NIGHTHAWK_UPDATE_DIR_NAME = 'updates';
export const NIGHTHAWK_BIN_DIR_NAME = 'bin';
export const NIGHTHAWK_UPDATE_STATE_FILE_NAME = 'latest.json';
export const NIGHTHAWK_UPDATE_INSTALL_STATE_FILE_NAME = 'install.json';
export const NIGHTHAWK_UPDATE_INSTALL_LOCK_FILE_NAME = 'install.lock';
export const NIGHTHAWK_UPDATE_ROLLOUT_LOG_FILE_NAME = 'rollout.log';
export const NIGHTHAWK_PLUGIN_UPDATE_NOTICE_STATE_FILE_NAME = 'plugin-notices.json';
// Native staged update: the staged binary + metadata live next to the running
// executable (`<exe dir>/.staging/`); the re-exec guard env breaks the
// swap → re-exec → swap loop.
export const NIGHTHAWK_NATIVE_STAGING_DIR_NAME = '.staging';
export const NIGHTHAWK_NATIVE_STAGED_STATE_FILE_NAME = 'staged.json';
export const NIGHTHAWK_UPDATE_REEXEC_ENV = 'NIGHTHAWK_UPDATE_REEXEC';
export const NIGHTHAWK_INPUT_HISTORY_DIR_NAME = 'user-history';
export const NIGHTHAWK_BANNER_DIR_NAME = 'banner';
export const NIGHTHAWK_BANNER_STATE_FILE_NAME = 'state.json';

// Managed NightHawk auth provider key shared with OAuth/SDK config.
export const DEFAULT_OAUTH_PROVIDER_NAME = 'managed:nighthawk';

// SDK/core error code that tells the TUI to show a login-required startup
// notice. Derived from sdk's ErrorCodes so a future rename in core
// auto-propagates instead of silently breaking the startup recovery path.
export const OAUTH_LOGIN_REQUIRED_CODE = ErrorCodes.AUTH_LOGIN_REQUIRED;

export const FEEDBACK_ISSUE_URL = 'https://github.com/1764712542/nighthawk/issues';
// Sign-up / sign-in page offered to signed-out users so they can create an
// account and submit feedback through the authenticated channel next time.
export function nighthawkSignupUrl(): string {
  return `${currentNighthawkProfile().siteBase}/code`;
}

// Sent in the feedback `version` field so the backend can distinguish this
// TypeScript client from clients that send a bare version.
export const FEEDBACK_VERSION_PREFIX = 'nighthawk-';

// Telemetry event name; keep stable for dashboard queries.
export const FEEDBACK_TELEMETRY_EVENT = 'feedback_submitted';

// CDN source of truth: all version checks and native install scripts pull from here.
// The off-session endpoints derive from the current region profile so a
// global login points at the .ai deployment; they are resolved per call so
// a region switch (login/logout + refreshNighthawkRegion) takes effect immediately.
export function nighthawkCdnBase(): string {
  return currentNighthawkProfile().cdnBase;
}
export function nighthawkCdnLatestUrl(): string {
  return `${nighthawkCdnBase()}/latest`;
}
// Rollout manifest consumed by update checks; the plain-text `/latest` above
// stays unchanged forever — already-shipped clients hard-fail on non-semver
// bodies, and the CDN install scripts read it for fresh installs.
export function nighthawkCdnLatestJsonUrl(): string {
  return `${nighthawkCdnBase()}/latest.json`;
}
// Per-release native artifacts: `/binaries/<version>/manifest.json` +
// `/binaries/<version>/nighthawk-<target>[.exe]` — the bare platform binary
// (same layout install.ps1 consumes).
export function nighthawkCdnBinariesBase(): string {
  return `${nighthawkCdnBase()}/binaries`;
}
// The marketplace env override name lives in the shared agent-core-v2 plugin
// domain (kap-server consumes it from there). Deep-path import: this module is
// evaluated on every CLI invocation, so it must not pull in the engine root.
export { NIGHTHAWK_PLUGIN_MARKETPLACE_URL_ENV } from '@nighthawk/agent-core-v2/app/plugin/marketplace';
// The CLI-side default catalog derives from the current region profile; the
// env override above takes priority at the call site.
export function nighthawkPluginMarketplaceUrl(): string {
  return `${nighthawkCdnBase()}/plugins/marketplace.json`;
}
// Official plugins whose usage bills against the user's plan quota. Installing
// one of these shows a quota note after the install result.
export const QUOTA_CONSUMING_PLUGIN_IDS: readonly string[] = ['nighthawk-datasource'];
export function nighthawkInstallShUrl(): string {
  return `${nighthawkCdnBase()}/install.sh`;
}
export function nighthawkInstallPs1Url(): string {
  return `${nighthawkCdnBase()}/install.ps1`;
}
// Official download page, referenced by prompt copy that steers users away
// from third-party install sources.
export function nighthawkOfficialInstallUrl(): string {
  return `${currentNighthawkProfile().siteBase}/code`;
}

// Native install commands, split by platform. Use these for prompt copy and spawn calls only; do not assemble the strings elsewhere.
export function nativeInstallCommandUnix(): string {
  return `curl -fsSL ${nighthawkInstallShUrl()} | bash`;
}
export function nativeInstallCommandWin(): string {
  return `irm ${nighthawkInstallPs1Url()} | iex`;
}
