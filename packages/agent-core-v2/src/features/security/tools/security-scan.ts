import { z } from 'zod';

import type { AgentTool } from '#/tool/toolContract';
import { createDecorator } from '#/_base/di/instantiation';

export const SecurityScanInputSchema = z.object({
  path: z
    .string()
    .optional()
    .describe(
      'File or directory to scan. Accepts an absolute path, or a path relative to the current working directory. Omit to scan the current working directory.',
    ),
  include: z
    .string()
    .optional()
    .describe('Optional glob filter for file names, e.g. `*.py` or `*.ts`.'),
  min_severity: z
    .enum(['critical', 'high', 'medium', 'low', 'info'])
    .optional()
    .describe('Only report findings at or above this severity. Defaults to `low`.'),
  categories: z
    .array(z.string())
    .optional()
    .describe(
      'Restrict the scan to rule categories, e.g. ["sqli", "xss", "crypto"]. Omit to scan all categories. Known categories: sqli, xss, cmdi, path-traversal, ssrf, deserialization, crypto, auth, xxe, node, python, java, go, php, dependency.',
    ),
  output_format: z
    .enum(['text', 'sarif'])
    .optional()
    .describe('Output format. Defaults to "text". Use "sarif" for SARIF 2.1.0 JSON output.'),
});

export type SecurityScanInput = z.infer<typeof SecurityScanInputSchema>;

export interface ISecurityScanTool extends AgentTool<SecurityScanInput> {
  readonly _serviceBrand: undefined;
}

export const ISecurityScanTool = createDecorator<ISecurityScanTool>('securityScanTool');
