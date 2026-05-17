import type { Metadata } from 'next';
import EmojiButton from './_components/EmojiButton';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/prism/prism-okaidia.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/prism/prism.js","https://unpkg.com/picmo@5.7.6/dist/umd/index.js","https://unpkg.com/@picmo/popup-picker@5.7.6/dist/umd/index.js"]} />
      <EmojiButton />
    </>
  );
}
