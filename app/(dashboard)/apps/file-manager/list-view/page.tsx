import type { Metadata } from 'next';
import ListView from './_components/ListView';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/glightbox/glightbox.min.css" rel="stylesheet" />      <ExtraScripts scripts={["/assets/js/pages/file-manager.js","/vendors/glightbox/glightbox.min.js"]} />
      <ListView />
    </>
  );
}
