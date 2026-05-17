import type { Metadata } from 'next';
import ProductsFilter from './_components/ProductsFilter';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <ProductsFilter />
    </>
  );
}
