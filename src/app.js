const express = require('express');
const routes = require('./routes/index');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use('/', routes);

module.exports = app;
