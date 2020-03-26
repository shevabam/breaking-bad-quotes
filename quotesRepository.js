'use strict';

var quotes = require('./quotes');

module.exports = {
    getRandom: function getRandom(numberOfQuotes) {
        var limit = numberOfQuotes > quotes.length ? quotes.length : numberOfQuotes;

        var out = new Array(limit);
        var quote;

        for (var i = 0; i < limit; i++) {
            do {
                quote = quotes[Math.floor(Math.random() * quotes.length)];
            } while (out.indexOf(quote) > -1);
            out[i] = quote;
        }
        
        return out;
    }
};
