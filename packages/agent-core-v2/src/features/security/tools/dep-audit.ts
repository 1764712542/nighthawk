import { z } from 'zod';

import type { AgentTool } from '#/tool/toolContract';
import { createDecorator } from '#/_base/di/instantiation';

export const DepAuditInputSchema = z.object({
  path: z
    .string()
    .optional()
    .describe(
      'Directory containing dependency manifests (package.json, requirements.txt, go.mod, pom.xml). Accepts an absolute path, or a path relative to the current working directory. Omit to audit the current working directory.',
    ),
  useExternal: z
    .boolean()
    .optional()
    .default(false)
    .describe(
      'When true, runs the host system\'s package-manager audit tool (npm audit, pnpm audit, pip-audit) in addition to offline checks.',
    ),
});

export type DepAuditInput = z.infer<typeof DepAuditInputSchema>;

export type DepAuditInputArgs = z.input<typeof DepAuditInputSchema>;

export interface IDepAuditTool extends AgentTool<DepAuditInput> {
  readonly _serviceBrand: undefined;
}

export const IDepAuditTool = createDecorator<IDepAuditTool>('depAuditTool');
