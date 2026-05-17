'use client';

import Script from 'next/script';
import { useEffect } from 'react';

type PhoenixScriptsProps = {
  /** Extra script paths relative to /public (e.g. assets/js/dashboards/crm-dashboard.js) */
  pageScripts?: string[];
  /** Vendor scripts beyond the default bundle */
  extraVendors?: string[];
};

const DEFAULT_VENDORS = [
  '/vendors/popper/popper.min.js',
  '/vendors/bootstrap/bootstrap.min.js',
  '/vendors/anchorjs/anchor.min.js',
  '/vendors/is/is.min.js',
  '/vendors/fontawesome/all.min.js',
  '/vendors/lodash/lodash.min.js',
  '/vendors/list.js/list.min.js',
  '/vendors/feather-icons/feather.min.js',
  '/vendors/dayjs/dayjs.min.js',
];

const MAP_VENDORS = [
  '/vendors/leaflet/leaflet.js',
  '/vendors/leaflet.markercluster/leaflet.markercluster.js',
  '/vendors/leaflet.tilelayer.colorfilter/leaflet-tilelayer-colorfilter.min.js',
];

export default function PhoenixScripts({
  pageScripts = [],
  extraVendors = [],
}: PhoenixScriptsProps) {
  const vendors = [...DEFAULT_VENDORS, ...extraVendors];
  const allScripts = [...vendors, '/assets/js/phoenix.js', ...pageScripts];

  useEffect(() => {
    if (typeof window !== 'undefined' && window.feather) {
      window.feather.replace();
    }
  }, []);

  return (
    <>
      {allScripts.map((src) => (
        <Script key={src} src={src} strategy="afterInteractive" />
      ))}
    </>
  );
}

export function PhoenixMapScripts({ pageScripts = [] }: PhoenixScriptsProps) {
  return (
    <PhoenixScripts
      pageScripts={pageScripts}
      extraVendors={[...MAP_VENDORS, '/vendors/echarts/echarts.min.js']}
    />
  );
}

declare global {
  interface Window {
    config?: { config: Record<string, unknown> };
    feather?: { replace: () => void };
  }
}
