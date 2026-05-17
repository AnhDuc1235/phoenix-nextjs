import type { Metadata } from 'next';
import HowToUse from './_components/HowToUse';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/prism/prism-okaidia.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/echarts/echarts.min.js","/vendors/prism/prism.js","/assets/js/ecommerce-dashboard.js","/assets/js/crm-dashboard.js"]} />
      <HowToUse />
    </>
  );
}
