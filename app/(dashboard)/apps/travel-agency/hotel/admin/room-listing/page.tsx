import type { Metadata } from 'next';
import RoomListing from './_components/RoomListing';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <RoomListing />
    </>
  );
}
