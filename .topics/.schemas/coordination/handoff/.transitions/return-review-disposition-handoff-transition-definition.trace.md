# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Current
  - Current Schema: [tiinex.transition.definition.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/transition/definition/tiinex.transition.definition.v1.schema.md)
  - Created At: 2026-10-07 21:15:00
  - Authors: Anchor; Sigma
  - Summary: Native Core Handoff authoring transition for Return review / disposition.
  - Status: ready/local

---

# Return review / disposition

## Transition Identity

- Name: Return review / disposition
- Version: 1
- Canonical Identifier: tiinex.core.handoff.return-review-disposition.v1
- Human Label: Return review / disposition
- Transition Family: tiinex.handoff.authoring.v1

## Purpose And Scope

- Purpose: Create one Handoff that returns review findings, PASS/rework disposition, or a bounded decision to the receiving party without implying implementation.
- Semantic Boundary: Review/disposition return authoring only; it does not execute follow-up work, prove acceptance by another party, or close controlling work automatically.

## Input Roles

- none

## Output Roles

- handoff
  - Meaning: Handoff draft created by the explicitly selected review/disposition return transition.
  - Minimum Count: 1
  - Maximum Count: 1
  - Target Kind: artifact
  - Schema Constraint: tiinex.handoff.v1
  - Generation Binding: [Return review / disposition generation](return-review-disposition-handoff-generation-authority.trace.md)

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

- Applicability Meaning: Use when the sender is returning a bounded review, disposition, PASS/rework result, or decision rather than transferring implementation work.
- Failure Meaning: Authoring remains unavailable when the Handoff schema, exact generation authority, destination, or required endpoint inputs cannot be qualified.
- Unknown Meaning: Unknown disposition or recipient remains unresolved and must not be guessed.

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

- Does Not Prove: implementation completion, recipient acceptance, Task closure, endpoint authority, or execution of the returned disposition.
- Must Not Be Inferred: that PASS/rework text automatically changes lifecycle state outside the explicit receiving workflow.

---

# Continuity Integrity

- sha256-base64url-c14n-v2
  - Towards: self
  - Value:0PPW8O-5D-0IfhckunD21cqIZ44kxQKc-_4sTDkfzTM