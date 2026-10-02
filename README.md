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

## First qualified content

- `src/scaffolds/workspace/tiinex-workspace-base-scaffold.trace.md` — additive first-party Workspace structural scaffold.

Native content remains data/artifact-oriented. Core owns planning/qualification mechanics and Docs owns the governing schema contracts.
