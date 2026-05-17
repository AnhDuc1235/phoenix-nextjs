'use client';

import Script from 'next/script';

/** Inline navbar appearance init from Phoenix template */
export default function PhoenixNavbarInit() {
  return (
    <Script id="phoenix-navbar-init" strategy="afterInteractive">
      {`
        (function () {
          if (typeof window === 'undefined' || !window.config || !window.config.config) return;
          var cfg = window.config.config;
          var navbarTopStyle = cfg.phoenixNavbarTopStyle;
          var navbarTop = document.querySelector('.navbar-top');
          if (navbarTop && navbarTopStyle === 'darker') {
            navbarTop.setAttribute('data-navbar-appearance', 'darker');
          }
          var navbarVerticalStyle = cfg.phoenixNavbarVerticalStyle;
          var navbarVertical = document.querySelector('.navbar-vertical');
          if (navbarVertical && navbarVerticalStyle === 'darker') {
            navbarVertical.setAttribute('data-navbar-appearance', 'darker');
          }
        })();
      `}
    </Script>
  );
}
