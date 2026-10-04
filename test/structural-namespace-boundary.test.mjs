import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
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

test('offered first-party Scaffold artifacts live under registered .scaffolds discovery surfaces without a fixed catalog size', async () => {
  const topicFiles=(await files(path.join(root,'.topics'))).filter((p)=>p.endsWith('.trace.md'));
  const scaffoldArtifacts=[];
  for (const file of topicFiles) {
    const markdown=await readFile(file,'utf8');
    if (/Current Schema:\s*\[[^\]]*tiinex\.scaffold\.v1[^\]]*\]/i.test(markdown) || /Current Schema:.*tiinex\.scaffold\.v1/i.test(markdown)) scaffoldArtifacts.push(file);
  }
  assert.ok(scaffoldArtifacts.length>0);
  assert.equal(scaffoldArtifacts.every((file)=>file.split(path.sep).includes('.scaffolds')),true);
});
