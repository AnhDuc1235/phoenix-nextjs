import type { Metadata } from 'next';
import Stock from './_components/Stock';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/swiper/swiper-bundle.min.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/swiper/swiper-bundle.min.js","/vendors/echarts/echarts.min.js","/vendors/chart/chart.umd.js","/assets/js/dashboards/stock-dashboard.js"]} />
      <Stock />
    </>
  );
}
