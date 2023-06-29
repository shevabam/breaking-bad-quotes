'use strict';

const express = require('express');
const quotesRepository = require('./quotesRepository');
const app = express();
const port = process.env.PORT || 3001;

app.all('*', function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/v1/quotes/:num?', function (req, res) {
    res.send(quotesRepository.getRandom(req.params.num || 1));
});

app.listen(port, function () {
    console.log('Server running on port', port);
})