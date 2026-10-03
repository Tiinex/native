import test from 'node:test';
import assert from 'node:assert/strict';
import { readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));

async function files(dir) {
  const out=[];
  for (const e of await readdir(dir,{withFileTypes:true})) {
    const p=path.join(dir,e.name);
    if (e.isDirectory()) out.push(...await files(p)); else out.push(p);
  }
  return out;
}

test('canonical Tiinex trace material is not stored under src', async () => {
  const srcFiles=await files(path.join(root,'src'));
  assert.deepEqual(srcFiles.filter((p)=>p.endsWith('.trace.md')),[]);
});

test('first-party Scaffold material lives under the reserved .topics/.scaffolds namespace', async () => {
  const scaffoldFiles=(await files(path.join(root,'.topics','.scaffolds'))).filter((p)=>p.endsWith('.trace.md'));
  assert.equal(scaffoldFiles.length,8);
  assert.equal(scaffoldFiles.every((p)=>p.includes(`${path.sep}.topics${path.sep}.scaffolds${path.sep}`)),true);
});
