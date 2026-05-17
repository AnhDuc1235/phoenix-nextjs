import type { Metadata } from 'next';
import TripDetails from './_components/TripDetails';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/mapbox-gl/mapbox-gl.css" rel="stylesheet" />
      <link href="/vendors/flatpickr/flatpickr.min.css" rel="stylesheet" />
      <link href="/vendors/swiper/swiper-bundle.min.css" rel="stylesheet" />
      <link href="/vendors/glightbox/glightbox.min.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/mapbox-gl/mapbox-gl.js","/vendors/echarts/echarts.min.js","/vendors/swiper/swiper-bundle.min.js","/vendors/glightbox/glightbox.min.js","/vendors/flatpickr/flatpickr.min.js","/assets/js/pages/trip.js"]} />
      <TripDetails />
    </>
  );
}
