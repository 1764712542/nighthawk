import type { ChatProvider, ProviderConfig } from '../types.js';
import { OpenAIProvider } from './openai.js';
import { AnthropicProvider } from './anthropic.js';
import { NighthawkProvider } from './nighthawk.js';

export function createProvider(config: ProviderConfig): ChatProvider {
  switch (config.type) {
    case 'anthropic': return new AnthropicProvider(config.apiKey, config.baseUrl, config.model);
    case 'nighthawk': return new NighthawkProvider(config.apiKey, config.baseUrl, config.model);
    default: return new OpenAIProvider(config.apiKey, config.baseUrl, config.model);
  }
}
