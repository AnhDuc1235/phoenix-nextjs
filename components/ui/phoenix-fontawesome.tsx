'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

declare global {
  interface Window {
    FontAwesome?: {
      dom?: { i2svg: (opts?: { node?: ParentNode }) => void };
    };
    FontAwesomeConfig?: {
      autoReplaceSvg?: boolean | 'nest';
      observeMutations?: boolean;
    };
  }
}

/** Run Font Awesome SVG replacement after React hydration to avoid SSR/client DOM mismatches. */
export function runFontAwesomeI2svg(root: ParentNode = document) {
  const fa = window.FontAwesome?.dom;
  if (!fa?.i2svg) return;

  fa.i2svg({ node: root });
  document.documentElement.classList.add('fontawesome-i2svg-active');
}

export default function PhoenixFontAwesome() {
  const pathname = usePathname();

  useEffect(() => {
    let cancelled = false;
    let attempts = 0;

    const tick = () => {
      if (cancelled) return;
      if (window.FontAwesome?.dom?.i2svg) {
        runFontAwesomeI2svg();
        return;
      }
      if (++attempts < 200) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return null;
}
