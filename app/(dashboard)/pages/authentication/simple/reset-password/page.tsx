import type { Metadata } from 'next';
import ResetPassword from './_components/ResetPassword';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <ResetPassword />
    </>
  );
}
