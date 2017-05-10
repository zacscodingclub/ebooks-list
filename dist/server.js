const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

app = express();
app.use(serveStatic(__DIRNAME));

const port = process.env.PORT || 5000;
app.list(port);

console.log('server started ' + port);
