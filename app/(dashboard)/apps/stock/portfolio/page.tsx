import type { Metadata } from 'next';
import Portfolio from './_components/Portfolio';
import ExtraScripts from '@/components/ui/extra-scripts';

export const metadata: Metadata = {
  title: "Phoenix",
};

export default function Page() {
  return (
    <>
      <ExtraScripts scripts={["/vendors/echarts/echarts.min.js","/assets/js/pages/stock-portfolio-watchlist.js"]} />
      <Portfolio />
    </>
  );
}
