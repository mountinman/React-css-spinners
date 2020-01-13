const React = require("react");
const ReactCssSpinners = require("react-css-spinners");
const ReactDOM = require("react-dom/server");
const { Ring } = require("react-css-spinners");

const express = require("express");
const port = 3000;
const app = express();

app.get("/", (req, res) => {
  const el = React.createElement(Ring);
  const html = ReactDOM.renderToString(el);
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
