import type { Metadata } from 'next';
import Album from './_components/Album';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <ExtraScripts scripts={["/vendors/isotope-layout/isotope.pkgd.min.js","/vendors/isotope-packery/packery-mode.pkgd.min.js","/vendors/imagesloaded/imagesloaded.pkgd.min.js"]} />
      <Album />
    </>
  );
}
