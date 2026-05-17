import type { Metadata } from 'next';
import ProductDetails from './_components/ProductDetails';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/swiper/swiper-bundle.min.css" rel="stylesheet" />
      <link href="/vendors/dropzone/dropzone.css" rel="stylesheet" />
      <link href="/vendors/glightbox/glightbox.min.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/swiper/swiper-bundle.min.js","/vendors/dropzone/dropzone-min.js","/vendors/rater-js/index.js","/vendors/glightbox/glightbox.min.js"]} />
      <ProductDetails />
    </>
  );
}
