# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.handoff.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Created At: 2026-10-11 22:21:55
  - Trace: [021-anchor-to-sigma-locate-parent-post-repair-cascade-retest.trace.md](../../handoffs/021-anchor-to-sigma-locate-parent-post-repair-cascade-retest.trace.md)
  - Origin:
    - [relative](../../handoffs/021-anchor-to-sigma-locate-parent-post-repair-cascade-retest.trace.md)
- Current
  - Current Schema: [tiinex.evidence.v1](https://github.com/Tiinex/docs/blob/9ef3c2caed38152b1948c93cb45c985786660d91/.topics/.schemas/core/evidence/tiinex.evidence.v1.schema.md)
  - Created At: 2026-10-11 22:51:45
  - Authors: Anchor
  - Why: Ensure broken local Parent links raise reliable lineage diagnostics and Locate Parent Quick Fix
  - Summary: Prevent local Parent checksum matches from hiding nonexistent declared relative Trace paths
  - Status: ready/local

---

## Supported Claim Or Question

- Supported Claim Or Question: Must an explicitly declared relative Parent Trace resolve to its exact local Workspace path, instead of being silently rebound to an unrelated artifact with the same c14n-v2 self digest?
- Evidence Role: Anchor read-only reproduction and bounded resolver correction with Core and VS Code regression coverage; Sigma retains the actual Windows acceptance decision.
- Target Artifact: Core portable lineage resolver and integrity inspection; existing VS Code `Locate Parent…` Quick Fix for `portable.lineage-integrity.parent-unresolved`.
- Review Context: Sigma changed a Business task's relative Parent Trace to a nonexistent `001-2-2-…` reference. VS Code could not open that file, but Tiinex diagnostics did not initially warn because the resolver selected different loaded bytes by matching the old Parent digest.

## Provenance

- Known Source: The qualified 17-Workspace `tiinex-035-1-1-1-1-1-1-1-1-anchor-to-sigma` parent carrier, directly grounded from its Start and bootstrap. The supplied Business material was also used to reproduce the broken child reference without changing Business source files.
- Preservation Basis: A strictly bounded change to `src/lineage/lineage.resolve.js` in the Core Workspace plus `test/relative-parent-exact-path.regression.test.mjs`; no modification to the VS Code source, Docs schemas, Business initiatives, README or local historical material.
- Provenance Limits: Sigma's latest on-disk Windows worktree may differ from the carried Business source. Full dependency-backed Windows compilation and UI interaction have not been run in the sandbox.

## Evidence Material

- bug-mechanism
  - Material: Resolver originally called `resolveIntegrityTarget` before attempting an exact path, allowing a local Parent Trace with a known digest to resolve to a different artifact even when the named file was not loaded.
  - Material Kind: Source-level root cause and reproduced portable lineage inspection.
  - Description: Re-sealing the child could then produce a misleading healthy state although its declared relative Parent path did not exist.
- exact-local-parent-fix
  - Material: For declared local file-like relative Parent Trace values, Core now resolves the exact path in the same qualified source scope before considering integrity, Origin, generic identifiers, suffixes or publication bindings. If no exact loaded candidate exists, it marks the Parent unresolved; if found, it verifies the digest of THAT Parent.
  - Material Kind: Executed Core source correction and negative regressions.
  - Description: No attempt to select a replacement Parent by matching the old digest. Historical commit-pinned repository references retain their separate qualification path. No additional automatic mutation.
- editor-diagnostic-and-existing-picker
  - Material: `projectPortableEditorAssistance` now produces `portable.lineage-integrity.parent-unresolved` and `parent-not-resolved` for the invalid relative path, without proposing a false digest refresh. The existing VS Code `Locate Parent…` Quick Fix reacts to that exact code and requires the user's file selection and Core's qualified one-artifact rewrite.
  - Material Kind: Executed Core editor projection and existing host behavior tests.
  - Description: No new modal, implicit Parent choice or descendant cascade is introduced; the current separate optional cascade flow is preserved.
- regressions
  - Material: Explicit tests of valid sibling relative resolution, nonexistent relative Parent despite matching digest and Origin, self-resealed wrong Trace, mismatch against the correctly named Parent, and editor diagnostics; broader existing historical pinned/ref-source lineage tests plus VS Code Quick Fix/locator behavior tests.
  - Material Kind: Executed tests, with exact results retained in handoff validation records.
  - Description: Scope is bounded local Parent path qualification. No claim of complete workspace-wide test coverage or installed Windows PASS.

## Preservation And Fidelity

- Preservation State: Maintain exactly 17 Workspaces from parent carrier; only Core source/test and Native Evidence/Handoff continuity change. Business, Docs, VS Code source and all other 15 Workspaces remain byte-identical.
- Fidelity Notes: User-chosen Business hierarchy remains authoritative for interpretation, not grounds for guessing checksums or automatically changing references. Core issues a diagnostic and lets Sigma select a new Parent explicitly using the existing file picker.
- Known Losses: None intended. Existing historical material without a loaded exact local Parent is not converted into a guessed local Parent.

## Interpretation Limits

- Must Not Be Treated As: Automatically repaired Business files, installed Windows acceptance, approval of historical cleanup, change to target/handoff semantics, permission for Marketplace publication or remote mutation.
- Not Yet Used As: A reason to change Docs schema semantics or organization-wide Project/initiative lineage.
- Does Not Prove: The current installed VS Code extension reloads diagnostics successfully until Sigma tests the updated candidate after build.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [021-anchor-to-sigma-locate-parent-post-repair-cascade-retest.trace.md](../../handoffs/021-anchor-to-sigma-locate-parent-post-repair-cascade-retest.trace.md)
  - Value: LbWfHUUePgSDrxDTXAJ7iKbPkBuLb5I33Ur8LB000eI

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: jw6yTJ1Zvh0XUuU-6Za0O3Lnw-jl-2eE0GRZ8qEF32Y