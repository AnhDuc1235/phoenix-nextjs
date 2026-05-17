import type { Metadata } from 'next';
import FaqAccordion from './_components/FaqAccordion';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <FaqAccordion />
    </>
  );
}
