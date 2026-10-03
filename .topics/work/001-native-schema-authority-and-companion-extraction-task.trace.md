# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.decision.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/decision/tiinex.decision.v1.schema.md)
  - Created At: 2026-10-03 18:33:31
  - Trace: [001-native-structural-namespace-and-schema-companion-boundary-decision.trace.md](../decisions/001-native-structural-namespace-and-schema-companion-boundary-decision.trace.md)
  - Origin:
    - [relative](../decisions/001-native-structural-namespace-and-schema-companion-boundary-decision.trace.md)
- Current
  - Current Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-10-03 18:34:51
  - Authors: Anchor
  - Why: Converge schema ownership without duplicate maintenance authority or a Core↔Native runtime package cycle.
  - Summary: Extract first-party schema authority and companions from Docs/Core into Native through a one-way dependency-safe composition boundary.
  - Status: ready/local

---

# Native Schema Authority And Companion Extraction

## Objective

Move first-party schema authority and schema-specific companions into Native `.topics/.schemas` without creating duplicate maintained authorities or a Core↔Native runtime dependency cycle, while leaving generic schema engine/runtime mechanics in Core.

## Done Criteria

- Native `.topics/.schemas` is the single maintained first-party home for canonical schema material and schema-specific companions selected for extraction.
- Docs/Core no longer maintain duplicate writable copies of material that has moved to Native; historical immutable references remain valid recovery locators.
- Core generic schema mechanics remain in Core: registry mechanics, parsing, contract compilation/projection, creation engine, reference qualification, material identity, publication/sync mechanics, and other domain-generic runtime behavior.
- Every moved executable companion has a one-way loading/composition boundary; no runtime package cycle exists between `@tiinex/core` and `@tiinex/native`.
- Schema-specific JavaScript under Native `.topics/.schemas` is explicitly transitional companion material and is not treated as generic application/runtime source.
- Existing published schema consumers continue to resolve or qualify through a controlled authority migration; no mass permalink churn is required merely because ownership moves.
- Entry, Handoff transition/semantic package, and other canonical `.trace.md` material currently under Core schema source directories is dispositioned as Native semantic material rather than left mixed under `src`.
- Native package/test/pack qualification proves all intended `.topics/.schemas` and `.topics/.scaffolds` material is shipped.
- Core and host qualification proves no schema registry/resolution/validation regression after extraction.

## Scope

- Inventory and classify all `core/src/schemas` material into generic Core engine vs schema-family companion vs canonical Tiinex artifact.
- Establish the Core/Native composition seam before moving any schema-specific executable module that imports Core mechanics.
- Migrate canonical schema Markdown and non-executable companions first where safe, then executable companions only when their dependency direction is qualified.
- Update schema publication/synchronization source authority from Docs to Native only through an explicit migration with immutable recovery preserved.
- Keep this work bounded to first-party schema/native ownership; unrelated Core runtime or host UX refactors are out of scope.

## Dependencies

- [Native Structural Namespace And Schema Companion Boundary Decision](../decisions/001-native-structural-namespace-and-schema-companion-boundary-decision.trace.md)
- Current published 109/109 schema baseline must remain recoverable during authority migration.
- Existing Core material-identity semantics must continue treating byte-identical immutable historical locators as valid rather than stale solely because a newer owner/revision exists.
- Schema Development remains the semantic process for material schema contract changes; this extraction task is an ownership/packaging migration and must not silently redesign schema contracts.

## Execution Order

1. Classify current Core schema tree and generate an exact ownership manifest.
2. Define a one-way Native companion descriptor/composition seam that does not require Native runtime modules to import Core while Core imports Native.
3. Move canonical non-code Tiinex artifacts and static/data companions with exact-byte checks.
4. Migrate schema publication authority from Docs to Native with immutable historical recovery evidence.
5. Move/refactor executable schema companions through the qualified seam.
6. Remove obsolete Core/Docs maintained copies only after consumers and generated material point to Native authority.
7. Run focused schema/entry/handoff qualification, then full project audit/checkpoint.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-native-structural-namespace-and-schema-companion-boundary-decision.trace.md](../decisions/001-native-structural-namespace-and-schema-companion-boundary-decision.trace.md)
  - Value: 1UQLL8usMGl9EUZvTu9fo7SFv2k1xqsQL6N1g-tSYqU

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: eqRBt-SMyQ5dlhjmNKIQMBjNXzBmBJW1TWP1Ig-j5qA