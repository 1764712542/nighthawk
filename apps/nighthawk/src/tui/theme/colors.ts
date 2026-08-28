/**
 * Color palette definitions for dark and light themes.
 *
 * `darkColors` / `lightColors` are the semantic `ColorPalette` consumed by
 * every UI component via the global Theme singleton. Each token holds its hex
 * value directly — see the per-token docs on `ColorPalette` for what each one
 * controls.
 *
 * Light palette values are tuned for ≥ 4.5:1 contrast against #FFFFFF
 * for text tokens and ≥ 3:1 for chrome (border / large text), matching
 * WCAG AA.
 */

// Each token below documents where it is actually consumed, so theme authors
// know what changing it affects. "Widely" means the token is read across most
// dialogs/messages rather than in one specific place.
export interface ColorPalette {
  // ── Brand ──
  /** Dominant interactive/brand colour: links & inline code, the selected item
   *  in nearly every dialog, the focused editor border, plan/"running" badges,
   *  spinners. The most widely used token. */
  primary: string;
  /** Secondary highlight: approval "▶" prefix, device-code box, image
   *  placeholder, BTW / queue panes, custom-registry import. */
  accent: string;

  // ── Text ──
  /** Default body text: dialog bodies, todo titles, footer model label,
   *  markdown headings, tool/read output, and assistant-side message bullets
   *  (assistant / tool / agent / read) plus markdown list bullets. */
  text: string;
  /** Emphasised / bold text: input dialogs, status messages. */
  textStrong: string;
  /** Secondary, dimmed text (the most widely used dim shade): thinking blocks,
   *  hints, descriptions, completed todos, markdown quotes, and the footer
   *  status bar (cwd path, git badge). */
  textDim: string;
  /** Faintest text: counters, scroll info, descriptions, markdown link URLs,
   *  code-block borders. */
  textMuted: string;

  // ── Surface ──
  /** Borders: pane & editor borders, markdown horizontal rule. */
  border: string;
  /** Focus / attention border — currently only the approval panel. */
  borderFocus: string;

  // ── State ──
  /** Success: ✓ marks, "enabled", completed states. */
  success: string;
  /** Warning: auto/yolo badges, stale markers, plan-mode hint. */
  warning: string;
  /** Error: error messages, failed tool output. */
  error: string;

  // ── Diff (all consumed by components/media/diff-preview.ts) ──
  /** Added lines. */
  diffAdded: string;
  /** Removed lines. */
  diffRemoved: string;
  /** Added lines — intra-line changed words (bold). */
  diffAddedStrong: string;
  /** Removed lines — intra-line changed words (bold). */
  diffRemovedStrong: string;
  /** Line-number gutter (also approval panel/preview). */
  diffGutter: string;
  /** Meta / hunk headers. */
  diffMeta: string;

  // ── Roles ──
  /** User message: bullet & text, skill-activation name. The one role colour
   *  with its own hue — assistant/thinking/status bullets reuse text/textDim. */
  roleUser: string;

  // ── Shell mode ──
  /** Shell mode (`!`): the `!` prompt symbol, bash-mode editor border, and the
   *  echoed `$ command` line. Its own hue (violet), distinct from
   *  plan-mode (primary) and the user role (roleUser). */
  shellMode: string;
}

export const darkColors: ColorPalette = {
  primary: '#00E5A0',
  accent: '#00D4E5',

  text: '#D7E2E8',
  textStrong: '#F2F7FA',
  textDim: '#7F95A0',
  textMuted: '#5E7183',

  border: '#3A4E5C',
  borderFocus: '#FFB86C',

  success: '#2EE59D',
  warning: '#FFB86C',
  error: '#FF5C57',

  diffAdded: '#2EE59D',
  diffRemoved: '#FF5C57',
  diffAddedStrong: '#6CFFC2',
  diffRemovedStrong: '#FF8C87',
  diffGutter: '#5E7183',
  diffMeta: '#7F95A0',

  roleUser: '#FFD166',
  shellMode: '#BD93F9',
};

export const lightColors: ColorPalette = {
  primary: '#00785A',
  accent: '#00707E',

  text: '#16211E',
  textStrong: '#16211E',
  textDim: '#41504C',
  textMuted: '#5A6A66',

  border: '#6E7F7A',
  borderFocus: '#8A5A00',

  success: '#0A6B4C',
  warning: '#8A5A00',
  error: '#A82723',

  diffAdded: '#0A6B4C',
  diffRemoved: '#A82723',
  diffAddedStrong: '#0A6B4C',
  diffRemovedStrong: '#A82723',
  diffGutter: '#6E7F7A',
  diffMeta: '#5A6A66',

  roleUser: '#8A4A00',
  shellMode: '#6C3ABE',
};

/**
 * Hacker terminal theme — Matrix green on black.
 * Activated when pentest mode is on.
 */
export const hackerColors: ColorPalette = {
  primary: '#00FF41',
  accent: '#00FF00',

  text: '#00FF41',
  textStrong: '#00FF41',
  textDim: '#008F11',
  textMuted: '#005A00',

  border: '#00FF41',
  borderFocus: '#00FF41',

  success: '#00FF41',
  warning: '#FFB800',
  error: '#FF0000',

  diffAdded: '#00FF41',
  diffRemoved: '#FF0000',
  diffAddedStrong: '#00FF41',
  diffRemovedStrong: '#FF0000',
  diffGutter: '#005A00',
  diffMeta: '#008F11',

  roleUser: '#00FF41',
  shellMode: '#00FF41',
};

export type ResolvedTheme = 'dark' | 'light';

/** Synchronous palette lookup for built-in themes only. */
export function getBuiltInPalette(resolved: ResolvedTheme): ColorPalette {
  return resolved === 'dark' ? darkColors : lightColors;
}
