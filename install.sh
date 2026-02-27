#!/usr/bin/env bash
# Vibestack Installer
# Adds Vibestack convention files to the current project.
#
# Usage:
#   curl -fsSL https://raw.githubusercontent.com/tylerthebuildor/vibestack/main/install.sh | bash

set -euo pipefail

REPO="https://raw.githubusercontent.com/tylerthebuildor/vibestack/main/kit"

CYAN="\033[0;36m"
GREEN="\033[0;32m"
YELLOW="\033[1;33m"
RESET="\033[0m"

echo -e "${CYAN}🌈 Vibestack Installer${RESET}"
echo ""

# Files to install (relative paths from kit/)
FILES=(
  "CLAUDE.md"
  "TODO.md"
  "ops.sh"
  "docs/README.md"
  "docs/SUMMARY.md"
  "docs/index.md"
  "docs/skills-and-commands.md"
  ".claude/skills/vibestack/SKILL.md"
  ".claude/skills/cli-first/SKILL.md"
  ".claude/skills/example-convention/SKILL.md"
  ".claude/skills/example-task/SKILL.md"
)

installed=0
skipped=0

for file in "${FILES[@]}"; do
  dir=$(dirname "$file")

  if [[ -f "$file" ]]; then
    echo -e "  ${YELLOW}skip${RESET}  $file (already exists)"
    ((skipped++))
    continue
  fi

  mkdir -p "$dir"
  if curl -fsSL "$REPO/$file" -o "$file"; then
    echo -e "  ${GREEN}add${RESET}   $file"
    ((installed++))
  else
    echo -e "  ${YELLOW}fail${RESET}  $file"
  fi
done

# Make ops.sh executable
[[ -f "ops.sh" ]] && chmod +x ops.sh

echo ""
echo -e "${GREEN}Done!${RESET} Added $installed files, skipped $skipped existing."

if [[ $skipped -gt 0 ]]; then
  echo -e "${YELLOW}Tip:${RESET} Skipped files already exist. Delete them first if you want a fresh copy."
fi

echo ""
echo "Next steps:"
echo "  1. Fill in CLAUDE.md with your project details"
echo "  2. Add your build/test/deploy commands to ops.sh"
echo "  3. Start writing docs in docs/"
echo ""
