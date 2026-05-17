import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    root: import.meta.dirname,
  },
  typescript: {
    // Generated page components may have edge-case attr types; fix incrementally per page.
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
      { protocol: 'http', hostname: '**' },
    ],
  },
  transpilePackages: [
    'mapbox-gl',
    'echarts',
    'dhtmlx-gantt',
    'leaflet',
    'leaflet.markercluster',
  ],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'mapbox-gl': 'mapbox-gl/dist/mapbox-gl.js',
    };
    return config;
  },
};

export default nextConfig;
