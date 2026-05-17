/**
 * Fix empty <textarea>...</textarea> → self-closing with defaultValue.
 * Run: node scripts/fix-textareas.mjs
 */
import fs from 'fs';
import path from 'path';

const APP = path.join(process.cwd(), 'app');

function walk(dir, list = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const f = path.join(dir, e.name);
    if (e.isDirectory()) walk(f, list);
    else if (e.name.endsWith('.tsx')) list.push(f);
  }
  return list;
}

const re = /<textarea\b([^>]*)>\s*<\/textarea>/gi;
let n = 0;

for (const file of walk(APP)) {
  if (!file.includes(`${path.sep}_components${path.sep}`)) continue;
  const src = fs.readFileSync(file, 'utf8');
  const next = src.replace(re, '<textarea$1 defaultValue="" />');
  if (next !== src) {
    fs.writeFileSync(file, next);
    n++;
  }
}

console.log(`Fixed ${n} files.`);
