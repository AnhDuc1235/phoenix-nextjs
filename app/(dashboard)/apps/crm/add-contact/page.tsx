import type { Metadata } from 'next';
import AddContact from './_components/AddContact';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <AddContact />
    </>
  );
}
