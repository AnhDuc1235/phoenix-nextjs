'use client';

import type { ReactNode } from 'react';
import PhoenixNavbarInit from '@/components/phoenix/PhoenixNavbarInit';
import PhoenixScripts from '@/components/phoenix/PhoenixScripts';
import DashboardChrome from '@/components/layouts/generated/DashboardChrome';

type DashboardLayoutProps = {
  children: ReactNode;
  pageScripts?: string[];
  extraVendors?: string[];
};

export default function DashboardLayout({
  children,
  pageScripts = [],
  extraVendors = [],
}: DashboardLayoutProps) {
  return (
    <main className="main" id="top">
      <DashboardChrome />
      <div className="content">{children}</div>
      <PhoenixNavbarInit />
      <PhoenixScripts pageScripts={pageScripts} extraVendors={extraVendors} />
    </main>
  );
}
