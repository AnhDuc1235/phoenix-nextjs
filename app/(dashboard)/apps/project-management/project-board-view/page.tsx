import type { Metadata } from 'next';
import ProjectBoardView from './_components/ProjectBoardView';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/flatpickr/flatpickr.min.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/flatpickr/flatpickr.min.js"]} />
      <ProjectBoardView />
    </>
  );
}
