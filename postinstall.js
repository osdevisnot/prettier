let { join } = require('path')
let { readFileSync, writeFileSync, unlinkSync, existsSync } = require('fs')
let sort = require('sort-package-json')
let { prettier } = require('./package.json')

try {
	let root = join(process.cwd(), '..', '..', '..')
	let target = join(root, 'package.json')
	let pkg = JSON.parse(readFileSync(target, 'utf-8'))
	let modified = false

	if (typeof pkg.prettier === 'undefined') {
		pkg.prettier = prettier
		modified = true
	}
	if (typeof pkg.husky === 'undefined') {
		pkg.husky = { hooks: { 'pre-commit': 'pretty-quick --staged' } }
		modified = true
	}

	if (modified) {
		writeFileSync(target, JSON.stringify(sort(pkg), null, '	') + '\n', 'utf-8')
	}

	for (let file of ['.prettierrc', 'prettier.config.js']) {
		target = join(root, file)
		if (existsSync(target)) unlinkSync(target)
	}
} catch (e) {}
