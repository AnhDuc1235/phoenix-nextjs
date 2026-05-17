import type { Metadata } from 'next';
import Calendar from './_components/Calendar';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/prism/prism-okaidia.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/fullcalendar/index.global.min.js","/vendors/prism/prism.js"]} />
      <Calendar />
    </>
  );
}
