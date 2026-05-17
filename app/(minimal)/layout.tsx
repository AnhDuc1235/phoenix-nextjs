import type { ReactNode } from 'react';
import MinimalShell from '@/app/(minimal)/_components/shell';

export default function MinimalLayout({ children }: { children: ReactNode }) {
  return <MinimalShell>{children}</MinimalShell>;
}
