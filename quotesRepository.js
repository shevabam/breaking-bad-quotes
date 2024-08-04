'use strict';

const quotes = require('./quotes');

module.exports = {
    getRandom: function getRandom(numberOfQuotes) {
        const limit = numberOfQuotes > quotes.length ? quotes.length : numberOfQuotes;
        
        let out = new Array(limit);

        let availableQuotes = quotes.slice();

        for (let i = 0; i < limit; i++) {
            out[i] = availableQuotes.splice(Math.floor(Math.random() * availableQuotes.length), 1)[0];
        }
        
        return out;
    }
};
