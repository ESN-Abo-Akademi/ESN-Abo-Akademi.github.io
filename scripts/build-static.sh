#!/usr/bin/env bash
# Build the static esnabo.org package (reproduces the 2026-07-22 deployment).
#
# The Payload CMS admin/API routes cannot be statically exported, so they are
# moved aside for the duration of the build and always restored afterwards.
#
# Output: out/ (with .htaccess), ready to upload to the web root over FTPS.
set -euo pipefail

cd "$(dirname "$0")/.."

PAYLOAD_DIR="app/(payload)"
PAYLOAD_HIDDEN=".payload-excluded-during-static-build"

restore() {
  if [ -d "$PAYLOAD_HIDDEN" ]; then
    mv "$PAYLOAD_HIDDEN" "$PAYLOAD_DIR"
  fi
}
trap restore EXIT

if [ -d "$PAYLOAD_HIDDEN" ]; then
  echo "Restoring leftover $PAYLOAD_HIDDEN from a previous failed run" >&2
  restore
fi

mv "$PAYLOAD_DIR" "$PAYLOAD_HIDDEN"

rm -rf .next out
STATIC_EXPORT=1 npm run build

cp deploy/htaccess out/.htaccess

echo
echo "Static package ready in: $(pwd)/out"
echo "Routes:"
find out -name index.html | sed 's|^out||; s|index.html$||' | sort
