const fs = require('fs');
const https = require('https');
const path = require('path');

const dir = './public/images/zonet';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const downloads = [
  { url: 'https://www.zonettech.com/static/zonet-Logo-black.png', name: 'logo-light.png' },
  { url: 'https://www.zonettech.com/static/zonet-Logo-white.png', name: 'logo-dark.png' },
  { url: 'https://www.zonettech.com/static/screenshots%20(1).png', name: 'screenshot-1.png' },
  { url: 'https://www.zonettech.com/static/screenshots%20(2).png', name: 'screenshot-2.png' },
  { url: 'https://www.zonettech.com/static/screenshots%20(3).png', name: 'screenshot-3.png' },
  { url: 'https://www.zonettech.com/static/screenshots%20(4).png', name: 'screenshot-4.png' },
  { url: 'https://www.zonettech.com/static/screenshots%20(5).png', name: 'screenshot-5.png' },
  { url: 'https://www.zonettech.com/static/screenshots%20(6).png', name: 'screenshot-6.png' },
  { url: 'https://www.zonettech.com/static/we.jpg', name: 'article-1.jpg' },
  { url: 'https://www.zonettech.com/static/aiTrends.jpg', name: 'article-2.jpg' },
  { url: 'https://www.zonettech.com/static/javaFrameworks.jpg', name: 'article-3.jpg' },
  { url: 'https://www.zonettech.com/static/RedesignWeb.jpg', name: 'article-4.jpg' },
  { url: 'https://www.zonettech.com/static/whyUx.jpg', name: 'article-5.jpg' },
];

let completed = 0;
downloads.forEach(d => {
  const file = fs.createWriteStream(path.join(dir, d.name));
  https.get(d.url, response => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      completed++;
      if(completed === downloads.length) {
        console.log("All downloaded!");
      }
    });
  });
});
console.log("Downloading images...");
