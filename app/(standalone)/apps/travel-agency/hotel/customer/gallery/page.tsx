import type { Metadata } from 'next';
import Gallery from './_components/Gallery';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/glightbox/glightbox.min.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/glightbox/glightbox.min.js"]} />
      <Gallery />
    </>
  );
}
