import type { Metadata } from 'next';
import SignOut from './_components/SignOut';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <SignOut />
    </>
  );
}
