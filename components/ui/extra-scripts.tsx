'use client';

import { useRegisterPhoenixPageScripts } from '@/components/ui/phoenix-scripts-context';

type ExtraScriptsProps = {
  scripts?: string[];
};

/** Registers page vendors/assets; PhoenixScriptLoader loads them before phoenix.js. */
export default function ExtraScripts({ scripts = [] }: ExtraScriptsProps) {
  useRegisterPhoenixPageScripts(scripts);
  return null;
}
