# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.handoff.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Created At: 2026-10-11 20:08:36
  - Trace: [018-anchor-to-anchor-parent-repair-incoming-limit-recovery.trace.md](../../handoffs/018-anchor-to-anchor-parent-repair-incoming-limit-recovery.trace.md)
  - Origin:
    - [relative](../../handoffs/018-anchor-to-anchor-parent-repair-incoming-limit-recovery.trace.md)
- Current
  - Current Schema: [tiinex.evidence.v1](https://github.com/Tiinex/docs/blob/9ef3c2caed38152b1948c93cb45c985786660d91/.topics/.schemas/core/evidence/tiinex.evidence.v1.schema.md)
  - Created At: 2026-10-11 20:33:34
  - Authors: Anchor
  - Why: Remove descendant health as a veto for one-file repair without weakening integrity or consent
  - Summary: Qualified local-only Parent integrity repair and explicit cascade selection boundaries
  - Status: ready/local

---

## Supported Claim Or Question

- Supported Claim Or Question: Can the verified Parent digest or self seal of one selected Tiinex artifact be repaired using Quick Fix without requiring all loaded descendants to be healthy or silently mutating them?
- Evidence Role: Anchor source inspection and manual qualified Core/VS Code regression; bounded candidate for installed Windows Sigma acceptance.
- Target Artifact: Core portable editor-assistance single-document replacement guard and VS Code Quick Fix versus explicit Repair Artifact behavior.
- Review Context: Sigma observed `replacement-shared-lineage-not-clean` for `.topics/initiatives/001-initiatives.trace.md`, listing Business descendant paths (`001-1-1`, `001-1`, `001-2`) even when only the selected artifact's Parent digest was being repaired. Sigma expects one-document Quick Fix and optional explicitly chosen cascade via Repair Artifact.

## Provenance

- Known Source: The uploaded qualified `tiinex-035-1-1-1-1-anchor-to-anchor` recovery carrier; exact Start and SHA-256-verified bootstrap orientation and recipient grounding completed. This carrier includes 17 Workspaces and its Core has the preceding unverified three-line schema-resolution propagation candidate. Sigma's screenshot and explanation supply the exact new UI symptom.
- Preservation Basis: Three known affected product surfaces only: Core `editor.assistance.js` locally qualifies the focused replacement and reports descendant effects without demanding their health; VS Code `diagnostics.ts` restricts ordinary Quick Fix to one `replace-document` and demands explicit Repair selection for `replace-record-set`; regression tests are added to Core and VS Code. The carried Business Workspace remains byte-identical.
- Provenance Limits: Current local Windows Business files are not available in this sandbox. Previous Incoming-after-Replace/restart defect remains separately unresolved. No installed Windows dependency-backed extension build is claimed.

## Evidence Material

- confirmed-descendant-veto
  - Material: Before correction, `qualifyReplacementAgainstSharedGuardrails` built `affectedPaths` from the focus plus every loaded descendant and rejected any non-healthy descendant with `replacement-shared-lineage-not-clean`.
  - Material Kind: Direct verified Core source path and Sigma screenshot.
  - Description: This falsely coupled a single-document checksum refresh to the full descendant graph's existing health; a stale child could block otherwise valid local repair.
- bounded-local-repair
  - Material: The replacement passes unchanged qualified schema-audit checking and must leave the selected artifact `healthy` in portable lineage inspection. Loaded descendants are inspected, reported as `descendantEffects` with before/after states, but no longer veto the local repair. Other files are not rewritten by the local action.
  - Material Kind: Source correction and positive/negative executed Core regression.
  - Description: Verified Parent and focused-artifact seal are still required. An unresolved, unverified or mismatched focused Parent remains blocked. A child may retain or acquire stale Parent digest after ancestor self reseal, and must be repaired explicitly later.
- host-action-separation
  - Material: VS Code Quick Fix filters on `replace-document` only; Repair Artifact still accepts Core-qualified `replace-record-set` changesets but requires explicit user selection even when cascade is the sole option.
  - Material Kind: Executed host behavior regression.
  - Description: Lightbulb actions cannot silently modify descendants. A Core-authorized multi-file repair remains available through intentional Repair Artifact choice and existing source hash guards.
- exact-business-dogfood
  - Material: Running updated Core portable `project-editor-assistance` against the carried Business `.topics/initiatives/001-initiatives.trace.md` exposes `Refresh Tiinex Parent integrity and self seal (this artifact only)` as `replace-document`, with three reported descendant effects. No Business file was changed.
  - Material Kind: Executed read-only portable Core projection.
  - Description: The carried Business candidate may differ from Sigma's latest Windows changes, and its remaining `audit.schema-authority.unqualified` warning remains visible rather than being silently dismissed.
- regression-summary
  - Material: 55/55 selected Core tests PASS across five test files including schema reference authority, lineage and editor cases. Existing and new targeted VS Code Quick Fix, Repair, Reduction, Incoming SHA and Guided Handoff regression scripts pass.
  - Material Kind: Executed portable tests using the exact qualified Native Workspace content root from this carrier.
  - Description: No installed Windows compile or installed UX acceptance claimed.

## Preservation And Fidelity

- Preservation State: Package all 17 Workspaces. Product changes limited to Core and VS Code; Native gains Evidence/Handoff only. All other 14 Workspace payloads, notably Business and Docs, stay byte-identical.
- Fidelity Notes: The pre-existing multi-document reference-hygiene changeset remains a distinct option via Repair Artifact. The one-document Quick Fix never edits sibling, parent or descendant bytes outside the selected file. Parent identity is not inferred from filename, position or relative-link readability alone.
- Known Losses: None intended. The user's expected descendant repair order remains explicit/manual unless a qualified multi-file plan is selected.

## Interpretation Limits

- Must Not Be Treated As: Windows PASS, completed Business cleanup, acceptance of every historical Parent source, permission for automatic cascade, or proof the separate Incoming-after-restart issue is fixed.
- Not Yet Used As: Permission to delete historical lineage, commit, push or publish the VS Code extension.
- Does Not Prove: That the latest external Windows Business worktree exactly matches the carried snapshot.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [018-anchor-to-anchor-parent-repair-incoming-limit-recovery.trace.md](../../handoffs/018-anchor-to-anchor-parent-repair-incoming-limit-recovery.trace.md)
  - Value: gy5reNP50j3rIb4mERUno49BFBNc-adfSpYl5dhc5YQ

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: PImNMy6XIH1xqbILP0BbccQzjqNmxNPDR_pal8NBZaU