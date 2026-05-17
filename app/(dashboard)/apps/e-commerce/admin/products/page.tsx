import type { Metadata } from 'next';
import Products from './_components/Products';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <Products />
    </>
  );
}
