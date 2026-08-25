import type { NighthawkErrorCode } from './codes';

export interface NighthawkErrorOptions {
  /** JSON-serializable structured details. */
  readonly details?: Record<string, unknown>;
  /** Original error or value. Local-only; never serialized to the wire. */
  readonly cause?: unknown;
}

/**
 * The single NightHawk error class.
 *
 * Discrimination is always by `code`. Cross-process consumers receive
 * `NighthawkErrorPayload` and must branch on `code` rather than class identity.
 */
export class NighthawkError extends Error {
  readonly code: NighthawkErrorCode;
  readonly details?: Record<string, unknown>;
  override readonly cause?: unknown;

  constructor(code: NighthawkErrorCode, message: string, options: NighthawkErrorOptions = {}) {
    super(message);
    this.name = 'NighthawkError';
    this.code = code;
    this.details = options.details;
    this.cause = options.cause;
  }
}
