'use client';

import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { usePathname } from 'next/navigation';
import {
  loadScriptsSequential,
  splitPageScripts,
  loadScriptOnce,
  reloadScript,
  PHOENIX_CORE_VENDORS,
  PHOENIX_SHARED_VENDORS,
  PHOENIX_MAIN_SCRIPT,
} from '@/lib/phoenix-script-chain';
import { runFontAwesomeI2svg } from '@/components/ui/phoenix-fontawesome';

type PhoenixScriptsContextValue = {
  registerPageScripts: (scripts: string[]) => void;
  pageScriptsRef: React.MutableRefObject<string[]>;
};

const PhoenixScriptsContext = createContext<PhoenixScriptsContextValue | null>(null);

export function PhoenixScriptsProvider({ children }: { children: ReactNode }) {
  const pageScriptsRef = useRef<string[]>([]);
  const [pageScripts, setPageScripts] = useState<string[]>([]);

  const registerPageScripts = useCallback((scripts: string[]) => {
    pageScriptsRef.current = scripts;
    setPageScripts(scripts);
  }, []);

  const value = useMemo(
    () => ({ registerPageScripts, pageScriptsRef }),
    [registerPageScripts],
  );

  return (
    <PhoenixScriptsContext.Provider value={value}>
      {children}
      <PhoenixScriptLoader pageScripts={pageScripts} pageScriptsRef={pageScriptsRef} />
    </PhoenixScriptsContext.Provider>
  );
}

export function useRegisterPhoenixPageScripts(scripts: string[]) {
  const ctx = useContext(PhoenixScriptsContext);
  const serialized = JSON.stringify(scripts);

  useLayoutEffect(() => {
    ctx?.registerPageScripts(JSON.parse(serialized) as string[]);
    return () => ctx?.registerPageScripts([]);
  }, [ctx, serialized]);
}

function PhoenixScriptLoader({
  pageScripts,
  pageScriptsRef,
}: {
  pageScripts: string[];
  pageScriptsRef: React.MutableRefObject<string[]>;
}) {
  const pathname = usePathname();
  const prevPathRef = useRef<string | null>(null);
  const runIdRef = useRef(0);

  useLayoutEffect(() => {
    const runId = ++runIdRef.current;
    const isSpaNavigation = prevPathRef.current !== null && prevPathRef.current !== pathname;
    prevPathRef.current = pathname;

    const run = async () => {
      const scripts = pageScriptsRef.current.length ? pageScriptsRef.current : pageScripts;
      const { pageVendors, pageAssets } = splitPageScripts(scripts);

      try {
        await loadScriptsSequential([...PHOENIX_CORE_VENDORS]);
        if (runId !== runIdRef.current) return;

        await loadScriptsSequential([...PHOENIX_SHARED_VENDORS, ...pageVendors]);
        if (runId !== runIdRef.current) return;

        // Re-run phoenix.js so dropzone/tinymce/choices init on current route DOM.
        await reloadScript(PHOENIX_MAIN_SCRIPT);
        if (runId !== runIdRef.current) return;

        for (const src of pageAssets) {
          if (isSpaNavigation) await reloadScript(src);
          else await loadScriptOnce(src);
        }

        if (runId !== runIdRef.current) return;

        window.feather?.replace();
        runFontAwesomeI2svg();
        window.dispatchEvent(new CustomEvent('phoenix:scripts-ready', { detail: { pathname } }));
      } catch (err) {
        console.error('[Phoenix] script chain failed', err);
      }
    };

    queueMicrotask(() => {
      void run();
    });
  }, [pathname, pageScripts, pageScriptsRef]);

  return null;
}

declare global {
  interface Window {
    feather?: { replace: () => void };
  }
}
