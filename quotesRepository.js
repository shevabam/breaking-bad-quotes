'use strict';

var quotes = require('./quotes');

module.exports = {
    getRandom: function getRandom(numberOfQuotes) {
        var limit = numberOfQuotes > quotes.length ? quotes.length : numberOfQuotes;
        
        var out = new Array(limit);

        // Make a copy of the qoutes array so that we can modify it while not touching the original array.
        var availableQuotes = quotes.slice();

        for (var i = 0; i < limit; i++) {
            // Take away one element from available quotes and assign it to out at position i.
            out[i] = availableQuotes.splice([Math.floor(Math.random() * availableQuotes.length)], 1)[0];
        }
        
        return out;
    }
};
