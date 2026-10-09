# Candidate: Individually Described Evidence Materials

**Authority:** nonoperative Native-owner architecture fixture (not a Tiinex schema or qualified artifact).
**Current truth:** published immutable `tiinex.evidence.v1` remains unchanged; this fixture does not make its ordinary-field Evidence Material repeatable.

## Intent

An Evidence is one bounded claim/question plus *one or more* individually identifiable material entries.
Every entry can carry a distinct source/reference, type, description and its own provenance and limits. The overall Evidence retains shared claim, global provenance, preservation/fidelity and interpretation limits. One claim does not require one Evidence per screenshot.

## Candidate representation (not yet executable)

A future separately identified Native Evidence schema would qualify a repeatable named material declaration inside `## Evidence Material`:

```markdown
## Evidence Material

- original-image-a
  - Material: [Screenshot A](../assets/a.gif)
  - Material Kind: screenshot
  - Description: Initial form state before user edits
  - Material Provenance: Screen recording frame 01:23; retained original GIF
  - Material Limits: The GIF shows only one Windows session
- original-image-b
  - Material: [Screenshot B](../assets/b.gif)
  - Material Kind: screenshot
  - Description: Completed form state after separate material attachment
  - Material Provenance: Screen recording frame 02:10; retained original GIF
  - Material Limits: Does not prove that Create preserves all fields
```

**The name is a stable per-entry identity within that Evidence, not automatically a material hash, semantic claim or global registry key.** Exact Native schema version, inheritance override, placement and publication remain unqualified until owner review.

## Required contract decisions

1. Decide a versioned Evidence schema identity and an exact Source Snapshot/binding; never silently modify published `tiinex.evidence.v1`.
2. Define repeatable section grammar and exact allowed per-entry fields. Candidate mandatory `Material`, `Material Kind`, and entry name; candidate optional `Description`, `Material Provenance`, `Material Limits` (subject to Native's qualification). Do not copy Handoff's `Transfer Kind` semantics.
3. Duplicate names must fail closed. Identical reference URLs may be deliberate distinct views but must remain individually attributable; determine exact policy before validation or rejection.
4. An entry with no reference must not silently substitute a fabricated asset; a binary/external payload can use a bounded preservation artifact reference, with explicit fidelity and provenance limits.
5. Existing Evidence v1 remains readable and creatable. Never split legacy semicolon-concatenated Material strings automatically; that would misattribute descriptions and destroy provenance.
6. Core must expose one `named-declaration-section` **only after** Native authorization, render each exact record, independently validate its structured fields and preserve ordering and entry identity after readback.
7. VS Code/Viewer/CLI/LLM Tooling must consume the same Core contract. `+ Add Material` and per-entry file picking cannot imply validation or asset relocation by the host.

## Verification matrix before Sigma

- One, two, and many material entries have independent references, descriptions and provenance.
- Required per-entry fields, duplicate identity, unknown fields, newline-in-field, path/reference qualifications and unsupported source types fail closed.
- Core roundtrip preserves each item and the shared Evidence boundaries; inspect and re-open observe the same record order.
- Legacy v1 remains byte/semantic compatible (without inference or upgrade).
- Generic form Add/Remove, Attach-to-Form to the correct item, Preview/Create and exact Core-qualified Parent context tested in automated host simulation and Windows.

## Experimental Core evidence

Current Core's already-qualified `named-declaration-section` works with two independent entries in `tiinex.entry.session.v1 / Grounding Material` and correctly rejects duplicates/missing fields. Core's `tiinex.evidence.v1` remains ordinary-field and now rejects attempts to supply unqualified structured material data without silently dropping or flattening it. This is a reusable architecture proof **not** Schema Version qualification.
