import { access, cp, lstat, mkdir, mkdtemp, readFile, rm, symlink } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..');
const LOCAL_CORE = path.resolve(process.env.TIINEX_CORE_ROOT || path.join(ROOT, '..', 'core'));
const CORE_TARGET = path.join(ROOT, 'node_modules', '@tiinex', 'core');

function run(command, args, cwd = ROOT) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { cwd, stdio: 'inherit', shell: process.platform === 'win32' });
    child.on('error', reject);
    child.on('exit', (code) => code === 0 ? resolve() : reject(new Error(`${command} exited ${code}`)));
  });
}
async function exists(target) { try { await access(target); return true; } catch { return false; } }

let local = false;
try {
  const pkg = JSON.parse(await readFile(path.join(LOCAL_CORE, 'package.json'), 'utf8'));
  local = pkg?.name === '@tiinex/core';
} catch {}

if (!local) {
  console.log('Tiinex Native tests: sibling/local Core unavailable; using the already installed @tiinex/core dependency.');
  await run(process.execPath, ['--test', 'test/*.test.mjs']);
  process.exit(0);
}

const scratch = await mkdtemp(path.join(os.tmpdir(), 'tiinex-native-local-core-'));
const backup = path.join(scratch, 'previous-core');
let previous = false;
try {
  previous = await exists(CORE_TARGET);
  if (previous) await cp(CORE_TARGET, backup, { recursive: true, dereference: false });
  await rm(CORE_TARGET, { recursive: true, force: true });
  await mkdir(path.dirname(CORE_TARGET), { recursive: true });
  await symlink(LOCAL_CORE, CORE_TARGET, process.platform === 'win32' ? 'junction' : 'dir');
  const linked = await lstat(CORE_TARGET);
  if (!linked.isSymbolicLink() && process.platform !== 'win32') throw new Error('tiinex.native-test.local-core-link.failed');
  console.log(`Tiinex Native tests: using local Core package ${LOCAL_CORE}.`);
  await run(process.execPath, ['--test', 'test/*.test.mjs']);
} finally {
  await rm(CORE_TARGET, { recursive: true, force: true });
  if (previous) {
    await mkdir(path.dirname(CORE_TARGET), { recursive: true });
    await cp(backup, CORE_TARGET, { recursive: true, dereference: false });
  }
  await rm(scratch, { recursive: true, force: true });
}
