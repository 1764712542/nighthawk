import { Feature } from '#/features/feature';
import { registerFeature } from '#/features/featureRegistry';

import { IDepAuditTool } from './tools/dep-audit';
import { DepAuditTool } from './tools/depAuditTool';
import { ISecretScanTool } from './tools/secret-scan';
import { SecretScanTool } from './tools/secretScanTool';
import { ISecurityScanTool } from './tools/security-scan';
import { SecurityScanTool } from './tools/securityScanTool';
import { ITaintTraceTool } from './tools/taint-trace';
import { TaintTraceTool } from './tools/taintTraceTool';

export class SecurityFeature extends Feature {
  static override readonly name = 'security';

  constructor() {
    super();
    this.contributeTool(ISecurityScanTool, SecurityScanTool, { name: 'SecurityScan', domain: 'security', requiredRuntimeCapabilities: ['fs'] });
    this.contributeTool(ISecretScanTool, SecretScanTool, { name: 'SecretScan', domain: 'security', requiredRuntimeCapabilities: ['fs'] });
    this.contributeTool(ITaintTraceTool, TaintTraceTool, { name: 'TaintTrace', domain: 'security', requiredRuntimeCapabilities: ['fs'] });
    this.contributeTool(IDepAuditTool, DepAuditTool, { name: 'DepAudit', domain: 'security', requiredRuntimeCapabilities: ['fs', 'process'] });
  }
}

registerFeature(SecurityFeature);
