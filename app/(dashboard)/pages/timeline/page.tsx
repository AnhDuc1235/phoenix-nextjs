import type { Metadata } from 'next';
import Timeline from './_components/Timeline';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <Timeline />
    </>
  );
}
