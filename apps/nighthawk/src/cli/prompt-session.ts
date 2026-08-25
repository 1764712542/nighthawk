/**
 * Minimal harness/session surface consumed by `nighthawk -p` (print mode).
 *
 * `run-prompt.ts` only needs a small subset of the SDK `NighthawkHarness` / `Session`
 * API. Coding the print-mode driver against these narrow interfaces — instead of
 * the concrete SDK classes — lets the same driver run on either the legacy
 * engine (`createNighthawkHarness`) or the default agent-core-v2 engine
 * (`createPromptHarnessV2`, selected unless `NIGHTHAWK_LEGACY_FLAG` is truthy).
 * Both the legacy `NighthawkHarness` / `Session` and the v2 harness structurally
 * satisfy these interfaces, so no adapter wrappers are needed on the legacy path.
 */

import type {
  ApprovalHandler,
  ConfigDiagnostics,
  CreateGoalInput,
  CreateSessionOptions,
  Event,
  GetCronTasksResult,
  GoalSnapshot,
  GoalToolResult,
  NighthawkAuthFacade,
  NighthawkConfig,
  ListSessionsOptions,
  PermissionMode,
  PromptInput,
  QuestionHandler,
  ResumeSessionInput,
  SessionStatus,
  SessionSummary,
  TelemetryProperties,
  Unsubscribe,
} from '@nighthawk/nighthawk-sdk';

export interface PromptHarness {
  readonly homeDir: string;
  readonly auth: NighthawkAuthFacade;

  track(event: string, properties?: TelemetryProperties): void;

  ensureConfigFile(): Promise<void>;
  getConfig(): Promise<Pick<NighthawkConfig, 'defaultModel' | 'telemetry'>>;
  getConfigDiagnostics(): Promise<ConfigDiagnostics>;
  listSessions(options: ListSessionsOptions): Promise<readonly SessionSummary[]>;
  createSession(options: CreateSessionOptions): Promise<PromptSession>;
  resumeSession(input: ResumeSessionInput): Promise<PromptSession>;
  close(): Promise<void>;
}

export interface PromptSession {
  readonly id: string;
  readonly workDir: string;

  getStatus(): Promise<SessionStatus>;
  setModel(model: string): Promise<void>;
  setPermission(mode: PermissionMode): Promise<void>;
  setApprovalHandler(handler: ApprovalHandler | undefined): void;
  setQuestionHandler(handler: QuestionHandler | undefined): void;
  onEvent(listener: (event: Event) => void): Unsubscribe;
  prompt(input: string | PromptInput): Promise<void>;
  waitForBackgroundTasksOnPrint(): Promise<void>;
  handlePrintMainTurnCompleted?(): Promise<'finish' | 'continue'>;
  createGoal(input: CreateGoalInput): Promise<GoalSnapshot>;
  getGoal(): Promise<GoalToolResult>;
  getCronTasks(): Promise<GetCronTasksResult>;
}
