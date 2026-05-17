/**
 * Wraps orphan <tr> after </tbody> in <tfoot> (Phoenix forecast tables).
 * Run: node scripts/fix-table-hydration.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const APP_DIR = path.join(ROOT, 'app');

const PATTERN = /<\/tbody>\s*(<tr[\s\S]*?<\/tr>)\s*(?=<\/table>)/gi;
const REPLACEMENT = '</tbody><tfoot>$1</tfoot>';

function walk(dir, files = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, files);
    else if (e.name.endsWith('.tsx')) files.push(full);
  }
  return files;
}

let fixed = 0;
for (const file of walk(APP_DIR)) {
  const src = fs.readFileSync(file, 'utf8');
  if (!PATTERN.test(src)) continue;
  PATTERN.lastIndex = 0;
  const next = src.replace(PATTERN, REPLACEMENT);
  if (next !== src) {
    fs.writeFileSync(file, next, 'utf8');
    fixed++;
    console.log(path.relative(ROOT, file));
  }
}
console.log(`Fixed ${fixed} file(s).`);
