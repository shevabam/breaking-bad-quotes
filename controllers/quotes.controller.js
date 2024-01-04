const { response, request } = require('express');

const { quotes, limit } = require('./../data/quotes');

const getRandom = (req = request, res = response) => {
    const numberOfQuotes = req.params.num || 1;
    const top = numberOfQuotes > limit ? limit : numberOfQuotes;
    const out = new Array(top);

    for (let i = 0; i <= top; i++) {
        out[i] = quotes[Math.floor(Math.random() * limit)];
    }

    res.send(out);
}

module.exports = {
    getRandom
}