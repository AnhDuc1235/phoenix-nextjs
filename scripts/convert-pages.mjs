/**
 * Converts Phoenix static HTML (public/*.html) to Next.js App Router pages.
 * Run: npm run convert:pages
 */
import fs from 'fs';
import path from 'path';
import { parse } from 'node-html-parser';

const ROOT = path.resolve(process.cwd());
const PUBLIC_DIR = path.join(ROOT, 'public');
const APP_DIR = path.join(ROOT, 'app');
const ROUTE_GROUPS = {
  dashboard: '(dashboard)',
  minimal: '(minimal)',
  standalone: '(standalone)',
};
const SHELL_DIR = path.join(APP_DIR, '(dashboard)', '_components', 'shell');

const UI_IMPORT_IMAGE = "@/components/ui/phoenix-image";
const UI_IMPORT_LINK = "@/components/ui/phoenix-link";

const VOID_TAGS = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr',
]);

/** Keep multiline structure for elements that may contain formatted text. */
const INLINE_TAGS = new Set(['pre', 'code', 'textarea', 'script', 'style']);

/** React rejects whitespace-only text nodes inside table sections. */
const TABLE_SECTION_TAGS = new Set(['table', 'thead', 'tbody', 'tfoot', 'tr']);

const INLINE_EVENT_ATTRS = {
  onclick: (body) => {
    const v = body.trim().replace(/;$/, '');
    if (v === 'location.reload()') return 'onClick={() => { window.location.reload(); }}';
    return `onClick={() => { ${v}; }}`;
  },
};

const ATTR_RENAME = {
  class: 'className',
  for: 'htmlFor',
  tabindex: 'tabIndex',
  readonly: 'readOnly',
  maxlength: 'maxLength',
  minlength: 'minLength',
  colspan: 'colSpan',
  rowspan: 'rowSpan',
  autofocus: 'autoFocus',
  autoplay: 'autoPlay',
  cellpadding: 'cellPadding',
  cellspacing: 'cellSpacing',
  usemap: 'useMap',
  frameborder: 'frameBorder',
  allowfullscreen: 'allowFullScreen',
  contenteditable: 'contentEditable',
  crossorigin: 'crossOrigin',
  datetime: 'dateTime',
  enctype: 'encType',
  formaction: 'formAction',
  formenctype: 'formEncType',
  formmethod: 'formMethod',
  formnovalidate: 'formNoValidate',
  formtarget: 'formTarget',
  novalidate: 'noValidate',
  spellcheck: 'spellCheck',
  srcset: 'srcSet',
  acceptcharset: 'acceptCharset',
  viewbox: 'viewBox',
  preserveaspectratio: 'preserveAspectRatio',
  clippathunits: 'clipPathUnits',
  filterunits: 'filterUnits',
  patternunits: 'patternUnits',
  patterncontentunits: 'patternContentUnits',
  maskunits: 'maskUnits',
  maskcontentunits: 'maskContentUnits',
  gradientunits: 'gradientUnits',
  gradienttransform: 'gradientTransform',
  strokewidth: 'strokeWidth',
  strokelinecap: 'strokeLinecap',
  strokelinejoin: 'strokeLinejoin',
  fillcolor: 'fillOpacity',
  strokeopacity: 'strokeOpacity',
  strokedasharray: 'strokeDasharray',
  strokedashoffset: 'strokeDashoffset',
  textanchor: 'textAnchor',
  fontfamily: 'fontFamily',
  fontsize: 'fontSize',
  fontweight: 'fontWeight',
  autocomplete: 'autoComplete',
  autocorrect: 'autoCorrect',
  autocapitalize: 'autoCapitalize',
  inputmode: 'inputMode',
};

function walkHtmlFiles(dir, list = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkHtmlFiles(full, list);
    else if (entry.name.endsWith('.html')) list.push(full);
  }
  return list;
}

