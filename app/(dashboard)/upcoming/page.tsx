import type { Metadata } from 'next';
import Upcoming from './_components/Upcoming';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <ExtraScripts scripts={["/vendors/lottie/lottie.min.js"]} />
      <Upcoming />
    </>
  );
}
