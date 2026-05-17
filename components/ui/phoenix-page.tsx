'use client';

import { useLayoutEffect, useState, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { useRegisterPhoenixPageScripts } from '@/components/ui/phoenix-scripts-context';

type PhoenixPageProps = {
  children: ReactNode;
  scripts?: string[];
  styles?: string[];
  /** Wait for phoenix:scripts-ready before showing (dropzone, tinymce, choices, …). */
  gate?: boolean;
};

export default function PhoenixPage({
  children,
  scripts = [],
  styles = [],
  gate = false,
}: PhoenixPageProps) {
  const pathname = usePathname();
  useRegisterPhoenixPageScripts(scripts);
  const [ready, setReady] = useState(!gate);

  useLayoutEffect(() => {
    for (const href of styles) {
      if (document.querySelector(`link[rel="stylesheet"][href="${href}"]`)) continue;
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    }
  }, [styles]);

  useLayoutEffect(() => {
    if (!gate) return;

    setReady(false);

    const onReady = (event: Event) => {
      const detail = (event as CustomEvent<{ pathname?: string }>).detail;
      if (!detail?.pathname || detail.pathname === pathname) {
        setReady(true);
      }
    };

    window.addEventListener('phoenix:scripts-ready', onReady);
    return () => window.removeEventListener('phoenix:scripts-ready', onReady);
  }, [pathname, gate]);

  if (!gate) {
    return <>{children}</>;
  }

  return (
    <div
      className="phoenix-page-root"
      style={{ visibility: ready ? 'visible' : 'hidden' }}
      aria-busy={!ready}
    >
      {children}
    </div>
  );
}
