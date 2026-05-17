import type { Metadata } from 'next';
import Profile from './_components/Profile';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <Profile />
    </>
  );
}
