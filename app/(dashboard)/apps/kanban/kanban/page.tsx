import type { Metadata } from 'next';
import Kanban from './_components/Kanban';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/glightbox/glightbox.min.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/sortablejs/Sortable.min.js","/vendors/dropzone/dropzone-min.js","/vendors/glightbox/glightbox.min.js","/assets/js/pages/kanban.js"]} />
      <Kanban />
    </>
  );
}
