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
    },

    // Get quote by ID, aka its number in the quotes.js array (if valid)
    getById: function getById(id) {
        try {
            if (isNaN(id)) throw new Error('Invalid quote ID - must be a number');
            id = parseInt(id);
            if (id < 0) throw new Error('Invalid quote ID - number must be non-negative');
        }
        catch (e) {
            return { error: e.message };
        }
        let number = id % quotes.length;
        // Insert the quote ID into the object
        // Add a flag to indicate whether number was wrapped around
        return {...quotes[number], number, wrapped: number !== id, };
    },
};
