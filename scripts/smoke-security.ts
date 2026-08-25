import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { LocalKaos } from '../packages/kaos/src/index.js';
import {
  formatScanReport,
  formatSecrets,
  formatTaint,
  runScan,
  scanSecrets,
  taintAnalyze,
} from '../packages/agent-core/src/tools/builtin/security/engine.js';

const dir = mkdtempSync(join(tmpdir(), 'sca-smoke-'));
writeFileSync(
  join(dir, 'app.py'),
  `import sqlite3

def get_user(conn, user_id):
    cur = conn.cursor()
    cur.execute(f"SELECT * FROM users WHERE id = {user_id}")
    row = cur.fetchone()
    return row
`,
);
writeFileSync(
  join(dir, 'config.js'),
  `const AWS_SECRET = "AKIAABCDEFGHIJKLMNOP";
db.query("SELECT * FROM t WHERE x=" + req.query.x);
el.innerHTML = req.params.html;
`,
);

const kaos = await LocalKaos.create();
try {
  const report = await runScan(kaos, { root: dir });
  console.log(formatScanReport(report));
  console.log('---');
  const secrets = await scanSecrets(kaos, dir);
  console.log(formatSecrets(secrets));
  console.log('---');
  const taint = await taintAnalyze(kaos, join(dir, 'config.js'));
  console.log(formatTaint(taint));
  if (report.results.length === 0 && secrets.length === 0 && taint.length === 0) {
    console.error('SMOKE FAIL: no findings from any scanner');
    process.exitCode = 1;
  } else {
    console.log('SMOKE OK');
  }
} finally {
  rmSync(dir, { recursive: true, force: true });
}
