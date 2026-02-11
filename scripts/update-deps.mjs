#!/usr/bin/env node
/**
 * Update all dependencies in package.json to the latest "dist-tag" published on npm.
 * Usage:
 *   node scripts/update-deps.mjs            # updates both deps and devDeps
 *   node scripts/update-deps.mjs --deps     # only dependencies
 *   node scripts/update-deps.mjs --devDeps  # only devDependencies
 */

import { readFile, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { promisify } from 'node:util';
import { exec as execCb } from 'node:child_process';
import path from 'node:path';

const exec = promisify(execCb);
const require = createRequire(import.meta.url);

const cwd = process.cwd();
const packageJsonPath = path.join(cwd, 'package.json');

const args = new Set(process.argv.slice(2));
const updateDeps = args.size === 0 || args.has('--deps');
const updateDevDeps = args.size === 0 || args.has('--devDeps');

if (!updateDeps && !updateDevDeps) {
  console.error('Nothing to do. Pass --deps and/or --devDeps.');
  process.exit(1);
}

async function getLatest(name) {
  try {
    const { stdout } = await exec(`npm view ${name} dist-tags --json`, { cwd });
    const tags = JSON.parse(stdout);
    if (!tags?.latest) throw new Error(`No "latest" tag for ${name}`);
    return tags.latest;
  } catch (error) {
    console.error(`✖ Failed to fetch latest version for ${name}:`, error.message);
    return null;
  }
}

async function updateSection(pkg, section) {
  if (!pkg[section]) return 0;

  const deps = pkg[section];
  const entries = Object.entries(deps);
  let updated = 0;

  for (const [name, currentRange] of entries) {
    const latest = await getLatest(name);
    if (!latest) continue;

    const desiredRange = `^${latest}`;
    if (desiredRange !== currentRange) {
      deps[name] = desiredRange;
      updated += 1;
      console.log(`• ${section}: ${name} ${currentRange} → ${desiredRange}`);
    }
  }

  return updated;
}

async function main() {
  const pkg = JSON.parse(await readFile(packageJsonPath, 'utf8'));
  let changes = 0;

  if (updateDeps) {
    changes += await updateSection(pkg, 'dependencies');
  }
  if (updateDevDeps) {
    changes += await updateSection(pkg, 'devDependencies');
  }

  if (changes === 0) {
    console.log('No updates were necessary.');
    return;
  }

  await writeFile(packageJsonPath, `${JSON.stringify(pkg, null, 2)}\n`);
  console.log(`\nUpdated ${changes} package${changes === 1 ? '' : 's'} to their latest versions.`);
  console.log('Next steps:');
  console.log('  rm -rf node_modules package-lock.json');
  console.log('  npm cache clean --force');
  console.log('  npm install');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});