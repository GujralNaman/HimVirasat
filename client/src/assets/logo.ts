/**
 * HimVirasat logo asset.
 *
 * NOTE: The original reference project uses a local `src/assets/logo.png`
 * (720 × 379) that is not publicly exposed on the reference server, so it
 * cannot be extracted. Until the original logo.png is provided, this SVG
 * wordmark stands in as a placeholder using the brand's colour palette and
 * typography. Replace this file (or add `public/assets/logo/logo.png`) with
 * the original asset for exact visual parity.
 */

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="720" height="379" viewBox="0 0 720 379" fill="none">
  <rect width="720" height="379" fill="url(#grad)"/>
  <defs>
    <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#183c30"/>
      <stop offset="100%" stop-color="#0f271e"/>
    </linearGradient>
  </defs>
  <text x="360" y="210" font-family="'Cormorant Garamond', serif" font-size="110" font-weight="600" fill="#ede3cf" text-anchor="middle" letter-spacing="0.04em">HimVirasat</text>
  <text x="360" y="290" font-family="Manrope, sans-serif" font-size="30" font-weight="500" fill="#b99a59" text-anchor="middle" letter-spacing="0.25em">The Heritage of the Himalayas</text>
</svg>
`.trim();

export const logo = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
