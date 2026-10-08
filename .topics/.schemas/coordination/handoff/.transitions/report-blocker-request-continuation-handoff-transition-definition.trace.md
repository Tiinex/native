# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Current
  - Current Schema: [tiinex.transition.definition.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/transition/definition/tiinex.transition.definition.v1.schema.md)
  - Created At: 2026-10-07 21:15:00
  - Authors: Anchor; Sigma
  - Summary: Native Core Handoff authoring transition for Report blocker / request continuation.
  - Status: ready/local

---

# Report blocker / request continuation

## Transition Identity

- Name: Report blocker / request continuation
- Version: 1
- Canonical Identifier: tiinex.core.handoff.report-blocker-request-continuation.v1
- Human Label: Report blocker / request continuation
- Transition Family: tiinex.handoff.authoring.v1

## Purpose And Scope

- Purpose: Create one Handoff that reports a blocker, unresolved dependency, or inability to complete and explicitly requests direction for continuation.
- Semantic Boundary: Blocker/continuation request authoring only; it does not invent resolution, transfer hidden authority, or claim that work is complete.

## Input Roles

- none

## Output Roles

- handoff
  - Meaning: Handoff draft created by the explicitly selected blocker/continuation transition.
  - Minimum Count: 1
  - Maximum Count: 1
  - Target Kind: artifact
  - Schema Constraint: tiinex.handoff.v1
  - Generation Binding: [Report blocker / request continuation generation](report-blocker-request-continuation-handoff-generation-authority.trace.md)

## Lifecycle And Continuity Effects

### Lifecycle Effects

- create-handoff
  - Target Binding: handoff
  - Effect: create-new
  - Logical Continuity: new-subject
  - Required Materialization Operation: create

### Parent Effects

- none

## Relation Effects

- none

## Applicability And Conditions

- Applicability Meaning: Use when work cannot responsibly continue or complete without direction, dependency resolution, or an explicit continuation decision from another party.
- Failure Meaning: Authoring remains unavailable when the Handoff schema, exact generation authority, destination, or required endpoint inputs cannot be qualified.
- Unknown Meaning: Unknown blocker facts, dependency state, recipient, or requested decision remains unresolved and must not be guessed.

## Authoring Bindings

- none

## Placement Intent

### Destination Bindings

- workspace-draft
  - Meaning: Explicit local Workspace selected by this invocation.
  - Required: yes

### Output Placements

- handoff-placement
  - Output Binding: handoff
  - Destination Binding: workspace-draft
  - Placement Intent: new-materialization
  - Naming Authority: explicit-binding
  - Explicit Override Allowed: no

## Interpretation Limits

- Does Not Prove: blocker resolution, failure attribution, abandonment, recipient acceptance, endpoint authority, or authority to choose the continuation.
- Must Not Be Inferred: that reporting a blocker closes, cancels, or transfers all responsibility for the blocked work.

---

# Continuity Integrity

- sha256-base64url-c14n-v2
  - Towards: self
  - Value:-euia18YAVWmYQdmGrwdKQC-xKQwFEF-Vt3H5lmorYM