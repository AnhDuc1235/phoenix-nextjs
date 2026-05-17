import type { Metadata } from 'next';
import AddProperty from './_components/AddProperty';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/mapbox-gl/mapbox-gl.css" rel="stylesheet" />
      <link href="/vendors/flatpickr/flatpickr.min.css" rel="stylesheet" />
      <link href="/vendors/dropzone/dropzone.css" rel="stylesheet" />
      <link href="/vendors/nouislider/nouislider.min.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/dropzone/dropzone-min.js","/vendors/mapbox-gl/mapbox-gl.js","/vendors/nouislider/nouislider.min.js","/vendors/flatpickr/flatpickr.min.js"]} />
      <AddProperty />
    </>
  );
}