function htmlPathToRoute(relativePath) {
  let route = relativePath.replace(/\\/g, '/').replace(/\.html$/i, '');
  if (route === 'index') return '/';
  if (route.endsWith('/index')) route = route.slice(0, -6);
  return `/${route}`;
}

function isInternalHref(href) {
  if (!href || href.startsWith('#') || href.startsWith('javascript:')) return false;
  if (/^(https?:|mailto:|tel:)/i.test(href)) return false;
  return true;
}

function resolveHtmlHref(href, sourceRel) {
  const sourceDir = path.dirname(sourceRel).replace(/\\/g, '/');
  const parts = [...(sourceDir === '.' ? [] : sourceDir.split('/')), ...href.split('/')];
  const resolved = [];
  for (const part of parts) {
    if (!part || part === '.') continue;
    if (part === '..') resolved.pop();
    else resolved.push(part);
  }
  const joined = resolved.join('/');
  if (!joined) return '/';
  return htmlPathToRoute(joined.endsWith('.html') ? joined : `${joined}.html`);
}

function normalizeAssetPath(src, sourceRel) {
  if (!src || src.startsWith('data:') || /^(https?:|\/\/)/i.test(src)) return src;
  const sourceDir = path.dirname(sourceRel).replace(/\\/g, '/');
  const parts = [...(sourceDir === '.' ? [] : sourceDir.split('/')), ...src.split('/')];
  const resolved = [];
  for (const part of parts) {
    if (!part || part === '.') continue;
    if (part === '..') resolved.pop();
    else resolved.push(part);
  }
  return `/${resolved.join('/')}`;
}

function escapeJsxText(text) {
  const normalized = text.replace(/\s+/g, ' ');
  if (!normalized.trim()) return '';
  return `{${JSON.stringify(normalized)}}`;
}

function escapeJsxAttr(value) {
  return String(value)
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, ' ');
}

function styleToJsx(styleStr) {
  if (!styleStr) return null;
  const obj = {};
  for (const rule of styleStr.split(';')) {
    const colon = rule.indexOf(':');
    if (colon === -1) continue;
    const k = rule.slice(0, colon).trim();
    const v = rule.slice(colon + 1).trim();
    if (!k || !v) continue;
    if (k.startsWith('--')) {
      obj[k] = v;
    } else {
      const camel = k.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      obj[camel] = v;
    }
  }
  return JSON.stringify(obj);
}

const NUMERIC_ATTRS = new Set([
  'tabindex',
  'colspan',
  'rowspan',
  'span',
  'rows',
  'cols',
  'size',
  'maxlength',
  'minlength',
  'width',
  'height',
]);

const BOOLEAN_ATTRS = new Set([
  'autofocus',
  'autoplay',
  'checked',
  'disabled',
  'readonly',
  'required',
  'selected',
  'multiple',
  'hidden',
  'open',
  'default',
  'novalidate',
  'async',
  'defer',
  'controls',
  'loop',
  'muted',
  'playsinline',
]);

