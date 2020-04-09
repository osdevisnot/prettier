let { join } = require('path');
let { readFileSync, writeFileSync, unlinkSync, existsSync } = require('fs');
let sort = require('sort-package-json');
let { name } = require('./package.json');

try {
  let root = join(process.cwd(), '..', '..', '..');
  let target = join(root, 'package.json');
  let pkg = JSON.parse(readFileSync(target, 'utf-8'));

  pkg.prettier = name;
  pkg.husky = { hooks: { 'pre-commit': 'precise-commits' } };

  writeFileSync(target, JSON.stringify(sort(pkg), null, '	') + '\n', 'utf-8');

  for (let file of ['.prettierrc', 'prettier.config.js']) {
    target = join(root, file);
    if (existsSync(target)) unlinkSync(target);
  }
} catch (e) {}
