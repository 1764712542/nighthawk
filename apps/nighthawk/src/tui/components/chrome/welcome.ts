/**
 * Welcome panel shown at the top of the TUI.
 * Renders a round-bordered box with the NightHawk wordmark, quick-start tips,
 * session info, and model/version metadata.
 */

import type { Component } from '@nighthawk/pi-tui';
import { truncateToWidth, visibleWidth } from '@nighthawk/pi-tui';
import chalk from 'chalk';

import { effectiveModelAlias } from '@nighthawk/nighthawk-sdk';

import { isRainbowDancing, renderDanceWelcomeHeader } from '#/tui/easter-eggs/dance';
import type { AppState } from '#/tui/types';
import { currentTheme } from '#/tui/theme';
import { gradientText } from '#/tui/theme/gradient-text';
import {
  NIGHTHAWK_LOGO_LINES,
  renderNightHawkWordmark,
} from '#/tui/components/chrome/nighthawk-logo';

const WORDMARK_TIP_MIN_WIDTH = 26;

export class WelcomeComponent implements Component {
  private state: AppState;

  constructor(state: AppState) {
    this.state = state;
  }

  invalidate(): void {}

  render(width: number): string[] {
    const safeWidth = Math.max(0, width);
    const primary = (s: string): string => chalk.hex(currentTheme.palette.primary)(s);
    const isLoggedOut = !this.state.model;
    const activeModel = this.state.availableModels[this.state.model];
    const effectiveActiveModel = activeModel === undefined ? undefined : effectiveModelAlias(activeModel);

    if (safeWidth < 24) {
      const title = chalk.bold.hex(currentTheme.palette.primary)('Welcome to NightHawk!');
      const prompt = isLoggedOut
        ? chalk.hex(currentTheme.palette.warning)('Run /connect or /provider to get started.')
        : chalk.hex(currentTheme.palette.textDim)('Send /help for help information.');
      const model = isLoggedOut
        ? chalk.hex(currentTheme.palette.warning)('not set, run /connect or /provider')
        : (effectiveActiveModel?.displayName ?? effectiveActiveModel?.model ?? this.state.model);
      return ['', title, prompt, `Model: ${model}`].map((line) =>
        truncateToWidth(line, safeWidth, '…'),
      );
    }

    const innerWidth = Math.max(1, safeWidth - 4);
    const pad = '  ';
    const dim = chalk.hex(currentTheme.palette.textDim);

    const wordmark = renderNightHawkWordmark(currentTheme.palette);
    const wordmarkWidth = Math.max(...wordmark.map((row) => visibleWidth(row)));
    const gap = '  ';
    const sideBySide = innerWidth >= wordmarkWidth + WORDMARK_TIP_MIN_WIDTH;
    const textWidth = Math.max(4, innerWidth - wordmarkWidth - gap.length);

    const tips = this.buildTips(isLoggedOut, primary, dim);

    let headerLines: string[];
    if (innerWidth >= wordmarkWidth) {
      if (sideBySide) {
        headerLines = wordmark.map((row, index) => {
          const right = tips[index] ?? '';
          return row.padEnd(wordmarkWidth) + gap + truncateToWidth(right, textWidth, '…');
        });
      } else {
        headerLines = [...wordmark, '', ...tips];
      }
      if (isRainbowDancing()) {
        headerLines = renderDanceWelcomeHeader(
          [...NIGHTHAWK_LOGO_LINES],
          sideBySide ? textWidth : innerWidth,
          tips[1] ?? '',
        );
      }
    } else {
      const brandTitle = gradientText(
        'NightHawk',
        currentTheme.palette.primary,
        currentTheme.palette.accent,
      );
      headerLines = [brandTitle, '', ...tips];
    }

    const modelValue = isLoggedOut
      ? chalk.hex(currentTheme.palette.warning)('not set, run /connect or /provider')
      : (effectiveActiveModel?.displayName ?? effectiveActiveModel?.model ?? this.state.model);

    const labelStyle = chalk.bold.hex(currentTheme.palette.textDim);
    const infoLines = [
      labelStyle('Directory: ') + this.state.workDir,
      labelStyle('Session:   ') + this.state.sessionId,
      labelStyle('Model:     ') + modelValue,
      labelStyle('Version:   ') + this.state.version,
    ];

    if (this.state.mcpServersSummary) {
      infoLines.push(labelStyle('MCP:       ') + this.state.mcpServersSummary);
    }

    const contentLines: string[] = [...headerLines, '', ...infoLines];

    const lines: string[] = [
      '',
      primary('╭' + '─'.repeat(safeWidth - 2) + '╮'),
      primary('│') + ' '.repeat(safeWidth - 2) + primary('│'),
    ];

    for (const content of contentLines) {
      const truncated = truncateToWidth(content, innerWidth, '…');
      const vis = visibleWidth(truncated);
      const rightPad = Math.max(0, innerWidth - vis);
      lines.push(primary('│') + pad + truncated + ' '.repeat(rightPad) + primary('│'));
    }

    lines.push(primary('│') + ' '.repeat(safeWidth - 2) + primary('│'));
    lines.push(primary('╰' + '─'.repeat(safeWidth - 2) + '╯'));
    lines.push('');

    return lines.map((line) => truncateToWidth(line, safeWidth, '…'));
  }

  private buildTips(
    isLoggedOut: boolean,
    primary: (s: string) => string,
    dim: (s: string) => string,
  ): string[] {
    const tagline = [
      dim('Security-first AI coding agent for'),
      dim('pen-test, code audit & coding.'),
    ];
    const actions = isLoggedOut
      ? [
          primary('▸') + dim(' /connect — add a provider'),
          primary('▸') + dim(' /provider — manage models'),
          primary('▸') + dim(' /help — all commands'),
        ]
      : [
          primary('▸') + dim(' Type a task and press Enter'),
          primary('▸') + dim(' /help — all commands'),
          primary('▸') + dim(' /model — switch model'),
        ];
    return [...tagline, ...actions];
  }
}
