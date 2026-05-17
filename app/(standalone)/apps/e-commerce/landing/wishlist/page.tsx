import type { Metadata } from 'next';
import Wishlist from './_components/Wishlist';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <Wishlist />
    </>
  );
}
