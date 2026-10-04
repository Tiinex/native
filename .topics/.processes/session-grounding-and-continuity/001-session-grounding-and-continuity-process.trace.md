# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.topic.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/topic/tiinex.topic.v1.schema.md)
  - Created At: 2026-10-04 01:16:19
  - Trace: [001-processes.trace.md](../001-processes.trace.md)
  - Origin:
    - [relative](../001-processes.trace.md)
- Current
  - Current Schema: [tiinex.topic.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/topic/tiinex.topic.v1.schema.md)
  - Created At: 2026-10-04 01:16:20
  - Authors: Anchor
  - Why: Let cold or resumed Tiinex consumers ground and preserve bounded work without organization-specific or provider-specific improvisation.
  - Summary: Portable process for bounded session grounding, source preference, readiness, host adaptation, and checkpoint continuity.
  - Status: ready/local

---

# Session Grounding And Continuity

## Purpose

Provide a portable, human-readable way to enter or resume bounded work without relying on hidden session memory, transport accidents, or provider-specific improvisation.

The process is intentionally usable in a minimal Workspace. It does not require a particular organization, Role catalog, Project graph, LLM, host, or repository provider. Tooling may automate the steps, but Tooling does not replace the semantic authorities being grounded.

## When This Process Applies

Use this process when a session cold-starts, resumes from carried material, enters work after a material context change, or approaches a host/session boundary where important working state may not survive.

Applicability must be explicit. A Session Entry, controlling work/context artifact, Handoff, invocation, or another qualified declaration may select this process. Catalog presence, filename, directory placement, package membership, or nearby Roles do not make it applicable by themselves.

## Grounding Sequence

1. **Identify the entry boundary.** Determine what bounded activity or context is being entered and whether a Handoff, continuation, Workspace, Task/Project, or another explicit Entry controls it. Transport delivery alone does not manufacture transfer authority.
2. **Ground only what the entry requires.** Read the exact material needed to understand the next bounded action. Preserve unknowns rather than filling them from memory or adjacency.
3. **Ground the applicable process explicitly.** Do not infer process applicability from process inventory or directory proximity.
4. **Prefer carried qualified material.** Resolve required material from the carried Workspace or carrier representation before using external recovery. External recovery is for material that is absent, unqualified locally, or explicitly external.
5. **Apply host adaptation after portable meaning is clear.** Provider-, application-, filesystem-, model-, or session-specific behavior belongs to the relevant Interop/host domain and must not redefine portable semantics.
6. **Disposition readiness explicitly.** State what the session is ready to do and what remains blocked. Transport validity, semantic grounding, local action authority, and remote mutation authority remain separate truths.
7. **Checkpoint before survivability becomes uncertain.** When meaningful progress exists and the host/session may lose local state, preserve a qualified carrier/checkpoint on a durable transport surface.

## Readiness Boundary

Use the smallest truthful statement that fits the next action:

- **Carrier qualified:** the transport/package and its declared carriage are qualified.
- **Recipient/context grounded:** the current session has enough qualified entry/context material to understand the bounded work it is entering.
- **Semantically grounded:** the current work/context, required material, applicable process, source identities, and relevant Workspace boundaries are sufficiently qualified for the next bounded action.
- **Grounded to act:** the next bounded local action is authorized and its required evidence is available.
- **Remote mutation authorized:** a separate explicit authority permits the named remote mutation.

These labels are orientation language, not a protocol state machine. A stronger action must still be justified by the controlling artifacts and host authority.

## Handoff And Carrier Boundary

- A Handoff declares a bounded transfer of work or responsibility.
- A carrier transports qualified material and may preserve a session checkpoint.
- A carrier may exist without a new responsibility transfer.
- Package validity does not prove Handoff acceptance, semantic grounding, action readiness, or remote-write authority.
- Handoff responsibility must not be inferred from package destination, sender/receiver UI position, filename, directory, or upload channel.

## Source Preference And Recovery

For required material, prefer this order when each earlier source is qualified and sufficient:

1. carried qualified Workspace material;
2. carried route/cache or another exact qualified carrier-local representation;
3. selected bootstrap/content-source material when the package or host explicitly composes it;
4. explicit immutable recovery material;
5. live external source/connector access.

Moving to a later source is a recovery decision, not a convenience shortcut. A live source may be fresher but must not silently replace the exact material selected by the controlling context.

## Host And Interop Boundary

Portable semantics stay with their semantic owner and shared host-neutral mechanics stay in Core. Environment-specific behavior belongs in the relevant Interop or host Workspace.

A host adaptation may define volatile-storage behavior, attachment survival, connector limitations, UI constraints, capability names, or provider-specific workarounds. It must preserve this process rather than redefine Handoff, Parent, Role, Process, Workspace, carrier, or other portable semantics.

Host capabilities are opportunities to act, not semantic authority. Read capability does not imply write authority. Remote write requires an explicit bounded authorization.

## Repository Bootstrap And Reception Surfaces

Repository reception files are convenience projections, not a parallel Tiinex index.

