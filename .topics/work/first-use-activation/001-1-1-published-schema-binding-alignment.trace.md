# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-10-14 01:16:37
  - Trace: [001-1-chat-first-schema-mirror-alignment.trace.md](001-1-chat-first-schema-mirror-alignment.trace.md)
  - Origin:
    - [relative](001-1-chat-first-schema-mirror-alignment.trace.md)
- Current
  - Current Schema: [tiinex.evidence.v1](https://github.com/Tiinex/docs/blob/9ef3c2caed38152b1948c93cb45c985786660d91/.topics/.schemas/core/evidence/tiinex.evidence.v1.schema.md)
  - Created At: 2026-10-15 16:51:48
  - Authors: Anchor
  - Why: Investigate bare Current Schema references in LLM-authored Topics while preserving publication authority.
  - Summary: Verify immutable published Docs schema subtree and Native mirror binding alignment.
  - Status: ready/local

---

# Published Schema Binding Alignment — Bounded Verification

## Supported Claim Or Question

- Supported Claim Or Question: Can Native's locally mirrored 111 Docs schema definitions be represented with commit-pinned, published-immutable schema references without guessing links or changing schema bytes?
- Evidence Role: Bounded Git tree equality, local schema-sync and release-check evidence for the selected immutable Docs commit; not independent agent-behavior acceptance.

## Provenance

- Known Source: 018 qualified 17-Workspace recovery carrier; its exact Native and Docs snapshots; GitHub read-only Tiinex/docs tree objects under commit `e33bd7ebea209203f8ea41e966ec7b51d1c27f1c`; existing Core `schemas sync` and `schemas check` operations.
- Preservation Basis: Native `.topics/.schemas` mirror and its generated catalog are carried in this Workspace; the commit-pinned remote Git tree and selected files are referenced as explicit immutable GitHub URLs; local operation findings and digests are preserved in this record.
- Provenance Limits: External GitHub tree identity was checked through read-only GitHub API at investigation time; this is not a signed publication attestation, nor evidence of later changes to GitHub. Verification concerns the `.topics/.schemas` subtree, not all Docs repository content.

## Evidence Material

- exact-published-tree
  - Material: [Published Docs `.topics/.schemas` Git tree](https://api.github.com/repos/Tiinex/docs/git/trees/136aab1c8876d39bba194ad0e0e2cb3feb583415), reachable from [selected commit](https://github.com/Tiinex/docs/commit/e33bd7ebea209203f8ea41e966ec7b51d1c27f1c).
  - Material Kind: immutable Git tree identity and bounded local tree digest
  - Description: Both the repository's `.topics/.schemas` subtree and the local qualified 018 Docs snapshot have Git tree object hash `136aab1c8876d39bba194ad0e0e2cb3feb583415`. The SHA compares filenames, modes and blob contents throughout that subtree, including the 111 schema definitions. No schema source was rewritten.
- schema-binding-sync
  - Material: Native `.topics/.schemas/.generated/native.schema.catalog.json` and the generated Native schema companion/binding files written by Tooling `schemas sync` with `--docs-commit e33bd7ebea209203f8ea41e966ec7b51d1c27f1c --published`.
  - Material Kind: exact local schema publication-binding materialization
  - Description: Schema sync reported ready, 111 schemas, 164 expected files, 8 files written, 156 unchanged, 0 errors and warnings. The published `tiinex.topic.v1` binding now points to the immutable commit under `.topics/.schemas/core/topic/tiinex.topic.v1.schema.md`, with exact local material SHA-256 `755675dd0b4a89c0b4344797a356e0919f4a71468a9045e211b39931268e7b15` and Git blob `5e333e86967fa411c79a6f7b0d5292e926d90e6f`.
- read-only-release-check
  - Material: Local `schemas check` outcome against the same qualified Native and Docs snapshots with `--published --require-published` and the exact selected commit.
  - Material Kind: deterministic tooling qualification receipt summary
  - Description: `status: ready`, expected generated files 164, drift 0, errors 0, warnings 0. Against the prior local-unpublished configuration, all 164 files were current; publication metadata is the bounded difference rather than new semantics.

## Preservation And Fidelity

- Preservation State: changed Native generated schema bindings and generated catalog are included as exact local Workspace files; this Evidence preserves bounded checks and immutable source locators.
- Fidelity Notes: Locally computed Git tree hash and remote Git tree SHA were compared exactly; generated catalog values are copied from Tooling-created files; no external services were mutated.
- Known Losses: Complete raw JSON receipts and GitHub transport logs are not duplicated inside this Evidence; the source files, commands, digests and result summaries permit independent re-evaluation. Recipient-specific spontaneous authoring remains untested.

## Interpretation Limits

- Does Not Prove: that every LLM will choose the right artefact type, that old bare-schema-ID artefacts should be rewritten retroactively, that `author` in a newly manufactured carrier already renders links, that this is the globally accepted Native revision, or that formal recipient work is accepted.
- Must Not Be Treated As: an authorization for remote publication, a replacement for qualified source and lineage checks, or permission to rewrite historical schema pointers. No Docs canonical source schema, Core renderer, or remote repository was modified.
- Not Yet Used As: authoritative schema migration, remote publication approval, or acceptance of historical Work lineage.
- Need For Review: Manufacture a candidate carrier containing these Native generated bindings, then manually author a fresh Topic and Task with that carrier's own runtime; verify pinned `Current Schema` links and full 17-Workspace cold recovery before considering this a release.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-1-chat-first-schema-mirror-alignment.trace.md](001-1-chat-first-schema-mirror-alignment.trace.md)
  - Value: InQlHCaQ_XCxJ3iPyT4oI-qEheqgyG4-CeNpR_AXFMw

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: TkYqLtugQFau_v4sMPN4ogn2Cq3JnO8jgkNQaEzfLg4