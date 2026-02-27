---
name: vibestack
description: Project workflow conventions for docs, TODO tracking, ops.sh, and skills. Auto-loads when working with any of these systems.
user-invocable: false
---

# Vibestack Conventions

This project follows four workflow conventions for human/AI collaboration.

## Docs

The `docs/` folder is the single source of truth for institutional knowledge. See `docs/README.md` for the full convention.

**Before starting work on an unfamiliar area, check `docs/` for existing context.** When you learn something significant during a task, write it up or update an existing doc. Don't wait to be asked.

- Markdown files organized by topic in subdirectories
- `docs/SUMMARY.md` is the table of contents — update it when adding/removing docs
- Write as if explaining to a new team member who may be an AI agent

## TODO

`TODO.md` is a lightweight task tracker for human/AI collaboration.

- Mark items `[~]` (pending) before starting so parallel agents don't collide
- Mark items `[x]` when done
- Start from the top unless told otherwise

## ops.sh

`ops.sh` is the single entry point for all project operations. Run `./ops.sh help` for the full command list.

## Skills

Check `.claude/skills/` for project-specific conventions and reusable slash commands. See `docs/skills-and-commands.md` for how to create new ones.
