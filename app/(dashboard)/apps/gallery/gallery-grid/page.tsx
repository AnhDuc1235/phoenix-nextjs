import type { Metadata } from 'next';
import GalleryGrid from './_components/GalleryGrid';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/glightbox/glightbox.min.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/isotope-layout/isotope.pkgd.min.js","/vendors/isotope-packery/packery-mode.pkgd.min.js","/vendors/imagesloaded/imagesloaded.pkgd.min.js","/vendors/glightbox/glightbox.min.js"]} />
      <GalleryGrid />
    </>
  );
}
