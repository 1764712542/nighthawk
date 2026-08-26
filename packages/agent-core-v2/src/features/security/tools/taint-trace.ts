import { z } from 'zod';

import type { AgentTool } from '#/tool/toolContract';
import { createDecorator } from '#/_base/di/instantiation';

export const TaintTraceInputSchema = z.object({
  path: z
    .string()
    .describe(
      'File to analyze. Accepts an absolute path, or a path relative to the current working directory. Pass the entry point (e.g. a route handler) and taint will be traced across files it imports.',
    ),
  scope: z
    .enum(['file', 'module'])
    .default('module')
    .describe(
      "Analysis granularity. 'module' (default) follows imports/requires across related files; 'file' restricts analysis to the single file. When 'module', the given path is treated as the entry point of a module graph.",
    ),
});

export type TaintTraceInput = z.infer<typeof TaintTraceInputSchema>;

export type TaintTraceInputArgs = z.input<typeof TaintTraceInputSchema>;

export interface ITaintTraceTool extends AgentTool<TaintTraceInput> {
  readonly _serviceBrand: undefined;
}

export const ITaintTraceTool = createDecorator<ITaintTraceTool>('taintTraceTool');
