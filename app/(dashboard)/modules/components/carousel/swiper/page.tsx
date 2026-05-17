import type { Metadata } from 'next';
import Swiper from './_components/Swiper';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/swiper/swiper-bundle.min.css" rel="stylesheet" />
      <link href="/vendors/prism/prism-okaidia.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/swiper/swiper-bundle.min.js","/vendors/prism/prism.js"]} />
      <Swiper />
    </>
  );
}
