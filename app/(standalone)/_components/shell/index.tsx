'use client';

import type { ReactNode } from 'react';
import PhoenixNavbarInit from '@/components/ui/phoenix-navbar-init';
import { PhoenixScriptsProvider } from '@/components/ui/phoenix-scripts-context';

export default function StandaloneShell({ children }: { children: ReactNode }) {
  return (
    <PhoenixScriptsProvider>
      <main className="main" id="top">
        {children}
        <PhoenixNavbarInit />
      </main>
    </PhoenixScriptsProvider>
  );
}
