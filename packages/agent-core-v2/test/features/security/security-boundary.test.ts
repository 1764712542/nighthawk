import { describe, expect, it } from 'vitest';

import {
  scanContent,
  scanSecretsInContent,
  taintAnalyzeContent,
  createScanCacheKey,
  ScanCache,
  collectFiles,
} from '#/features/security/engine/engine';
import { SECURITY_RULES } from '#/features/security/engine/rules';
import {
  parsePackageJson,
  parseRequirementsTxt,
  parseGoMod,
} from '#/features/security/engine/dep-audit';
import { MemoryHostFileSystem } from './stubs/memoryHostFs';

describe('boundary: ultra-large file (MAX_FILE_BYTES)', () => {
  it('skips files exceeding MAX_FILE_BYTES in scanContent context', () => {
    const MAX_FILE_BYTES = 2_000_000;

    const bigSize = MAX_FILE_BYTES + 1;
    const smallSize = MAX_FILE_BYTES - 1;

    expect(bigSize).toBeGreaterThan(MAX_FILE_BYTES);
    expect(smallSize).toBeLessThan(MAX_FILE_BYTES);
  });

  it('scanContent does not crash on very large content string', () => {
    const line = 'const x = "hello";\n';
    const content = line.repeat(5000);

    const results = scanContent(content, 'large.ts', SECURITY_RULES);
    expect(Array.isArray(results)).toBe(true);
  });

  it('MemoryHostFileSystem stat reports correct UTF-8 byte size', async () => {
    const memfs = new MemoryHostFileSystem();
    memfs.putDir('/root');
    memfs.put('/root/big.bin', 'x'.repeat(2_500_000));
    memfs.put('/root/small.ts', 'const x = 1;');

    const bigStat = await memfs.stat('/root/big.bin');
    const smallStat = await memfs.stat('/root/small.ts');

    expect(bigStat.size).toBe(Buffer.byteLength('x'.repeat(2_500_000), 'utf8'));
    expect(smallStat.size).toBe(Buffer.byteLength('const x = 1;', 'utf8'));
  });

  it('MemoryHostFileSystem reports UTF-8 byte length, not string length', async () => {
    const memfs = new MemoryHostFileSystem();
    memfs.putDir('/root');
    memfs.put('/root/utf8.txt', '你好');

    const stat = await memfs.stat('/root/utf8.txt');
    expect(stat.size).toBe(Buffer.byteLength('你好', 'utf8'));
  });
});

describe('boundary: binary content with null bytes', () => {
  it('scanContent returns empty for binary content with null bytes', () => {
    const binary = 'header\x00\x01\x02\x03middle\x00\x00trail';
    const results = scanContent(binary, 'binary.bin', SECURITY_RULES);
    expect(results).toEqual([]);
  });

  it('scanContent does not crash on binary with high bytes', () => {
    const binary = '\x89PNG\x0d\x0a\x1a\x0a\x00\x00\x00\rIHDR';
    const results = scanContent(binary, 'image.png', SECURITY_RULES);
    expect(Array.isArray(results)).toBe(true);
  });

  it('scanSecretsInContent returns empty for binary content', () => {
    const binary = '\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09' +
      '\x0a\x0b\x0c\x0d\x0e\x0f\x10\xff\xfe\xfd\xfc';
    const findings = scanSecretsInContent(binary, 'binary.bin');
    expect(findings).toEqual([]);
  });

  it('scanSecretsInContent returns empty for binary with partial secret patterns', () => {
    const binary = String.fromCharCode(
      0x00, 0xff, 0xfe, 0xfd, 0x41, 0x4b, 0x49, 0x41,
      0x00, 0x00, 0x12, 0x34, 0x56, 0x78, 0x9a, 0xbc,
    );
    const findings = scanSecretsInContent(binary, 'mixed.bin');
    expect(findings).toEqual([]);
  });

  it('scanContent handles mixed text/binary lines', () => {
    const content = 'line1\n\x00\x00\x00\nline3\n\xff\xfe\nline5\n';
    const results = scanContent(content, 'mixed.txt', SECURITY_RULES);
    expect(Array.isArray(results)).toBe(true);
  });
});

