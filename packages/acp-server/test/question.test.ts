import { describe, expect, it } from 'vitest';

import {
  elicitationResponseToQuestionAnswers,
  outcomeToQuestionAnswer,
  questionItemToPermissionOptions,
  questionRequestToElicitationParams,
} from '../src/question';

import type { CreateElicitationResponse, RequestPermissionResponse } from '@agentclientprotocol/sdk';
import type { QuestionItem } from '@nighthawk/agent-core-v2';

function selected(optionId: string): RequestPermissionResponse {
  return { outcome: { outcome: 'selected', optionId } };
}

const cancelled: RequestPermissionResponse = { outcome: { outcome: 'cancelled' } };

const sampleQuestion: QuestionItem = {
  question: 'Pick a color',
  options: [{ label: 'Red' }, { label: 'Green' }, { label: 'Blue' }],
};

const otherQuestion: QuestionItem = {
  question: 'Custom color',
  options: [{ label: 'Red' }, { label: 'Green' }, { label: 'Blue' }],
  otherLabel: 'Other (specify)',
  otherDescription: 'Type a custom color',
};

describe('questionItemToPermissionOptions', () => {
  it('maps each option to an allow_once plus a trailing Skip reject', () => {
    const options = questionItemToPermissionOptions(sampleQuestion, 0);
    expect(options.map((o) => o.optionId)).toEqual([
      'q0_opt_0',
      'q0_opt_1',
      'q0_opt_2',
      'q0_skip',
    ]);
    expect(options[0]).toMatchObject({ name: 'Red', kind: 'allow_once' });
    expect(options.at(-1)).toMatchObject({ name: 'Skip', kind: 'reject_once' });
  });

  it('includes an Other option when otherLabel is set on the question', () => {
    const options = questionItemToPermissionOptions(otherQuestion, 0);
    expect(options.map((o) => o.optionId)).toEqual([
      'q0_opt_0',
      'q0_opt_1',
      'q0_opt_2',
      'q0_other',
      'q0_skip',
    ]);
    expect(options[3]).toMatchObject({ name: 'Other (specify)', kind: 'allow_once' });
  });
});

describe('outcomeToQuestionAnswer', () => {
  it('returns the selected label keyed by the question text', () => {
    expect(outcomeToQuestionAnswer(sampleQuestion, selected('q0_opt_1'))).toEqual({
      'Pick a color': 'Green',
    });
  });

  it('returns null on cancel', () => {
    expect(outcomeToQuestionAnswer(sampleQuestion, cancelled)).toBeNull();
  });

  it('returns null on skip', () => {
    expect(outcomeToQuestionAnswer(sampleQuestion, selected('q0_skip'))).toBeNull();
  });

  it('returns null on an out-of-bounds or unknown optionId', () => {
    expect(outcomeToQuestionAnswer(sampleQuestion, selected('q0_opt_99'))).toBeNull();
    expect(outcomeToQuestionAnswer(sampleQuestion, selected('mystery'))).toBeNull();
  });

  it('returns the otherLabel when the Other option is selected', () => {
    const result = outcomeToQuestionAnswer(otherQuestion, selected('q0_other'));
    expect(result).toEqual({ 'Custom color': 'Other (specify)' });
  });

  it('returns null on Other when question has no otherLabel', () => {
    expect(outcomeToQuestionAnswer(sampleQuestion, selected('q0_other'))).toBeNull();
  });
});

const multiQuestion: QuestionItem = {
  question: 'Pick features',
  header: 'Features',
  options: [
    { label: 'Auth', description: 'Login + signup' },
    { label: 'Email' },
    { label: 'Uploads' },
  ],
  multiSelect: true,
};

