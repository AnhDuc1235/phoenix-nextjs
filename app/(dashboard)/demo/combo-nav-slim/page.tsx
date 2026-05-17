import type { Metadata } from 'next';
import ComboNavSlim from './_components/ComboNavSlim';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <ExtraScripts scripts={["/vendors/leaflet/leaflet.js","/vendors/leaflet.markercluster/leaflet.markercluster.js","/vendors/leaflet.tilelayer.colorfilter/leaflet-tilelayer-colorfilter.min.js","/vendors/echarts/echarts.min.js","/assets/js/dashboards/ecommerce-dashboard.js"]} />
      <ComboNavSlim />
    </>
  );
}
