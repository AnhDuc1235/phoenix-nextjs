import type { Metadata } from 'next';
import Rating from './_components/Rating';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/prism/prism-okaidia.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/rater-js/index.js","/vendors/prism/prism.js"]} />
      <Rating />
    </>
  );
}
