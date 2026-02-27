#!/usr/bin/env bash
#
# Vibestack Dev Tools Installer (Optional)
#
# Sets up a modern macOS developer environment with common CLIs.
# This is NOT required for Vibestack — it's a convenience script
# for getting a new machine ready for AI-assisted development.
#
# Usage: ./extras/install-dev-tools.sh

set -euo pipefail

CYAN="\033[0;36m"
GREEN="\033[0;32m"
YELLOW="\033[1;33m"
RED="\033[0;31m"
RESET="\033[0m"

echo -e "${CYAN}Vibestack Dev Tools Installer${RESET}"
echo "Sets up common developer CLIs on macOS."
echo "Each tool is optional — answer the prompts to pick what you need."
echo ""

# ── Helpers ──────────────────────────────────────────────

ask() {
  local prompt="$1"
  local default="${2:-y}"
  local choice

  if [[ "$default" == "y" ]]; then
    read -rp "$prompt [Y/n] " choice
    choice=${choice:-y}
  else
    read -rp "$prompt [y/N] " choice
    choice=${choice:-n}
  fi

  [[ "$choice" =~ ^[Yy]$ ]]
}

reload_shell() {
  if [[ -n "${ZSH_VERSION:-}" ]]; then
    source ~/.zshrc 2>/dev/null || true
  elif [[ -n "${BASH_VERSION:-}" ]]; then
    source ~/.bash_profile 2>/dev/null || source ~/.bashrc 2>/dev/null || true
  fi
  [ -s "$HOME/.nvm/nvm.sh" ] && \. "$HOME/.nvm/nvm.sh" --no-use
}

installed=()
skipped=()

track() {
  if [[ "$2" == "installed" ]]; then
    installed+=("$1")
  else
    skipped+=("$1")
  fi
}

# ── 1. Homebrew ──────────────────────────────────────────

echo -e "${CYAN}1/7 Homebrew${RESET}"
if command -v brew >/dev/null 2>&1; then
  echo "  Already installed."
  brew update >/dev/null 2>&1 || true
else
  if ask "  Install Homebrew?"; then
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    track "Homebrew" "installed"
  else
    echo -e "  ${YELLOW}Skipped — some tools below require Homebrew.${RESET}"
    track "Homebrew" "skipped"
  fi
fi
reload_shell

# ── 2. NVM + Node.js LTS ────────────────────────────────

echo -e "\n${CYAN}2/7 NVM & Node.js LTS${RESET}"
NVM_DIR="$HOME/.nvm"
if [ -s "$NVM_DIR/nvm.sh" ]; then
  \. "$NVM_DIR/nvm.sh" --no-use
  echo "  NVM already installed."
else
  if ask "  Install NVM + Node.js LTS?"; then
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash
    \. "$NVM_DIR/nvm.sh"
    track "NVM" "installed"
  else
    track "NVM" "skipped"
  fi
fi

if command -v nvm >/dev/null 2>&1; then
  if ! command -v node >/dev/null 2>&1 || ask "  Install/upgrade to latest LTS Node?"; then
    nvm install --lts --latest-npm
    nvm use --lts
    nvm alias default lts/*
    track "Node.js LTS" "installed"
  else
    track "Node.js LTS" "skipped"
  fi
fi
reload_shell

# ── 3. PNPM ─────────────────────────────────────────────

echo -e "\n${CYAN}3/7 PNPM${RESET}"
if command -v pnpm >/dev/null 2>&1; then
  echo "  Already installed ($(pnpm --version))."
else
  if command -v corepack >/dev/null 2>&1 && ask "  Enable PNPM via corepack?"; then
    corepack enable pnpm
    corepack prepare pnpm@latest --activate
    track "PNPM" "installed"
  else
    track "PNPM" "skipped"
  fi
fi

# ── 4. Deno ──────────────────────────────────────────────

echo -e "\n${CYAN}4/7 Deno${RESET}"
if command -v deno >/dev/null 2>&1; then
  echo "  Already installed."
else
  if ask "  Install Deno?"; then
    curl -fsSL https://deno.land/install.sh | sh
    track "Deno" "installed"
  else
    track "Deno" "skipped"
  fi
fi

# ── 5. Rust ──────────────────────────────────────────────

echo -e "\n${CYAN}5/7 Rust${RESET}"
if command -v rustc >/dev/null 2>&1; then
  echo "  Already installed."
else
  if ask "  Install Rust (via rustup)?"; then
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
    track "Rust" "installed"
  else
    track "Rust" "skipped"
  fi
fi
reload_shell

# ── 6. Developer CLIs ────────────────────────────────────

echo -e "\n${CYAN}6/7 Developer CLIs${RESET}"

for tool_info in \
  "vercel:npm install -g vercel:Vercel CLI" \
  "supabase:brew install supabase/tap/supabase:Supabase CLI" \
  "gh:brew install gh:GitHub CLI" \
  "stripe:brew install stripe/stripe-cli/stripe:Stripe CLI"; do

  IFS=: read -r cmd install_cmd label <<< "$tool_info"

  if command -v "$cmd" >/dev/null 2>&1; then
    echo "  $label — already installed."
  elif ask "  Install $label?"; then
    eval "$install_cmd"
    track "$label" "installed"
  else
    track "$label" "skipped"
  fi
done

# AWS CLI (different install method)
if command -v aws >/dev/null 2>&1; then
  echo "  AWS CLI — already installed."
else
  if ask "  Install AWS CLI v2?"; then
    curl -s "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "/tmp/AWSCLIV2.pkg"
    sudo installer -pkg /tmp/AWSCLIV2.pkg -target /
    rm -f /tmp/AWSCLIV2.pkg
    track "AWS CLI" "installed"
  else
    track "AWS CLI" "skipped"
  fi
fi

reload_shell

# ── 7. Service Logins (optional) ─────────────────────────

echo -e "\n${CYAN}7/7 Service Logins (optional)${RESET}"
echo "You can always do these later."

for tool_info in \
  "vercel:vercel login:Vercel" \
  "supabase:supabase login:Supabase" \
  "gh:gh auth login:GitHub" \
  "aws:aws configure:AWS" \
  "stripe:stripe login:Stripe"; do

  IFS=: read -r cmd login_cmd label <<< "$tool_info"

  if command -v "$cmd" >/dev/null 2>&1 && ask "  Log in to $label?"; then
    eval "$login_cmd"
  fi
done

# ── Summary ──────────────────────────────────────────────

echo ""
echo -e "${GREEN}Done!${RESET}"

if [[ ${#installed[@]} -gt 0 ]]; then
  echo -e "\nInstalled:"
  for item in "${installed[@]}"; do
    echo "  + $item"
  done
fi

if [[ ${#skipped[@]} -gt 0 ]]; then
  echo -e "\nSkipped:"
  for item in "${skipped[@]}"; do
    echo -e "  ${YELLOW}- $item${RESET}"
  done
fi

echo ""
echo "Restart your terminal to ensure all tools are available."
