# Evidence Image Documentation Form Surface

## Surface Identity

- Surface Name: Document one or more images as Evidence
- Surface ID: tiinex.evidence.v1.document-images.surface.experimental
- Surface Kind: form
- Stability: experimental
- Version: experimental-local-1

## Surface Role

- Purpose: Present a single-page, accessible Evidence authoring context focused on describing one related observation supported by images.
- Primary Audience: human creators and human-assisted tools
- Primary Use: editing and reviewing an Evidence creation candidate
- Not For: independently validating, materializing, or publishing Evidence
- Human Instruction: Describe the supported observation, attach each image as a bounded reference, and explain provenance and limits; open the full Core-driven editor for remaining required values.

## Interface Relationship

- Interface Relationship: across-interfaces
- Interface Boundary: the surface may be rendered by VS Code, Viewer, CLI, or LLM Tooling; the host provides file selection and field controls, but does not redefine schema rules
- Cross-Interface Use: use the same Core creation contract and validation method in every host

## Content Boundary

- May Contain: supported claim, Evidence Role, image references, per-material notes when a qualified representation supports them, provenance details, interpretation limits, and schema-grounded field help
- Must Not Contain: fabricated defaults, hidden mandatory values claimed complete, automatic truth or provenance assertions, or invented per-material semantics outside the qualified Evidence contract
- Required Units: all Core-qualified mandatory Evidence fields must remain accessible, even if not promoted to the initial view
- Ordering Policy: first show the observation, then material and source, then preservation and interpretation limits; order is presentation-only

## Interaction Capability

- Supported Interactions: select or attach image references, edit qualifying fields, reveal missing inputs, request validation, and open the full form
- User Invocation: optional task-focused entry from New Artifact or Attach to Form; no compulsory wizard
- Write Capability: draft-only
- Side Effects: none until a separate Core-qualified Create action is confirmed
- Confirmation Required: explicit Create action under the same Core contract

## Disclosure Boundary

- What Is Disclosed: every entered value, requiredness, Core-qualified defaults, and precise remaining missing inputs
- What Is Hidden Or Deferred: optional detail fields may be collapsed; mandatory information is never silently resolved
- Expansion Path: disclose source-linked help and the generic Full Form at any point without discarding data

## Implementation Limits

- Does Not Provide: canonical Form Profile schema, operational `.forms` discovery, profile-to-schema companion binding, per-file Evidence subrecords, or Core validation itself
- Must Not Be Used To Claim: portability acceptance, active profile discovery, correctness of a generated Evidence, or a new canonical naming convention
- Known Failure Modes: a host lacking repeating materials must retain the current Evidence material group and disclose the missing per-material behavior rather than invent it

## Interaction Units

- Unit Source: schema-grounded Core `tiinex.evidence.v1` creation contract, not VS Code field names or a local validation copy
- Unit Grouping: supported observation; evidence material; provenance; preservation and fidelity; interpretation limits
- Missing Unit Behavior: reveal and request the Core-required value; never auto-fill a nonqualified requirement

## Portability Notes

- A valid host may render this description as a one-page form, typed CLI prompts, an LLM question sequence, or Viewer controls without copying validation rules.
- This is an *experimental presentation surface*, not a canonical `tiinex.form.profile.v1` and not evidence that a `.forms` folder currently makes the surface discoverable.
