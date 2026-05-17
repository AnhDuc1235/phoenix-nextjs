import type { Metadata } from 'next';
import Deals from './_components/Deals';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/choices/choices.min.css" rel="stylesheet" />
      <link href="/vendors/flatpickr/flatpickr.min.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/choices/choices.min.js","/vendors/sortablejs/Sortable.min.js","/vendors/flatpickr/flatpickr.min.js","/assets/js/pages/kanban.js"]} />
      <Deals />
    </>
  );
}
