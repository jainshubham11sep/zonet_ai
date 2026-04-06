const https = require('https');
const fs = require('fs');

https.get('https://www.zonettech.com/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const urls = new Set();
    const imgRegex = /<img[^>]+src=["']([^"']+)["']/g;
    let match;
    while((match = imgRegex.exec(data)) !== null) {
      let u = match[1];
      if(u.startsWith('data:')) continue;
      if(!u.startsWith('http')) {
        u = 'https://www.zonettech.com' + (u.startsWith('/') ? '' : '/') + u;
      }
      urls.add(u);
    }
    const bgRegex = /background-image:\s*url\(['"]?([^'"\)]+)['"]?\)/g;
    while((match = bgRegex.exec(data)) !== null) {
      let u = match[1];
      if(u.startsWith('data:')) continue;
      if(!u.startsWith('http')) {
        u = 'https://www.zonettech.com' + (u.startsWith('/') ? '' : '/') + u;
      }
      urls.add(u);
    }
    fs.writeFileSync('urls_utf8.json', JSON.stringify([...urls], null, 2), 'utf8');
    console.log("Written!");
  });
});
