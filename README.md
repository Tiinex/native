# native

First-party Tiinex native artifacts, scaffolds, entries, processes, and other qualified building blocks consumed by Core and hosts.

## Boundary

This repository carries first-party qualified Tiinex content and reusable native building blocks.

- Docs owns semantic contracts.
- Core owns host-neutral mechanics and projections.
- Native owns maintained first-party content consumed through those contracts and mechanics.

Native now follows a qualified structural namespace boundary:

- `.topics/.<name>` is reserved for registered Tiinex structural/authority namespaces whose meaning is known to Tiinex.
- `.topics/<name>` is Workspace/domain/lifecycle material whose name is not a reserved structural authority.
- `src/` is executable implementation code, except for a deliberately bounded transitional exception when executable schema companions are co-located with their canonical schema family during schema extraction.
- Dot-prefix does not mean hidden, temporary, or generated. It means the directory name itself has registered Tiinex structural meaning.

Do not invent new `.topics/.<name>` roots ad hoc; qualify/register the convention first.

## Distribution

- npm: `@tiinex/native`
- source: https://github.com/Tiinex/native
- branch: `master`
- release policy: `.github/release-policy.json`
- bootstrap command after repository/package qualification: `npm run publish:bootstrap`

Publication remains separate from source readiness and technical qualification.

## First-party Scaffold catalog

Native carries a composable first-party Scaffold catalog under the reserved `.topics/.scaffolds` structural namespace.

```text
.topics/.scaffolds/
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


## Structural namespace rule

Inside `.topics`, a dot-prefixed directory is a reserved Tiinex structural/authority namespace. Current first-party examples include `.workspaces`, `.schemas`, and `.scaffolds`. Ordinary semantic/lifecycle roots such as `work`, `processes`, `reductions`, `roles`, and `initiatives` remain non-dot-prefixed.

Canonical Tiinex artifacts belong under `.topics`; executable application/runtime implementation belongs under `src`. Schema-specific executable companions are the one currently accepted transitional exception while schema ownership is extracted from Core; that exception must not become a second schema authority or a home for unrelated application code.
