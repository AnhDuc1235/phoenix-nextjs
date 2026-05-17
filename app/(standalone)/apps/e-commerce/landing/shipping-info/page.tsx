import type { Metadata } from 'next';
import ShippingInfo from './_components/ShippingInfo';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <ShippingInfo />
    </>
  );
}
