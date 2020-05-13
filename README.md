# @osdevisnot/prettier

Sensible Code Formatting Setup in **One Command**

```bash
$ yarn add --dev @osdevisnot/prettier
```

or

```bash
npm install --save-dev @osdevisnot/prettier
```

## What

Setup `prettier`, `husky` and `pretty-quick` just by installing `@osdevisnot/prettier`

Uses `postinstall` scripts to automatically configure the project.

## How

- This package brings in `prettier`, `husky`, `pretty-quick` and `prettier-plugin-packagejson` as dependencies.
- These dependencies are marked with `*` so that you always get latest versions for these dependencies.
- When installed, we use a `postinstall` script to configure project with sensible defaults:

- [x] sets `prettier` property in `package.json` to `@osdevisnot/prettier` if not already defined
- [x] removes `.prettierrc` and `prettier.config.js` if these files exist
- [x] sets `husky` property in `package.json` to use `pretty-quick` on `pre-commit` (if not already defined) :

```json
{ "husky": { "hooks": { "pre-commit": "pretty-quick --staged" } } }
```
