import { OPEN_PLATFORMS, type OpenPlatformDefinition } from '@nighthawk/nighthawk-oauth';

import { ChoicePickerComponent, type ChoiceOption } from './choice-picker';

/**
 * Quick-connect presets for popular OpenAI-compatible providers. Each entry
 * reuses the open-platform login flow: API key → `GET {baseUrl}/models` →
 * model selection → config write. No prefix filtering applies.
 */
export const PRESET_PROVIDERS: readonly OpenPlatformDefinition[] = [
  {
    id: 'deepseek',
    name: 'DeepSeek (api.deepseek.com)',
    baseUrl: 'https://api.deepseek.com/v1',
  },
  {
    id: 'openai',
    name: 'OpenAI (api.openai.com)',
    baseUrl: 'https://api.openai.com/v1',
  },
  {
    id: 'gemini',
    name: 'Google Gemini · OpenAI-compatible (generativelanguage.googleapis.com)',
    baseUrl: 'https://generativelanguage.googleapis.com/v1beta/openai',
  },
  {
    id: 'xai',
    name: 'xAI Grok (api.x.ai)',
    baseUrl: 'https://api.x.ai/v1',
  },
  {
    id: 'openrouter',
    name: 'OpenRouter (openrouter.ai)',
    baseUrl: 'https://openrouter.ai/api/v1',
  },
  {
    id: 'siliconflow',
    name: 'SiliconFlow 硅基流动 (api.siliconflow.cn)',
    baseUrl: 'https://api.siliconflow.cn/v1',
  },
  {
    id: 'groq',
    name: 'Groq (api.groq.com)',
    baseUrl: 'https://api.groq.com/openai/v1',
  },
  {
    id: 'together',
    name: 'Together (api.together.xyz)',
    baseUrl: 'https://api.together.xyz/v1',
  },
  {
    id: 'ollama',
    name: 'Ollama · local (localhost:11434)',
    baseUrl: 'http://localhost:11434/v1',
  },
];

const CATALOG_OPTION: ChoiceOption = {
  value: '__catalog__',
  label: 'Browse the full model catalog (models.dev)',
  description: '数百个供应商 · hundreds of providers',
};

const CUSTOM_OPTION: ChoiceOption = {
  value: '__custom__',
  label: 'Custom OpenAI-compatible endpoint',
  description: '自定义 base URL + API key',
};

function platformOptions(): readonly ChoiceOption[] {
  return [
    ...PRESET_PROVIDERS.map((provider) => ({
      value: provider.id,
      label: provider.name,
    })),
    ...OPEN_PLATFORMS.map((platform) => ({ value: platform.id, label: platform.name })),
    CATALOG_OPTION,
    CUSTOM_OPTION,
  ];
}

export interface PlatformSelectorOptions {
  readonly onSelect: (platformId: string) => void;
  readonly onCancel: () => void;
}

export class PlatformSelectorComponent extends ChoicePickerComponent {
  constructor(opts: PlatformSelectorOptions) {
    super({
      title: 'Select a provider / 选择供应商',
      options: [...platformOptions()],
      searchable: true,
      onSelect: opts.onSelect,
      onCancel: opts.onCancel,
    });
  }
}
