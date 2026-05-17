import type { Metadata } from 'next';
import CreateKanbanBoard from './_components/CreateKanbanBoard';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <ExtraScripts scripts={["/vendors/sortablejs/Sortable.min.js","/vendors/dropzone/dropzone-min.js","/assets/js/pages/kanban.js"]} />
      <CreateKanbanBoard />
    </>
  );
}
