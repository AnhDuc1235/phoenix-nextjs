import type { Metadata } from 'next';
import Homepage from './_components/Homepage';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/flatpickr/flatpickr.min.css" rel="stylesheet" />
      <link href="/vendors/nouislider/nouislider.min.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/flatpickr/flatpickr.min.js","/vendors/nouislider/nouislider.min.js"]} />
      <Homepage />
    </>
  );
}
