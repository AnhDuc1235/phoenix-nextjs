export type PhoenixLayoutType = 'dashboard' | 'minimal' | 'standalone';

export function detectLayoutType(mainHtml: string): PhoenixLayoutType {
  if (mainHtml.includes('navbar-vertical')) return 'dashboard';
  if (
    mainHtml.includes('min-vh-100') &&
    !mainHtml.includes('navbar-vertical') &&
    (mainHtml.includes('404') ||
      mainHtml.includes('403') ||
      mainHtml.includes('500') ||
      mainHtml.includes('authentication'))
  ) {
    return 'minimal';
  }
  return 'standalone';
}
