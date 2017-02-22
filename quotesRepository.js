'use strict';

var quotes = require('./quotes');

module.exports = {
    getRandom: function getRandom(numberOfQuotes) {
        var limit = numberOfQuotes > quotes.length ? quotes.length : numberOfQuotes;

        var out = new Array(limit);
        var quote;
        var quoteAlreadyUsed;

        for (var i = 0; i < limit; i++) {
            quote = quotes[Math.floor(Math.random() * quotes.length)];
            quoteAlreadyUsed = out.indexOf(quote) > -1;

            while (quoteAlreadyUsed) {
                quote = quotes[Math.floor(Math.random() * quotes.length)];
                quoteAlreadyUsed = out.indexOf(quote) > -1;
            }

            out[i] = quote;
        }

        return out;
    }
};