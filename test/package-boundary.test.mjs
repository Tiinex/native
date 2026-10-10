import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

test('package and release policy bind the native repository identity', async () => {
  const pkg = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'));
  const policy = JSON.parse(await readFile(new URL('../.github/release-policy.json', import.meta.url), 'utf8'));
  assert.equal(pkg.name, '@tiinex/native');
  assert.equal(pkg.repository.url, 'git+https://github.com/Tiinex/native.git');
  assert.equal(policy.repository, 'Tiinex/native');
  assert.equal(policy.branch, 'master');
  assert.equal(pkg.tiinex?.contentSource?.registeredSurfaces, 'recursive');
  assert.equal(pkg.tiinex?.contentSource?.executableSchemaCompanions, true);
  assert.ok((pkg.files || []).includes('.topics'), 'content-source package must ship its .topics boundary');
  const publicModule = await import('../src/index.js');
  assert.deepEqual(Object.keys(publicModule), []);
});

// Native is a released first-party content package, not a scratch schema editor.
// Release/CI must fail if any bundled standard schema loses its pinned identity.
// This audit is fully offline; remote publication is established separately before
// a binding is promoted, never guessed from a checksum or a URL shape.
test('bundled Native schemas retain complete immutable publication bindings', async () => {
  const root = new URL('../.topics/.schemas/', import.meta.url);
  const catalog = JSON.parse(await readFile(new URL('.generated/native.schema.catalog.json', root), 'utf8'));
  assert.ok(catalog.count > 0);
  assert.equal(catalog.count, catalog.entries.length);
  for (const record of catalog.entries) {
    const b = record.binding;
    assert.equal(b.schemaId, record.schemaId);
    assert.equal(b.publicationState, 'published-immutable-canonical', record.schemaId);
    assert.equal(b.schemaReferencePublicationState, 'published-immutable-canonical', record.schemaId);
    assert.equal(b.snapshotCompleteness, 'exact-canonical-docs-snapshot', record.schemaId);
    assert.match(b.sourceCommit || '', /^[0-9a-f]{40}$/, record.schemaId);
    assert.match(b.sourceBlobSha || '', /^[0-9a-f]{40}$/, record.schemaId);
    const expectedUrl = `https://github.com/${b.sourceRepository}/blob/${b.sourceCommit}/${b.sourcePath}`;
    const expectedRaw = `https://raw.githubusercontent.com/${b.sourceRepository}/${b.sourceCommit}/${b.sourcePath}`;
    assert.equal(b.permalink, expectedUrl, record.schemaId);
    assert.equal(b.rawUrl, expectedRaw, record.schemaId);
    const source = await readFile(new URL(b.sourcePath.replace(/^\.topics\/\.schemas\//, ''), root));
    assert.equal(createHash('sha256').update(source).digest('hex'), b.checksum.value, record.schemaId);
    const gitHeader = Buffer.from(`blob ${source.length}\0`);
    assert.equal(createHash('sha1').update(gitHeader).update(source).digest('hex'), b.sourceBlobSha, record.schemaId);
  }
});
