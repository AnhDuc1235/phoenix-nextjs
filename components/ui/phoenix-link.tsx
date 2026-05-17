'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

type PhoenixLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children?: ReactNode;
};

export function normalizeHref(href: string): string {
  if (!href || href.startsWith('#') || href.startsWith('javascript:')) return href;
  if (/^(https?:|mailto:|tel:)/i.test(href)) return href;
  let path = href.replace(/\.html$/i, '');
  if (path.endsWith('/index')) path = path.slice(0, -6);
  if (path === '/index' || path === 'index') return '/';
  return path.startsWith('/') ? path : `/${path}`;
}

/** Remove hardcoded `active` from converted static HTML classNames. */
function stripActiveClass(className?: string): string {
  if (!className) return '';
  return className
    .split(/\s+/)
    .filter((c) => c && c !== 'active')
    .join(' ');
}

function isPathActive(pathname: string, href: string): boolean {
  const path = normalizeHref(href);
  if (path === '/' || !path.startsWith('/')) return pathname === path;
  if (pathname === path) return true;
  return pathname.startsWith(`${path}/`);
}

export default function PhoenixLink({ href, className, children, target, rel, ...rest }: PhoenixLinkProps) {
  const pathname = usePathname();
  const isExternal =
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('mailto:') ||
    href.startsWith('#') ||
    href.startsWith('javascript:');

  if (isExternal) {
    return (
      <a href={href} className={className} target={target} rel={rel} {...rest}>
        {children}
      </a>
    );
  }

  const nextHref = normalizeHref(href);
  const baseClass = stripActiveClass(className);
  const isActive = isPathActive(pathname, href);
  const mergedClass = isActive ? `${baseClass} active`.trim() : baseClass || undefined;

  return (
    <Link href={nextHref} prefetch scroll className={mergedClass} target={target} rel={rel} {...rest}>
      {children}
    </Link>
  );
}
