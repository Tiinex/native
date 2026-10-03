import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { canonicalC14nV2SelfState } from '@tiinex/core/integrity/integrity.c14nV2.js';

const root = fileURLToPath(new URL('../src/scaffolds/', import.meta.url));
const expectedHandles = new Set([
  'tiinex.native.workspace-base.v1',
  'tiinex.native.workspace-base.v2',
  'tiinex.native.workspace-work.v1',
  'tiinex.native.workspace-process.v1',
  'tiinex.native.workspace-reduction.v1',
  'tiinex.native.workspace-schema-authority.v1',
  'tiinex.native.workspace-organization.v1',
  'tiinex.native.repository-software-package.v1'
]);

async function traceFiles(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const target = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...await traceFiles(target));
    else if (entry.name.endsWith('.trace.md')) out.push(target);
  }
  return out.sort();
}

test('first-party Scaffold catalog ships only exact self-qualified Tiinex Scaffold material', async () => {
  const files = await traceFiles(root);
  assert.equal(files.length, expectedHandles.size);
  const observed = new Set();
  for (const file of files) {
    const markdown = await readFile(file, 'utf8');
    assert.match(markdown, /Current Schema: tiinex\.scaffold\.v1/);
    const handle = markdown.match(/^- Scaffold Handle:\s*(\S+)\s*$/m)?.[1];
    assert.ok(handle, `missing Scaffold Handle in ${file}`);
    assert.equal(expectedHandles.has(handle), true, `unexpected Scaffold Handle ${handle}`);
    assert.equal(observed.has(handle), false, `duplicate Scaffold Handle ${handle}`);
    observed.add(handle);
    assert.equal(canonicalC14nV2SelfState(markdown).state, 'verified', `unqualified self-integrity ${handle}`);
  }
  assert.deepEqual([...observed].sort(), [...expectedHandles].sort());
});
