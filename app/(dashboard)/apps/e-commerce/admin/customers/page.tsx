import type { Metadata } from 'next';
import Customers from './_components/Customers';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <Customers />
    </>
  );
}
