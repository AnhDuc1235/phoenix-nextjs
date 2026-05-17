import type { Metadata } from 'next';
import Invoice from './_components/Invoice';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <Invoice />
    </>
  );
}
