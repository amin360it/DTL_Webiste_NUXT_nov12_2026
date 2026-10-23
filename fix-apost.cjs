const fs = require('fs');
let content = fs.readFileSync('app/pages/media.vue', 'utf8');
// Fix all @click="playVideo('...', '...')' patterns where the title has an apostrophe
// Replace playVideo('ID', 'TITLE with apostrophe') with escaped version
content = content.replace(
  /@click="playVideo\('([^']+)', '([^']*'[^']*)'\)"/g,
  (match, id, title) => {
    const escapedTitle = title.replace(/'/g, "\\'");
    return `@click="playVideo('${id}', '${escapedTitle}')"`;
  }
);
fs.writeFileSync('app/pages/media.vue', content);
console.log('Done');
