import type { Metadata } from 'next';
import StockDetails from './_components/StockDetails';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/swiper/swiper-bundle.min.css" rel="stylesheet" />
      <link href="/vendors/flatpickr/flatpickr.min.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/echarts/echarts.min.js","/assets/js/pages/stock-details.js","/vendors/swiper/swiper-bundle.min.js","/vendors/flatpickr/flatpickr.min.js"]} />
      <StockDetails />
    </>
  );
}