function attrsToJsx(node, sourceRel) {
  const tag = node.tagName?.toLowerCase();
  const parts = [];
  const rawAttrs = node.rawAttrs || '';

  for (const match of rawAttrs.matchAll(/([\w:@-]+)(?:=(?:"([^"]*)"|'([^']*)'|(\S+)))?/g)) {
    let name = match[1];
    let value = match[2] ?? match[3] ?? match[4] ?? true;

    if (name === 'style' && typeof value === 'string') {
      const styleObj = styleToJsx(value);
      if (styleObj) parts.push(`style={${styleObj} as CSSProperties}`);
      continue;
    }

    const lowerName = name.toLowerCase();
    if (INLINE_EVENT_ATTRS[lowerName] && typeof value === 'string') {
      parts.push(INLINE_EVENT_ATTRS[lowerName](value));
      continue;
    }

    let jsxName = ATTR_RENAME[name.toLowerCase()] || name;

    if (tag === 'input' && jsxName === 'value') jsxName = 'defaultValue';
    if (tag === 'textarea' && jsxName === 'value') jsxName = 'defaultValue';
    if (tag === 'select' && jsxName === 'value') jsxName = 'defaultValue';
    if (tag === 'input' && jsxName === 'checked') jsxName = 'defaultChecked';
    if (tag === 'option' && jsxName === 'selected') continue;

    if (jsxName === 'className' && typeof value === 'string') {
      parts.push(`className="${escapeJsxAttr(value)}"`);
      continue;
    }

    if (
      typeof value === 'string' &&
      (NUMERIC_ATTRS.has(name.toLowerCase()) ||
        (name.startsWith('aria-') && /^\d+(\.\d+)?$/.test(value)))
    ) {
      const num = parseFloat(value);
      if (!Number.isNaN(num)) {
        parts.push(`${jsxName}={${num}}`);
        continue;
      }
    }

    if (
      BOOLEAN_ATTRS.has(name.toLowerCase()) ||
      (typeof value === 'string' && value.toLowerCase() === name.toLowerCase())
    ) {
      parts.push(jsxName);
      continue;
    }

    if (typeof value === 'string') {
      const needsExpression =
        name.startsWith('data-') ||
        value.includes('{') ||
        value.includes('"') ||
        value.includes("'") ||
        value.includes('&');

      let finalValue = value;
      if (jsxName === 'href' && isInternalHref(value)) {
        finalValue = resolveHtmlHref(value, sourceRel);
      } else if (jsxName === 'src') {
        finalValue = normalizeAssetPath(value, sourceRel);
      }

      if (needsExpression) {
        parts.push(`${jsxName}={${JSON.stringify(finalValue)}}`);
      } else {
        parts.push(`${jsxName}="${escapeJsxAttr(finalValue)}"`);
      }
    } else if (value === true) {
      parts.push(jsxName);
    }
  }

  return parts.join(' ');
}

function nodeToJsx(node, sourceRel, depth = 0, parentTag = '') {
  if (node.nodeType === 3) {
    if (TABLE_SECTION_TAGS.has(parentTag)) return '';
    const text = node.text.replace(/\s+/g, ' ');
    if (!text.trim()) return '';
    return escapeJsxText(text);
  }

  const tag = node.tagName?.toLowerCase();
  if (!tag) return '';

  if (tag === 'script' || tag === 'link' || tag === 'meta' || tag === 'title') return '';

  const indent = '  '.repeat(depth);
  const attrs = attrsToJsx(node, sourceRel);

  if (tag === 'img') {
    const src = normalizeAssetPath(node.getAttribute('src') || '', sourceRel);
    const alt = escapeJsxAttr(node.getAttribute('alt') || '');
    const className = node.getAttribute('class');
    const width = node.getAttribute('width');
    const height = node.getAttribute('height');
    const id = node.getAttribute('id');
    const styleAttr = node.getAttribute('style');
    const parts = [
      `src="${escapeJsxAttr(src)}"`,
      `alt="${alt}"`,
      className ? `className="${escapeJsxAttr(className)}"` : '',
      width ? `width="${escapeJsxAttr(width)}"` : '',
      height ? `height="${escapeJsxAttr(height)}"` : '',
      id ? `id="${escapeJsxAttr(id)}"` : '',
    ].filter(Boolean);
    if (styleAttr) {
      const styleObj = styleToJsx(styleAttr);
      if (styleObj) parts.push(`style={${styleObj} as CSSProperties}`);
    }
    return `${indent}<PhoenixImage ${parts.join(' ')} />`;
  }

  if (tag === 'textarea') {
    const text = (node.textContent ?? '').trim();
    const dv = text ? ` defaultValue={${JSON.stringify(text)}}` : ' defaultValue=""';
    return `${indent}<textarea${attrs ? ` ${attrs}` : ''}${dv} />`;
  }

  if (tag === 'a') {
    const href = node.getAttribute('href') || '#';
    const internal = isInternalHref(href);
    const resolved = internal ? resolveHtmlHref(href, sourceRel) : href;
    const LinkTag = internal ? 'PhoenixLink' : 'a';
    const hrefAttr = internal ? `href="${escapeJsxAttr(resolved)}"` : `href="${escapeJsxAttr(href)}"`;
    const children = node.childNodes.map((c) => nodeToJsx(c, sourceRel, depth + 1, tag)).join('');
    const open = `${indent}<${LinkTag} ${[hrefAttr, attrs.replace(/href="[^"]*"/, '').trim()].filter(Boolean).join(' ')}>`;
    const close = `${indent}</${LinkTag}>`;
    if (VOID_TAGS.has(tag)) return open.replace(/>$/, ' />');
    return `${open}\n${children}\n${close}`;
  }

  const elementChildren = node.childNodes.filter((c) => c.nodeType === 1 || (c.nodeType === 3 && c.text.trim()));
  const singleTextChild =
    elementChildren.length === 1 &&
    elementChildren[0].nodeType === 3 &&
    !INLINE_TAGS.has(tag);

  if (singleTextChild) {
    const text = elementChildren[0].text.trim();
    if (text) {
      return `${indent}<${tag}${attrs ? ` ${attrs}` : ''}>${escapeJsxText(text)}</${tag}>`;
    }
  }

  const children = node.childNodes
    .map((c) => nodeToJsx(c, sourceRel, depth + 1, tag))
    .filter(Boolean)
    .join('\n');
  const openTag = `${indent}<${tag}${attrs ? ` ${attrs}` : ''}>`;
  const closeTag = `${indent}</${tag}>`;

  if (VOID_TAGS.has(tag)) {
    return `${indent}<${tag}${attrs ? ` ${attrs}` : ''} />`;
  }

  if (!children.trim()) {
    return TABLE_SECTION_TAGS.has(tag)
      ? `${indent}<${tag}${attrs ? ` ${attrs}` : ''}></${tag}>`
      : `${openTag}${closeTag}`;
  }
  return `${openTag}\n${children}\n${closeTag}`;
}

function cleanupTableJsx(jsx) {
  return jsx.replace(/<(tbody|thead|tfoot)(\s[^>]*)>\s+<\/\1>/gi, '<$1$2></$1>');
}

function normalizeTableMarkup(html) {
  let result = html.replace(
    /<\/thead>\s*(<tr[\s\S]*?<\/tr>)\s*(<tbody)/gi,
    '</thead><tbody class="phoenix-table-summary">$1</tbody>$2',
  );
  // Phoenix template: summary <tr> after </tbody> — valid DOM for React hydration
  result = result.replace(
    /<\/tbody>\s*(<tr[\s\S]*?<\/tr>)\s*(?=<\/table>)/gi,
    '</tbody><tfoot>$1</tfoot>',
  );
  result = result.replace(
    /<table([^>]*)>(\s*)((?:<tr[\s\S]*?<\/tr>\s*)+)(?=\s*<\/table>)/gi,
    (match, attrs, ws, trBlock) => {
      if (/<thead|<tbody|<tfoot/i.test(match)) return match;
      return `<table${attrs}>${ws}<tbody>${trBlock}</tbody>`;
    },
  );
  return result;
}

function htmlFragmentToJsx(html, sourceRel) {
  const root = parse(`<div id="root">${normalizeTableMarkup(html)}</div>`, { comment: false });
  const wrapper = root.querySelector('#root');
  if (!wrapper) return '';
  const jsx = wrapper.childNodes.map((n) => nodeToJsx(n, sourceRel, 2)).join('\n');
  return cleanupTableJsx(jsx);
}

function extractMain(html) {
  const match = html.match(/<main[^>]*>([\s\S]*)<\/main>/i);
  return match ? match[1] : '';
}

function extractTitle(html) {
  const m = html.match(/<title>([^<]*)<\/title>/i);
  return m ? m[1].trim() : 'Phoenix';
}

function extractBodyScripts(html) {
  const scripts = [];
  const re = /<script[^>]+src=["']([^"']+)["']/gi;
  let m;
  while ((m = re.exec(html))) {
    const src = m[1];
    if (src.includes('config.js') || src.includes('simplebar')) continue;
    if (src.includes('popper') || src.includes('bootstrap.min') || src.includes('phoenix.js')) continue;
    if (src.includes('anchor') || src.includes('/is/') || src.includes('fontawesome')) continue;
    if (src.includes('lodash') || src.includes('list.min') || src.includes('feather')) continue;
    if (src.includes('dayjs')) continue;
    scripts.push(normalizeAssetPath(src, 'index.html'));
  }
  return [...new Set(scripts)];
}

function extractExtraStyles(html) {
  const links = [];
  const re = /<link[^>]+href=["']([^"']+)["'][^>]*rel=["']stylesheet["'][^>]*>/gi;
  let m;
  while ((m = re.exec(html))) {
    const href = m[1];
    if (!/\.css(\?|$)/i.test(href) && !href.includes('mapbox-gl')) continue;
    if (href.includes('theme') || href.includes('user.min') || href.includes('user-rtl') || href.includes('fonts.googleapis')) continue;
    if (href.includes('simplebar') || href.includes('unicons')) continue;
    if (href.includes('leaflet') && !href.includes('mapbox')) continue;
    links.push(normalizeAssetPath(href, 'index.html'));
  }
  return [...new Set(links)];
}

function detectLayoutType(mainHtml) {
  if (mainHtml.includes('navbar-vertical')) return 'dashboard';
  if (
    mainHtml.includes('min-vh-100') &&
    !mainHtml.includes('navbar-vertical') &&
    (mainHtml.includes('404') || mainHtml.includes('403') || mainHtml.includes('500') || mainHtml.includes('authentication'))
  ) {
    return 'minimal';
  }
  return 'standalone';
}

function extractDashboardContent(mainHtml) {
  const openMatch = mainHtml.match(/<div class="content[^"]*">/);
  if (!openMatch) return mainHtml;
  const openTag = openMatch[0];
  const start = mainHtml.indexOf(openTag);
  const afterOpen = start + openTag.length;
  const searchModal2 = mainHtml.indexOf('<div class="modal fade" id="searchBoxModal"', afterOpen);
  const scriptIdx = mainHtml.indexOf('<script>', afterOpen);
  const end =
    searchModal2 !== -1 ? searchModal2 : scriptIdx !== -1 ? scriptIdx : mainHtml.length;
  return mainHtml.slice(afterOpen, end);
}

function extractChromeParts(mainHtml) {
  const navStart = mainHtml.indexOf('<nav class="navbar navbar-vertical');
  const topStart = mainHtml.indexOf('<nav class="navbar navbar-top');
  const contentMatch = mainHtml.match(/<div class="content[^"]*">/);
  const contentStart = contentMatch ? mainHtml.indexOf(contentMatch[0]) : -1;
  if (navStart === -1 || contentStart === -1) return { sidebar: '', topNav: '', overlays: '' };

  const sidebar = topStart !== -1 ? mainHtml.slice(navStart, topStart) : mainHtml.slice(navStart, contentStart);
  const topNav = topStart !== -1 ? mainHtml.slice(topStart, contentStart) : '';
  let overlays = '';
  const searchModalStart = mainHtml.indexOf('<div class="modal fade" id="searchBoxModal"');
  const supportStart = mainHtml.indexOf('<div class="support-chat-container"');
  const overlaysStart =
    searchModalStart !== -1 ? searchModalStart : supportStart !== -1 ? supportStart : -1;
  if (overlaysStart !== -1) {
    overlays = mainHtml
      .slice(overlaysStart)
      .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
      .trim();
  }

  return { sidebar, topNav, overlays };
}

/** Theme customizer lives outside <main> in static HTML. */
function extractBodyChrome(html) {
  const settingsStart = html.indexOf('<div class="offcanvas offcanvas-end settings-panel');
  if (settingsStart === -1) return '';
  const toggleAnchor = '<a class="card setting-toggle"';
  const toggleStart = html.indexOf(toggleAnchor, settingsStart);
  if (toggleStart === -1) return html.slice(settingsStart).trim();
  const toggleEnd = html.indexOf('</a>', toggleStart) + 4;
  return html.slice(settingsStart, toggleEnd).trim();
}

function buildShellPart(name, jsxBody) {
  return `'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '${UI_IMPORT_IMAGE}';
import PhoenixLink from '${UI_IMPORT_LINK}';

export default function ${name}() {
  return (
    <>
${jsxBody}
    </>
  );
}
`;
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function writeFile(filePath, content) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content, 'utf8');
}

function buildPageComponent(name, jsxBody) {
  return `'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '${UI_IMPORT_IMAGE}';
import PhoenixLink from '${UI_IMPORT_LINK}';

export default function ${name}() {
  return (
    <div suppressHydrationWarning>
${jsxBody}
    </div>
  );
}
`;
}

function buildPageTsx(contentName, meta, pageScripts, extraStyles) {
  const stylesBlock =
    extraStyles.length > 0
      ? extraStyles.map((s) => `      <link href="${s}" rel="stylesheet" />`).join('\n')
      : '';

  const scriptsBlock =
    pageScripts.length > 0
      ? `      <ExtraScripts scripts={${JSON.stringify(pageScripts)}} />\n`
      : '';

  return `import type { Metadata } from 'next';
import ${contentName} from './_components/${contentName}';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: ${JSON.stringify(meta.title)},
};

export default function Page() {
  return (
    <>
${stylesBlock}${scriptsBlock}      <${contentName} />
    </>
  );
}
`;
}

function contentNameFromRoute(route) {
  if (route === '/') return 'Home';
  const last = route.slice(1).split('/').pop() || 'page';
  const name = last
    .split(/[-_]+/)
    .map((s) => s.replace(/[^a-zA-Z0-9]/g, ''))
    .filter(Boolean)
    .map((w) => (w.length <= 4 && w === w.toUpperCase() ? w : w.charAt(0).toUpperCase() + w.slice(1)))
    .join('');
  return name.replace(/^[0-9]/, '_$&') || 'Page';
}

function getPageDir(route, layoutType) {
  const base = path.join(APP_DIR, ROUTE_GROUPS[layoutType]);
  return route === '/' ? base : path.join(base, route.slice(1));
}

function removePageRoutes(dir, isRoot = true) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (isRoot && (entry.name === 'layout.tsx' || entry.name === 'globals.css')) continue;
    if (isRoot && entry.name.startsWith('(') && entry.isDirectory()) {
      cleanRouteGroup(path.join(dir, entry.name));
      continue;
    }
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.startsWith('(')) continue;
      removePageRoutes(full, false);
      try {
        if (fs.readdirSync(full).length === 0) fs.rmdirSync(full);
      } catch {
        /* ignore */
      }
    } else if (entry.name === 'page.tsx') {
      fs.unlinkSync(full);
    }
  }
}

