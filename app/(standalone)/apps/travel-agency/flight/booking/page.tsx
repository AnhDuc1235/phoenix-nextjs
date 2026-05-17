import type { Metadata } from 'next';
import Booking from './_components/Booking';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/flatpickr/flatpickr.min.css" rel="stylesheet" />
      <link href="/vendors/nouislider/nouislider.min.css" rel="stylesheet" />
      <link href="/vendors/dropzone/dropzone.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/flatpickr/flatpickr.min.js","/vendors/nouislider/nouislider.min.js","/vendors/dropzone/dropzone-min.js"]} />
      <Booking />
    </>
  );
}
