const sharp = require('sharp');
const path = 'public/assets/logo/logo.png';

sharp(path)
  .resize(24, 24, { fit: 'inside' })
  .toBuffer()
  .then(logoBuf => {
    return sharp({
      create: {
        width: 32,
        height: 32,
        channels: 3,
        background: { r: 237, g: 227, b: 207 }
      }
    })
      .composite([{ input: logoBuf, top: 4, left: 4 }])
      .png()
      .toFile('public/favicon.png');
  })
  .then(info => {
    console.log('Favicon created:', JSON.stringify(info));
  })
  .catch(err => {
    console.error('Error:', err.message);
  });
