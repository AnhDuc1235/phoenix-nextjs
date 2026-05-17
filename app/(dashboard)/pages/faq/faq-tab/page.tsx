import type { Metadata } from 'next';
import FaqTab from './_components/FaqTab';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <FaqTab />
    </>
  );
}
