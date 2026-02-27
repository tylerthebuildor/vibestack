---
name: example-convention
description: Example reference skill — teaches Claude a project convention. Replace with your own.
user-invocable: false
---

# Example Convention: Structured Error Handling

<!-- DELETE THIS FILE and create your own reference skills.
     This is a REFERENCE skill — Claude auto-loads it when the description matches.
     Set user-invocable: false since there's no slash command. -->

## Pattern

All errors use structured error types, not string messages.

```rust
// Good
return Err(AppError::NotFound { resource: "user", id });

// Bad
return Err(anyhow!("user not found"));
```

## Rules

- Every module defines its own error enum in `errors.rs`
- Errors implement `Into<AppError>` for the top-level type
- Never use `.unwrap()` outside of tests
- Log errors at the boundary where they're handled, not where they're created

## Why

Structured errors let us:
- Match on error types in handlers to return correct HTTP status codes
- Aggregate error metrics by type in monitoring
- Write tests that assert specific error variants
