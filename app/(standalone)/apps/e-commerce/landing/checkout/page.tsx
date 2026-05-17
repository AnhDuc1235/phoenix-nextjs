import type { Metadata } from 'next';
import Checkout from './_components/Checkout';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <Checkout />
    </>
  );
}
