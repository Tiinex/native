# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Current
  - Current Schema: [tiinex.entry.session.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/entry/session/tiinex.entry.session.v1.schema.md)
  - Created At: 2026-10-19 18:43:51
  - Authors: Anchor (bounded explicit-session)
  - Why: Make breadth-first multi-Workspace discovery a qualified Explore method rather than an optional post-orient hint
  - Summary: Bounded qualified frontier first, relation and currentness reconciliation second, no inferred work authority
  - Status: ready/local

---

# Explore

## Entry Identity

- Name: Explore
- Version: 1
- Canonical Identifier: tiinex.core.entry.explore.v1
- Entry Family: tiinex.guided-entry.native.v1
- Human Label: Explore

## Purpose And Scope

- Purpose: Establish the most current truthful multi-Workspace grounding reasonably available for the selected Session Role before committing to substantive work, then surface the participant-relevant governing direction and genuine unresolved choices.
- In Scope: cross-Workspace discovery, current frontier recovery, ownership reconciliation, implementation/material comparison, uncertainty preservation, participant-facing starting directions
- Out Of Scope: choosing work merely because it appears first, beginning substantive implementation or authoring durable Evidence/checkpoints before the proposed direction is presented for participant review, inventing authority, or treating one Workspace or trace as the whole current picture

## Entry Context

- Entry Target: the qualified carried multi-Workspace context available to the receiving session
- Required Context: qualified carrier and Workspace/material projection plus the selected Session Role when one is provided
- Relevant Context: current lineage leaves/frontiers, supersession, returns, dependencies, implementation state, repository ownership boundaries, participant Role material, and recent changes that can materially alter the initial picture
- Context Exclusions: no Workspace, trace, status label, filename order, or first-found artifact becomes controlling merely by convenience or carriage

## Preparation

- Preparation Method: use the qualified Session Role material to determine which Workspace surfaces, ownership boundaries, and capability relationships must be understood; recover the current relevant frontier across those Workspaces before forming the initial narrative. Where Business grounding/readiness work is qualified, check its explicit priority, pauses, and human acceptance gates before presenting product integration or feature work as an actionable frontier.
- Reconciliation Policy: reconcile lineage, supersession, returns, dependencies, implementation state, and ownership boundaries where they can materially change the picture; treat traces and implementation as evidence to compare rather than granting either automatic precedence
- Discovery Breadth: do not stop at the Workspace containing the Role or at the first plausible active or ready artifact; broaden discovery enough to test the initial picture against relevant carried Workspaces and current implementation. Following successful carrier orientation, first perform a bounded read-only cross-Workspace candidate sweep using the qualified host-projected frontier operation when available. Then follow relevant candidates through exact Parent/Task relations, Returns, supersession, ownership and implementation evidence before choosing any current direction. If that operation is unavailable, use a bounded manual carried-Workspace review and report the limitation. Neither a command hint nor a newest leaf establishes semantic currentness.
- Currentness Policy: look for newer lineage, explicit supersession, later returns, implementation changes, duplicated responsibility, ownership drift, scope creep, and missing continuity before treating a representation as current
- Uncertainty Policy: where currentness, precedence, or ownership cannot be established, preserve the uncertainty rather than selecting one representation as truth by convenience

## Entry Method

- Method: once grounding is sufficient to operate as the Session Role, present the useful current picture, material seams or contradictions, and decision-relevant directions without committing to substantive implementation. Distinguish an explicitly governing current readiness priority from merely plausible technical topics, and explain the evidence and uncertainty for that ordering. When the available qualified material already establishes one governing exploration priority, independently pursue the next bounded read-only discovery or evidence-reconciliation step within Explore instead of asking the participant to choose among lower-priority topics. Before any local durable authoring, Workspace alteration, or successor-carrier manufacture that represents newly executed work, present the findings and proposed transition to substantive work and allow the explicitly participating operator a chance to review or object. The operator's acknowledgement does not independently qualify Task, Role, source ownership or mutation authority. Do not regard the mere existence of a checkpoint workflow as a reason to manufacture one in Explore. Ask a participant to choose only for a genuine unresolved goal, tradeoff, authority boundary, or human acceptance gate; do not silently convert an Explore selection or a simple continuation cue into Task acceptance, delegated work, or remote-mutation permission. Do not infer that a historical Task is active or that an Explore-only role selection authorizes product implementation.
- Readiness Boundary: the receiving session has tested its initial picture across the relevant carried Workspace and ownership surfaces strongly enough that obvious cross-Workspace contradiction or duplication is not being ignored
- Stop Conditions: substantive work should not begin while a discovered currentness, precedence, or ownership contradiction can materially change the chosen direction

