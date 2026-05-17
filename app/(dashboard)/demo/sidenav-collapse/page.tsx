import type { Metadata } from 'next';
import SidenavCollapse from './_components/SidenavCollapse';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/choices/choices.min.css" rel="stylesheet" />
      <link href="/vendors/dhtmlx-gantt/dhtmlxgantt.css" rel="stylesheet" />
      <link href="/vendors/flatpickr/flatpickr.min.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/choices/choices.min.js","/vendors/echarts/echarts.min.js","/vendors/dhtmlx-gantt/dhtmlxgantt.js","/vendors/flatpickr/flatpickr.min.js","/assets/js/dashboards/projectmanagement-dashboard.js"]} />
      <SidenavCollapse />
    </>
  );
}
