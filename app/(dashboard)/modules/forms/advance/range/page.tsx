import type { Metadata } from 'next';
import Range from './_components/Range';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/nouislider/nouislider.min.css" rel="stylesheet" />
      <link href="/vendors/prism/prism-okaidia.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/nouislider/nouislider.min.js","/vendors/prism/prism.js"]} />
      <Range />
    </>
  );
}
