# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Current
  - Current Schema: [tiinex.scaffold.v1](https://github.com/Tiinex/docs/blob/70bdfd1efe39057f2453d3ef40c35799f92fd63e/.topics/.schemas/scaffold/tiinex.scaffold.v1.schema.md)
  - Created At: 2026-10-03 18:52:11
  - Authors: Anchor
  - Summary: Tiinex Workspace Work Root Scaffold
  - Status: ready/local

---

# Tiinex Workspace Work Root Scaffold

## Scaffold Identity

- Scaffold Handle: tiinex.native.workspace-work.v1
- Scaffold Name: Tiinex Workspace Work Root
- Scaffold Kind: workspace
- Version: 1
- Purpose: Establish the canonical root beneath which subject-oriented work lineages can converge.
- Owner: Tiinex Native
- Stability: candidate

## Target Boundary

- Target Kind: workspace-root
- Target Root Meaning: root directory of one explicitly selected Tiinex Workspace source tree
- Root Binding Policy: explicit-invocation
- Required Capability: local target inspection for planning; filesystem write capability only for separately authorized migration apply
- Source Mutation Boundary: no mutation during qualification or planning

## Structural Entries

- Work root
  - Path: .topics/work
  - Entry Kind: directory
  - Presence: required
  - Entry Role: work-root

## Work Area Convention

- Work Area Placement: each bounded execution scope should own one descriptive subdirectory `.topics/work/<work-area-handle>/` in the Workspace that naturally owns that execution truth.
- Handle Meaning: `<work-area-handle>` is a human/discovery scope label for one bounded work area. It should make the subject recognizable without pretending to be Task, Project, Parent, lifecycle, or acceptance authority.
- Frontier Shape: unresolved work should preserve a short explicit frontier inside its work area. A very long same-area lineage is a diagnostic signal to review disposition/reduction, not an automatic invalidity rule.
- One-Artifact Meaning: a work area containing one artifact may represent a newly opened/atomic work surface. A terminal single-file artifact belongs under Reduction only when that artifact actually owns the reduction semantics.
- Workspace Placement: implementation work belongs in its natural owning Workspace. Business work should represent organizational why, priority, acceptance, coordination, cross-Workspace decisions, and disposition rather than duplicate implementation truth.
- Cross-Workspace Coordination: Handoffs/Returns may connect Business control-plane work to Workspace-local execution work without requiring the specialist Workspace to write implementation history into Business.
- Directory Boundary: directory membership helps people and Tooling discover bounded work but does not replace artifact Parent, Project/Task, Handoff, status, or other semantic authority.
- Legacy Boundary: existing flat `.topics/work/*.trace.md` material remains valid until a separate migration plan qualifies and applies movement into work-area directories.

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
  - Value: 0PfONB_cOo9nBpS6xzF3lWt1mZqTqzwnNu5VkcoGhKw
