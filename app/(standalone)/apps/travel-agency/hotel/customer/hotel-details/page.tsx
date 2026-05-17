import type { Metadata } from 'next';
import HotelDetails from './_components/HotelDetails';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/flatpickr/flatpickr.min.css" rel="stylesheet" />
      <link href="/vendors/nouislider/nouislider.min.css" rel="stylesheet" />
      <link href="/vendors/glightbox/glightbox.min.css" rel="stylesheet" />
      <link href="/vendors/mapbox-gl/mapbox-gl.css" rel="stylesheet" />
      <link href="/vendors/swiper/swiper-bundle.min.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/flatpickr/flatpickr.min.js","/vendors/nouislider/nouislider.min.js","/vendors/glightbox/glightbox.min.js","/vendors/mapbox-gl/mapbox-gl.js","/vendors/swiper/swiper-bundle.min.js"]} />
      <HotelDetails />
    </>
  );
}
