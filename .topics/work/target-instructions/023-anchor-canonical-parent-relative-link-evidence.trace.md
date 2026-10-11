# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.handoff.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Created At: 2026-10-11 22:51:47
  - Trace: [022-anchor-to-sigma-exact-relative-parent-validation-retest.trace.md](../../handoffs/022-anchor-to-sigma-exact-relative-parent-validation-retest.trace.md)
  - Origin:
    - [relative](../../handoffs/022-anchor-to-sigma-exact-relative-parent-validation-retest.trace.md)
- Current
  - Current Schema: [tiinex.evidence.v1](https://github.com/Tiinex/docs/blob/9ef3c2caed38152b1948c93cb45c985786660d91/.topics/.schemas/core/evidence/tiinex.evidence.v1.schema.md)
  - Created At: 2026-10-11 23:37:17
  - Authors: Anchor
  - Why: Make Core-generated Locate Parent links obey Tiinex relative-link convention
  - Summary: Omit redundant dot-slash for same-folder Parent links without changing integrity checks
  - Status: ready/local

---

## Supported Claim Or Question

- Supported Claim Or Question: Does Core-generated Locate Parent preserve Tiinex canonical relative-link syntax, omitting redundant `./` for same-directory artifacts while keeping required `../` traversal, without changing lineage validation or Parent choice?
- Evidence Role: Bounded Anchor Core authoring-path correction, regression evidence and independent Windows acceptance boundary.
- Target Artifact: Core portable `relativePortableReference` and `qualifyExplicitLocalParentSelection`; no Business, Docs or VS Code semantic changes.
- Review Context: Sigma confirmed the previous extra Apply dialog was from an older loaded extension; the remaining problem was `./001-…trace.md` emitted for a same-directory Parent in Trace, Origin and integrity Towards. Convention is filename alone, not `./filename`.

## Provenance

- Known Source: Qualified `tiinex-035-1-1-1-1-1-1-1-1-1-anchor-to-sigma.handoff-package.zip` carrier, its verified Start/embedded bootstrap and all 17 Workspace snapshots; current Core source is a one-file bounded patch.
- Preservation Basis: Reuse existing host-owned Locate Parent UX and Core integrity qualification. The Core relative renderer now returns `filename.trace.md` for siblings, preserves `../` traversal for different directories and returns empty for self instead of fabricating `./`. All three Parent links use the same helper; canonical self-sealing remains in Core.
- Provenance Limits: Sigma's actual Business worktree was not modified. This is not installed-Windows verification; latest Windows image confirms extra dialog was an outdated extension and that the `./` artifact still needs correction.

## Evidence Material

- same-directory
  - Material: Core `test/relative-parent-rendering.regression.test.mjs` and `test/selected-parent-picker.regression.test.mjs` exercise the actual selected-Parent renderer, including its Trace, Origin and integrity Towards links.
  - Material Kind: Executed Node regressions.
  - Description: `001-parent.trace.md` is emitted without `./` and with verified c14n-v2 self integrity. Existing selected-Parent negative tests still block wrong schema, missing Parent, broken Parent self and self-selection.
- cross-directory
  - Material: Canonical relative renderer direct regression and existing lineage maintenance and scaffold tests.
  - Material Kind: Executed Node regressions.
  - Description: `../projects/001-parent.trace.md` and `../../initiatives/001-parent.trace.md` retain meaningful upward traversal; no arbitrary `./` normalizations of unrelated documents or remote URLs.
- scoped-test-results
  - Material: Seven Core test files covering relative Parent, selected Parent, descendant follow-up, lineage parent integrity, lineage hardening and maintenance.
  - Material Kind: Executed regression suite.
  - Description: 48/48 passed with current Core and carried Business/Native content. `node --check` also passed for modified source. This is not a broad all-repository validation claim.

## Preservation And Fidelity

- Preservation State: Full 17-Workspace carrier; only Core and formal Native evidence/handoff continuity are changed. Business, Docs, VS Code and every other Workspace remain byte-identical to the parent carrier.
- Fidelity Notes: File picker remains explicit human Parent choice, no pre-apply dialog should be reintroduced, no automatic descendant cascade or source mutation is performed by this projection. Optional separately qualified post-repair cascade is unaffected.
- Known Losses: None intended. Existing Markdown written with redundant `./` is not silently rewritten in bulk; the convention applies to newly generated repairs.

## Interpretation Limits

- Must Not Be Treated As: Installed Windows build PASS, automatic Business document rewrite, Marketplace readiness, historical cleanup or release authorization.
- Not Yet Used As: Approval to alter repository structure or normalize legitimate `../` paths, external URLs or manually authored historical references.
- Does Not Prove: All live Windows host reload/caching scenarios have been tested; Sigma retains that gate.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [022-anchor-to-sigma-exact-relative-parent-validation-retest.trace.md](../../handoffs/022-anchor-to-sigma-exact-relative-parent-validation-retest.trace.md)
  - Value: OHZmodwavDoPYS9ADjliBrGt1OMkXx-VvwMAjhyBSaM

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: JZ0GO7q6_lX_wQlKKpDu0YUyAgtnQTIin0UGa3FT2xo