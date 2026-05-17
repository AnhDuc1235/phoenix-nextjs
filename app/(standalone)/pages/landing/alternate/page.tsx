import type { Metadata } from 'next';
import Alternate from './_components/Alternate';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <ExtraScripts scripts={["/vendors/isotope-layout/isotope.pkgd.min.js","/vendors/imagesloaded/imagesloaded.pkgd.min.js","/vendors/isotope-packery/packery-mode.pkgd.min.js","/vendors/bigpicture/BigPicture.js","/vendors/lottie/lottie.min.js","/vendors/countup/countUp.umd.js","https://maps.googleapis.com/maps/api/js?key=AIzaSyDbaQGvhe7Af-uOMJz68NWHnO34UjjE7Lo&callback=initMap"]} />
      <Alternate />
    </>
  );
}
