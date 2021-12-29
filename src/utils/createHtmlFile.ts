import fs from 'fs';

const html = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <title>Kompis</title>
    </head>
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="kompis-root"></div>
    </body>
  </html>
`;

export const createHtmlFile = () => {
  fs.writeFileSync('kompis/index.html', html);
};