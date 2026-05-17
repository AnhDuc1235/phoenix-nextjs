import type { Metadata } from 'next';
import Starter from './_components/Starter';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <Starter />
    </>
  );
}
