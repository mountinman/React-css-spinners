const { createElement } = require("react");
const { renderToString } = require("react-dom/server");
const { Ring } = require("react-css-spinners");

const express = require("express");
const port = 3000;
const app = express();

app.get("/", (req, res) => {
  const html = renderToString(createElement(Ring));

  res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Document</title>
    </head>
    <body>
      ${html}
    </body>
    </html>`);
});

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
