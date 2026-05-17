'use client';

import type { ReactNode } from 'react';
import PhoenixScripts from '@/components/phoenix/PhoenixScripts';

type MinimalLayoutProps = {
  children: ReactNode;
  pageScripts?: string[];
};

export default function MinimalLayout({ children, pageScripts = [] }: MinimalLayoutProps) {
  return (
    <main className="main" id="top">
      {children}
      <PhoenixScripts pageScripts={pageScripts} />
    </main>
  );
}