describe('questionRequestToElicitationParams', () => {
  it('maps a single-select question to a string oneOf property', () => {
    const params = questionRequestToElicitationParams([sampleQuestion], 'session_1', '3:tc_1');
    expect(params).toMatchObject({
      sessionId: 'session_1',
      toolCallId: '3:tc_1',
      mode: 'form',
      message: 'Pick a color',
    });
    const schema = params.requestedSchema;
    expect(schema.required).toEqual(['q0']);
    expect(schema.properties?.['q0']).toMatchObject({
      type: 'string',
      title: 'Pick a color',
      oneOf: [
        { const: 'Red', title: 'Red' },
        { const: 'Green', title: 'Green' },
        { const: 'Blue', title: 'Blue' },
      ],
    });
  });

  it('maps every question (multi-select as array anyOf with minItems), titled by header', () => {
    const params = questionRequestToElicitationParams(
      [sampleQuestion, multiQuestion],
      'session_1',
    );
    expect(params.message).toBe('Pick a color\nPick features');
    const schema = params.requestedSchema;
    expect(schema.required).toEqual(['q0', 'q1']);
    expect(schema.properties?.['q1']).toMatchObject({
      type: 'array',
      title: 'Features',
      minItems: 1,
      items: {
        anyOf: [
          { const: 'Auth', title: 'Auth', description: 'Login + signup' },
          { const: 'Email', title: 'Email' },
          { const: 'Uploads', title: 'Uploads' },
        ],
      },
    });
  });

  it('adds a free-text property when otherLabel is set on the question', () => {
    const params = questionRequestToElicitationParams([otherQuestion], 'session_1');
    const schema = params.requestedSchema;
    expect(schema.properties?.['q0_other']).toMatchObject({
      type: 'string',
      title: 'Other (specify)',
      description: 'Type a custom color',
    });
    // The original enum property is still present
    expect(schema.properties?.['q0']).toMatchObject({
      type: 'string',
      oneOf: [
        { const: 'Red', title: 'Red' },
        { const: 'Green', title: 'Green' },
        { const: 'Blue', title: 'Blue' },
      ],
    });
  });
});

function elicitation(content: Record<string, unknown>): CreateElicitationResponse {
  return { action: 'accept', content } as CreateElicitationResponse;
}

describe('elicitationResponseToQuestionAnswers', () => {
  it('maps an accepted single-select answer keyed by the question text', () => {
    expect(elicitationResponseToQuestionAnswers([sampleQuestion], elicitation({ q0: 'Green' })))
      .toEqual({ 'Pick a color': 'Green' });
  });

  it('joins multi-select values in declared option order', () => {
    expect(
      elicitationResponseToQuestionAnswers([multiQuestion], elicitation({ q0: ['Uploads', 'Auth'] })),
    ).toEqual({ 'Pick features': 'Auth, Uploads' });
  });

  it('drops values outside the declared options', () => {
    expect(
      elicitationResponseToQuestionAnswers([sampleQuestion], elicitation({ q0: 'Purple' })),
    ).toBeNull();
    expect(
      elicitationResponseToQuestionAnswers([multiQuestion], elicitation({ q0: ['Auth', 'Hack'] })),
    ).toEqual({ 'Pick features': 'Auth' });
  });

  it('returns null on decline / cancel / content-less accept', () => {
    expect(
      elicitationResponseToQuestionAnswers([sampleQuestion], { action: 'decline' }),
    ).toBeNull();
    expect(elicitationResponseToQuestionAnswers([sampleQuestion], { action: 'cancel' })).toBeNull();
    expect(
      elicitationResponseToQuestionAnswers([sampleQuestion], { action: 'accept' }),
    ).toBeNull();
  });

  it('returns the free text from the other field when present', () => {
    expect(
      elicitationResponseToQuestionAnswers(
        [otherQuestion],
        elicitation({ q0: 'Red', q0_other: 'My custom choice' }),
      ),
    ).toEqual({ 'Custom color': 'My custom choice' });
  });

  it('ignores the other field when it is empty', () => {
    expect(
      elicitationResponseToQuestionAnswers(
        [otherQuestion],
        elicitation({ q0: 'Green', q0_other: '' }),
      ),
    ).toEqual({ 'Custom color': 'Green' });
  });
});
