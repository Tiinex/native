# Continuity Context

- Envelope Schema: tiinex.root.v1
- Current
  - Current Schema: tiinex.schema.generation.v1
  - Created At: 2026-10-10 16:00:00
  - Summary: Explicit qualified authoring guidance for Preserve source excerpt Evidence.

---

# Preserve source excerpt Evidence Generation Authority

## Contract Identity Model

- Durable Identity Policy: exact Core-native artifact path plus continuity and integrity of this generation authority.
- Provisional Handle Policy: local generation handles are scoped to this contract only.

## Contract Identity

- Contract Name: Preserve source excerpt Evidence authoring generation contract
- Contract Kind: generation-contract
- Contract State: maintained-core-native
- Contract Owner: Tiinex Core Evidence authoring transition surface

## Contract Target

- Target Schema: tiinex.evidence.v1
- Target Scope: one operator-reviewed Evidence artifact draft

## Contract Nodes

- preserve-source-excerpt-generation
  - Contract Node Type: generation
  - Contract Node Label: Preserve source excerpt Evidence authoring generation
  - Applies To: tiinex.evidence.v1
  - Required: true

## Contract Boundary

- Deterministic Boundary: only the explicitly declared defaultable inputs and known target Evidence authoring shape are machine-owned.
- Human Boundary: the operator chooses a transition, supplies actual sources and materials, and reviews or replaces all defaults.
- Runtime Boundary: the selected host controls local draft creation, actual file and asset materialization and persistence only after qualified review.
- Out Of Scope: factual truth, automatic evidence gathering, claim verdicts, provenance attestation, Transition execution, remote publication or implicit consent.

## Generation Identity

- Generation Handle: tiinex.core.evidence.preserve-source-excerpt.v1.generation
- Generation Name: Preserve source excerpt Evidence generation
- Generation Kind: form-flow

## Generation Target

- Target Schema: tiinex.evidence.v1
- Target Output: one reviewed Evidence artifact draft

## Required Inputs

- Supported Claim Or Question
  - Input Source Policy: defaulted-input
  - Defaultable Input: {"Supported Claim Or Question":"What does the preserved source excerpt bear on?","Evidence Role":"contextualizes"}
  - Unknown Handling: ask-user

- Preservation Basis
  - Input Source Policy: defaulted-input
  - Defaultable Input: "Readable source excerpt preserved in this Evidence after operator review."
  - Unknown Handling: ask-user

- Provenance Limits
  - Input Source Policy: defaulted-input
  - Defaultable Input: "The excerpt alone does not establish surrounding context or complete source provenance."
  - Unknown Handling: ask-user

- Known Losses
  - Input Source Policy: defaulted-input
  - Defaultable Input: "Context outside the selected excerpt may be omitted."
  - Unknown Handling: ask-user

- Does Not Prove
  - Input Source Policy: defaulted-input
  - Defaultable Input: "The supported claim is true, or that the source is authentic or complete."
  - Unknown Handling: ask-user

- Must Not Be Treated As
  - Input Source Policy: defaulted-input
  - Defaultable Input: "Source authentication, consent, attestation, or final validation."
  - Unknown Handling: ask-user

- Known Source
  - Input Source Policy: human-input
  - User Prompt: Specify the actual original source or bounded source descriptor.
  - Unknown Handling: ask-user

- Evidence Material
  - Input Source Policy: human-input
  - User Prompt: Add at least one coherent material entry with a real preserved excerpt, explicit attachment or bounded preservation reference.
  - Unknown Handling: ask-user

- Preservation State
  - Input Source Policy: human-input
  - User Prompt: State where and how the material is preserved.
  - Unknown Handling: ask-user

## Generation Steps

- request-real-source
  - Step Action: ask-user
  - Step Order: 10
  - Review Needed: yes

- apply-reviewed-defaults
  - Step Action: fill-value
  - Step Order: 20
  - Review Needed: yes

- review-evidence
  - Step Action: review
  - Step Order: 30
  - Review Needed: yes

## Output Boundary

- Output Kind: filled-draft
- Review State: unreviewed draft
- Mutation Policy: local-draft-only
- Save Policy: caller-owned

## Interpretation Limits

- Does Not Mean: default values or selections are factual claims, verified preservation or permission to run a Transition
- Must Not Be Used To Claim: validation findings, authoritative source identity, consent or accepted user observations

---

# Continuity Integrity

- sha256-base64url-c14n-v2
  - Towards: self
  - Value: fbFELhUOhmm64Hg_4i7XaRYWfMKFS-Ed7nP1cz2Ta7s