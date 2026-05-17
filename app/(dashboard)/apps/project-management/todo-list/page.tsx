import type { Metadata } from 'next';
import TodoList from './_components/TodoList';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/choices/choices.min.css" rel="stylesheet" />
      <link href="/vendors/flatpickr/flatpickr.min.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/choices/choices.min.js","/vendors/flatpickr/flatpickr.min.js"]} />
      <TodoList />
    </>
  );
}
