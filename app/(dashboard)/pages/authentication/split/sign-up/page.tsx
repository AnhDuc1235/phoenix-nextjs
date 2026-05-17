import type { Metadata } from 'next';
import SignUp from './_components/SignUp';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <SignUp />
    </>
  );
}
