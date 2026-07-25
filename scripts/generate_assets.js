const fs = require('fs');
const path = require('path');

const imgDir = path.join(process.cwd(), 'public', 'images');
const musicDir = path.join(process.cwd(), 'public', 'music');

if (!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });
if (!fs.existsSync(musicDir)) fs.mkdirSync(musicDir, { recursive: true });

function createSvg(title, bg1, bg2, accent) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${bg1}"/>
        <stop offset="100%" stop-color="${bg2}"/>
      </linearGradient>
    </defs>
    <rect width="800" height="800" fill="url(#grad)"/>
    <circle cx="400" cy="400" r="340" fill="none" stroke="${accent}" stroke-width="2" stroke-dasharray="8 8" opacity="0.6"/>
    <circle cx="400" cy="400" r="300" fill="none" stroke="${accent}" stroke-width="3" opacity="0.8"/>
    <path d="M400 320 Q440 260 490 310 T400 450 Q310 360 310 310 T400 320 Z" fill="${accent}" opacity="0.25"/>
    <text x="400" y="520" font-family="serif" font-size="36" font-weight="600" fill="#3D2B1F" text-anchor="middle">${title}</text>
    <text x="400" y="570" font-family="sans-serif" font-size="20" fill="#7A5230" text-anchor="middle">Abiyyu &amp; Alda Wedding</text>
  </svg>`;
}

fs.writeFileSync(path.join(imgDir, 'couple.png'), createSvg('Abiyyu & Alda', '#FAF6F0', '#EFE6D8', '#C5A059'));
fs.writeFileSync(path.join(imgDir, 'couple.jpg'), createSvg('Abiyyu & Alda', '#FAF6F0', '#EFE6D8', '#C5A059'));
fs.writeFileSync(path.join(imgDir, 'groom.jpg'), createSvg('Abiyyu Dzamir Yunas', '#F7F3EC', '#E5DAC9', '#C5A059'));
fs.writeFileSync(path.join(imgDir, 'bride.jpg'), createSvg('Kenti Feoni Alda Sari', '#FBF8F3', '#EDE2D3', '#C5A059'));

for (let i = 1; i <= 6; i++) {
  fs.writeFileSync(path.join(imgDir, `gallery-${i}.jpg`), createSvg(`Galeri Prewedding 0${i}`, '#FAF6F0', '#EAE0CE', '#C5A059'));
}

// Generate silent mp3 frames
const mp3Header = Buffer.from([
  0xFF, 0xFB, 0x90, 0x64, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
]);
const dummyMp3 = Buffer.concat(Array(300).fill(mp3Header));
fs.writeFileSync(path.join(musicDir, 'wedding-song.mp3'), dummyMp3);
console.log('Placeholder media files generated successfully');
