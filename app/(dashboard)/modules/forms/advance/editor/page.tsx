import type { Metadata } from 'next';
import Editor from './_components/Editor';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/prism/prism-okaidia.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/tinymce/tinymce.min.js","/vendors/prism/prism.js"]} />
      <Editor />
    </>
  );
}
