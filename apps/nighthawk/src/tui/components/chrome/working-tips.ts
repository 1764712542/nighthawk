import { WORKING_TIPS, WORKING_WITS, type ToolbarTip } from '#/tui/constant/tips';

import { buildWeightedTips } from './footer';

export { WORKING_TIPS };

const TIP_ROTATE_INTERVAL_MS = 10_000;

const WORKING_TIP_ROTATION = buildWeightedTips(WORKING_TIPS);
const WORKING_WIT_POOL = [...WORKING_WITS];

export function currentWorkingTip(now = Date.now()): ToolbarTip | undefined {
  if (WORKING_TIP_ROTATION.length === 0) return undefined;
  const index = Math.floor(now / TIP_ROTATE_INTERVAL_MS) % WORKING_TIP_ROTATION.length;
  return WORKING_TIP_ROTATION[index];
}

/**
 * Pick a random tip from the weighted working-tip rotation.
 * If `excludeText` is provided and there are other tips available, avoid
 * returning the same text twice in a row.
 */
export function pickRandomWorkingTip(excludeText?: string): ToolbarTip | undefined {
  if (WORKING_TIP_ROTATION.length === 0) return undefined;
  const candidates =
    excludeText === undefined || WORKING_TIP_ROTATION.length === 1
      ? WORKING_TIP_ROTATION
      : WORKING_TIP_ROTATION.filter((t) => t.text !== excludeText);
  const pool = candidates.length > 0 ? candidates : WORKING_TIP_ROTATION;
  const index = Math.floor(Math.random() * pool.length);
  return pool[index];
}

/**
 * Pick a random playful Chinese wit for the loading spinner, avoiding an
 * immediate repeat of `excludeText` when other options exist.
 */
export function pickRandomWorkingWit(excludeText?: string): ToolbarTip | undefined {
  if (WORKING_WIT_POOL.length === 0) return undefined;
  const candidates =
    excludeText === undefined || WORKING_WIT_POOL.length === 1
      ? WORKING_WIT_POOL
      : WORKING_WIT_POOL.filter((t) => t.text !== excludeText);
  const pool = candidates.length > 0 ? candidates : WORKING_WIT_POOL;
  const index = Math.floor(Math.random() * pool.length);
  return pool[index];
}
