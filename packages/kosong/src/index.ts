// Message types
export {
  createAssistantMessage,
  createToolMessage,
  createUserMessage,
  extractText,
  isContentPart,
  isToolCall,
  isToolCallPart,
  mergeInPlace,
} from './message';
export type {
  AudioURLPart,
  ContentPart,
  ImageURLPart,
  Message,
  Role,
  StreamedMessagePart,
  TextPart,
  ThinkPart,
  ToolCall,
  ToolCallPart,
  VideoURLPart,
} from './message';

// Provider interfaces
export * from './provider';
export { createProvider, getModelCapability } from './providers';
export type { ProviderConfig, ProviderType } from './providers';
// NightHawk provider: exported so callers can narrow a `ChatProvider` to the NightHawk
// backend (instanceof) and apply NightHawk-specific request params (generation
// kwargs, `thinking.keep` extra body).
export { NighthawkChatProvider } from './providers/nighthawk';
export type { ExtraBody, GenerationKwargs, NighthawkOptions, ThinkingConfig } from './providers/nighthawk';
export { classifyNighthawkQuotaError } from './providers/nighthawk-errors';

// Model capability matrix
export { isUnknownCapability, UNKNOWN_CAPABILITY } from './capability';
export type { ModelCapability } from './capability';

// Model catalog (models.dev-style) metadata
export {
  catalogBaseUrl,
  catalogModelToCapability,
  catalogProviderModels,
  inferWireType,
  resolveCatalogImport,
} from './catalog';
export type {
  Catalog,
  CatalogModel,
  CatalogModelEntry,
  CatalogProviderEntry,
  CatalogImportInvalidReason,
  CatalogImportResolution,
} from './catalog';

// Core functions
export { generate } from './generate';
export type { GenerateCallbacks, GenerateResult } from './generate';

// Tool wire schema
export type { Tool } from './tool';

// Token usage
export { addUsage, emptyUsage, grandTotal, inputTotal } from './usage';
export type { TokenUsage } from './usage';

// Errors
export {
  APIConnectionError,
  APIContextOverflowError,
  APIEmptyResponseError,
  APIProviderQuotaExhaustedError,
  APIProviderRateLimitError,
  APIRequestTooLargeError,
  APIStatusError,
  APITimeoutError,
  ChatProviderError,
  createAbortError,
  isAbortError,
  isContextOverflowStatusError,
  isImageFormatError,
  isProviderRateLimitError,
  isRecoverableRequestStructureError,
  isRequestTooLargeStatusError,
  isRetryableGenerateError,
  isToolExchangeAdjacencyError,
  throwIfAbortError,
} from './errors';

/**
 * Concrete provider adapters stay off the root barrel because their SDK type
 * graphs pollute downstream declaration bundles. Import them from subpaths:
 * `@nighthawk/kosong/providers/nighthawk`,
 * `@nighthawk/kosong/providers/openai-legacy`, etc.
 */