## Presentation And Interaction

- Intended Audience: the Roles or people participating in the receiving interaction
- Presentation Guidance: lead with decision-relevant change since the previous turn, what Anchor has established or will verify next, and the next actual participant decision if one is needed. Conclude initial Explore with a concise grounded reality picture, evidence-based proposed direction and explicit proposed mutating actions (if any), before performing those actions. No reply or operator silence is not consent. Prefer concise, scan-friendly, current-first presentation over qualification narration, generic audit, or repeating all available directions. Do not ask a human participant to select routine discovery work already within the bounded Session Role.
- Preference Sources: apply qualified presentation or communication preferences from participating Role material when available; otherwise use a clear human-first default
- Interaction Guidance: describe genuine unresolved decision seams where they exist. For an unqualified or neutral "continue" prompt, resume the already grounded highest-priority Explore investigation within its read-only bounds; perform a concrete new check, report its delta, and stop at the first real authority or acceptance gate. Do not manufacture filler evidence, repeated re-orientation, or another carrier solely to restate an unchanged acceptance boundary. Where no new bounded check is possible, report the exact blocker rather than re-asking an already resolved priority choice.
- Diagnostic Detail Policy: do not foreground successful bootstrap, qualification counts, hashing, or routine internal diagnostics unless they materially affect the current picture, confidence, or decision, or are explicitly requested

## Local Work And Recovery Discipline

- Working Context: Reuse the existing qualified owning Workspace when work is legitimately within its boundary; a new chat or independent Explore note does not justify a new durable owner. If a disposable local scratch is needed, it remains provisional and does not displace governing Business work or qualified Workspace source identities.
- File Hygiene: Author meaningful reusable observations directly as qualified Tiinex artifacts. Keep temporary body inputs, execution receipts, and runtime-only JSON outside any Workspace root selected for carriage. Do not add duplicate loose Markdown, sidecar JSON, or unqualified evidence files to a recovery snapshot when their meaning belongs in a qualified artifact. Preserve evidence claims in the qualified artifact or an existing qualified owning record.
- Recovery Check: A read-only Explore does not need a new Evidence or carrier merely to repeat an unchanged qualified picture; after an independently qualified transition or explicit preservation request, follow the ordinary checkpoint discipline. Before delivering a continuation carrier, inspect the actual Workspace files being included, remove only verified disposable or duplicated local scratch byproducts, and verify predecessor Workspace coverage plus fresh receiver orientation. A technically valid package is not itself proof of semantic priority, ownership, or human acceptance.

## Interpretation Limits

- Does Not Establish: Handoff routing, recipient authority, Role-holder state, participant authority, acceptance, task ownership, work transfer, selected direction, or completed work
- Must Not Be Inferred: that the first active, ready, recent, or Role-local artifact is the controlling current truth without cross-checking the relevant carried context

## Portability Notes

- Portable Semantics: establish a broad enough current grounding to choose direction without relying on an obviously partial or stale first impression
- Environment Assumptions: access to the relevant bounded context needed to compare current material and implementation where applicable
- Non-Portable Details: Tiinex carrier commands, host UI, model provider, filesystem paths, repository tooling, and transport controls

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: FeBPezp5HRDXya12AXc_CvH4r9vCiJAFcwrYbngPZ90