import { describe, it, expect } from 'vitest';
import { SECURITY_RULES } from '#/features/security/engine/rules';

describe('SECURITY_RULES count', () => {
  it('has the expected total number of rules', () => {
    expect(SECURITY_RULES.length).toBe(116);
  });

  it('has all unique rule ids', () => {
    const ids = SECURITY_RULES.map((r) => r.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('has exactly 116 unique rule ids', () => {
    const uniqueIds = new Set(SECURITY_RULES.map((r) => r.id));
    expect(uniqueIds.size).toBe(116);
  });
});
