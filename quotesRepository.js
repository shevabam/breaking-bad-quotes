const quotes = require("./quotes.json");

module.exports = {
  getRandom: function getRandom(numOfQuotes) {
    const limit = numOfQuotes > quotes.length ? quotes.length : numOfQuotes;
    const selectedQuotes = new Array(limit)
      .fill(null)
      .map(() => Math.floor(Math.random() * quotes.length))
      .map((idx) => quotes[idx]);

    return selectedQuotes;
  },
};
