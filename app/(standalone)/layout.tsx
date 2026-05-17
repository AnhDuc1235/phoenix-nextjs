import type { ReactNode } from 'react';
import StandaloneShell from '@/app/(standalone)/_components/shell';

export default function StandaloneLayout({ children }: { children: ReactNode }) {
  return <StandaloneShell>{children}</StandaloneShell>;
}
