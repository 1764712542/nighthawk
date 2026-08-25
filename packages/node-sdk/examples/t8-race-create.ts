// T8.4 driver: create session with explicit id, twice concurrently in same process.
import { createNighthawkHarness, type NighthawkHarness } from '@nighthawk/nighthawk-sdk';

const workDir = process.argv[2]!;
const homeDir = process.argv[3]!;
const sessionId = process.argv[4]!;

const identity: any = { productName: 'nighthawk-cli', version: '0.0.1-test', platform: 'nighthawk_cli' };
const harnessA = createNighthawkHarness({ identity, homeDir });
const harnessB = createNighthawkHarness({ identity, homeDir });

async function run(label: string, h: NighthawkHarness): Promise<void> {
  try {
    const s = await h.createSession({ workDir, id: sessionId, model: 'nighthawk/nighthawk' });
    console.log(JSON.stringify({ label, ok: true, id: s.id, dir: s.summary?.sessionDir }));
  } catch (error: any) {
    console.log(JSON.stringify({ label, ok: false, msg: String(error.message ?? error), code: error.code ?? error.cause?.code }));
  } finally {
    await h.close();
  }
}

await Promise.all([run('A', harnessA), run('B', harnessB)]);