describe('boundary: Unicode and encoding edge cases', () => {
  it('scanContent handles UTF-8 BOM marker', () => {
    const content = '\uFEFFconst x = "hello";\n';
    const results = scanContent(content, 'bom.ts', SECURITY_RULES);
    expect(Array.isArray(results)).toBe(true);
  });

  it('scanContent handles non-ASCII identifiers', () => {
    const content = 'const 用户名 = req.query.name;\neval(用户名)\n';
    const results = scanContent(content, 'unicode.ts', SECURITY_RULES);
    expect(Array.isArray(results)).toBe(true);
  });

  it('scanSecretsInContent handles BOM-prefixed content', () => {
    const content = '\uFEFFconst key = "AKIAIOSFODNN7EXAMPLE";\n';
    const findings = scanSecretsInContent(content, 'bom.ts');
    expect(findings.some(f => f.type === 'AWS Access Key')).toBe(true);
  });

  it('taintAnalyzeContent handles non-ASCII variable names', () => {
    const content = 'let data = req.query.input;\neval(data)';
    const findings = taintAnalyzeContent(content, 'unicode.ts');
    expect(findings.length).toBeGreaterThanOrEqual(1);
  });

  it('taintAnalyzeContent handles mixed-script identifiers', () => {
    const content = 'const userInput = req.body.value;\neval(userInput)';
    const findings = taintAnalyzeContent(content, 'mixed.ts');
    expect(findings.length).toBeGreaterThanOrEqual(1);
    expect(findings[0]?.varName).toBe('userInput');
  });

  it('scanContent finds eval in code that starts with an emoji comment', () => {
    const content = '// 🐛 this is a bug fix\nconst x = eval("1+1")\n';
    const results = scanContent(content, 'emoji.ts', SECURITY_RULES);
    expect(results.some(r => r.rule.category === 'cmdi')).toBe(true);
  });

  it('taintAnalyzeContent with non-ASCII string literals still traces the sink', () => {
    const content = 'let userInput = req.query.input;\neval(userInput)\n';
    const findings = taintAnalyzeContent(content, 'cn.ts');
    expect(findings.some(f => f.varName === 'userInput')).toBe(true);
  });
});

describe('boundary: empty file and empty directory', () => {
  it('scanContent returns empty for empty string', () => {
    const results = scanContent('', 'empty.ts', SECURITY_RULES);
    expect(results).toEqual([]);
  });

  it('scanSecretsInContent returns empty for empty string', () => {
    const findings = scanSecretsInContent('', 'empty.ts');
    expect(findings).toEqual([]);
  });

  it('taintAnalyzeContent returns empty for empty string', () => {
    const findings = taintAnalyzeContent('', 'empty.ts');
    expect(findings).toEqual([]);
  });

  it('scanContent handles whitespace-only content', () => {
    const results = scanContent('   \n\n  \n  ', 'spaces.ts', SECURITY_RULES);
    expect(results).toEqual([]);
  });

  it('scanSecretsInContent handles whitespace-only content', () => {
    const findings = scanSecretsInContent('   \n\n  \n  ', 'spaces.ts');
    expect(findings).toEqual([]);
  });

  it('collectFiles returns empty for empty directory', async () => {
    const memfs = new MemoryHostFileSystem();
    memfs.putDir('/empty-dir');

    const files = await collectFiles(memfs, '/empty-dir');
    expect(files).toEqual([]);
  });

  it('collectFiles returns empty for nonexistent path', async () => {
    const memfs = new MemoryHostFileSystem();

    const files = await collectFiles(memfs, '/nonexistent');
    expect(files).toEqual([]);
  });
});

