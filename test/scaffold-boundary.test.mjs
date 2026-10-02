import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { canonicalC14nV2SelfState } from '@tiinex/core/integrity/integrity.c14nV2.js';

test('first-party workspace scaffold is shipped as exact qualified Tiinex material', async () => {
  const markdown = await readFile(new URL('../src/scaffolds/workspace/tiinex-workspace-base-scaffold.trace.md', import.meta.url), 'utf8');
  assert.match(markdown, /Current Schema: tiinex\.scaffold\.v1/);
  assert.match(markdown, /Scaffold Handle: tiinex\.native\.workspace-base\.v1/);
  assert.equal(canonicalC14nV2SelfState(markdown).state, 'verified');
});
