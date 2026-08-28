# NightHawk CLI native installer for Windows.
#
# Downloads the platform binary from GitHub Releases, verifies the SHA-256
# checksum published alongside it, and installs into %USERPROFILE%\.nighthawk\bin.
#
# Usage:
#   irm https://cdn.jsdelivr.net/gh/nighthawk-dev/nighthawk@main/install.ps1 | iex
#
# Environment overrides:
#   NIGHTHAWK_INSTALL_REPO     GitHub <owner>/<repo> hosting releases (default nighthawk-dev/nighthawk)
#   NIGHTHAWK_INSTALL_VERSION  Release tag to install (default: latest)
#   NIGHTHAWK_INSTALL_DIR      Installation directory (default %USERPROFILE%\.nighthawk\bin)
#Requires -Version 5.1

$ErrorActionPreference = 'Stop'
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

$Repo = if ($env:NIGHTHAWK_INSTALL_REPO) { $env:NIGHTHAWK_INSTALL_REPO } else { 'nighthawk-dev/nighthawk' }
$Version = if ($env:NIGHTHAWK_INSTALL_VERSION) { $env:NIGHTHAWK_INSTALL_VERSION } else { 'latest' }
$InstallDir = if ($env:NIGHTHAWK_INSTALL_DIR) { $env:NIGHTHAWK_INSTALL_DIR } else { Join-Path $env:USERPROFILE '.nighthawk\bin' }

if ($Version -eq 'latest') {
  $ReleaseBase = "https://github.com/$Repo/releases/latest/download"
} else {
  $ReleaseBase = "https://github.com/$Repo/releases/download/$Version"
}

switch ($env:PROCESSOR_ARCHITECTURE) {
  'ARM64' { $Target = 'win32-arm64' }
  default { $Target = 'win32-x64' }
}

Write-Host "Installing NightHawk CLI ($Target, $Version)" -ForegroundColor Cyan

try {
  Write-Host '  -> Fetching release manifest'
  $Manifest = Invoke-RestMethod -Uri "$ReleaseBase/manifest.json" -TimeoutSec 120
} catch {
  Write-Host "error: failed to download manifest.json from $ReleaseBase." -ForegroundColor Red
  Write-Host 'The release may not publish native assets yet — install via npm instead:' -ForegroundColor Yellow
  Write-Host '  npm install -g @nighthawk/nighthawk'
  exit 1
}

$Platform = $Manifest.platforms.$Target
if (-not $Platform) {
  Write-Host "error: unsupported target $Target. Install via npm instead:" -ForegroundColor Red
  Write-Host '  npm install -g @nighthawk/nighthawk'
  exit 1
}

$WorkDir = Join-Path ([IO.Path]::GetTempPath()) ("nighthawk-install-" + [Guid]::NewGuid().ToString('N'))
New-Item -ItemType Directory -Path $WorkDir -Force | Out-Null

try {
  $Archive = "nighthawk-$Target.zip"
  Write-Host "  -> Downloading $Archive"
  Invoke-WebRequest -Uri "$ReleaseBase/$Archive" -OutFile (Join-Path $WorkDir $Archive) -TimeoutSec 300

  Write-Host '  -> Verifying SHA-256 checksum'
  $Actual = (Get-FileHash -Algorithm SHA256 -Path (Join-Path $WorkDir $Archive)).Hash.ToLowerInvariant()
  if ($Actual -ne $Platform.checksum.ToLowerInvariant()) {
    Write-Host "error: checksum mismatch: expected $($Platform.checksum), got $Actual" -ForegroundColor Red
    exit 1
  }

  Write-Host "  -> Installing to $InstallDir"
  New-Item -ItemType Directory -Path $InstallDir -Force | Out-Null
  Expand-Archive -Path (Join-Path $WorkDir $Archive) -DestinationPath (Join-Path $WorkDir 'extract') -Force
  Move-Item -Path (Join-Path $WorkDir 'extract\nighthawk.exe') -Destination (Join-Path $InstallDir 'nighthawk.exe') -Force

  $UserPath = [Environment]::GetEnvironmentVariable('Path', 'User')
  if ($UserPath -notlike "*$InstallDir*") {
    [Environment]::SetEnvironmentVariable('Path', "$UserPath;$InstallDir", 'User')
    Write-Host "  -> Added $InstallDir to your user PATH (restart your terminal to pick it up)" -ForegroundColor Yellow
    $env:Path += ";$InstallDir"
  }

  Write-Host '  -> Verifying installation'
  & (Join-Path $InstallDir 'nighthawk.exe') --version

  Write-Host 'NightHawk CLI installed successfully.' -ForegroundColor Green
  Write-Host '  Run nighthawk in a project directory to start.'
} finally {
  Remove-Item -Path $WorkDir -Recurse -Force -ErrorAction SilentlyContinue
}
