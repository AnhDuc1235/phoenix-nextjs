'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import PhoenixNavbarInit from '@/components/ui/phoenix-navbar-init';
import PhoenixScripts from '@/components/ui/phoenix-scripts';

export default function PhoenixRuntime() {
  const pathname = usePathname();

  useEffect(() => {
    window.feather?.replace();
  }, [pathname]);

  return (
    <>
      <PhoenixScripts />
      <PhoenixNavbarInit />
    </>
  );
}
