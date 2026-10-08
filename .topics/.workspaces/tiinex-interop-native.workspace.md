# Continuity Context

- Envelope Schema: tiinex.root.v1
- Current
  - Current Schema: tiinex.workspace.v1
  - Created At: 2026-09-09 16:49:23
  - Authors: Anchor; Sigma
  - Why: Establish the renamed repository/package Workspace identity while retaining the predecessor descriptor as historical recovery context; the predecessor lacks an exact schema-reference authority needed for qualified Parent sealing.
  - Summary: Current Workspace entrypoint for the renamed Tiinex/interop-native repository.
  - Status: ready/local

---

# Tiinex Interop Native

## Schema Origins

- Tiinex Docs canonical schemas
  - Kind: github-tree
  - Repository: Tiinex/docs
  - Ref: master
  - Root Path: .topics/.schemas
  - Trust Role: canonical-core

## Workspace Entrypoints

### Interop Native source

- Source Kind: local-directory
- Repository: Tiinex/interop-native
- Root Path: .
- Repo Files Discovery: on

## Workspace Boundary

- First-party provider-agnostic Interop implementation for generic bootstrap, grounding, external capabilities and automation surfaces.
- The predecessor `Tiinex/interop` Workspace remains historical recovery context and does not override this renamed repository/package identity.
- Environment-specific behavior such as OpenAI constraints remains outside this Workspace.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: EQqRCvzj7OwSjmECKnXqa8Ev3F4voaiYFSF3ax5LSpY