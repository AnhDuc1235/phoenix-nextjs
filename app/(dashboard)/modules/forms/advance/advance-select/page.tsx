import type { Metadata } from 'next';
import AdvanceSelect from './_components/AdvanceSelect';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/choices/choices.min.css" rel="stylesheet" />
      <link href="/vendors/prism/prism-okaidia.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/choices/choices.min.js","/vendors/prism/prism.js"]} />
      <AdvanceSelect />
    </>
  );
}
