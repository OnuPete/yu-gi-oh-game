'use strict'

const express = require('express');
const app = express();
const scraperController = require('./scraper');

app.get('/', scraperController.getData);

app.listen(8080);

module.exports = app;
