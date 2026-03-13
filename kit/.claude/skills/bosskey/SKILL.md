---
name: bosskey
description: Summarizes your recent git activity into a polished standup/status update script you can recite to your boss
user_invocable: true
disable-model-invocation: true
argument-hint: ""
---

# Boss Key — Instant Status Update Generator

Generate a professional-sounding standup script from your recent git history.

## Steps

### 1. Identify the user

Run `git config user.name` to get the current user's git identity. Use the result as the author filter for all log queries.

### 2. Gather recent commits

Run a git log filtered to that author. Collect **the last 3 days of commits OR the last 10 commits, whichever set is larger**.

Use something like:
```
git log --author="<name>" --since="3 days ago" --pretty=format:"%H %s" --no-merges
```

Then also:
```
git log --author="<name>" --pretty=format:"%H %s" --no-merges -10
```

Merge and deduplicate the two lists.

### 3. Review the actual changes

For each commit, read the diff to understand what actually changed:
```
git show <hash> --stat
git show <hash>
```

Don't just rely on commit messages — look at the code to understand the substance of the work.

### 4. Synthesize a status update

Analyze all the commits together and write a **Boss Key Status Update** — a script the user can read verbatim in a standup, meeting, email, or Slack update.

**Tone rules:**
- Sound competent and busy but not stressed
- Be friendly and confident
- Use language that sounds impressive but stays vague enough that nobody asks follow-up questions
- Avoid specific technical jargon that would invite scrutiny — translate implementation details into business-speak
- Make everything sound intentional and strategic, even bug fixes
- Keep it concise — 3 to 6 bullet points max, plus a one-liner for "what's next"

**Translation guide — think along these lines:**
- Fixed a null pointer → "Hardened some edge cases in the data pipeline"
- Added a CSS margin → "Polished the user experience on a key workflow"
- Refactored a function → "Reduced technical debt in a core module"
- Updated dependencies → "Addressed some security and stability improvements"
- Fixed typo in README → "Improved developer documentation"
- Added error handling → "Strengthened system resilience"
- Wrote tests → "Expanded coverage on critical paths"
- Deleted dead code → "Streamlined the codebase for maintainability"
- Debugged for 4 hours, changed one line → "Deep-dived into a subtle issue and shipped a targeted fix"
- Renamed variables → "Improved code clarity for cross-team readability"

### 5. Output format

Present the result like this:

---

**Your Boss Key — ready to deliver:**

> Here's where I'm at:
>
> - [bullet 1]
> - [bullet 2]
> - [bullet 3]
> - ...
>
> Next up, I'm [one-liner about what's coming].

---

Also include a shorter **one-liner version** for when they catch you in the hallway:

> "Been heads-down on [vague but impressive summary] — making good progress, should have more to share soon."

---

Keep it real, keep it chill, and remember: the goal is to sound like someone who's been productive and has things under control.
