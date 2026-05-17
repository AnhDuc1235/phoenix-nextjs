import type { Metadata } from 'next';
import Notifications from './_components/Notifications';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <Notifications />
    </>
  );
}