function cleanRouteGroup(groupDir) {
  if (!fs.existsSync(groupDir)) return;
  for (const entry of fs.readdirSync(groupDir, { withFileTypes: true })) {
    const full = path.join(groupDir, entry.name);
    if (entry.name === 'layout.tsx' || entry.name === 'loading.tsx') continue;
    if (entry.isDirectory()) {
      if (entry.name === '_components') {
        for (const sub of fs.readdirSync(full, { withFileTypes: true })) {
          if (sub.name === 'shell') continue;
          fs.rmSync(path.join(full, sub.name), { recursive: true, force: true });
        }
      } else {
        fs.rmSync(full, { recursive: true, force: true });
      }
    } else if (entry.name === 'page.tsx') {
      fs.unlinkSync(full);
    }
  }
}

function generateShellAndChrome() {
  const indexPath = path.join(PUBLIC_DIR, 'index.html');
  const indexHtml = fs.readFileSync(indexPath, 'utf8');
  const indexMain = extractMain(indexHtml);
  const { sidebar, topNav, overlays } = extractChromeParts(indexMain);
  const bodyChrome = extractBodyChrome(indexHtml);

  const sidebarClean = sidebar
    .replace(/\bnav-link\s+active\b/gi, 'nav-link')
    .replace(/\bactive\s+nav-link\b/gi, 'nav-link');
  writeFile(path.join(SHELL_DIR, 'Sidebar.tsx'), buildShellPart('Sidebar', htmlFragmentToJsx(sidebarClean, 'index.html')));
  writeFile(path.join(SHELL_DIR, 'TopNav.tsx'), buildShellPart('TopNav', htmlFragmentToJsx(topNav, 'index.html')));
  writeFile(path.join(SHELL_DIR, 'Overlays.tsx'), buildShellPart('Overlays', htmlFragmentToJsx(overlays, 'index.html')));

  const globalJsx = htmlFragmentToJsx(bodyChrome, 'index.html');
  writeFile(
    path.join(ROOT, 'components', 'ui', 'phoenix-global-chrome.tsx'),
    `'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '${UI_IMPORT_IMAGE}';
import PhoenixLink from '${UI_IMPORT_LINK}';

/** Theme customizer + toggle (from static HTML body, outside main). */
export default function PhoenixGlobalChrome() {
  return (
    <>
${globalJsx}
    </>
  );
}
`,
  );

  console.log('Generated shell/* and components/ui/phoenix-global-chrome.tsx');
}

