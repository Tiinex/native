# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Current
  - Current Schema: [tiinex.decision.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/decision/tiinex.decision.v1.schema.md)
  - Created At: 2026-10-03 18:33:31
  - Authors: Anchor
  - Why: Prevent canonical Tiinex artifacts from mixing with executable source while avoiding duplicate schema authority or Core↔Native dependency cycles.
  - Summary: Land the reserved dot-root convention, Native Scaffold placement, and safe schema-companion extraction boundary.
  - Status: ready/local

---

# Native Structural Namespace And Schema Companion Boundary Decision

Native separates Tiinex semantic/structural material from ordinary executable source while keeping schema ownership cohesive enough to avoid parallel maintenance authority.

## Decision

- State: accepted
- `.topics/.<name>` is reserved for registered Tiinex structural/authority namespaces whose directory name has Tiinex-known meaning.
- `.topics/<name>` remains ordinary Workspace/domain/lifecycle material whose name is not a reserved structural authority.
- Dot-prefix means structural/authority namespace; it does not mean hidden, temporary, generated, or disposable.
- New dot-prefixed roots must not be improvised locally; the convention must be qualified before use.
- Canonical Tiinex artifact material belongs under `.topics`, not under `src` merely because it is distributed by an npm package.
- Executable implementation normally belongs under `src`.
- First-party Scaffold artifacts are owned by Native under `.topics/.scaffolds`.
- Canonical schemas and their schema-specific companions are intended to converge under Native `.topics/.schemas` so one schema family has one maintained ownership location.
- Schema-specific JavaScript is a bounded transitional exception: it may live beside the schema family under `.topics/.schemas` until equivalent Tiinex Markdown companions can replace it. This exception does not apply to generic runtime/application code.
- The current Core schema engine, registry mechanics, parsing, creation, reference qualification, material identity, and other generic schema runtime mechanics remain Core concerns.
- Existing schema-specific executable companions must not be moved from Core by raw path relocation when they import Core runtime mechanics. A dependency seam must be established first so extraction does not create a Core↔Native runtime dependency cycle.

## Basis

- `src` should remain legible as executable source rather than a mixed store of source code and canonical Tiinex artifacts.
- Structural namespaces such as `.workspaces`, `.schemas`, and `.scaffolds` need names that Core/hosts may recognize semantically; ordinary domain/lifecycle roots do not.
- Keeping one schema family split across two independently maintained repositories would create duplicate authority and synchronization debt.
- Current Core schema-specific modules frequently import generic Core helpers, so moving those files to Native unchanged would introduce an unsafe reverse dependency if Core also consumed Native.

## Consequences

- Native Scaffold catalog moves byte-exactly from `src/scaffolds` to `.topics/.scaffolds` and the npm package explicitly ships `.topics`.
- Native must contain no canonical `.trace.md` material under `src` after this migration.
- Schema extraction is a separate bounded follow-up: classify schema-specific companions, design a one-way composition/loading boundary, then relocate without leaving duplicate maintained copies.
- Cold-start consumers may treat registered dot-roots as structural discovery surfaces, but must not infer semantic ancestry, applicability, acceptance, or lifecycle from directory placement alone.

## Review Conditions

- Revisit the transitional JavaScript exception when Tiinex Markdown companion contracts can represent the required schema behavior without loss.
- Revisit the Core/Native loading seam if schema-specific companions can be made dependency-free data/behavior descriptors or if composition is moved cleanly above Core.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: 1UQLL8usMGl9EUZvTu9fo7SFv2k1xqsQL6N1g-tSYqU