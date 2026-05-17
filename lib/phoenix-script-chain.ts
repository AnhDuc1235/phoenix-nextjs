/** Core vendors (same order as Phoenix static HTML, before page-specific vendors). */
export const PHOENIX_CORE_VENDORS = [
  '/vendors/popper/popper.min.js',
  '/vendors/bootstrap/bootstrap.min.js',
  '/vendors/anchorjs/anchor.min.js',
  '/vendors/is/is.min.js',
  '/vendors/fontawesome/all.min.js',
  '/vendors/lodash/lodash.min.js',
  '/vendors/list.js/list.min.js',
  '/vendors/feather-icons/feather.min.js',
  '/vendors/dayjs/dayjs.min.js',
] as const;

/** Loaded before phoenix.js on every page so SPA navigations still have globals. */
export const PHOENIX_SHARED_VENDORS = [
  '/vendors/dropzone/dropzone-min.js',
  '/vendors/flatpickr/flatpickr.min.js',
  '/vendors/nouislider/nouislider.min.js',
  '/vendors/mapbox-gl/mapbox-gl.js',
  '/vendors/echarts/echarts.min.js',
  '/vendors/choices/choices.min.js',
  '/vendors/chart/chart.umd.js',
  '/vendors/sortablejs/Sortable.min.js',
  '/vendors/tinymce/tinymce.min.js',
  '/vendors/fullcalendar/index.global.min.js',
  '/vendors/swiper/swiper-bundle.min.js',
  '/vendors/glightbox/glightbox.min.js',
  '/vendors/dhtmlx-gantt/dhtmlxgantt.js',
  '/vendors/lottie/lottie.min.js',
  '/vendors/isotope-layout/isotope.pkgd.min.js',
  '/vendors/imagesloaded/imagesloaded.pkgd.min.js',
  '/vendors/isotope-packery/packery-mode.pkgd.min.js',
  '/vendors/bigpicture/BigPicture.js',
  '/vendors/countup/countUp.umd.js',
  '/vendors/rater-js/index.js',
] as const;

export const PHOENIX_MAIN_SCRIPT = '/assets/js/phoenix.js';

const loaded = new Set<string>();

export function loadScriptOnce(src: string): Promise<void> {
  if (loaded.has(src)) return Promise.resolve();

  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);
    if (existing) {
      if (existing.dataset.phoenixLoaded === 'true') {
        loaded.add(src);
        resolve();
        return;
      }
      existing.addEventListener('load', () => {
        existing.dataset.phoenixLoaded = 'true';
        loaded.add(src);
        resolve();
      });
      existing.addEventListener('error', () => reject(new Error(`Failed to load ${src}`)));
      return;
    }

    const el = document.createElement('script');
    el.src = src;
    el.async = false;
    el.dataset.phoenixLoaded = 'false';
    el.onload = () => {
      el.dataset.phoenixLoaded = 'true';
      loaded.add(src);
      resolve();
    };
    el.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(el);
  });
}

export async function loadScriptsSequential(sources: string[]): Promise<void> {
  const unique = [...new Set(sources.filter(Boolean))];
  for (const src of unique) {
    await loadScriptOnce(src);
  }
}

/** Re-execute page scripts on SPA navigations (they only call docReady once at first parse). */
export function reloadScript(src: string): Promise<void> {
  loaded.delete(src);
  document.querySelectorAll(`script[src="${src}"]`).forEach((el) => el.remove());
  return loadScriptOnce(src);
}

export const PHOENIX_BASE_CHAIN = [
  ...PHOENIX_CORE_VENDORS,
  ...PHOENIX_SHARED_VENDORS,
  PHOENIX_MAIN_SCRIPT,
] as const;

export async function loadPhoenixBase(): Promise<void> {
  await loadScriptsSequential([...PHOENIX_BASE_CHAIN]);
}

export async function loadPhoenixPageScripts(
  pageScripts: string[] = [],
  options: { reinitPageAssets?: boolean } = {},
): Promise<void> {
  const { reinitPageAssets = false } = options;
  const { pageVendors, pageAssets } = splitPageScripts(pageScripts);
  for (const src of pageVendors) {
    await loadScriptOnce(src);
  }
  for (const src of pageAssets) {
    if (reinitPageAssets) await reloadScript(src);
    else await loadScriptOnce(src);
  }
}

export function splitPageScripts(scripts: string[]) {
  const pageVendors: string[] = [];
  const pageAssets: string[] = [];

  for (const src of scripts) {
    if (src.startsWith('/assets/')) pageAssets.push(src);
    else if (src.startsWith('/vendors/') || src.startsWith('http://') || src.startsWith('https://')) {
      pageVendors.push(src);
    }
  }

  return { pageVendors, pageAssets };
}

export function buildPhoenixScriptChain(pageScripts: string[] = []) {
  const { pageVendors, pageAssets } = splitPageScripts(pageScripts);
  return [...PHOENIX_CORE_VENDORS, ...PHOENIX_SHARED_VENDORS, ...pageVendors, PHOENIX_MAIN_SCRIPT, ...pageAssets];
}
