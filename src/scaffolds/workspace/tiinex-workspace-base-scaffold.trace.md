# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Current
  - Current Schema: tiinex.scaffold.v1
  - Created At: 2026-10-02 20:49:35
  - Authors: Anchor
  - Why: Provide one qualified Native structural pattern that Core and hosts can consume without improvising directory roots.
  - Summary: First-party additive scaffold for generic Tiinex Workspace `.topics` roots.
  - Status: ready/local

---

# Tiinex Workspace Base Scaffold

## Scaffold Identity

- Scaffold Handle: tiinex.native.workspace-base.v1
- Scaffold Name: Tiinex Workspace Base
- Scaffold Kind: workspace
- Version: 1
- Purpose: Establish the generic `.topics` structural roots used by a Tiinex Workspace without prescribing domain-specific subject taxonomy.
- Owner: Tiinex Native
- Stability: candidate

## Target Boundary

- Target Kind: workspace-root
- Target Root Meaning: root directory of one explicitly selected Tiinex Workspace source tree
- Root Binding Policy: explicit-invocation
- Required Capability: local directory inspection for planning; filesystem write capability only for separately authorized apply
- Source Mutation Boundary: no mutation during qualification or planning

## Structural Entries

- Topics root
  - Path: .topics
  - Entry Kind: directory
  - Presence: required
  - Entry Role: tiinex-topics-root
- Workspace entrypoint root
  - Path: .topics/.workspaces
  - Entry Kind: directory
  - Presence: required
  - Entry Role: workspace-entrypoint-root
- Work root
  - Path: .topics/work
  - Entry Kind: directory
  - Presence: required
  - Entry Role: work-root
- Process root
  - Path: .topics/processes
  - Entry Kind: directory
  - Presence: required
  - Entry Role: process-root
- Reduction root
  - Path: .topics/reductions
  - Entry Kind: directory
  - Presence: required
  - Entry Role: reduction-root

## Composition

- Composition Policy: additive
- Duplicate Entry Policy: exact-duplicate-allowed
- Notes: Domain-specific scaffolds may add durable roots and subject structure without replacing these generic roots.

## Conflict Policy

- Existing Compatible Material: no-op
- Existing Conflicting Material: block
- Unknown Existing Material: preserve
- Deletion Policy: never
- Notes: This scaffold is intended for safe prospective structure; historical layouts are not invalidated by non-conformance.

## Generation Bindings

- none

## Validation Boundary

- Qualification Rule: exact Scaffold bytes and every required referenced authority must qualify before the Scaffold is fully resolved
- Planning Rule: project create, preserve/no-op, blocked-conflict, and unresolved outcomes without filesystem mutation
- Apply Rule: separately authorized host or mechanism action only
- Failure Policy: fail-closed
- Required Checks: safe relative paths; no duplicate conflicting paths; target root explicitly bound
- Receipt Requirement: applying host should preserve a bounded plan/apply receipt when source mutation occurs

## Interpretation Limits

- Does Not Establish: Workspace identity, Parent ancestry, process applicability, currentness, acceptance, completion, Reduction, destructive eligibility, or deletion authority
- Must Not Be Used To Claim: that existing Workspaces not matching this scaffold are invalid or must be migrated
- Historical Boundary: historical layouts remain preservation-oriented until separately classified
- Authority Boundary: Native catalog inclusion is first-party content provenance, not universal applicability
- Host Boundary: hosts consume qualified plans and retain responsibility for capability checks and explicit mutation authorization

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: EFFlsKSfNukpXriE-Nukd9wULNlJITshPXfHVucOy9s