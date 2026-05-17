import type { Metadata } from 'next';
import PricingGrid from './_components/PricingGrid';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <PricingGrid />
    </>
  );
}
