import type { Metadata } from 'next';
import LockScreen from './_components/LockScreen';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <LockScreen />
    </>
  );
}
