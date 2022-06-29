const express = require('express');
const app = express();
const port = 3010;
const path = require('path');
const path = require('path');
const MTProto = require('@mtproto/core');

const api_id = '19841528';
const api_hash = '266be745bc0ed86ff5b5226488cff50a';

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
