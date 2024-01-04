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

const getById = (req = request, res = response) => {
    const { id } = req.params;
    const _id = id > limit ? limit : id;

    res.send(quotes[_id]);
}

module.exports = {
    getRandom,
    getById
}