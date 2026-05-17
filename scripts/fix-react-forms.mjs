/**
 * Fixes generated Phoenix page components for React controlled-field warnings.
 * Run: node scripts/fix-react-forms.mjs
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

function fixTableMarkup(content) {
  return content.replace(
    /<table([^>]*)>(\s*)((?:<tr[\s\S]*?<\/tr>\s*)+)(?=\s*<\/table>)/gi,
    (match, attrs, ws, trBlock) => {
      if (/<thead|<tbody|<tfoot/i.test(match)) return match;
      return `<table${attrs}>${ws}<tbody>${trBlock}</tbody>`;
    },
  );
}

function fixFormFields(content) {
  let out = content;

  out = out.replace(/<input\b([^>]*?)\svalue="/gi, '<input$1 defaultValue="');
  out = out.replace(/<textarea\b([^>]*?)\svalue="/gi, '<textarea$1 defaultValue="');
  out = out.replace(/<select\b([^>]*?)\svalue="/gi, '<select$1 defaultValue="');

  out = out.replace(/<input\b([^>]*?)\schecked(\s|>|\/)/gi, '<input$1 defaultChecked$2');
  out = out.replace(/<input\b([^>]*?)\sdefaultChecked="checked"/gi, '<input$1 defaultChecked');

  out = out.replace(/<option\b([^>]*?)\s+selected(?:=(?:"[^"]*"|'[^']*'|[^\s>]+))?/gi, '<option$1');

  out = out.replace(
    /<textarea\b([^>]*)>([\s\S]*?)<\/textarea>/gi,
    (m, attrs, inner) => {
      if (/\bdefaultValue=/.test(attrs) || !inner.trim()) return m;
      const text = inner.trim();
      return `<textarea${attrs} defaultValue={${JSON.stringify(text)}} />`;
    },
  );

  return out;
}

function fixHydrationWrappers(content) {
  if (content.includes('suppressHydrationWarning')) return content;
  if (!/return \(\s*<>/.test(content)) return content;
  return content
    .replace(/return \(\s*<>\n/, 'return (\n    <div suppressHydrationWarning>\n')
    .replace(/\n    <\/>\n  \);\n\}/, '\n    </div>\n  );\n}');
}

const files = walkTsx(APP_DIR);
let changed = 0;

const SKIP_SEGMENTS = [
  `${path.sep}modules${path.sep}`,
  `${path.sep}documentation${path.sep}`,
  `${path.sep}showcase${path.sep}`,
];

for (const file of files) {
  if (!file.includes(`${path.sep}_components${path.sep}`)) continue;
  if (SKIP_SEGMENTS.some((seg) => file.includes(seg))) continue;

  const original = fs.readFileSync(file, 'utf8');
  let next = fixTableMarkup(original);
  next = fixFormFields(next);
  if (file.includes('_components')) next = fixHydrationWrappers(next);

  if (next !== original) {
    fs.writeFileSync(file, next, 'utf8');
    changed++;
  }
}

console.log(`Updated ${changed} component files.`);
