'use client';

import type { ReactNode } from 'react';
import Overlays from './Overlays';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import PhoenixRuntime from '@/components/ui/phoenix-runtime';
import PhoenixVerticalNavSync from '@/components/ui/phoenix-vertical-nav-sync';
import { PhoenixScriptsProvider } from '@/components/ui/phoenix-scripts-context';

/**
 * Phoenix dashboard chrome — same DOM order as static HTML:
 * main > nav.navbar-vertical > nav.navbar-top > div.content > overlays (siblings)
 */
export default function DashboardShell({ children }: { children: ReactNode }) {
  return (
    <PhoenixScriptsProvider>
      <main className="main" id="top">
        <Sidebar />
        <TopNav />
        <div className="content">{children}</div>
        <Overlays />
        <PhoenixRuntime />
        <PhoenixVerticalNavSync />
      </main>
    </PhoenixScriptsProvider>
  );
}
