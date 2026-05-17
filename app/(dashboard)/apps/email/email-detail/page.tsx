import type { Metadata } from 'next';
import EmailDetail from './_components/EmailDetail';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <EmailDetail />
    </>
  );
}
