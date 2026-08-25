import type { PluginSummary } from '@nighthawk/nighthawk-sdk';
import {
  NIGHTHAWK_REGION_PROFILES,
  nighthawkRegionProfile,
  type NighthawkRegion,
} from '@nighthawk/nighthawk-oauth';

export const OFFICIAL_BADGE = 'official';
export const CURATED_BADGE = 'curated';
export const THIRD_PARTY_BADGE = 'third-party';

export type PluginTrustLabel = 'official' | 'curated' | 'third-party';

// Trusted plugin hosts are derived from the region profiles' `cdnBase` — the
// per-region marketplace CDN — instead of a hardcoded host list: each region
// contributes its default host plus the `NIGHTHAWK_CDN_BASE` override when
// set. Both regions' hosts stay trusted regardless of the current region — a
// zip served by either deployment is still an official build. The content-CDN
// host is the marketplace host with its leading `code.` label swapped for
// `cdn.`; an override host without that label serves both roles.
const CODE_CDN_HOSTS = new Set<string>();
const CONTENT_CDN_HOSTS = new Set<string>();
for (const region of Object.keys(NIGHTHAWK_REGION_PROFILES) as NighthawkRegion[]) {
  const cdnBases = new Set([
    NIGHTHAWK_REGION_PROFILES[region].cdnBase,
    nighthawkRegionProfile(region).cdnBase,
  ]);
  for (const cdnBase of cdnBases) {
    const host = hostFromUrl(cdnBase);
    if (host === undefined) continue;
    CODE_CDN_HOSTS.add(host);
    CONTENT_CDN_HOSTS.add(host.replace(/^code\./, 'cdn.'));
  }
}

/**
 * Human-readable provenance label for a plugin, suitable for inline display
 * in `/plugins` overviews and lists.
 *
 * - github source → `github <owner>/<repo>@<ref>`
 * - zip-url with parseable URL → `via <host[:port]>`
 * - everything else → raw source kind (`local-path`, `zip-url`)
 */
export function formatPluginSourceLabel(plugin: PluginSummary): string {
  if (plugin.source === 'github' && plugin.github !== undefined) {
    return `github ${plugin.github.owner}/${plugin.github.repo}@${plugin.github.ref.value}`;
  }
  if (plugin.source === 'zip-url' && plugin.originalSource !== undefined) {
    const host = hostFromUrl(plugin.originalSource);
    if (host !== undefined) return `via ${host}`;
  }
  return plugin.source;
}

/**
 * Returns one of three trust labels for a plugin. Only NightHawk-hosted plugin zip
 * paths receive official or curated badges. Everything else is third-party.
 */
export function pluginTrustLabel(plugin: PluginSummary): PluginTrustLabel {
  if (plugin.source !== 'zip-url' || plugin.originalSource === undefined) {
    return 'third-party';
  }
  try {
    const url = new URL(plugin.originalSource);
    if (isOfficialPluginUrl(url)) {
      return 'official';
    }
    if (
      url.protocol === 'https:' &&
      CODE_CDN_HOSTS.has(url.hostname) &&
      url.pathname.startsWith('/nighthawk/plugins/curated/')
    ) {
      return 'curated';
    }
    return 'third-party';
  } catch {
    return 'third-party';
  }
}

/**
 * Returns true only for install sources that are unambiguously NightHawk-built
 * official plugins — an https URL under the official NightHawk CDN plugin path.
 * Everything else (local paths, GitHub repos, curated or third-party URLs)
 * is treated as unofficial and should be confirmed before install.
 */
export function isOfficialPluginSource(source: string): boolean {
  const trimmed = source.trim();
  if (!trimmed.startsWith('https://')) return false;
  try {
    return isOfficialPluginUrl(new URL(trimmed));
  } catch {
    return false;
  }
}

/**
 * Returns true when an installed plugin provably came from a trusted official
 * source — a zip download under the official CDN plugin path. Local paths,
 * GitHub repos, and third-party URLs do not qualify, even when their manifest
 * id matches an official plugin.
 */
export function isOfficialPluginInstall(plugin: PluginSummary): boolean {
  return (
    plugin.source === 'zip-url' &&
    plugin.originalSource !== undefined &&
    isOfficialPluginSource(plugin.originalSource)
  );
}

function isOfficialPluginUrl(url: URL): boolean {
  if (url.protocol !== 'https:') return false;
  return (
    (CODE_CDN_HOSTS.has(url.hostname) &&
      url.pathname.startsWith('/nighthawk/plugins/official/')) ||
    (CONTENT_CDN_HOSTS.has(url.hostname) &&
      (url.pathname.startsWith('/nighthawk-computer-use/') ||
        url.pathname.startsWith('/nighthawk-computer-use-windows/')))
  );
}

function hostFromUrl(raw: string): string | undefined {
  try {
    const url = new URL(raw);
    if (url.port.length > 0) return `${url.hostname}:${url.port}`;
    return url.hostname;
  } catch {
    return undefined;
  }
}
