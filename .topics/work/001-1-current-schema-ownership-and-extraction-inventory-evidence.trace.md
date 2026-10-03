# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-10-03 18:34:51
  - Trace: [001-native-schema-authority-and-companion-extraction-task.trace.md](001-native-schema-authority-and-companion-extraction-task.trace.md)
  - Origin:
    - [relative](001-native-schema-authority-and-companion-extraction-task.trace.md)
- Current
  - Current Schema: [tiinex.evidence.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/evidence/tiinex.evidence.v1.schema.md)
  - Created At: 2026-10-03 18:36:06
  - Authors: Anchor
  - Why: Prevent raw companion moves from creating duplicate authority or a Core↔Native runtime dependency cycle.
  - Summary: Bound the exact Docs/Core schema material and runtime coupling that controls safe extraction into Native.
  - Status: ready/local

---

# Current Schema Ownership And Extraction Inventory Evidence

## Supported Claim Or Question

- Supported Claim Or Question: what current schema material is maintained in Docs/Core, which parts are safe Native ownership candidates, and why raw relocation of all schema JavaScript would currently create an unsafe dependency seam
- Evidence Role: bound the Native schema extraction task before moving schema-specific executable companions
- Target Artifact: [Native Schema Authority And Companion Extraction](001-native-schema-authority-and-companion-extraction-task.trace.md)
- Review Context: post-fresh-start Native ownership review after the Scaffold catalog moved to `.topics/.scaffolds`

## Provenance

- Known Source: exact carried Major 017 Docs, Core, and Native Workspace bytes
- Preservation Basis: filesystem inventory of Docs canonical schema Markdown and Core `src/schemas`; Core registry imports; static import analysis of current specialized schema companion families
- Provenance Limits: counts describe current physical/runtime coupling and do not by themselves define the final API shape for the Core/Native composition seam

## Evidence Material

- Material: exact current schema ownership inventory and dependency-coupling classification
- Material Kind: read-only repository/source inventory
- Canonical Docs Schema Markdown: 109 schema artifacts under Docs `.topics/.schemas`
- Core `src/schemas` Total Files: 225
- Core Schema JavaScript Files: 141
- Core Schema JSON Files: 73
- Core Canonical Tiinex Trace Artifacts Under `src/schemas`: 11
- Specialized Schema Modules Registered Explicitly: 25 including Root (24 imported specialized modules plus Root)
- Co-located Specialized Companion Files: 187 including the Root family; these include schema modules, source/binding/runtime JSON, validators, presenters, transitions, capabilities, findings, i18n, contracts, creation/local-materialization helpers where present
- Specialized Companion External Core Imports: current specialized families contain at least 77 relative imports from 53 companion files into generic Core mechanics or other non-family runtime surfaces
- Canonical Trace Material Mixed Under Core Source: 3 first-party Entry artifacts; 1 Handoff semantic package artifact; 1 Handoff schema transition-companion artifact; 6 Handoff Transition Definition / generation-authority artifacts
- Native Scaffold Result: 8 Scaffold artifacts now live byte-exactly under Native `.topics/.scaffolds`; Native `src` contains zero `.trace.md` artifacts

## Preservation And Fidelity

- Preservation State: this Evidence is read-only with respect to schema companion extraction; no Core schema file was moved by this inventory
- Fidelity Notes: the 8 Scaffold artifacts were separately moved byte-exactly because their relative topology remained unchanged and they have no executable import dependency seam
- Known Losses: none; exact current Core/Docs bytes remain carried

## Interpretation Limits

- Not Yet Used As: authority to move schema-specific JavaScript into Native unchanged
- Does Not Prove: that every file co-located with a specialized schema belongs in Native permanently; generic/runtime adapters may remain Core when they implement Core mechanics rather than schema-family semantics
- Must Not Be Treated As: permission to create duplicate maintained copies in Docs/Core/Native or to create a Core→Native→Core runtime package cycle

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-native-schema-authority-and-companion-extraction-task.trace.md](001-native-schema-authority-and-companion-extraction-task.trace.md)
  - Value: eqRBt-SMyQ5dlhjmNKIQMBjNXzBmBJW1TWP1Ig-j5qA

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: 3SCMWltYrbKIbWRHW-QwirvAbeW2U0CLUCcL2yI5N78