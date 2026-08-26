import { describe, expect, it } from 'vitest';

import { scanContent, SKIP_DIRS } from '#/features/security/engine/engine';
import { detectLanguage, rulesForLanguage, SECURITY_RULES } from '#/features/security/engine/rules';

const FILE = {
  ts: 'src/service/auth.ts',
  py: 'app.py',
  go: 'cmd/server.go',
};

function pickRule(idPrefix: string) {
  const rule = SECURITY_RULES.find(r => r.id.startsWith(idPrefix));
  expect(rule, `expected rule with id prefix "${idPrefix}"`).toBeDefined();
  return rule!;
}

describe('scanContent + rules', () => {
  it('detects SQL injection in TypeScript via string concat pattern', () => {
    const content = 'const sql = "SELECT * FROM users WHERE id=" + input;\n';

    const results = scanContent(content, FILE.ts, [pickRule('sqli-003')]);
    expect(results.length).toBeGreaterThanOrEqual(1);

    const first = results[0]!;
    expect(first.rule.id).toBe('sqli-003');
    expect(first.line).toBe(1);
    expect(first.match).toContain('SELECT * FROM users WHERE id=');
    expect(first.context).toContain('1 |');
  });

  it('detects XSS via innerHTML assignment', () => {
    const content = 'element.innerHTML = userInput;\n';

    const results = scanContent(content, FILE.ts, [pickRule('xss-001')]);
    expect(results.length).toBeGreaterThanOrEqual(1);

    const first = results[0]!;
    expect(first.rule.id).toBe('xss-001');
    expect(first.file).toBe(FILE.ts);
  });

  it('detects command injection in TypeScript via execSync', () => {
    const content = 'child_process.execSync(userInput)\n';

    const results = scanContent(content, FILE.ts, SECURITY_RULES.filter(r => r.category === 'cmdi'));
    expect(results.length).toBeGreaterThanOrEqual(1);

    const first = results[0]!;
    expect(first.rule.category).toBe('cmdi');
    expect(first.file).toBe(FILE.ts);
  });

  it('does not report parameterized SQL as an injection', () => {
    const content = 'WHERE id = ?\n';

    const results = scanContent(content, FILE.ts, SECURITY_RULES.filter(r => r.id.startsWith('sqli')));
    expect(results).toHaveLength(0);
  });

  it('detects command injection in Python os.system', () => {
    const content = 'os.system(cmd)\n';

    const results = scanContent(content, FILE.py, [pickRule('cmdi-001')]);
    expect(results.length).toBeGreaterThanOrEqual(1);

    const first = results[0]!;
    expect(first.rule.id).toBe('cmdi-001');
    expect(first.file).toBe(FILE.py);
  });

  it('detects command injection in Go exec.Command with /bin/sh', () => {
    const content = 'exec.Command("/bin/sh", "-c", input)\n';

    const results = scanContent(content, FILE.go, SECURITY_RULES.filter(r => r.id.startsWith('go-')));
    expect(results.length).toBeGreaterThanOrEqual(1);

    const first = results[0]!;
    expect(first.file).toBe(FILE.go);
  });
});

describe('rules helpers', () => {
  it('rulesForLanguage filters by language', () => {
    const tsRules = rulesForLanguage('typescript');

    expect(tsRules.length).toBeGreaterThan(0);
    for (const rule of tsRules) {
      expect(rule.languages.some(l => l === '*' || l === 'typescript')).toBe(true);
    }

    expect(tsRules.length).toBeLessThan(SECURITY_RULES.length);
  });

  it('detectLanguage returns expected languages for known extensions', () => {
    expect(detectLanguage('src/app.ts')).toBe('typescript');
    expect(detectLanguage('utils.py')).toBe('python');
    expect(detectLanguage('cmd/server.go')).toBe('go');
  });

  it('SECURITY_RULES has exactly 116 entries', () => {
    expect(SECURITY_RULES.length).toBe(116);
  });
});

describe('SKIP_DIRS', () => {
  it('contains node_modules and .git', () => {
    expect(SKIP_DIRS.has('node_modules')).toBe(true);
    expect(SKIP_DIRS.has('.git')).toBe(true);
  });
});
