import type { Metadata } from 'next';
import Showcase from './_components/Showcase';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <ExtraScripts scripts={["/vendors/imagesloaded/imagesloaded.pkgd.min.js","/assets/js/pages/showcase.js"]} />
      <Showcase />
    </>
  );
}
