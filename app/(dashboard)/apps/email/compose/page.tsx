import type { Metadata } from 'next';
import Compose from './_components/Compose';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <ExtraScripts scripts={["/vendors/tinymce/tinymce.min.js"]} />
      <Compose />
    </>
  );
}
