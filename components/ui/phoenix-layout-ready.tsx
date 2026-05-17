'use client';

import { useLayoutEffect } from 'react';

/** Applies html classes from localStorage before paint; marks layout stable after mount. */
export default function PhoenixLayoutReady() {
  useLayoutEffect(() => {
    const root = document.documentElement;

    try {
      const collapsed = localStorage.getItem('phoenixIsNavbarVerticalCollapsed');
      if (collapsed === 'true') {
        root.classList.add('navbar-vertical-collapsed');
      }

      const theme = localStorage.getItem('phoenixTheme');
      if (theme === 'dark') {
        root.setAttribute('data-bs-theme', 'dark');
      } else if (theme === 'auto') {
        root.setAttribute(
          'data-bs-theme',
          window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
        );
      }

      const nav = localStorage.getItem('phoenixNavbarPosition');
      if (nav === 'horizontal') root.setAttribute('data-navigation-type', 'horizontal');
      else if (nav === 'combo') root.setAttribute('data-navigation-type', 'combo');
    } catch {
      /* ignore */
    }

    if (!root.classList.contains('phoenix-layout-ready')) {
      root.classList.add('phoenix-layout-ready');
    }
  }, []);

  return null;
}
