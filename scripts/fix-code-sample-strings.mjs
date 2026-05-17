/**
 * Fixes broken JSX code-sample strings where inner quotes break parsing (defaultValue="", etc.).
 */
import fs from 'fs';
import path from 'path';

const APP_DIR = path.join(path.resolve(process.cwd()), 'app');
const RE = /\{"<code class=\\"language-html\\">([\s\S]*?)<\/code>"\}/g;

function walk(dir, list = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, list);
    else if (e.name.endsWith('.tsx')) list.push(full);
  }
  return list;
}

let changed = 0;
for (const file of walk(APP_DIR)) {
  let src = fs.readFileSync(file, 'utf8');
  if (!src.includes('language-html')) continue;
  const next = src.replace(RE, (_, inner) => {
    const html = `<code class="language-html">${inner}</code>`;
    return `{${JSON.stringify(html)}}`;
  });
  if (next !== src) {
    fs.writeFileSync(file, next, 'utf8');
    changed++;
    console.log(path.relative(process.cwd(), file));
  }
}
console.log(`Fixed ${changed} file(s).`);
