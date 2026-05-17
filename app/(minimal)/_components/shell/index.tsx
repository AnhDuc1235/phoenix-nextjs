'use client';

import type { ReactNode } from 'react';
import { PhoenixScriptsProvider } from '@/components/ui/phoenix-scripts-context';

export default function MinimalShell({ children }: { children: ReactNode }) {
  return (
    <PhoenixScriptsProvider>
      <main className="main" id="top">
        {children}
      </main>
    </PhoenixScriptsProvider>
  );
}
