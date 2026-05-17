import type { Metadata } from 'next';
import GeoMap from './_components/GeoMap';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/prism/prism-okaidia.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/echarts/echarts.min.js","/assets/data/world.js","/assets/data/usa.js","/vendors/prism/prism.js","/assets/js/echarts-example.js"]} />
      <GeoMap />
    </>
  );
}
