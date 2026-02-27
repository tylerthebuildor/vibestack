<p align="center">
  <h1 align="center">🌈 Vibestack</h1>
  <p align="center">
    <strong>A project convention kit for AI-assisted development.</strong>
    <br />
    Drop a small set of opinionated files into any project to help both you and your AI agents work effectively as the codebase grows.
    <br />
    No dependencies. No lock-in. Just markdown and a shell script.
  </p>
  <p align="center">
    <a href="#-what-you-get">What You Get</a> · <a href="#-philosophy">Philosophy</a> · <a href="#-who-this-is-for">Who It's For</a>
  </p>
</p>

### Quick Start

```bash
curl -fsSL https://raw.githubusercontent.com/tylerthebuildor/vibestack/main/install.sh | bash
```

> Run from the root of your project. Existing files are never overwritten.

---

## 😤 The Problem

AI coding assistants are powerful on small projects. But as your codebase grows:

- 🧠 Context windows get overwhelmed and AI starts making bad decisions
- 🕳️ Institutional knowledge lives in your head, not in the repo
- 🤷 There's no shared convention for how humans and AI collaborate
- 🔄 Every project reinvents the same scaffolding for docs, tasks, and ops

Vibestack fixes this by giving your project a structure that scales — for both human and AI contributors.

## 📦 What You Get

Five files. That's it.

```
📋 CLAUDE.md              # Quick-start reference card for the project
✅ TODO.md                # Lightweight task tracker for human/AI collaboration
⚡ ops.sh                 # Single entry point for build, test, run, deploy
📚 docs/                  # Living documentation — your project's knowledge base
🧠 .claude/skills/        # Teach AI your project's conventions and workflows
```

### 📋 CLAUDE.md — The Project Card

A structured overview that tells any contributor (human or AI) what this project is, how it's built, and how to work in it. Fill in the blanks — tech stack, architecture, conventions — and every AI session starts with the right context instead of guessing.

### 📚 docs/ — Living Knowledge Base

A `docs/` folder with conventions for when and how to write documentation. Every doc serves three purposes: human reference, AI context, and publishable documentation. Includes a table of contents (`SUMMARY.md`) compatible with doc site generators.

> 💡 **The key insight:** documentation is context management. The docs you write today prevent your AI from re-discovering the same hard lessons tomorrow.

### ✅ TODO.md — Human/AI Task Tracking

A dead-simple task file with a protocol for parallel work. Humans add tasks, AI agents pick them up. Mark items pending before starting so parallel agents don't collide. No external tools needed.

### ⚡ ops.sh — One Script to Rule Them All

A single entry point for every project operation. Instead of remembering scattered commands, both humans and AI run `./ops.sh build`, `./ops.sh test`, `./ops.sh deploy prod`. Fill in your project-specific commands once, and every contributor knows how to operate the project.

### 🧠 .claude/skills/ — Teach AI Your Patterns

Two types of skills:

- 📖 **Reference skills** — Conventions your AI auto-loads as background knowledge (error handling patterns, API conventions, testing standards)
- 🔧 **Task skills** — Repeatable workflows triggered via slash commands (`/deploy-staging`, `/audit-module src/auth`)

Write a convention once, and your AI follows it forever. No more repeating yourself.

> 🖥️ Ships with a `cli-first` skill out of the box — teaches your AI to use platform CLIs (`aws`, `vercel`, `supabase`, `gh`, `stripe`, `gcloud`) and check `.env*` files for credentials instead of making raw API calls or asking you to open a web dashboard.

### 🛠️ extras/ — Dev Tools Installer (Optional)

Most platforms ship CLI tools these days, and installing them is one of the highest-leverage things you can do for AI-assisted development. An `aws` or `vercel` CLI gives your agent direct access to manage infrastructure, deployments, and services — no web dashboard required. The optional installer script gets them all set up in one pass.

## 🧭 Philosophy

🔒 **Opinionated but not intrusive.** Vibestack has strong opinions about project structure because that's the whole point — conventions only work when everyone follows them. But it's just a handful of files. No build step, no runtime dependency, no config format to learn. If you stop using it, delete the files and move on.

📐 **Conventions over configuration.** Instead of a complex settings file, Vibestack teaches patterns. Fill in the templates with your project's specifics and the conventions do the rest.

🤖 **AI agents are team members.** The files are written to be read by both humans and AI. Documentation, task tracking, and skills all assume your AI assistant is a first-class contributor that needs context to do good work.

🖥️ **CLI over dashboard.** Every major platform ships a CLI — AWS, Vercel, Supabase, Stripe, Google Cloud, GitHub. Installing them gives your AI agent superpowers: it can deploy, configure, monitor, and manage services directly from the terminal. A CLI command is worth a thousand dashboard clicks, and your AI can chain them into complex workflows you'd never bother automating by hand.

📈 **Scale through structure.** A weekend project doesn't need this. But the moment your project grows past what fits in a single prompt — multiple files, external integrations, deployment targets — structure is what keeps AI effective.

## 🎯 Who This Is For

Developers using AI coding assistants (Claude Code, Cursor, Copilot, etc.) who want their projects to stay manageable as they grow. Especially useful for:

- 🚀 Solo developers and small teams shipping fast with AI
- 🌱 Projects that have outgrown "just ask the AI to figure it out"
- 🤝 Teams that want consistent conventions without heavy tooling
- 🧠 Anyone tired of their AI forgetting context between sessions

---

<p align="center">
  <strong>Stop vibing into chaos. Start vibing with structure.</strong> ✨
  <br /><br />
  MIT License
</p>