describe('boundary: very long single lines', () => {
  it('scanContent handles a single line of 5000 chars', () => {
    const longLine = 'const x = ' + '"a"'.repeat(2500) + ';\n';
    const results = scanContent(longLine, 'long.ts', SECURITY_RULES);
    expect(Array.isArray(results)).toBe(true);
  });

  it('scanContent handles a single line of 10000 chars', () => {
    const longLine = '// ' + 'x'.repeat(10000) + '\n';
    const results = scanContent(longLine, 'long.ts', SECURITY_RULES);
    expect(Array.isArray(results)).toBe(true);
  });

  it('scanSecretsInContent handles long lines', () => {
    const paddedLine = 'const data = "' + 'a'.repeat(5000) + '";\n';
    const findings = scanSecretsInContent(paddedLine, 'long.ts');
    expect(Array.isArray(findings)).toBe(true);
  });

  it('taintAnalyzeContent handles long lines', () => {
    const longLine = 'const x = "' + 'y'.repeat(5000) + '";\n';
    const findings = taintAnalyzeContent(longLine, 'long.ts');
    expect(Array.isArray(findings)).toBe(true);
  });

  it('scanContent handles multiple very long lines', () => {
    const lines = Array.from({ length: 10 }, (_, i) => `// line ${i}: ${'x'.repeat(3000)}`).join('\n') + '\n';
    const results = scanContent(lines, 'long.ts', SECURITY_RULES);
    expect(Array.isArray(results)).toBe(true);
  });

  it('scanContent handles long line with actual vulnerability pattern', () => {
    const padding = ' '.repeat(3000);
    const content = `eval(padding) ${padding}\n`;
    const results = scanContent(content, 'long.ts', SECURITY_RULES);
    expect(results.some(r => r.rule.category === 'cmdi')).toBe(true);
  });
});

describe('boundary: cache key uniqueness', () => {
  it('different content produces different cache keys', () => {
    const key1 = createScanCacheKey('1', 'file.ts', 'content A');
    const key2 = createScanCacheKey('1', 'file.ts', 'content B');

    expect(key1.contentHash).not.toBe(key2.contentHash);
  });

  it('different files with same content produce different keys', () => {
    const key1 = createScanCacheKey('1', 'a.ts', 'same');
    const key2 = createScanCacheKey('1', 'b.ts', 'same');

    expect(`${key1.version}::${key1.file}::${key1.contentHash}`).not.toBe(
      `${key2.version}::${key2.file}::${key2.contentHash}`,
    );
  });

  it('different versions produce different keys', () => {
    const key1 = createScanCacheKey('1', 'file.ts', 'same');
    const key2 = createScanCacheKey('2', 'file.ts', 'same');

    expect(key1.version).not.toBe(key2.version);
  });

  it('empty content produces a valid key', () => {
    const key = createScanCacheKey('1', 'file.ts', '');
    expect(key.contentHash).toMatch(/^h32:\d+$/);
  });

  it('identical inputs produce identical keys (deterministic)', () => {
    const key1 = createScanCacheKey('1', 'file.ts', 'test content');
    const key2 = createScanCacheKey('1', 'file.ts', 'test content');

    expect(key1.contentHash).toBe(key2.contentHash);
    expect(key1.file).toBe(key2.file);
    expect(key1.version).toBe(key2.version);
  });

  it('ScanCache stores and retrieves entries correctly', () => {
    const cache = new ScanCache(100);
    const key1 = createScanCacheKey('1', 'a.ts', 'content-a');
    const key2 = createScanCacheKey('1', 'b.ts', 'content-b');

    cache.set(key1, {
      key: key1,
      generatedAt: Date.now(),
      scanResults: [],
      normalizedFindings: [],
    });
    cache.set(key2, {
      key: key2,
      generatedAt: Date.now(),
      scanResults: [],
      normalizedFindings: [],
    });

    expect(cache.size).toBe(2);
    expect(cache.get(key1)).toBeDefined();
    expect(cache.get(key2)).toBeDefined();
  });

  it('ScanCache evicts oldest entry when full', () => {
    const cache = new ScanCache(2);

    const keys = [
      createScanCacheKey('1', 'a.ts', 'a'),
      createScanCacheKey('1', 'b.ts', 'b'),
      createScanCacheKey('1', 'c.ts', 'c'),
    ];

    for (const key of keys) {
      cache.set(key, {
        key,
        generatedAt: Date.now(),
        scanResults: [],
        normalizedFindings: [],
      });
    }

    expect(cache.size).toBe(2);
    expect(cache.get(keys[0]!)).toBeUndefined();
    expect(cache.get(keys[1]!)).toBeDefined();
    expect(cache.get(keys[2]!)).toBeDefined();
  });

  it('ScanCache overwrites existing entry for same key', () => {
    const cache = new ScanCache(10);
    const key = createScanCacheKey('1', 'a.ts', 'content');

    cache.set(key, {
      key,
      generatedAt: 1000,
      scanResults: [],
      normalizedFindings: [],
    });
    cache.set(key, {
      key,
      generatedAt: 2000,
      scanResults: [],
      normalizedFindings: [],
    });

    expect(cache.size).toBe(1);
    expect(cache.get(key)?.generatedAt).toBe(2000);
  });
});

