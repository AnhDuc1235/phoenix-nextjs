'use client';

import Image from 'next/image';
import type { CSSProperties } from 'react';

type PhoenixImageProps = {
  src: string;
  alt?: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  style?: CSSProperties;
  id?: string;
};

function parseNumericDimension(value?: number | string): number | undefined {
  if (value === undefined) return undefined;
  const n = typeof value === 'number' ? value : parseInt(String(value), 10);
  return Number.isFinite(n) && n > 0 ? n : undefined;
}

/**
 * Phoenix template sizes images with CSS classes (avatar, img-fluid, w-100, …).
 * Use native <img> unless both width and height are set in source HTML — otherwise
 * layout diverges from the static template (note.md pixel parity).
 */
export default function PhoenixImage({
  src,
  alt = '',
  className,
  width,
  height,
  style,
  id,
}: PhoenixImageProps) {
  if (!src || src.startsWith('data:')) {
    return <img src={src} alt={alt} className={className} style={style} id={id} />;
  }

  const numericWidth = parseNumericDimension(width);
  const numericHeight = parseNumericDimension(height);

  if (numericWidth !== undefined && numericHeight !== undefined) {
    return (
      <Image
        id={id}
        src={src}
        alt={alt}
        className={className}
        style={style}
        width={numericWidth}
        height={numericHeight}
        unoptimized
      />
    );
  }

  return (
    <img
      id={id}
      src={src}
      alt={alt}
      className={className}
      style={style}
      {...(width !== undefined ? { width } : {})}
      {...(height !== undefined ? { height } : {})}
    />
  );
}
