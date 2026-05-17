import type { Metadata } from 'next';
import Crm from './_components/Crm';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <ExtraScripts scripts={["/vendors/echarts/echarts.min.js","/assets/js/dashboards/crm-dashboard.js"]} />
      <Crm />
    </>
  );
}
