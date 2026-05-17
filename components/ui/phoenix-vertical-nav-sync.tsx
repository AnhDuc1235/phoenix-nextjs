'use client';

import { useCallback, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { normalizeHref } from '@/components/ui/phoenix-link';

/**
 * Syncs sidebar active state on Next.js client navigations.
 * Static shell HTML hardcodes `active` on index; phoenix.js does not re-run per route.
 */
export default function PhoenixVerticalNavSync() {
  const pathname = usePathname();

  const syncNav = useCallback(() => {
    const root = document.querySelector('.navbar-vertical');
    if (!root) return;

    root.querySelectorAll('.nav-link').forEach((el) => el.classList.remove('active'));

    const links = [...root.querySelectorAll<HTMLAnchorElement>('a[href]')];
    let best: HTMLAnchorElement | null = null;
    let bestScore = -1;

    for (const link of links) {
      const raw = link.getAttribute('href');
      if (!raw || raw.startsWith('#') || raw.startsWith('javascript:')) continue;
      if (/^(https?:|mailto:|tel:)/i.test(raw)) continue;

      const path = normalizeHref(raw);
      let score = -1;

      if (path === '/') {
        if (pathname === '/') score = 1;
      } else if (pathname === path) {
        score = path.length + 1000;
      } else if (pathname.startsWith(`${path}/`)) {
        score = path.length;
      }

      if (score > bestScore) {
        bestScore = score;
        best = link;
      }
    }

    if (!best) return;

    best.classList.add('active');

    let collapse = best.closest('.collapse');
    while (collapse) {
      collapse.classList.add('show');
      const id = collapse.getAttribute('id');
      if (id) {
        root.querySelectorAll(`[aria-controls="${id}"]`).forEach((trigger) => {
          trigger.setAttribute('aria-expanded', 'true');
          if (trigger.classList.contains('dropdown-indicator')) {
            trigger.classList.add('show');
          }
        });
      }
      collapse = collapse.parentElement?.closest('.collapse') ?? null;
    }
  }, [pathname]);

  useEffect(() => {
    syncNav();
  }, [syncNav]);

  useEffect(() => {
    const onReady = () => syncNav();
    window.addEventListener('phoenix:scripts-ready', onReady);
    return () => window.removeEventListener('phoenix:scripts-ready', onReady);
  }, [syncNav]);

  return null;
}
