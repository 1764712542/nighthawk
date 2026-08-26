export {
  NighthawkHarness } from '#/nighthawk-harness';
export type { NighthawkHarnessRuntimeOptions } from '#/nighthawk-harness';
export { Session } from '#/session';
export { NighthawkAuthFacade } from '#/auth';
export { createNighthawkHarness, SDKRpcClient, type SDKRpcClientOptions } from '#/sdk-rpc-client';
export {
  createNighthawkHarnessV2,
  SDKRpcClientV2,
  type SDKRpcClientV2Options,
} from '#/sdk-rpc-client-v2';
export {
  createNighthawkConfigRpc,
  NighthawkConfigRpcClient,
  type NighthawkConfigRpc,
  type NighthawkConfigValidationIssue,
  type NighthawkConfigValidationPathSegment,
  type ResolveNighthawkConfigPathInput,
  type ValidateNighthawkConfigTomlInput,
} from '#/config-rpc';
export { SDKRpcClientBase } from '#/rpc';
export { NighthawkForCodingProvider } from '#/nighthawk-model-provider';
export type { NighthawkForCodingProviderOptions } from '#/nighthawk-model-provider';
export { removeProviderFromConfig } from '#/v2/config-mapper';

export {
  applyCatalogProvider,
  catalogBaseUrl,
  catalogModelToAlias,
  catalogProviderModels,
  CatalogFetchError,
  DEFAULT_CATALOG_URL,
  fetchCatalog,
  inferWireType,
  loadBuiltInCatalog,
  resolveCatalogImport,
} from '#/catalog';
export type {
  ApplyCatalogProviderOptions,
  Catalog,
  CatalogImportInvalidReason,
  CatalogImportResolution,
  CatalogModel,
  CatalogProviderEntry,
  FetchCatalogOptions,
} from '#/catalog';

export {
  ErrorCodes,
  NighthawkError,
  type NighthawkErrorCode,
  type NighthawkErrorInfo,
  type NighthawkErrorOptions,
  type NighthawkErrorPayload,
  NIGHTHAWK_ERROR_INFO,
  fromNighthawkErrorPayload,
  isNighthawkError,
  toNighthawkErrorPayload,
} from '@nighthawk/agent-core';

// Diagnostic logging — public surface only.
// RootLogger / getRootLogger / LoggingConfig stay inside agent-core.
export {
  flushDiagnosticLogs,
  flushDiagnosticLogsSync,
  log,
  redact,
  resolveGlobalLogPath,
  resolveNighthawkHome,
} from '@nighthawk/agent-core';
export type { LogContext, LogLevel, LogPayload, Logger } from '@nighthawk/agent-core';

// Host-side config helpers — safe config reader + config path resolution, used
// by hosts (e.g. the CLI's server telemetry bootstrap) that need to inspect
// config without spinning up a full NighthawkCore.
export { effectiveModelAlias, loadRuntimeConfigSafe, resolveConfigPath } from '@nighthawk/agent-core';
export { limitAgentReplayByTurns } from '@nighthawk/agent-core';
export { parseAgentFileText, resolveAgentPath } from '@nighthawk/agent-core';
// The synthesized `[models]` alias a `[secondary_model]` recipe with patch
// fields materializes at runtime — hosts filter it out of model pickers.
export { SECONDARY_DERIVED_MODEL_ALIAS } from '@nighthawk/agent-core';
// Reserved key of the v2 engine's subagent model pool: it always binds the
// caller's own model, so hosts must not offer a user alias named `primary`
// as the subagent default model.
export { PRIMARY_SUBAGENT_MODEL_CHOICE } from '@nighthawk/agent-core-v2/session/subagent/configSection';
// Pool cascade for writes that rebuild the `[models]` table: hosts staging a
// provider overwrite (remove-then-re-add) use it to restore the still-valid
// pool entries against the final alias set.
export { cascadeSubagentModelPool } from '@nighthawk/agent-core-v2/session/subagent/configSection';

