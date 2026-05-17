import type { Metadata } from 'next';
import Orders from './_components/Orders';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <Orders />
    </>
  );
}
