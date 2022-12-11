'use strict';

var quotes = require('./quotes');

module.exports = {
    getRandom: function getRandom(numberOfQuotes) {
        var limit = numberOfQuotes > quotes.length ? quotes.length : numberOfQuotes;
        
        var out = new Array(limit);

        var availableQuotes = quotes.slice();

        for (var i = 0; i < limit; i++) {
            out[i] = availableQuotes.splice(Math.floor(Math.random() * availableQuotes.length), 1)[0];
        }
        
        return out;
    }
};
