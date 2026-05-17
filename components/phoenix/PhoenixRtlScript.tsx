'use client';

import Script from 'next/script';

export default function PhoenixRtlScript() {
  return (
    <Script id="phoenix-rtl-config" strategy="beforeInteractive">
      {`
        (function () {
          if (typeof window === 'undefined' || !window.config || !window.config.config) return;
          var phoenixIsRTL = window.config.config.phoenixIsRTL;
          if (phoenixIsRTL) {
            var linkDefault = document.getElementById('style-default');
            var userLinkDefault = document.getElementById('user-style-default');
            if (linkDefault) linkDefault.setAttribute('disabled', 'true');
            if (userLinkDefault) userLinkDefault.setAttribute('disabled', 'true');
            document.querySelector('html')?.setAttribute('dir', 'rtl');
          } else {
            var linkRTL = document.getElementById('style-rtl');
            var userLinkRTL = document.getElementById('user-style-rtl');
            if (linkRTL) linkRTL.setAttribute('disabled', 'true');
            if (userLinkRTL) userLinkRTL.setAttribute('disabled', 'true');
          }
        })();
      `}
    </Script>
  );
}
