# Manual Dev Tools Installation

If you prefer to install tools individually instead of using the installer script.

## Runtimes & Package Managers

```bash
# NVM + Node.js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash
nvm install --lts

# PNPM (via corepack, included with Node 16+)
corepack enable pnpm

# Deno
curl -fsSL https://deno.land/install.sh | sh

# Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

## Developer CLIs

```bash
# Claude Code
npm install -g @anthropic-ai/claude-code

# Vercel
npm install -g vercel

# Supabase
brew install supabase/tap/supabase

# GitHub CLI
brew install gh

# AWS CLI v2
curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg"
sudo installer -pkg AWSCLIV2.pkg -target /
rm AWSCLIV2.pkg

# Stripe
brew install stripe/stripe-cli/stripe

# Google Cloud
curl -O https://dl.google.com/dl/cloudsdk/channels/rapid/downloads/google-cloud-cli-darwin-arm.tar.gz
tar -xf google-cloud-cli-darwin-arm.tar.gz
./google-cloud-sdk/install.sh
```

## GUI Apps

- [Claude Desktop](https://claude.ai/download) — desktop AI assistant
- [VS Code](https://code.visualstudio.com/) — editor (extensions: Claude, rust-analyzer, ESLint, Prettier)
- [Ghostty](https://ghostty.org/) — terminal emulator
