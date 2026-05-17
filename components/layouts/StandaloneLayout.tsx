'use client';

import type { ReactNode } from 'react';
import PhoenixNavbarInit from '@/components/phoenix/PhoenixNavbarInit';
import PhoenixScripts from '@/components/phoenix/PhoenixScripts';

type StandaloneLayoutProps = {
  children: ReactNode;
  pageScripts?: string[];
  extraVendors?: string[];
  bodyStyle?: React.CSSProperties;
};

export default function StandaloneLayout({
  children,
  pageScripts = [],
  extraVendors = [],
  bodyStyle,
}: StandaloneLayoutProps) {
  return (
    <>
      <main className="main" id="top" style={bodyStyle}>
        {children}
      </main>
      <PhoenixNavbarInit />
      <PhoenixScripts pageScripts={pageScripts} extraVendors={extraVendors} />
    </>
  );
}
