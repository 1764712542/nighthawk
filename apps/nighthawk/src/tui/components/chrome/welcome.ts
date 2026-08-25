/**
 * Welcome panel shown at the top of the TUI.
 * Renders a round-bordered box with the logo, session, model, and version.
 */

import type { Component } from '@nighthawk/pi-tui';
import { truncateToWidth, visibleWidth } from '@nighthawk/pi-tui';
import chalk from 'chalk';

import { effectiveModelAlias } from '@nighthawk/nighthawk-sdk';

import { isRainbowDancing, renderDanceWelcomeHeader } from '#/tui/easter-eggs/dance';
import type { AppState } from '#/tui/types';
import { currentTheme } from '#/tui/theme';

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

    // Logo + side-by-side text. NightHawk totem: raised wings, crown
    // feathers, twin blazing eyes, raptor beak — the night hunter.
    const fullLogo = [
      '  ▄▟██▙▄     ▄▄▄▀▄▄▄     ▄▙██▟▄',
      ' ▟█▀    ▀█▙▄ ▟█▀▀█▀▀█▟ ▄▙█▀    ▀█▟',
      ' ▟█▀      ▀▀█▙▀ ▄▄█▄▄ ▀▙█▀▀      ▀█▟',
      '▟█▀   ▄▄▄    ▀▀▙ ◉ ◉ ▙▀▀    ▄▄▄   ▀█▟',
      '▟█▀  ▟█▀▀█▙▄▄  ▄█▙▙▙█▄  ▄▄▙█▀▀█▟  ▀█▟',
      '█▀  ▟█▀    ▀▀█▙▄▟█▀▀▀█▟▄▙█▀▀    ▀█▟  ▀█',
      '▀█▙ ▟█▀       ▀▀▄▄ ▄▄▀▀       ▀█▟ ▙█▀',
      ' ▀▀█▙▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▙█▀▀',
      '   ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀',
    ] as const;
    const fullLogoWidth = Math.max(...fullLogo.map((row) => visibleWidth(row)));
    const compactLogo = ['▄▟███▙▄', '▟█▀▀▀▀█▙', '█▌◉ ◉▐█', '▜█▙▼▟█▛', ' ▀▀▀▀▀'] as const;
    const useCompactLogo = innerWidth < fullLogoWidth + 22;
    const logo = useCompactLogo ? compactLogo : fullLogo;
    const logoWidth = Math.max(...logo.map((row) => visibleWidth(row)));
    const gap = '  ';
    const textWidth = Math.max(4, innerWidth - logoWidth - gap.length);

    const rightRow0 = truncateToWidth(
      chalk.bold.hex(currentTheme.palette.primary)('Welcome to NightHawk!'),
      textWidth,
      '…',
    );
    const dim = chalk.hex(currentTheme.palette.textDim);
    const labelStyle = chalk.bold.hex(currentTheme.palette.textDim);
    const rightRow1 = truncateToWidth(
      dim(isLoggedOut ? 'Run /connect or /provider to get started.' : 'Send /help for help information.'),
      textWidth,
      '…',
    );

    let renderedHeaderLines = [
      primary(logo[0].padEnd(logoWidth)) + gap + rightRow0,
      primary(logo[1].padEnd(logoWidth)) + gap + rightRow1,
      ...logo.slice(2).map((row) => primary(row.padEnd(logoWidth))),
    ];
    if (isRainbowDancing()) {
      renderedHeaderLines = renderDanceWelcomeHeader(logo, textWidth, rightRow1);
    }

    const modelValue = isLoggedOut
      ? chalk.hex(currentTheme.palette.warning)('not set, run /connect or /provider')
      : (effectiveActiveModel?.displayName ?? effectiveActiveModel?.model ?? this.state.model);

    const infoLines = [
      labelStyle('Directory: ') + this.state.workDir,
      labelStyle('Session:   ') + this.state.sessionId,
      labelStyle('Model:     ') + modelValue,
      labelStyle('Version:   ') + this.state.version,
    ];

    if (this.state.mcpServersSummary) {
      infoLines.push(labelStyle('MCP:       ') + this.state.mcpServersSummary);
    }

    const contentLines: string[] = [...renderedHeaderLines, '', ...infoLines];

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
}
