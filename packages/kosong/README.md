# @nighthawk/kosong

Provider-agnostic LLM abstraction layer for modern AI agent applications.

Part of the [NightHawk](https://github.com/1764712542/nighthawk) monorepo.

## Features

- **Multi-provider support** — OpenAI (Chat Completions + Responses API), Anthropic, Google GenAI, Vertex AI, and NightHawk's own backend through a single `ChatProvider` interface
- **Streaming-first** — all generation returns an async-iterable `StreamedMessage` with real-time token streaming
- **Tool calling** — provider-agnostic tool definitions that auto-convert to each backend's wire format
- **Model capability matrix** — built-in catalog of supported modalities (image, video, audio, thinking, tools) per model
- **Thinking mode** — first-class support for reasoning/thinking effort levels across providers
- **Token usage tracking** — unified `TokenUsage` with prompt-cache breakdowns
- **Structured error hierarchy** — typed errors for rate limits, context overflow, timeouts, quota exhaustion, and more
- **Abort support** — `AbortSignal` integration for cancellable generation

## Supported providers

| Provider type | Wire protocol | Package |
| --- | --- | --- |
| `anthropic` | Anthropic Messages API | `@anthropic-ai/sdk` |
| `openai` | OpenAI Chat Completions (legacy) | `openai` |
| `openai_responses` | OpenAI Responses API | `openai` |
| `google-genai` | Google GenAI SDK | `@google/genai` |
| `vertexai` | Google Vertex AI (via GenAI SDK) | `@google/genai` |
| `nighthawk` | NightHawk/KFC backend | — |

## Quick start

```ts
import { createProvider, generate, createUserMessage } from '@nighthawk/kosong';

// Create a provider
const provider = createProvider({
  type: 'anthropic',
  apiKey: process.env.ANTHROPIC_API_KEY!,
  modelName: 'claude-sonnet-4-20250514',
});

// Generate a response
const result = await generate(
  provider,
  'You are a helpful assistant.',
  [], // tools
  [createUserMessage('Hello!')],
);

console.log(result.message.content);
// → [{ type: 'text', text: '...' }]
```

## API overview

### Core

| Export | Description |
| --- | --- |
| `generate(provider, systemPrompt, tools, history, callbacks?, options?)` | Stream-generate one assistant message; returns `GenerateResult` |
| `createProvider(config)` | Factory that instantiates a `ChatProvider` from a `ProviderConfig` |
| `getModelCapability(wire, model)` | Static lookup of a model's declared capabilities |

### Message types

| Export | Description |
| --- | --- |
| `Message`, `ContentPart`, `ToolCall` | Core conversation types |
| `createUserMessage(text)` | Helper to build a user message |
| `createAssistantMessage(parts, toolCalls?)` | Helper to build an assistant message |
| `createToolMessage(toolCallId, output)` | Helper to build a tool result message |
| `extractText(message, sep?)` | Extract concatenated text from a message |
| `mergeInPlace(target, source)` | Streaming accumulator for compatible parts |

### Tool schema

| Export | Description |
| --- | --- |
| `Tool` | Provider-agnostic tool definition (name, description, JSON Schema parameters) |

### Token usage

| Export | Description |
| --- | --- |
| `TokenUsage` | Breakdown: `inputOther`, `inputCacheRead`, `inputCacheCreation`, `output` |
| `inputTotal(usage)` | Sum of all input token categories |
| `grandTotal(usage)` | Input + output total |
| `addUsage(a, b)` | Sum two `TokenUsage` objects |
| `emptyUsage()` | Zero-valued `TokenUsage` |

### Model catalog

| Export | Description |
| --- | --- |
| `Catalog`, `CatalogModel` | models.dev-style catalog types |
| `catalogProviderModels(entry)` | Extract normalized models from a catalog provider entry |
| `catalogModelToCapability(model)` | Convert a raw catalog model to `CatalogModel` with capabilities |
| `resolveCatalogImport(entry, userBaseUrl?)` | Resolve wire type and endpoint for catalog import |

### Errors

| Export | Description |
| --- | --- |
| `ChatProviderError` | Base error for all provider errors |
| `APIConnectionError` | Network-level connection failure |
| `APITimeoutError` | Request timeout |
| `APIStatusError` | HTTP status error (carries `statusCode`) |
| `APIContextOverflowError` | Context window exceeded |
| `APIRequestTooLargeError` | HTTP 413 — request body too large |
| `APIProviderRateLimitError` | HTTP 429 — transient rate limit |
| `APIProviderQuotaExhaustedError` | HTTP 429 — account quota exhausted (not retriable) |
| `APIEmptyResponseError` | Response contained no content or tool calls |
| `isAbortError(error)` | Check if an error is a user cancellation |
| `isRetryableGenerateError(error)` | Check if an error is safe to retry |

### Provider-specific

Provider adapters are exported from subpaths to keep type graphs out of the root bundle:

```ts
import { NighthawkChatProvider } from '@nighthawk/kosong/providers/nighthawk';
```

See `src/providers/` for all available adapters.

## Provider configuration

```ts
import { createProvider } from '@nighthawk/kosong';

// Anthropic
const anthropic = createProvider({
  type: 'anthropic',
  apiKey: 'your-key',
  modelName: 'claude-sonnet-4-20250514',
});

// OpenAI (Chat Completions)
const openai = createProvider({
  type: 'openai',
  apiKey: 'your-key',
  modelName: 'gpt-4o',
});

// OpenAI (Responses API)
const openaiResponses = createProvider({
  type: 'openai_responses',
  apiKey: 'your-key',
  modelName: 'o3',
});

// Google GenAI
const google = createProvider({
  type: 'google-genai',
  apiKey: 'your-key',
  modelName: 'gemini-2.5-pro',
});

// NightHawk backend
const nighthawk = createProvider({
  type: 'nighthawk',
  apiKey: 'your-key',
  modelName: 'nighthawk-v1-auto',
});
```

## Error handling

```ts
import {
  generate,
  createUserMessage,
  isRetryableGenerateError,
  APIContextOverflowError,
  APIProviderQuotaExhaustedError,
} from '@nighthawk/kosong';

try {
  const result = await generate(provider, system, tools, history);
} catch (error) {
  if (error instanceof APIContextOverflowError) {
    // Trigger compaction or truncate context
  } else if (error instanceof APIProviderQuotaExhaustedError) {
    // Quota exhausted — do not retry, prompt user to recharge
  } else if (isRetryableGenerateError(error)) {
    // Safe to retry with backoff
  }
}
```

## License

MIT
