# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.transition.definition.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/transition/definition/tiinex.transition.definition.v1.schema.md)
  - Created At: 2026-10-05 19:24:21
  - Trace: [001-1-1-qualify-required-material-and-applicable-guidance.trace.md](001-1-1-qualify-required-material-and-applicable-guidance.trace.md)
  - Origin:
    - [relative](001-1-1-qualify-required-material-and-applicable-guidance.trace.md)
- Current
  - Current Schema: [tiinex.transition.definition.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/transition/definition/tiinex.transition.definition.v1.schema.md)
  - Created At: 2026-10-05 19:24:23
  - Authors: Anchor
  - Why: Make source-preference and recovery escalation an independently visible grounding step.
  - Summary: Prefer exact carried qualified material before immutable or live external recovery.
  - Status: ready/local

---

# Resolve Carried Sources Before Recovery

## Transition Identity

- Name: Resolve Carried Sources Before Recovery
- Version: 1
- Canonical Identifier: tiinex.process.session-grounding-and-continuity.resolve-carried-sources-before-recovery.v1
- Transition Family: session-grounding-and-continuity
- Human Label: Resolve Carried Sources Before Recovery

## Purpose And Scope

- Purpose: Resolve required material from the strongest qualified carried source before escalating to external recovery.
- Semantic Boundary: Defines this reusable Process position only; it does not prove invocation, execution, authorization, acceptance, or completion.
- Intended Domains: qualified invocations of the owning session-grounding-and-continuity Process
- Not Intended For: selecting current work or executable order from Parent continuity, filename order, or directory position alone

## Input Roles

- none

## Output Roles

- none

## Lifecycle And Continuity Effects

### Lifecycle Effects

- none

### Parent Effects

- none

## Relation Effects

- none

## Applicability And Conditions

- Applicability Meaning: applicable only when the owning Process is qualified for the bounded work and qualified invocation/topology selects this position.
- Unknown Meaning: if applicability, invocation, or topology selection is unresolved, this position remains unresolved rather than being activated by lineage order.

## Authoring Bindings

- none

## Placement Intent

### Destination Bindings

- none

### Output Placements

- none

## Interpretation Limits

- Does Not Prove: that this position was invoked, completed, accepted, or authorized.
- Must Not Be Inferred: executable order, current work, output existence, or mutation authority from Parent continuity, filename dimension, directory proximity, or apparent chronology.
- Execution Boundary: the preserved procedure/decision guidance below describes reusable intent; qualified invocation/context and real execution artifacts remain authoritative about what happened.

## Migration Notes

### Preserved Legacy Step Semantics

### Step Purpose

Resolve required material from the strongest qualified carried source before escalating to external recovery.

### Procedure

- Prefer carried qualified Workspace material, then exact carrier-local/cache representations, then explicitly composed bootstrap/content-source material.
- Use immutable or live external recovery only when the earlier qualified representations are absent, insufficient, or explicitly external.
- Never silently replace exact carried bytes with fresher live repository/provider state merely because the live source is convenient.

### Completion Signal

Every material source used for the bounded grounding has an explicit qualified provenance and any recovery escalation is visible.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-1-1-qualify-required-material-and-applicable-guidance.trace.md](001-1-1-qualify-required-material-and-applicable-guidance.trace.md)
  - Value: hF38loIoRwmWz2FlRyu2DRp8nGqKSG1FKygTtkTaWaE

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value:1k6BSDR4_mDTlH927aSmSDOb_6gM2FxQ0FCxKi1bwAc
