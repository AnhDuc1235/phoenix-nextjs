import type { Metadata } from 'next';
import TypedText from './_components/TypedText';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/prism/prism-okaidia.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/typed.js/typed.umd.js","/vendors/prism/prism.js"]} />
      <TypedText />
    </>
  );
}
