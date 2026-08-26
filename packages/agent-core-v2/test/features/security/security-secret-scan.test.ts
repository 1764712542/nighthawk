import { describe, expect, it } from 'vitest';

import { scanSecretsInContent } from '#/features/security/engine/engine';

describe('secret scan content', () => {
  it('detects a hardcoded API key', () => {
    const findings = scanSecretsInContent('const API_KEY = "sk-1234567890abcdefghij";', 'config.ts');

    expect(findings.some(finding => finding.type === 'OpenAI Key')).toBe(true);
  });

  it('detects an AWS access key', () => {
    const findings = scanSecretsInContent('const key = "AKIAIOSFODNN7EXAMPLE";', 'config.ts');

    expect(findings.some(finding => finding.type === 'AWS Access Key')).toBe(true);
  });

  it('detects private key content', () => {
    const findings = scanSecretsInContent('-----BEGIN RSA PRIVATE KEY-----', 'key.pem');

    expect(findings.some(finding => finding.type === 'Private Key Block')).toBe(true);
  });

  it('does not report a low-entropy string as a secret', () => {
    const findings = scanSecretsInContent('const name = "hello";', 'user.ts');

    expect(findings).toHaveLength(0);
  });

  it('detects a hardcoded password assignment', () => {
    const findings = scanSecretsInContent('const password = "a1B2c3D4e5F6g7H8";', 'config.ts');

    expect(findings.some(finding => finding.type === 'Hardcoded Credential')).toBe(true);
  });

  it('returns no findings for an empty file', () => {
    expect(scanSecretsInContent('', 'empty.ts')).toEqual([]);
  });

  it('returns no findings for code without sensitive content', () => {
    const findings = scanSecretsInContent('const answer = 42;\nconsole.log(answer);', 'safe.ts');

    expect(findings).toEqual([]);
  });
});
