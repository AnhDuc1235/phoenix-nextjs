import type { Metadata } from 'next';
import CustomerDetails from './_components/CustomerDetails';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <CustomerDetails />
    </>
  );
}
