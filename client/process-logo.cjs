const sharp = require('sharp');
const path = 'public/assets/logo/logo.png';

sharp(path)
  .resize(720, 379)
  .raw()
  .toBuffer()
  .then(buf => {
    // buf is RGB interleaved (3 bytes per pixel), no alpha
    // Convert to RGBA: replace near-white pixels with transparent
    const rgba = Buffer.alloc(buf.length / 3 * 4);
    for (let i = 0, j = 0; i < buf.length; i += 3, j += 4) {
      const r = buf[i];
      const g = buf[i + 1];
      const b = buf[i + 2];
      // If pixel is near-white/light (logo background), make transparent
      if (r > 240 && g > 230 && b > 200) {
        rgba[j] = r; rgba[j + 1] = g; rgba[j + 2] = b; rgba[j + 3] = 0; // transparent
      } else {
        rgba[j] = r; rgba[j + 1] = g; rgba[j + 2] = b; rgba[j + 3] = 255; // opaque
      }
    }
    return sharp(rgba, {
      raw: { width: 720, height: 379, channels: 4 }
    })
      .png()
      .toFile('public/assets/logo/logo-navbar.png');
  })
  .then(info => {
    console.log('Navbar logo (transparent) processed:', JSON.stringify(info));
  })
  .catch(err => {
    console.error('Error:', err.message);
  });