// Process-wide HTTP proxy bootstrap — installed once at CLI startup so all
// outbound fetch honors HTTP_PROXY / HTTPS_PROXY / NO_PROXY.
export { installGlobalProxyDispatcher } from '@nighthawk/agent-core';

// Image compression — ingestion sites (e.g. the CLI's clipboard paste, the ACP
// adapter) shrink oversized images while constructing the content part, before
// it enters a prompt. Best effort: returns the original on any failure.
// Compression is never silent: buildImageCompressionCaption renders the note
// placed next to a compressed image, and persistOriginalImage keeps the
// pre-compression bytes readable (ReadMediaFile + region) for detail.
export {
  buildImageCompressionCaption,
  buildUnsupportedImageNotice,
  compressImageForModel,
  compressBase64ForModel,
  gateImageFormatParts,
  isModelAcceptedImageMime,
  normalizeImageMime,
  parseImageDataUrl,
  persistOriginalImage,
  sessionMediaOriginalsDir,
  IMAGE_BYTE_BUDGET,
  MAX_IMAGE_EDGE_PX,
} from '@nighthawk/agent-core';
export { ImageLimits } from '@nighthawk/agent-core';
export type {
  CompressImageOptions,
  CompressImageResult,
  CompressBase64Result,
  ImageCompressionCaptionInput,
  ImageCompressionTelemetry,
} from '@nighthawk/agent-core';

// Experimental feature flags — types only. Resolved values come from
// `NighthawkHarness.getExperimentalFeatures()` over RPC, not from a re-exported runtime value.
export type {
  ExperimentalFeatureState,
  ExperimentalFlagMap,
  ExperimentalFlagSource,
  FlagDefinition,
  FlagDefinitionInput,
  FlagId,
  FlagSurface,
} from '@nighthawk/agent-core';

// Daemon file references (agent-core-v2) — pure helpers for the internal
// `nighthawk-file://` media URLs and the model-facing `<image|video|file>` path
// tags. A daemon-ref media part is self-contained (kind from the part type,
// file id from the url) — there is no tag+ref pairing to fold.
// Hosts must not import agent-core-v2 directly; `FileMeta` and
// `UploadFileOptions` ride the `export type * from '#/types'` below.
export {
  buildDaemonFileUrl,
  buildMediaPathTag,
  isDaemonFileUrl,
  matchSingleMediaPathTag,
  parseDaemonFileUrl,
} from '@nighthawk/agent-core-v2/agent/media/mediaRef';
export type {
  DaemonFileRef,
  MediaKind,
} from '@nighthawk/agent-core-v2/agent/media/mediaRef';

// Plugin marketplace constants and types — re-exported for CLI usage.
// These are deep-path imports from agent-core-v2 because they are not
// exposed through the SDK's public API.
export {
  NIGHTHAWK_PLUGIN_MARKETPLACE_URL_ENV,
  PLUGIN_MARKETPLACE_TIERS,
  computeUpdateStatus,
  parsePluginMarketplace,
  readPluginMarketplace,
  withBuiltInEntries,
  withLatestVersions,
} from '@nighthawk/agent-core-v2/app/plugin/marketplace';
export type {
  MarketplaceLocation,
  MarketplaceUpdateStatus,
  PluginMarketplace,
  PluginMarketplaceEntry,
  PluginMarketplaceTier,
} from '@nighthawk/agent-core-v2/app/plugin/marketplace';

export type {
  NighthawkAuthCompleteFeedbackUploadInput,
  NighthawkAuthCompleteFeedbackUploadPart,
  NighthawkAuthCreateFeedbackUploadUrlInput,
  NighthawkAuthCreateFeedbackUploadUrlOk,
  NighthawkAuthCreateFeedbackUploadUrlResult,
  NighthawkAuthFeedbackUploadPart,
  NighthawkAuthLoginResult,
  NighthawkAuthLogoutResult,
  NighthawkAuthSubmitFeedbackInput,
} from '#/auth';

export * from '#/events';
export type * from '#/types';
