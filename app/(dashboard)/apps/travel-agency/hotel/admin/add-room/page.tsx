import type { Metadata } from 'next';
import AddRoom from './_components/AddRoom';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/flatpickr/flatpickr.min.css" rel="stylesheet" />
      <link href="/vendors/dropzone/dropzone.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/dropzone/dropzone-min.js","/vendors/flatpickr/flatpickr.min.js"]} />
      <AddRoom />
    </>
  );
}
