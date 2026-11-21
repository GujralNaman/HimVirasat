import { useState } from 'react';

/**
 * Responsive image with srcset, lazy loading and a graceful branded fallback.
 * `image` = { src: (width) => url, alt }
 */
export type SmartImageProps = {
  image: { src: (w: number) => string; alt: string };
  sizes?: string;
  widths?: number[];
  eager?: boolean;
  className?: string;
  testId?: string;
};

export function SmartImage({
  image,
  sizes = '100vw',
  widths = [640, 1080, 1600],
  eager = false,
  className = '',
  testId,
}: SmartImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={image.alt}
        data-testid={testId}
        className={`img-fallback h-full w-full ${className}`}
      />
    );
  }

  return (
    <img
      data-testid={testId}
      src={image.src(widths[1] || widths[0])}
      srcSet={widths.map((w) => `${image.src(w)} ${w}w`).join(', ')}
      sizes={sizes}
      alt={image.alt}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : undefined}
      decoding="async"
      onError={() => setFailed(true)}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}
