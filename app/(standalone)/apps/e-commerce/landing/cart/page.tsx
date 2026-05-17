import type { Metadata } from 'next';
import Cart from './_components/Cart';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <Cart />
    </>
  );
}
