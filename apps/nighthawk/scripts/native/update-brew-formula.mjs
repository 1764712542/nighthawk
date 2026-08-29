/**
 * Generates a Homebrew formula (nighthawk.rb) from a native release manifest.
 *
 * The formula lives in the `homebrew-nighthawk` tap repository so users can
 * install NightHawk with `brew install AliceGoto/nighthawk/nighthawk`.
 * Homebrew requires a pinned sha256 per platform, so the formula must be
 * regenerated on every release from the freshly published manifest.json.
 *
 * Usage:
 *   node update-brew-formula.mjs <manifest.json> [--out nighthawk.rb]
 *
 * Reads the manifest produced by produce-manifest.mjs (version + per-platform
 * zip sha256) and writes a formula covering the Homebrew-supported targets:
 * darwin-arm64 / darwin-x64 / linux-arm64 / linux-x64. win32 targets are
 * served by install.ps1 instead (Homebrew does not run on Windows).
 */

import { readFile, writeFile } from 'node:fs/promises';

const args = process.argv.slice(2);
const manifestArg = args[0];
const outArg = args.indexOf('--out');
const outPath = outArg >= 0 ? args[outArg + 1] : undefined;

if (!manifestArg) {
  console.error('Usage: update-brew-formula.mjs <manifest.json> [--out nighthawk.rb]');
  process.exit(1);
}

const manifest = JSON.parse(await readFile(manifestArg, 'utf8'));
const { version, platforms } = manifest;
if (!version || !platforms || typeof platforms !== 'object') {
  console.error('Invalid manifest: missing version or platforms.');
  process.exit(1);
}

const TARGETS = ['darwin-arm64', 'darwin-x64', 'linux-arm64', 'linux-x64'];

function requireChecksum(target) {
  const entry = platforms[target];
  if (!entry || !entry.checksum) {
    console.error(`Missing checksum for ${target} in manifest (win32-only release?)`);
    process.exit(1);
  }
  return entry.checksum;
}

const sha = {
  darwinArm64: requireChecksum('darwin-arm64'),
  darwinX64: requireChecksum('darwin-x64'),
  linuxArm64: requireChecksum('linux-arm64'),
  linuxX64: requireChecksum('linux-x64'),
};

const formula = `class Nighthawk < Formula
  desc "Security-first AI coding agent for the terminal"
  homepage "https://github.com/AliceGoto/nighthawk"
  version "${version}"
  license "MIT"

  on_macos do
    if Hardware::CPU.arm?
      url "https://github.com/AliceGoto/nighthawk/releases/download/v#{version}/nighthawk-darwin-arm64.zip"
      sha256 "${sha.darwinArm64}"
    else
      url "https://github.com/AliceGoto/nighthawk/releases/download/v#{version}/nighthawk-darwin-x64.zip"
      sha256 "${sha.darwinX64}"
    end
  end

  on_linux do
    if Hardware::CPU.arm?
      url "https://github.com/AliceGoto/nighthawk/releases/download/v#{version}/nighthawk-linux-arm64.zip"
      sha256 "${sha.linuxArm64}"
    else
      url "https://github.com/AliceGoto/nighthawk/releases/download/v#{version}/nighthawk-linux-x64.zip"
      sha256 "${sha.linuxX64}"
    end
  end

  def install
    bin.install "nighthawk"
  end

  test do
    assert_match "nighthawk", shell_output("#{bin}/nighthawk --version")
  end
end
`;

if (outPath) {
  await writeFile(outPath, formula);
  console.log(`Wrote ${outPath}`);
} else {
  process.stdout.write(formula);
}
console.log(`Formula version: ${version}; targets: ${TARGETS.join(', ')}`);
