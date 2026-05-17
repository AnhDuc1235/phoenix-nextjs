import type { Metadata } from 'next';
import LineCharts from './_components/LineCharts';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/prism/prism-okaidia.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/echarts/echarts.min.js","/vendors/prism/prism.js","/assets/js/echarts-example.js"]} />
      <LineCharts />
    </>
  );
}
