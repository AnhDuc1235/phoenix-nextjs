import type { Metadata } from 'next';
import _500 from './_components/_500';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <_500 />
    </>
  );
}
