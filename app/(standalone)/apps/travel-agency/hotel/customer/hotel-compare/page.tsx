import type { Metadata } from 'next';
import HotelCompare from './_components/HotelCompare';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/flatpickr/flatpickr.min.css" rel="stylesheet" />
      <link href="/vendors/swiper/swiper-bundle.min.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/leaflet/leaflet.js","/vendors/leaflet.markercluster/leaflet.markercluster.js","/vendors/leaflet.tilelayer.colorfilter/leaflet-tilelayer-colorfilter.min.js","/vendors/swiper/swiper-bundle.min.js","/vendors/flatpickr/flatpickr.min.js","/assets/js/pages/hotel-compare.js"]} />
      <HotelCompare />
    </>
  );
}
