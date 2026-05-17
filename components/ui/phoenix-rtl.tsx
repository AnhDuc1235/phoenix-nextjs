'use client';

import { useLayoutEffect } from 'react';

/** Toggles RTL stylesheets after hydration (SSR defaults to LTR with RTL links disabled). */
export default function PhoenixRtl() {
  useLayoutEffect(() => {
    const cfg = window.config?.config;
    if (!cfg) return;

    const phoenixIsRTL = cfg.phoenixIsRTL;
    const linkDefault = document.getElementById('style-default');
    const userLinkDefault = document.getElementById('user-style-default');
    const linkRTL = document.getElementById('style-rtl');
    const userLinkRTL = document.getElementById('user-style-rtl');

    if (phoenixIsRTL) {
      linkDefault?.setAttribute('disabled', 'true');
      userLinkDefault?.setAttribute('disabled', 'true');
      document.documentElement.setAttribute('dir', 'rtl');
    } else {
      linkRTL?.setAttribute('disabled', 'true');
      userLinkRTL?.setAttribute('disabled', 'true');
    }
  }, []);

  return null;
}
