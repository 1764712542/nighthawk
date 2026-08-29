import * as posixPath from 'node:path/posix';
import * as win32Path from 'node:path/win32';

import type { Kaos } from '@nighthawk/kaos';
import { Emitter } from '#/_base/event';
import { KaosHostEnvironment, KaosHostFileSystemAdapter, KaosHostProcessAdapter, kaosEnvironmentToInfo } from '#/os/adapters/kaos-adapter';

import type { Runtime, RuntimeCapability, RuntimePath, RuntimeStatus } from './runtime';

let nextKaosGeneration = 1;

export function createRuntimeFromKaos(kaos: Kaos, workspaceId: string): Runtime {
  const gen = nextKaosGeneration++;
  const runtimeId = `kaos-${kaos.name}-${gen}`;
  const generation = `kaos-${gen}`;
  const capabilities = new Set<RuntimeCapability>(['fs', 'process']);
  const environment = kaosEnvironmentToInfo(kaos);
  const pathClass = kaos.pathClass();
  const path = pathClass === 'win32' ? win32Path : posixPath;
  let currentStatus: RuntimeStatus = 'ready';
  const statusEmitter = new Emitter<RuntimeStatus>();

  const runtimePath: RuntimePath = {
    separator: path.sep as '/' | '\\',
    delimiter: path.delimiter as ':' | ';',
    isAbsolute: (p) => path.isAbsolute(p),
    join: (...paths) => path.join(...paths),
    relative: (from, to) => path.relative(from, to),
    resolve: (...paths) => path.resolve(...paths),
    basename: (p) => path.basename(p),
    dirname: (p) => path.dirname(p),
  };

  const workspace = {
    mapRoots: (roots: { workDir: string; additionalDirs?: readonly string[] }) => ({
      workDir: path.resolve(roots.workDir),
      additionalDirs: roots.additionalDirs?.map((root) => path.resolve(root)),
    }),
  };

  const fs = new KaosHostFileSystemAdapter(kaos);
  const process = new KaosHostProcessAdapter(kaos);

  return {
    identity: { workspaceId, runtimeId, generation },
    capabilities,
    environment,
    path: runtimePath,
    workspace,
    fs,
    process,
    get status(): RuntimeStatus {
      return currentStatus;
    },
    onDidChangeStatus: statusEmitter.event,
    dispose: () => {
      currentStatus = 'disposed';
      statusEmitter.fire('disposed');
      statusEmitter.dispose();
    },
  };
}

export function createRuntimeWithKaosAdapters(
  kaos: Kaos,
  workspaceId: string,
): {
  runtime: Runtime;
  fs: KaosHostFileSystemAdapter;
  process: KaosHostProcessAdapter;
  environment: KaosHostEnvironment;
} {
  const runtime = createRuntimeFromKaos(kaos, workspaceId);
  const fs = new KaosHostFileSystemAdapter(kaos);
  const process = new KaosHostProcessAdapter(kaos);
  const environment = new KaosHostEnvironment(kaos);
  return { runtime, fs, process, environment };
}