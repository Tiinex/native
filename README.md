# Tiinex Native

Tiinex Native carries maintained first-party Tiinex content and reusable native building blocks that can be selected by consumers without making Core depend on Native.

## Boundary

- Docs owns semantic contracts.
- Core owns host-neutral mechanics and projections.
- Native owns maintained first-party content consumed through those contracts and mechanics.
- Native catalog presence does not make any Scaffold, Process, Entry, or other material applicable by itself.

Some exact dot-prefixed directory names beneath `.topics` are registered Tiinex discovery surfaces. They may recur at different depths for package/module composition; the artifacts and surface-specific Tooling still own qualification and selection semantics. Other dot-directories have no Tiinex meaning merely because of the prefix. Ordinary semantic/domain/lifecycle material may continue to use normal directories such as `.topics/processes` or `.topics/work`.

## Discovery

Current Native content is discovered from qualified `.topics` material through Tiinex Tooling. This README intentionally does not enumerate the current Scaffold, Process, schema-companion, or work catalog because those lists would become a second manually maintained authority surface.

## Distribution

- npm: `@tiinex/native`
- source: https://github.com/Tiinex/native
- branch: `master`
- release policy: `.github/release-policy.json`
- bootstrap command after repository/package qualification: `npm run publish:bootstrap`

Publication remains separate from source readiness and technical qualification.
