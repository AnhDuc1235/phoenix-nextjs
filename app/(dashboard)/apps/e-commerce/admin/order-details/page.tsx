import type { Metadata } from 'next';
import OrderDetails from './_components/OrderDetails';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <OrderDetails />
    </>
  );
}
