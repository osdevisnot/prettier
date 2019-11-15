let { join } = require("path");
let { readFileSync, writeFileSync, unlinkSync } = require("fs");
let sort = require("sort-package-json");
let { name } = require("./package.json");

try {
  let root = join(process.cwd(), "..", "..", "..");
  let target = join(root, "package.json");
  let pkg = JSON.parse(readFileSync(target, "utf-8"));
  if (typeof pkg.prettier === "undefined") {
    pkg.prettier = name;
    writeFileSync(target, JSON.stringify(sort(pkg), null, "	"), "utf-8");
  }
  for (let file in [".prettierrc", "prettier.config.js"]) {
    let target = join(root, file);
    console.log('TCL: target', target);
    if (fs.existsSync(target)) unlinkSync(target);
  }
} catch (e) {}
