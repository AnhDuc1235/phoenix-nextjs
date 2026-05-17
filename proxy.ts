import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/** Legacy Phoenix .html URLs → App Router paths (SPA navigation). */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.endsWith('.html')) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  let next = pathname.replace(/\.html$/i, '');
  if (next.endsWith('/index')) next = next.slice(0, -6) || '/';
  if (next === '/index') next = '/';
  url.pathname = next || '/';

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next|api|assets|vendors|favicon|.*\\..*).*)'],
};
