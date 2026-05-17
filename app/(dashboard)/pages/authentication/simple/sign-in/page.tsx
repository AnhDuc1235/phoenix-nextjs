import type { Metadata } from 'next';
import SignIn from './_components/SignIn';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <SignIn />
    </>
  );
}
