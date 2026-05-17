import type { Metadata } from 'next';
import Widgets from './_components/Widgets';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/choices/choices.min.css" rel="stylesheet" />
      <link href="/vendors/dhtmlx-gantt/dhtmlxgantt.css" rel="stylesheet" />
      <link href="/vendors/flatpickr/flatpickr.min.css" rel="stylesheet" />
      <link href="/vendors/glightbox/glightbox.min.css" rel="stylesheet" />
      <link href="/vendors/dropzone/dropzone.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/choices/choices.min.js","/vendors/echarts/echarts.min.js","/vendors/dhtmlx-gantt/dhtmlxgantt.js","/vendors/glightbox/glightbox.min.js","/vendors/tinymce/tinymce.min.js","/vendors/dropzone/dropzone-min.js","/vendors/flatpickr/flatpickr.min.js","/assets/js/dashboards/ecommerce-dashboard.js","/assets/js/dashboards/projectmanagement-dashboard.js","/assets/js/dashboards/crm-dashboard.js","/assets/js/pages/crm-analytics.js"]} />
      <Widgets />
    </>
  );
}
