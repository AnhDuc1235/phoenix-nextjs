import type { Metadata } from 'next';
import CreateAnEvent from './_components/CreateAnEvent';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/flatpickr/flatpickr.min.css" rel="stylesheet" />
      <link href="/vendors/choices/choices.min.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/choices/choices.min.js","/vendors/dropzone/dropzone-min.js","/vendors/flatpickr/flatpickr.min.js"]} />
      <CreateAnEvent />
    </>
  );
}
