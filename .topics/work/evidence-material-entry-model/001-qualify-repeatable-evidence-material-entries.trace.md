# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Current
  - Current Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-10-08 22:29:14
  - Authors: Anchor
  - Why: Avoid one Evidence per image and reject host-only repeatability semantics.
  - Summary: Native-compatible per-material records and schema validation for Evidence with multiple independent source descriptions.
  - Status: ready/local

---

# Qualify Repeatable Evidence Material Entries

## Objective

Qualify a backward-compatible Native Evidence representation in which one Evidence claim may include multiple independently described material entries, without forcing one Evidence artifact per image or treating semicolon-concatenated references as separate entries.

## Done Criteria

- Preserve one Evidence artifact's shared `Supported Claim Or Question`, `Evidence Role`, provenance and interpretation limits; each material entry has its own exact reference, material kind, optional description and per-entry provenance/limitations where needed.
- Define explicit repeatability and stable per-entry identity in the Native Evidence schema and its rendered representation. Do not equate Evidence Material with Handoff's `named-declaration-section` solely for UI reuse.
- State how existing Evidence `ordinary-group` material stays readable/valid, and what migration or coexistence rules apply; no automatic reinterpretation of legacy `Material` delimiters.
- Define validation requirements for one and multiple entries, missing source, duplicate file link, external/binary reference, contradictory per-entry provenance, and field-level help provenance.
- Native schema, renderer and validation tests must pass before Core/host adoption. No unqualified hand-edited `.trace.md` or mirror runtime authority.

## Scope

- Owner: Native Evidence contract and schema evolution. This Task is separate from the portable Form Profile / `.forms` discovery Task.
- Evidence records are preserved material supporting a claim, not automatically verified truth; explicit source boundaries must remain judgeable.

## Dependencies

- Current `tiinex.evidence.v1` defines one `ordinary-group` named `Evidence Material` containing `Material` and `Material Kind`, with `Description` optional.
- VS Code Handoff already renders Core-qualified `named-declaration-section` as Add/Remove, but that does not qualify a corresponding Evidence material record shape.

## Exclusions

- No automatic asset move/rebase, no new mandatory wizard, no per-image Evidence requirement, no VS Code-specific semantic fields or hidden defaults.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: YtGy5H1VlrKiimxzsC4xMQLHGGEdKap-H7Uj2ED_NcE