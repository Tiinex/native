import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const processDir = path.resolve(root, '../.topics/.processes/session-grounding-and-continuity');

test('portable grounding process keeps both canonical branches as Transition Definitions', async () => {
  const names = (await readdir(processDir)).sort();
  assert.ok(names.includes('001-1-establish-the-entry-boundary.trace.md'));
  assert.ok(names.includes('001-2-establish-the-entry-boundary.trace.md'));
  const first = names.filter((name) => /^001-1(?:-|\b)/.test(name));
  const second = names.filter((name) => /^001-2(?:-|\b)/.test(name));
  assert.equal(first.length, 6);
  assert.equal(second.length, 6);
  for (const name of [...first, ...second]) {
    const markdown = await readFile(path.join(processDir, name), 'utf8');
    assert.match(markdown, /Current Schema: \[tiinex\.transition\.definition\.v1\]/, name);
    assert.doesNotMatch(markdown, /Current Schema: \[tiinex\.topic\.v1\]/, name);
  }
});
