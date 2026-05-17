import type { Metadata } from 'next';
import ForgotPassword from './_components/ForgotPassword';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <ForgotPassword />
    </>
  );
}
