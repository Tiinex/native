# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.decision.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/decision/tiinex.decision.v1.schema.md)
  - Created At: 2026-10-03 18:33:31
  - Trace: [001-native-structural-namespace-and-schema-companion-boundary-decision.trace.md](001-native-structural-namespace-and-schema-companion-boundary-decision.trace.md)
  - Origin:
    - [relative](001-native-structural-namespace-and-schema-companion-boundary-decision.trace.md)
- Current
  - Current Schema: [tiinex.decision.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/decision/tiinex.decision.v1.schema.md)
  - Created At: 2026-10-05 13:18:22
  - Authors: Anchor; Sigma
  - Why: Resolve the extraction frontier without creating parallel writable schema authority or coupling carriage to content activation.
  - Summary: Keep canonical schema semantics in Docs while Native owns the first-party distribution snapshot and schema-specific companions through explicit content composition.
  - Status: ready/local

---

# Docs Canonical Schema Authority And Native Distribution Snapshot

This Decision resolves the authority ambiguity left by the initial Native extraction frontier without rewriting the historical extraction Decision.

## Decision

- State: accepted
- Docs remains the canonical semantic/schema contract authority for first-party Tiinex schema Markdown.
- Native `.topics/.schemas` is the maintained first-party **distribution snapshot** of the selected canonical Docs schema set plus co-located schema-specific companions that belong to the first-party Native distribution.
- Byte-exact schema presence in both Docs and Native is not parallel semantic authority: Docs owns contract meaning and schema-development mutation; Native owns the composed/distributed first-party snapshot consumed by bootstrap/runtime composition.
- Core remains the owner of generic schema/runtime mechanics: parsing, registry/contract compilation and validation, material identity, synchronization/projection mechanics, runtime initialization, qualification, and host-neutral operations.
- Schema-specific JavaScript companions remain the bounded transitional exception established by the parent Decision. Their placement beside the Native schema snapshot does not make them generic Native runtime source and does not require premature conversion into Tiinex artifacts.
- A carried Workspace is not automatically an active content source. Automatic reusable-content selection requires the package to declare `tiinex.contentSource`; explicit content-source selection remains permitted independently of package declaration.
- Local/unpublished schema synchronization checks must not erase already-qualified immutable publication provenance when the Native distribution snapshot remains byte-exact with the canonical Docs source.

## Basis

- Schema Development and canonical contract mutation already belong to Docs and should not acquire a second writable authority merely because first-party runtime distribution moved into Native.
- Native needs a complete first-party schema snapshot and companions so bootstrap/package composition can remain self-contained without requiring Docs as a runtime package dependency.
- Core needs schema mechanics but must not regain schema-family content authority merely because it performs synchronization or runtime qualification.
- Separating carried Workspace membership from active content-source selection prevents a full carrier from accidentally activating every registered surface it happens to transport.

## Consequences

- The parent Decision wording that canonical schemas were intended to converge under Native is superseded **only for semantic authority**: physical first-party distribution convergence under Native remains valid, while canonical contract authority stays in Docs.
- Native schema sync is an explicit projection/distribution operation from Docs authority into Native, not a competing edit path for schema semantics.
- Bootstrap composition may select Native `.schemas` without simultaneously selecting Docs `.schemas` merely because both Workspaces are carried.
- Exact immutable historical Docs references remain valid recovery/provenance locators; publication provenance is preserved while bytes remain exact.
- Existing first-party companions remain co-located with the Native snapshot until a future qualified companion artifact contract can replace the transitional JavaScript exception without loss.

## Review Conditions

- Review if schema contract mutation authority intentionally moves away from Docs.
- Review when schema-specific JavaScript companions can be represented completely as Tiinex companion artifacts.
- Review if a future package-composition model requires stronger content-source activation semantics than declaration plus explicit selection.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-native-structural-namespace-and-schema-companion-boundary-decision.trace.md](001-native-structural-namespace-and-schema-companion-boundary-decision.trace.md)
  - Value: 1UQLL8usMGl9EUZvTu9fo7SFv2k1xqsQL6N1g-tSYqU

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: udoaKivxqZ7HaCIpw0n-YBGLStLhskx-Qtb8gDro8Os