import type { Metadata } from 'next';
import TravelAgency from './_components/TravelAgency';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/mapbox-gl/mapbox-gl.css" rel="stylesheet" />
      <link href="/vendors/swiper/swiper-bundle.min.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/echarts/echarts.min.js","/assets/js/dashboards/travel-agency-dashboard.js","/vendors/mapbox-gl/mapbox-gl.js","https://unpkg.com/@turf/turf@6/turf.min.js","/vendors/swiper/swiper-bundle.min.js"]} />
      <TravelAgency />
    </>
  );
}
