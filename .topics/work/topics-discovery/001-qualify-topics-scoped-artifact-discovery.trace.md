# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Current
  - Current Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-10-09 11:43:36
  - Authors: Anchor
  - Why: Preserve owner-grounded semantics and prevent path-filtered Transition loss before Core changes.
  - Summary: Reconcile accepted Native dot-surface decision with type-driven discovery inside .topics and primary Workspace selection.
  - Status: ready/local

---

# Qualify Workspace-Bounded Artifact-Type Discovery And Dot Import Convenience

## Objective

Reconcile the already-accepted Native Decision `002-recursive-registered-discovery-surface-convention-decision.trace.md` with the operator's refined pre-release intent: within the **qualified Workspace `.topics` tree**, discover candidates without discriminating by directory name; determine identity from qualified artifact type/schema, while dot-prefixed surfaces remain convenient bootstrap/import composition hints rather than mandatory artifact homes. Preserve `.topics/.workspaces` as the **conventional primary Workspace identity coordinate**, without accidentally promoting nested Workspace candidates. This Task qualifies interpretation and owner rules; it does not redefine all dot directories as Tiinex namespaces.

## Done Criteria

- Existing Native Decision 002 is explicitly interpreted or narrowly refined **without contradictory replacement**: general artifact discovery already belongs to `.topics`, independent of directories; registered surfaces are separate import/embedding *participation* signals, not identity gates. Reconcile its historical allowance for nested `.workspaces` with the user's stricter root-primary expectation by distinguishing discoverable candidate versus default primary selection.
- Define exact qualifying `*.trace.md` artifact, schema/identity/integrity requirements before an artifact enters a catalog; generic or binary files do not become Tiinex artifacts by filename or directory alone.
- Define how nested Semantic Package boundaries, explicit dependency edges, schema transition companions, and Role/Process applicability gate what becomes selectable; recursive discovery **does not** imply arbitrary activation or execution.
- Specify portable relative paths, symbolic-link/realpath containment, directory cycles, registered import surfaces, hidden editor/VCS paths, and size/count budgets. Do not scan outside selected `.topics` or read arbitrary binary content to discover artifacts.
- Distinguish discoverability from composability: content-source import remains separately bounded by declared source and package-graph authorities. If previously registered import surfaces are retained as fast paths, a valid artifact elsewhere in `.topics` must still be discoverable by the general index when scoped to the Workspace.
- Cross-host behavior is identical: Native validates semantics; Core produces qualified indexes and applicability; VS Code/Viewer/CLI/LLM clients consume the same portable projections.
- Keep pre-launch schema IDs at v1 except the already-valid Validator v2; do not make an unjustified schema v2 merely because discovery broadens.

## Scope

- Owner: Native interpretation and normative discovery/transition qualification boundary; Docs schema changes only if the existing schema truly lacks required behavior.
- Source Decision: `native::.topics/decisions/002-recursive-registered-discovery-surface-convention-decision.trace.md` is *accepted*, not an empty slate.
- Existing Semantic Package manifest `manifest-directory / recursive-within-boundary / explicit-only` remains the separately qualified boundary unless explicitly revised through owner authority.
- Excludes Move/Rebase, binary asset relocation, unrelated Native Surface/CLI-parity implementation from the other branch, and host-owned semantic parsing.

## Execution Order

1. Audit accepted Native Decision and the current Core candidate/import entry points, write a one-page normative reconciliation (what changes, what stays) in an owner-qualified artifact.
2. Create adversarial discovery fixtures (transition under `.transitions`, `work/<process>/`, unknown dot dir under `.topics`, nested packages; Workspace identity candidates; symlink and path escape).
3. Qualify any required companion / Transition Definition creation rules with a real Native source, including whether a Process reference is explicit authority or merely context.
4. Hand the exact portable semantics to Core; avoid a second form-specific discovery engine.

## Dependencies

- Native Decision `002-recursive-registered-discovery-surface-convention-decision.trace.md` and the qualified Transition Definition / schema companion contracts.
- Core Task for portable discovery and applicability behavior (same package).
- Operator's latest explicit intent: dot prefixes primarily aid bootstrap/embedding/import, primary Workspace identity is conventional `.topics/.workspaces`, artifact type rather than path is semantic identity.

## Completion Signal

A later cold Anchor can explain, with fixtures, why identical qualified artifacts in different directories are equally discoverable and why they may still differ in **applicability** without inventing a path whitelist or scanning outside `.topics`.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: tnPfIGImxiljz3zxNN3heaJy2_ik8U01rjwdbmmnvh8