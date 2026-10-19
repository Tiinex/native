# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-10-14 00:50:52
  - Trace: [001-getting-started-entry-activation-task.trace.md](../../../work/first-use-activation/001-getting-started-entry-activation-task.trace.md)
  - Origin:
    - [relative](../../../work/first-use-activation/001-getting-started-entry-activation-task.trace.md)
- Current
  - Current Schema: [tiinex.entry.session.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/entry/session/tiinex.entry.session.v1.schema.md)
  - Created At: 2026-10-19 21:52:51
  - Authors: Anchor (bounded explicit-session)
  - Why: Enable empty bootstrap carriers to adopt already ongoing work without a hidden transport instruction
  - Summary: Qualified Entry for preserving substantive existing conversation before continuing work
  - Status: ready/local

---

# Adopt Ongoing Conversation

## Entry Identity

- Name: Adopt Ongoing Conversation
- Version: 1
- Canonical Identifier: tiinex.core.entry.adopt-ongoing-conversation.v1
- Entry Family: tiinex.guided-entry.native.v1
- Human Label: Adopt Ongoing Conversation

## Purpose And Scope

- Purpose: Bring meaningful, already ongoing work in the receiving conversation into a qualified Tiinex working context without losing decisions, sources or current state.
- In Scope: conversation-visible progress review, careful source attribution, minimum qualified Workspace association, bounded artifact authoring, receiver-tested continuity checkpoint and continued ordinary work.
- Out Of Scope: claiming unseen chat history, fabricating earlier acceptance, importing private provider data without access or authorization, creating ownership solely from a bootstrap package, automatic remote edits or treating a chat summary as a qualified Handoff.

## Entry Context

- Entry Target: a receiving chat where work was already underway before a bootstrap-only Tiinex carrier was attached, including when a blank local Workspace has not yet been created.
- Required Context: verified Start/bootstrap, the actual conversation material available to this receiving session, the person's current intention, qualified Tooling, and the real writable/permission boundary.
- Relevant Context: earlier messages and attachments visible in this conversation, explicitly established user decisions, unresolved options, cited sources, existing qualified Workspaces, and the current runtime catalog of authorable artifacts.
- Context Exclusions: an attached empty carrier is not a record of prior chat work; quoted or proposed decisions are not accepted decisions; invisible or truncated messages cannot be reconstructed as fact.

## Preparation

- Preparation Method: complete Start and Tooling orientation first. Determine from **actually visible conversation history**, rather than guessing from the bootstrap filename, whether meaningful work and commitments predate this Entry. If present, identify the smallest preservation-worthy state and locate any already qualified Workspace before opening a new disposable scratch Workspace.
- Reconciliation Policy: distinguish user-supplied sources, decisions, assistant proposals, results, open questions and conflicting claims; obtain a clarification only when omission or ambiguity would change ownership or the truth of the record.
- Discovery Breadth: focus on the actual chat work and related attachments first; widen to relevant schemas and nearby qualified context when needed to preserve it accurately.
- Currentness Policy: the most recent chat turn can clarify or overturn earlier proposals, but does not itself prove formal acceptance, historical source currentness or semantic holder authority.
- Uncertainty Policy: visibly mark inferred, missing or unverified context; do not silently promote a possible decision to an accepted fact.

## Entry Method

- Method: when substantive work exists, continue the person's goal while performing a bounded preservation pass: (1) identify actual work and decision-relevant changes in available history, (2) use an existing qualified Workspace where appropriate or prepare isolated local scratch without inventing project ownership, (3) inspect the runtime's actual schema and companion for the smallest useful artifact, (4) use `author --preflight` and `author` for an honest record that separates evidence, choices and open issues, (5) manufacture and verify a complete pointerless receiver-recoverable carrier once meaningful qualified state exists, and (6) give the person its practical result and next step. After additional meaningful revisions, re-evaluate preservation at natural boundaries without making a package for every message. Do not claim adoption succeeded merely because bootstrap/orientation succeeded or because a Markdown summary was written.
- Readiness Boundary: a new receiver can recover the actual bounded work, material sources, decisions and next step from a verified carrier; any unpreserved content or inaccessible history is disclosed.
- Stop Conditions: when there is no meaningful prior conversation-visible work, do not invent a conversion; instead qualify the existing Getting Started Entry for a genuinely new goal. If writing, source qualification, or package verification is blocked, report the exact blocker and do not claim durable preservation.

## Presentation And Interaction

- Intended Audience: people who start Tiinex midway through a productive chat, participating Roles, and qualified host adapters.
- Presentation Guidance: lead with what work was actually preserved, what remains open, and the next useful action; keep bootstrap mechanics secondary. Do not demand that the person transcribe a conversation the assistant can already read.
- Interaction Guidance: proceed without unnecessary approval questions for reversible, permitted local preservation; ask before a new permanent project commitment, irreversible change, or unqualified claim of acceptance. After preservation, continue the original work instead of replacing it with a Tiinex tutorial.
- Diagnostic Detail Policy: disclose missing source visibility, blocked qualification or incomplete recovery, but avoid generic readiness reports as a substitute for the checkpoint.

## Interpretation Limits

- Does Not Establish: preexisting qualified Workspace, permanent Role identity, accepted decisions, Handoff recipient/transfer, Task/Project ownership, unseen conversation access, provider permissions, publication authority or final human acceptance.
- Must Not Be Inferred: that merely attaching bootstrap to an ongoing chat converts historical conversation into a durable Tiinex record.

## Portability Notes

- Portable Semantics: qualify environment, read existing visible work, preserve truthfully, verify recovery, resume work.
- Environment Assumptions: the receiving session can access at least part of its current conversation, and either write via qualified Tooling or report that it cannot.
- Non-Portable Details: provider APIs, ChatGPT UI controls, VS Code widget placements, filesystem paths and host-specific commands.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-getting-started-entry-activation-task.trace.md](../../../work/first-use-activation/001-getting-started-entry-activation-task.trace.md)
  - Value: _makph9eRiRKSvTbQZyZ4y7tHrA49zIcfr6tb6M44AQ

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: uoc667CcM5spTnUhSAl8CIpO3q5FGQ7SdZKU-FAhb7E