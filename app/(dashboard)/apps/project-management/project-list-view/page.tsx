import type { Metadata } from 'next';
import ProjectListView from './_components/ProjectListView';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <ProjectListView />
    </>
  );
}
