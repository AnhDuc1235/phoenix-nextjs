import type { Metadata } from 'next';
import Payment from './_components/Payment';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <Payment />
    </>
  );
}
