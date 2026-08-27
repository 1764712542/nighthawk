import type { SessionSummary } from '@nighthawk/nighthawk-sdk';
import { describe, expect, it } from 'vitest';

import { sessionRowsForPicker } from '#/tui/utils/session-picker-rows';

function summary(input: {
  readonly id: string;
  readonly title?: string;
  readonly lastPrompt?: string;
}): SessionSummary {
  return {
    id: input.id,
    title: input.title,
    lastPrompt: input.lastPrompt,
    workDir: '/tmp/project',
    sessionDir: `/tmp/home/sessions/${input.id}`,
    createdAt: 1,
    updatedAt: 2,
  };
}

describe('sessionRowsForPicker', () => {
  it('omits the current session when the TUI session has no content', () => {
    const rows = sessionRowsForPicker(
      [
        summary({ id: 'ses_current', title: 'New Session' }),
        summary({ id: 'ses_previous', title: 'New Session' }),
      ],
      'ses_current',
      false,
    );

    expect(rows.map((row) => row.id)).toEqual(['ses_previous']);
  });

  it('keeps the current session when the TUI session has content', () => {
    const rows = sessionRowsForPicker(
      [
        summary({
          id: 'ses_current',
          title: 'Implement feature',
          lastPrompt: 'Implement feature',
        }),
      ],
      'ses_current',
      true,
    );

    expect(rows.map((row) => row.id)).toEqual(['ses_current']);
  });

  it('does not filter empty historical sessions', () => {
    const rows = sessionRowsForPicker(
      [
        summary({ id: 'ses_current', title: 'New Session' }),
        summary({ id: 'ses_previous_empty', title: 'New Session' }),
      ],
      'ses_current',
      false,
    );

    expect(rows.map((row) => row.id)).toEqual(['ses_previous_empty']);
  });

  it('maps session_dir, created_at and last_turn_reason onto the picker row', () => {
    const rows = sessionRowsForPicker(
      [
        {
          id: 'ses_full',
          title: 'Full session',
          workDir: '/tmp/project',
          sessionDir: '/tmp/home/sessions/wd_project/ses_full',
          createdAt: 111,
          updatedAt: 222,
          lastTurnReason: 'failed',
        },
      ],
      'ses_other',
      true,
    );

    expect(rows[0]).toMatchObject({
      id: 'ses_full',
      session_dir: '/tmp/home/sessions/wd_project/ses_full',
      created_at: 111,
      last_turn_reason: 'failed',
      updated_at: 222,
    });
  });
});
