const express = require('express');
const routes = require('./routes/index');
const bodyParser = require('body-parser');
const cors = require('cors');
const { optionCors } = require('./config/corsConfig');

const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors(optionCors));
app.use('/', routes);

module.exports = app;
