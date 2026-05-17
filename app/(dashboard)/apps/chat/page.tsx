import type { Metadata } from 'next';
import Chat from './_components/Chat';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/glightbox/glightbox.min.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/glightbox/glightbox.min.js", "https://unpkg.com/picmo@5.7.6/dist/umd/index.js", "https://unpkg.com/@picmo/popup-picker@5.7.6/dist/umd/index.js", "/vendors/lottie/lottie.min.js", "/assets/js/pages/chat.js"]} />
      <Chat />
    </>
  );
}
