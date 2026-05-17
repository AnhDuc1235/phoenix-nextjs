import type { Metadata } from 'next';
import EventDetail from './_components/EventDetail';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/choices/choices.min.css" rel="stylesheet" />
      <link href="/vendors/glightbox/glightbox.min.css" rel="stylesheet" />      <ExtraScripts scripts={["https://maps.googleapis.com/maps/api/js?key=AIzaSyDbaQGvhe7Af-uOMJz68NWHnO34UjjE7Lo&callback=initMap","/vendors/choices/choices.min.js","/vendors/glightbox/glightbox.min.js"]} />
      <EventDetail />
    </>
  );
}
