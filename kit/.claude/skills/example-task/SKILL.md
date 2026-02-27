---
name: example-task
description: Example task skill — a repeatable workflow triggered via /example-task. Replace with your own.
disable-model-invocation: true
argument-hint: [module-path]
allowed-tools: Read, Grep, Glob
---

# Example Task: Audit a Module

<!-- DELETE THIS FILE and create your own task skills.
     This is a TASK skill — triggered by typing /example-task.
     disable-model-invocation: true means only YOU can trigger it.
     allowed-tools pre-approves specific tools so Claude doesn't ask each time. -->

Audit the module at `$ARGUMENTS`:

## Steps

1. **Read the module** — understand its public API and internal structure
2. **Check test coverage** — look for test files and test functions
3. **Identify issues:**
   - Missing error handling
   - Public functions missing doc comments
   - Dead code or unused imports
   - Functions longer than 50 lines
4. **Report findings** — summarize what you found and suggest fixes

## Output Format

```
## Audit: <module path>

### Summary
<1-2 sentence overview>

### Issues Found
- [ ] Issue description (file:line)

### Recommendations
- Bullet list of suggested improvements
```
