import chalk from 'chalk';

import type { ColorPalette } from '#/tui/theme/colors';

const GLYPHS: Record<string, readonly string[]> = {
  N: ['███╗   ██╗', '████╗  ██║', '██╔██╗ ██║', '██║╚████║', '██║ ╚███║'],
  I: ['██╗', '██║', '██║', '██║', '╚═╝'],
  G: ['██████╗', '██╔════╝', '██║  ███╗', '██║   ██║', '╚██████╔╝'],
  H: ['██╗  ██╗', '██║  ██║', '███████║', '██╔══██║', '██║  ██║'],
  T: ['████████╗', '╚══██╔══╝', '   ██║   ', '   ██║   ', '   ██║   '],
  A: [' █████╗  ', '██╔══██╗', '███████║', '██╔══██║', '██║  ██║'],
  W: ['██╗    ██╗', '██║    ██║', '██║ █╗ ██║', '██║███╗██║', '╚███╔███╔╝'],
  K: ['██╗  ██╗', '██║ ██╔╝', '█████╔╝ ', '██╔═██╗ ', '██║  ██╗'],
};

export const NIGHTHAWK_WORDMARK = 'NIGHTHAWK';

export const NIGHTHAWK_LOGO_LINES: readonly string[] = Array.from({ length: 5 }, (_, row) =>
  NIGHTHAWK_WORDMARK.split('')
    .map((glyph) => GLYPHS[glyph]![row]!)
    .join(' '),
);

const MOEBIUS_TRIANGLE_FRAMES: readonly string[][] = [
  [
    '  ╱╲  ',
    ' ╱  ╲ ',
    '╱ ╱╲ ╲',
    '╲ ╲╱ ╱',
    ' ╲  ╱ ',
  ],
  [
    ' ╲  ╱ ',
    '╱ ╲╱ ╲',
    '╱  ╲  ╲',
    '╲  ╱  ╱',
    ' ╲╱ ╱ ',
  ],
  [
    ' ╱  ╲ ',
    '╱ ╲╱ ╲',
    '╱  ╱  ╲',
    '╲  ╲  ╱',
    ' ╲╱ ╱ ',
  ],
];

const MOEBIUS_FRAME_COUNT = 3;
const MOEBIUS_INTERVAL_MS = 200;
const MOEBIUS_LOOPS = 3;
const MOEBIUS_TOTAL_TICKS = MOEBIUS_FRAME_COUNT * MOEBIUS_LOOPS;

export function renderNightHawkWordmark(colors: ColorPalette): string[] {
  return NIGHTHAWK_LOGO_LINES.map((line, index) => {
    const color = index % 2 === 0 ? colors.primary : colors.accent;
    return chalk.hex(color).bold(line);
  });
}

export class NightHawkLogoComponent {
  private frame = 0;
  private timer: ReturnType<typeof setInterval> | null = null;
  private done = false;
  private readonly requestRender: () => void;
  private readonly ANIMATION_FRAMES = 5;
  private readonly FRAME_INTERVAL_MS = 200;

  private readonly COLOR_CYCLE: ReadonlyArray<keyof ColorPalette> = [
    'primary',
    'accent',
    'success',
    'warning',
    'error',
  ];

  constructor(requestRender: () => void) {
    this.requestRender = requestRender;
  }

  start(): void {
    this.frame = 0;
    this.done = false;
    this.timer ??= setInterval(() => {
      this.frame += 1;
      if (this.frame >= this.ANIMATION_FRAMES) {
        this.done = true;
        this.stop();
      }
      this.requestRender();
    }, this.FRAME_INTERVAL_MS);
    this.requestRender();
  }

  stop(): void {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  dispose(): void {
    this.stop();
  }

  invalidate(): void {}

  render(colors: ColorPalette): string[] {
    const colorIndex = this.done
      ? this.COLOR_CYCLE.length - 1
      : Math.min(this.frame, this.COLOR_CYCLE.length - 1);
    const colorName = this.COLOR_CYCLE[colorIndex]!;
    const colorHex = colors[colorName];
    return NIGHTHAWK_LOGO_LINES.map((line) => chalk.hex(colorHex).bold(line));
  }
}