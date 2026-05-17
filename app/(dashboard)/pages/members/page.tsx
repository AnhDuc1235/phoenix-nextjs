import type { Metadata } from 'next';
import Members from './_components/Members';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <Members />
    </>
  );
}
