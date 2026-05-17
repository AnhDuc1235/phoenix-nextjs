import type { Metadata } from 'next';
import LeadDetails from './_components/LeadDetails';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/dropzone/dropzone.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/dropzone/dropzone-min.js"]} />
      <LeadDetails />
    </>
  );
}
