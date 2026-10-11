# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.handoff.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Created At: 2026-10-11 21:40:00
  - Trace: [020-anchor-to-sigma-parent-locator-and-project-creation-retest.trace.md](../../handoffs/020-anchor-to-sigma-parent-locator-and-project-creation-retest.trace.md)
  - Origin:
    - [relative](../../handoffs/020-anchor-to-sigma-parent-locator-and-project-creation-retest.trace.md)
- Current
  - Current Schema: [tiinex.evidence.v1](https://github.com/Tiinex/docs/blob/9ef3c2caed38152b1948c93cb45c985786660d91/.topics/.schemas/core/evidence/tiinex.evidence.v1.schema.md)
  - Created At: 2026-10-11 22:21:53
  - Authors: Anchor
  - Why: Reduce unnecessary approval friction without enabling unqualified or automatic descendant mutation
  - Summary: Single-artifact Parent apply without redundant modal and qualified optional descendant integrity refresh
  - Status: ready/local

---

## Supported Claim Or Question

- Supported Claim Or Question: Can Tiinex make a qualified Locate Parent selection immediately apply a single-artifact repair, and only AFTER success offer an optional, separately qualified same-Workspace descendant integrity refresh if descendants exist?
- Evidence Role: Bounded Core and VS Code source implementation, integration tests and explicit Windows acceptance boundary.
- Target Artifact: Core editor-assistance on-demand descendant-only projection and VS Code Locate Parent Quick Fix UX.
- Review Context: Sigma ran the previous Parent file picker successfully on installed Windows, showed the redundant modal `Apply single-artifact repair`, and requested no duplicate approval for a user-selected exact Parent. Sigma prefers an optional post-rewrite cascade choice for children in the same Workspace, never automatic cascade in the Quick Fix itself.

## Provenance

- Known Source: Prior qualified 17-Workspace `tiinex-035-1-1-1-1-1-1-1-anchor-to-sigma.handoff-package.zip` from the previous Tooling Handoff, including formal Native 020. Latest Sigma screenshot and explicit user instruction limit this change to Tooling/VS Code UX.
- Preservation Basis: Bounded edits to Core editor assistance and CLI flag, VS Code diagnostics and Core bridge, regression tests, plus the Native formal Evidence/Handoff. Business, Docs, README, initiative lineage and reductions remain byte-identical to the parent carrier.
- Provenance Limits: No full installed Windows `npm run dev:build:local` has been executed in this sandbox, and no local Business edits from Sigma's Windows worktree were copied into the carrier.

## Evidence Material

- direct-parent-selection
  - Material: VS Code `locateParent` removes the second modal `Apply single-artifact repair`; human Parent selection still requires Core exact schema and self-integrity qualification, source hash recheck and a safe single-document WorkspaceEdit.
  - Material Kind: Actual host method tests.
  - Description: Cancelled picker, outside-Workspace path, changed source bytes and no selected Parent remain fail-closed. The user-selected Parent is human semantic choice; no heuristics infer a different Parent.
- optional-post-repair-descendants
  - Material: Only after a successful one-artifact edit does the host call explicit on-demand Core `project-editor-assistance --include-descendant-repair` with current in-memory focus bytes. Normal diagnostics and Quick Fix catalog do not perform this extra discovery.
  - Material Kind: Core/CLI implementation, real loaded Business lineage CLI test, actual host behavior tests.
  - Description: If Core qualifies descendants that require re-sealing, VS Code asks `Repair descendants` or `Not now`. `Not now` performs no child edits. The selected Parent and unrelated siblings are absent from the descendant changeset. Every child source hash is rechecked immediately before apply.
- verified-cascade-safety
  - Material: Core orders descendants by depth, uses each exact loaded Parent's verified c14n-v2 self to refresh the child's declared Parent value and reseal its own self, and qualifies the entire resulting descendant set. Missing or ambiguous paths or any not-healthy result block the cascade.
  - Material Kind: Positive/negative Core test fixtures and actual CLI output.
  - Description: A failed or unavailable cascade never rolls back the already completed one-artifact edit, never invents an integrity value and never automatically rewrites descendants.
- focused-regressions
  - Material: 38/38 Core selected-parent, authoring and lineage regression cases; direct UI tests for no redundant modal, no children, optional cascade accepted/declined and blocked children; read-only CLI on a Business fixture after Parent edit.
  - Material Kind: Executed Node and Core Tooling tests.
  - Description: Actual Windows dependency-backed build remains Sigma's own gate. The existing separate Repair Artifact UI and generic Project creation have not been repurposed or changed.

## Preservation And Fidelity

- Preservation State: Preserve the parent carrier's full 17 Workspaces. Intended changed Workspaces: Core, VS Code, Native. Business, Docs and every other carrier Workspace remain exact byte copies.
- Fidelity Notes: Parent Quick Fix always affects only the current document; descendant refresh requires an additional explicit post-apply click and an exact, separate Core-qualified record set. No implicit original selection, no cross-Workspace mutation.
- Known Losses: None intended. An after-apply Cascade unavailable state reports that children can be repaired individually rather than claiming the entire lineage is repaired.

## Interpretation Limits

- Must Not Be Treated As: Installed Windows PASS, user approval for edits, actual mutation to Sigma's Business worktree, qualified documentation placement or Marketplace release.
- Not Yet Used As: Permission to change README, Docs, Business initiative/Project topology, reduction history or sibling lineage branches.
- Does Not Prove: Every possible local descendant tree admits a cascade; exact missing, unqualified or conflicting paths remain blocked by design.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [020-anchor-to-sigma-parent-locator-and-project-creation-retest.trace.md](../../handoffs/020-anchor-to-sigma-parent-locator-and-project-creation-retest.trace.md)
  - Value: hPuYo_049Po_8FnvdHmiXHsn421luAMAW5rSyJBQsC8

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: H2OX1p0RgUF-GLeBJcZh53Ggsw2yjG2EzLdzkvjWqDc