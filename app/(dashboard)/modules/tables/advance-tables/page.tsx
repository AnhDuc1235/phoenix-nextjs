import type { Metadata } from 'next';
import AdvanceTables from './_components/AdvanceTables';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/prism/prism-okaidia.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/prism/prism.js","/assets/js/pages/advance-ajax-table.js"]} />
      <AdvanceTables />
    </>
  );
}