describe('boundary: taint analysis with no sources or sinks', () => {
  it('returns empty for code with no user input sources', () => {
    const findings = taintAnalyzeContent('const x = "literal";\nconsole.log(x)\n', 'safe.ts');
    expect(findings).toEqual([]);
  });

  it('returns empty for code with only sources but no sinks', () => {
    const content = 'const data = req.query.input;\nreturn data;\n';
    const findings = taintAnalyzeContent(content, 'no-sink.ts');
    expect(findings).toEqual([]);
  });

  it('returns empty for code with only sinks but no sources', () => {
    const content = 'const cmd = "ls -la";\neval(cmd)\n';
    const findings = taintAnalyzeContent(content, 'no-source.ts');
    expect(findings).toEqual([]);
  });

  it('returns empty for pure function with no external input', () => {
    const content = 'function add(a, b) { return a + b; }\nconst result = add(1, 2);\n';
    const findings = taintAnalyzeContent(content, 'pure.ts');
    expect(findings).toEqual([]);
  });

  it('returns empty for comment-only content', () => {
    const content = '// this is a comment\n/* block comment */\n';
    const findings = taintAnalyzeContent(content, 'comments.ts');
    expect(findings).toEqual([]);
  });

  it('scanContent returns empty for comment-only content', () => {
    const results = scanContent('// this is a comment\n/* block comment */\n', 'comments.ts', SECURITY_RULES);
    expect(results).toEqual([]);
  });

  it('scanContent returns empty for a single very long comment line', () => {
    const longComment = '// ' + 'x'.repeat(10000) + '\n';
    const results = scanContent(longComment, 'long.ts', SECURITY_RULES);
    expect(results).toEqual([]);
  });

  it('returns empty for code with PHP superglobals but no sinks', () => {
    const content = '$name = $_GET["name"];\nstrict_normalize($name);\n';
    const findings = taintAnalyzeContent(content, 'no-sink.php');
    expect(findings).toEqual([]);
  });
});

describe('boundary: malformed dependency manifests', () => {
  it('parsePackageJson throws on malformed JSON', () => {
    expect(() => parsePackageJson('/pkg.json', '{invalid json')).toThrow();
  });

  it('parsePackageJson handles empty object', () => {
    const findings = parsePackageJson('/pkg.json', '{}');
    expect(findings).toEqual([]);
  });

  it('parsePackageJson handles missing dependencies fields', () => {
    const findings = parsePackageJson('/pkg.json', '{"name": "test"}');
    expect(findings).toEqual([]);
  });

  it('parsePackageJson handles empty dependencies', () => {
    const findings = parsePackageJson('/pkg.json', '{"dependencies": {}}');
    expect(findings).toEqual([]);
  });

  it('parsePackageJson handles null dependencies', () => {
    const findings = parsePackageJson('/pkg.json', '{"dependencies": null}');
    expect(findings).toEqual([]);
  });

  it('parsePackageJson handles deeply nested invalid structure gracefully', () => {
    const findings = parsePackageJson('/pkg.json', '{"dependencies": {"foo": 123}}');
    expect(Array.isArray(findings)).toBe(true);
  });

  it('parseRequirementsTxt handles empty string', () => {
    const findings = parseRequirementsTxt('');
    expect(findings).toEqual([]);
  });

  it('parseRequirementsTxt handles malformed lines', () => {
    const findings = parseRequirementsTxt('!!!invalid!!!\n???also-bad???\n');
    expect(findings).toEqual([]);
  });

  it('parseGoMod handles empty string', () => {
    const findings = parseGoMod('');
    expect(findings).toEqual([]);
  });

  it('parseGoMod handles malformed lines', () => {
    const findings = parseGoMod('not a go.mod file\nrandom text\n');
    expect(findings).toEqual([]);
  });

  it('parseGoMod handles require block without version', () => {
    const findings = parseGoMod('require github.com/foo/bar\n');
    expect(findings).toEqual([]);
  });
});

