import Link from 'next/link';
import type { ReactNode } from 'react';

type PhoenixLinkProps = {
  href: string;
  className?: string;
  children?: ReactNode;
  target?: string;
  rel?: string;
  role?: string;
  'aria-expanded'?: boolean | string;
  'aria-controls'?: string;
  'aria-label'?: string;
  'data-bs-toggle'?: string;
  'data-bs-target'?: string;
  'data-bs-dismiss'?: string;
  'data-phoenix-modal'?: string;
  id?: string;
  title?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export default function PhoenixLink({
  href,
  className,
  children,
  target,
  rel,
  ...rest
}: PhoenixLinkProps) {
  const isExternal =
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('mailto:') ||
    href.startsWith('#') ||
    href.startsWith('javascript:');

  if (isExternal) {
    return (
      <a href={href} className={className} target={target} rel={rel} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} target={target} rel={rel} {...rest}>
      {children}
    </Link>
  );
}
