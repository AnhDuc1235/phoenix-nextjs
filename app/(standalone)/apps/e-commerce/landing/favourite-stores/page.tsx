import type { Metadata } from 'next';
import FavouriteStores from './_components/FavouriteStores';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <FavouriteStores />
    </>
  );
}