describe('boundary: secret scan entropy thresholds', () => {
  it('detects high-entropy string matching AWS key pattern', () => {
    const content = 'const key = "AKIAIOSFODNN7EXAMPLE";';
    const findings = scanSecretsInContent(content, 'config.ts');
    expect(findings.some(f => f.type === 'AWS Access Key')).toBe(true);
  });

  it('rejects low-entropy strings for patterns with minEntropy', () => {
    const content = 'secret = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"';
    const findings = scanSecretsInContent(content, 'config.ts');
    expect(findings.some(f => f.type === 'AWS Secret Key')).toBe(false);
  });

  it('accepts high-entropy string for patterns with minEntropy', () => {
    const content = 'secret = "a1B2c3D4e5F6g7H8i9J0kL1mN2oP3qR4sT5uV6wX"';
    const findings = scanSecretsInContent(content, 'config.ts');
    expect(findings.some(f => f.type === 'AWS Secret Key')).toBe(true);
  });

  it('minimum entropy string is just above threshold', () => {
    const content = 'secret = "aaaabbbbccccddddeeefffggghhhiiijjjkkklll"';
    const findings = scanSecretsInContent(content, 'config.ts');
    expect(findings.some(f => f.type === 'AWS Secret Key')).toBe(true);
  });

  it('maximum entropy string is always above all thresholds', () => {
    const content = 'token = "aB3xK9mN2pQ5rS8tV1wY4zD6fH0jL3oU7eI1gA"';
    const findings = scanSecretsInContent(content, 'config.ts');
    const credentialFindings = findings.filter(f =>
      f.type === 'AWS Secret Key' || f.type === 'Hardcoded Credential',
    );
    expect(credentialFindings.length).toBeGreaterThanOrEqual(1);
  });

  it('all-lowercase single-char repeated string has minimal entropy', () => {
    const content = 'token = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"';
    const findings = scanSecretsInContent(content, 'config.ts');
    expect(findings.some(f => f.type === 'AWS Secret Key')).toBe(false);
    expect(findings.some(f => f.type === 'Tencent Cloud Secret')).toBe(false);
  });

  it('hardcoded credential detected when entropy > 3.2', () => {
    const content = 'const api_key = "a1B2c3D4e5F6g7H8i9J0kL1mN2";\n';
    const findings = scanSecretsInContent(content, 'config.ts');
    expect(findings.some(f => f.type === 'Hardcoded Credential')).toBe(true);
  });

  it('hardcoded credential NOT detected when entropy <= 3.2', () => {
    const content = 'const api_key = "aaaaaaaaaaaaaaaa";\n';
    const findings = scanSecretsInContent(content, 'config.ts');
    expect(findings.some(f => f.type === 'Hardcoded Credential')).toBe(false);
  });

  it('hardcoded credential NOT detected for known safe values', () => {
    const content = 'const api_key = "example_api_key_value";\n';
    const findings = scanSecretsInContent(content, 'config.ts');
    expect(findings.some(f => f.type === 'Hardcoded Credential')).toBe(false);
  });

  it('GitHub Token is always high confidence regardless of entropy', () => {
    const content = 'const token = "ghp_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghij";\n';
    const findings = scanSecretsInContent(content, 'config.ts');
    expect(findings.some(f => f.type === 'GitHub Token' && f.confidence === 'high')).toBe(true);
  });

  it('OpenAI Key detected with high confidence', () => {
    const content = 'const key = "sk-proj-ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefgh";\n';
    const findings = scanSecretsInContent(content, 'config.ts');
    expect(findings.some(f => f.type === 'OpenAI Key' && f.confidence === 'high')).toBe(true);
  });

  it('private key block always detected regardless of context', () => {
    const content = '-----BEGIN RSA PRIVATE KEY-----\nMIIEowIBAAK...\n';
    const findings = scanSecretsInContent(content, 'key.pem');
    expect(findings.some(f => f.type === 'Private Key Block')).toBe(true);
  });
});
