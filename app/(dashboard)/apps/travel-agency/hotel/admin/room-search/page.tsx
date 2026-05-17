import type { Metadata } from 'next';
import RoomSearch from './_components/RoomSearch';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/flatpickr/flatpickr.min.css" rel="stylesheet" />
      <link href="/vendors/nouislider/nouislider.min.css" rel="stylesheet" />
      <link href="/vendors/swiper/swiper-bundle.min.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/nouislider/nouislider.min.js","/vendors/flatpickr/flatpickr.min.js","/vendors/swiper/swiper-bundle.min.js"]} />
      <RoomSearch />
    </>
  );
}
