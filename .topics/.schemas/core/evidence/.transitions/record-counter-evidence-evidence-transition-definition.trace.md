# Continuity Context

- Envelope Schema: tiinex.root.v1
- Current
  - Current Schema: tiinex.transition.definition.v1
  - Created At: 2026-10-10 16:00:00
  - Summary: Explicit Evidence authoring Transition Definition: Record counter-evidence.

---

# Record counter-evidence

## Transition Identity

- Name: Record counter-evidence
- Version: 1
- Canonical Identifier: tiinex.core.evidence.record-counter-evidence.v1
- Human Label: Record counter-evidence
- Transition Family: tiinex.evidence.authoring.v1

## Purpose And Scope

- Purpose: Prepare an Evidence draft recording independently preserved material that challenges an existing claim.
- Semantic Boundary: Manually selected read-only authoring defaults for a new Evidence draft; no claim inference, data capture, transition execution or automatic publication.

## Input Roles

- none

## Output Roles

- evidence
  - Meaning: One draft Evidence artifact reviewed and created explicitly by the operator.
  - Minimum Count: 1
  - Maximum Count: 1
  - Target Kind: artifact
  - Schema Constraint: tiinex.evidence.v1
  - Generation Binding: [Record counter-evidence generation](record-counter-evidence-evidence-generation-authority.trace.md)

## Lifecycle And Continuity Effects

### Lifecycle Effects

- create-evidence
  - Target Binding: evidence
  - Effect: create-new
  - Logical Continuity: new-subject
  - Required Materialization Operation: create

### Parent Effects

- none

## Relation Effects

- none

## Applicability And Conditions

- Applicability Meaning: Choose only to document concrete counter-material against a named claim; it does not adjudicate truth or overturn decisions.
- Failure Meaning: Without a qualified Evidence schema, actual preservation boundary, reviewed values, attachment or required inputs the artifact must not be created.
- Unknown Meaning: Unknown facts, sources, images or provenance must be supplied by the operator and must never be inferred from this definition.

## Authoring Bindings

- none

## Placement Intent

### Destination Bindings

- workspace-draft
  - Meaning: Operator-selected local Workspace destination.
  - Required: yes

### Output Placements

- evidence-placement
  - Output Binding: evidence
  - Destination Binding: workspace-draft
  - Placement Intent: new-materialization
  - Naming Authority: explicit-binding
  - Explicit Override Allowed: no

## Interpretation Limits

- Does Not Prove: the source material is true, preserved, authenticated, complete, or adequate for a decision
- Must Not Be Inferred: automatic material creation, user consent, applicable transition recommendation, or a verified factual claim

---

# Continuity Integrity

- sha256-base64url-c14n-v2
  - Towards: self
  - Value: 3uI_ezb_aZBzoPAdAfitjS7G5IvR9-PHUwHaNejkNcU