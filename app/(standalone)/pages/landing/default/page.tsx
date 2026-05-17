import type { Metadata } from 'next';
import Default from './_components/Default';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/mapbox-gl/mapbox-gl.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/mapbox-gl/mapbox-gl.js","/vendors/isotope-layout/isotope.pkgd.min.js","/vendors/imagesloaded/imagesloaded.pkgd.min.js","/vendors/isotope-packery/packery-mode.pkgd.min.js","/vendors/bigpicture/BigPicture.js","/vendors/countup/countUp.umd.js","https://maps.googleapis.com/maps/api/js?key=AIzaSyDbaQGvhe7Af-uOMJz68NWHnO34UjjE7Lo&callback=initMap","https://smtpjs.com/v3/smtp.js"]} />
      <Default />
    </>
  );
}
