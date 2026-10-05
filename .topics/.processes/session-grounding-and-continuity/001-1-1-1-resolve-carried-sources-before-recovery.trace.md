# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.topic.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/topic/tiinex.topic.v1.schema.md)
  - Created At: 2026-10-05 19:24:21
  - Trace: [001-1-1-qualify-required-material-and-applicable-guidance.trace.md](001-1-1-qualify-required-material-and-applicable-guidance.trace.md)
  - Origin:
    - [relative](001-1-1-qualify-required-material-and-applicable-guidance.trace.md)
- Current
  - Current Schema: [tiinex.topic.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/topic/tiinex.topic.v1.schema.md)
  - Created At: 2026-10-05 19:24:23
  - Authors: Anchor
  - Why: Make source-preference and recovery escalation an independently visible grounding step.
  - Summary: Prefer exact carried qualified material before immutable or live external recovery.
  - Status: ready/local

---

# Resolve Carried Sources Before Recovery

## Step Purpose

Resolve required material from the strongest qualified carried source before escalating to external recovery.

## Procedure

- Prefer carried qualified Workspace material, then exact carrier-local/cache representations, then explicitly composed bootstrap/content-source material.
- Use immutable or live external recovery only when the earlier qualified representations are absent, insufficient, or explicitly external.
- Never silently replace exact carried bytes with fresher live repository/provider state merely because the live source is convenient.

## Completion Signal

Every material source used for the bounded grounding has an explicit qualified provenance and any recovery escalation is visible.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-1-1-qualify-required-material-and-applicable-guidance.trace.md](001-1-1-qualify-required-material-and-applicable-guidance.trace.md)
  - Value: ovaZUdgjDhHpywwIElWhTK30Gf54YQ97Wj14ScFEwI0

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: Tzl2zGDUu4R01ddYbwHhI7xS9XPKlTdZYdGDg9dPn4Q
