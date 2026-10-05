# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Current
  - Current Schema: [tiinex.scaffold.v1](https://github.com/Tiinex/docs/blob/70bdfd1efe39057f2453d3ef40c35799f92fd63e/.topics/.schemas/scaffold/tiinex.scaffold.v1.schema.md)
  - Created At: 2026-10-03 18:52:12
  - Authors: Anchor
  - Summary: Tiinex Workspace Reduction Root Scaffold
  - Status: ready/local

---

# Tiinex Workspace Reduction Root Scaffold

## Scaffold Identity

- Scaffold Handle: tiinex.native.workspace-reduction.v1
- Scaffold Name: Tiinex Workspace Reduction Root
- Scaffold Kind: workspace
- Version: 1
- Purpose: Establish the canonical Workspace-local hierarchical Reduction root.
- Owner: Tiinex Native
- Stability: candidate

## Target Boundary

- Target Kind: workspace-root
- Target Root Meaning: root directory of one explicitly selected Tiinex Workspace source tree
- Root Binding Policy: explicit-invocation
- Required Capability: local target inspection for planning; filesystem write capability only for separately authorized migration apply
- Source Mutation Boundary: no mutation during qualification or planning

## Structural Entries

- Reduction root
  - Path: .topics/reductions
  - Entry Kind: directory
  - Presence: required
  - Entry Role: reduction-root

## Work Reduction Convention

- Work Reduction Placement: when one bounded work area becomes terminal and a durable distilled result is warranted, prefer `.topics/reductions/work/<work-area-handle>/` for the reduction surface corresponding to that work area.
- Discoverability: reuse of the work-area handle makes terminal history discoverable from the same human scope without keeping long historical execution lineages looking active under `.topics/work`.
- Reduction Meaning: a directory does not make material terminal. The qualified Reduction artifact and lifecycle/disposition authority own the reduction meaning.
- Reduction Shape: one reduction artifact may distill the completed work area when that is sufficient. Additional artifacts belong only when the reduced result genuinely needs separate durable structure.
- Source Preservation: reducing a work area does not authorize deletion or movement of its source history by itself. Any canonical migration/compaction remains a separately qualified operation.
- Cross-Workspace Boundary: reductions belong in the Workspace that owns the reduced execution truth unless a separately qualified organizational reduction intentionally summarizes across Workspaces.
- Legacy Boundary: existing reduction category layouts remain valid until separately migrated; this convention adds a preferred work-area reduction shape rather than invalidating historical paths.

## Composition

- Composition Policy: additive
- Duplicate Entry Policy: exact-duplicate-allowed

## Conflict Policy

- Existing Compatible Material: no-op
- Existing Conflicting Material: block
- Unknown Existing Material: preserve
- Deletion Policy: never

## Generation Bindings

- none

## Validation Boundary

- Qualification Rule: exact Scaffold bytes and every required referenced authority must qualify before the Scaffold is fully resolved
- Planning Rule: project create, preserve/no-op, blocked-conflict, and unresolved outcomes without filesystem mutation
- Apply Rule: separately authorized host or migration mechanism action only
- Failure Policy: fail-closed
- Required Checks: safe relative paths; no conflicting duplicate paths; explicit target binding
- Receipt Requirement: applying migration mechanism preserves a bounded plan/apply receipt

## Interpretation Limits

- Does Not Establish: Workspace identity, Parent ancestry, lifecycle, currentness, acceptance, completion, Reduction, destructive eligibility, deletion authority, or migration completion
- Must Not Be Used To Claim: that historical paths are invalid merely because they have not yet converged to this Scaffold
- Historical Boundary: current legacy structure remains valid source material until a separate migration plan qualifies and applies moves
- Authority Boundary: Native catalog inclusion establishes first-party content provenance, not universal applicability
- Host Boundary: hosts consume qualified plans and retain responsibility for explicit mutation authorization

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: i-ht_vHLiXOPJC-OPzShTGaAY0pGT6qwYMQLAzj__PI
