import type { Metadata } from 'next';
import PricingColumn from './_components/PricingColumn';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <PricingColumn />
    </>
  );
}