- `llms.txt`, when present, is a minimal bootstrap hint that tells an LLM to enter the repository through Tiinex discovery/grounding. It must not enumerate current work, Roles, Processes, Reductions, Handoffs, or other `.topics` artifacts as a maintained routing table.
- `README.md` may explain the repository/package to humans and summarize durable outcomes, interfaces, or usage, but it must not define semantic authority, current work, process applicability, lineage, or acceptance.
- Current artifact discovery belongs to Tiinex Tooling over qualified Workspace material. A README/LLM bootstrap surface may point at the stable Tiinex lens, but it must not become a second source that ordinary `.topics` changes require humans to synchronize.

## Transport Presentation Boundary

When a carrier is delivered to another session or actor, transport presentation is intentionally narrower than semantic grounding.

- Use the exact transport/routing text projected by qualified Tiinex Tooling for that carrier.
- Transport text tells the recipient how to enter the carrier (for example Start and a qualified Continue From pointer); it does not summarize the work, reveal expected grounding conclusions, state test-oracle answers, or add hand-authored Role/Process/current-work hints.
- Do not reconstruct, paraphrase, extend, or wrap the Tooling-projected routing text with semantic work summary prose. Human acceptance criteria may be held by the tester separately, but must not be injected into a blind cold-start transport when the purpose is to test grounding.
- The package plus its exact Tooling-projected routing text is the normal transport surface; loose semantic helper files or explanatory chat prose must not become hidden grounding dependencies.

## Cold-Start Acceptance And Retrospective

When the purpose of a cold start is to evaluate grounding quality rather than continue implementation immediately, keep the acceptance observation separate from recipient grounding.

1. Run the recipient cold using only the qualified carrier/reception surface and exact Tooling-projected transport text.
2. Freeze the recipient's first substantive grounding/readiness result before coaching, correction, repair, or acceptance feedback.
3. Do not turn the acceptance criteria into recipient prompts. The recipient must discover current work, authority, applicable guidance, sources, unresolved state, and recovery needs from qualified material.
4. After the first result is frozen, perform a non-leading retrospective. Record what the recipient believed the current work and authority were, which sources it used and why, what it treated as unresolved, what it recovered externally, what it assumed without support, what relevant material it missed, and what unnecessary material it read.
5. Compare those observations with the qualified state rather than with the tester's preferred wording. Evaluate recipient grounding quality, semantic grounding, authority/readiness discrimination, source/recovery discipline, and dependence on hidden human context separately.
6. Classify discovered gaps by their natural durable owner. Reusable operating behavior belongs in Process/Role/Decision or another semantic owner; mechanical failures belong in Tooling; schema-contract failures belong with the owning schema/domain; historical detail belongs in Reduction only when future cold work does not need it as an active rule.
7. Human acceptance, when the applicable organizational profile requires it, occurs only after the retrospective and disposition. A Tooling result such as `grounded-to-act` is evidence for action readiness, not proof that a grounding acceptance exercise passed.

A retrospective is post-grounding evidence. It must not be embedded in transport text, bootstrap hints, Required Context solely as a test oracle, or other material visible to the cold recipient merely to make the test easier.

## Lineage And Continuity Separation

Keep these concerns separate:

- artifact identity describes the artifact itself;
- Parent describes semantic continuity ancestry;
- filename/dimension provides local navigation/allocation coordinates;
- carrier lineage describes transport/checkpoint continuity.

Matching numbers, directory placement, package dimensions, chronology, or arrival order do not establish another relationship.

## Checkpoint Boundary

A useful checkpoint preserves enough qualified material and routing information that a cold successor can recover the bounded state without reconstructing it from conversational chronology.

Checkpoint frequency is driven by survivability risk and meaningful progress, not by a fixed message count. A host adaptation may define stricter practical triggers.

Ordinary progress continues within the current carrier major. A carrier **major** is reserved for a stable checkpoint whose bounded state has already reached the acceptance/disposition needed to be commit/push-ready and suitable for handoff, closure, or starting a new work bullet. A major label does not create acceptance; it records an already-qualified stable progression boundary.

For ordinary recovery/commit checkpoints that continue one carrier prefix, preserve the qualified parent carrier profile and its complete Workspace set instead of silently dropping unchanged Workspaces. An intentionally bounded specialist/delegation carrier may carry a smaller declared scope, but that is a distinct bounded transport purpose and must not masquerade as the full recovery checkpoint for the continuing prefix. Workspace-set contraction is an explicit scope/profile change, not ordinary progression.

Carrier progression is transport continuity only. It must not rewrite Parent ancestry, artifact identity, filename lineage, acceptance, or work ownership.

## Failure Policy

Stop the stronger action when a required grounding obligation cannot be qualified. Name the missing material or authority, why it matters, and the smallest recovery path.

Do not compensate with broad repository archaeology, arbitrary connector search, guessed participant identity, guessed process applicability, or invented structural placement.

## Interpretation Limits

- Does Not Establish: Handoff acceptance, durable Party identity, participant semantics, process execution, Task completion, truth, remote-write authority, or universal applicability of any carried Process, Role, or Scaffold.
- Must Not Be Used To Claim: that package validity equals readiness; that a carried Role is a participant; that a carried Parent target should be fetched remotely again; that provider-specific constraints belong in Core; or that carrier lineage creates semantic Parent ancestry.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-processes.trace.md](../001-processes.trace.md)
  - Value: 4sXFJ8LIvsuQW-MiuDFyV-2KSjZqq0NoZB7ItKiiIKc

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value:AL0uAf0ZuRHeowby_sfvM7BjUmy54o2uVsJounSHa2U
