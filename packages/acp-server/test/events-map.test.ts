import { describe, expect, it } from 'vitest';

import {
  planFromDisplayBlock,
  planRemovedToSessionUpdate,
  todoListToSessionUpdate,
} from '../src/events-map';

describe('todoListToSessionUpdate', () => {
  it('maps a populated TodoList into a plan session_update', () => {
    const note = todoListToSessionUpdate('sess-x', 7, [
      { title: 'plan thing', status: 'pending' },
      { title: 'doing thing', status: 'in_progress' },
      { title: 'finished thing', status: 'done' },
    ]);
    expect(note).not.toBeNull();
    expect(note?.sessionId).toBe('sess-x');
    expect(note?.update).toEqual({
      sessionUpdate: 'plan',
      entries: [
        { content: 'plan thing', priority: 'medium', status: 'pending' },
        { content: 'doing thing', priority: 'medium', status: 'in_progress' },
        { content: 'finished thing', priority: 'medium', status: 'completed' },
      ],
    });
  });

  it('returns null for an empty items array', () => {
    expect(todoListToSessionUpdate('sess-x', 1, [])).toBeNull();
  });
});

describe('planFromDisplayBlock', () => {
  it('translates a todo_list display block into a plan notification', () => {
    const note = planFromDisplayBlock('sess-y', 3, {
      kind: 'todo_list',
      items: [{ title: 'step 1', status: 'pending' }],
    });
    expect(note?.update).toEqual({
      sessionUpdate: 'plan',
      entries: [{ content: 'step 1', priority: 'medium', status: 'pending' }],
    });
  });

  it('returns null for non-todo_list display kinds', () => {
    expect(
      planFromDisplayBlock('sess-y', 3, { kind: 'command', command: 'ls' }),
    ).toBeNull();
  });
});

describe('planRemovedToSessionUpdate', () => {
  it('builds a plan_removed session_update with the default plan id', () => {
    const note = planRemovedToSessionUpdate('sess-z');
    expect(note).toEqual({
      sessionId: 'sess-z',
      update: {
        sessionUpdate: 'plan_removed',
        planId: 'default',
      },
    });
  });
});
