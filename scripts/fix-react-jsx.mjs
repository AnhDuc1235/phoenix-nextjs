/**
 * Fixes common React/Next.js issues in converted Phoenix components.
 * Does NOT touch string literals (code samples). Run: npm run fix:jsx
 */
import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(process.cwd());
const APP_DIR = path.join(ROOT, 'app');

function walkTsx(dir, list = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkTsx(full, list);
    else if (entry.name.endsWith('.tsx')) list.push(full);
  }
  return list;
}

function fixContent(content) {
  let out = content;

  out = out.replace(/<(tbody|thead|tfoot)(\s[^>]*)>\s+<\/\1>/gi, '<$1$2></$1>');

  out = out.replace(/\sonclick="location\.reload\(\)"/gi, ' onClick={() => { window.location.reload(); }}');

  out = out.replace(/\sonclick="([^"]*)"/gi, (_, body) => {
    const v = body.trim().replace(/;$/, '');
    if (v === 'location.reload()') return ' onClick={() => { window.location.reload(); }}';
    return ` onClick={() => { ${v}; }}`;
  });

  out = out.replace(/className="nav-link active"/g, 'className="nav-link"');

  const svgAttrMap = [
    ['stroke-linecap', 'strokeLinecap'],
    ['stroke-width', 'strokeWidth'],
    ['stroke-linejoin', 'strokeLinejoin'],
    ['fill-rule', 'fillRule'],
    ['clip-path', 'clipPath'],
    ['stop-color', 'stopColor'],
    ['stop-opacity', 'stopOpacity'],
    ['fill-opacity', 'fillOpacity'],
    ['stroke-opacity', 'strokeOpacity'],
  ];
  for (const [kebab, camel] of svgAttrMap) {
    out = out.replace(new RegExp(`\\b${kebab}=`, 'g'), `${camel}=`);
  }

  return out;
}

let changed = 0;
for (const file of walkTsx(APP_DIR)) {
  if (!file.includes(`${path.sep}_components${path.sep}`) && !file.includes(`${path.sep}shell${path.sep}`)) continue;
  const original = fs.readFileSync(file, 'utf8');
  const next = fixContent(original);
  if (next !== original) {
    fs.writeFileSync(file, next, 'utf8');
    changed++;
    console.log(path.relative(ROOT, file));
  }
}
console.log(`Updated ${changed} file(s).`);