function main() {
  const shellOnly = process.argv.includes('--shell-only');
  if (shellOnly) {
    console.log('Regenerating Phoenix dashboard shell...');
    generateShellAndChrome();
    return;
  }

  console.log('Phoenix HTML → Next.js conversion...');

  removePageRoutes(APP_DIR);
  if (fs.existsSync(path.join(ROOT, 'components', 'pages'))) {
    fs.rmSync(path.join(ROOT, 'components', 'pages'), { recursive: true, force: true });
  }

  generateShellAndChrome();

  const htmlFiles = walkHtmlFiles(PUBLIC_DIR);
  let count = 0;

  for (const filePath of htmlFiles) {
    const rel = path.relative(PUBLIC_DIR, filePath).replace(/\\/g, '/');
    const route = htmlPathToRoute(rel);
    const html = fs.readFileSync(filePath, 'utf8');
    const mainHtml = extractMain(html);
    if (!mainHtml.trim()) continue;

    const layoutType = detectLayoutType(mainHtml);
    const title = extractTitle(html);
    const pageScripts = extractBodyScripts(html);
    const extraStyles = extractExtraStyles(html);

    let contentHtml = mainHtml;
    if (layoutType === 'dashboard') {
      contentHtml = extractDashboardContent(mainHtml);
    }

    const contentName = contentNameFromRoute(route);

    let jsx;
    try {
      jsx = htmlFragmentToJsx(contentHtml, rel);
    } catch (err) {
      console.warn(`Skip ${rel}: ${err.message}`);
      continue;
    }

    const pageDir = getPageDir(route, layoutType);
    writeFile(path.join(pageDir, '_components', `${contentName}.tsx`), buildPageComponent(contentName, jsx));
    writeFile(path.join(pageDir, 'page.tsx'), buildPageTsx(contentName, { title }, pageScripts, extraStyles));
    count++;
  }

  console.log(`Converted ${count} pages.`);
}

main();
