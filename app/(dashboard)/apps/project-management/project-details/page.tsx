import type { Metadata } from 'next';
import ProjectDetails from './_components/ProjectDetails';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/flatpickr/flatpickr.min.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/echarts/echarts.min.js","/vendors/flatpickr/flatpickr.min.js","/assets/js/pages/project-details.js"]} />
      <ProjectDetails />
    </>
  );
}
