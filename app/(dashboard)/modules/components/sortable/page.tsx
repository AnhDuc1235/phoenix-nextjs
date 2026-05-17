import type { Metadata } from 'next';
import Sortable from './_components/Sortable';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/prism/prism-okaidia.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/sortablejs/Sortable.min.js","/vendors/prism/prism.js"]} />
      <Sortable />
    </>
  );
}
