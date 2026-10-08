# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Current
  - Current Schema: [tiinex.transition.definition.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/transition/definition/tiinex.transition.definition.v1.schema.md)
  - Created At: 2026-10-07 21:15:00
  - Authors: Anchor; Sigma
  - Summary: Native Core Handoff authoring transition for Return bounded result.
  - Status: ready/local

---

# Return bounded result

## Transition Identity

- Name: Return bounded result
- Version: 1
- Canonical Identifier: tiinex.core.handoff.return-bounded-result.v1
- Human Label: Return bounded result
- Transition Family: tiinex.handoff.authoring.v1

## Purpose And Scope

- Purpose: Create one Handoff that returns a completed bounded result, evidence, or outcome to the intended receiving party without inventing additional work authority.
- Semantic Boundary: Result-return Handoff authoring only; it does not prove result correctness, recipient acceptance, closure, or authority beyond the explicit returned material.

## Input Roles

- none

## Output Roles

- handoff
  - Meaning: Handoff draft created by the explicitly selected result-return transition.
  - Minimum Count: 1
  - Maximum Count: 1
  - Target Kind: artifact
  - Schema Constraint: tiinex.handoff.v1
  - Generation Binding: [Return bounded result generation](return-bounded-result-handoff-generation-authority.trace.md)

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

- Applicability Meaning: Use when bounded work is complete enough to return a concrete result, evidence, or outcome to another party.
- Failure Meaning: Authoring remains unavailable when the Handoff schema, exact generation authority, destination, or required endpoint inputs cannot be qualified.
- Unknown Meaning: Unknown completion state, recipient, or result content remains unresolved and must not be guessed.

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

- Does Not Prove: result correctness, recipient acceptance, overall Task completion, closure, endpoint authority, or publication.
- Must Not Be Inferred: that a returned result is accepted or sufficient merely because this transition was selected.

---

# Continuity Integrity

- sha256-base64url-c14n-v2
  - Towards: self
  - Value:ajLlWjVTbr9InT0NEl2Cxyrk_NXH87yMxIhSQ3iDp8Q