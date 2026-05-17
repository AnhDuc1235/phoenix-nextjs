import type { Metadata } from 'next';
import _2FA from './_components/_2FA';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <_2FA />
    </>
  );
}
