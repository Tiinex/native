import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

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
