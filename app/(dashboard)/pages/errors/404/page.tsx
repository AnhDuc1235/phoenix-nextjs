import type { Metadata } from 'next';
import _404 from './_components/_404';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <_404 />
    </>
  );
}
