import type { Metadata } from 'next';
import Calendar from './_components/Calendar';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/flatpickr/flatpickr.min.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/fullcalendar/index.global.min.js","/vendors/flatpickr/flatpickr.min.js","/assets/js/pages/calendar.js"]} />
      <Calendar />
    </>
  );
}
