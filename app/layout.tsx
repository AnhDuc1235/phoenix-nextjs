import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import './phoenix-fouc-fix.css';
import PhoenixGlobalChrome from '@/components/ui/phoenix-global-chrome';
import PhoenixLayoutReady from '@/components/ui/phoenix-layout-ready';
import PhoenixRtl from '@/components/ui/phoenix-rtl';

export const metadata: Metadata = {
  title: 'Phoenix',
  description: 'Phoenix Admin Dashboard',
  icons: {
    icon: [
      { url: '/assets/img/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/img/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/assets/img/favicons/apple-touch-icon.png',
    shortcut: '/assets/img/favicons/favicon.ico',
  },
  manifest: '/assets/img/favicons/manifest.json',
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

/** Runs in <head> before <body> paints — body Script runs too late for FOUC. */
const PHOENIX_LAYOUT_INIT = `
(function () {
  var d = document.documentElement;
  try {
    if (localStorage.getItem('phoenixIsNavbarVerticalCollapsed') === 'true') {
      d.classList.add('navbar-vertical-collapsed');
    }
    var theme = localStorage.getItem('phoenixTheme');
    if (theme === 'dark') d.setAttribute('data-bs-theme', 'dark');
    else if (theme === 'auto') {
      d.setAttribute(
        'data-bs-theme',
        window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      );
    }
    var nav = localStorage.getItem('phoenixNavbarPosition');
    if (nav === 'horizontal') d.setAttribute('data-navigation-type', 'horizontal');
    else if (nav === 'combo') d.setAttribute('data-navigation-type', 'combo');
    else if (nav === 'vertical') d.setAttribute('data-navigation-type', 'vertical');
  } catch (e) {}
  function markLayoutReady() {
    d.classList.add('phoenix-layout-ready');
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', markLayoutReady, { once: true });
  } else {
    markLayoutReady();
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-US"
      dir="ltr"
      data-navigation-type="default"
      data-navbar-horizontal-shape="default"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: PHOENIX_LAYOUT_INIT }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link href="/vendors/simplebar/simplebar.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css" />
        <link
          href="/assets/css/theme-rtl.min.css"
          rel="stylesheet"
          id="style-rtl"
          disabled
          suppressHydrationWarning
        />
        <link href="/assets/css/theme.min.css" rel="stylesheet" id="style-default" />
        <link
          href="/assets/css/phoenix-critical-layout.css"
          rel="stylesheet"
        />
        <link
          href="/assets/css/user-rtl.min.css"
          rel="stylesheet"
          id="user-style-rtl"
          disabled
          suppressHydrationWarning
        />
        <link href="/assets/css/user.min.css" rel="stylesheet" id="user-style-default" />
        <link href="/vendors/leaflet/leaflet.css" rel="stylesheet" />
        <link href="/vendors/leaflet.markercluster/MarkerCluster.css" rel="stylesheet" />
        <link
          href="/vendors/leaflet.markercluster/MarkerCluster.Default.css"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <Script src="/vendors/simplebar/simplebar.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/config.js" strategy="beforeInteractive" />
        {children}
        <PhoenixGlobalChrome />
        <PhoenixLayoutReady />
        <PhoenixRtl />
      </body>
    </html>
  );
}
