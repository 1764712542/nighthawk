#!/usr/bin/env bash
# NightHawk CLI native installer.
#
# Downloads the platform binary from GitHub Releases, verifies the SHA-256
# checksum published alongside it, and installs into ~/.nighthawk/bin.
#
# Usage:
#   curl -fsSL https://cdn.jsdelivr.net/gh/AliceGoto/nighthawk@main/install.sh | bash
#
# Environment overrides:
#   NIGHTHAWK_INSTALL_REPO     GitHub <owner>/<repo> hosting releases (default AliceGoto/nighthawk)
#   NIGHTHAWK_INSTALL_VERSION  Release tag to install (default: latest)
#   NIGHTHAWK_INSTALL_DIR      Installation directory (default ~/.nighthawk/bin)
set -euo pipefail

REPO="${NIGHTHAWK_INSTALL_REPO:-AliceGoto/nighthawk}"
VERSION="${NIGHTHAWK_INSTALL_VERSION:-latest}"
INSTALL_DIR="${NIGHTHAWK_INSTALL_DIR:-"$HOME/.nighthawk/bin"}"
TIMEOUT_SECONDS="${NIGHTHAWK_INSTALL_TIMEOUT:-120}"

bold() { printf '\033[1m%s\033[0m\n' "$1"; }
step() { printf '  \033[1;32m→\033[0m %s\n' "$1"; }
fail() { printf '\033[1;31merror:\033[0m %s\n' "$1" >&2; exit 1; }

case "${VERSION}" in
  latest) RELEASE_BASE="https://github.com/${REPO}/releases/latest/download" ;;
  *)      RELEASE_BASE="https://github.com/${REPO}/releases/download/${VERSION}" ;;
esac

OS="$(uname -s)"
ARCH="$(uname -m)"
case "${OS}:${ARCH}" in
  Darwin:arm64)  TARGET="darwin-arm64" ;;
  Darwin:x86_64) TARGET="darwin-x64" ;;
  Linux:aarch64) TARGET="linux-arm64" ;;
  Linux:x86_64)  TARGET="linux-x64" ;;
  *) fail "unsupported platform ${OS}/${ARCH}. Install via npm instead: npm install -g @nighthawk/nighthawk" ;;
esac

bold "Installing NightHawk CLI (${TARGET}, ${VERSION})"

command -v curl >/dev/null 2>&1 || fail "curl is required (https://curl.se/download.html)"
command -v unzip >/dev/null 2>&1 || fail "unzip is required (install your OS unzip package)"

WORK_DIR="$(mktemp -d)"
trap 'rm -rf "${WORK_DIR}"' EXIT

step "Fetching release manifest"
if ! curl -fsSL --max-time "${TIMEOUT_SECONDS}" "${RELEASE_BASE}/manifest.json" -o "${WORK_DIR}/manifest.json"; then
  fail "failed to download manifest.json from ${RELEASE_BASE}. The release may not publish native assets yet — install via npm: npm install -g @nighthawk/nighthawk"
fi

CHECKSUM="$(node -e "
const m = JSON.parse(require('fs').readFileSync('${WORK_DIR}/manifest.json', 'utf8'));
const p = m.platforms && m.platforms['${TARGET}'];
if (!p) { console.error('unsupported target ${TARGET}'); process.exit(1); }
console.log(p.checksum);
" 2>/dev/null || true)"
if [ -z "${CHECKSUM}" ] && command -v python3 >/dev/null 2>&1; then
  CHECKSUM="$(python3 -c "
import json
m = json.load(open('${WORK_DIR}/manifest.json'))
p = m.get('platforms', {}).get('${TARGET}')
print(p['checksum'] if p else '')
")"
fi
[ -n "${CHECKSUM}" ] || fail "cannot read checksum for ${TARGET} from manifest.json (need node or python3)"

ARCHIVE="nighthawk-${TARGET}.zip"
step "Downloading ${ARCHIVE}"
curl -fSL --max-time "${TIMEOUT_SECONDS}" --progress-bar "${RELEASE_BASE}/${ARCHIVE}" -o "${WORK_DIR}/${ARCHIVE}"

step "Verifying SHA-256 checksum"
if command -v shasum >/dev/null 2>&1; then
  ACTUAL="$(shasum -a 256 "${WORK_DIR}/${ARCHIVE}" | cut -d' ' -f1)"
elif command -v sha256sum >/dev/null 2>&1; then
  ACTUAL="$(sha256sum "${WORK_DIR}/${ARCHIVE}" | cut -d' ' -f1)"
else
  fail "neither shasum nor sha256sum is available for checksum verification"
fi
if [ "${ACTUAL}" != "${CHECKSUM}" ]; then
  fail "checksum mismatch: expected ${CHECKSUM}, got ${ACTUAL}"
fi

step "Installing to ${INSTALL_DIR}"
mkdir -p "${INSTALL_DIR}"
unzip -oq "${WORK_DIR}/${ARCHIVE}" -d "${WORK_DIR}/extract"
if [ ! -f "${WORK_DIR}/extract/nighthawk" ]; then
  fail "archive does not contain a nighthawk binary"
fi
mv "${WORK_DIR}/extract/nighthawk" "${INSTALL_DIR}/nighthawk"
chmod +x "${INSTALL_DIR}/nighthawk"

# Best-effort: clear macOS quarantine so unsigned/transition builds launch directly.
if [ "${OS}" = "Darwin" ] && command -v xattr >/dev/null 2>&1; then
  xattr -d com.apple.quarantine "${INSTALL_DIR}/nighthawk" >/dev/null 2>&1 || true
fi

if ! command -v nighthawk >/dev/null 2>&1 && ! printf '%s' ":${INSTALL_DIR}:" | grep -q ":${INSTALL_DIR}:" <<<":${PATH}:"; then
  SHELL_NAME="$(basename "${SHELL:-/bin/bash}")"
  case "${SHELL_NAME}" in
    fish) PROFILE_HINT="set -U fish_user_paths ${INSTALL_DIR} \$fish_user_paths" ;;
    *)    PROFILE_HINT="export PATH=\"${INSTALL_DIR}:\$PATH\"" ;;
  esac
  bold "Add NightHawk to your PATH:"
  printf '  %s\n' "${PROFILE_HINT}"
fi

step "Verifying installation"
"${INSTALL_DIR}/nighthawk" --version

bold "NightHawk CLI installed successfully."
printf '  Run \033[1mnighthawk\033[0m in a project directory to start.\n'
