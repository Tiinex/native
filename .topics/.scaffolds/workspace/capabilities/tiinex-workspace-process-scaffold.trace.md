# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Current
  - Current Schema: [tiinex.scaffold.v1](https://github.com/Tiinex/docs/blob/70bdfd1efe39057f2453d3ef40c35799f92fd63e/.topics/.schemas/scaffold/tiinex.scaffold.v1.schema.md)
  - Created At: 2026-10-03 18:52:11
  - Authors: Anchor
  - Summary: Tiinex Workspace Process Root Scaffold
  - Status: ready/local

---

# Tiinex Workspace Process Root Scaffold

## Scaffold Identity

- Scaffold Handle: tiinex.native.workspace-process.v1
- Scaffold Name: Tiinex Workspace Process Root
- Scaffold Kind: workspace
- Version: 1
- Purpose: Establish the canonical Workspace-local process root when durable process material is present.
- Owner: Tiinex Native
- Stability: candidate

## Target Boundary

- Target Kind: workspace-root
- Target Root Meaning: root directory of one explicitly selected Tiinex Workspace source tree
- Root Binding Policy: explicit-invocation
- Required Capability: local target inspection for planning; filesystem write capability only for separately authorized migration apply
- Source Mutation Boundary: no mutation during qualification or planning

## Structural Entries

- Process root
  - Path: .topics/processes
  - Entry Kind: directory
  - Presence: required
  - Entry Role: process-root

## Process Directory Convention

- Catalog Root Artifact: a Workspace-local process catalog/root artifact belongs directly beneath `.topics/processes/` when durable process definitions are present.
- Process Placement: each reusable process owns one subdirectory `.topics/processes/<process-handle>/`; its process-definition root artifact lives inside that directory.
- Catalog Parent: direct Workspace-local process-definition roots use the Workspace-local process catalog/root artifact as their real Parent when that ancestry is truthful.
- Sub-process Placement: a semantically standalone or independently followable sub-process may own a nested subdirectory beneath its containing process; folder nesting alone does not create Parent continuity.
- Step Placement: process steps, branch artifacts, and bounded relation artifacts stay inside the owning process directory unless their semantic authority belongs elsewhere.
- Navigation: Viewer/tooling discovers the process tree from artifact material; README or manually maintained directory indexes are not required authority.
- Filename Boundary: filenames may preserve lineage/local namespace identity; directory naming carries process ownership, not lifecycle/currentness.

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
  - Value: rf1k1x8JedLKfOz5nsBCVcoZ3DbqKUSDazVCHGKobKY