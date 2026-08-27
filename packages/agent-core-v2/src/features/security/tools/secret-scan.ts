import { z } from 'zod';

import type { AgentTool } from '#/tool/toolContract';
import { createDecorator } from '#/_base/di/instantiation';

export const SecretScanInputSchema = z.object({
  path: z
    .string()
    .optional()
    .describe(
      'File or directory to scan. Accepts an absolute path, or a path relative to the current working directory. Omit to scan the current working directory.',
    ),
  include: z
    .string()
    .optional()
    .describe('Optional glob filter for file names, e.g. `*.env` or `*.ts`.'),
});

export type SecretScanInput = z.infer<typeof SecretScanInputSchema>;

export interface ISecretScanTool extends AgentTool<SecretScanInput> {
  readonly _serviceBrand: undefined;
}

export const ISecretScanTool = createDecorator<ISecretScanTool>('secretScanTool');
