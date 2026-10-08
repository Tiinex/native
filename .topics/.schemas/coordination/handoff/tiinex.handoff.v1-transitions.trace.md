# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Current
  - Current Schema: [tiinex.schema.transition.companion.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/schema/transition/companion/tiinex.schema.transition.companion.v1.schema.md)
  - Created At: 2026-09-30 00:00:00
  - Summary: Explicit Handoff schema Transition attachment projection.

---

# Handoff Schema Transition Companion

## Schema Binding

- Schema Reference: [tiinex.handoff.v1](tiinex.handoff.v1.schema.md)

## Transition Attachments

- bounded-work-handoff
  - Transition Reference: [Perform bounded work](.transitions/perform-bounded-work-handoff-transition-definition.trace.md)

- bounded-conversation-handoff
  - Transition Reference: [Open bounded conversation](.transitions/open-bounded-conversation-handoff-transition-definition.trace.md)

- bounded-review-handoff
  - Transition Reference: [Discuss or review](.transitions/discuss-review-handoff-transition-definition.trace.md)

- return-bounded-result-handoff
  - Transition Reference: [Return bounded result](.transitions/return-bounded-result-handoff-transition-definition.trace.md)

- return-review-disposition-handoff
  - Transition Reference: [Return review / disposition](.transitions/return-review-disposition-handoff-transition-definition.trace.md)

- report-blocker-request-continuation-handoff
  - Transition Reference: [Report blocker / request continuation](.transitions/report-blocker-request-continuation-handoff-transition-definition.trace.md)

## Interpretation Limits

- Does Not Mean: applicability, execution, recommendation, ordering, or recipient authority by itself
- Must Not Be Used To Claim: that any attached Handoff transition is appropriate for the current user intent without explicit selection

---

# Continuity Integrity

- sha256-base64url-c14n-v2
  - Towards: self
  - Value:5zkBVdJ-NARATdFSo3XGXsM5ae_HSg1tTXQf-kEVBfE