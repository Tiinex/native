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
  - Created At: 2026-10-04 12:28:37
  - Authors: Anchor
  - Why: Enable simple package composition while preserving ordinary dot-directories and artifact-driven semantics.
  - Summary: Refine dot-prefix semantics into recursively discoverable registered Tiinex surfaces without making directory placement artifact authority.
  - Status: ready/local

---

# Recursive Registered Discovery Surface Convention

This Decision refines Native structural namespace semantics so package composition can remain simple without making filesystem placement semantic authority.

## Decision

- State: accepted
- Subject: registered dot-prefixed Tiinex discovery surfaces beneath `.topics`
- Decision: A dot-prefixed directory name has Tiinex-specific meaning only when that exact name is registered by Tiinex as a discovery surface. A registered discovery surface may be recognized recursively beneath `.topics` and may occur more than once when the owning surface contract permits it. General Tiinex discovery still scans qualified material beneath `.topics` and classifies artifacts by their own schema/type; directory placement never replaces artifact qualification. Catalog/import discovery may use registered discovery surfaces as an explicit signal that a package or module offers reusable material of that surface kind for composition. Surface membership does not establish artifact type, Parent ancestry, applicability, currentness, acceptance, or mutation authority.
- Initial Registered Surfaces: `.workspaces`, `.schemas`, `.scaffolds`, `.entries`, and `.processes`. Each may be discovered recursively beneath `.topics` and may occur more than once. Each surface retains its own qualification and selection rules; registration does not require identical activation behavior across kinds.
- Unknown Dot Directories: Dot-prefixed directories whose names are not registered Tiinex discovery surfaces have no Tiinex-specific meaning merely because of the prefix. Tooling must not warn, activate, import, or reject them solely for being dot-prefixed. This preserves ordinary directories such as `.git`, `.vscode`, and package-specific hidden material.
- Workspace Identity Surface: `.topics/.workspaces` remains the natural conventional coordinate for a package or repository primary Workspace identity, including current packager defaults, but it is not the only legal location of a `.workspaces` discovery surface. Nested `.workspaces` surfaces are discoverable identity material and must not become primary merely because discovery encountered them. Primary/source selection remains an explicit surface-specific Tooling concern.
- Package Composition: Reusable package composition should discover registered surfaces recursively beneath the package's `.topics` boundary and preserve exact source/package/module/path provenance rather than physically merging authority into one maintained tree. A package may therefore group reusable Tiinex material by module while still exposing its registered surfaces for deterministic discovery.
- Surface Validation: A registered surface only offers candidates. The surface-specific resolver must still validate the candidate according to its artifact/companion contract. For example, `.processes` does not make an arbitrary file a Process and does not make a Process applicable; `.schemas` may additionally carry qualified schema companions that are not yet Tiinex artifacts under the existing bounded companion exception.

## Basis

- Requiring every reusable artifact family at one fixed top-level coordinate would make module-oriented packages unnecessarily flat and make partial reuse awkward.
- Treating every dot-prefixed directory as Tiinex-reserved would conflict with ordinary repository and editor metadata and would create noisy false findings.
- Artifact semantics should remain self-describing and qualification-driven, while filesystem structure may provide deterministic discovery and composition hints.
- Recursive registered surfaces give humans and LLMs one simple convention for reusable package material without requiring README, `llms.txt`, or per-package path indexes.

## Consequences

- The earlier broad wording that `.topics/.<name>` is reserved merely because it is dot-prefixed is superseded by exact registered-name semantics.
- Native reusable Process and Entry catalogs may move to `.processes` and `.entries` without making those directories exclusive homes for all Process or Entry artifacts.
- Core may implement one generic recursive registered-surface discovery mechanism and feed surface-specific catalog/registry logic without package-name special cases.
- Unknown dot-prefixed directories beneath `.topics` remain ordinary filesystem material unless another explicit Tiinex contract gives them meaning.
- Surface registration is convenience/composition authority only; semantic applicability continues to require explicit qualified authority.

## Review Conditions

- Review when a new reusable catalog/import family needs registration.
- Review if a surface requires stronger selection semantics than recursive discovery, such as conventional primary Workspace selection; encode that selection rule in the surface-specific resolver rather than turning recursive discovery into a root-only placement rule.
- Review if future Tiinex artifact companions eliminate the current schema-companion exception.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-native-structural-namespace-and-schema-companion-boundary-decision.trace.md](001-native-structural-namespace-and-schema-companion-boundary-decision.trace.md)
  - Value: 1UQLL8usMGl9EUZvTu9fo7SFv2k1xqsQL6N1g-tSYqU

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: i-KYoN7XEeKxG2aboog1HYDt2EdMrZzy6msyk1x9phQ
