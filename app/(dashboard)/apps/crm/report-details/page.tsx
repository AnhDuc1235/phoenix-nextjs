import type { Metadata } from 'next';
import ReportDetails from './_components/ReportDetails';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/dropzone/dropzone.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/dropzone/dropzone-min.js","/vendors/echarts/echarts.min.js","/assets/js/pages/report-details.js"]} />
      <ReportDetails />
    </>
  );
}
