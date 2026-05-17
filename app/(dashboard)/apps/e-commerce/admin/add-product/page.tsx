import type { Metadata } from 'next';
import AddProduct from './_components/AddProduct';
import PhoenixPage from '@/components/ui/phoenix-page';

export const metadata: Metadata = {
  title: 'Phoenix',
};

const PAGE_STYLES = [
  '/vendors/dropzone/dropzone.css',
  '/vendors/choices/choices.min.css',
  '/vendors/flatpickr/flatpickr.min.css',
];

const PAGE_SCRIPTS = [
  '/vendors/tinymce/tinymce.min.js',
  '/vendors/dropzone/dropzone-min.js',
  '/vendors/choices/choices.min.js',
  '/vendors/flatpickr/flatpickr.min.js',
];

export default function Page() {
  return (
    <PhoenixPage styles={PAGE_STYLES} scripts={PAGE_SCRIPTS} gate>
      <AddProduct />
    </PhoenixPage>
  );
}
