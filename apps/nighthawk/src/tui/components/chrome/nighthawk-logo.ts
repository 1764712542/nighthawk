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

const MOEBIUS_TRIANGLE_FRAMES: readonly string[][] = [
  [
    '    ╱╲    ',
    '   ╱  ╲   ',
    '  ╱ ╱╲ ╲  ',
    ' ╱ ╱  ╲ ╲ ',
    '╱ ╱    ╲ ╲',
  ],
  [
    '  ╲    ╱  ',
    '   ╲  ╱   ',
    '  ╱ ╲╱ ╲  ',
    ' ╱ ╱  ╲ ╲ ',
    '╱ ╱    ╲ ╲',
  ],
  [
    '  ╱    ╲  ',
    ' ╱ ╲  ╱ ╲ ',
    '╱   ╲╱   ╲',
    '╲   ╱╲   ╱',
    ' ╲ ╱  ╲ ╱ ',
  ],
];

const MOEBIUS_FRAME_COUNT = 3;
const MOEBIUS_INTERVAL_MS = 200;
const MOEBIUS_LOOPS = 3;
const MOEBIUS_TOTAL_TICKS = MOEBIUS_FRAME_COUNT * MOEBIUS_LOOPS;

interface RgbColor {
  readonly red: number;
  readonly green: number;
  readonly blue: number;
}

function parseHexColor(hex: string): RgbColor | undefined {
  const match = /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(hex);
  if (match === null) return undefined;
  return {
    red: Number.parseInt(match[1]!, 16),
    green: Number.parseInt(match[2]!, 16),
    blue: Number.parseInt(match[3]!, 16),
  };
}

function interpolateRgb(from: RgbColor, to: RgbColor, ratio: number): string {
  const mix = (start: number, end: number): string =>
    Math.round(start + (end - start) * ratio)
      .toString(16)
      .padStart(2, '0');
  return `#${mix(from.red, to.red)}${mix(from.green, to.green)}${mix(from.blue, to.blue)}`;
}

function interpolateGradient(from: string, to: string, ratio: number): string {
  const fromRgb = parseHexColor(from);
  const toRgb = parseHexColor(to);
  if (fromRgb === undefined || toRgb === undefined) return from;
  return interpolateRgb(fromRgb, toRgb, ratio);
}

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

  constructor(requestRender: () => void) {
    this.requestRender = requestRender;
  }

  start(): void {
    this.frame = 0;
    this.done = false;
    this.timer ??= setInterval(() => {
      this.frame += 1;
      if (this.frame >= MOEBIUS_TOTAL_TICKS) {
        this.done = true;
        this.stop();
      }
      this.requestRender();
    }, MOEBIUS_INTERVAL_MS);
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

  private renderMoebiusTriangle(colors: ColorPalette): string[] {
    const frameIndex = this.done ? 0 : (this.frame % MOEBIUS_FRAME_COUNT);
    const lines = MOEBIUS_TRIANGLE_FRAMES[frameIndex]!;
    return lines.map((line) => {
      const chars = Array.from(line);
      const styled = chars.map((char, charIndex) => {
        if (char === ' ') return char;
        const rowRatio = charIndex / Math.max(1, chars.length - 1);
        const gradientRatio = rowRatio * 1.3;
        const color = interpolateGradient(colors.primary, colors.accent, Math.min(1, gradientRatio));
        return chalk.hex(color).bold(char);
      });
      return styled.join('');
    });
  }

  render(colors: ColorPalette): string[] {
    return this.renderMoebiusTriangle(colors);
  }
}