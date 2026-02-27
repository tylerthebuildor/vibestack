# Extras

Optional add-ons that complement the core Vibestack conventions.

## Dev Tools Installer

Most platforms ship CLI tools — AWS, Vercel, Supabase, Google Cloud, Stripe, GitHub. Installing them gives your AI agent direct access to manage infrastructure, deployments, databases, and services from the terminal. No clicking through web dashboards, no searching through settings menus. The CLIs are more powerful than most connectors and plugins, and they work across every project on your machine.

This script gets them all set up in one pass:

```bash
./extras/install-dev-tools.sh
```

Every tool is optional — the script prompts before installing anything.

Not a fan of scripts? See [manual-dev-tools.md](manual-dev-tools.md) for copy-paste commands.

## What's Here

| File | Description |
|------|-------------|
| `install-dev-tools.sh` | Interactive installer for dev CLIs |
| `manual-dev-tools.md` | Manual installation commands |
