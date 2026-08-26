/**
 * Session statistics formatting for the footer status line.
 *
 * Pure + ANSI-free (like usage-format) so it stays trivially unit-testable;
 * the footer chalks the colour afterwards. Segments are composed left to
 * right and dropped whole when they no longer fit the available width.
 */

import { visibleWidth } from '@nighthawk/pi-tui';

import { formatTokenCount } from '#/utils/usage/usage-format';

import type { SessionStats } from '../types';

export function createEmptySessionStats(): SessionStats {
  return {
    turns: 0,
    steps: 0,
    llmDurationMs: 0,
    toolDurationMs: 0,
    firstTokenSamples: 0,
    firstTokenTotalMs: 0,
    streamDurationMs: 0,
    inputOtherTokens: 0,
    inputCacheReadTokens: 0,
    inputCacheCreationTokens: 0,
    outputTokens: 0,
  };
}

/** `72m10s` style durations — minutes keep counting up, matching the user-facing readout. */
export function formatStatsDuration(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000);
  if (totalSeconds < 60) return `${totalSeconds}s`;
  return `${Math.floor(totalSeconds / 60)}m${totalSeconds % 60}s`;
}

/** Seconds with one decimal ("15.5s"), dropping a redundant ".0". */
function formatStatsSeconds(ms: number): string {
  const s = ms / 1000;
  const fixed = s.toFixed(1);
  return `${fixed.endsWith('.0') ? fixed.slice(0, -2) : fixed}s`;
}

/**
 * Compose the single-line stats readout, e.g.
 * `4 轮 · 228 步| LLM 72m10s · 工具调用 66m25s| 首 token 平均 15.5s · 69 tok/s| 缓存命中 98%| 输入 16.4M tok · 输出 57.2k tok`.
 * Segments that do not fit `maxWidth` are dropped (never mid-segment
 * truncated) so the line always reads as complete facts. Returns '' when no
 * turn has been observed yet.
 */
export function formatSessionStats(stats: SessionStats, maxWidth: number): string {
  if (stats.turns <= 0 && stats.steps <= 0) return '';

  const segments: string[] = [
    `${stats.turns} 轮 · ${stats.steps} 步`,
    `LLM ${formatStatsDuration(stats.llmDurationMs)} · 工具调用 ${formatStatsDuration(stats.toolDurationMs)}`,
  ];

  if (stats.firstTokenSamples > 0) {
    const avgFirstTokenMs = stats.firstTokenTotalMs / stats.firstTokenSamples;
    const parts = [`首 token 平均 ${formatStatsSeconds(avgFirstTokenMs)}`];
    if (stats.streamDurationMs > 0 && stats.outputTokens > 0) {
      const tokPerSec = Math.round(stats.outputTokens / (stats.streamDurationMs / 1000));
      if (tokPerSec > 0) parts.push(`${tokPerSec} tok/s`);
    }
    segments.push(parts.join(' · '));
  }

  const totalInput =
    stats.inputOtherTokens + stats.inputCacheReadTokens + stats.inputCacheCreationTokens;
  if (totalInput > 0) {
    const cacheHitPercent = Math.round((stats.inputCacheReadTokens / totalInput) * 100);
    segments.push(`缓存命中 ${cacheHitPercent}%`);
    segments.push(
      `输入 ${formatTokenCount(totalInput)} tok · 输出 ${formatTokenCount(stats.outputTokens)} tok`,
    );
  }

  let result = segments[0] ?? '';
  for (let index = 1; index < segments.length; index += 1) {
    const candidate = `${result}|${segments[index]!}`;
    if (visibleWidth(candidate) > maxWidth) break;
    result = candidate;
  }
  return result;
}
