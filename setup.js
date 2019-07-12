#!/usr/bin/env node

console.log('Setting up Prettier config to @osdevisnot/prettier')

const path = require('path')
const fs = require('fs')

const pkg = path.join(process.cwd(), 'package.json')

const content = require(pkg)
content.prettier = '@osdevisnot/prettier'

fs.writeFileSync(pkg, JSON.stringify(content, null, '  '))
