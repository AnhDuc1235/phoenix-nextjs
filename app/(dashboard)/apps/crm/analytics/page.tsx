import type { Metadata } from 'next';
import Analytics from './_components/Analytics';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/dropzone/dropzone.css" rel="stylesheet" />
      <link href="/vendors/flatpickr/flatpickr.min.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/dropzone/dropzone-min.js","/vendors/echarts/echarts.min.js","/vendors/flatpickr/flatpickr.min.js","/assets/js/pages/crm-analytics.js"]} />
      <Analytics />
    </>
  );
}
