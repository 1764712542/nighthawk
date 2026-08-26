/**
 * Renders the NightHawk wordmark as five rows of ANSI-shadow block letters,
 * each row painted with a flowing primary→accent gradient so the whole mark
 * reads as a single colored banner. Used by the TUI welcome panel.
 */

import chalk from 'chalk';

import type { ColorPalette } from '#/tui/theme/colors';

const GLYPHS: Record<string, readonly string[]> = {
  N: ['███╗   ██╗', '████╗  ██║', '██╔██╗ ██║', '██║╚██╗██║', '██║ ╚████║'],
  I: ['██╗', '██║', '██║', '██║', '╚═╝'],
  G: [' ██████╗', '██╔════╝', '██║  ███╗', '██║   ██║', '╚██████╔╝'],
  H: ['██╗  ██╗', '██║  ██║', '███████║', '██╔══██║', '██║  ██║'],
  T: ['████████╗', '╚══██╔══╝', '   ██║', '   ██║', '   ██║'],
  A: [' █████╗', '██╔══██╗', '███████║', '██╔══██║', '██║  ██║'],
  W: ['██╗    ██╗', '██║    ██║', '██║ █╗ ██║', '██║███╗██║', '╚███╔███╔╝'],
  K: ['██╗  ██╗', '██║ ██╔╝', '█████╔╝', '██╔═██╗', '██║  ██╗'],
};

export const NIGHTHAWK_WORDMARK = 'NIGHTHAWK';

export const NIGHTHAWK_LOGO_LINES: readonly string[] = Array.from({ length: 5 }, (_, row) =>
  NIGHTHAWK_WORDMARK.split('')
    .map((glyph) => GLYPHS[glyph]![row]!)
    .join(' '),
);

export function renderNightHawkWordmark(colors: ColorPalette): string[] {
  return NIGHTHAWK_LOGO_LINES.map((line, index) => {
    const color = index % 2 === 0 ? colors.primary : colors.accent;
    return chalk.hex(color).bold(line);
  });
}
