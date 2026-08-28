// Debrand dist-web bundle: replace kimi-era identifiers, localStorage keys,
// CSS animation names and copy with NightHawk equivalents. The web UI source
// lives in the code-app repo; this script patches the committed prebuilt
// bundle so a fresh sync is not required for the rebrand to ship.
//
// Functional references intentionally preserved:
//  - `kimi` / `"kimi"` API-protocol enum values and their display names
//  - `kimi-k` model-prefix filters (managed kimi model families)
//  - `X-Kimi-Client-*` OAuth request headers (server-recognized)
//  - `kimi_desktop` / `kimi-desktop*` client-type constants sent to the
//    managed backend
//  - moonshot OAuth hostnames inside login redirect logic
//
// Run: node scripts/debrand-dist-web.mjs

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const DIST_WEB = new URL('../apps/nighthawk/dist-web/', import.meta.url).pathname;

// Ordered longest-first: later rules must not re-match earlier output.
const REPLACEMENTS = [
  // --- Round 1: keys, prefixes, animation names -------------------------
  // Login copy: provider-neutral wording (OAuth backend still Moonshot).
  ['使用 kimi.com 账号登录', '使用 Moonshot 账号登录'],
  ['Sign in with your kimi.com account', 'Sign in with your Moonshot account'],
  ['使用 kimi.ai 账号登录', '使用 Moonshot 账号登录'],
  ['Sign in with your kimi.ai account', 'Sign in with your Moonshot account'],
  ['Sign in with Kimi', 'Sign in with Moonshot'],
  ['登录 Kimi', '登录 Moonshot'],
  // Password env var shown in web onboarding — server reads NIGHTHAWK_PASSWORD.
  ['KIMI_CODE_PASSWORD', 'NIGHTHAWK_PASSWORD'],
  // Marketing jump into the old kimi code site → project repo.
  [
    /return`\$\{y\$==="global"\?"https:\/\/www\.kimi\.ai":"https:\/\/www\.kimi\.com"\}\/code\?from=\$\{bf\?"kimi_code_desktop":"kimi_code_web"\}`/g,
    'return"https://github.com/nighthawk-dev/nighthawk"',
  ],
  // Install command in the design-system docs.
  ['curl -fsSL https://code.kimi.com/install.sh | bash', 'npm install -g @nighthawk/nighthawk'],
  // Identifiers (minified property/variable names stay internally consistent).
  ['useKimiWebClient', 'useNightHawkWebClient'],
  ['KimiWebClient', 'NightHawkWebClient'],
  ['kimiWeb', 'nighthawkWeb'],
  ['KimiMascot', 'NightHawkMascot'],
  ['kimiDesktop', 'nighthawkDesktop'],
  ['kimiOverseasTitle', 'nighthawkOverseasTitle'],
  ['kimiOverseasHint', 'nighthawkOverseasHint'],
  ['kimiCnTitle', 'nighthawkCnTitle'],
  ['kimiCnHint', 'nighthawkCnHint'],
  ['kimiTitle', 'nighthawkTitle'],
  ['kimiHint', 'nighthawkHint'],
  ['KimiI18n', 'NightHawkI18n'],
  ['KimiDoodle', 'NightHawkDoodle'],
  ['kimiEyes', 'nighthawkEyes'],
  // Log prefix.
  ['[kimi-code]', '[nighthawk]'],
  // User-facing copy.
  ['Kimi 用户', 'NightHawk 用户'],
  ['Kimi 服务器', 'NightHawk 服务器'],
  ['"Kimi mascot"', '"NightHawk mascot"'],
  ['aria-label:"Kimi"', 'aria-label:"NightHawk"'],
  // localStorage keys / DOM prefixes (boot.js and bundle must match).
  ['kimi-web', 'nighthawk-web'],
  ['kimi-locale', 'nighthawk-locale'],
  ['kimi-table-layout', 'nighthawk-table-layout'],
  ['kimi-question-', 'nighthawk-question-'],
  ['kimi-complete-', 'nighthawk-complete-'],
  ['kimi-approval-', 'nighthawk-approval-'],
  // CSS animation names referenced from both the stylesheet and JS.
  ['kimi-card-in', 'nighthawk-card-in'],
  ['kimi-check-in', 'nighthawk-check-in'],
  ['kimi-dialog-overlay-in-', 'nighthawk-dialog-overlay-in-'],
  ['kimi-eye-blink-once', 'nighthawk-eye-blink-once'],
  ['kimi-eye-blink', 'nighthawk-eye-blink'],
  ['kimi-eye-look', 'nighthawk-eye-look'],
  ['kimi-transcript-search-current', 'nighthawk-transcript-search-current'],
  ['kimi-transcript-search', 'nighthawk-transcript-search'],
  // Pinia store ids / log namespaces ("kimi.models" etc).
  ['"kimi.', '"nighthawk.'],
  // Membership/model copy: Moonshot is the neutral provider name.
  ['use Kimi models', 'use Moonshot models'],
  ['chatting with Kimi models', 'chatting with Moonshot models'],
  ['with Kimi membership benefits', 'with Moonshot membership benefits'],
  ['升级你的 Kimi 账户', '升级你的 Moonshot 账户'],
  ['使用 Kimi 模型', '使用 Moonshot 模型'],
  ['Kimi 模型并查看套餐用量', 'Moonshot 模型并查看套餐用量'],
  ['Logged in with Kimi', 'Logged in with Moonshot'],
  ['使用 Kimi 会员权益', '使用 Moonshot 会员权益'],
  ['使用 Kimi 账号登录', '使用 Moonshot 账号登录'],
  ['aria-label:"Kimi"', 'aria-label:"NightHawk"'],
  ['setKimiClientDeps', 'setNightHawkClientDeps'],
  ['KimiClientDeps', 'NightHawkClientDeps'],
  // Design-system doc copy (round 3).
  ['"aria-label":"Kimi"', '"aria-label":"NightHawk"'],
  ['the Kimi set does not cover', 'the NightHawk set does not cover'],
  ['the Kimi icon set', 'the NightHawk icon set'],
  ['The Kimi brand mark', 'The NightHawk brand mark'],
  ['the Kimi app settings', 'the NightHawk app settings'],
  ['a conversation with Kimi', 'a conversation with NightHawk'],
  ['Message Kimi', 'Message NightHawk'],
  ['come from the Kimi set', 'come from the NightHawk set'],
  ['>KIMI<', '>NIGHTHAWK<'],
  // Theme: replace the kimi brand blue with the NightHawk capsule-green
  // (matches the TUI palette: primary #00E5A0, accent #00D4E5).
  ['#1783ff', '#00e5a0'],
  ['#1a88ff', '#00e5a0'],
  ['#258eff', '#00d4b5'],
  ['#167ff7', '#00c690'],
  ['#e8f3ff', '#e6fff7'],
  ['rgba(26, 136, 255,', 'rgba(0, 229, 160,'],
  ['rgba(23, 131, 255,', 'rgba(0, 229, 160,'],
  ['rgba(28, 40, 66,', 'rgba(0, 0, 0,'],
  // Design-system doc copy.
  ['kimiwork', 'nighthawk-ui'],
  ['the kimi.com avatar Rive asset', 'the NightHawk avatar Rive asset'],
  ['the 小蓝 mascot', 'the NightHawk mascot'],
  ['Kimi Design System', 'NightHawk Design System'],
  ['Kimi Web', 'NightHawk Web'],
  ['Kimi glyph', 'NightHawk glyph'],
  ['~icons/kimi/*', '~icons/nighthawk/*'],
  ['src/icons/kimi/', 'src/icons/nighthawk/'],
  ['kimi-code-web', 'nighthawk-web'],
  // --- Round 4: bundle internals + leftover copy ------------------------
  // localStorage bearer prefix (bundle-internal; boot.js has no kimi refs).
  ['kimi-code.bearer.', 'nighthawk-web.bearer.'],
  // localStorage active-workspace key (bundle-internal).
  ['kimi-active-workspace', 'nighthawk-active-workspace'],
  // App-client deps global (self-initializing, bundle-internal).
  ['__kimiAppClientDeps', '__nighthawkAppClientDeps'],
  // Provider settings dialog: protocol display label (enum value stays 'kimi').
  ['kimi:"Kimi"', 'kimi:"NightHawk"'],
  // Model-id placeholder copy.
  ['modelIdPlaceholder:"kimi-k3"', 'modelIdPlaceholder:"nighthawk-r1"'],
  // Login-poll error copy.
  ['请升级 kimi-code 后重试', '请升级 NightHawk 后重试'],
  // Design-system demo model names.
  ['kimi-k2 · thinking', 'nighthawk-r1 · thinking'],
  ['"kimi-k2"', '"nighthawk-r1"'],
  ['>kimi-k2<', '>nighthawk-r1<'],
  // --- Round 5: remaining design-system copy + icon names ----------------
  ['kimi-k2 · instant', 'nighthawk-r1 · instant'],
  ['production kimi.com palette', 'production NightHawk palette'],
  ['production kimi.com size', 'production NightHawk size'],
  ['/ kimi.com production input recipe', ' production input recipe'],
  // Skill deep-link scheme in design-system docs.
  ['kimi-code://skill/', 'nighthawk://skill/'],
  // Login-poll hint copy (round 2).
  ['请检查 kimi-code 进程后重试', '请检查 NightHawk 进程后重试'],
  // Default workspace display name.
  ['workspaceName:"kimi-code"', 'workspaceName:"nighthawk"'],
  // Onboarding URL param (bundle reads only; nothing in the repo writes it).
  ['"kimi_onboarded"', '"nighthawk_onboarded"'],
  // SVG icon component names (declared once each; no dynamic name lookups).
  ['name:"kimi-', 'name:"nighthawk-'],
  // --- Round 6: i18n keys, display fallbacks, embed params ---------------
  // i18n key (declaration + usage renamed together).
  ['loginKimi', 'loginNightHawk'],
  // Agent-name fallback shown when a turn has no tools.
  [' tools`:"kimi"}', ' tools`:"NightHawk"}'],
  // Desktop-embed origin param + sessionStorage key (read-only in bundle;
  // the external desktop host that sets them is not part of this repo).
  ['kimi_origin', 'nighthawk_origin'],
  ['kimi-desktop-server-origin', 'nighthawk-desktop-server-origin'],
  // Appearance settings: replace moon-phase naming with white-hat/black-hat.
  ['light:"月之亮面",dark:"月之暗面"', 'light:"白帽子",dark:"黑帽子"'],
  ['light:"Moon bright",dark:"Moon dark"', 'light:"White Hat",dark:"Black Hat"'],
  // Favicon cache busting: browsers cache favicon.ico aggressively and ignore
  // Cache-Control, so users upgrading from the kimi build keep seeing the old
  // moon icon until the URL changes. The query param forces a refetch.
  ['<link rel="icon" href="/favicon.ico" sizes="64x64" />', '<link rel="icon" href="/favicon.ico?v=nighthawk" sizes="64x64" />'],
];

const TEXT_EXTENSIONS = new Set(['.js', '.css', '.html', '.json']);

function* walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      yield* walk(full);
    } else if (TEXT_EXTENSIONS.has(extname(entry))) {
      yield full;
    }
  }
}

let touched = 0;
for (const file of walk(DIST_WEB)) {
  let content = readFileSync(file, 'utf8');
  const before = content;
  for (const [from, to] of REPLACEMENTS) {
    content =
      typeof from === 'string' ? content.split(from).join(to) : content.replace(from, to);
  }
  if (content !== before) {
    writeFileSync(file, content);
    touched += 1;
    console.log(`patched ${file}`);
  }
}
console.log(`done: ${touched} file(s) patched`);
