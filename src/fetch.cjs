const https = require('https');
https.get('https://www.indosurgicals.com/infant-care-equipment-manufacturer/infant-radiant-warmer/75006-infant-radiant-warmer-with-fixed-baby-cradle-general.php', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => { 
    console.log('----- LISTS -----');
    console.log(data.match(/<ul[^>]*>[\s\S]*?<\/ul>/gi)?.map(m => m.replace(/<[^>]+>/g, '').trim()).join('\n---\n'));
    console.log('----- IMAGES -----');
    console.log(data.match(/<img[^>]+src="([^">]+)"/gi)?.join('\n'));
  });
}).on("error", (err) => { console.log("Error: " + err.message); });
