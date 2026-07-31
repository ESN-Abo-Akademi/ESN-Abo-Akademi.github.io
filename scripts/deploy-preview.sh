#!/usr/bin/env bash
# Rebuild the static site and publish it to the board preview at
# https://esn-abo-akademi.github.io/ (gh-pages branch of the org repo).
#
# This does NOT touch production (esnabo.org).
set -euo pipefail

cd "$(dirname "$0")/.."

npm run build:static
touch out/.nojekyll

# Build a gh-pages commit from out/ without touching the main working tree.
# mktemp -u: git needs the index path to not exist yet.
IDX=$(mktemp -u)
GIT_INDEX_FILE="$IDX" git --work-tree=out add -A .
TREE=$(GIT_INDEX_FILE="$IDX" git write-tree)
COMMIT=$(git commit-tree "$TREE" -m "Board preview build $(date +%Y-%m-%d)")
git branch -f gh-pages "$COMMIT"
rm -f "$IDX"

git push origin gh-pages --force-with-lease=gh-pages
echo
echo "Preview updated: https://esn-abo-akademi.github.io/ (allow ~1 min to build)"
