# native

First-party Tiinex native artifacts, scaffolds, entries, processes, and other qualified building blocks consumed by Core and hosts.

## Boundary

This repository carries first-party qualified Tiinex content and reusable native building blocks.

- Docs owns semantic contracts.
- Core owns host-neutral mechanics and projections.
- Native owns maintained first-party content consumed through those contracts and mechanics.

The detailed native directory taxonomy is intentionally not fixed by this bootstrap. Entries, processes, scaffolds, Workspace patterns, and related native material should be placed only after their structure and lifecycle have been qualified through Tiinex.

## Distribution

- npm: `@tiinex/native`
- source: https://github.com/Tiinex/native
- branch: `master`
- release policy: `.github/release-policy.json`
- bootstrap command after repository/package qualification: `npm run publish:bootstrap`

Publication remains separate from source readiness and technical qualification.

## First-party Scaffold catalog

Native now carries a composable first-party Scaffold catalog used as the target for Workspace/repository structural migration.

```text
src/scaffolds/
├─ repository/
│  └─ tiinex-software-package-repository-scaffold.trace.md
└─ workspace/
   ├─ tiinex-workspace-base-scaffold.trace.md          # v1 recovery/dogfood
   ├─ tiinex-workspace-base-v2-scaffold.trace.md       # preferred universal base
   └─ capabilities/
      ├─ tiinex-workspace-work-scaffold.trace.md
      ├─ tiinex-workspace-process-scaffold.trace.md
      ├─ tiinex-workspace-reduction-scaffold.trace.md
      ├─ tiinex-schema-authority-workspace-scaffold.trace.md
      └─ tiinex-organization-workspace-scaffold.trace.md
```

The catalog is capability-oriented: consumers explicitly compose the small structural roles they need instead of selecting a repository-specific template. `workspace-base.v2` requires only `.topics` and `.topics/.workspaces`; work/process/reduction roots are selected separately so repository durability does not depend on empty Git directories.

Scaffold qualification never moves source. Core owns composition/migration planning and hosts apply separately authorized plans. Docs remains semantic-contract authority.
