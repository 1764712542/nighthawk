import type { NighthawkRegion } from '@nighthawk/nighthawk-oauth';

import type { IPluginService } from '#/app/plugin/plugin';
import type { IHostProcessService } from '#/os/interface/hostProcess';

export interface CapabilityEntryContext {
  readonly platform: NodeJS.Platform;
  readonly arch: string;
  readonly nighthawkHomeDir: string;
  readonly userHomeDir: string;
  readonly plugins: IPluginService;
  readonly hostProcess: IHostProcessService;
  readonly fetchImpl?: typeof fetch;
  readonly applicationsDir?: string;
  readonly webbridgeBaseUrl?: string;
  readonly detectProbeTimeoutMs?: number;
  readonly commandTimeoutMs?: number;
  readonly resolveRegion?: () => NighthawkRegion | Promise<NighthawkRegion>;
}
