import type { Metadata } from 'next';
import Watchlist from './_components/Watchlist';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <link href="/vendors/flatpickr/flatpickr.min.css" rel="stylesheet" />      <ExtraScripts scripts={["/vendors/echarts/echarts.min.js","/assets/js/pages/stock-portfolio-watchlist.js","/vendors/flatpickr/flatpickr.min.js"]} />
      <Watchlist />
    </>
  );
}
