import type { Metadata } from 'next';
import Settings from './_components/Settings';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <Settings />
    </>
  );
}
