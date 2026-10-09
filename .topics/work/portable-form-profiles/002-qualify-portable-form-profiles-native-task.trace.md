# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Current
  - Current Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-10-08 20:50:43
  - Authors: Anchor
  - Why: Establish owner-correct form semantics and creation support before Core discovery or host features.
  - Summary: Define minimal portable form profile authority and qualify one Evidence example without duplicating validation or runtime.
  - Status: ready/local

---

# Qualify Portable Form Profiles As Native Schema-Local Companions

## Objective

Qualify the smallest host-neutral `Form Profile` representation, preserving the flat Native `.topics/.schemas/<family>/<schema>/` convention and allowing optional schema-local `.forms/` candidates without introducing a second schema semantics system.

## Done Criteria

- Reconcile `tiinex.presentation.surface.v1` and `tiinex.schema.module.v1` against the actual need for independent task-oriented form profiles; decide with qualified source whether a distinct profile schema is necessary. A surface alone is not silently a profile.
- One experimental Evidence image-description profile can be created and validated through Tiinex Tooling with an actual supported creation contract/renderer; no handwritten c14n/integrity substitute.
- Canonical schema/rule authority remains Native; profiles refer to exact Core-qualified field/group identities and may order or disclose fields but never redefine mandatory values, defaults, or validation.
- Local `.forms/` participation and potential `-forms.trace.md` attachment have explicit meanings distinct from candidate discovery and schema-level endorsement. If a companion is needed, it binds exact qualified references, analogous to Transition Companion, with no forced extra registry layer.
- Flat schema directory retains `tiinex.<schema>.schema.md`, `.schema.js`, runtime/generated representation, etc.; `.forms/` is optional scoped content, not a new nested copy of the schema.
- No `forms.js` executable schema authority is introduced and no legacy `transitions.js` behavior is blindly copied.
- One Core/host-neutral form can represent a common Evidence workflow without wizard/review gating and without losing values when showing Full; host-local implementation and individually describable material records are separately owned.
- Native tests and schema publication/runtime composition are qualified before declaring the schema operative or ready for Core discovery.

## Scope

- Owner: Native for new schema identity, invariant, authorized companion meaning and qualified authored examples.
- Non-implementing discovery result is preserved in [Form Profile architecture Evidence](001-form-profile-architecture-and-creation-boundary-evidence.trace.md).
- Do not alter Evidence's multi-material semantic structure without a separately qualified Native schema evolution.
- Do not migrate or remove legacy `*.transitions.js` in this scope; retain the known migration debt for owner-correct disposition.

## Dependencies

- `presentation.surface.v1` and `schema.module.v1` are draft proposals, not an executable form-profile registry.
- Current `author` rejects `presentation.surface.v1` with `creation.renderer.missing`; resolve rather than bypass the fail-closed block.
- Core owns semantic-package material qualification and candidate discovery; VS Code/Viewer/CLI/LLM Tooling consume the resulting portable projection, not Native source-parsing implementations.

## Execution Order

1. Resolve whether a new `tiinex.form.profile.v1` is semantically required or `presentation.surface` plus explicit bindings suffices; record exact evidence.
2. Provide a supported portable creation/validation path and one exact Evidence example.
3. Qualify `.forms` candidate scope versus explicit schema attachment and conflict handling.
4. Hand a supported form-profile projection contract to Core, then test host fallback and cross-host identity.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: ZYk0Di6S_JE7M6mT1WScV-9uF18VU2OZDE_7EEuIPrg