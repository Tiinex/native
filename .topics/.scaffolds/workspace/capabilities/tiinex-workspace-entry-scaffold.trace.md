# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Current
  - Current Schema: [tiinex.scaffold.v1](https://github.com/Tiinex/docs/blob/70bdfd1efe39057f2453d3ef40c35799f92fd63e/.topics/.schemas/scaffold/tiinex.scaffold.v1.schema.md)
  - Created At: 2026-10-05 19:18:00
  - Authors: Anchor; Sigma
  - Summary: Tiinex Workspace Entry What/Where Scaffold
  - Status: ready/local

---

# Tiinex Workspace Entry What/Where Scaffold

## Scaffold Identity

- Scaffold Handle: tiinex.native.workspace-entry.v1
- Scaffold Name: Tiinex Workspace Entry What/Where
- Scaffold Kind: workspace
- Version: 1
- Purpose: Establish the canonical human/discovery layout for reusable purpose Entries and environment Target Entries without making directory placement semantic authority.
- Owner: Tiinex Native
- Stability: candidate

## Target Boundary

- Target Kind: workspace-root
- Target Root Meaning: root directory of one explicitly selected Tiinex Workspace source tree
- Root Binding Policy: explicit-invocation
- Required Capability: local target inspection for planning; filesystem write capability only for separately authorized migration apply
- Source Mutation Boundary: no mutation during qualification or planning

## Structural Entries

- Entry root
  - Path: .topics/.entries
  - Entry Kind: directory
  - Presence: required
  - Entry Role: entry-root
- What root
  - Path: .topics/.entries/what
  - Entry Kind: directory
  - Presence: required
  - Entry Role: purpose-entry-root
- Where root
  - Path: .topics/.entries/where
  - Entry Kind: directory
  - Presence: required
  - Entry Role: target-entry-root

## Entry Directory Convention

- What Placement: reusable purpose/start Entries belong beneath `.topics/.entries/what/<entry-handle>/` when this Scaffold governs the Workspace.
- Where Placement: reusable environment Target Entries belong beneath `.topics/.entries/where/<target-handle>/` when this Scaffold governs the Workspace.
- Orthogonality: `what` and `where` are separate composition dimensions. Do not duplicate the same environment target beneath every purpose Entry or encode target selection into the purpose Entry directory hierarchy.
- Semantic Truth: qualified schema identity and artifact material determine Entry kind and meaning; folder placement alone never classifies arbitrary material as a purpose Entry or Target Entry.
- Ownership: provider-/host-specific Target Entries belong in the semantically owning interop/host Workspace. Portable Native should contain only provider-neutral Entry material.
- Handoff Boundary: routed Handoffs may reference or recommend purpose/target Entries for recipient startup behavior, but Handoff/Role/qualified relation material remains the authority/work-transfer surface.
- Pointerless Boundary: pointerless carriers may use a purpose Entry as the primary orientation mechanism and discover/select a compatible Target Entry locally without creating recipient authority.
- Target Default: exact target pinning should be used only when the environment is materially part of the bounded work; otherwise recipient-local qualified discovery is preferred.
- Legacy Boundary: existing flat `.topics/.entries/*.trace.md` material remains valid source material until a separate migration plan qualifies and applies movement into `what/` or `where/`.

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

- Does Not Establish: Workspace identity, Entry applicability, target compatibility, Handoff routing, Parent ancestry, lifecycle, currentness, acceptance, completion, destructive eligibility, deletion authority, or migration completion
- Must Not Be Used To Claim: that legacy flat Entry paths are invalid or that folder placement itself proves schema identity, applicability, or authority
- Authority Boundary: Native catalog inclusion establishes first-party content provenance, not universal applicability
- Host Boundary: hosts discover and present qualified Entry material but must not hardcode semantic meaning from folder names alone

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value:qQEDrWum-rEyA94_lCHplMdppu6Ae5bz2lbt-XqwuZI
