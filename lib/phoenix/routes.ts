/** Maps legacy .html paths to Next.js App Router paths */
export function htmlPathToRoute(htmlPath: string): string {
  let route = htmlPath
    .replace(/^\//, '')
    .replace(/\.html$/i, '')
    .replace(/\/index$/i, '');

  if (!route) return '/';
  return `/${route}`;
}

export function isInternalHref(href: string): boolean {
  if (!href || href.startsWith('#') || href.startsWith('javascript:')) return false;
  if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:')) {
    return false;
  }
  return true;
}

export function resolveHtmlHref(href: string, sourceHtmlPath: string): string {
  if (!isInternalHref(href)) return href;

  const sourceDir = sourceHtmlPath.replace(/[^/\\]+$/, '');
  const parts = [...sourceDir.split(/[/\\]/).filter(Boolean), ...href.split('/')];
  const resolved: string[] = [];

  for (const part of parts) {
    if (part === '.' || part === '') continue;
    if (part === '..') {
      resolved.pop();
    } else {
      resolved.push(part);
    }
  }

  return htmlPathToRoute(`${resolved.join('/')}.html`);
}
