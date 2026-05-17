import type { Metadata } from 'next';
import Inbox from './_components/Inbox';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <Inbox />
    </>
  );
}
