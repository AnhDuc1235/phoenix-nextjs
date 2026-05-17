import type { Metadata } from 'next';
import GallerySlider from './_components/GallerySlider';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/swiper/swiper-bundle.min.css" rel="stylesheet" />
      <link href="/vendors/glightbox/glightbox.min.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/swiper/swiper-bundle.min.js","/vendors/isotope-layout/isotope.pkgd.min.js","/vendors/isotope-packery/packery-mode.pkgd.min.js","/vendors/imagesloaded/imagesloaded.pkgd.min.js","/vendors/glightbox/glightbox.min.js"]} />
      <GallerySlider />
    </>
  );
}
