import type { Metadata } from 'next';
import GanttChart from './_components/GanttChart';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/dhtmlx-gantt/dhtmlxgantt.css" rel="stylesheet" />
      <link href="/vendors/flatpickr/flatpickr.min.css" rel="stylesheet" />
      <link href="/vendors/dropzone/dropzone.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/dhtmlx-gantt/dhtmlxgantt.js","/vendors/flatpickr/flatpickr.min.js","/vendors/glightbox/glightbox.min.js","/vendors/dropzone/dropzone-min.js","/assets/js/pages/gantt-chart.js"]} />
      <GanttChart />
    </>
  );
}
