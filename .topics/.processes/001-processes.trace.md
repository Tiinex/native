# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Current
  - Current Schema: [tiinex.topic.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/topic/tiinex.topic.v1.schema.md)
  - Created At: 2026-10-04 01:16:19
  - Authors: Anchor
  - Why: Give reusable portable process content a self-contained Native home without requiring Business or a host-specific domain.
  - Summary: Native-local catalog root for portable first-party process definitions.
  - Status: ready/local

---

# Native Processes

## Current Read

This topic is the Native-local catalog root for reusable first-party process definitions that are portable across Tiinex consumers.

A Native process should describe behavior that can remain useful in a minimal or role-less Workspace and should not require the Tiinex Business Project graph, Anchor, Sigma, or a particular host merely because those contexts use it.

## Design Direction

Keep portable reusable behavior in Native when it is first-party content rather than Core mechanics or one organization's operating policy. Keep host-specific behavior in the owning Interop/host Workspace and keep Tiinex organization-specific applicability, responsibility, and acceptance policy in Business.

Process placement does not make a process applicable. Applicability must be selected explicitly by the consuming Entry, work/context authority, invocation, or another qualified declaration.

## Next Artifacts

- Session Grounding And Continuity: portable cold-start, resume, source-preference, readiness, checkpoint, and host-adaptation boundaries.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: 4sXFJ8LIvsuQW-MiuDFyV-2KSjZqq0NoZB7ItKiiIKc