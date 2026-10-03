# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.scaffold.v1](https://github.com/Tiinex/docs/blob/70bdfd1efe39057f2453d3ef40c35799f92fd63e/.topics/.schemas/scaffold/tiinex.scaffold.v1.schema.md)
  - Created At: 2026-10-03 12:30:32
  - Trace: [tiinex-workspace-reduction-scaffold.trace.md](tiinex-workspace-reduction-scaffold.trace.md)
  - Origin:
    - [relative](tiinex-workspace-reduction-scaffold.trace.md)
- Current
  - Current Schema: [tiinex.scaffold.v1](https://github.com/Tiinex/docs/blob/70bdfd1efe39057f2453d3ef40c35799f92fd63e/.topics/.schemas/scaffold/tiinex.scaffold.v1.schema.md)
  - Created At: 2026-10-03 12:30:33
  - Authors: Anchor
  - Summary: Tiinex Schema Authority Workspace Scaffold
  - Status: ready/local

---

# Tiinex Schema Authority Workspace Scaffold

## Scaffold Identity

- Scaffold Handle: tiinex.native.workspace-schema-authority.v1
- Scaffold Name: Tiinex Schema Authority Workspace
- Scaffold Kind: workspace
- Version: 1
- Purpose: Establish the canonical authority/support roots used by a Tiinex schema-authority Workspace without assigning schema authority to ordinary Workspaces.
- Owner: Tiinex Native
- Stability: candidate

## Target Boundary

- Target Kind: workspace-root
- Target Root Meaning: root directory of the selected canonical schema-authority Workspace
- Root Binding Policy: explicit-invocation
- Required Capability: local target inspection for planning; filesystem write capability only for separately authorized migration apply
- Source Mutation Boundary: no mutation during qualification or planning

## Structural Entries

- Schema root
  - Path: .topics/.schemas
  - Entry Kind: directory
  - Presence: required
  - Entry Role: schema-authority-root
- Validator root
  - Path: .topics/.validators
  - Entry Kind: directory
  - Presence: required
  - Entry Role: validator-authority-root
- Adapter root
  - Path: .topics/.adapters
  - Entry Kind: directory
  - Presence: optional
  - Entry Role: schema-adapter-root
- Interface root
  - Path: .topics/.interfaces
  - Entry Kind: directory
  - Presence: optional
  - Entry Role: schema-interface-root
- Origin root
  - Path: .topics/.origins
  - Entry Kind: directory
  - Presence: optional
  - Entry Role: schema-origin-root
- Schema tooling root
  - Path: .topics/.tools
  - Entry Kind: directory
  - Presence: optional
  - Entry Role: schema-tooling-root

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
  - Towards: [tiinex-workspace-reduction-scaffold.trace.md](tiinex-workspace-reduction-scaffold.trace.md)
  - Value: WvD5qj4iRfVUDSOYPBzn5V6BpD9K38IH2bCXhH9oka8

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: wXVUHCcp4k89RWEAqYXQiGY_XZM_MbhVtogBM-Pj-f0