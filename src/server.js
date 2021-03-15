const express = require('express');
const path = require('path');

const htmlPath = path.resolve(__dirname, '..','index.html');

const app = express();

app.get( '/', (req, res) => {
  res.sendFile(htmlPath);
});

app.listen( process.env.PORT || 3001 );