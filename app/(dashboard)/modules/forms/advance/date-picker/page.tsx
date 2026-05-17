import type { Metadata } from 'next';
import DatePicker from './_components/DatePicker';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/flatpickr/flatpickr.min.css" rel="stylesheet" />
      <link href="/vendors/prism/prism-okaidia.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/flatpickr/flatpickr.min.js","/vendors/prism/prism.js"]} />
      <DatePicker />
    </>
  );
}
