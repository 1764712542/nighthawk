import type {
  PermissionOption,
  RequestPermissionResponse,
} from '@agentclientprotocol/sdk';
import type { QuestionItem } from '@nighthawk/nighthawk-sdk';
import { describe, expect, it } from 'vitest';

import {
  outcomeToQuestionAnswer,
  questionItemToPermissionOptions,
  questionRequestValidationError,
} from '../src/question';

const sampleQuestion: QuestionItem = {
  question: 'Pick a flavour',
  options: [
    { label: 'Vanilla' },
    { label: 'Chocolate' },
    { label: 'Mint chip' },
  ],
};

describe('questionItemToPermissionOptions', () => {
  it('maps each option to allow_once + a trailing Skip reject_once', () => {
    const opts = questionItemToPermissionOptions(sampleQuestion, 0);
    expect(opts).toHaveLength(4);
    expect(opts[0]).toEqual({
      optionId: 'q0_opt_0',
      name: 'Vanilla',
      kind: 'allow_once',
    });
    expect(opts[1]).toEqual({
      optionId: 'q0_opt_1',
      name: 'Chocolate',
      kind: 'allow_once',
    });
    expect(opts[2]).toEqual({
      optionId: 'q0_opt_2',
      name: 'Mint chip',
      kind: 'allow_once',
    });
    expect(opts[3]).toEqual({
      optionId: 'q0_skip',
      name: 'Skip',
      kind: 'reject_once',
    });
  });

  it('does not conflict across different questionIndex values', () => {
    const q0 = questionItemToPermissionOptions(sampleQuestion, 0);
    const q1 = questionItemToPermissionOptions(sampleQuestion, 1);
    const ids0 = q0.map((o: PermissionOption) => o.optionId);
    const ids1 = q1.map((o: PermissionOption) => o.optionId);
    const overlap = ids0.filter((id) => ids1.includes(id));
    expect(overlap).toEqual([]);
    expect(ids1).toEqual(['q1_opt_0', 'q1_opt_1', 'q1_opt_2', 'q1_skip']);
  });

  it('emits only the Skip option for a question with no options', () => {
    const empty: QuestionItem = { question: 'Empty?', options: [] };
    const opts = questionItemToPermissionOptions(empty, 0);
    expect(opts).toHaveLength(1);
    expect(opts[0]).toEqual({
      optionId: 'q0_skip',
      name: 'Skip',
      kind: 'reject_once',
    });
  });
});

describe('outcomeToQuestionAnswer', () => {
  function selected(optionId: string): RequestPermissionResponse {
    return { outcome: { outcome: 'selected', optionId } };
  }

  it('maps a selected q0_opt_<i> to { question: options[i].label }', () => {
    expect(outcomeToQuestionAnswer(sampleQuestion, selected('q0_opt_2'))).toEqual({
      'Pick a flavour': 'Mint chip',
    });
    expect(outcomeToQuestionAnswer(sampleQuestion, selected('q0_opt_0'))).toEqual({
      'Pick a flavour': 'Vanilla',
    });
  });

  it('maps q0_skip to null', () => {
    expect(outcomeToQuestionAnswer(sampleQuestion, selected('q0_skip'))).toBeNull();
  });

  it('maps cancelled to null', () => {
    expect(
      outcomeToQuestionAnswer(sampleQuestion, { outcome: { outcome: 'cancelled' } }),
    ).toBeNull();
  });

  it('maps an unknown optionId to null', () => {
    expect(outcomeToQuestionAnswer(sampleQuestion, selected('wat'))).toBeNull();
    expect(
      outcomeToQuestionAnswer(sampleQuestion, selected('approve_once')),
    ).toBeNull();
  });

  it('defensively maps an out-of-bounds index to null', () => {
    expect(outcomeToQuestionAnswer(sampleQuestion, selected('q0_opt_99'))).toBeNull();
  });
});

describe('questionRequestValidationError', () => {
  const validSingle: QuestionItem[] = [sampleQuestion];

  it('returns null for a valid single question', () => {
    expect(questionRequestValidationError(validSingle)).toBeNull();
  });

  it('returns null for 4 questions (upper bound)', () => {
    const four: QuestionItem[] = [
      { question: 'Q1?', options: [{ label: 'a' }, { label: 'b' }] },
      { question: 'Q2?', options: [{ label: 'a' }, { label: 'b' }] },
      { question: 'Q3?', options: [{ label: 'a' }, { label: 'b' }] },
      { question: 'Q4?', options: [{ label: 'a' }, { label: 'b' }] },
    ];
    expect(questionRequestValidationError(four)).toBeNull();
  });

  it('rejects 0 questions', () => {
    expect(questionRequestValidationError([])).toBe('AskUserQuestion requires 1-4 questions.');
  });

  it('rejects 5 questions (exceeds upper bound)', () => {
    const five: QuestionItem[] = Array.from({ length: 5 }, (_, i) => ({
      question: `Q${i + 1}?`,
      options: [{ label: 'a' }, { label: 'b' }],
    }));
    expect(questionRequestValidationError(five)).toBe('AskUserQuestion requires 1-4 questions.');
  });

  it('rejects a question with empty text', () => {
    const bad: QuestionItem[] = [
      { question: '', options: [{ label: 'a' }, { label: 'b' }] },
    ];
    expect(questionRequestValidationError(bad)).toBe(
      'AskUserQuestion questions must be non-empty.',
    );
  });

  it('rejects duplicate question text', () => {
    const dup: QuestionItem[] = [
      { question: 'Same?', options: [{ label: 'a' }, { label: 'b' }] },
      { question: 'Same?', options: [{ label: 'c' }, { label: 'd' }] },
    ];
    expect(questionRequestValidationError(dup)).toContain('duplicated');
  });

  it('rejects a question with only 1 option', () => {
    const one: QuestionItem[] = [
      { question: 'Only one?', options: [{ label: 'a' }] },
    ];
    expect(questionRequestValidationError(one)).toBe(
      'Each AskUserQuestion question requires 2-4 options.',
    );
  });

  it('rejects a question with 5 options', () => {
    const five: QuestionItem[] = [
      {
        question: 'Too many?',
        options: [{ label: 'a' }, { label: 'b' }, { label: 'c' }, { label: 'd' }, { label: 'e' }],
      },
    ];
    expect(questionRequestValidationError(five)).toBe(
      'Each AskUserQuestion question requires 2-4 options.',
    );
  });

  it('rejects an option with empty label', () => {
    const badLabel: QuestionItem[] = [
      { question: 'Q?', options: [{ label: '' }, { label: 'b' }] },
    ];
    expect(questionRequestValidationError(badLabel)).toBe(
      'AskUserQuestion option labels must be non-empty.',
    );
  });

  it('rejects duplicate option labels within a question', () => {
    const dupLabel: QuestionItem[] = [
      {
        question: 'Q?',
        options: [{ label: 'Same' }, { label: 'Same' }],
      },
    ];
    expect(questionRequestValidationError(dupLabel)).toContain('duplicated');
  });
});
