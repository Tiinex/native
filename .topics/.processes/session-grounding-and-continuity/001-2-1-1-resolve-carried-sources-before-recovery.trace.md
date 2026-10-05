# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.transition.definition.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/transition/definition/tiinex.transition.definition.v1.schema.md)
  - Created At: 2026-10-05 20:28:56
  - Trace: [001-2-1-qualify-required-material-and-applicable-guidance.trace.md](001-2-1-qualify-required-material-and-applicable-guidance.trace.md)
  - Origin:
    - [relative](001-2-1-qualify-required-material-and-applicable-guidance.trace.md)
- Current
  - Current Schema: [tiinex.transition.definition.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/transition/definition/tiinex.transition.definition.v1.schema.md)
  - Created At: 2026-10-05 20:28:58
  - Authors: Anchor
  - Why: Source preference preserves exact carried bytes and provenance; convenience or freshness does not silently replace the source selected by current authority.
  - Summary: Resolve required material from the strongest qualified carried source before escalating to immutable or live external recovery.
  - Status: ready/local

---

# Resolve Carried Sources Before Recovery

## Transition Identity

- Name: Resolve Carried Sources Before Recovery
- Version: 1
- Canonical Identifier: tiinex.process.session-grounding.resolve-carried-sources.v1
- Transition Family: session-grounding-and-continuity
- Human Label: Resolve Carried Sources Before Recovery
- Related Definition: [Resolve Carried Sources Before Recovery](001-1-1-1-resolve-carried-sources-before-recovery.trace.md)

## Purpose And Scope

- Purpose: Resolve required material from the strongest qualified carried source before escalating to immutable or live external recovery.
- Semantic Boundary: Source preference preserves exact carried bytes and provenance; convenience or freshness does not silently replace the source selected by current authority.
- Intended Domains: bounded session grounding, recovery and continuity according to the owning Process
- Not Intended For: hidden execution state, authority inference from presence, or provider-specific semantics outside the semantically owning Process

## Input Roles

- qualified grounding material
  - Meaning: the bounded material obligations and applicable guidance requiring source resolution
  - Minimum Count: 1
  - Maximum Count: 1
  - Acquisition Policy: invocation-provided
  - Target Kind: non-artifact

## Output Roles

- resolved grounding sources
  - Meaning: the qualified carried/cache/composed sources used for grounding together with any explicit recovery escalation
  - Minimum Count: 1
  - Maximum Count: 1
  - Target Kind: non-artifact

## Lifecycle And Continuity Effects

### Lifecycle Effects

- produce resolved grounding sources
  - Target Binding: resolved grounding sources
  - Effect: create-new
  - Logical Continuity: no-subject-effect

### Parent Effects

- none

## Relation Effects

- none

## Applicability And Conditions

- Applicability Meaning: applicable when required grounding material must be resolved from carried, cache, composed, immutable or live source surfaces
- Unknown Meaning: if a required source cannot be qualified, preserve its absence and escalation boundary rather than substituting an unrelated live source

## Authoring Bindings

- none

## Placement Intent

### Destination Bindings

- none

### Output Placements

- resolved grounding sources
  - Output Binding: resolved grounding sources
  - Placement Intent: no-materialization

## Interpretation Limits

- Does Not Prove: external-source authority, currentness, applicability or permission to recover broadly
- Must Not Be Inferred: that live repository/provider state is a better source merely because it is newer or easier to query
- Execution Boundary: the Transition Definition is reusable Process topology; concrete grounding truth remains in qualified Entry/Handoff/Role/Task/material and the actual host/runtime observations.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-2-1-qualify-required-material-and-applicable-guidance.trace.md](001-2-1-qualify-required-material-and-applicable-guidance.trace.md)
  - Value: 6Vz4TlXhNZaCphh1WYMFE35PUjTj3mFokPkiKAol3ew

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: xIGH5UZ_ctgk9IkvCC_NHARfjZvAn1N9nmkD4brwG0Q