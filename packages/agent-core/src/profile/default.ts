import agentYaml from './default/agent.yaml?raw';
import coderYaml from './default/coder.yaml?raw';
import exploreYaml from './default/explore.yaml?raw';
import initMd from './default/init.md?raw';
import pentestYaml from './default/pentest.yaml?raw';
import planYaml from './default/plan.yaml?raw';
import reviewYaml from './default/review.yaml?raw';
import securityAuditYaml from './default/security-audit.yaml?raw';
import systemMd from './default/system.md?raw';
import { loadAgentProfilesFromSources } from './load';

// Keyed by the source path the profile loader expects: profile YAML files
// plus any file referenced through `systemPromptPath`.
const PROFILE_SOURCES: Record<string, string> = {
  'profile/default/agent.yaml': agentYaml,
  'profile/default/coder.yaml': coderYaml,
  'profile/default/explore.yaml': exploreYaml,
  'profile/default/pentest.yaml': pentestYaml,
  'profile/default/plan.yaml': planYaml,
  'profile/default/review.yaml': reviewYaml,
  'profile/default/security-audit.yaml': securityAuditYaml,
  'profile/default/system.md': systemMd,
};

export const DEFAULT_INIT_PROMPT = initMd;

export const DEFAULT_AGENT_PROFILES = loadAgentProfilesFromSources(
  [
    'agent.yaml',
    'coder.yaml',
    'explore.yaml',
    'pentest.yaml',
    'plan.yaml',
    'review.yaml',
    'security-audit.yaml',
  ].map((file) => `profile/default/${file}`),
  PROFILE_SOURCES,
);
